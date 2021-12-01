import React from "react"
import NavBarContainer from "../nav/nav_bar_container"
import VideoRow from "./video_row"
import { useState, useEffect } from "react"

const Search = ({ currentUser, videos, fetchVideos, searchTerm }) => {

    const [ filteredVideos, setFilteredVideos ] = useState([])

    useEffect(() => {
        fetchVideos()
    }, [])

    useEffect(() => {
        setFilteredVideos(filteredVideos => [...filteredVideos, ...videos])
        console.log('filtered', filteredVideos)
    }, [videos])

    console.log('searchTerm', searchTerm)
    console.log('videos', videos)

    return (
        <div>
            <NavBarContainer></NavBarContainer>
        </div>
    )

}

export default Search;