import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {MdInsertChart} from 'react-icons/md';


import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import  Filter  from 'components/Filter';
import { Multiselect } from 'multiselect-react-dropdown';

import ver from "assets/img/ver.png";

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getDataAction } from '../Redux/dataToShow'
import { sendDataDatabase } from '../Redux/sendToDb'

import { Badge, Button, Card, CardBody, CardHeader, Col, Table, ListGroup, ListGroupItem, Row, Modal, ModalBody, ModalFooter, ModalHeader, Input, Label, FormGroup} from 'reactstrap';
import { getColor } from 'utils/colors';

const tableTypes = ['PROMEDIOS', 'MÁXIMOS', 'MÍNIMOS'];


const genPieData = () => {
  return {
    datasets: [
      {
        data: [40,20,10,10,20],
        backgroundColor: [
          getColor('primary'),
          getColor('secondary'),
          getColor('success'),
          getColor('info'),
          getColor('danger'),
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['<92', '>92', 'PEMEX DIESEL', 'Gasoleo B', 'Diesel A+'],
  };
};


class Masivo extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      selectAll:false, 
      simular:false,
      simular1:false,
      simular2:false,
      simular3:false,
      preciotoplay:'',
      diferencia:'',
      dataReal:[],
      productos:[],
      prod:[],
      empresa:[],
      negocio:[],
      precio:[], 
      margen:[]
    }

    this.selectChooseAll = this.selectChooseAll.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    const allEstaciones = this.props.data.metrics.array.estaciones;
    this.state.dataReal.push(allEstaciones)
    allEstaciones.map((prod, i) => {
      this.state.empresa.push({name: prod.empresa, id: i})
      prod.productos.map((s, i) => {
        this.state.productos.push(s.nombre)
        console.log("ssss", s)
      })
    })
    const newArr = []
    const myObj = {}

    this.state.productos.forEach(el => {
      // comprobamos si el valor existe en el objeto
      if (!(el in myObj)) {
        // si no existe creamos ese valor y lo añadimos al array final, y si sí existe no lo añadimos
        myObj[el] = true
        newArr.push(el)
        this.state.prod.push(el)
      }
    })    
 }

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }
  
    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  selectChooseAll(){
    console.log("prod",this.state.prod)

    if(this.state.selectAll) {
      console.log("true")
      this.setState({selectAll: false})
    } else {
      console.log("false")
    this.setState({selectAll: true}) 
    }
  }

  handleClick(event){
      if(event.target.id === '0' ) {
        this.setState({ simular: true})
      }
      if(event.target.id === '1' ) {
        this.setState({ simular1: true})
      }
      if(event.target.id === '2' ) {
        this.setState({ simular2: true})
      }
      if(event.target.id === '3' ) {
        this.setState({ simular3: true})
      }
      
  }
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    let { dataReal, empresa, negocio, precio, margen } = this.state;
    return (
      <Page>
        <Modal
              isOpen={this.state.modal_nested_parent}
              toggle={this.toggle('nested_parent')}
              className={this.props.className}>
                  <ModalHeader toggle={this.toggle('nested_parent')}>
                    ACEPTAR PRECIOS
                  </ModalHeader>
                  <ModalBody>
                    <p className="header-txt-v2">Introducir</p>
                    <FormGroup>
                      <Label for="precio">PRECIO:</Label>
                      <Input
                        id="precio"
                        value={this.state.preciotoplay}
                        onChange={(e) => this.setState({preciotoplay:e.target.value })}  />
                    </FormGroup>
                    <FormGroup>
                      <Label for="diferencia">DIFERENCIA:</Label>
                      <Input
                        id="diferencia"
                        value={this.state.diferencia}
                        onChange={(e) => this.setState({diferencia:e.target.value })}  />
                    </FormGroup>
                    <Modal
                      isOpen={this.state.modal_nested}
                      toggle={this.toggle('nested')}>
                      <ModalHeader>Nested Modal title</ModalHeader>
                      <ModalBody>Stuff and things</ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle('nested')}>
                          APLICAR
                        </Button>{' '}
                        <Button
                          color="secondary"
                          onClick={this.toggle('nested_parent')}>
                          CANCELAR
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onClick={this.toggle('nested_parent')}>
                        ACEPTAR
                    </Button>{' '}
                    <Button
                      color="danger"
                      onClick={this.toggle('nested_parent')}>
                        CANCELAR
                    </Button>
                  </ModalFooter>
                </Modal>
    <Row>
        <Col>
  
        {/* FILTRO */}
        <Row>
              <hr></hr>
            <Col md={12} >

            <div className="content-filter">
                <Col md={2} className="float-left-five">
                  <label>
                    Empresa 
                  </label>
                  <p className="filter-container">
                    <Multiselect
                        options={ empresa } // Options to display in the dropdown
                        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        className="row-filter"
                        />
                  </p>
                </Col>
                  <Col md={2} className="float-left-five">
                      <label>Negocio</label>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel icono-filter-main" viewBox="0 0 16 16" className="icon-filter">
                        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                      </svg>
                  <p className="filter-container">
                      <Multiselect
                          options={negocio} // Options to display in the dropdown
                          selectedValues={this.state.selectedValue1} // Preselected value to persist in dropdown
                          onSelect={this.onSelect} // Function will trigger on select event
                          onRemove={this.onRemove} // Function will trigger on remove event
                          displayValue="name" // Property name to display in the dropdown options
                          />
                  </p>
                  </Col>
                  <Col md={2} className="float-left-five">
                      <label>
                        Precio 
                      </label>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel icono-filter-main" viewBox="0 0 16 16" className="icon-filter">
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                    <p className="filter-container">
                      <Multiselect
                          options={precio} // Options to display in the dropdown
                          selectedValues={this.state.selectedValue2} // Preselected value to persist in dropdown
                          onSelect={this.onSelect} // Function will trigger on select event
                          onRemove={this.onRemove} // Function will trigger on remove event
                          displayValue="name" // Property name to display in the dropdown options
                          />
                    </p>
                  </Col>
                  <Col md={2} className="float-left-five">
                    <label>
                      Margen 
                    </label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel icono-filter-main" viewBox="0 0 16 16" className="icon-filter">
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                      <Multiselect
                        options={empresa} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue3} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        />
                  </Col>
                  <Col md={2} className="float-left-five">
                    <button className="btn btn-outline-secondary clear-filter btn-red">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply-all-fill" viewBox="0 0 16 16">
                        <path d="M8.021 11.9L3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
                        <path d="M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z"/>
                      </svg>
                    </button>
                  </Col>
              </div>
            </Col>
          </Row>
          <Card className="mb-3">
            <CardBody>
            <Col md={3} className="container-btn-masiva">
                <Button color="primary btn-barra-simular" onClick={this.toggle('nested_parent')}>SIMULACIÓN MASIVA</Button>
                <Button color="primary btn-barra-simular">
                  ACEPTAR &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-event" viewBox="0 0 16 16">
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                  </svg>
                </Button>

            </Col>

            <Tabs headerStyle={{fontWeight: 'bold'}} activeHeaderStyle={{color:'black'}} >

                        <Tab label="< 92">
                        <Table responsive>
                          <thead>
                              <tr>
                              <th className="text-center header-table">All <input type="radio" onChange={this.selectAll}></input></th>
                                  <th className="text-center header-table">EMPRESA</th>
                                  <th className="text-center header-table">NEGOCIO</th>
                                  <th className="text-center header-table"><span className="meaning">PRECIO DE COMPRA HOY</span><span className="detail">Precio de venta TAR de Suministro</span></th>
                                  <th className="text-center header-table"><span className="meaning">DIFERENCIA HOY Y MAÑANA</span><span className="detail">Diferencia Hoy y Mañana</span></th>
                                  <th className="text-center header-table"><span className="meaning">PVP PROMEDIO DE LA COMPETENCIA</span><span className="detail">Precio de venta promedio de la competencia</span></th>
                                  <th className="text-center header-table"><span className="meaning">PVP MÁXIMO DE LA COMPETENCIA</span><span className="detail">Precio de venta máximo de la competencia</span></th>
                                  <th className="text-center header-table"><span className="meaning">PVP MÍNIMO DE LA COMPETENCIA</span><span className="detail">Precio de venta mínimo de la competencia</span></th>
                                  <th className="text-center header-table"><span className="meaning">PVP COMPETENCIA ESTRATÉGICA</span><span className="detail">*</span></th>
                                  <th className="text-center header-table">PVP RECOMENDADO</th>
                                  <th className="text-center header-table">PVP SELECCIONADO</th>
                                  <th className="text-center header-table"><span className="meaning">MARGEN TEÓRICO</span><span className="detail">Dif. Precio de compra de hoy/ mañana y precio seleccionado</span></th>
                                  <th className="text-center header-table"><span className="meaning">MARGEN REAL</span><span className="detail">Dif. Última compra y precio seleccionado</span></th>
                                  <th className="text-center header-table"><span className="meaning">VOLUMEN PROMEDIO DEL MES</span><span className="detail">Volumen promedio del mes</span></th>  
                                  <th className="text-center header-table"><span className="meaning">DIFERENCIA VOLUMEN</span><span className="detail">Diferencia de volumen promedio del mes, con volumen objetivo</span></th>                      
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
                              </tr>
                          </thead>
                        <tbody>
                            <tr>
                              <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" /></td>
                              <td className="text-center">Azcapotzalco</td>
                                <td className="text-center">$15.2</td>
                                <td className="text-center">$13.5</td>
                                <td className="text-center">$15.5</td>
                                <td className="text-center">$12.2</td>
                                <td className="text-center">$13.6 </td>
                                <td className="text-center">$13.2 </td>
                                <td className="text-center">$13.3</td>
                                <td className="text-center">$12.23</td>
                                <td className="text-center bg-gray-light">$13.2</td>
                                <td className="text-center bg-gray-light">$12</td>
                                <td className="text-center bg-gray-light">$12</td>
                                <td className="text-center bg-gray-light">$12.2</td>
                                <td className="text-center bg-gray-light bg-redb">$1.4</td>
                                <td className="text-center color-red"> <a href="estacion#Azcapotzalco" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                <td className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                </td>
                            </tr>                
                        </tbody>
                      </Table>
                          
                        </Tab>
                        <Tab label="> 92">
                        <Table responsive>
                          <thead>
                              <tr>
                              <th className="text-center header-table">All <input type="radio" onChange={this.selectAll}></input></th>
                                  <th className="text-center header-table">EMPRESA</th>
                                  <th className="text-center header-table">NEGOCIO</th>
                                  <th className="text-center header-table"><span className="meaning">PRECIO DE COMPRA HOY</span><span className="detail">Precio de venta TAR de Suministro</span></th>
                                  <th className="text-center header-table"><span className="meaning">DIFERENCIA HOY Y MAÑANA</span><span className="detail">Diferencia Hoy y Mañana</span></th>
                                  <th className="text-center header-table"><span className="meaning">PVP PROMEDIO DE LA COMPETENCIA</span><span className="detail">Precio de venta promedio de la competencia</span></th>
                                  <th className="text-center header-table"><span className="meaning">PVP MÁXIMO DE LA COMPETENCIA</span><span className="detail">Precio de venta máximo de la competencia</span></th>
                                  <th className="text-center header-table"><span className="meaning">PVP MÍNIMO DE LA COMPETENCIA</span><span className="detail">Precio de venta mínimo de la competencia</span></th>
                                  <th className="text-center header-table"><span className="meaning">PVP COMPETENCIA ESTRATÉGICA</span><span className="detail">*</span></th>
                                  <th className="text-center header-table">PVP RECOMENDADO</th>
                                  <th className="text-center header-table">PVP SELECCIONADO</th>
                                  <th className="text-center header-table"><span className="meaning">MARGEN TEÓRICO</span><span className="detail">Dif. Precio de compra de hoy/ mañana y precio seleccionado</span></th>
                                  <th className="text-center header-table"><span className="meaning">MARGEN REAL</span><span className="detail">Dif. Última compra y precio seleccionado</span></th>
                                  <th className="text-center header-table"><span className="meaning">VOLUMEN PROMEDIO DEL MES</span><span className="detail">Volumen promedio del mes</span></th>  
                                  <th className="text-center header-table"><span className="meaning">DIFERENCIA VOLUMEN</span><span className="detail">Diferencia de volumen promedio del mes, con volumen objetivo</span></th>                        
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
                              </tr>
                          </thead>
                        <tbody>
                            <tr>
                              <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" /></td>
                              <td className="text-center">Naucalpan</td>
                                <td className="text-center"> 15.2</td>
                                <td className="text-center"> 13.5</td>
                                <td className="text-center">15.5</td>
                                <td className="text-center"> 13.6 </td>
                                <td className="text-center">15.6</td>
                                <td className="text-center">15.2</td>
                                <td className="text-center"> 12.23</td>
                                <td className="text-center"> 13.2</td>
                                <td className="text-center bg-gray-light">13.2</td>
                                <td className="text-center bg-gray-light"> 12</td>
                                <td className="text-center bg-gray-light"> 12</td>
                                <td className="text-center bg-gray-light"> 1.3</td>
                                <td className="text-center bg-gray-light">1.5</td>
                                <td className="text-center color-red"> <a href="estacion#Naucalpan" target="_self"> <img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                <td className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                    </td>
                            </tr>                
                        </tbody>
                      </Table>
                        </Tab>                 
                    </Tabs>
            </CardBody>
          </Card>
        </Col>
      </Row>

