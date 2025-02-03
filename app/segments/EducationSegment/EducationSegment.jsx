import style from './EducationSegment.module.scss';
import ecdata from './Education.json';
import EducationShowcase from '@/app/components/education_showcase/EducationShowcase';

export default function EducationSegment(){
    return (<>
        <section id={style.education_segment}>
            <h1 id={style.notation}>Education & Certificates</h1>
            <section id={style.showcase}>
                {
                    ecdata.map((ec)=>{
                        return <EducationShowcase EducationCertificates={ec} UniqueId={"id_"+ec.ECId} key={"id_"+ec.ECId}/>
                    })
                }
            </section>
        </section>
    </>);
}