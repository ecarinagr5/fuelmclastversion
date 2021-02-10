//Libraries
import moment from "moment";
import Slider from "react-slick";

//Connect Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getDataAction } from '../Redux/dataToShow'

//Components
import Page from 'components/Page';
import UserProgressTable from 'components/UserProgressTable';
import { randomNum } from 'utils/demos';

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Button, Card, CardBody, CardHeader, Col, Table, Modal, ModalBody,ModalFooter, ModalHeader, Row } from 'reactstrap';
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
    }
    this.handleClick = this.handleClick.bind(this);
    this.handSimulate = this.handSimulate.bind(this);
    this.addValue =  this.addValue.bind(this);
    this.resetSimulador = this.resetSimulador.bind(this);
    this.handTools = this.handTools.bind(this);
    this.genLineDataMONTHS = this.genLineDataMONTHS.bind(this);
    this.updateGraph = this.updateGraph.bind(this);
 }

 componentDidMount(){
  let data = this.props.data.metrics.array;
  this.setState({dataReal: data})
  this.intervalId = setInterval(this.dateToShow.bind(this), 1000);
}

componentWillUnmount(){
  clearInterval(this.intervalId);
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
};


resetSimulador(){
  this.setState({simular:false})
  this.state.productsData.map(data => {
    data.modificado= null
  })
}

