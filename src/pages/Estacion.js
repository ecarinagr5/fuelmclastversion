//Libraries
import moment from "moment";
import Slider from "react-slick";

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getDataAction } from '../Redux/dataToShow'
import { sendDataDatabase } from '../Redux/sendToDb'
import { setCurrentView } from '../Redux/updateView' //Function to update station

//Components
import Page from 'components/Page';
import UserProgressTable from 'components/UserProgressTable';
import { randomNum } from 'utils/demos';

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Button, Card, CardBody, CardHeader, Col, Table, Modal, ModalBody,ModalFooter, ModalHeader, Row, Badge } from 'reactstrap';
import { getColor } from 'utils/colors';

//Views
import Welcome from './Welcome';

const MONTHS = ['10/02/2021'];


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};



class Estacion extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      simular:false,
      tools:false,
      date:'', 
      dataReal:[],
      graficatoshow:'',
      competencias:[],
      productgraph:'',
      idproduct:0,
      update:0,
      view:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handSimulate = this.handSimulate.bind(this);
    this.addValue =  this.addValue.bind(this);
    this.resetSimulador = this.resetSimulador.bind(this);
    this.handTools = this.handTools.bind(this);
    this.genLineDataMONTHS = this.genLineDataMONTHS.bind(this);
    this.updateGraph = this.updateGraph.bind(this);
 }

 componentWillMount(){
    //Setea los datos de redux
    const idestacion = !this.props.currentStation ?  this.props.currentStation : this.props.currentStation.station;
    const allProducts = this.props.data.metrics.array.estaciones[idestacion].productos;
    this.state.dataReal.push(allProducts)
    this.setState({view: this.props.currentView})
 }

 componentDidMount(){
  window.scrollTo(0, 0);
}

componentWillUpdate(prevProps){
  if(prevProps.currentStation.station) {
    this.state.dataReal =[] 
    const allProducts = this.props.data.metrics.array.estaciones[prevProps.currentStation.station].productos;
    this.state.dataReal.push(allProducts)
  }
}

updateGraph(event){
  this.setState({productgraph: event.target.value})
}
dateToShow(){
  let date = new Date();
  this.setState({ date });
}

handTools() {
  this.setState({ tools: !this.state.tools })
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

  let data=[ {
    preciosimulado:23.4
  }]
  this.props.sendDataDatabase(data)
};


