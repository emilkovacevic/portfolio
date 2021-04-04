import React from 'react'

import style from 'styled-components'
const Canvas = style.canvas``

function Slide3() {


    Canvas.fill= 'A'
    return (
      <div style={{height: '100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Canvas></Canvas>
        canvas page
      </div>
      );
    };

export default Slide3
