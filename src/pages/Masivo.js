import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { randomNum } from 'utils/demos';
import  Filter  from 'components/Filter';

import ver from "assets/img/ver.png";
import favoritos from "assets/img/star.png";


import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Line, Pie, Doughnut, Bar, Radar, Polar } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  ButtonGroup,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  Table,
  ListGroup,
  ListGroupItem,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
  Label,
  FormGroup
} from 'reactstrap';
import { getColor } from 'utils/colors';

const tableTypes = ['PROMEDIOS', 'MÁXIMOS', 'MÍNIMOS'];

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

const MONTHS = ['12/01/2021', '13/01/2021', '14/01/2021', '15/01/2021', '16/01/2021', '17/01/2021', '18/01/2021'];
const genLineData = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'PRECIO RECOMENDADO',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      },
      {
        label: 'COMPETENCIA ESTRATÉGICA',
        backgroundColor: getColor('third'),
        borderColor: getColor('third'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
      {
        label: 'COMPETENCIA A',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
      {
        label: 'COMPETENCIA B',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
      {
        label: 'COMPETENCIA C',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
      {
        label: 'COMPETENCIA D',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
      {
        label: 'COMPETENCIA F',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
    ],
  };
};
const genPieData = () => {
  return {
    datasets: [
      {
        data: [4,5,6,7,8,9],
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
const genPriceBuy = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: 'PRECIO ÚLTIMA COMPRA',
        backgroundColor: getColor('primary'),
        borderColor: getColor('primary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData,
      },
      {
        label: 'PRECIO COMPRA HOY',
        backgroundColor: getColor('secondary'),
        borderColor: getColor('secondary'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
      {
        label: 'PRECIO COMPRA MAÑAN',
        backgroundColor: getColor('third'),
        borderColor: getColor('third'),
        borderWidth: 1,
        data: [
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
          randomNum(),
        ],
        ...moreData2,
      },
    ],
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
      simular3:false
    }

    this.selectAll = this.selectAll.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
   

  selectAll(){
    this.setState({selectAll: !this.state.selectAll})
    
  }
  handleClick(event){
    console.log("c",event.target.id)
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
    const secondaryColor = getColor('secondary');

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
                      <Label for="exampleNumber">PRECIO:</Label>
                      <Input
                        type="number"
                        name="number"
                        id="exampleNumber"
                        placeholder=""
                      />
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
          <Filter />
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
                        <Tab label="Diesel" >
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
                                  <th className="text-center header-table">UTILIDAD TOTAL</th>                         
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
                                </tr>
                            </thead>
                          <tbody>
                              <tr>
                                  <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" /></td>
                                  <td className="text-left">Servicio Aztecas</td>
                                  <td className="text-center"> B</td>
                                  <td className="text-center">$13.5</td>
                                  <td className="text-center">$15.6</td>
                                  <td className="text-center text-shadow">$12.2</td>
                                  <td className="text-center text-shadow">$15.3</td>
                                  <td className="text-center text-shadow">$12.2</td>
                                  <td className="text-center text-shadow">$13.3</td>
                                  <td className="text-center text-shadow text-shadow">{ this.state.simular ? <input type="radio" name="radio1" value=""  /> : ''} $15.2 </td>
                                  <td className="text-center bg-gray-light text-shadow">{ this.state.simular ? <p><input type="radio" name="radio1" value="" className="dato_ms" /><input type="number" className="input-simulacion" placeholder="12"/> </p> : 13.2 }</td>
                                  <td className="text-center bg-gray-light txt-ok"> 18.2%</td>
                                  <td className="text-center bg-gray-light"> 16.8% </td>
                                  <td className="text-center bg-gray-light"> 150 lts</td>
                                  <td className="text-center bg-gray-light"> 250 lts</td>
                                  <td className="text-center bg-gray-light">$10,4423</td>
                                  <td className="text-center"><a href="/#ServicioAztecas" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                  <td className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil editicon" viewBox="0 0 16 16" id="0" onClick={this.handleClick}>
                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                    </td>
                              </tr>
                              <tr>
                                  <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" /></td>
                                  <td className="text-left">Servicio Neza</td>
                                  <td className="text-center"> A</td>
                                  <td className="text-center">$13.5</td>
                                  <td className="text-center">$12.2</td>
                                  <td className="text-center text-shadow">$13.6 </td>
                                  <td className="text-center text-shadow">$13.2 </td>
                                  <td className="text-center text-shadow">$12.2</td>
                                  <td className="text-center text-shadow">$13.3</td>
                                  <td className="text-center text-shadow">{ this.state.simular1 ? <input type="radio" name="radio1" value=""  /> : ''} $15.2 </td>
                                  <td className="text-center bg-gray-light text-shadow">{ this.state.simular1 ? <p><input type="radio" name="radio1" value="" className="dato_ms" /><input type="number" className="input-simulacion" placeholder="12"/> </p> : 13.2 }</td>
                                  <td className="text-center bg-gray-light txt-ok">18.3%</td>
                                  <td className="text-center bg-gray-light">  12.8% </td>
                                  <td className="text-center bg-gray-light"> 250 lts</td>
                                  <td className="text-center bg-gray-light"> 150 lts</td>
                                  <td className="text-center bg-gray-light">$20,4423</td>
                                  <td className="text-center color-red"> <a href="/#ServicoNeza" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                  <td className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil editicon" viewBox="0 0 16 16" id="1" onClick={this.handleClick}>
                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                  </td>
                              </tr> 
                              <tr>
                                  <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" /></td>
                                  <td className="text-left">Servicio Atizapán</td>
                                  <td className="text-center"> A</td>
                                  <td className="text-center">$13.5</td>
                                  <td className="text-center">$12.2</td>
                                  <td className="text-center text-shadow">$13.6 </td>
                                  <td className="text-center text-shadow">$13.2 </td>
                                  <td className="text-center text-shadow">$12.2</td>
                                  <td className="text-center text-shadow">$13.3</td>
                                  <td className="text-center text-shadow">{ this.state.simular2 ? <input type="radio" name="radio1" value=""  /> : ''} $15.2 </td>
                                  <td className="text-center bg-gray-light text-shadow">{ this.state.simular2 ? <p><input type="radio" name="radio1" value="" className="dato_ms" /><input type="number" className="input-simulacion" placeholder="12"/> </p> : 13.2 }</td>
                                  <td className="text-center bg-gray-light txt-high">18.3%</td>
                                  <td className="text-center">13.3%</td>
                                  <td className="text-center bg-gray-light"> 250 lts</td>
                                  <td className="text-center bg-gray-light"> 150 lts</td>
                                  <td className="text-center bg-gray-light">$20,4423</td>
                                  <td className="text-center color-red"> <a href="/#ServicoNeza" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                  <td className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil editicon" viewBox="0 0 16 16" id="2" onClick={this.handleClick}>
                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                  </td>
                              </tr>  
                              <tr>
                                  <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" /></td>
                                  <td className="text-left">Servico Tlalnepantla</td>
                                  <td className="text-center"> A</td>
                                  <td className="text-center">$13.5</td>
                                  <td className="text-center">$12.2</td>
                                  <td className="text-center text-shadow">$13.6 </td>
                                  <td className="text-center text-shadow">$13.2 </td>
                                  <td className="text-center text-shadow">$12.2</td>
                                  <td className="text-center text-shadow">$13.3</td>
                                  <td className="text-center text-shadow">{ this.state.simular3 ? <input type="radio" name="radio1" value=""  /> : ''} $15.2 </td>
                                  <td className="text-center bg-gray-light text-shadow">{ this.state.simular3 ? <p><input type="radio" name="radio1" value="" className="dato_ms" /><input type="number" className="input-simulacion" placeholder="12"/> </p> : 13.2 }</td>
                                  <td className="text-center bg-gray-light txt-high">18.3%</td>
                                  <td className="text-center">13.3%</td>
                                  <td className="text-center bg-gray-light"> 250 lts</td>
                                  <td className="text-center bg-gray-light"> 150 lts</td>
                                  <td className="text-center bg-gray-light">$20,4423</td>
                                  <td className="text-center color-red"> <a href="/#ServicoNeza" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                  <td className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil editicon" viewBox="0 0 16 16" id="3" onClick={this.handleClick}>
                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                  </td>
                              </tr>                  
                          </tbody>
                        </Table>
                            
                        </Tab>
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
                                  <th className="text-center header-table">UTILIDAD TOTAL</th>                         
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
                                  <th className="text-center header-table">UTILIDAD TOTAL</th>                         
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
                            <th className="header-table">Diesel A+</th>
                            <th className="header-table">{'<92'}</th>
                            <th className="header-table">{'>92'}</th>
                            <th className="header-table">Gasoleo B</th>
                            <th className="header-table">PEMEX</th>
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
                <Pie data={genPieData()} />
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
export default Masivo;
