import React from "react"
import NavBarContainer from "../nav/nav_bar_container"
import VideoRow from "./video_row"
import { useState, useEffect } from "react"

export const Search = ({ currentUser, videos, fetchVideos, searchTerm }) => {
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos) {
      setFilteredVideos((filteredVideos) => [
        ...filteredVideos,
        ...videos,
      ]);
    }
  }, [videos]);

  console.log(videos);

  // useEffect(() => {
  // }, [videos])

  // let parsedSearchTerm;

  // function parse(){
  //     let slicedSearchTerm = searchTerm.slice(8)
  //     // let parsedSearchTerm = slicedSearchTerm.split(" ")
  //     console.log('sliced', slicedSearchTerm)
  // }

  // function filterVideos() {
  //     videos.filter(video => video.title)
  // }

  // console.log('searchTerm', searchTerm)
  // console.log('parsed', parsedSearchTerm)
  // console.log('videos', videos)

  // console.log('videos', videos)
  // console.log('filtered', filteredVideos)

  if (filteredVideos === []) {
    console.log("anything out there");
    return null;
  } else {
    return (
      <div>
        {console.log("return", filteredVideos)}
        <NavBarContainer></NavBarContainer>
      </div>
    );
  }
};
