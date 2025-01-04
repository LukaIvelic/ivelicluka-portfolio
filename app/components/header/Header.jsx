'use client';

import style from './Header.module.scss';

export default function Header(){
    return(<>
        <header id={style.header}>
            <div id={style.time_section}>
                <h4 id={style.time_name}>Zagreb</h4>
                <p id={style.time}>10:22 AM</p>
            </div>
            <div id={style.menu}>
                <h4>Menu</h4>
                <svg>                    
                    <rect x="15" y="45" width="70" height="2"></rect>
                    <rect x="15" y="50" width="70" height="2"></rect>
                </svg>
            </div>
        </header>
    </>);
}