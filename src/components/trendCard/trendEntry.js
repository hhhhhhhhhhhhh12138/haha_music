import React from 'react'
import "./trendEntry.css"
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";


export default function TrendEntry({ title, subtitle, image }) {

    return (
        <div className='trendEntry-card'
            key={title}
            onClick={() => { }}>
            <img
                src={image}
                className="trendEntry-image"
                alt={title}
            />
            <p className='trendEntry-title'>{title}</p>
            <p className='trendEntry-num'>{subtitle}</p>
            <div className="trendEntry-fade">
                <IconContext.Provider value={{ size: "50px", color: "#0b0608" }}>
                    <AiFillPlayCircle />
                </IconContext.Provider>
            </div>
        </div>

    );
}
