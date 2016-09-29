import React, { Component } from 'react'

export default class Comment extends Component {

    constructor(props) {
        super()
        this.state = {
        }
    }

    render() {
        const { comment } = this.props

        return (
            <div>
                <h4>{comment.user}</h4>
                {comment.text}
            </div>
        )
    }

}
