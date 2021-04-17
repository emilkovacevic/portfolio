import React from 'react'
import styled from 'styled-components'

import Document from '../../data/Emil_Kovacevic-Resume.pdf'

const Component = styled.div`
    background: var(--background);
    h2{
        text-align:center;
    }
    iframe{
        min-height:900px;
        width:100%;
    }
`

function Cv() {
    return (
        <Component>
            <div>
                <h2>For other details (e.g. phone number, address), please contact me.</h2>
            </div>
            <iframe src={Document} title='doc' width="100%" height="500px"></iframe>
        </Component>
    )
}

export default Cv
