import React from 'react'
import styled from 'styled-components'
import img404 from '../../data/404.png'

const Component = styled.div`
    background: var(--background);
    color:var(--text);
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-items:center;
    h3{font-size:3rem;}
    h1{font-size:5rem;}
    @media (max-width: 720px){
        h3{font-size:1.25rem;}
        h1{font-size:2.25rem;}
        img{ position:relative;
            top:50px;
    }
    }
    @media (max-width: 300px){
        img{ position:relative;
            top:50px;
    }
`
const ErrorImg = styled.div`
    width:100%
    height:100%;
    box-sizing:border-box;
    img{
        object-fit:contain;
        width: 100%;
        margin:auto;
    }
`

function My404Component() {
    return (
        <Component>
            <ErrorImg>
                <img src={img404} alt='error 404'></img>
            </ErrorImg>
            <div>
                <h3>Oh Snap!</h3>
                <h1>Page not found</h1>
            </div>
        </Component>
    )
}

export default My404Component
