import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import '../styles/components/menu-stylesheet.css'

class Hamburger extends React.Component {

  render () {
    return (
      <Menu 
      right
      width={ '20%' }
      >
        <a id="home" className="menu-item" path="/">Home</a>
        <a id="inscricao" className="menu-item" href="/inscricao">Inscricao</a>
        <a id="busca" className="menu-item" href="/busca">Busca</a>
        <a id="sobre" className="menu-item" href="/sobre">Sobre</a>
      </Menu>
    );
  }
}

export default Hamburger