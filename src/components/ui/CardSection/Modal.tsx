export function Modal(props: ModalProps) {
  return (
    <div>
      <input type="checkbox" id={props.id} className={`peer`} hidden />
      <div className="items-center justify-center fixed h-screen w-screen hidden peer-checked:flex z-[99] top-0 left-0">
        <label
          htmlFor={props.id}
          className="absolute w-full h-full backdrop-blur-sm bg-white/10 flex items-center justify-center modal-backdrop"
        >
        </label>
        <div className="relative">
          {props.children}
        </div>
      </div>
    </div>
  );
}

interface ModalProps {
    id: string;
    children?: React.ReactNode
}
