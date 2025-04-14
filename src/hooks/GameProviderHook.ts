/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useEffect, useState } from "react";
import { socket } from "../socket";
import { useNavigate } from "react-router";

const SOCKET_LISTEN_EVENTS = {
    GAME_CREATED: 'game-created',
    ONLINE_STATUS: 'online-status',
    WAIT_TIMEOUT: 'wait-timeout',
    RIVAL_DISCONNECTED: 'rival-disconnected',
    GAME_READY: 'game-ready',
    NUMBER_SETTED: 'number-setted',
    JOINED_TO_GAME: 'joined-to-game',
    GAME_OVER: 'game-over',
    WINNER: 'winner',
    HAS_PLAYED: 'has-played',
    GAME_FINISHED: 'game-finished',
    RIVAL_HAS_FINISHED_GAME: 'rival-has-finished-game',
    ERROR: 'error',
};

const SOCKET_EMIT_EVENTS = {
    CREATE_GAME: 'create-game',
    JOIN_GAME: 'join-game',
    SET_NUMBER: 'set-number',
    TEST_NUMBER: 'test-number',
    FINISH_GAME: 'finish-game',
}

export function useGameProviderHook() {
    const navigate = useNavigate();

    const [activePlayers, setActivePlayers] = useState("0");
    const [gameCode, setGameCode] = useState("");
    const [gameFull, setGameFull] = useState(false);
    const [numberIsSetted, setNumberIsSetted] = useState(false);
    const [myNumber, setMyNumber] = useState("");
    const [gameIsReady, setGameIsReady] = useState(false);
    const [isMyTurn, setIsMyTurn] = useState(false);
    const [notes, setNotes] = useState<Note[]>([]);
    const [rivalNotes, setRivalNotes] = useState<Note[]>([])

    function reset() {
        setGameCode(() => "")
        setGameFull(() => false)
        setGameIsReady(() => false)
        setNumberIsSetted(() => false)
        setMyNumber(() => "")
        setIsMyTurn(() => false)
        setNotes(() => [])
        setRivalNotes(() => [])
    }

    function createGame(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const code = e.currentTarget.code.value;
        socket.emit(SOCKET_EMIT_EVENTS.CREATE_GAME, code)
    }
    function joinGame(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const code = e.currentTarget.code.value;
        socket.emit(SOCKET_EMIT_EVENTS.JOIN_GAME, code)
    }
    function setNumber(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const number = e.currentTarget.number.value;
        socket.emit(SOCKET_EMIT_EVENTS.SET_NUMBER, { code: gameCode, number })
        setMyNumber(() => number)
    }
    function testNumber(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!isMyTurn) return;
        const number = e.currentTarget.number.value;
        socket.emit(SOCKET_EMIT_EVENTS.TEST_NUMBER, { code: gameCode, number })
    }
    function finishGame() {
        socket.emit(SOCKET_EMIT_EVENTS.FINISH_GAME, gameCode)
    }

    /* LISTENNERS OF SOCKET */
    function listenOnlineStatus(status: string) {
        setActivePlayers(() => status)
    }
    function listenGameCreated(code: string) {
        setGameCode(() => code)
        setIsMyTurn(() => true)
    }
    function listenWaitTimeout() {
        setGameCode(() => "")
        navigate('/')
    }
    function listenGameJoined(data: JoinedGameResponse) {
        if (!gameCode)
            setGameCode(() => data.gameCode)
        setGameFull(() => true)
        navigate('/set-number')
    }
    function listenRivalDisconnected() {
        reset()
        navigate('/')
    }
    function listenNumberSetted() {
        setNumberIsSetted(() => true)
    }
    function listenGameReady() {
        setGameIsReady(() => true)
        navigate('/game')
    }
    function listenHasPlayed(data: HasPlayedResponse) {
        if (data.youTurn == false) {
            setNotes((prev) => [...prev, [data.number, data.asserts]])
        } else {
            setRivalNotes((prev) => [...prev, [data.number, data.asserts]])
        }
        setIsMyTurn(() => data.youTurn)
    }
    function listenGameOver() {
        reset()
        navigate('/losser')
    }
    function listenWinner() {
        reset()
        navigate('/winner')
    }
    function listenGameFinished() {
        reset()
        navigate('/')
    }
    function listenRivalHasFinishedGame() {
        alert(`El rival a finalizado la partida`)
        reset()
        navigate('/')
    }
    function listenError(error: ErrorResponse) {
        alert(error.message)
        if (error.from == SOCKET_EMIT_EVENTS.JOIN_GAME) {
            reset()
            return navigate('/')
        }
    }
    useEffect(() => {
        socket.on(SOCKET_LISTEN_EVENTS.ONLINE_STATUS, listenOnlineStatus)
        socket.on(SOCKET_LISTEN_EVENTS.GAME_CREATED, listenGameCreated)
        socket.on(SOCKET_LISTEN_EVENTS.WAIT_TIMEOUT, listenWaitTimeout)
        socket.on(SOCKET_LISTEN_EVENTS.JOINED_TO_GAME, listenGameJoined)
        socket.on(SOCKET_LISTEN_EVENTS.RIVAL_DISCONNECTED, listenRivalDisconnected)
        socket.on(SOCKET_LISTEN_EVENTS.NUMBER_SETTED, listenNumberSetted)
        socket.on(SOCKET_LISTEN_EVENTS.GAME_READY, listenGameReady)
        socket.on(SOCKET_LISTEN_EVENTS.HAS_PLAYED, listenHasPlayed)
        socket.on(SOCKET_LISTEN_EVENTS.GAME_OVER, listenGameOver)
        socket.on(SOCKET_LISTEN_EVENTS.WINNER, listenWinner)
        socket.on(SOCKET_LISTEN_EVENTS.GAME_FINISHED, listenGameFinished)
        socket.on(SOCKET_LISTEN_EVENTS.RIVAL_HAS_FINISHED_GAME, listenRivalHasFinishedGame)
        socket.on(SOCKET_LISTEN_EVENTS.ERROR, listenError)
        return () => {
            for(const event in Object.keys(SOCKET_LISTEN_EVENTS)) socket.off(event)
        }
    }, [])
    
    return { gameCode, gameFull, activePlayers, numberIsSetted, myNumber, gameIsReady, isMyTurn, notes, rivalNotes, createGame, joinGame, setNumber, testNumber, finishGame }
}

/**
 * Representa una nota en el juego, donde
 * la primera posición es el número con el
 * que probaste y la segunda posición es la
 * cantidad de aciertos
 * @type {[string, number]}
 */
type Note = [string, number]

/**
 * Representa una respuesta de error en el juego,
 * esta respuesta de error es enviada desde el
 * servidor por socket
 */
type ErrorResponse = {
    /**
     * El mensaja del error
     */
    message: string,
    /**
     * Especifica de que evento viene este error
     */
    from: string,
    /**
     * Datos adicionales agregados a la respuesta
     * de error
     */
    data?: any
}

type JoinedGameResponse = {
    gameCode: string,
}

type HasPlayedResponse = {
    asserts: number,
    number: string,
    youTurn: boolean,
}