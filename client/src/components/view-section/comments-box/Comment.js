import React from 'react'

function Comment({ comment, index }) {

    return (
        <div key={index} className='comment' >
            <div key={comment.title + index + 1} >{comment.title}</div>
            <div key={comment.content + index} >{comment.content}</div>
        </div>
    )
}

export default Comment