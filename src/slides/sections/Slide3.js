import React from 'react'
import useMousePosition from '../../hooks/useMousePosition'
import style from 'styled-components'

const Canvas = style.canvas``

function Slide3() {
    const { clientX, clientY } = useMousePosition();

    Canvas.fill= 'A'
    return (
      <div style={{height: '100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Canvas></Canvas>
      </div>
      );
    };

export default Slide3
