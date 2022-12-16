import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import '../styles/components/menu-stylesheet.css'

import { Inscricao } from '../pages/Inscricao'

class Hamburger extends React.Component {

  render () {
    return (
      <Menu 
      right
      width={ '20%' }
      >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="inscricao" className="menu-item" href="/inscricao" element={<Inscricao />}>Inscricao</a>
        <a id="busca" className="menu-item" href="/busca">Busca</a>
        <a id="sobre" className="menu-item" href="/sobre">Sobre</a>
      </Menu>
    );
  }
}

export default Hamburger