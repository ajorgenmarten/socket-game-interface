export function Modal(props: IModalProps) {
    return (
      <dialog id={props.id} className="modal">
        <div className="modal-box">{props.children}</div>
      </dialog>
    );
}

interface IModalProps {
    children: React.ReactNode;
    id: string;
}