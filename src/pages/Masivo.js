import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {MdInsertChart} from 'react-icons/md';


import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import { Tabs, Tab } from 'react-bootstrap-tabs';
import  Filter  from 'components/Filter';
import { Multiselect } from 'multiselect-react-dropdown';
import GoogleMap from 'components/GoogleMap';

import ver from "assets/img/ver.png";

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getDataAction } from '../Redux/dataToShow'
import { sendDataDatabase } from '../Redux/sendToDb'
import { Badge, Button, Card, CardBody, CardHeader, Col, Table, ListGroup, ListGroupItem, Row, Modal, ModalBody, ModalFooter, ModalHeader, Input, Label, FormGroup} from 'reactstrap';
import { getColor } from 'utils/colors';

const tableTypes = ['PROMEDIOS'];
const maxTypes = ['MÁXIMOS'];
const minTypes = ['MINÍMOS'];


const genPieData = () => {
  return {
    datasets: [
      {
        data: [30,30,40],
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
    labels: [ 'regular', 'diesel', 'premium'],
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
      preciotoplay1:null,
      preciotoplay2:null,
      preciotoplay3:null,
      diferencia1:null,
      diferencia2:null,
      diferencia3:null,
      diferencia:'',
      dataReal:[],
      productos:[],
      prod:[],
      empresa:[],
      negocio:[],
      precio:[], 
      margen:[],
      idtomodify:[],
      simularid:null,
      coordenadas:[]
    }

    this.selectChooseAll = this.selectChooseAll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.fillFilter = this.fillFilter.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount(){
    const allEstaciones = this.props.data.metrics.array.estaciones;
    this.state.dataReal.push(allEstaciones)
    this.fillFilter(this.state.dataReal)
 }

 onRemove(){
  const json = []
  const allEstaciones = this.props.data.metrics.array.estaciones;
  json.push(allEstaciones)
  this.setState({ dataReal: json})
  this.fillFilter(this.state.dataReal)
 }

 fillFilter(data){
  const negocio = []
    const precio = []
    const margen = []

    data[0].map((prod, i) => {
      this.state.empresa.push({name: prod.empresa, id: i})
      negocio.push ({name:prod.negocio, id: i})
      prod.productos.map((s, i) => {
        if (s.preciodecomprahoy === s.preciodecomprahoy) {
        }
        else {
        }
        this.state.productos.push(s.nombre)
        this.state.precio.push({name:s.preciodecomprahoy , id: i})
        this.state.margen.push({name:s.margenteorico, id: i})
      })
    })

    const myObjEstacion= {}
    negocio.forEach(el => {
      // comprobamos si el valor existe en el objeto
      if (!(el in myObjEstacion)) {
        myObjEstacion[el] = true
        this.state.negocio.push (el)
      }
    })
    

    const newArr = []
    const myObj = {}
    this.state.productos.forEach(el => {
      // comprobamos si el valor existe en el objeto
      if (!(el in myObj)) {
        myObj[el] = true
        newArr.push(el)
        this.state.prod.push(el)
      }
    })    
 }

 onSelect(event, val ) {
   console.log("xd", event, val)
  let json = []
  let data = event;
  let filtrarpor = event.map(( filtro )=>{
        return filtro.name
  })

  if ( val === 'empresa') {
      let empresa =  this.state.dataReal[0].filter(function(hero) {
        return hero.empresa == filtrarpor[0];
      });

      json.push(empresa)
      this.setState({ dataReal:json, empresa:[], precio:[], margen:[]})
      this.fillFilter(this.state.dataReal)
  }
  else if ( val === 'negocio' ) {
    let negocio =  this.state.dataReal[0].filter(function(hero) {
      return hero.negocio == filtrarpor[0];
    });

    json.push(negocio)
    this.setState({ dataReal:json, empresa:[], precio:[], margen:[]})
    this.fillFilter(this.state.dataReal)
  }
 }

  toggle = modalType => (event, val) => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }
  
    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
    this.close();
  };

  close() {

    let simular1 = this.state.preciotoplay1;
    let simular2 = this.state.preciotoplay2;
    let simular3 = this.state.preciotoplay3;

    this.state.dataReal[0].map((prop, key) => {
      prop.productos[key].preciotoplay = simular1;
        /*prop.productos((prod) => {
          prop.productos = simular1
          console.log("prod",prod)
        })*/
    })

this.setState({simular:true})
  }
  selectChooseAll(){
    if(this.state.selectAll) {
      this.setState({selectAll: false})
    } else {
      this.setState({selectAll: true}) 
    }
  }

  handleClick(event, val){
    this.setState({simularid: val, simular: true})
  }

  render() {
    let { dataReal, empresa, negocio, precio, margen } = this.state;
    const { viewprice, changePrice } = this.props;
    let { estaciones } = this.props.data.metrics.array;

    return (
      <Page>
        <Modal
          isOpen={this.state.modal_nested_parent}
          toggle={this.toggle('nested_parent')}
          className={this.props.className}>
              <ModalHeader toggle={this.toggle('nested_parent')}>
                SIMULACIÓN MASIVA
              </ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col>
                      <FormGroup>
                        <Label for="precio"> PRECIO FRANJA 1:</Label>
                        <Input
                          id="preciotoplay1"
                          value={this.state.preciotoplay1}
                          onChange={(e) => this.setState({preciotoplay1:e.target.value })}  />
                      </FormGroup>
                      <FormGroup>
                        <Label for="precio"> PRECIO FRANJA 2:</Label>
                        <Input
                          id="preciotoplay2"
                          value={this.state.preciotoplay2}
                          onChange={(e) => this.setState({preciotoplay2:e.target.value })}  />
                      </FormGroup>
                      <FormGroup>
                        <Label for="precio"> PRECIO FRANJA 3:</Label>
                        <Input
                          id="preciotoplay3"
                          value={this.state.preciotoplay3}
                          onChange={(e) => this.setState({preciotoplay3:e.target.value })}  />
                      </FormGroup>
                      </Col>
                      <Col>
                      <FormGroup>
                        <Label for="precio"> DIFERENCIA FRANJA 1:</Label>
                        <Input
                          id="diferencia1"
                          value={this.state.diferencia1}
                          onChange={(e) => this.setState({diferencia1:e.target.value })}  />
                      </FormGroup>
                      <FormGroup>
                        <Label for="precio"> DIFERENCIA FRANJA 2:</Label>
                        <Input
                          id="preciotoplay2"
                          value={this.state.diferencia2}
                          onChange={(e) => this.setState({diferencia2:e.target.value })}  />
                      </FormGroup>
                      <FormGroup>
                        <Label for="precio"> DIFERENCIA FRANJA 3:</Label>
                        <Input
                          id="preciotoplay3"
                          value={this.state.diferencia3}
                          onChange={(e) => this.setState({diferencia3:e.target.value })}  />
                      </FormGroup>
                      </Col>
                    </Row>

                    {/*<FormGroup>
                      <Label for="diferencia">DIFERENCIA:</Label>
                      <Input
                        id="diferencia"
                        value={this.state.diferencia}
                        onChange={(e) => this.setState({diferencia:e.target.value })}  />
                    </FormGroup>*/}
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      name="simularmasiva"
                      color="primary"
                      onClick={this.toggle('nested_parent')}>
                        APLICAR
                    </Button>{' '}
                    <Button
                      color="danger"
                      onClick={this.toggle('nested_parent')}>
                        CANCELAR
                    </Button>
                  </ModalFooter>
                </Modal>
                {/*APLICAR PRECIOS*/}
                <Modal
                  isOpen={this.state.modal_nested_parent_b}
                  toggle={this.toggle('nested_parent_b')}
                  className={this.props.className}>
                  <ModalHeader toggle={this.toggle('nested_parent_b')}>
                    APLICAR PRECIOS
                  </ModalHeader>
                  <ModalBody>
                    <p className="header-txt-v2">Estas seguro de Aplicar los siguientes cambios:</p>
                      <br />
                      <Table responsive>
                        <thead>
                          <tr>
                            <th className="header-table">PRODUCTO</th>
                            { viewprice ? <th className="header-table">PVP RECOMENDADO </th> :  <th className="header-table">PVP FRANJA 1</th> }
                            { viewprice ? '' : <th className="header-table">PVP FRANJA 2</th> }
                            { viewprice ? '' : <th className="header-table">PVP FRANJA 3</th> }
                            <th className="header-table">MARGEN REAL</th>
                            <th className="header-table">MARGEN TEÓRICO</th>
                          </tr>
                        </thead>
                        <tbody>
                        {   
                          dataReal.map((prop, key) => {
                            return (
                              <tr>
                                <td key={key} className="text-center text-mini">{ prop.nombre }</td>
                                { viewprice ? <td key={key} className="text-center text-mini text-shadow">${ prop.preciomodificadofranja1 >  0 ? prop.preciomodificadofranja1  : prop.pvprecomendado }</td> : <td key={key} className="text-center text-mini text-shadow">${ prop.preciomodificadofranja1 >  0 ? prop.preciomodificadofranja1  : prop.pvprecomendadofranja1 }</td> }
                                { viewprice ? '' : <td key={key} className="text-center text-mini text-shadowb">${ prop.preciomodificadofranja2 >  0 ? prop.preciomodificadofranja2  : prop.pvprecomendadofranja2 }</td> }
                                { viewprice ?  '' : <td key={key} className="text-center text-mini text-shadowc">${ prop.preciomodificadofranja3 >  0 ? prop.preciomodificadofranja3  : prop.pvprecomendadofranja3 }</td> }
                                <td key={key} className="text-center text-mini">${ prop.margenreal }</td>
                                <td key={key} className="text-center text-mini">${ prop.margenteorico }</td>
                            </tr>
                            )
                          })}
                        </tbody>
                      </Table>
                      <br></br>
                      <Table>
                        <tr>
                          <td className="id_negocio_class">Id Negocio: <span className="id_negocio">129AB</span></td>
                        </tr>
                        <tr>
                          <td className="id_negocio_class">{ viewprice ? 'Hora de Aplicación' :'Hora de Aplicación Franja 1' }: <input type="time" id="appt" name="appt" min="09:00" max="18:00" placeholder="8:00" required/></td>
                        </tr>
                      { viewprice ? '' :
                        <tr>
                          <td className="id_negocio_class">Hora de Aplicación Franja 2: <input type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
                        </tr> }
                      { viewprice ? '' :
                        <tr>
                          <td className="id_negocio_class">Hora de Aplicación Franja 3: <input type="time" id="appt" name="appt" min="09:00" max="18:00" required/></td>
                        </tr>
                      }
                      </Table>
                    <br />
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onClick={this.toggle('nested_parent_b')}>
                        ACEPTAR
                    </Button>{' '}
                    <Button
                      color="danger"
                      onClick={this.toggle('nested_parent_b')}>
                        CANCELAR
                    </Button>
                  </ModalFooter>
                </Modal>
        <Row>
        <Col>
          {/* Numero de estaciones */}

          <div class="card-body">
            <h6 className="line_sib"><b>Número de estaciones</b></h6>
            <button class="mr-1 btn btn-outline-third bold">Total:<span class="color_price">  5</span></button>
            <button class="mr-1 btn btn-outline-third bold">Regular:<span class="color_price">5</span></button>
            <button class="mr-1 btn btn-outline-third bold">Premium:<span class="color_price">3</span></button>
            <button class="mr-1 btn btn-outline-third bold">Diesel: <span class="color_price">1</span></button>
          </div>
  
      {/* FILTRO */}
        <Row>
              <hr></hr>
            <Col md={12} >
            <div className="content-filter">
              <Col md={2} className="float-left-five">
                    <label>
                      Empresa 
                    </label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel icono-filter-main" viewBox="0 0 16 16" className="icon-filter">
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                      <Multiselect
                        options={empresa} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue3} // Preselected value to persist in dropdown
                        onSelect={(e) => this.onSelect(e,'empresa')} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        />
                  </Col>
                <Col md={2} className="float-left-five">
                    <label>
                      Negocio 
                    </label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel icono-filter-main" viewBox="0 0 16 16" className="icon-filter">
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                      <Multiselect
                        options={negocio} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue3} // Preselected value to persist in dropdown
                        onSelect={(e) => this.onSelect(e,'negocio'} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        />
                  </Col>
                  <Col md={2} className="float-left-five">
                    <label>
                      Precio 
                    </label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel icono-filter-main" viewBox="0 0 16 16" className="icon-filter">
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                      <Multiselect
                        options={precio} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue3} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        />
                  </Col>
                  <Col md={2} className="float-left-five">
                    <label>
                      Margen 
                    </label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel icono-filter-main" viewBox="0 0 16 16" className="icon-filter">
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                      <Multiselect
                        options={margen} // Options to display in the dropdown
                        selectedValues={this.state.selectedValue3} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        />
                  </Col>
              </div>
            </Col>
          </Row>
     {/* FILTRO */}
          <Card className="mb-3">
            <CardBody>
            <Col md={3} className="container-btn-masiva">
              <Button color="primary btn-barra-simular" onClick={this.toggle('nested_parent')}>SIMULACIÓN MASIVA</Button>
              <Button color="primary btn-barra-simular" onClick={this.toggle('nested_parent_b')}> ACEPTAR &nbsp; </Button>
            </Col>

            <Tabs headerStyle={{fontWeight: 'bold'}} activeHeaderStyle={{color:'black'}} >
                <Tab label="Diesel" >
                    <Table responsive>
                      <thead>
                          <tr>
                            <th className="text-center header-table min-font">All <input type="radio" onChange={this.selectChooseAll}></input></th>
                            <th className="text-center header-table min-font">EMPRESA</th>
                            <th className="text-center header-table min-font">NEGOCIO</th>
                            <th className="text-center header-table min-font"><span className="meaning">PRECIO DE COMPRA HOY</span><span className="detail">Precio de compra publicado por la CRE para el día de hoy.</span></th>
                            <th className="text-center header-table min-font"><span className="meaning">DIFERENCIA HOY Y MAÑANA</span><span className="detail">Diferencia entre precio de compra de hoy y de mañana.</span></th>
                            <th className="text-center header-table min-font"><span className="meaning">PVP PROMEDIO DE LA COMPETENCIA</span><span className="detail">Precio promedio ponderado de la competencia.</span></th>
                            <th className="text-center header-table min-font"><span className="meaning">PVP MÁXIMO DE LA COMPETENCIA</span><span className="detail">Precio promedio de venta máximo de la competencia</span></th>
                            <th className="text-center header-table min-font"><span className="meaning">PVP MÍNIMO DE LA COMPETENCIA</span><span className="detail">Precio promedio de venta mínimo de la competencia</span></th>
                            <th className="text-center header-table min-font" min-font><span className="meaning">PVP COMPETENCIA ESTRATÉGICA</span><span className="detail">Precio promedio de la competencia estratégica</span></th>
                            { this.state.simular ? <th className="header-table min-font">{!this.props.changePrice  ? 'SIMULACIÓN FRANJA 1' : 'SIMULACIÓN'}</th> : '' }
                            { !this.props.changePrice ? <th className="header-table min-font"><span className="meaning">PRECIO RECOMENDADO FRANJA 1 </span><span className="detail">Precio recomendado desde la hora { "00:01" } hasta la hora { "11:00" }</span> </th> : <th className="header-table min-font"><span className="meaning">PRECIO RECOMENDADO </span> </th>}
                            { this.state.simular && !this.props.changePrice ? <th className="header-table min-font">SIMULACIÓN FRANJA 2</th> : '' }
                            { !this.props.changePrice ? <th className="header-table min-font"><span className="meaning">PRECIO RECOMENDADO FRANJA 2 </span><span className="detail">Precio recomendado desde la hora { "11:01" } hasta la hora { "18:00" }</span> </th> : '' }
                            { this.state.simular && !this.props.changePrice ? <th className="header-table min-font">SIMULACIÓN FRANJA 3</th> : '' }
                            { !this.props.changePrice ? <th className="header-table min-font"><span className="meaning">PRECIO RECOMENDADO FRANJA 3 </span><span className="detail">Precio recomendado desde la hora { "18:01" } hasta la hora { "24:00" }</span> </th> : '' }
                            <th className="text-center header-table min-font"><span className="meaning">MARGEN TEÓRICO PROMEDIO</span><span className="detail">Dif. Precio de compra de hoy/ mañana y precio seleccionado</span></th>
                            <th className="text-center header-table min-font"><span className="meaning">MARGEN REAL PROMEDIO</span><span className="detail">Dif. Última compra y precio seleccionado</span></th>
                            <th className="text-center header-table min-font"><span className="meaning">DIFERENCIA VOLUMEN</span><span className="detail">Diferencia de volumen promedio del mes, con volumen objetivo</span></th>                     
                            <th className="text-center header-table"></th>
                            <th className="text-center header-table"></th>
                            
                            
                          </tr>
                      </thead>
                    <tbody>
                    {

                      dataReal[0].map((prop,i) => {
                          let producto = prop.productos
                          let diferenciaprecio =  producto[0].preciodecomprahoy - producto[0].preciocompramanana;
                          let preciopromediocompetencia = (producto[0].competencia1 + producto[0].competencia2 +producto[0].competencia3 + producto[0].competencia4 + producto[0].competencia5)/ 5;
                          let arrayToDefine = [ producto[0].competenciaestrategica, producto[0].competencia1, producto[0].competencia2, producto[0].competencia3, producto[0].competencia4, producto[0].competencia5, producto[0].competenciaestrategica ];
                          let min = Math.min.apply(Math, arrayToDefine);
                          let max = Math.max.apply(Math, arrayToDefine);
                          let estacionroute = '/#' + prop.PRE_EST_PERMISO_CRE;
                          let diferenciaVolumen = producto[0].volumenobjetivo - producto[0].volumenreal; 
                          let diferencia1 = producto[0].pvprecomendadofranja1 - this.state.diferencia1;
                          let diferencia2 = producto[0].pvprecomendadofranja2 - this.state.diferencia2;
                          let diferencia3 = producto[0].pvprecomendadofranja3 - this.state.diferencia3;
                          return (
                          <tr>
                            <td className="text-center color-blue"> <input type="radio" id={ i } name={ i } value={ i } checked={this.state.selectAll ? true : false}/></td>
                            <td className="text-left nombre-empresa">{ prop.empresa }</td>
                            <td className="text-center"> { prop.negocio } </td>
                            <td className="text-center">$ { producto[0].preciodecomprahoy }</td>
                            <td className="text-center">$ { diferenciaprecio.toFixed(2) }</td>
                            <td className="text-center">$ {preciopromediocompetencia.toFixed(2)}</td>
                            <td className="text-center">$ {max.toFixed(2)}</td>
                            <td className="text-center">$ {min.toFixed(2)}</td>
                            <td className="text-center">$ {producto[0].competenciaestrategica}</td>
                          { this.state.simular ? this.state.simularid === i ? <td className="text-center bg-gray-light"><p><input type="radio" name={ 'franja1' + producto[0].nombre + i } value={producto[0].simularfranja1} className="dato_ms" /> <input type="number" className="input-simulacion-dos" placeholder="" value={producto[0].simularfranja1}/> </p></td> : <td className="text-center bg-gray-light">{ this.state.diferencia1 ? diferencia1.toFixed(2) : this.state.preciotoplay1 }</td> : '' }
                            <td className="text-center text-shadow text-shadow">{ this.state.simularid === i  ? <input type="radio" name={ 'franja1' + producto[0].nombre + i } value={producto[0].simularfranja1}  /> :''} $ { producto[0].pvprecomendadofranja1} </td>
                          { !this.props.changePrice ?  this.state.simular ? this.state.simularid === i  ? <td className="text-center bg-gray-light"><p><input type="radio" name={ 'franja2' + producto[0].nombre + i } value={producto[0].simularfranja2} className="dato_ms" /> <input type="number" className="input-simulacion-dos" placeholder="" value={producto[0].simularfranja2}/> </p></td> :  <td className="text-center bg-gray-light">{ this.state.diferencia2 ? diferencia2.toFixed(2)  : this.state.preciotoplay2 }</td> : '' : ''}
                          { !this.props.changePrice ? <td className="text-center text-shadow text-shadowb">{ this.state.simularid === i  ? <input type="radio" name={ 'franja2' + producto[0].nombre + i } value={producto[0].simularfranja2}  /> : ''  } $ { producto[0].pvprecomendadofranja2} </td> : '' }
                          { !this.props.changePrice ? this.state.simular ? this.state.simularid  === i ? <td className="text-center bg-gray-light"><p><input type="radio" name={ 'franja2' + producto[0].nombre + i } value={producto[0].simularfranja2} className="dato_ms" /> <input type="number" className="input-simulacion-dos" placeholder="" value={producto[0].simularfranja3}/> </p></td> : <td className="text-center bg-gray-light">{ this.state.diferencia3 ? diferencia3.toFixed(2) : this.state.preciotoplay3  }</td> : '' : '' }
                          { !this.props.changePrice ? <td className="text-center text-shadow text-shadowc">{ this.state.simularid === i  ?  <input type="radio" name="radio1" value=""  /> : '' } $ { producto[0].pvprecomendadofranja3} </td> : ''  }
                            <td className={ producto[0].margenteorico < producto[0].margenobjetivo ? "text-center bg-gray-light txt-ok" :  producto[0].margenteorico > producto[0].margenobjetivo ? "text-center bg-gray-light txt-high" : "text-center bg-gray-light"} > $ { producto[0].margenteorico }</td>
                            <td className={ producto[0].margenreal < producto[0].margenobjetivo ? "text-center bg-gray-light txt-ok" :  producto[0].margenreal > producto[0].margenobjetivo ? "text-center bg-gray-light txt-high" : "text-center bg-gray-light"} > ${ producto[0].margenreal} </td>
                            <td className="text-center bg-gray-light"> { producto[0].volumenobjetivomensual }%</td>
                            <td className="text-center"><a href={estacionroute} target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                            {this.state.simularid === i ? 
                            <td className="text-center">
                              <span> X </span>
                            </td>
                            :
                            <td className="text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" id={i} width="16" height="16" fill="currentColor" class="bi bi-pencil editicon" viewBox="0 0 16 16" id="0" onClick={ (e) => this.handleClick(e, i) }>
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                              </svg>
                            </td>
                            }
                          </tr>
                          )
                      })
                    }            
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
    <Col lg="12" md="12" sm="12" xs="12">
        <Card>
          <CardHeader>
            RESUMEN
          </CardHeader>
          <CardBody className="bg-gradient-primary">
            {/*<MapWithBubbles />*/}
            <GoogleMap estaciones={ estaciones } />
          </CardBody>
        </Card>
      </Col>
</Row>
<Row>
          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardBody>
              {tableTypes.map((tableType, index) => (
                <row>
                    <p className="titles-m">{tableType }</p>
                      <Table {...{ [tableType || 'default']: true }} className="min_max">
                        <thead>
                          <tr>
                          <th className="header-table"></th>
                            <th className="header-table text-left">magna</th>
                            <th className="header-table text-left">diesel</th>
                            <th className="header-table text-left">premium</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Ingreso</th>
                            <td className="menos-espacio">$12,023</td>
                            <td className="menos-espacio">$23,932</td>
                            <td className="menos-espacio">$22,333</td>
                          </tr>
                          <tr>
                            <th scope="row">Precio</th>
                            <td className="menos-espacio">$23.3</td>
                            <td className="menos-espacio">$13.3</td>
                            <td className="menos-espacio">$12.3</td>
                          </tr>
                          <tr>
                            <th scope="row">Utilidad</th>
                            <td className="menos-espacio">$10,000</td>
                            <td className="menos-espacio">$20,000</td>
                            <td className="menos-espacio">$22,500</td>
                          </tr>
                          <tr>
                            <th scope="row">Volumen</th>
                            <td className="menos-espacio">290 lts</td>
                            <td className="menos-espacio">320 lts</td>
                            <td className="menos-espacio">250 lts</td>
                          </tr>
                          <tr>
                            <th scope="row">Margen Teoríco</th>
                            <td className="menos-espacio">10%</td>
                            <td className="menos-espacio">50%</td>
                            <td className="menos-espacio">65%</td>
                          </tr>
                          <tr>
                            <th scope="row">Margen Real</th>
                            <td className="menos-espacio">10%</td>
                            <td className="menos-espacio">50%</td>
                            <td className="menos-espacio">65%</td>
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
              <CardBody>
              {maxTypes.map((tableType, index) => (
                <row>
                    <p className="titles-m">{tableType }</p>
                      <Table {...{ [tableType || 'default']: true }} className="min_max">
                        <thead>
                          <tr>
                          <th className="header-table"></th>
                            <th className="header-table text-left">magna</th>
                            <th className="header-table text-left">diesel</th>
                            <th className="header-table text-left">premium</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Ingreso</th>
                            <td className="menos-espacio">$12,023</td>
                            <td className="menos-espacio">$23,932</td>
                            <td className="menos-espacio">$22,333</td>
                          </tr>
                          <tr>
                            <th scope="row">Precio</th>
                            <td className="menos-espacio">$23.3</td>
                            <td className="menos-espacio">$13.3</td>
                            <td className="menos-espacio">$12.3</td>
                          </tr>
                          <tr>
                            <th scope="row">Utilidad</th>
                            <td className="menos-espacio">$10,000</td>
                            <td className="menos-espacio">$20,000</td>
                            <td className="menos-espacio">$22,500</td>
                          </tr>
                          <tr>
                            <th scope="row">Volumen</th>
                            <td className="menos-espacio">290 lts</td>
                            <td className="menos-espacio">320 lts</td>
                            <td className="menos-espacio">250 lts</td>
                          </tr>
                          <tr>
                            <th scope="row">Margen Teoríco</th>
                            <td className="menos-espacio">10%</td>
                            <td className="menos-espacio">50%</td>
                            <td className="menos-espacio">65%</td>
                          </tr>
                          <tr>
                            <th scope="row">Margen Real</th>
                            <td className="menos-espacio">10%</td>
                            <td className="menos-espacio">50%</td>
                            <td className="menos-espacio">65%</td>
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
              <CardBody>
              {minTypes.map((tableType, index) => (
                <row>
                    <p className="titles-m">{tableType }</p>
                      <Table {...{ [tableType || 'default']: true }} className="min_max">
                        <thead>
                          <tr>
                          <th className="header-table"></th>
                            <th className="header-table text-left">magna</th>
                            <th className="header-table text-left">diesel</th>
                            <th className="header-table text-left">premium</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Ingreso</th>
                            <td className="menos-espacio">$12,023</td>
                            <td className="menos-espacio">$23,932</td>
                            <td className="menos-espacio">$22,333</td>
                          </tr>
                          <tr>
                            <th scope="row">Precio</th>
                            <td className="menos-espacio">$23.3</td>
                            <td className="menos-espacio">$13.3</td>
                            <td className="menos-espacio">$12.3</td>
                          </tr>
                          <tr>
                            <th scope="row">Utilidad</th>
                            <td className="menos-espacio">$10,000</td>
                            <td className="menos-espacio">$20,000</td>
                            <td className="menos-espacio">$22,500</td>
                          </tr>
                          <tr>
                            <th scope="row">Volumen</th>
                            <td className="menos-espacio">290 lts</td>
                            <td className="menos-espacio">320 lts</td>
                            <td className="menos-espacio">250 lts</td>
                          </tr>
                          <tr>
                            <th scope="row">Margen Teoríco</th>
                            <td className="menos-espacio">10%</td>
                            <td className="menos-espacio">50%</td>
                            <td className="menos-espacio">65%</td>
                          </tr>
                          <tr>
                            <th scope="row">Margen Real</th>
                            <td className="menos-espacio">10%</td>
                            <td className="menos-espacio">50%</td>
                            <td className="menos-espacio">65%</td>
                          </tr>
                        </tbody>
                      </Table>
                      </row>
                        ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
        
        <Row>
            <Col xl={4} lg={12} md={12}>
            <Card>
              <CardHeader>MARGENN TEORÍCO</CardHeader>
              <CardBody>
                <Doughnut data={genPieData()} />
              </CardBody>
            </Card>
          </Col>
          <Col xl={4} lg={12} md={12}>
            <Card>
              <CardHeader>MARGEN REAL</CardHeader>
              <CardBody>
                <Doughnut data={genPieData()} />
              </CardBody>
            </Card>
          </Col>
          <Col xl={4} lg={12} md={12}>
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
      currentStation: state.station,
      currentView:state.setView,
      changePrice:state.changePrice
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
