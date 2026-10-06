import "./ConfirmModal.scss";

interface Props {
  visible: boolean;
  dialogText: string;
  confirm: (confirmed: boolean) => void | Promise<void>;
}

const ConfirmModal = (props: Props) => {
  const { visible, dialogText, confirm } = props;

  return visible ? (
    <div className="modal-container">
      <div className="modal">
        <p>{dialogText}</p>
        <div className="button-row">
          <button type="button" onClick={() => confirm(true)}>
            Sim
          </button>
          <button type="button" onClick={() => confirm(false)}>
            Não
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ConfirmModal;
