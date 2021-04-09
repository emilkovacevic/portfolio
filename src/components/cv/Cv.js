import React from 'react'
import styled from 'styled-components'

import Document from '../../data/Resume.pdf'

const Component = styled.div`
    padding-top:5rem;
    background: var(--background);
    iframe{
        min-height:900px;
        width:100%;
    }
`

function Cv() {
    return (
        <Component>
            <iframe src={Document} title='doc' width="100%" height="500px"></iframe>
        </Component>
    )
}

export default Cv
