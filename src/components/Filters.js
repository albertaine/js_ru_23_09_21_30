import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'
import 'react-day-picker/lib/style.css'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }
    state = {
        selected: null,
        interval: {from: null, to: null}
    }

    handleChange = selected => this.setState({ selected: selected, interval: this.state.interval })

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state.interval);
        this.setState({selected: this.state.selected, interval: range});
    }
    handleResetClick(e) {
        e.preventDefault();
        this.setState({selected: this.state.selected, interval: {
        from: null,
            to: null,
        }});
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const { from, to } = this.state.interval

        return (
            <div>
                <Select
                    options = {options}
                    value = {this.state.selected}
                    onChange = {this.handleChange}
                    multi={true}
                />

                <div className="RangeExample">
                    { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                    { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                    { from && to &&
                    <p>
                        You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                        { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
                    </p >
                    }
                    <DayPicker
                        ref="daypicker"
                        numberOfMonths={ 2 }
                        selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                        onDayClick={ this.handleDayClick }
                    />
                </div>
            </div>
        )
    }
}

export default Filters