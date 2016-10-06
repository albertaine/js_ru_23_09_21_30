// decorator === HOC === Higher Order Component
import React from 'react'
import NewCommentForm from '../components/NewCommentForm'

export default function toggleOpen(Component) {
    return class ToggleOpen extends React.Component {
        state = {
            isOpen: false
        }

        toggleOpen = ev =>  {
            ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        render() {
            return (
                <div>
                    <Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
                    <NewCommentForm />
                </div>
            )
        }
    }
}