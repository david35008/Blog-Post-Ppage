import React, { useRef, useState } from 'react';

function ControlSection({ setComments }) {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const titleRef = useRef()
    const contentRef = useRef()
    const submitRef = useRef()

    const handleKeyUp = (e, title) => {
        if (e.keyCode === 13) {
            switch (title) {
                case "title":
                    contentRef.current.focus()
                    break
                case "content":
                    submitRef.current.click()
                    break
                default:
                    break
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title === "") {
            alert("titlr is required")
        }
        else if (content === "") {
            alert("content is required")
        }
        else {
            setComments(prev => {
                return [...prev, { title, content }]
            })
            setContent("")
            setTitle("")
            titleRef.current.focus()
        }
    }

    return (
        <div className="ControlSection">
            <input onKeyUp={e => handleKeyUp(e, "title")} ref={titleRef} value={title}
                onChange={e => setTitle(e.target.value)} placeholder="Enter title..." />
            <input onKeyUp={e => handleKeyUp(e, "content")} ref={contentRef} value={content}
                onChange={e => setContent(e.target.value)} placeholder="Enter comment..." />
            <button onClick={e => handleSubmit(e)} ref={submitRef} type="submit">Add comment</button>
        </div>
    );
}

export default ControlSection;
