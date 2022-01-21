import React from "react"
import NavBarContainer from "../nav/nav_bar_container"
import VideoRowContainer from "./video_row_container"
import { useState, useEffect } from "react"

export const Search = ({ videos, fetchVideos, history }) => {

  const [filteredVideos, setFilteredVideos] = useState([]);
  const [parsedSearchTerm, setParsedSearchTerm] = useState([]);

  let searchTerm = history.location.pathname.slice(9);

  useEffect(() => {
    fetchVideos();
    parse();
  }, []);

  useEffect(() => {
    if (videos) {
      parse();
      filterVideos();
    }
  }, [videos]);

  useEffect(() => {
    filterVideos()
  }, [parsedSearchTerm]);

  function parse(){
      let noSpaceSplitSearchTerm = [];
      let splitSearchTerm = searchTerm.toLowerCase().trim().split(" ");
      
      splitSearchTerm.forEach(term => term ? noSpaceSplitSearchTerm.push(term) : null) 
      setParsedSearchTerm(() => [...noSpaceSplitSearchTerm])
  }

  function filterVideos() {
      setFilteredVideos(() => [])
      let finalResults = [];
      let firstFilter;
      
      parsedSearchTerm.forEach(term => {
        firstFilter = videos.filter(
          (video) =>
            video.title.toLowerCase().includes(term) ||
            video.description.toLowerCase().includes(term) ||
            video.username.toLowerCase().includes(term)
        );

        firstFilter.forEach(video => 
          {if (!finalResults.includes(video)){
            finalResults.push(video)
          }})
      })

      setFilteredVideos(() => [...finalResults]);   
  }

  if (filteredVideos === []) {
    return (
      <div>There are no videos.</div>
    )
  }
    return (
      <div className="search-wrapper">
        {console.log('filteredVids', filteredVideos)}
        <div className="nav-bar-div"></div>
          {
            filteredVideos.length === 0 ?
              <div className="no-results">
                There are no videos related to those search terms.
              </div>
            :
              filteredVideos.map(video =>
                <div key={video.id}>
                  <VideoRowContainer video={video}/>
                </div>)
          }
        <NavBarContainer inheritedSearchTerm={searchTerm}></NavBarContainer>
      </div>
    );
};
