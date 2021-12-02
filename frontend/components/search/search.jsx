import React from "react"
import NavBarContainer from "../nav/nav_bar_container"
import VideoRow from "./video_row"
import { useState, useEffect } from "react"

const Search = ({ currentUser, videos, fetchVideos, searchTerm }) => {

    const [ filteredVideos, setFilteredVideos ] = useState([])

    useEffect(() => {
        fetchVideos()
        setFilteredVideos(filteredVideos => [...filteredVideos, ...videos])
        parseSearchTerm()
    }, [])
    
    // useEffect(() => {
        // }, [videos])
    
        let parsedSearchTerm = "";
        
    function parseSearchTerm(){
        parsedSearchTerm = searchTerm.slice(9)
        parsedSearchTerm.split(" ")
    }
    
    
    // function filterVideos() {
        //     videos.filter(video => video.title)
        // }
        
        console.log('searchTerm', searchTerm)
        console.log('parsed', parsedSearchTerm)
        console.log('videos', videos)
        console.log('filtered', filteredVideos)
        
        return (
        <div>
            <NavBarContainer></NavBarContainer>
        </div>
    )

}

export default Search;