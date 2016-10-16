import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../AC/filters'

import 'react-day-picker/lib/style.css';

class DatePicker extends Component {
/*
    state = {
        from: null,
        to: null
    }
*/
    handleDayClick = (e, day) => {
/*
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
*/
        const { range, changeDateRange } = this.props
        changeDateRange(DateUtils.addDayToRange(day, range))
    }

    render() {
        //const { from, to } = this.state;
        const { from, to } = this.props.range
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

//export default DatePicker
export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange })(DatePicker)
