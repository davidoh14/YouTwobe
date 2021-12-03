import React from "react"
import NavBarContainer from "../nav/nav_bar_container"
import VideoRowContainer from "./video_row_container"
import { useState, useEffect } from "react"

export const Search = ({ videos, fetchVideos, history }) => {

  const [filteredVideos, setFilteredVideos] = useState([]);
  const [parsedSearchTerm, setParsedSearchTerm] = useState([]);
  let searchTerm2 = history.location.pathname.slice(9)

  useEffect(() => {
    fetchVideos();
    parse();
  }, []);

  useEffect(() => {
    if (videos) {
      filterVideos();
    }
  }, [videos]);


  function parse(){
      let splitSearchTerm;
      let slicedSearchTerm = searchTerm2.toLowerCase()
      splitSearchTerm = slicedSearchTerm.split(" ")
      setParsedSearchTerm((parsedSearchTerm) => [...parsedSearchTerm, ...splitSearchTerm])
  }

  function filterVideos() {
      let filteredVids = [];
      let filtVids;

      parsedSearchTerm.forEach(term => {
        filtVids = videos.filter(
          (video) =>
            video.title.toLowerCase().includes(term) ||
            video.description.toLowerCase().includes(term) ||
            video.username.toLowerCase().includes(term)
        );

        filtVids.forEach(video => 
          {if (!filteredVids.includes(video)){
            filteredVids.push(video)
            console.log('filter')
          }})
      })
          
      setFilteredVideos((filteredVideos) => [...filteredVideos, ...filteredVids]);      
  }

  if (filteredVideos === []) {
    return null;
  } else {
    return (
      <div>
        {console.log('return', filteredVideos)}
        {filteredVideos.map(video =>
          <div key={video.id}>
            <VideoRowContainer video={video}/>
          </div> 
        )}
        <NavBarContainer inheritedSearchTerm={searchTerm2}></NavBarContainer>
      </div>
    );
  }
};
