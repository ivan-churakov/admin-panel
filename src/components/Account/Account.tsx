// @flow
import * as React from 'react';
import {VscAccount} from 'react-icons/vsc';

type Props = {

};
export const Account = (props: Props) => {
    return (
        <div className="flex gap-3 items-center border-b-2 border-l-2 border-gray-600/50 p-5 h-24">
            <VscAccount className="w-8 h-8" />
            <p className="text-lg">Account523454</p>
        </div>
    );
};