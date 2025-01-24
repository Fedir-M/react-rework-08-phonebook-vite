import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <BarLoader color="#069fa7" height={18} speedMultiplier={1} width={200}  cssOverride={{
      display: "block",
      margin: "0 auto",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}/>
  );
};

export default Loader;
