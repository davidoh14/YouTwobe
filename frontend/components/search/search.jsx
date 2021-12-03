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

  // function filterVideos() {
  //     let filteredVids = [];
  //     let filtVids;
      
  //     parsedSearchTerm.forEach(term => {
  //       filtVids = videos.filter(video => 
  //         video.title.includes(term) ||
  //         video.description.includes(term) ||
  //         video.uploader.username.includes(term))
  //     })

  //     filteredVids.push(filtVids)
  //     setFilteredVideos((filteredVids) => [...filteredVids]);      
  // }

  if (filteredVideos === []) {
    return null;
  } else {
    return (
      <div>
        {console.log('parsed search term', parsedSearchTerm)}
        {/* {console.log('return', filteredVideos)} */}
        <NavBarContainer></NavBarContainer>
      </div>
    );
  }
};
