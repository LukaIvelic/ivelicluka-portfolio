'use client';

import { useEffect, useState } from 'react';
import style from './Header.module.scss';
import Lenis from 'lenis';

export default function Header(){

    var [lenis, setLenis] = useState(null);
    useEffect(()=>{
        setLenis(new Lenis({
            autoRaf: true,
            lerp: 0.075,
            // wheelMultiplier: 0.85
            wheelMultiplier: 1.5
        }));
    },[]);

    var [time, setTime] = useState(null);
    setInterval(() => {
        var date = new Date(Date.now());
        setTime(
            <>
                {date.getHours()}<span className={style.tick_item} id={style.clock_separator}> : </span>{date.getMinutes().toString().padStart(2, '0')}
            </>
        );
    }, 10);

    const menu = <>
        <div id={style.page_menu}>
            <ul>
                <li id={style.page_menu_about}>
                    <h1>About</h1>
                    <p>A little about me</p>
                </li>
                <li id={style.page_menu_education}>
                    <h1>Education</h1>
                    <p>How I'm progressing</p>
                </li>
                <li id={style.page_menu_expertise}>
                    <h1>Expertise</h1>
                    <p>What I excel at</p>
                </li>
                <li id={style.page_menu_prototypes}>
                    <h1>Prototypes</h1>
                    <p>What I enjoy doing</p>
                </li>
            </ul>
        </div>
    </>;

    var [menuState, setMenuState] = useState(false);
    const handleMenuClick = () =>{
        var lines = document.getElementById(style.lines);
        var menu = document.getElementById(style.page_menu);

        if(menuState === false){
            menu.style.left = "0%";

            lines.children[0].style.transform = "translate(0px, 0.2vw) rotate(-90deg)";

            document.documentElement.style.margin = "0";
            document.documentElement.style.height = "100%";
            document.documentElement.style.overflowY = "hidden";

            lenis.stop();
        }else{
            menu.style.left = "100%";

            lines.children[0].style.transform = "translate(0px, 0px) rotate(0deg)";

            document.documentElement.style.overflowX = "hidden";
            document.documentElement.style.overflowY = "scroll";

            lenis.start();
        }

        console.log(lenis)

        setMenuState(!menuState);
    }

    return(<>
        <header id={style.header}>
            <div id={style.time_section}>
                <h4 id={style.time_name}>Zagreb</h4>
                <p id={style.time}>{time}</p>
            </div>
            <div id={style.menu} onClick={handleMenuClick}>
                <div id={style.lines}>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                </div>
            </div>
        </header>
        {menu}
    </>);
}