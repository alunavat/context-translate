import React from "react";
import LanguageContext from "../contexts/LanguageContexts";

class Field extends React.Component {
  // this is a special property name contextType
  // this adds this propety to our class (Field.contextType)

  static contextType = LanguageContext;

  render() {
    const text = this.context.language === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
