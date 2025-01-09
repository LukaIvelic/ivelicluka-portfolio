'use client';

import { useState } from 'react';
import style from './Header.module.scss';

export default function Header(){

    var [time, setTime] = useState(null);
    var interval = setInterval(() => {
        var date = new Date(Date.now());
        setTime(
            <>
                {date.getHours()}<span className={style.tick_item} id={style.clock_separator}> : </span>{date.getMinutes()}
            </>
        );
    }, 10);

    return(<>
        <header id={style.header}>
            <div id={style.time_section}>
                <h4 id={style.time_name}>Zagreb</h4>
                <p id={style.time}>{time}</p>
            </div>
            <div id={style.menu}>
                <svg>                    
                    <rect x="15" y="45" width="70" height="2"></rect>
                    <rect x="15" y="50" width="70" height="2"></rect>
                </svg>
            </div>
        </header>
    </>);
}