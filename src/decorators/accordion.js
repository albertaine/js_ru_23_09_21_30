import React, { Component, PropTypes } from 'react'

export default function accordion(Component) {
    return class WrapperAccordion extends React.Component {
        static propTypes = {
            Component: PropTypes.array
        }
        state = {
            //Не привязывайся к названию сущности, декоратор будет использоваться везде. Назови, скажем, openItemId
            openArticleId: null
        }

        render() {
/*
            const { articles } = this.props
            const { openArticleId } = this.state

            const articleComponents = articles.map(article => (
                    <li key={article.id}>
                        <Article article = {article} isOpen = {article.id == openArticleId}
                                 openArticle = {this.toggleArticle(article.id)}/>
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
*/
            return <Component {...this.props} {...this.state} toggleArticle = {this.toggleArticle}/>
        }

        toggleArticle = id => ev => {
            this.setState({
                //openArticleId: id
                openArticleId: id == this.state.openArticleId ? null : id
            })
        }
    }
}