handSimulate(event) {
  let modificado = this.state.dataReal[0];
  modificado[event.target.id].preciomodificado = event.target.value === '' ? modificado[event.target.id].simular : event.target.value ;
  this.setState({idproduct:0})
  /*this.setState({dataReal: modificado })*/
}

  addValue(event){
    let m = this.state.dataReal[0];
    m[event.target.id].simular =  event.target.value;
    /*this.setState({dataReal: m })*/

    /*this.state.productsData[event.target.id].simular =  event.target.value;;
    this.setState({productsData: this.state.productsData })*/
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
    
    return {
      labels: MONTHS,
      datasets: [
        {
          label: 'MI PRECIO DE COMPRA',
          backgroundColor: getColor('danger'),
          borderColor: getColor('danger'),
          borderWidth: 2,
          data: [
            product[idproduct].preciodecompra,
          ],
          ...moreData,
        },
        {
          label: 'PRECIO PROMEDIO DE VENTA DE LA COMPETENCIA',
          backgroundColor: getColor('info'),
          borderColor: getColor('info'),
          borderWidth: 3,
          data: [
            product[idproduct].pvppromediodelacompentencia,
          ],
          ...moreData,
        },
        {
          label: 'MI PRECIO DE VENTA PROMEDIO',
          backgroundColor: getColor('average'),
          borderColor: getColor('average'),
          borderWidth: 3,
          data: [
            product[idproduct].mipreciopromediodeventa,
          ],
          ...moreData,
        },
        {
          label: competencias[0].nombre,
          backgroundColor: getColor('third'),
          borderColor: getColor('third'),
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
          label: competencias[5].nombre,
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            product[idproduct].competencia5,
          ],
          ...moreData2,
        },
        {
          label: competencias[6].nombre,
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            product[idproduct].competencia6,
          ],
          ...moreData2,
        },
        {
          label: 'MI PRECIO DE VENTA SELECCIONADO',
          backgroundColor: getColor('primary'),
          borderColor: getColor('primary'),
          borderWidth: 1,
          data: [
            product[idproduct].preciomodificado >  0 ? product[idproduct].preciomodificado  : product[idproduct].pvprecomendado
          ],
          ...moreData2,
        },
      ],
    };
  };



  render() {
    const allProducts = this.props.data.metrics.array.estaciones[0].productos;
    this.state.dataReal.push(allProducts)
    const dataReal = this.state.dataReal[0];
    const competencias = this.props.data.metrics.array.competencias;
    this.state.competencias.push(competencias);

    let promedio = 63 //Promedio de competencia estrategica;
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
                    ACEPTAR PRECIOS
                  </ModalHeader>
                  <ModalBody>
                    <p className="header-txt-v2">Estas seguro de Aplicar los siguientes cambios:</p>
                      <br />
                      <Table responsive>
                        <thead>
                          <tr>
                            <th className="header-table">PRODUCTO</th>
                            <th className="header-table">PRECIO DE VENTA SELECCIONADO</th>
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
                                <td className="text-center text-mini">{ prop.nombre }</td>
                                <td className="text-center text-mini">${ prop.preciomodificado >  0 ? prop.preciomodificado  : prop.pvprecomendado }</td>
                                <td className="text-center text-mini">${ prop.margenreal }</td>
                                <td className="text-center text-mini">${ prop.margenteorico }</td>
                                <td className="text-center text-mini">${ prop.utilidad }</td>
                            </tr>
                            )
                          })}
                        </tbody>
                      </Table>
                    <br />
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
            <Card className="mb-3">
              <CardHeader>PRECIOS DE VENTA
              <div className="container-buttons">
                <Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">SIMULAR</Button>
                {/*<Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">APLICAR</Button>*/}
                <Button color="primary" onClick={this.toggle('nested_parent')} className="btn-main-fuel-right">
                  ACEPTAR &nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-event" viewBox="0 0 16 16">
                    <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                  </svg>
                </Button>

                <Button color="danger" onClick={this.resetSimulador} className="btn-main-fuel-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply-all-fill" viewBox="0 0 16 16">
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
                    <th className="header-table">PRECIO PROMEDIO PONDERADO</th>
                    {   
                    competencias.map((prop, key) => { 
                      if( prop.estrategica ) {
                          return(<th className="header-table color-estrategia">{prop.nombre} Competencia Estratégica</th>)
                      }
                      else {
                          return(<th className="header-table">{prop.nombre}</th>)
                      }
                    })
                    }
                    <th className="header-table">PRECIO REAL DE HOY</th>
                    { this.state.simular ? <th className="header-table">SIMULACIÓN</th> : '' }
                    <th className="header-table">PRECIO RECOMENDADO</th>
                    <th className="header-table">DIFERENCIA PRECIO REAL | PRECIO SELECCIONADO</th>
                  </tr>
                </thead>
                <tbody>
                {   
                    dataReal.map((prop, key) => {
                      let precioponderado =  (prop.precioventa * 100 ) / promedio; 
                      let diferenciaprecio =  prop.preciorealdehoy -  prop.pvprecomendado;
                      let arrayToDefine = [ prop.competenciaestrategica, prop.competencia1, prop.competencia2, prop.competencia3, prop.competencia4, prop.competencia5, prop.competencia6, prop.preciorealdehoy, prop.pvprecomendado ];
                      let min = Math.min.apply(Math, arrayToDefine);
                      let max = Math.max.apply(Math, arrayToDefine);

                      let simular = prop.simular;
                      //Review this part
                      this.state.mipreciopromediodeventa = precioponderado;
                    return (
                      <tr>
                          <td  className="text-center">{ prop.nombre }</td>
                          <td className="text-center">${ precioponderado.toFixed(1) / 2}</td>
                          <td className={ prop.competenciaestrategica === min ? "text-center txt-ok" : prop.competenciaestrategica === max ? "text-center txt-high" : 'text-center'}>${ prop.competenciaestrategica }</td>
                          <td className={ prop.competencia1 === min ? "text-center txt-ok" : prop.competencia1 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia1 }</td>
                          <td className={ prop.competencia2 === min ? "text-center txt-ok" : prop.competencia2 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia2 }</td>
                          <td className={ prop.competencia3 === min ? "text-center txt-ok" : prop.competencia3 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia3 }</td>
                          <td className={ prop.competencia4 === min ? "text-center txt-ok" : prop.competencia4 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia4 }</td>
                          <td className={ prop.competencia5 === min ? "text-center txt-ok" : prop.competencia5 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia5 }</td>
                          <td className={ prop.competencia6 === min ? "text-center txt-ok" : prop.competencia6 === max ? "text-center txt-high" : 'text-center'}>${ prop.competencia6 }</td>
                          <td className= { prop.preciorealdehoy === min ? "text-center txt-ok" : prop.preciorealdehoy === max ? "text-center txt-high" : 'text-center'}>${ prop.preciorealdehoy }</td>
                          { this.state.simular ? 
                          <td className="text-left">
                              <p><input type="number" className="input-simulacion" id={ key } value={ prop.simular } onChange={ this.addValue } placeholder="0.00"/>  <input type="radio" name={ key } id={ key } value={ prop.simular  } onClick={this.handSimulate} /></p>  
                          </td>:'' }
                          <td className={this.state.simular ? 
                            prop.pvprecomendado === min ? "text-center text-shadow td-size txt-ok" : prop.pvprecomendado === max ? "text-center text-shadow td-size txt-high" : "text-center text-shadow td-size" : 
                            prop.pvprecomendado === min ? "text-center text-shadow td-size txt-ok" : prop.pvprecomendado === max ? "text-center text-shadow td-size txt-high": "text-center text-shadow" }
                          >${ prop.pvprecomendado } { this.state.simular ?  <input type="radio" name={ key } id={ key } value={ prop.pvprecomendado }  onClick={this.handSimulate}  defaultChecked={true}/> : '' }</td>
                          <td className="text-center">${ diferenciaprecio.toFixed(2) }</td>
                    </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="graph-line">
          <Col md="12" >
              <select id="productsGraph" class="select-estacion-grafica" onChange={this.updateGraph} value={this.state.productgraph}>
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
                <p className="update-text">Last Update 25/01/2021 09:35 am</p>
              </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>TABLA RESUMEN</CardHeader>
              <CardBody>
                { this.state.simular ?
                <UserProgressTable
                  headers= {['','PRODUCTO','PRECIO ÚLTIMA COMPRA','PRECIO DE COMPRA DE HOY','PRECIO DE COMPRA DE MAÑANA','DIFERENCIA HOY/MAÑANA','PRECIO DE VENTA SELECCIONADO','MARGEN TEÓRICO','MARGEN REAL','VOLUMEN DEL MES HASTA AHORA','DIFERENCIA VOLUMEN']}
                  usersData={dataReal}
                /> :
                <UserProgressTable
                  headers= {['','PRODUCTO','PRECIO ÚLTIMA COMPRA','PRECIO DE COMPRA DE HOY','PRECIO DE COMPRA DE MAÑANA','DIFERENCIA HOY/MAÑANA','PRECIO DE VENTA RECOMENDADO','MARGEN TEÓRICO','MARGEN REAL','VOLUMEN DEL MES HASTA AHORA','DIFERENCIA VOLUMEN']}
                  usersData={dataReal}
                />
                }
              </CardBody>
              <p className="update-text">Last Update 25/01/2021 09:35 am</p>
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
  }
}
//Send Information REDUX
function mapDispatchToProps(dispatch){
  return bindActionCreators({
      getDataAction
  }, dispatch )
}

export default connect(mapStateToProps,mapDispatchToProps)(Estacion);



