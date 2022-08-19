// @flow
import * as React from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';

type Props = {

};
export const Header = (props: Props) => {
    const team = "goliaf";
    return (
        <div className="lg:p-5 h-24 border-b-2 border-gray-600/50 flex flex-row justify-between">
            <div className="flex gap-3 items-center">
                <HiOutlineMenuAlt1 className="text-lg" />
                <p className="text-lg font-light">Team {team}</p>
            </div>
        </div>
    );
};