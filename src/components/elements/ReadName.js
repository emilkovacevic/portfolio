import React from "react";
import styled from 'styled-components'
import useSound from 'use-sound';
import mysound from '../../data/mysound.mp3'

const Button = styled.button`
    background:unset;
    border:none;
    font-size:unset;
    cursor: pointer;
    outline:none;
    color:var(--heading);
    :hover{color: var(--button-hover)}
    position:relative;
    top: 2px;
`

function ReadName() {

    const [play] = useSound(
        mysound,
        { volume: 1}
    );

    const onClickPlay = () =>{
            play()
    }

    return (
        <Button onClick={onClickPlay} >
        <span>
            <i className="fas fa-volume-up"></i>    
        </span>
        </Button>

    )
}

export default ReadName
