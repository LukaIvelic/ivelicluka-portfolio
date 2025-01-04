'use client';

import LandingSegment from "./segments/LandingSegment/LandingSegment";
import style from './global.module.scss';
import Header from "./components/header/Header";
import AboutSegment from "./segments/AboutSegment/AboutSegment";
import EducationSegment from "./segments/EducationSegment/EducationSegment";
import ExpertiseSegment from "./segments/ExpertiseSegment/ExpertiseSegment";
import FooterSegment from "./segments/FooterSegment/FooterSegment";

export default function Page(){

    const addons = <>
        <LandingSegment/>
        <AboutSegment/>
        <EducationSegment/>
        <ExpertiseSegment/>
        <FooterSegment/>
    </>;

    return(<>
        <Header/>
        {addons}
    </>);
}