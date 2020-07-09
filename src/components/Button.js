import React from "react";
import LanguageContext from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) =>
                language === "english" ? "Submit" : "Voorloggen"
              }
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

// static contextType = LanguageContext;
// const text = this.context === "english" ? "Submit" : "Voorleggen";
// old code

//Consumer is required when we want to pick from two or more
// contexts. Here as an example we have added color

//In Color Consumer we named variable in function as color because value
// was already used in Language Consumer

// A way to cleanup would be move button code into a helper function
