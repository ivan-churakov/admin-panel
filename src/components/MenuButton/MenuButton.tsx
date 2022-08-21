import React, { useContext } from 'react';
import { MenuContext } from '../NavState/NavState';
import {HiOutlineMenuAlt1} from "react-icons/hi";
import classNames from "classnames";

const MenuButton = () => {
    const [ isMenuOpen, toggleMenuMode ]:any = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };

    let menuClass = classNames('text-lg')

    return (
        <>
            <HiOutlineMenuAlt1 className={isMenuOpen ? `active ${menuClass}` : menuClass} onClick={clickHandler} />
        </>
    );
};

export default MenuButton;