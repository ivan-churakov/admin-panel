import React, {createContext, useState} from 'react';

export const MenuContext = createContext([false, () => {}]);

const NavState = ({children}: any) => {
    const [isMenuOpen, toggleMenu] = useState<boolean>(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }

    return (
        <MenuContext.Provider value={[isMenuOpen, toggleMenuMode]}>{children}</MenuContext.Provider>
    );
};
export default NavState;