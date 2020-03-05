import React, { useState } from 'react'

export default function UpChevron() {

    const [svgStyle, setSvgStyle] = useState({
        willChange:"transform",
        fill:"white",
    })

    function changeSvgStyle() {
        if(svgStyle.fill === "white")
            setSvgStyle({
                willChange:"transform",
                fill:"rgb(251,76,46)",
            })
        else
            setSvgStyle({
                willChange:"transform",
                fill:"white",
            })
    }

    return (
        <div
            onMouseEnter={() => changeSvgStyle()}
            onMouseLeave={() => changeSvgStyle()}
            >
            <svg focusable="true" preserveAspectRatio="xMidYMid meet" 

                style={svgStyle} xmlns="http://www.w3.org/2000/svg" 
                width="42" 
                height="42" 
                viewBox="0 0 32 32" 
                aria-hidden="true"
                >
                <path d="M16 10L26 20 24.6 21.4 16 12.8 7.4 21.4 6 20z"></path>
            </svg>
        </div>
    )
}







