import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import '../styles/components/menu-stylesheet.css'
import { Link, Router } from 'react-router-dom'

class Hamburger extends React.Component {

  render () {
    return (
      <Menu 
      right
      width={ '20%' }
      >
        <Link id="home" className="menu-item" to="/">Home</Link>
        <Link id="inscricao" className="menu-item" to="/inscricao">Inscricao</Link>
        <Link id="busca" className="menu-item" to="/busca">Busca</Link>
        <Link id="sobre" className="menu-item" to="/sobre">Sobre</Link>
      </Menu>
    );
  }
}

export default Hamburger