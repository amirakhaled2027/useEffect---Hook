import React, {useEffect, useState} from 'react'


function WindowProp() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    })

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    )
}

export default WindowProp