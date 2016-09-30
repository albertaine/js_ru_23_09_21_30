import React, { Component } from 'react'
import Comment from './Comment'

export default class Article extends Component {

    constructor(props) {
        super()
        this.state = {
            isOpen: false,
            //лучше сделать еще один компонент CommentList и внести туда этот стейт и половину логики
            isComOpen: false
        }
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state
        console.log('---', this.state)

        const body = isOpen ? <section>{article.text}</section> : null
        // <section style = {{display: isOpen ? 'block' : 'none'}}>{article.text}</section>
        const btnCaption = this.state.isComOpen ? 'Закрыть комменты' : 'Открыть комменты'
        const comButton = !isOpen ? null :
            <div>
                <button type="button" onClick={this.toggleComOpen}>
                    {btnCaption}
                </button>
            </div>

        const articleComments = this.state.isComOpen && this.state.isOpen &&
        typeof article.comments !== 'undefined' ?
        article.comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
            :null

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
                {comButton}
                <ul>
                    {articleComments}
                </ul>
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleComOpen = ev => {
        this.setState({
            isComOpen: !this.state.isComOpen
        })
    }
}
