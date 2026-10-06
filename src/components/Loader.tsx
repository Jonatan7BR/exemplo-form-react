import { useAppSelector } from "../redux/hooks";
import "./Loader.scss";

const Loader = () => {
  const visible = useAppSelector((state) => state.loader.loading);

  return visible ? (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  ) : (
    <></>
  );
};

export default Loader;