resetSimulador(){
  this.setState({simular:false})
  let modificado = this.state.dataReal[0];
      modificado.map((pop, i) => {
        pop.simularfranja1 = null;
        pop.simularfranja2 = null;
        pop.simularfranja3 = null;
        pop.preciomodificadofranja1 = 0;
        pop.preciomodificadofranja2 = 0;
        pop.preciomodificadofranja3 = 0;
      })
}

  handSimulate(event) {
    let count = this.state.update + 1;
    let modificado = this.state.dataReal[0];
    let name = event.target.name;
    let tipodefranja = name.indexOf('ja1') > 0 ? 'franja1': name.indexOf('ja2') > 0 ? 'franja2' :  name.indexOf('ja3') > 0 ? 'franja3': '';

    if (tipodefranja ===  'franja1') {
        //Update Data
        modificado[event.target.id].preciomodificadofranja1 = event.target.value === '' ? modificado[event.target.id].simularfranja1 : event.target.value;
    }
    else if (tipodefranja === 'franja2') {
      modificado[event.target.id].preciomodificadofranja2 = event.target.value === '' ? modificado[event.target.id].simularfranja2 : event.target.value
    }
    else if (tipodefranja ===  'franja3') {
      modificado[event.target.id].preciomodificadofranja3 = event.target.value === '' ? modificado[event.target.id].simularfranja3 : event.target.value
    }

    //Calculate Average
    let franja1 =  this.state.view === 'manana' ? modificado[event.target.id].pvprecomendadomananafranja1 > 0 ? parseInt(modificado[event.target.id].pvprecomendadomananafranja1) : parseInt(modificado[event.target.id].pvprecomendadofranja1) : modificado[event.target.id].preciomodificadofranja1 > 0 ? parseInt(modificado[event.target.id].preciomodificadofranja1) : parseInt(modificado[event.target.id].pvprecomendadofranja1);
    let franja2 =  this.state.view === 'manana' ? modificado[event.target.id].pvprecomendadomananafranja2 > 0 ? parseInt(modificado[event.target.id].pvprecomendadomananafranja2) : parseInt(modificado[event.target.id].pvprecomendadofranja1) : modificado[event.target.id].preciomodificadofranja2 > 0 ? parseInt(modificado[event.target.id].preciomodificadofranja2) : parseInt(modificado[event.target.id].pvprecomendadofranja2);
    let franja3 =   this.state.view === 'manana' ? modificado[event.target.id].pvprecomendadomananafranja3 > 0 ? parseInt(modificado[event.target.id].pvprecomendadomananafranja3) : parseInt(modificado[event.target.id].pvprecomendadofranja1) : modificado[event.target.id].preciomodificadofranja3 > 0 ? parseInt(modificado[event.target.id].preciomodificadofranja3) : parseInt(modificado[event.target.id].pvprecomendadofranja3);
    
    modificado[event.target.id].preciopromediofranjas = ( franja1 + franja2 + franja3 ) / 3;

    //Update Margen Table
    this.setState({update: count})
  }

  addValue(event){
    let m = this.state.dataReal[0];
    let name = event.target.name;
    if( name === 'simularfranja1' ) {
      m[event.target.id].simularfranja1 =  event.target.value;
    }
    else if ( name === 'simularfranja2' ) {
      m[event.target.id].simularfranja2 =  event.target.value;
    }
    else if ( name === 'simularfranja3' ) {
      m[event.target.id].simularfranja3 =  event.target.value;
    }
  }

  handleClick(){
    this.setState({ simular: true})
  }


  //Function to return lines
