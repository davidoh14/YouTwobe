import React from "react"
import NavBarContainer from "../nav/nav_bar_container"
import VideoRow from "./video_row"
import { useState, useEffect } from "react"

export const Search = ({ currentUser, videos, fetchVideos, searchTerm }) => {

  const [filteredVideos, setFilteredVideos] = useState([]);
  const [parsedSearchTerm, setParsedSearchTerm] = useState([]);

  useEffect(() => {
    fetchVideos();
    parse();
  }, []);

  useEffect(() => {
    if (videos) {
      // setFilteredVideos((filteredVideos) => [
      //   ...filteredVideos,
      //   ...videos,
      // ]);
      // parse()
      filterVideos();
    }
  }, [videos]);

  // useEffect(() => {
  //   filterVideos()
  // }, [parsedSearchTerm])

  function parse(){
      let splitSearchTerm;
      let slicedSearchTerm = searchTerm.slice(9)
      splitSearchTerm = slicedSearchTerm.split(" ")
      setParsedSearchTerm((parsedSearchTerm) => [...parsedSearchTerm, ...splitSearchTerm])
  }

  function filterVideos() {
      let filteredVids = [];
      let filtVids;
      console.log('parsedSearchTerm', parsedSearchTerm)

      parsedSearchTerm.forEach(term => {
        filtVids = videos.filter(video => 
          video.title.includes(term) ||
          video.description.includes(term) ||
          video.username.includes(term))

        filtVids.forEach(video => 
          {if (!filteredVids.includes(video)){
            filteredVids.push(video)
          }})
      })
          
      console.log('filtVids', filtVids);
      console.log('filteredVids', filteredVids)
      // setFilteredVideos((filteredVids) => [...filteredVids]);      
  }

  if (filteredVideos === []) {
    return null;
  } else {
    return (
      <div>
        {/* {console.log('return', filteredVideos)} */}
        <NavBarContainer></NavBarContainer>
      </div>
    );
  }
};
