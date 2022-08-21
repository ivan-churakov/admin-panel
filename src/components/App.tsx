import React from 'react';
import {Header} from "./Header/Header";
import {Account} from "./Account/Account";
import {Main} from "./Main/Main";
import {Activity} from "./Activity/Activity";
import {SideMenu} from "./SideMenu/SideMenu";
import NavState from "./NavState/NavState";

function App() {
  return (
    <div className="text-white grid grid-cols-12 w-full h-full" style={{background: "linear-gradient(119.63deg, #242931 0%, #243437 23.44%, #000000 66.76%)"}}>
        <NavState>
            <SideMenu>
                <Header/>
                <div className="flex flex-col">
                    <a href="/" className="relative text-lg pb-1 ml-5 m-1 w-fit before:block before:absolute before:w-full before:h-[2px] before:rounded-md before:bg-white before:bottom-0 before:left-0 before:origin-right before:scale-0 before:transition-transform hover:before:origin-left hover:before:scale-x-[1px]">Главная</a>
                    <a href="/" className="relative text-lg pb-1 ml-5 m-1 w-fit before:block before:absolute before:w-full before:h-[2px] before:rounded-md before:bg-white before:bottom-0 before:left-0 before:origin-right before:scale-0 before:transition-transform hover:before:origin-left hover:before:scale-x-[1px]">Дашборд</a>
                    <a href="/" className="relative text-lg pb-1 ml-5 m-1 w-fit before:block before:absolute before:w-full before:h-[2px] before:rounded-md before:bg-white before:bottom-0 before:left-0 before:origin-right before:scale-0 before:transition-transform hover:before:origin-left hover:before:scale-x-[1px]">Календарь</a>
                    <a href="/" className="relative text-lg pb-1 ml-5 m-1 w-fit before:block before:absolute before:w-full before:h-[2px] before:rounded-md before:bg-white before:bottom-0 before:left-0 before:origin-right before:scale-0 before:transition-transform hover:before:origin-left hover:before:scale-x-[1px]">Команда</a>
                    <a href="/" className="relative text-lg pb-1 ml-5 m-1 w-fit before:block before:absolute before:w-full before:h-[2px] before:rounded-md before:bg-white before:bottom-0 before:left-0 before:origin-right before:scale-0 before:transition-transform hover:before:origin-left hover:before:scale-x-[1px]">Настройки</a>
                </div>
            </SideMenu>
            <div className="col-span-10">
                <Header />
                <Main />
            </div>
        </NavState>
        <div className="col-span-2">
            <Account />
            <Activity />
        </div>
    </div>
  );
}

export default App;
