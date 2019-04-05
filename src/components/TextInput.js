import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import '../index.css';

class TextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit = (e) => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus
        value={this.state.text}
        onBlur={(e) => {this.handleBlur(e)}}
        onChange={(e) => {this.handleChange(e)}}
        onKeyDown={(e) => {this.handleSubmit(e)}} />
    )
  }
}

// TextInput.propTypes = {
//   onSave: PropTypes.func,
//   text: PropTypes.string,
//   placeholder: PropTypes.string,
//   editing: PropTypes.bool,
//   newTodo: PropTypes.bool
// }

export default TextInput
