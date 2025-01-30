import React from "react";
import MyContext from "./MyContext";
import Komponenta1 from "./Komponenta1";

const App = () => {
  const podatak = {
    tekst: "Ovo je tekst iz Context-a",
    broj: 42,
  };

  return (
    <MyContext.Provider value={podatak}>
      <div>
        <h1>React Context API Primjer</h1>
        <Komponenta1 />
      </div>
    </MyContext.Provider>
  );
};

export default App;
