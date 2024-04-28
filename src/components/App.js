import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark, setIsDark] = useState(false);

  const appClass = isDark ? "App Dark" : "App Light";

  function setMode(){
    setIsDark((isDark) => !isDark);
  }
  return (
    
    <div className={appClass}>
      
      <header>
        <h2>Shopster</h2>
        <button onClick={setMode}>{isDark ? "App Dark" : "App Light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
