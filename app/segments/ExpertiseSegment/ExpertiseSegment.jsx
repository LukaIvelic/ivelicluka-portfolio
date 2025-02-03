'use client';

import style from './ExpertiseSegment.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function ExpertiseSegment(){

    useEffect(()=>{
        if(typeof window === "undefined") return;

        let arrayOfElementIds = [style.notation, style.paragraph, style.expertise];
        arrayOfElementIds.forEach((id)=>{
            gsap.fromTo(`#${id}`,
                {
                    // opacity: 0.25,
                    y: 100
                },
                {
                    // opacity: 1,
                    y: -160,
                    scrollTrigger: {
                        trigger: `#${style.expertise_segment}`,
                        scrub: 0.15,
                    },
                    willChange: "transform",
                }
            );
        });
    }, [])

    return (<>
        <section id={style.expertise_segment}>
            <h1 id={style.notation}>Expertise</h1>
            <ul id={style.expertise}>
                <li>/1/ User Experience</li>
                <li>/2/ Web Development</li>
                <li>/3/ Motion Graphics</li>
                <li>/4/ Backend Development</li>
                <li>/5/ .NET Core</li>
            </ul>
            <p id={style.paragraph}>
                I always aim to expand my skillset and I'm not planning to stop anytime soon. 
            </p>
        </section>
    </>);
}