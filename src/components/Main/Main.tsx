// @flow
import * as React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import {useState} from "react";

type Props = {

};
export const Main = (props: Props) => {
    const [date, setDate] = useState(new Date());
    return (
        <div className="w-full h-[calc(100%-6rem)] p-5">
            <Calendar onChange={setDate} value={date} />
        </div>
    );
};