//CSS
import "./Modal.sass";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
    const closeModal = (): void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")
    }
  return (
    <div id="modal" className="hide">
      <div className="fade" onClick={closeModal}></div>
      <div className="modal">
        <h2>Editar Tarefa</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
