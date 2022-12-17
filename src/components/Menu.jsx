import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import '../styles/components/menu-stylesheet.css'
import { Link } from 'react-router-dom'

class Hamburger extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }
  
  render () {
    return (
      <Menu 
      isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)}
      right
      width={ '20%' }
      >
        <Link onClick={() => this.closeMenu()} id="home" className="menu-item" to="/">Home</Link>
        <Link onClick={() => this.closeMenu()} id="inscricao" className="menu-item" to="/inscricao">Inscricao</Link>
        <Link onClick={() => this.closeMenu()} id="busca" className="menu-item" to="/busca">Busca</Link>
        <Link onClick={() => this.closeMenu()} id="sobre" className="menu-item" to="/sobre">Sobre</Link>
      </Menu>
    );
  }
}

export default Hamburger