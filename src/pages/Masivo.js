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
import { Bar, Line } from 'react-chartjs-2';
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
} from 'reactstrap';
import { getColor } from 'utils/colors';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

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
    }

    this.selectAll = this.selectAll.bind(this);
  }

  selectAll(){
    this.setState({selectAll: !this.state.selectAll})
    
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
    <Row>
        <Col>
        {/* BARRA SIMULADOR */}
        <Row>
              <Card className="container-card-simular">
                <CardBody>
                  <div class="form-row">
                      <Col md={2} className="">
                          <label className="label-simular">PRECIO RECOMENDADO</label>
                          <input type="text" class="form-control" placeholder="$12.2" />
                      </Col>
                      <Col md={2}>
                          <label className="label-simular">MARGEN</label>
                          <input type="text" class="form-control" placeholder="12" />
                      </Col>
                      <Col md={2}>
                          <label className="label-simular">VOLUMEN</label>
                          <input type="text" class="form-control" placeholder="24" />
                      </Col>
                      <Col md={3}>
                          <Button color="primary btn-barra-simular">SIMULAR</Button>
                          <Button color="primary btn-barra-simular">
                            ACEPTAR &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-event" viewBox="0 0 16 16">
                              <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                            </svg>
                          </Button>
                          <Button color="danger btn-barra-simular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply-all-fill" viewBox="0 0 16 16">
                              <path d="M8.021 11.9L3.453 8.62a.719.719 0 0 1 0-1.238L8.021 4.1a.716.716 0 0 1 1.079.619V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
                              <path d="M5.232 4.293a.5.5 0 0 1-.106.7L1.114 7.945a.5.5 0 0 1-.042.028.147.147 0 0 0 0 .252.503.503 0 0 1 .042.028l4.012 2.954a.5.5 0 1 1-.593.805L.539 9.073a1.147 1.147 0 0 1 0-1.946l3.994-2.94a.5.5 0 0 1 .699.106z"/>
                            </svg>
                          </Button>

                      </Col>
                  </div>
                </CardBody>
              </Card>
          </Row>
        {/* FILTRO */}
          <Filter />
          <Card className="mb-3">
            <CardBody>
            <Tabs headerStyle={{fontWeight: 'bold'}} activeHeaderStyle={{color:'black'}} >
                        <Tab label="Diesel" >
                          <Table responsive>
                            <thead>
                                <tr>
                                  <th className="text-center header-table">All <input type="radio" onChange={this.selectAll}></input></th>
                                  <th className="text-center header-table">OPERADORA</th>
                                  <th className="text-center header-table">CLIENTE</th>
                                  <th className="text-center header-table">TAR </th>
                                  <th className="text-center header-table">PVP EESS</th>
                                  <th className="text-center header-table">PVP COM</th>
                                  <th className="text-center header-table">PVP MAX</th>
                                  <th className="text-center header-table">PVP MIN</th>
                                  <th className="text-center header-table">ESTRATÉGICO</th>
                                  <th className="text-center header-table">PVP REF HOY</th>
                                  <th className="text-center header-table">MG REP ES</th>
                                  <th className="text-center header-table">MG SUM ES</th>
                                  <th className="text-center header-table">MG PROM POND</th>
                                  <th className="text-center header-table">EV VTA ES</th>
                                  <th className="text-center header-table">PRECIO RECOMENDADO</th>
                                  <th className="text-center header-table">VOLUMEN </th>
                                  <th className="text-center header-table">UTILIDAD MAXIMA</th>
                                  <th className="text-center header-table">MARGEN </th>
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
                                </tr>
                            </thead>
                          <tbody>
                              <tr>
                                  <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" checked={this.state.selectAll ? true : false }/></td>
                                  <td className="text-center">Servicio Aztecas</td>
                                  <td className="text-center"> B</td>
                                  <td className="text-center"> 13.5</td>
                                  <td className="text-center">15.5</td>
                                  <td className="text-center"> 13.6 </td>
                                  <td className="text-center">15.6</td>
                                  <td className="text-center"> 12.2</td>
                                  <td className="text-center">15.3 </td>
                                  <td className="text-center"> 12.2</td>
                                  <td className="text-center"> 13.3</td>
                                  <td className="text-center">15.2</td>
                                  <td className="text-center"> 12.2</td>
                                  <td className="text-center"> 13.23</td>
                                  <td className="text-center bg-gray-light">13.2</td>
                                  <td className="text-center bg-gray-light"> 12</td>
                                  <td className="text-center bg-gray-light"> 16.8</td>
                                  <td className="text-center bg-gray-light">1.4</td>
                                  <td className="text-center"><a href="/#ServicioAztecas" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                  <td className="text-center">
                                        <a href="estacion#ServicioAztecas" target="_self">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg>
                                        </a>
                                    </td>
                              </tr>
                              <tr>
                              <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" checked={this.state.selectAll ? true : false } /></td>
                              <td className="text-center">Servico Neza</td>
                                  <td className="text-center"> A</td>
                                  <td className="text-center"> 13.5</td>
                                  <td className="text-center"> 12.2</td>
                                  <td className="text-center"> 13.6 </td>
                                  <td className="text-center">15.6</td>
                                  <td className="text-center"> 12.2</td>
                                  <td className="text-center"> 13.2 </td>
                                  <td className="text-center"> 12.2</td>
                                  <td className="text-center"> 13.3</td>
                                  <td className="text-center">15.23</td>
                                  <td className="text-center"> 12.2</td>
                                  <td className="text-center"> 13.23</td>
                                  <td className="text-center bg-gray-light">11.2</td>
                                  <td className="text-center bg-gray-light"> 1</td>
                                  <td className="text-center bg-gray-light"> 1.2</td>
                                  <td className="text-center bg-gray-light bg-margen-minimo">1.2</td>
                                  <td className="text-center color-red"> <a href="/#ServicoNeza" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                  <td className="text-center"><a href="/#ServicioAztecas" target="_self"><img src={ favoritos } alt="ver" className="ver-dashboard" /></a></td>
                              </tr>                 
                          </tbody>
                        </Table>
                            
                        </Tab>
                        <Tab label="< 92">
                        <Table responsive>
                          <thead>
                              <tr>
                              <th className="text-center header-table"></th>
                                  <th className="text-center header-table">OPERADORA</th>
                                  <th className="text-center header-table">CLIENTE</th>
                                  <th className="text-center header-table">TAR </th>
                                  <th className="text-center header-table">PVP EESS</th>
                                  <th className="text-center header-table">PVP COM</th>
                                  <th className="text-center header-table">PVP MAX</th>
                                  <th className="text-center header-table">PVP MIN</th>
                                  <th className="text-center header-table">ESTRATÉGICO</th>
                                  <th className="text-center header-table">PVP REF HOY</th>
                                  <th className="text-center header-table">MG REP ES</th>
                                  <th className="text-center header-table">MG SUM ES</th>
                                  <th className="text-center header-table">MG PROM POND</th>
                                  <th className="text-center header-table">EV VTA ES</th>
                                  <th className="text-center header-table">PRECIO RECOMENDADO</th>
                                  <th className="text-center header-table">VOLUMEN </th>
                                  <th className="text-center header-table">UTILIDAD MAXIMA</th>
                                  <th className="text-center header-table">MARGEN </th>
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
                              </tr>
                          </thead>
                        <tbody>
                            <tr>
                              <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" /></td>
                              <td className="text-center">Azcapotzalco</td>
                                <td className="text-center"> 15.2</td>
                                <td className="text-center"> 13.5</td>
                                <td className="text-center">15.5</td>
                                <td className="text-center"> 12.2</td>
                                <td className="text-center"> 13.6 </td>
                                <td className="text-center"> 13.2 </td>
                                <td className="text-center"> 13.3</td>
                                <td className="text-center"> 12.23</td>
                                <td className="text-center"> 13.2</td>
                                <td className="text-center">15.23</td>
                                <td className="text-center"> 12.2</td>
                                <td className="text-center"> 13.23</td>
                                <td className="text-center bg-gray-light">13.2</td>
                                <td className="text-center bg-gray-light"> 12</td>
                                <td className="text-center bg-gray-light"> 12.2</td>
                                <td className="text-center bg-gray-light bg-redb">1.4</td>
                                <td className="text-center color-red"> <a href="estacion#Azcapotzalco" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                <td className="text-center"><a href="estacion#ServicioAztecas" target="_self"><img src={ favoritos } alt="ver" className="ver-dashboard" /></a></td>
                            </tr>                
                        </tbody>
                      </Table>
                          
                        </Tab>
                        <Tab label="> 92">
                        <Table responsive>
                          <thead>
                              <tr>
                              <th className="text-center header-table"></th>
                                  <th className="text-center header-table">OPERADORA</th>
                                  <th className="text-center header-table">CLIENTE</th>
                                  <th className="text-center header-table"><span className="meaning">TAR</span></th>
                                  <th className="text-center header-table">PVP EESS</th>
                                  <th className="text-center header-table">PVP COM</th>
                                  <th className="text-center header-table">PVP MAX</th>
                                  <th className="text-center header-table">PVP MIN</th>
                                  <th className="text-center header-table">ESTRATÉGICO</th>
                                  <th className="text-center header-table">PVP REF HOY</th>
                                  <th className="text-center header-table">MG REP ES</th>
                                  <th className="text-center header-table">MG SUM ES</th>
                                  <th className="text-center header-table">MG PROM POND</th>
                                  <th className="text-center header-table">EV VTA ES</th>
                                  <th className="text-center header-table">PRECIO RECOMENDADO</th>
                                  <th className="text-center header-table">VOLUMEN </th>
                                  <th className="text-center header-table">UTILIDAD MAXIMA</th>
                                  <th className="text-center header-table">MARGEN </th>
                                  <th className="text-center header-table"></th>
                                  <th className="text-center header-table"></th>
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
                                <td className="text-center"> 12.2</td>
                                <td className="text-center"> 12.2</td>
                                <td className="text-center">15.2</td>
                                <td className="text-center"> 12.23</td>
                                <td className="text-center"> 13.2</td>
                                <td className="text-center">15.23</td>
                                <td className="text-center"> 12.2</td>
                                <td className="text-center"> 13.23</td>
                                <td className="text-center bg-gray-light">13.2</td>
                                <td className="text-center bg-gray-light"> 12</td>
                                <td className="text-center bg-gray-light"> 1.3</td>
                                <td className="text-center bg-gray-light">1.5</td>
                                <td className="text-center color-red"> <a href="estacion#Naucalpan" target="_self"> <img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                <td className="text-center"><a href="estacion#ServicioAztecas" target="_self"><img src={ favoritos } alt="ver" className="ver-dashboard" /></a></td>
                            </tr>                
                        </tbody>
                      </Table>
                        </Tab>                 
                    </Tabs>
                    
            </CardBody>
          </Card>
        </Col>
      </Row>
        <Row>
        </Row>
      </Page>
    );
  }
}
export default Masivo;