genLineDataMONTHS = (moreData = {}, moreData2 = {}) => {
    let product = this.state.dataReal[0];
    let competencias = this.state.competencias[0];
    let productgraph = this.state.productgraph;
    let idproduct = this.state.idproduct

    product.map((x, index) => {
      if(productgraph === x.nombre )
        {
          idproduct = index;
        }
      else{
        return 'no'
      }
    });
    let promedioactual =  this.state.view === 'manana' ? ( product[idproduct].pvprecomendadomananafranja1 + product[idproduct].pvprecomendadomananafranja2 + product[idproduct].pvprecomendadomananafranja3 ) / 3 : ( product[idproduct].pvprecomendadofranja1 + product[idproduct].pvprecomendadofranja2 + product[idproduct].pvprecomendadofranja3 ) / 3;
    let promedio = product[idproduct].preciopromediofranjas > 0 ? product[idproduct].preciopromediofranjas : promedioactual;
    return {
      labels: MONTHS,
      datasets: [
        {
          label: 'Precio de Compra',
          backgroundColor: getColor('danger'),
          borderColor: getColor('danger'),
          borderWidth: 2,
          data: [
            product[idproduct].preciodecompra,
          ],
          ...moreData,
        },
        {
          label: 'Precio Promedio de venta de la competencia',
          backgroundColor: getColor('info'),
          borderColor: getColor('info'),
          borderWidth: 3,
          data: [
            product[idproduct].pvppromediodelacompentencia,
          ],
          ...moreData,
        },
        {
          label: competencias[0].nombre,
          backgroundColor: getColor('primary'),
          borderColor: getColor('primary'),
          borderWidth: 0,
          data: [
            product[idproduct].competenciaestrategica,
          ],
          ...moreData2,
        }, 
        {
          label: competencias[1].nombre,
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            product[idproduct].competencia1,
          ],
          ...moreData2,
        },
        {
          label: competencias[2].nombre,
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            product[idproduct].competencia2,
          ],
          ...moreData2,
        },
        {
          label: competencias[3].nombre,
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            product[idproduct].competencia3,
          ],
          ...moreData2,
        },
        {
          label: competencias[4].nombre,
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            product[idproduct].competencia4,
          ],
          ...moreData2,
        },
        {
          label: 'Precio de venta promedio del día',
          backgroundColor: getColor('info'),
          borderColor: getColor('info'),
          borderWidth: 1,
          data: [
            promedio.toFixed(2)
          ],
          ...moreData2,
        },
      ],
    };
  };



  render() {
    const dataReal = this.state.dataReal[0];
    const competenciastotal = this.props.data.metrics.array.estaciones;
    const view = this.props.currentView.view ? this.props.currentView.view : this.props.currentView;
    const viewprice = this.props.viewprice;
    let date = new Date();
    date = moment(date).format("MMM D YYYY hh:mm:ss") 

    competenciastotal.map(( prop ) =>{
        this.state.competencias.push(prop.competencias);
    })
    let competencias =  this.state.competencias[0]


    return (
      <Page>
            {/* Welcome View */}
            {/*<Welcome />*/}
              {/* Modal View */}
              <Modal
                  isOpen={this.state.modal_nested_parent}
                  toggle={this.toggle('nested_parent')}
                  className={this.props.className}>
                  <ModalHeader toggle={this.toggle('nested_parent')}>
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
                            <th className="header-table">UTILIDAD</th>
                          </tr>
                        </thead>
                        <tbody>
                        {   
                          dataReal.map((prop, key) => {
                            return (
                              <tr>
                                <td key={key} className="text-center text-mini">{ prop.nombre }</td>
                                { viewprice ? <td key={key} className="text-center text-mini text-shadow">${ prop.pvprecomendado }</td> : <td key={key} className="text-center text-mini text-shadow">${ prop.preciomodificadofranja1 >  0 ? prop.preciomodificadofranja1  : prop.pvprecomendadofranja1 }</td> }
                                { viewprice ? '' : <td key={key} className="text-center text-mini text-shadowb">${ prop.preciomodificadofranja2 >  0 ? prop.preciomodificadofranja2  : prop.pvprecomendadofranja2 }</td> }
                                { viewprice ?  '' : <td key={key} className="text-center text-mini text-shadowc">${ prop.preciomodificadofranja3 >  0 ? prop.preciomodificadofranja3  : prop.pvprecomendadofranja3 }</td> }
                                <td key={key} className="text-center text-mini">${ prop.margenreal }</td>
                                <td key={key} className="text-center text-mini">${ prop.margenteorico }</td>
                                <td key={key} className="text-center text-mini">${ prop.utilidad }</td>
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
                <div class="card-body">
                  {
                    dataReal.map((prop, key) => {
                      return (
                        <button class="mr-1 btn btn-outline-third bold">{prop.nombre} <span class="color_price"> ${prop.preciorealdehoy }</span></button>
                      )
                    })
                  }
              </div>
      <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>PRECIOS DE VENTA
              <div className="container-buttons">
                <Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">SIMULAR</Button>
                {/*<Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">APLICAR</Button>*/}
                <Button color="primary" onClick={this.toggle('nested_parent')} className="btn-main-fuel-right">
                  ACEPTAR &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-event" viewBox="0 0 16 16">
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                  </svg>
                </Button>

                <Button color="danger" onClick={this.resetSimulador} className="btn-main-fuel-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-reply-all-fill" viewBox="0 0 16 16">
                  <path d="M8.021 11.9L3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
                  <path d="M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z"/>
                </svg>
              </Button>
              </div>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="header-table">PRODUCTO</th>
                    <th className="header-table"><span className="meaning">PRECIO PROMEDIO PONDERADO</span><span className="detail">Precio promedio ponderado de la competencia</span> </th>
                    {  
                    competencias.map((prop, key) => { 
                      if( prop.estrategica ) {
                          return(<th className="header-table color-estrategia">{prop.nombre} Competencia Estratégica</th>)
                      }
                      else {
                          return( <th className="header-table">{prop.nombre}</th> )
                      }
                    })
                  }
                    { view === 'manana' ? <th className="header-table"><span className="meaning">PRECIO REAL DE MAÑANA </span><span className="detail">Precio más actualizado de la EESS publicado por la CRE</span> </th> : <th className="header-table"><span className="meaning">PRECIO ACTUAL </span><span className="detail">Precio más actualizado de la EESS publicado por la CRE</span> </th>}
                    { this.state.simular && !viewprice ? <th className="header-table">SIMULACIÓN FRANJA 1</th> : this.state.simular  ? <th className="header-table">SIMULACIÓN</th> : '' }
                    { viewprice ? <th className="header-table">PRECIO RECOMENDADO </th> : <th className="header-table"><span className="meaning">PRECIO RECOMENDADO FRANJA 1 </span><span className="detail">Precio recomendado desde la hora { "00:01" } hasta la hora { "11:00" }</span> </th>  }
                    { this.state.simular && !viewprice ? <th className="header-table">SIMULACIÓN FRANJA 2</th> : '' }
                    { viewprice ? '' : <th className="header-table"><span className="meaning">PRECIO RECOMENDADO FRANJA 2 </span><span className="detail">Precio recomendado desde la hora { "11:01" } hasta la hora { "18:00" }</span> </th>  }
                    { this.state.simular && !viewprice ? <th className="header-table">SIMULACIÓN FRANJA 3</th> : '' }
                    { viewprice ? '' :  <th className="header-table"><span className="meaning">PRECIO RECOMENDADO FRANJA 3 </span><span className="detail">Precio recomendado desde la hora { "18:01" } hasta la hora { "24:00" }</span> </th>}
                    <th className="header-table"><span className="meaning">DIFERENCIA PRECIO REAL | PRECIO SELECCIONADO</span><span className="detail">Diferencia entre precio actual de hoy vs. precio seleccionados</span> </th>
                  </tr>
                </thead>
                <tbody>
                {   
                    dataReal.map((prop, key) => {
                  
                      let diferenciaprecio =  prop.preciorealdehoy -  prop.pvprecomendadofranja1;
                      let arrayToDefine = [ prop.competenciaestrategica, prop.competencia1, prop.competencia2, prop.competencia3, prop.competencia4, prop.competencia5, prop.competencia6, prop.preciorealdehoy, prop.pvprecomendado ];
                      let min = Math.min.apply(Math, arrayToDefine);
                      let max = Math.max.apply(Math, arrayToDefine);
                      let promedio = ( prop.pvprecomendadofranja1 + prop.pvprecomendadofranja2 + prop.pvprecomendadofranja3) / 3
                      let precioponderado =  promedio; 
                      //Review this part
                    this.state.mipreciopromediodeventa = precioponderado;
                    return (
                      <tr>
                          <td key={key} className="text-left"><span className="meaningprod">{ prop.nombre }</span><span className="detailprod">{ prop.tipologia }</span></td>
                          <td className="text-center">${ precioponderado.toFixed(1) / 2}</td>
                          <td className={ prop.competenciaestrategica === min ? "text-center txt-ok" : prop.competenciaestrategica === max ? "text-center txt-high" : 'text-center'}>${ prop.competenciaestrategica }</td>
                          <td className={ prop.competencia1 === min ? "text-center txt-ok" : prop.competencia1 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia1 }</td>
                          <td className={ prop.competencia2 === min ? "text-center txt-ok" : prop.competencia2 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia2 }</td>
                          <td className={ prop.competencia3 === min ? "text-center txt-ok" : prop.competencia3 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia3 }</td>
                          <td className={ prop.competencia4 === min ? "text-center txt-ok" : prop.competencia4 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia4 }</td>
                          { view === 'manana' ? 
                            <td className= { prop.preciorealmanana === min ? "text-center txt-ok" : prop.preciorealmanana === max ? "text-center txt-high" : 'text-center'}>${ prop.preciorealmanana } </td> : 
                            <td className= { prop.preciorealdehoy === min ? "text-center txt-ok" : prop.preciorealdehoy === max ? "text-center txt-high" : 'text-center'}>${ prop.preciorealdehoy }</td>
                          }
                        
                          { this.state.simular ? 
                            <td className="text-left">
                                <p><input type="number" className="input-simulacion" name="simularfranja1" id={ key } value={ prop.simular } onChange={ this.addValue } placeholder="0.00"/>  <input type="radio" tipo="preciomodificadofranja1" name={ 'franja1'+prop.nombre+key } id={ key } value={ prop.simularfranja1  } onClick={this.handSimulate } /></p>  
                            </td>:'' 
                          }
                          {/* Precio Franja 1 */}
                          {  viewprice ? 
                            <td className={this.state.simular ? 
                              prop.pvprecomendado === min ? "text-center text-shadow td-size txt-ok" : prop.pvprecomendado === max ? "text-center text-shadow td-size txt-high" : "text-center text-shadow td-size" : 
                              prop.pvprecomendado === min ? "text-center text-shadow td-size txt-ok" : prop.pvprecomendado === max ? "text-center text-shadow td-size txt-high": "text-center text-shadow" }
                              >${  view === 'hoy' ? promedio.toFixed(2) : promedio.toFixed(2) } { this.state.simular ?  <input type="radio"  name={ 'franja1'+prop.nombre+key } id={ key } value={  view === 'manana' ? prop.preciodiariomanana : prop.pvprecomendado }  onClick={this.handSimulate}  defaultChecked={true}/> : '' }</td>
                            :
                            <td className={this.state.simular ? 
                              prop.pvprecomendadofranja1 === min ? "text-center text-shadow td-size txt-ok" : prop.pvprecomendadofranja1 === max ? "text-center text-shadow td-size txt-high" : "text-center text-shadow td-size" : 
                              prop.pvprecomendadofranja1 === min ? "text-center text-shadow td-size txt-ok" : prop.pvprecomendadofranja1 === max ? "text-center text-shadow td-size txt-high": "text-center text-shadow" }
                              >${  view === 'hoy' ?  prop.pvprecomendadomanana : prop.pvprecomendado } { this.state.simular ?  <input type="radio"  name={ 'franja1'+prop.nombre+key } id={ key } value={  view === 'manana' ? prop.preciodiariomanana : promedio }  onClick={this.handSimulate}  defaultChecked={true}/> : '' }</td>
                            }
                          
                          {/* Precio Franja 2 */}
                            { this.state.simular && !viewprice ? 
                            <td className="text-left">
                                <p><input type="number" className="input-simulacion" name="simularfranja2"  id={ key } value={ prop.simular } onChange={ this.addValue } placeholder="0.00"/>  <input type="radio" name={ 'franja2' + prop.nombre + key } id={ key } value={ prop.simularfranja2  } onClick={this.handSimulate} /></p>  
                            </td>:'' }

                            { viewprice ? '' :
                            <td className={this.state.simular ? 
                              prop.pvprecomendadofranja2 === min ? "text-center text-shadowb td-size txt-ok" : prop.pvprecomendadofranja2 === max ? "text-center text-shadowb td-size txt-high" : "text-center text-shadowb td-size" : 
                              prop.pvprecomendadofranja2 === min ? "text-center text-shadowb td-size txt-ok" : prop.pvprecomendadofranja2 === max ? "text-center text-shadowb td-size txt-high": "text-center text-shadowb" }
                            >${  view === 'manana' ? prop.pvprecomendadomananafranja2 : prop.pvprecomendadofranja2 } { this.state.simular ?  <input type="radio" name={ 'franja2'+prop.nombre+key} id={ key } value={  view === 'manana' ? prop.preciodiariomanana : prop.pvprecomendadofranja2 }  onClick={this.handSimulate}  defaultChecked={true}/> : '' }</td>  }

                          {/* Precio Franja 3 */}
                          { this.state.simular && !viewprice ? 
                          <td className="text-left">
                              <p><input type="number" className="input-simulacion" name="simularfranja3"  id={ key } value={ prop.simular } onChange={ this.addValue } placeholder="0.00"/>  <input type="radio" tipo="preciomodificadofranja3"  name={ 'franja3'+prop.nombre+key } id={ key } value={ prop.simularfranja3  } onClick={this.handSimulate} /></p>  
                          </td>:'' }
                          { viewprice ? '' :
                          <td className={this.state.simular ? 
                            prop.pvprecomendadofranja3 === min ? "text-center text-shadowc td-size txt-ok" : prop.pvprecomendadofranja3 === max ? "text-center text-shadowc td-size txt-high" : "text-center text-shadowc td-size" : 
                            prop.pvprecomendadofranja3 === min ? "text-center text-shadowc td-size txt-ok" : prop.pvprecomendadofranja3 === max ? "text-center text-shadowc td-size txt-high": "text-center text-shadowc" }
                          >${  view === 'manana' ? prop.pvprecomendadomananafranja3 :  prop.pvprecomendadofranja3 } { this.state.simular ?  <input type="radio" name={ 'franja3'+prop.nombre+key} id={ key } value={  view === 'manana' ? prop.preciodiariomanana : prop.pvprecomendadofranja3 }  onClick={this.handSimulate}  defaultChecked={true}/> : '' }</td> }
                          
                          <td className="text-center">${ diferenciaprecio.toFixed(2) }</td>
                    </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
            <p className="update-text">Last Update { date }</p>
          </Card>
        </Col>
      </Row>

      <Row className="graph-line">
          <Col md="12" >
              <select id="productsGraph" className="select-estacion-grafica" onChange={this.updateGraph} value={this.state.productgraph}>
              {
                dataReal.map((prop, key) => {
                  return ( <option key={ key } value={ prop.nombre }>{prop.nombre}</option> )
                })
              }
              </select>
              <Card>
              <CardHeader>GRÁFICA DE PRECIO {''}</CardHeader>
                  <CardBody>
                    {/*<Line data={chartjs.line.data} options={chartjs.line.options} />*/}
                    {/*<Bar data={ genLineData() } height={80} />*/}
            <Bar data={this.genLineDataMONTHS({ type: 'line', fill: false })} height={80} />
                  </CardBody>
                  <p className="update-text">Last Update { date }</p>
              </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>TABLA RESUMEN</CardHeader>
              <CardBody>
                { this.state.simular && !viewprice ?
                <UserProgressTable
                  headers= {['','PRODUCTO','PRECIO ÚLTIMA COMPRA','PRECIO DE COMPRA DE HOY','PRECIO DE COMPRA DE MAÑANA','DIFERENCIA HOY/MAÑANA','PRECIO DE VENTA SELECCIONADO FRANJA1','PRECIO DE VENTA SELECCIONADO FRANJA2','PRECIO DE VENTA SELECCIONADO FRANJA3','MARGEN TEÓRICO PROMEDIO','MARGEN REAL PROMEDIO','DIFERENCIA VOLUMEN']}
                  usersData={dataReal}
                  simular={this.state.simular}
                  update={this.state.update}
                  viewprice = {this.props.viewprice}
                /> :
                <UserProgressTable
                  headers= {['','PRODUCTO','PRECIO ÚLTIMA COMPRA','PRECIO DE COMPRA DE HOY','PRECIO DE COMPRA DE MAÑANA','DIFERENCIA HOY/MAÑANA','PRECIO DE VENTA SELECCIONADO','MARGEN TEÓRICO PROMEDIO','MARGEN REAL PROMEDIO','DIFERENCIA VOLUMEN']}
                  usersData={dataReal}
                  simular={this.state.simular}
                  update={this.state.update}
                  viewprice = {this.props.viewprice}
                />
                }
              </CardBody>
              <p className="update-text">Last Update { date }</p>
            </Card>
          </Col>
        </Row>

        <Row>
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
      currentView: state.setView,
      viewprice: state.changePrice
  }
}
//Send Information REDUX
function mapDispatchToProps(dispatch){
  return bindActionCreators({
      getDataAction,
      sendDataDatabase,
      setCurrentView
  }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Estacion);



