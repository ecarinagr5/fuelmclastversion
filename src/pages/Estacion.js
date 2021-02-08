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


import { userProgressTableData } from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Button, Card, CardBody, CardHeader, Col, Table, Modal, ModalBody,ModalFooter, ModalHeader, Row } from 'reactstrap';
import { getColor } from 'utils/colors';
import user1Image from 'assets/img/lata-de-gasolina.png';

const MONTHS = ['21/01/2021', '22/01/2021', '23/01/2021', '24/01/2021', '25/01/2021', '26/01/2021', '27/01/2021'];


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
      productsData:[
        {
          avatar: user1Image,
          nombre: '<92',
          precioventa: 13.41,
          simular:null,
          preciorealdehoy:12.21,
          preciorecomendadoponderado:0,
          preciorecomenda:11.3,
          competenciaestrategica:11.4,
          preciomodificado:0,
          preciodecompra:13.4,
          precioultimacompra:12.4,
          fechadeultimacompra:20210129,
          preciocompramanana:12.3,
          preciopromediodeventa:16,
          mipreciopromediodeventa:10.3,
          pvppromediodelacompentencia:13.6,
          competenciaA:12.4,
          competenciaB:11.4,
          competenciaC:12.4,
          competenciaD:12.3,
          volumenpromediodelmes:30,
          volumenobjetivomensual:120,
          margenteorico:1.1,
          margenreal:1.2,
          utilidad:1242
        },
        {
          avatar: user1Image,
          nombre: '>92',
          precioventa: 14.41,
          simular:null,
          preciorealdehoy:13.11,
          preciorecomendadoponderado:0,
          preciorecomenda:10.3,
          competenciaestrategica:12.4,
          preciomodificado:0,
          preciodecompra:13,
          precioultimacompra:12.4,
          fechadeultimacompra:20210123,
          preciopromediodeventa:16,
          mipreciopromediodeventa:10.6,
          preciocompramanana:14.3,
          pvppromediodelacompentencia:13.6,
          competenciaA:11.4,
          competenciaB:13.4,
          competenciaC:16.4,
          competenciaD:12.3,
          volumenpromediodelmes:60,
          volumenobjetivomensual:130,
          margenteorico:1.2,
          margenreal:1.5,
          utilidad:1442
        },
        {
          avatar: user1Image,
          nombre: 'Gasoleo B',
          precioventa: 15.41,
          simular:null,
          preciorealdehoy:14.10,
          preciorecomendadoponderado:0,
          preciorecomenda:11.2,
          competenciaestrategica:12.4,
          preciomodificado:0,
          preciodecompra:14,
          precioultimacompra:12.4,
          fechadeultimacompra:20210112,
          preciopromediodeventa:17,
          mipreciopromediodeventa:10.6,
          preciocompramanana:11.3,
          pvppromediodelacompentencia:14.6,
          competenciaA:10.4,
          competenciaB:12.4,
          competenciaC:14.4,
          competenciaD:12.3,
          volumenpromediodelmes:60,
          volumenobjetivomensual:160,
          margenteorico:1.5,
          margenreal:1.4,
          utilidad:1542
        },
        {
          avatar: user1Image,
          nombre: 'Diesel A+',
          precioventa: 16.41,
          preciorealdehoy:12.11,
          simular:null,
          preciorecomendadoponderado:0,
          preciorecomenda:10.7,
          competenciaestrategica:12.4,
          preciomodificado:0,
          preciodecompra:14,
          precioultimacompra:12.4,
          fechadeultimacompra:20210130,
          preciopromediodeventa:16.3,
          pvppromediodelacompentencia:14.6,
          preciocompramanana:12.3,
          mipreciopromediodeventa:12.4,
          competenciaA:13.4,
          competenciaB:11.4,
          competenciaC:13.4,
          competenciaD:12.3,
          volumenpromediodelmes:50,
          volumenobjetivomensual:140,
          margenteorico:1.1,
          margenreal:1.2,
          utilidad:1142
        },
        {
          avatar: user1Image,
          nombre: 'PEMEX DIESEL (DIESEL)',
          precioventa: 17.41,
          preciorealdehoy:13.41,
          simular:null,
          preciorecomendadoponderado:0,
          preciomodificado:0,
          preciorecomenda:13.3,
          competenciaestrategica:14.4,
          preciodecompra:15,
          precioultimacompra:12.4,
          fechadeultimacompra:20210112,
          preciopromediodeventa:18,
          mipreciopromediodeventa:12.3,
          preciocompramanana:11.3,
          pvppromediodelacompentencia:13.6,
          competenciaA:12.4,
          competenciaB:12.8,
          competenciaC:12.4,
          competenciaD:12.3,
          volumenpromediodelmes:40,
          volumenobjetivomensual:130,
          margenteorico:1.1,
          margenreal:1.2,
          utilidad:1642
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handSimulate = this.handSimulate.bind(this);
    this.addValue =  this.addValue.bind(this);
    this.resetSimulador = this.resetSimulador.bind(this);
    this.handTools = this.handTools.bind(this);
    this.genLineDataMONTHS = this.genLineDataMONTHS.bind(this);
 }

 componentDidMount(){
  this.intervalId = setInterval(this.dateToShow.bind(this), 1000);
}

componentWillUnmount(){
  clearInterval(this.intervalId);
}

dateToShow(){
  let date = new Date();
  this.setState({ date });
  console.log("dateToShow", date)
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
  this.state.productsData[event.target.id].preciomodificado =  event.target.value;
  this.setState({productsData: this.state.productsData })
}

  addValue(event){
    this.state.productsData[event.target.id].simular =  event.target.value;;
    this.setState({productsData: this.state.productsData })
  }

  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  handleClick(){
    this.setState({ simular: true})
  }

  //Function to return lines
genLineDataMONTHS = (moreData = {}, moreData2 = {}) => {
    return {
      labels: MONTHS,
      datasets: [
        {
          label: 'MI PRECIO DE COMPRA',
          backgroundColor: getColor('danger'),
          borderColor: getColor('danger'),
          borderWidth: 2,
          data: [
            this.state.productsData[0].preciodecompra,
            this.state.productsData[1].preciodecompra,
            this.state.productsData[2].preciodecompra,
            this.state.productsData[3].preciodecompra,
            this.state.productsData[4].preciodecompra,
            this.state.productsData[1].preciodecompra,
            this.state.productsData[2].preciodecompra,
          ],
          ...moreData,
        },
        {
          label: 'PRECIO PROMEDIO DE VENTA DE LA COMPETENCIA',
          backgroundColor: getColor('info'),
          borderColor: getColor('info'),
          borderWidth: 3,
          data: [
            this.state.productsData[0].pvppromediodelacompentencia,
            this.state.productsData[1].pvppromediodelacompentencia,
            this.state.productsData[2].pvppromediodelacompentencia,
            this.state.productsData[3].pvppromediodelacompentencia,
            this.state.productsData[4].pvppromediodelacompentencia,
            this.state.productsData[1].pvppromediodelacompentencia,
            this.state.productsData[2].pvppromediodelacompentencia,
          ],
          ...moreData,
        },
        {
          label: 'MI PRECIO DE VENTA PROMEDIO',
          backgroundColor: getColor('average'),
          borderColor: getColor('average'),
          borderWidth: 3,
          data: [
            this.state.productsData[0].mipreciopromediodeventa,
            this.state.productsData[1].mipreciopromediodeventa,
            this.state.productsData[2].mipreciopromediodeventa,
            this.state.productsData[3].mipreciopromediodeventa,
            this.state.productsData[4].mipreciopromediodeventa,
            this.state.productsData[1].mipreciopromediodeventa,
            this.state.productsData[2].mipreciopromediodeventa,
          ],
          ...moreData,
        },
        {
          label: 'COMPETENCIA ESTRATÉGICA',
          backgroundColor: getColor('third'),
          borderColor: getColor('third'),
          borderWidth: 0,
          data: [
            this.state.productsData[0].competenciaestrategica,
            this.state.productsData[1].competenciaestrategica,
            this.state.productsData[2].competenciaestrategica,
            this.state.productsData[3].competenciaestrategica,
            this.state.productsData[4].competenciaestrategica,
            this.state.productsData[1].competenciaestrategica,
            this.state.productsData[2].competenciaestrategica,
          ],
          ...moreData2,
        }, 
        {
          label: 'PRECIO COMPETENCIA A',
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            this.state.productsData[0].competenciaA,
            this.state.productsData[1].competenciaA,
            this.state.productsData[2].competenciaA,
            this.state.productsData[3].competenciaA,
            this.state.productsData[4].competenciaA,
            this.state.productsData[3].competenciaA,
            this.state.productsData[4].competenciaA,
          ],
          ...moreData2,
        },
        {
          label: 'PRECIO COMPETENCIA B',
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            this.state.productsData[0].competenciaB,
            this.state.productsData[1].competenciaB,
            this.state.productsData[2].competenciaB,
            this.state.productsData[3].competenciaB,
            this.state.productsData[4].competenciaB,
            this.state.productsData[1].competenciaB,
            this.state.productsData[2].competenciaB,
          ],
          ...moreData2,
        },
        {
          label: 'PRECIO COMPETENCIA C',
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            this.state.productsData[0].competenciaC,
            this.state.productsData[1].competenciaC,
            this.state.productsData[2].competenciaC,
            this.state.productsData[3].competenciaC,
            this.state.productsData[4].competenciaC,
            this.state.productsData[2].competenciaC,
            this.state.productsData[3].competenciaC,
          ],
          ...moreData2,
        },
        {
          label: 'PRECIO COMPETENCIA D',
          backgroundColor: getColor('secondary'),
          borderColor: getColor('secondary'),
          borderWidth: 1,
          data: [
            this.state.productsData[0].competenciaD,
            this.state.productsData[1].competenciaD,
            this.state.productsData[2].competenciaD,
            this.state.productsData[3].competenciaD,
            this.state.productsData[4].competenciaD,
            this.state.productsData[1].competenciaD,
            this.state.productsData[2].competenciaD,
          ],
          ...moreData2,
        },
        {
          label: 'MI PRECIO DE VENTA SELECCIONADO',
          backgroundColor: getColor('primary'),
          borderColor: getColor('primary'),
          borderWidth: 1,
          data: [
            this.state.productsData[0].preciomodificado > 0 ? this.state.productsData[0].preciomodificado : this.state.productsData[0].preciorecomenda,
            this.state.productsData[1].preciomodificado > 0 ? this.state.productsData[1].preciomodificado : this.state.productsData[1].preciorecomenda,
            this.state.productsData[2].preciomodificado > 0 ? this.state.productsData[2].preciomodificado : this.state.productsData[2].preciorecomenda,
            this.state.productsData[3].preciomodificado > 0 ? this.state.productsData[3].preciomodificado : this.state.productsData[3].preciorecomenda,
            this.state.productsData[4].preciomodificado > 0 ? this.state.productsData[4].preciomodificado : this.state.productsData[4].preciorecomenda,
            this.state.productsData[1].preciomodificado > 0 ? this.state.productsData[1].preciomodificado : this.state.productsData[1].preciorecomenda,
            this.state.productsData[2].preciomodificado > 0 ? this.state.productsData[2].preciomodificado : this.state.productsData[2].preciorecomenda,
          ],
          ...moreData2,
        },
      ],
    };
  };



  render() {
    console.log("date", this.state.date)
    const PRODUCTOS =[];
    this.state.productsData.map(prop => {
        PRODUCTOS.push(prop.nombre)
    })
    let { productsData } = this.state;
    let promedio = 63 //Promedio de competencia estrategica;
    return (
      <Page>
            {/*<div className="bienvenida-class">
              <Slider {...settings}>
                <div className="background-slider bg-red">
                
                </div>
                <div className="background-slider bg-blue">
                  <h3>2</h3>
                </div>
                <div className="background-slider bg-red">
                  <h3>3</h3>
                </div>
                <div className="background-slider bg-blue">
                  <h3>4</h3>
                </div>
                <div className="background-slider bg-red">
                  <h3>5</h3>
                </div>
                <div className="background-slider bg-blue">
                  <h3>6</h3>
                </div>
              </Slider>
    </div>*/}
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

                          this.state.productsData.map((prop, key) => {
                            console.log("productsData",prop)
                            return (
                              <tr>
                                <td className="text-center text-mini">{prop.nombre}</td>
                                <td className="text-center text-mini">${ prop.preciomodificado >  0 ? prop.preciomodificado  : prop.preciorecomenda }</td>
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
                    <th className="header-table">COMPETENCIA ESTRATÉGICA</th>
                    <th className="header-table">COMPETENCIA A</th>
                    <th className="header-table">COMPETENCIA B</th>
                    <th className="header-table">COMPETENCIA C</th>
                    <th className="header-table">COMPETENCIA D</th>
                    <th className="header-table">PRECIO REAL DE HOY</th>
                    { this.state.simular ? <th className="header-table">SIMULACIÓN</th> : '' }
                    <th className="header-table">PRECIO RECOMENDADO</th>
                    <th className="header-table">DIFERENCIA PRECIO REAL<br></br>PRECIO SELECCIONADO</th>
                  </tr>
                </thead>
                <tbody>
                {   
                    productsData.map((prop, key) => {
                      let precioponderado =  (prop.precioventa * 100 ) / promedio; 
                      let diferenciaprecio =  prop.preciorealdehoy -  prop.preciorecomenda;
                      let arrayToDefine = [ prop.competenciaestrategica, prop.preciorecomenda, prop.competenciaA, prop.competenciaB, prop.competenciaC, prop.competenciaD, prop.preciorealdehoy, prop.preciorecomenda ];
                      let min = Math.min.apply(Math, arrayToDefine);
                      let max = Math.max.apply(Math, arrayToDefine);
                      //Review this part
                      this.state.mipreciopromediodeventa = precioponderado;
    
            
                    return (
                      <tr>
                          <td  className="text-center">{ prop.nombre }</td>
                          <td className="text-center">${ precioponderado.toFixed(1) / 2}</td>
                          <td className={ prop.competenciaestrategica === min ? "text-center txt-ok" : prop.competenciaestrategica === max ? "text-center txt-high" : 'text-center'}>${ prop.competenciaestrategica }</td>
                          <td className={ prop.competenciaA === min ? "text-center txt-ok" : prop.competenciaA === max ? "text-center txt-high" : 'text-center'}>${ prop.competenciaA }</td>
                          <td className={ prop.competenciaB === min ? "text-center txt-ok" : prop.competenciaB === max ? "text-center txt-high" : 'text-center'}>${ prop.competenciaB }</td>
                          <td className={ prop.competenciaC === min ? "text-center txt-ok" : prop.competenciaC === max ? "text-center txt-high" : 'text-center'}>${ prop.competenciaC }</td>
                          <td className={ prop.competenciaD === min ? "text-center txt-ok" : prop.competenciaD === max ? "text-center txt-high" : 'text-center'}>${ prop.competenciaD }</td>
                          <td className= { prop.preciorealdehoy === min ? "text-center txt-ok" : prop.preciorealdehoy === max ? "text-center txt-high" : 'text-center'}>${ prop.preciorealdehoy }</td>
                          { this.state.simular ? 
                          <td className="text-left">
                              <p><input type="number" className="input-simulacion" id={ key } value= { prop.simular } onChange={ this.addValue } placeholder="0.00"/>  <input type="radio" name={ key } id={ key } value={ prop.simular } onClick={this.handSimulate} /></p>  
                          </td>:'' }
                          <td className={this.state.simular ? 
                            prop.preciorecomenda === min ? "text-center text-shadow td-size txt-ok" : prop.preciorecomenda === max ? "text-center text-shadow td-size txt-high" : "text-center text-shadow td-size" : 
                            prop.preciorecomenda === min ? "text-center text-shadow td-size txt-ok" : prop.preciorecomenda === max ? "text-center text-shadow td-size txt-high": "text-center text-shadow" }
                          >${ prop.preciorecomenda } { this.state.simular ?  <input type="radio" name={ key } id={ key } value={ prop.preciorecomenda }  onClick={this.handSimulate}  defaultChecked={true}/> : '' }</td>
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
              <select class="select-estacion-grafica">
                <option value="5">PEMEX DIESEL (DIESEL)</option>
                <option value="1">{"< 92"}</option>
                <option value="2">{"> 92"}</option>
                <option value="3">Gasoleo B</option>
                <option value="4">Diesel A+ </option>
              </select>
              <Card>
              <CardHeader>GRÁFICA DE PRECIO</CardHeader>
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
                  headers= {['','PRODUCTO','PRECIO ÚLTIMA COMPRA','PRECIO DE COMPRA DE HOY','PRECIO DE COMPRA DE MAÑANA','DIFERENCIA HOY/MAÑANA','PRECIO DE VENTA SELECCIONADO','MARGEN TEÓRICO','MARGEN REAL','VOLUMEN DEL MES HASTA AHORA','VOLUMEN OBJETIVO MENSUAL']}
                  usersData={this.state.productsData}
                /> :
                <UserProgressTable
                  headers= {['','PRODUCTO','PRECIO ÚLTIMA COMPRA','PRECIO DE COMPRA DE HOY','PRECIO DE COMPRA DE MAÑANA','DIFERENCIA HOY/MAÑANA','PRECIO DE VENTA RECOMENDADO','MARGEN TEÓRICO','MARGEN REAL','VOLUMEN DEL MES HASTA AHORA','VOLUMEN OBJETIVO MENSUAL']}
                  usersData={this.state.productsData}
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
  console.log("state",state)
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



