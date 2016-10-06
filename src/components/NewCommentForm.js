import React, { Component, PropTypes } from 'react'

class NewArticleForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: ''
    }

    handleUserChange = ev => {
        this.setState({
            user: ev.target.value
        })
    }
    handleTextChange = ev => {
        this.setState({
            text: ev.target.value
        })
    }

    addComment = ev => {
        console.log('...Added comment...user: ', this.state.user, ', text: ', this.state.text);
    }

    render() {
        return (
            <div>
                <p/>
                new comment:<p/>
                user:<br/>
                <input type = "text" value = {this.state.user} onChange = {this.handleUserChange}/><p/>
                text:<br/>
                <input type = "text" value = {this.state.text} onChange = {this.handleTextChange}/><p/>
                <button onClick={this.addComment}>Add</button>
            </div>
        )
    }
}

export default NewArticleForm