{/* RESUMEN*/}
<Row>
          <Col lg="8" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                RESUMEN{' '}
                <small className="text-muted text-capitalize">Por día</small>
              </CardHeader>

              <CardBody>
              {tableTypes.map((tableType, index) => (
                <row><p className="titles-m">{tableType }</p>
                      <Table {...{ [tableType || 'default']: true }} className="min_max">
                        <thead>
                          <tr>
                          <th className="header-table"></th>
                            <th className="header-table text-left">Diesel A+</th>
                            <th className="header-table text-left">{'<92'}</th>
                            <th className="header-table text-left">{'>92'}</th>
                            <th className="header-table text-left">Gasoleo B</th>
                            <th className="header-table text-left">PEMEX</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Ingreso</th>
                            <td className="menos-espacio">$12,023</td>
                            <td className="menos-espacio">$23,932</td>
                            <td className="menos-espacio">$22,333</td>
                            <td className="menos-espacio">$23,932</td>
                            <td className="menos-espacio">$23,932</td>
                          </tr>
                          <tr>
                            <th scope="row">Precio</th>
                            <td className="menos-espacio">$23.3</td>
                            <td className="menos-espacio">$13.3</td>
                            <td className="menos-espacio">$12.3</td>
                            <td className="menos-espacio">$13.3</td>
                            <td className="menos-espacio">$12.3</td>
                          </tr>
                          <tr>
                            <th scope="row">Utilidad</th>
                            <td className="menos-espacio">$10,000</td>
                            <td className="menos-espacio">$20,000</td>
                            <td className="menos-espacio">$22,500</td>
                            <td className="menos-espacio">$20,000</td>
                            <td className="menos-espacio">$22,500</td>
                          </tr>
                          <tr>
                            <th scope="row">Volumen</th>
                            <td className="menos-espacio">290 lts</td>
                            <td className="menos-espacio">320 lts</td>
                            <td className="menos-espacio">250 lts</td>
                            <td className="menos-espacio">290 lts</td>
                            <td className="menos-espacio">320 lts</td>
                          </tr>
                          <tr>
                            <th scope="row">Margen</th>
                            <td className="menos-espacio">10%</td>
                            <td className="menos-espacio">50%</td>
                            <td className="menos-espacio">65%</td>
                            <td className="menos-espacio">10%</td>
                            <td className="menos-espacio">50%</td>
                          </tr>
                        </tbody>
                      </Table>
                      </row>
                        ))}
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                RESUMEN
              </CardHeader>
              <CardBody className="bg-gradient-primary">
                <MapWithBubbles />
              </CardBody>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Número de Estaciones{' '}
                  <h4 className="text-center"><Badge color="">80</Badge></h4>
                </ListGroupItem>
                <ListGroupItem>
                <MdInsertChart size={25} color={primaryColor} /> Número de Estaciones por Producto{' '}
                </ListGroupItem>
                <ListGroupItem>
                {'<92'}
                  <Badge color="">10</Badge>
                </ListGroupItem>
                <ListGroupItem>
                {'>92'}{' '}
                  <Badge color="">10</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  {'Gasoleo B'}{' '}
                  <Badge color="">20</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  {'Diesel A+'}{' '}
                  <Badge color="">10</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  {'PEMEX DIESEL (DIESEL)'}{' '}
                  <Badge color="">30</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        
        <Row>
            <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>UTILIDAD</CardHeader>
              <CardBody>
                <Doughnut data={genPieData()} />
              </CardBody>
            </Card>
          </Col>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>MARGEN</CardHeader>
              <CardBody>
                <Doughnut data={genPieData()} />
              </CardBody>
            </Card>
          </Col>
          <Col xl={6} lg={12} md={12}>
            <Card>
              <CardHeader>VOLUMEN</CardHeader>
              <CardBody>
                <Doughnut data={genPieData()} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
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
function mapDispatchToProps(dispatch){
  return bindActionCreators({
      getDataAction,
      sendDataDatabase
  }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Masivo);