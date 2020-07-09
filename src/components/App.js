import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";
import LanguageSeletor from "./LanguageSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSeletor />
          <ColorContext.Provider value={"red"}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

// TO NOTE :
// LanguageContext.Provider has the special property "value" which lets
// the changed value of context object is updated and then passed

// <LanguageContext.Provider value={this.state.language}>
//           <UserCreate />
//         </LanguageContext.Provider>
// everytime we use this it creates a new pipe, i.e., if we
// do it twice with two different values, both will have their own values
// and not change for each other

// if we do not provide Provider over UserCreate, it will always have default value

// sequence of Provider wrapping UserCreate here does not matter
export default App;
