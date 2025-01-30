import React from "react";
import MyContext from "./MyContext";
import Komponenta1 from "./Komponenta1";

//const App = () => {
//const podatak = {
//tekst: "Ovo je tekst iz Context-a",
// broj: 42,
//};

//return (
//<MyContext.Provider value={podatak}>
//    <div>
//    <h1>React Context API Primjer</h1>
//  <Komponenta1 />
//</div>
//</MyContext.Provider>
//);
//};//
import React, { useState } from "react";

const App = () => {
  const [korisnici, setKorisnici] = useState([
    { id: 1, ime: "Ivan", godine: 25 },
    { id: 2, ime: "Ana", godine: 30 },
  ]);

  const [ime, setIme] = useState("");
  const [godine, setGodine] = useState("");

  // Dodavanje korisnika
  const handleAddUser = (e) => {
    e.preventDefault();
    if (ime.trim() === "" || godine.trim() === "") return;

    const noviKorisnik = {
      id: korisnici.length + 1,
      ime,
      godine: parseInt(godine),
    };

    setKorisnici([...korisnici, noviKorisnik]);
    setIme("");
    setGodine("");
  };

  // Promjena imena korisnika
  const promijeniIme = (id, novoIme) => {
    setKorisnici((prevKorisnici) =>
      prevKorisnici.map((korisnik) =>
        korisnik.id === id ? { ...korisnik, ime: novoIme } : korisnik
      )
    );
  };

  // Povećanje godina korisniku
  const dodajGodinu = (id) => {
    setKorisnici((prevKorisnici) =>
      prevKorisnici.map((korisnik) =>
        korisnik.id === id
          ? { ...korisnik, godine: korisnik.godine + 1 }
          : korisnik
      )
    );
  };

  return (
    <div>
      <h1>Lista korisnika</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
        />
        <input
          type="number"
          placeholder="Godine"
          value={godine}
          onChange={(e) => setGodine(e.target.value)}
        />
        <button type="submit">Dodaj korisnika</button>
      </form>

      <ul>
        {korisnici.map((korisnik) => (
          <li key={korisnik.id}>
            {korisnik.ime} - {korisnik.godine} godina
            <input
              type="text"
              placeholder="Novo ime"
              onChange={(e) => promijeniIme(korisnik.id, e.target.value)}
            />
            <button onClick={() => dodajGodinu(korisnik.id)}>+1 godina</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
