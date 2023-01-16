import React, { useEffect, useState } from 'react'
import apiClient from '../../spotify';
import "./trending.css"
import TrendCard from '../../components/trendCard';

export default function Trending() {
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  useEffect(() => {
      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 6);
          setFeatured(a);
        })
        .catch((err) => console.error(err));
      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums.items.slice(0, 6);
          setNewRelease(a);
        })
        .catch((err) => console.error(err));
  }, []);
  return (
    <div className='screen-container'>
    <div className="trend-body flex">
      <TrendCard title="为你推荐" featured={featured}/>
      <TrendCard title="新歌榜" newRelease={newRelease} />
    </div>
    </div>
  );
  
}
