import React, { useState } from "react";
import styled from 'styled-components'
import useSound from 'use-sound';
import mysound from '../data/mysound.mp3'


const Button = styled.button`
    background:unset;
    border:none;
    font-size:unset;
    cursor: pointer;
`

function ReadName() {

    const [sound, setSound] = useState(false)


     const [play, { stop }] = useSound(
        mysound,
        { volume: 0.5 }
    );
  
    return (

            <Button onClick={play}>
            <span>
            {sound ? <i className="fas fa-volume-up"></i>
            :
            <i className="fas fa-volume-mute"></i> }
            </span>
            </Button>

    )
}

export default ReadName
