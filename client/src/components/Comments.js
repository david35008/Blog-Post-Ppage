import React, { useState, useRef } from "react";
import SingleComment from "./SingleComment";
import timeFunc from "./timeFunc";

import "./Comments.css";

export default function Comments() {
    const [comments, setComments] = useState([
        { name: "Alexei Ryadov", time: "29.06.2018 20:22", body: "good job" },
        { name: "Good feedback", time: "29.06.2020 20:22", body: "I Really like this blog" },
    ]);
    const name = useRef();
    const body = useRef();

    const submitFunc = () => {
        if (body.current.value && name.current.value) {
            const newObj = {
                name: name.current.value,
                body: body.current.value,
                time: timeFunc(),
            };
            name.current.value = "";
            body.current.value = "";

            setComments((prev) => [...prev, newObj]);
        }
    };
    const createError = () => {
        setComments({});
    };
    const ChangeFocus = (e, field) => {
        if (e.keyCode === 13) {
            body.current.focus();
        }
    };
    return (
        <div className="commentsContainer">
            {comments.map((obj) => {
                return <SingleComment comment={obj} />;
            })}

            <div className="newCommentContainer">
                <h2 className="writeNewTitle">Write new comment :</h2>
                <textarea
                    ref={name}
                    onKeyDown={(e) => ChangeFocus(e)}
                    className="newCommentName"
                    placeholder="Write your name here"
                />
                <textarea
                    ref={body}
                    className="newCommentBody"
                    placeholder="Add to the discussion"
                />
                <button className="submit" onClick={submitFunc}>
                    Submit
                    </button>
            </div>
            <button className="submit" onClick={createError}>
                Create an Error
                    </button>
        </div>
    );
}
