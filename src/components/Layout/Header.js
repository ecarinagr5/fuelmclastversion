import { UserCard } from 'components/Card';
import withBadge from 'hocs/withBadge';
import logopemex from '../../assets/img/logo/logo_pemex_v2.png'
import logoeveris from '../../assets/img/logoeveris.png'
import moment from "moment";

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setCurrentStation } from '../../Redux/dataToUpdate' //Function to update station


import React from 'react';
import {
  MdClearAll,
  MdExitToApp,
  MdNotificationsActive,
  MdPersonPin,
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
        currentCount: 10,
        station:'',
        direccion:0,
        date:'',
        estaciones:[],
        direccionactual:'',
      }
      this.change = this.change.bind(this);
}

  componentDidMount(){
    const estaciones = this.props.data.metrics.array.estaciones;

    estaciones.map( gasolinera => {
      
      let estacion = {
        nombre:  gasolinera.PRE_EST_PERMISO_CRE + ' ' +  gasolinera.empresa,
        direccion: gasolinera.direccion,
        cre: gasolinera.PRE_EST_PERMISO_CRE
      }
      this.state.estaciones.push(estacion)
    })
    this.intervalId = setInterval(this.dateToShow.bind(this), 1000);
    this.state.direccionactual = this.state.estaciones[this.props.currentStation].direccion;
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  dateToShow(){
    let date = new Date();
    this.setState({ date });
  }

  change(event) {
    let val = this.state.estaciones[event.target.value].direccion;
    this.setState({direccionactual:val})
    this.props.setCurrentStation(event.target.value)
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
    const { isNotificationConfirmed, date, estaciones, direccionactual, idestacionactual } = this.state;
    let { pathname } = this.props.location;
    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <img src={ logopemex }  alt="fuel" className="logo-station"/>
        <Nav navbar>
        { pathname === '/masivo'  ||   pathname === '/masivoadmin' ? '' :
            <li className="margin-gasolineras">
                <select className="select-estacion-title" onChange={ this.change }>            
                  {
                    estaciones.map((prop, key)=>{
                      return (
                          <option id={key} key={key} value={key }>{ prop.nombre }</option>
                      )
                    })
                  }
                </select>
                <p className="direccion-estacion">{ direccionactual }</p>
                <p className="ranking"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></p>
            </li>
        }
        </Nav>

        <Nav navbar className={bem.e('nav-right')}>
          <NavItem className="d-inline-flex">
            <NavLink id="Popover1" className="position-relative">
              {/*<p className="station-type">
                Ranking <p className="station-name"> 1er lugar</p>
              </p>*/}
            </NavLink>
              <Popover
              placement="bottom"
              isOpen={this.state.isOpenNotificationPopover}
              toggle={this.toggleNotificationPopover}
              target="Popover1"
            >
            <PopoverBody>
                <p>Podremos colocar el precio por encima del precio promedio de la competencia.</p>
            </PopoverBody>
            </Popover>
          </NavItem>
          
          <NavItem>
  
          </NavItem>
          <NavItem>
            <p className="time-date">{ moment(date).format("MMM D YYYY hh:mm:ss") }</p>
            <p className="tipo-vision"> Hora de aplicación 7:00 pm</p>
            <select className="select-estacion-hoy" onChange={this.change} value={ this.state.station } >
              <option value={ 0 } selected>Hoy para Hoy</option>
              <option value={ 0 } selected>Hoy para Mañana</option>
            </select>
          </NavItem>
          <NavItem>
            <NavLink id="Popover2">
                <img src={logoeveris} alt="fuel" className="logo-everis"/>
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
                  text="Última conexión 25 Enero 2021 10:21am"
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

//Received Information REDUX
function mapStateToProps(state){
  return {
      data: state,
      currentStation: state.station
  }
}
//Send Information REDUX
function mapDispatchToProps(dispatch ){
  return bindActionCreators({
    setCurrentStation
  }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
