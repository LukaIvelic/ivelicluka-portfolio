'use client';

import style from './EducationShowcase.module.scss'
import ecdata from '../../segments/EducationSegment/Education.json'

export default function EducationShowcase({EducationCertificates, UniqueId}){

    var educationShowcaseElement = null, educationShowcaseButton = null;
    var hashedId = null;

    var handleClick = () => {
        for(let i=0; i < ecdata.length; i++){
            hashedId = "id_" + (i+1);

            educationShowcaseElement = document.getElementById(hashedId);
            educationShowcaseButton = document.getElementById("button_" + hashedId);
            
            
            if(educationShowcaseElement.classList.contains(style.collapsed) && hashedId === UniqueId){
                educationShowcaseElement.style.height = "11vw"
                educationShowcaseButton.style.transform = "rotateZ(-45deg)";
                educationShowcaseElement.classList = `${style.education_certificates} ${style.active}`;
            }else{
                educationShowcaseElement.style.height = "3vw"
                educationShowcaseButton.style.transform = "rotateZ(0deg)";
                educationShowcaseElement.classList = `${style.education_certificates} ${style.collapsed}`;
            }
        }
    };

    return(<>
        <div className={`${style.education_certificates} ${style.collapsed}`} id={UniqueId} style={{marginTop: `-${1}px`}}>
            <h1 className={style.name} >{EducationCertificates.ECName}</h1>
            <h1 className={style.type} >{EducationCertificates.ECType}</h1>
            <h1 className={style.timestamp} >{EducationCertificates.ECTimestamp}</h1>
            <button className={style.expand_button} id={"button_" + UniqueId} onClick={handleClick}>+</button>
            <p className={style.description} >{EducationCertificates.ECDescription}</p>
        </div>
    </>);
}