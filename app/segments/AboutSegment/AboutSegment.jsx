'use client';

import style from './AboutSegment.module.scss'
import styleEducationSegment from '../EducationSegment/EducationSegment.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSegment(){

    useEffect(()=>{
        if(typeof window === "undefined") return;

        let arrayOfElementIds = [style.notation_one, style.notation_two, style.paragraph_one, style.paragraph_two];
        arrayOfElementIds.forEach((id)=>{
            gsap.fromTo(`#${id}`,
                {
                    y: 150
                },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: `#${style.about_segment}`,
                        scrub: 0.15,
                    },
                    delay: 2
                }
            );
        });

        gsap.fromTo(`#${style.transition_div}`, 
            {
                borderRadius: "50%",
                filter: "blur(50px)",
                scale: 1,
                y: 0
            },
            {
                borderRadius: "50%",
                filter: "blur(50px)",
                scale: 2,
                y: -1000,
                scrollTrigger: {
                    trigger: `#${styleEducationSegment.education_segment}`,
                    scrub: 0.15
                }
            }
        );
    }, [])

    return (<>
        <section id={style.about_segment}>
            <h4 id={style.notation_one}>About</h4>
            <p id={style.paragraph_one} className={style.paragraphs}>
                While mastering my skills as a Software Engineer at 
                the Zagreb University of Applied Sciences, I like to 
                design & develop frontend solutions. 
            </p>
            <h4 id={style.notation_two}>Based in Croatia.</h4>
            <p id={style.paragraph_two} className={style.paragraphs}>
                I recently picked up WebGL as a hobby. Learning how to 
                combine mathematical knowledge with a shader language to 
                create appealing visuals is a great and challenging experience.
            </p>
            <div id={style.transition_div}></div>
        </section>
    </>);
}