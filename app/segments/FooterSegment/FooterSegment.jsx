'use client';

import style from './FooterSegment.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function FooterSegment(){
    useEffect(()=>{
        if(typeof window === "undefined") return;

        let arrayOfElementIds = [style.get_in_touch, style.socials, style.haiku];
        arrayOfElementIds.forEach((id)=>{
            gsap.fromTo(`#${id}`,
                {
                    y: 150
                    // y: 0
                },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: `#${style.footer_segment}`,
                        scrub: 0.15,
                    },
                    delay: 2
                }
            );
        });
    }, [])
    return (<>
        <footer id={style.footer_segment}>
            <div id={style.transition_div}></div>

            <h1 id={style.get_in_touch}>
                <a href="mailto:ivelicworks@gmail.com">
                    Get in touch
                </a>
            </h1>
            <ul id={style.socials}>
                <li>
                    <a href="https://www.linkedin.com/in/luka-iveli%C4%87-b55074227/">
                        LinkedIn <img src="./link.svg" alt="link icon" width={35} height={35}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LukaIvelic">
                        Github <img src="./link.svg" alt="link icon" width={35} height={35}/>
                    </a>
                </li>
                <li>
                    <a href="mailto:ivelicworks@gmail.com">
                        Mail <img src="./link.svg" alt="link icon" width={35} height={35}/>
                    </a>
                </li>
            </ul>

            <p id={style.haiku}>
                <span>
                    I write, erase, rewrite
                    Erase again, and then
                    A poppy blooms.
                </span>
                <span>Katsushika Hokusai</span>
            </p>
            
            <h4 id={style.copyright}>&copy; {new Date().getFullYear()}. Luka Ivelić</h4>
        </footer>
    </>);
}