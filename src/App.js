import React from "react";
import Main from "./components/Main";
import { GlobalProvider } from "./components/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}

export default App;
