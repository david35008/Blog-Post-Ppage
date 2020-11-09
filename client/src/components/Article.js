import React from "react";

export default function Article() {
    return (
        <>
            <h1 className="title">
                How To Use Refs <br />
                In React With Hooks
            </h1>
            <p>
                Refs are probably the most misunderstood and misused part of React. All too often, I
                see developers using refs to manipulate the DOM directly or work around React in
                someway which makes working with React much harder. In this article I am going to go
                over everything you need to know about refs in order to help you never make those
                ref mistakes.
            </p>
            <h2 className="secondTitle">useRef</h2>
            <p>
                In order to work with refs in React you need to first initialize a ref which is what
                the useRef hook is for. This hook is very straightforward, and takes an initial
                value as the only argument.
            </p>
        </>
    );
}
