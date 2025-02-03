'use client';

import { useState } from "react";
import Background from "../../components/background/background";
import style from './LandingSegment.module.scss';
export default function LandingSegment(){

    const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

    const handleBackgroundLoad = () => {
        setIsBackgroundLoaded(true);
    };

    return (<>
        <section id={style.landing_segment}>
            <Background parentID={style.landing_segment} onLoad={handleBackgroundLoad}/>
            <img src="./monochrome_noise_2k.png" alt="Monochrome Noise" id={style.monochrome_image}/>

            {   isBackgroundLoaded &&
                <>
                    <h1 id={style.name}>Luka</h1>
                    <h1 id={style.surname}>Ivelić</h1>
                    <p id={style.cs_undergraduate}>A Computer Science undergraduate specializing in frontend development.</p>
                    <div className={style.showcase} id={style.showcase_profession}>
                        <h2>Digital Producer</h2>
                        <p>Precision-Driven<br></br>Creative Solutions</p>
                    </div>
                    <div className={style.showcase} id={style.showcase_update}>
                        <h2>Last updated</h2>
                        <p>Jan 2025</p>
                    </div>
                    <p id={style.scroll_indicator}>Scroll Down</p>
                </>
            }
        </section>
    </>);
}