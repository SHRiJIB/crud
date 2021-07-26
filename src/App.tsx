import UserDetails from "./Pages/UserDetails/UserDetails";
import React from "react";
function App(): JSX.Element {
  console.log(React.useCallback);
  return (
    <>
      <UserDetails />
    </>
  );
}

export default App;
