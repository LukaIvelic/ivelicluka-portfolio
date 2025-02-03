import style from './EducationSegment.module.scss';
import ecdata from './Education.json';
import EducationShowcase from '@/app/components/education_showcase/EducationShowcase';

export default function EducationSegment(){

    const hashFunction = (value) =>{
        return Math.round(value * Math.PI);
    };

    let keyID = 0;

    return (<>
        <section id={style.education_segment}>
            <h1 id={style.notation}>Education & Certificates</h1>
            <section id={style.showcase}>
                {
                    ecdata.map((ec)=>{
                        return <EducationShowcase EducationCertificates={ec} 
                                                  key={++keyID} 
                                                  Key={keyID}
                                                  UniqueID={"id_" + hashFunction(keyID)} 
                                />
                    })
                }
            </section>
        </section>
    </>);
}