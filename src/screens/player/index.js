import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../../spotify';
import "./player.css"
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import AudioPlayer from '../../components/audioPlayer';
import Widgets from '../../components/widgets';
import Test from '../../test';
import APIKit from '../../spotify'

export default function Player() {

  const location=useLocation();
  const [tracks,setTracks]=useState([]);
  const [currentTrack,setCurrentTrack]=useState([]);
  const [currentIndex,setCurrentIndex]=useState(0);

  useEffect(() => {
    APIKit.get('recommendations').then(function (response) {
      console.log(response);
    });
  }, []);

  useEffect(()=>{
    if(location.state){
      apiClient
      .get("playlists/"+location.state?.id+"/tracks")
      .then((res)=>{
        setTracks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      });
    }
  },[location.state]);
  return (
    <div className='screen-container flex'>
      <div className='left-player-body'>
      <AudioPlayer currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}/>
          
        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
          </div>
      <div className='right-player-body'>
      <SongCard currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex} album={currentTrack?.album}/>
      <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/></div>
      
    </div>
  )
}
