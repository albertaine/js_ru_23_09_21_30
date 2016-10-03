import React, { Component } from 'react'
import Article from './Article'
import Chart from './Chart'
import accordion from './decorators/accordion'

function ArticleList(props) {
/*
    static propTypes = {

    };
*/
/*
    state = {
        openArticleId: null
    }
*/

    //render() {
        const { articles, openArticleId, toggleArticle } = props
        //const { openArticleId } = this.state

        const articleComponents = articles.map(article => (
            <li key={article.id}>
                <Article article = {article} isOpen = {article.id == openArticleId}
                         openArticle = {toggleArticle(article.id)}/>
            </li>
            )
        )
        return (
            <div>
                <ul>
                    {articleComponents}
                </ul>
                <Chart />
            </div>
        )
    //}
/*
    toggleArticle = id => ev => {
        this.setState({
            //openArticleId: id
            openArticleId: id == this.state.openArticleId ? null : id
        })
    }
*/
}

export default accordion(ArticleList)