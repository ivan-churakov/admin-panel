import React, { useContext } from 'react';
import { MenuContext } from '../NavState/NavState';
import classNames from "classnames";

export const SideMenu = ({ children }: any) => {
    const [ isMenuOpen ] = useContext(MenuContext);

    let open = classNames('absolute top-0 left-0 bottom-0 w-56 bg-black/10 border-r-2 border-gray-600/50 transition opacity-100');
    let close = classNames('absolute top-0 left-0 bottom-0 w-56 bg-black/10 border-r-2 border-gray-600/50 transition opacity-0')
    let menuClass = classNames(isMenuOpen ? open : close);

    return (
        <div className={menuClass}>
            {children}
        </div>
        // <Menu open={isMenuOpen}>{children}</Menu>
    )
};