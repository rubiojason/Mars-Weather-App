import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap/all'

function Practice() {

    const letterTrans = useRef(null)

    useEffect(() => {
        gsap.from(letterTrans.current, {delay: 0.8, ease: 'Power3.easeOut', y: 64
        })
    })

    return (
        <div>
            <h1>
                <div className="line-wrap">
                    <div ref={letterTrans} className="line">Hello Everybody</div>
                </div>
            </h1>
        </div>
    )
}

export default Practice
