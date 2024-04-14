import React, { useEffect, useRef, useState } from 'react'

export const ImgComponent = ({ src }) => {
    const imgRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            console.log("---entries--", entries);
            entries.forEach((entry) => {
                setVisible(true)
                observer.unobserve(entry.target)
            })
        }, {
            rootMargin: "100px",
            root: document.getElementById('root'),
            threshold: [0]
        })

        if (imgRef?.current) {
            observer.observe(imgRef.current)
        }

        return () => {
            if (imgRef?.current) {
                observer.observe(imgRef.current)
            }
        }


    }, [])

    return (
        <div>
            <img ref={imgRef} src={visible ? src : ''} />
        </div>
    )
}