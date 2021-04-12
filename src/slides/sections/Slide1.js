import React from 'react'
import styled from 'styled-components'
import {personal} from '../../data/data'
import ReadName from '../../components/elements/ReadName'
import {motion} from 'framer-motion'

const Wrapper = styled(motion.div)`
div{
    cursor:grab;
    border-radius:1em;
    box-shadow:7px 6px 15px var(--text);
    padding:2em;
    margin:1em;
}
h2,h1{
    color:var(--heading);
    padding-bottom: 0.5em;
    font-size: 2rem;
}
h2{
    width: fit-content;
}
p{
    text-shadow: 0px 0px 1px var(--text);
}
@media (max-width: 1025px){
    div{
        font-size:1.2rem;
    }
`

function Slide1() {

    return (
        <Wrapper
        initial={{opacity: 0.25}}
        animate={{opacity: 1, transition:{duration: 2}}}
        >
            <motion.section 
            initial={{y:"50vh"}}
            animate={{y: 0, transition:{duration:1}}}>
            <motion.div
                    drag 
                    dragTransition={{ bounceStiffness: 400, bounceDamping: 100 }}
                    dragConstraints={{ left: 5, right:5, bottom: 5, top:5 }}
                    whileHover={{
                        cursor: 'grabbing',
                        }}
            >
                <h2>Hello,</h2>
                <motion.h1
                whileTap={{ scale: 0.98 }}
                >My name is {personal.name} <ReadName/></motion.h1>
                <p className="instruction">Click next to continue...</p>
            </motion.div>
            </motion.section>
        </Wrapper>
    )
}

export default Slide1