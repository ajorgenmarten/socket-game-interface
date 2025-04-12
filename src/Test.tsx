import { useEffect, useState } from "react"
import { io } from "socket.io-client"

const socket = io(import.meta.env.VITE_BACKEND_URL, {
    autoConnect: false,
    withCredentials: true,
    transports: ["websocket"],
})

socket.connect()

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
    ERROR: 'error',
};

function CreateGame(code: string) {
    socket.emit("create-game", code)
}

function JoinGame(code: string) {
    socket.emit("join-game", code)
}

function SetNumber(code: string, number: string) {
    socket.emit('set-number', { code, number })
}

function TestNumber(code: string, number: string) {
    socket.emit('test-number', { code, number })
}

export function TestSocketComponent() {
    const { gameCode, gameReady, isMyTurn, createGame, joinGame, setNumber, notes, numberSetted, testNumber } = useHook()
    return <div className="w-lg mx-auto py-8">
        { gameCode && <h1 className="text-center text-2xl text-success font-extrabold">Codigo de la partida: {gameCode}</h1>}
        { !gameCode && <form action="" onSubmit={createGame}>
            <h1>Crear partida</h1>
            <input className="input w-full" type="text" placeholder="code" name="code" required />
            <button className="btn btn-success my-2 px-8">enviar</button>
        </form>}
        <hr className="my-5" />
        { !gameCode && <form action="" onSubmit={joinGame}>
            <h1>Unirse a partida</h1>
            <input className="input w-full" type="text" placeholder="code" name="code" required />
            <button className="btn btn-success my-2 px-8">enviar</button>
        </form>}
        <hr className="my-5" />
        { !numberSetted && gameCode && !gameReady && <form action="" onSubmit={setNumber}>
            <h1>Establecer numero</h1>
            <input className="input w-full" type="text" placeholder="number" name="number" required />
            <button className="btn btn-success my-2 px-8">enviar</button>
        </form>}
        { numberSetted && gameCode && !gameReady && <h1 className="text-2xl text-rose-400 font-bold">Esperando por el rival</h1> }
        <hr className="my-5" />
        { numberSetted && gameReady && !isMyTurn && <h1 className="text-2xl text-rose-400 font-bold">Es turno del rival</h1>  }
        { numberSetted && gameReady && isMyTurn &&  <form action="" onSubmit={testNumber}>
            <h1>Adivinar numero</h1>
            <input className="input w-full" type="text" placeholder="number" name="number" required />
            <button className="btn btn-success my-2 px-8">enviar</button>
        </form> }
       
        <table className="table">
            <thead>
                <tr>
                    <th>Numero</th>
                    <th>asserts</th>
                </tr>
            </thead>
            <tbody>
                {notes.map(([number, asserts]) => (
                    <tr key={number}>
                        <td>{number}</td>
                        <td>{asserts} { asserts == 0 ? "❌" : "✅" } </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

type Note = [string, number]

function useHook() {
    const [status, setStatus] = useState<string>("0")
    const [gameCode, setGameCode] = useState("")
    const [numberSetted, setNumberSetted] = useState(false)
    const [gameReady, setGameReady] = useState(false)
    const [isMyTurn, setIsMyTurn] = useState(false)
    const [notes, setNotes] = useState<Note[]>([])

    function down() {
        setGameCode("")
        setNumberSetted(false)
        setGameReady(false)
        setIsMyTurn(false)
        setNotes([])
    }
    
    function createGame(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const code = e.currentTarget.code.value
        CreateGame(code)
    }

    function joinGame(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const code = e.currentTarget.code.value
        JoinGame(code)
    }

    function setNumber(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const number = e.currentTarget.number.value
        SetNumber(gameCode, number)
    }

    function testNumber(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const number = e.currentTarget.number.value
        TestNumber(gameCode, number)
    }

    useEffect(() => {
        socket.on(SOCKET_LISTEN_EVENTS.ONLINE_STATUS, (status: string) => { setStatus(status) })
        socket.on(SOCKET_LISTEN_EVENTS.GAME_CREATED, (code: string) => { setGameCode(code); setIsMyTurn(true) })
        socket.on(SOCKET_LISTEN_EVENTS.WAIT_TIMEOUT, () => { down() })
        socket.on(SOCKET_LISTEN_EVENTS.JOINED_TO_GAME, ({gameCode}: { gameCode: string }) => { setGameCode(gameCode) })
        socket.on(SOCKET_LISTEN_EVENTS.RIVAL_DISCONNECTED, () => { down() })
        socket.on(SOCKET_LISTEN_EVENTS.NUMBER_SETTED, () => { setNumberSetted(true) })
        socket.on(SOCKET_LISTEN_EVENTS.GAME_READY, () => { setGameReady(true); setNumberSetted(true) })
        socket.on(SOCKET_LISTEN_EVENTS.HAS_PLAYED, ({ asserts, number, youTurn }: { asserts: number, number: string, youTurn: boolean }) => { 
            if (isMyTurn) setNotes([...notes, [number, asserts]])
            setIsMyTurn(youTurn)
         })
        socket.on(SOCKET_LISTEN_EVENTS.WINNER, () => {
            alert(`Le has ganado al otro punto`)
            down()
        })
        socket.on(SOCKET_LISTEN_EVENTS.GAME_OVER, () => {
            alert(`Has perdido, eres un punto`)
            down()
        })
        socket.on(SOCKET_LISTEN_EVENTS.ERROR, (data) => { console.log(data) })
        return () => {
            for(const event of Object.values(SOCKET_LISTEN_EVENTS)) 
                socket.off(event)
        }
    }, [status, isMyTurn, numberSetted, gameReady, gameCode, notes])

    useEffect(() => {
        console.log(status, isMyTurn, numberSetted, gameReady, gameCode, notes)
    }, [status, isMyTurn, numberSetted, gameReady, gameCode, notes])

    return { gameCode, isMyTurn, notes, gameReady, numberSetted, createGame, joinGame, setNumber, testNumber }
}