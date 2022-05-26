import React, { useState, createContext, useContext } from 'react';
import './Lobby.css'
import Grid from '@mui/material/Grid';



const UserContext = createContext();

function Lobby() {
    const [coloured, setColoured] = useState({
        P1: "",
        P2: "",
        P3: "",
        P4: ""
    });

    const toPlayer = (curColours) => {
        setColoured(curColours);
    }
    
    return (
            <UserContext.Provider value={coloured}>
                <h1> Game Lobby</h1>
                <Grid Container className="grid-container">
                    <Grid item xs={6} className="grid-item"><Player number="1" toPlayer={toPlayer} coloured={coloured}></Player></Grid>
                    <Grid item xs={6} className="grid-item"><Player number="2" toPlayer={toPlayer} coloured={coloured}></Player></Grid>
                    <Grid item xs={6} className="grid-item"><Player number="3" toPlayer={toPlayer} coloured={coloured}></Player></Grid>
                    <Grid item xs={6} className="grid-item"><Player number="4" toPlayer={toPlayer} coloured={coloured}></Player></Grid>`
                </Grid>
            </UserContext.Provider>
    )
}

function Player(props) {

    const [colour, setColour] = useState("White");
    
    const coloured = useContext(UserContext);

    
    const change = (c) => {
        setColour(c)
        switch(props.number) {
            case "1":
                props.toPlayer({ ...coloured, P1: c});
                break;
            case "2":
                props.toPlayer({ ...coloured, P2: c});
                break;
            case "3":
                props.toPlayer({ ...coloured, P3: c});  
                break;
            case "4":
                props.toPlayer({ ...coloured, P4: c});
                break;
            default:
                console.log(props.number === "1");
                break;
        }
    }

    return (
        <div>
            <h1 style={{backgroundColor: colour}}>
                P{props.number}
            </h1>
            <hr />
            <select>
                <option onClick={() => change("White")}>
                    Choose colour
                </option>
                {((coloured.P1 !== "DodgerBlue" && coloured.P2 !== "DodgerBlue" && coloured.P3 !== "DodgerBlue" && coloured.P4 !== "DodgerBlue") || colour === "DodgerBlue") &&
                <option onClick={() => change("DodgerBlue")}>
                    Blue
                </option>
                }
                {((coloured.P1 !== "Red" && coloured.P2 !== "Red" && coloured.P3 !== "Red" && coloured.P4 !== "Red") || colour === "Red") &&
                <option onClick={() => change("Red")}>
                    Red
                </option>
                }
                {((coloured.P1 !== "Green" && coloured.P2 !== "Green" && coloured.P3 !== "Green" && coloured.P4 !== "Green") || colour === "Green") &&
                    <option onClick={() => change("Green")}>
                    Green
                </option>
                }
                {((coloured.P1 !== "Yellow" && coloured.P2 !== "Yellow" && coloured.P3 !== "Yellow" && coloured.P4 !== "Yellow") || colour === "Yellow") &&
                <option onClick={() => change("Yellow")}>
                    Yellow
                </option>
                }
            </select>
        </div>
    )
}

export default Lobby;