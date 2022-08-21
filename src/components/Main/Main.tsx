// @flow
import * as React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import {useContext, useState} from "react";
import {MenuContext} from "../NavState/NavState";
import classNames from "classnames";

type Props = {

};
export const Main = (props: Props) => {
    const [date, setDate] = useState(new Date());
    const [ isMenuOpen ] = useContext(MenuContext);

    let mainClass = classNames('flex flex-wrap gap-6 h-[calc(100%-6rem)] p-5 ml-56 transition')
    return (
        <div className={isMenuOpen ? mainClass : 'flex flex-wrap gap-6 h-[calc(100%-6rem)] p-5 transition'}>
            <Calendar onChange={setDate} value={date} selectRange={true} />
        </div>
    );
};