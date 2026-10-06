import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "./Snackbar.scss";
import { closeMessage } from "../redux/reducers/messageSlice";

const SnackBar = () => {
  const message = useAppSelector((state) => state.message.message);
  const messageType = useAppSelector((state) => state.message.messageType);
  const visible = useAppSelector((state) => state.message.messageVisible);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        dispatch(closeMessage());
      }, 5000);
    }
  }, [visible, dispatch]);

  return visible ? (
    <div className="snack-bar-container">
      <div className={`snack-bar ${messageType} ${visible ? "show" : ""}`}>
        {message}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SnackBar;
