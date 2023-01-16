import React from 'react'
import "./albumInfo.css"

export default function AlbumInfo({album}) {
    const artists=[];
    album?.artists?.forEach(element => {
        artists.push(element.name);
    });

    return (
    <div className='albumInfo-card'>
        <div className='albumName-container'>
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
        </div>
        <div className='album-info'>
            <p>{`${album?.name}是来自 ${artists?.join(",")} 的专辑， 共 ${album?.total_tracks}首`}</p>
        </div>
        <div className='album-release'>
            <p>发行日期：{album?.release_date}</p>
        </div>
    </div>
    );
}
