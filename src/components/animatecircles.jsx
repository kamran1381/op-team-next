import React from 'react'

function AnimateCircles(prop) {

    return (
        <div className='animate-[bounce_7s_linear_infinite]'>
            <svg width="122" height="121" viewBox="0 0 122 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60.5" cy="60.5" r="60.5" fill={prop.color ? prop.color : "#fefefe"} />
                <line x1="72.7071" y1="1.70711" x2="1.70711" y2="72.7071" stroke="#DEE4F1" strokeWidth="2" />
                <line x1="53.7071" y1="1.70711" x2="0.707104" y2="54.7071" stroke="#DEE4F1" strokeWidth="2" />
                <line x1="120.707" y1="67.7071" x2="68.7071" y2="119.707" stroke="#DEE4F1" strokeWidth="2" />
                <line x1="86.7071" y1="6.70711" x2="6.70711" y2="86.7071" stroke="#DEE4F1" strokeWidth="2" />
                <line x1="115.707" y1="34.7071" x2="34.7071" y2="115.707" stroke="#DEE4F1" strokeWidth="2" />
                <line x1="119.707" y1="48.7071" x2="48.7071" y2="119.707" stroke="#DEE4F1" strokeWidth="2" />
                <line x1="97.7071" y1="13.7071" x2="12.7071" y2="98.7071" stroke="#DEE4F1" strokeWidth="2" />
                <line x1="107.707" y1="22.7071" x2="22.7071" y2="107.707" stroke="#DEE4F1" strokeWidth="2" />
            </svg>
        </div>

    )

}

export default AnimateCircles