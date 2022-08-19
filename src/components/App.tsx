import React from 'react';
import {Header} from "./Header/Header";
import {Account} from "./Account/Account";
import {Main} from "./Main/Main";
import {Activity} from "./Activity/Activity";

function App() {
  return (
    <div className="text-white grid grid-cols-12 w-full h-full" style={{background: "linear-gradient(119.63deg, #242931 0%, #243437 23.44%, #000000 66.76%)"}}>
        <div className="col-span-10">
            <Header />
            <Main />
        </div>
        <div className="col-span-2">
            <Account />
            <Activity />
        </div>
    </div>
  );
}

export default App;
