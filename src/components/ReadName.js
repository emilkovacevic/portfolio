import React, { useState } from "react";
import styled from 'styled-components'

const Button = styled.button`
    background:unset;
    border:none;
    font-size:unset;
    cursor: pointer;
`

function ReadName() {

    const [sound, setSound] = useState(false)

    const playSound = ()=>{
        setSound(true)
        
    }


    return (

            <Button onClick={playSound}>{sound ? <i className="fas fa-volume-up"></i>
            :
            <i className="fas fa-volume-mute"></i>}
            </Button>

    )
}

export default ReadName
