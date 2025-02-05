'use client';

import { useEffect, useState } from 'react';
import style from './Header.module.scss';
import Lenis from 'lenis';

import styleAboutSegment from '../../segments/AboutSegment/AboutSegment.module.scss';
import styleEducationSegment from '../../segments/EducationSegment/EducationSegment.module.scss';
import styleExpertiseSegment from '../../segments/ExpertiseSegment/ExpertiseSegment.module.scss';
export default function Header(){

    var [lenis, setLenis] = useState(null);

    useEffect(()=>{
        const lenisInstance = new Lenis({
            autoRaf: true,
            lerp: 0.075,
            wheelMultiplier: 1.5
        });
        setLenis(lenisInstance);

        return () => lenisInstance.destroy();
    },[]);

    var [time, setTime] = useState(null);
    useEffect(()=>{
        let interval = setInterval(() => {
            var date = new Date(Date.now());
            setTime(
                <>
                    {date.getHours().toString().padStart(2, '0')}<span className={style.tick_item} id={style.clock_separator}> : </span>{date.getMinutes().toString().padStart(2, '0')}
                </>
            );
        }, 1000);

        return () => {clearInterval(interval)}
    }, []);

    var handleMenuChoiceClick = (e) => {
        var statement = e.target.offsetParent.id;
        switch(statement){
            case style.page_menu_about:
                handleMenuClick();
                document.getElementById(styleAboutSegment.about_segment).scrollIntoView({behavior: 'smooth'});
                break;
            case style.page_menu_education:
                handleMenuClick();
                document.getElementById(styleEducationSegment.education_segment).scrollIntoView({behavior: 'smooth'});
                break;
            case style.page_menu_expertise:
                handleMenuClick();
                document.getElementById(styleExpertiseSegment.expertise_segment).scrollIntoView({behavior: 'smooth'});
                break;
            case style.page_menu_prototypes:
                break;
        }
    };

    const menu = <>
        <div id={style.page_menu}>
            <ul>
                <li id={style.page_menu_about}>
                    <h1 onClick={handleMenuChoiceClick}>About</h1>
                    <p>A little about me</p>
                </li>
                <li id={style.page_menu_education}>
                    <h1 onClick={handleMenuChoiceClick}>Education</h1>
                    <p>How I'm progressing</p>
                </li>
                <li id={style.page_menu_expertise}>
                    <h1 onClick={handleMenuChoiceClick}>Expertise</h1>
                    <p>What I excel at</p>
                </li>
                <li id={style.page_menu_prototypes}>
                    <h1 onClick={handleMenuChoiceClick}>Prototypes</h1>
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
            menu.style.borderRadius = "0%";
            menu.style.width = "100%";

            lines.children[0].style.transform = "translate(0px, 0.2vw) rotate(-90deg)";

            document.documentElement.style.margin = "0";
            document.documentElement.style.height = "100%";
            document.documentElement.style.overflowY = "hidden";

            lenis.stop();
        }else{
            menu.style.left = "100%";
            menu.style.borderRadius = "20%";
            menu.style.width = "50%";
            
            lines.children[0].style.transform = "translate(0px, 0px) rotate(0deg)";

            document.documentElement.style.overflowX = "hidden";
            document.documentElement.style.overflowY = "scroll";

            lenis.start();
        }

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