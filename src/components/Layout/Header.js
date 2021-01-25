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
  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
  };

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
          <select class="select-estacion-title">
          <option selected>Gasolinera PEMEX | 3529</option>
          <option value="1">Fuel A | 5529 </option>
          <option value="2">Fuel B | 3129</option>
          <option value="3">Fuel C | 1529</option>
        </select>
        </li>
        <li><div className="direccion-estacion">Av. Adolfo López Mateos 518-520 Agua Azul, Mx.19 EDOMEX</div></li>
        </Nav>

        <Nav navbar className={bem.e('nav-right')}>
          {/*<NavItem className="d-inline-flex">
            <NavLink id="Popover1" className="position-relative">
              {isNotificationConfirmed ? (
                <MdNotificationsNone
                  size={25}
                  className="text-secondary can-click"
                  onClick={this.toggleNotificationPopover}
                />
              ) : (
                <MdNotificationsActiveWithBadge
                  size={25}
                  className="text-secondary can-click animated swing infinite"
                  onClick={this.toggleNotificationPopover}
                />
              )}
            </NavLink>
             <Popover
              placement="bottom"
              isOpen={this.state.isOpenNotificationPopover}
              toggle={this.toggleNotificationPopover}
              target="Popover1"
            >
            <PopoverBody>
                <Notifications notificationsData={notificationsData} />
             </PopoverBody>
            </Popover>
          </NavItem>*/}
          <NavItem>
             <p className="station-type">Estación <span className="station-name"> Líder</span></p>
             <p className="station-type">¿Qué significa?</p>
          </NavItem>
          <NavItem>
             
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
