import React from 'react'
import styled from 'styled-components'
import img404 from '../../data/404.png'

const Component = styled.div`
    background: var(--background);
    background-image: url(${img404});
    background-repeat: no-repeat;
    background-position:top;
    background:rotate(30deg);
    color:var(--text);
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    div{margin-top:50vh}
    h3{font-size:3rem;}
    h1{font-size:5rem;}
`

function My404Component() {
    return (
        <Component>
            <div>
                <h3>Oh Snap!</h3>
                <h1>Page not found</h1>
            </div>
        </Component>
    )
}

export default My404Component
