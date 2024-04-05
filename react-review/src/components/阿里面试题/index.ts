import React, { Component, useEffect, useLayoutEffect } from 'react';

export default function () {
    console.log("----Parent-----");

    useEffect(() => {
        console.log("----Parent-useEffect----");
    }, [])

    useLayoutEffect(() => {
        console.log("----Parent-useLayoutEffect----");
    }, [])

    return (
        <div>jajaj</div>
    )

}