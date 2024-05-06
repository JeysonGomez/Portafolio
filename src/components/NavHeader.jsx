import React from 'react'
import './NavHeader.css'

const NavHeader = () => {
  return (
    <header className='wrapContent bg1'>
        <nav className='navHeader'>
            <div><h1>Desarrollador</h1></div>
            <ul>
                <li><button className='btoHeader'>Inicio</button></li>
                <li><button className='btoHeader'>Proyectos</button></li>
                <li><button className='btoHeader'>Sobre Mi</button></li>
                <li><button className='btoHeader'>Contacto</button></li>
            </ul>

        </nav>

    </header>
  )
}

export default NavHeader