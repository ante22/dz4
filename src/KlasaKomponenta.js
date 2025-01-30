import React, { Component } from "react";
import MyContext from "./MyContext";

class KlasaKomponenta extends Component {
  static contextType = MyContext;

  render() {
    return (
      <div>
        <h2>Klasa Komponenta</h2>
        <p>Tekst iz Context-a: {this.context.tekst}</p>
        <p>Broj iz Context-a: {this.context.broj}</p>
      </div>
    );
  }
}

export default KlasaKomponenta;
