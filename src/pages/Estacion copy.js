import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import { IconWidget, NumberWidget } from 'components/Widget';
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import { randomNum } from 'utils/demos';
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
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
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
        label: 'PRECIO PROMEDIO PONDERADO',
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
      }
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
        label: 'PRECIO COMPRA MAÑANA',
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

class Estacion extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      simular:false,
      productsData:[
        {
          nombre: '<92',
          precioventa: 13.41,
          simular:0,
          preciorecomendadoponderado:0,
          preciorecomenda:12.3,
          competenciaestrategica:12.4,
          competenciaA:23.4,
          competenciaB:20.4,
          competenciaC:18.4,
          competenciaD:12.3,
        },
        {
          nombre: '>92',
          precioventa: 13.41,
          simular:0,
          preciorecomendadoponderado:0,
          preciorecomenda:12.3,
          competenciaestrategica:12.4,
          competenciaA:23.4,
          competenciaB:20.4,
          competenciaC:18.4,
          competenciaD:12.3,
        },
        {
          nombre: 'Gasoleo B',
          precioventa: 13.41,
          simular:0,
          preciorecomendadoponderado:0,
          preciorecomenda:12.3,
          competenciaestrategica:12.4,
          competenciaA:23.4,
          competenciaB:20.4,
          competenciaC:18.4,
          competenciaD:12.3,
        },
        {
          nombre: 'Diesel A+',
          precioventa: 13.41,
          simular:0,
          preciorecomendadoponderado:0,
          preciorecomenda:12.3,
          competenciaestrategica:12.4,
          competenciaA:23.4,
          competenciaB:20.4,
          competenciaC:18.4,
          competenciaD:12.3,
        },
        {
          nombre: 'PEMEX DIESEL (DIESEL)',
          precioventa: 13.41,
          simular:0,
          preciorecomendadoponderado:0,
          preciorecomenda:12.3,
          competenciaestrategica:12.4,
          competenciaA:23.4,
          competenciaB:20.4,
          competenciaC:18.4,
          competenciaD:12.3,
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
 }
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  handleClick(){
    this.setState({ simular: true})
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    let { productsData } = this.state;
    return (
      <Page>
      <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>PRECIO DE VENTA
              <div className="container-buttons">
                <Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">SIMULAR</Button>
                <Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">APLICAR</Button>
                <Button color="danger" onClick={this.handleClick} className="btn-main-fuel-right">CLEAR ALL</Button>
              </div>
              </CardHeader>
        
              <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="header-table">PRODUCTO</th>
                    {this.state.simular ? <th className="header-table text-left">SIMULACIÓN</th> : '' }
                    <th className="header-table">PRECIO VENTA</th>
                    <th className="header-table">PRECIO PROMEDIO PONDERADO</th>
                    <th className="header-table">PRECIO RECOMENDADO</th>
                    <th className="header-table">COMPETENCIA ESTRATÉGICA</th>
                    <th className="header-table">COMPETENCIA A</th>
                    <th className="header-table">COMPETENCIA B</th>
                    <th className="header-table">COMPETENCIA C</th>
                    <th className="header-table">COMPETENCIA D</th>
                  </tr>
                </thead>
                <tbody>
                {   
                    productsData.map((prop, key) => {
                    /*return <th key={key}>{prop}</th>;*/
                    console.log("prod", prop,key)

                    return (
                      <tr>
                        <th  className="text-center" scope="row">{ prop.nombre }</th>
                          {this.state.simular ? 
                          <td className="text-left">
                              <p><input type="number" className="input-simulacion" />  <input type="radio" name={key} id={key} value="simulacion4"  /></p>  
                          </td>:''}
                          <td className="text-center">13.41 { this.state.simular ?  <input type="radio" name="simulacion1" id="simulacion4" value="simulacion4"  />: '' }</td>
                          <td className="text-center">13.41</td>
                          <td className="text-center">12.3</td>
                          <td className="text-center txt-ok">12.14</td>
                          <td className="text-center">23.4</td>
                          <td className="text-center txt-high">20.4</td>
                          <td className="text-center">18.4</td>
                          <td className="text-center">12.3</td>
                    </tr>
                    )
                  })}
                <tr>
                    <th  className="text-center" scope="row">{'< 92'}</th>
                    {this.state.simular ? 
                    <td className="text-left">
                        <p><input type="number" className="input-simulacion" />  <input type="radio" name="simulacion1" id="simulacion4" value="simulacion4"  /></p>  
                    </td>:''}
                    <td className="text-center">13.41 { this.state.simular ?  <input type="radio" name="simulacion1" id="simulacion4" value="simulacion4"  />: '' }</td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                    <td className="text-center txt-ok">12.14</td>
                    <td className="text-center">23.4</td>
                    <td className="text-center txt-high">20.4</td>
                    <td className="text-center">18.4</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th  className="text-center" scope="row">{'> 92'}</th>
                    {this.state.simular ? 
                    <td className="text-left">
                        <p><input type="number" className="input-simulacion"/>  <input type="radio" name="simulacion2" id="simulacion4" value="simulacion4"  /></p>  
                    </td>:''}
                    <td className="text-center">13.41 { this.state.simular ?  <input type="radio" name="simulacion2" id="simulacion4" value="simulacion4"  />: '' }</td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                    <td className="text-center txt-ok">12.14</td>
                    <td className="text-center">23.4</td>
                    <td className="text-center txt-high">20.4</td>
                    <td className="text-center">18.4</td>
                    <td className="text-center">23.4</td>
                  </tr>
                  <tr>
                    <th  className="text-center" scope="row">Gasoleo B</th>
                    {this.state.simular ? 
                    <td className="text-left">
                      <p><input type="number" className="input-simulacion"/>  <input type="radio" name="simulacion3" id="simulacion4" value="simulacion4"  /></p>  
                    </td>: ''}
                    <td className="text-center">13.41 { this.state.simular ?  <input type="radio" name="simulacion3" id="simulacion4" value="simulacion4"  /> : '' }</td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                    <td className="text-center txt-ok">12.14</td>
                    <td className="text-center txt-high">23.4</td>
                    <td className="text-center">20.4</td>
                    <td className="text-center">18.4</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">Diesel A+ </th>
                    {this.state.simular ? 
                    <td className="text-left">
                      <p><input type="number" className="input-simulacion"/>  <input type="radio" name="simulacion4" id="simulacion4" /></p>  
                    </td> : '' }
                    <td className="text-center">13.41 { this.state.simular ?  <input type="radio" name="simulacion4" id="simulacion4" value="simulacion4"  /> : '' }</td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                    <td className="text-center txt-ok">12.14</td>
                    <td className="text-center txt-high">23.4</td>
                    <td className="text-center">20.4</td>
                    <td className="text-center">18.4</td>
                    <td className="text-center">13.41</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">PEMEX DIESEL (DIESEL) </th>
                    { this.state.simular ? 
                    <td className="text-left">
                      <p><input type="number" className="input-simulacion"/> <input type="radio" name="simulacion5" id="simulacion5" /></p>  </td> : ''}
                    <td className="text-center">13.41 { this.state.simular ? <input type="radio" name="simulacion3" id="simulacion4" value="simulacion4"  />  : '' } </td> 
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                    <td className="text-center txt-ok">12.14</td>
                    <td className="text-center txt-high">23.4</td>
                    <td className="text-center">20.4</td>
                    <td className="text-center">18.4</td>
                    <td className="text-center">12.3</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
          <select class="select-estacion-grafica">
            <option selected>PEMEX DIESEL (DIESEL)</option>
            <option value="1">{"< 92"}</option>
            <option value="2">{"> 92"}</option>
            <option value="3">Gasoleo B</option>
            <option value="4">Diesel A+ </option>
        </select>
            <Card>
            <CardHeader>PRECIO DE VENTA COMPETENCIA</CardHeader>
              <CardBody>
                {/*<Line data={chartjs.line.data} options={chartjs.line.options} />*/}
                <Bar data={genLineData()} />
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            {/*<Card>
              <CardHeader>RECOMENDACIÓN</CardHeader>
              <ListGroup flush>
                <ListGroupItem>
                  <MdInsertChart size={25} color={primaryColor} /> Precio de Venta por Litro{' '}
                  <Badge color="secondary">$3000</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdBubbleChart size={25} color={primaryColor} /> Utilidad Total <Badge color="secondary">$1200</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdShowChart size={25} color={primaryColor} /> Margen por Litro{' '}
                  <Badge color="secondary">$800</Badge>
                </ListGroupItem>
                <ListGroupItem>
                  <MdPieChart size={25} color={primaryColor} /> Volument Total <Badge color="secondary">$2400</Badge>
                </ListGroupItem>
              </ListGroup>
            </Card>*/}
            <Card>
              <CardHeader>RECOMENDACIÓN</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    '',
                    'PRODUCTO',
                    'PRECIO DE VENTA POR LITRO',
                    'UTILIDAD TOTAL',
                    'MARGEN POR LITRO',
                    'VOLUMEN TOTAL',
                  ]}
                  usersData={userProgressTableData}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
        <Col md="6" sm="12" xs="12">
          <Card className="mb-3">
            <CardHeader>PRECIO DE COMPRA</CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                  <th className="header-table">PRODUCTO</th>
                    <th className="header-table">PRECIO ÚLTIMA COMPRA</th>
                    <th className="header-table">PRECIO COMPRA HOY</th>
                    <th className="header-table">PRECIO COMPRA MAÑANA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-center" scope="row">{'< 92'}</th>
                    <td className="text-center"> 13.41 <span className="update-date">21/01/2021</span></td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th  className="text-center" scope="row">{'> 92'}</th>
                    <td className="text-center">13.41</td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th  className="text-center" scope="row">Gasoleo B</th>
                    <td className="text-center">13.41</td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">Diesel A+ </th>
                    <td className="text-center">13.41</td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">PEMEX DIESEL (DIESEL) </th>
                    <td className="text-center">13.41</td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" sm="12" xs="12">
        <select class="select-estacion-grafica">
            <option selected>PEMEX DIESEL (DIESEL)</option>
            <option value="1">{"< 92"}</option>
            <option value="2">{"> 92"}</option>
            <option value="3">Gasoleo B</option>
            <option value="4">Diesel A+ </option>
        </select>
        <Card>
            <CardHeader>PRECIO DE COMPRA</CardHeader>
            <CardBody>
              <Line
                data={genPriceBuy()}
                options={{
                  scales: {
                    xAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: 'Month',
                        },
                      },
                    ],
                    yAxes: [
                      {
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Value',
                        },
                      },
                    ],
                  },
                }}
              />
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
export default Estacion;
