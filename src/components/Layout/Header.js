import { UserCard } from 'components/Card';
import withBadge from 'hocs/withBadge';
import logopemex from '../../assets/img/logo/logo_pemex_v2.png'
import logonatgas from '../../assets/img/logo/natgas_logo.png'
import logoeveris from '../../assets/img/logoeveris.png'
import moment from "moment";

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setCurrentStation } from '../../Redux/dataToUpdate' //Function to update station
import { setCurrentView } from '../../Redux/updateView' //Function to update station


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
        imglogo: 0,
        view:'hoy'
      }
      this.change = this.change.bind(this);
      this.changeView = this.changeView.bind(this);
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

  changeView(event) {
    this.setState({ view: event.target.value})
    this.props.setCurrentView(event.target.value)
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
    const { date, estaciones, direccionactual, idestacionactual, imglogo} = this.state;
    let { pathname } = this.props.location;
    let data  = this.props.data.metrics.array;
    let stations = this.props.data.metrics.array.estaciones;
    let current = this.props.currentStation.station;
    let lasttime = new Date();
    //console.log("stcion",stations[this.props.currentStation.station].imgid)

    lasttime = moment(lasttime).format("MMM D YYYY hh:mm:ss") 

    //console.log("data", estaciones[ this.props.currentStation.station === 'undefined' ? 0 : this.props.currentStation.station].imgid  )
    /*console.log("Estacion ", direccionactual)*/
    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
          <img src={ stations[this.props.currentStation.station] ?  stations[current].imgid : stations[0].imgid}  alt="fuel" className="logo-station"/> 
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
            <p className="tipo-vision"><span className="meaning">Hora de aplicación</span><span className="detail">Hora de aplicación predeterminada para el cambio de precio diario.</span> </p>
            <select className="select-estacion-hoy" onChange={this.changeView} value={ this.state.view } >
              <option id={1} key={1} value="hoy">Hoy para Hoy</option>
              <option id={2} key={2} value="manana">Hoy para Mañana</option>
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
                  title= {data.datanombrecompleto}
                  subtitle={data.nombrecompleto}
                  text={`Última conexión ${lasttime} `}
                  className="border-light"
                >
                  <ListGroup flush>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdPersonPin /> Perfil
                    </ListGroupItem>
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
    setCurrentStation,
    setCurrentView
  }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
