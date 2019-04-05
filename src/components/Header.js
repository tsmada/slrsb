import React, { PropTypes, Component } from 'react'
import TextInput from './TextInput'
import '../index.css';

class Header extends Component {
  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
          <h1>Tasks</h1>
          <TextInput newTodo
                         onSave={(e) => {this.handleSave(e)}}
                         placeholder="What needs to be done?" />
      </header>
    )
  }
}

// Header.propTypes = {
//   addTodo: PropTypes.func.isRequired
// }

export default Header;
