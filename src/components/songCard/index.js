import React from 'react'
import AlbumImage from './albumImage'
import AlbumInfo from './albumInfo'
import "./songCard.css";

export default function SongCard({ currentTrack,
  currentIndex,
  total, album}) {
  console.log(currentTrack);
    console.log(currentIndex);
    console.log(total);
    console.log(total[currentIndex]?.track?.album?.images[0]?.url);
 
  return (
    <div className='songCard-body flex'>
      <AlbumImage url={total[currentIndex]?.track?.album?.images[0]?.url}/>
      <AlbumInfo album={total[currentIndex]?.track?.album}/>
    </div>
  );
}
