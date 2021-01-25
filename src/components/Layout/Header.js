import Avatar from 'components/Avatar';
import { UserCard } from 'components/Card';
import Notifications from 'components/Notifications';
import SearchInput from 'components/SearchInput';
import { notificationsData } from 'demos/header';
import withBadge from 'hocs/withBadge';
import logopemex from '../../assets/img/logo/logo_pemex_v2.png'

import React from 'react';
import {
  MdClearAll,
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsActive,
  MdNotificationsNone,
  MdPersonPin,
  MdSettingsApplications,
} from 'react-icons/md';
import {
  Button,
  ListGroup,
  ListGroupItem,
  // NavbarToggler,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from 'reactstrap';
import bn from 'utils/bemnames';

const bem = bn.create('header');

const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>5</small>,
})(MdNotificationsActive);

class Header extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        isOpenNotificationPopover: false,
        isNotificationConfirmed: false,
        isOpenUserCardPopover: false,
        station:'Gasolinera PEMEX | 3529',
        direccion:0,
        estacion:[
          {
            nombre:'Gasolinera PEMEX | 3529',
            direccion: 'Av. Adolfo López Mateos 518-520 Agua Azul, Mx.19 EDOMEX'
          },
          {
            nombre:'FUEL A | 3421',
            direccion: 'Av. México, No.26C,Atizapán de Zaragoza EDOMEX'
          },
          {
            nombre:'FUEL B | 1121',
            direccion: 'Calle Ignacio Zaragoza 24, CDMX'
          },
          {
            nombre:'FUEL C | 1013',
            direccion: 'Calz. Vallejo No. 510, Pro Hogar, Azcapotzalco, CDMX'
          }
        ]
      }
      this.change = this.change.bind(this);
}

change(event) {
 console.log("change", event.target.value)
 this.setState({direccion: event.target.value, state: this.state.estacion[event.target.value].nombre })
}

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
    console.log("js", this.props)
    const { isNotificationConfirmed } = this.state;

    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <img src={ logopemex }  alt="fuel" className="logo-station"/>
        <Nav navbar>
        <li>
        <select class="select-estacion-title" onChange={this.change} value={ this.state.station } >
          <option value={ 0 } selected>{ this.state.estacion[0].nombre }</option>
          <option value={ 1 }>{ this.state.estacion[1].nombre } </option>
          <option value={ 2 }>{ this.state.estacion[2].nombre }</option>
          <option value={ 3 }>{ this.state.estacion[3].nombre }</option>
        </select>
        </li>
        <li>
          <div className="direccion-estacion">
            { this.state.estacion[this.state.direccion].direccion }
          </div>
        </li>
        </Nav>

        <Nav navbar className={bem.e('nav-right')}>
          <NavItem className="d-inline-flex">
            <NavLink id="Popover1" className="position-relative">
            <p className="station-type">Estación <span className="station-name"> Líder</span></p>
            <p className="mini-text">¿Qué significa?</p>
            </NavLink>
              <Popover
              placement="bottom"
              isOpen={this.state.isOpenNotificationPopover}
              toggle={this.toggleNotificationPopover}
              target="Popover1"
            >
            <PopoverBody>
                <p>Lider</p>
             </PopoverBody>
            </Popover>
          </NavItem>
          
          <NavItem>
  
          </NavItem>
          <NavItem>
            <select class="select-estacion-hoy" onChange={this.change} value={ this.state.station } >
              <option value={ 0 } selected>Hoy para Hoy</option>
              <option value={ 0 } selected>Hoy para Mañana</option>
            </select>
          </NavItem>
          <NavItem>
            <NavLink id="Popover2">
              <Avatar
                onClick={this.toggleUserCardPopover}
                className="can-click"
              />
            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={this.state.isOpenUserCardPopover}
              toggle={this.toggleUserCardPopover}
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 250 }}
            >
              <PopoverBody className="p-0 border-light">
                <UserCard
                  title="Carina González"
                  subtitle="Carina@everis.com"
                  text="Última conexión 19 Enero 2021 10:21am"
                  className="border-light"
                >
                  <ListGroup flush>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdPersonPin /> Perfil
                    </ListGroupItem>
                   {/*} <ListGroupItem tag="button" action className="border-light">
                      <MdInsertChart /> Stats
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdMessage /> Messages
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdSettingsApplications /> Settings
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdHelp /> Help
              </ListGroupItem>*/}
                    <ListGroupItem tag="button" action className="border-light">
                      <MdExitToApp /> Cerrar Sesión
                    </ListGroupItem>
                  </ListGroup>
                </UserCard>
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
