import React from 'react';
import FixedMenu from '../../components/FixedMenu/FixedMenu';
import MenuItem from '../../components/MenuItem/MenuItem';
import logo from '../../img/logo.png';

function Header(props) {
	return(
		<header className="Header" id="inicio">
      <FixedMenu>
        <MenuItem text="Início" link="#inicio" />
        <MenuItem text="O Concurso" link="#concurso" />
        <MenuItem text="Sobre" link="#sobre" />
        <MenuItem text="Regras" link="#regras" />
        <MenuItem text="Inscrição" action={props.showModal} />
      </FixedMenu>
      <div className="Banner"></div>
      <div className="Logo">
        <img alt="Varal das Águas" src={logo} />
      </div>
    </header>
	);
}

export default Header;