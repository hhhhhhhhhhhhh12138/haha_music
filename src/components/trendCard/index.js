import React from 'react';
import WidgetEntry from '../widgets/widgetEntry';
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import TrendEntry from './trendEntry';
import "./trendCard.css"
export default function TrendCard({ title,featured, newRelease }) {
  
    return (<div>
         <p className="trend-title">{title}</p>
      <div className="trendcard-body flex">
       
        {featured
          ? featured.map((playlist) => (
              <TrendEntry
                title={playlist?.name}
                subtitle={playlist?.tracks?.total + " 首"}
                image={playlist?.images[0]?.url}
              />
            ))
          : newRelease
          ? newRelease.map((album) => (
              <TrendEntry
                title={album?.name}
                subtitle={album?.artists[0]?.name}
                image={album?.images[2]?.url}
              />
            ))
          : null}
        <div className="widget-fade">
          <div className="fade-button">
            <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
              <FiChevronRight />
            </IconContext.Provider>
          </div>
        </div>
      </div>
      </div>
    );
  }

