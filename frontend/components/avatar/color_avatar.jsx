import React from "react";
import { Avatar } from "@mui/material";

const ColorAvatar = ({ username }) => {

    function stringToColor(string) {
        let hash = 0;
        let i;

        for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 2; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substring(-2);
        }

        return color;
    }

    function stringAvatar(name) {
        return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name[0]}`,
        };
    }

    return (
        <div>
            {console.log(username)}
            <Avatar {...stringAvatar(`${username}`)}/>
        </div>
    )
}

export default ColorAvatar;