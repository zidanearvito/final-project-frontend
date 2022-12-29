import React, { useState } from "react";
import Navigation from "../../Header/Navigation";
import PassForm from "./components/PassForm";
import LoadPage from "../../UI/LoadPage";

const InputIndex = () => {
  const [load, setLoad] = useState(true);
  setInterval(function () {
    setLoad(false);
  }, 700);
  return (
    <>
      {load ? (
        <LoadPage />
      ) : (
        <>
          <Navigation />
          <PassForm />
        </>
      )}
    </>
  );
};

export default InputIndex;
