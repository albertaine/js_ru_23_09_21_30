import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../AC/filters'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };
/*
    state = {
        selected: null
    }
*/
    //handleChange = selected => this.setState({ selected })
    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

    render() {
/*
        const { articles } = this.props
        const { selected } = this.state
*/
        const { articles, selected } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

//export default SelectFilter
export default connect(state => ({
    selected: state.filters.selected,
    articles: state.articles
}), { changeSelection })(SelectFilter)
