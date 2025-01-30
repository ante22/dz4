import React, { useContext } from "react";
import MyContext from "./MyContext";
import KlasaKomponenta from "./KlasaKomponenta";

const Komponenta4 = () => {
  const { tekst, broj } = useContext(MyContext);

  return (
    <div>
      <h2>Komponenta 4 (Consumer)</h2>
      <p>Tekst iz Context-a: {tekst}</p>
      <p>Broj iz Context-a: {broj}</p>
      <KlasaKomponenta />
    </div>
  );
};

export default Komponenta4;
