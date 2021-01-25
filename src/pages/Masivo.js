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
        <Filter></Filter>
          <Card className="mb-3">
            <CardHeader>PRECIO DE VENTA</CardHeader>
            <CardBody>
            <Tabs headerStyle={{fontWeight: 'bold'}} activeHeaderStyle={{color:'black'}} >
                        <Tab label="Diesel" >
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
                                  <td className="text-center"><a href="estacion#ServicioAztecas" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                  <td className="text-center">
                                        <a href="estacion#ServicioAztecas" target="_self">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                        </svg>
                                        </a>
                                    </td>
                              </tr>
                              <tr>
                              <td className="text-center color-blue"> <input type="radio" id="" name="" value="dewey" /></td>
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
                                  <td className="text-center color-red"> <a href="estacion#ServicoNeza" target="_self"><img src={ ver } alt="ver" className="ver-dashboard" /></a></td>
                                  <td className="text-center"><a href="estacion#ServicioAztecas" target="_self"><img src={ favoritos } alt="ver" className="ver-dashboard" /></a></td>
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
