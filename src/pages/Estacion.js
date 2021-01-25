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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
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
          simular:null,
          preciorecomendadoponderado:0,
          preciorecomenda:12.3,
          competenciaestrategica:12.4,
          preciomodificado:0,
          competenciaA:23.4,
          competenciaB:20.4,
          competenciaC:18.4,
          competenciaD:12.3,
        },
        {
          nombre: '>92',
          precioventa: 13.41,
          simular:null,
          preciorecomendadoponderado:0,
          preciorecomenda:12.3,
          competenciaestrategica:12.4,
          preciomodificado:0,
          competenciaA:23.4,
          competenciaB:20.4,
          competenciaC:18.4,
          competenciaD:12.3,
        },
        {
          nombre: 'Gasoleo B',
          precioventa: 13.41,
          simular:null,
          preciorecomendadoponderado:0,
          preciorecomenda:12.3,
          competenciaestrategica:12.4,
          preciomodificado:0,
          competenciaA:23.4,
          competenciaB:20.4,
          competenciaC:18.4,
          competenciaD:12.3,
        },
        {
          nombre: 'Diesel A+',
          precioventa: 13.41,
          simular:null,
          preciorecomendadoponderado:0,
          preciorecomenda:12.3,
          competenciaestrategica:12.4,
          preciomodificado:0,
          competenciaA:23.4,
          competenciaB:20.4,
          competenciaC:18.4,
          competenciaD:12.3,
        },
        {
          nombre: 'PEMEX DIESEL (DIESEL)',
          precioventa: 13.41,
          simular:null,
          preciorecomendadoponderado:0,
          preciomodificado:0,
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
    this.handSimulate = this.handSimulate.bind(this);
    this.addValue =  this.addValue.bind(this);
    this.resetSimulador = this.resetSimulador.bind(this);
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

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');
    const PRODUCTOS =[];
    this.state.productsData.map(prop => {
        PRODUCTOS.push(prop.nombre)
    })


    const genLineData = (moreData = {}, moreData2 = {}) => {
      return {
        labels: PRODUCTOS,
        datasets: [
          {
            label: this.state.simular ? 'PRECIO MODIFICADO ' : 'PRECIO VENTA',
            backgroundColor: getColor('secondary'),
            borderColor: getColor('secondary'),
            borderWidth: 1,
            data: [
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[0].precioventa,
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[1].precioventa,
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[2].precioventa,
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[3].precioventa,
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[4].precioventa,
            ],
            ...moreData,
          },
          {
            label: 'PRECIO RECOMENDADO',
            backgroundColor: getColor('primary'),
            borderColor: getColor('primary'),
            borderWidth: 1,
            data: [
              this.state.productsData[0].preciorecomenda,
              this.state.productsData[1].preciorecomenda,
              this.state.productsData[2].preciorecomenda,
              this.state.productsData[3].preciorecomenda,
              this.state.productsData[4].preciorecomenda,
            ],
            ...moreData,
          },
          {
            label: 'COMPETENCIA ESTRATÉGICA',
            backgroundColor: getColor('third'),
            borderColor: getColor('third'),
            borderWidth: 1,
            data: [
              this.state.productsData[0].competenciaestrategica,
              this.state.productsData[1].competenciaestrategica,
              this.state.productsData[2].competenciaestrategica,
              this.state.productsData[3].competenciaestrategica,
              this.state.productsData[4].competenciaestrategica,
            ],
            ...moreData2,
          },
          /*{
            label: 'PRECIO PROMEDIO PONDERADO',
            backgroundColor: getColor('secondary'),
            borderColor: getColor('secondary'),
            borderWidth: 1,
            data: [
              this.state.productsData[0].preciorecomendadoponderado,
              this.state.productsData[1].preciorecomendadoponderado,
              this.state.productsData[2].preciorecomendadoponderado,
              this.state.productsData[3].preciorecomendadoponderado,
              this.state.productsData[4].preciorecomendadoponderado,
            ],
            ...moreData,
          },*/
          {
            label: 'COMPETENCIA A',
            backgroundColor: getColor('secondary'),
            borderColor: getColor('secondary'),
            borderWidth: 1,
            data: [
              this.state.productsData[0].competenciaA,
              this.state.productsData[1].competenciaA,
              this.state.productsData[2].competenciaA,
              this.state.productsData[3].competenciaA,
              this.state.productsData[4].competenciaA,
            ],
            ...moreData2,
          },
          {
            label: 'COMPETENCIA B',
            backgroundColor: getColor('secondary'),
            borderColor: getColor('secondary'),
            borderWidth: 1,
            data: [
              this.state.productsData[0].competenciaB,
              this.state.productsData[1].competenciaB,
              this.state.productsData[2].competenciaB,
              this.state.productsData[3].competenciaB,
              this.state.productsData[4].competenciaB,
            ],
            ...moreData2,
          },
          {
            label: 'COMPETENCIA C',
            backgroundColor: getColor('secondary'),
            borderColor: getColor('secondary'),
            borderWidth: 1,
            data: [
              this.state.productsData[0].competenciaC,
              this.state.productsData[1].competenciaC,
              this.state.productsData[2].competenciaC,
              this.state.productsData[3].competenciaC,
              this.state.productsData[4].competenciaC,
            ],
            ...moreData2,
          },
          {
            label: 'COMPETENCIA D',
            backgroundColor: getColor('secondary'),
            borderColor: getColor('secondary'),
            borderWidth: 1,
            data: [
              this.state.productsData[0].competenciaD,
              this.state.productsData[1].competenciaD,
              this.state.productsData[2].competenciaD,
              this.state.productsData[3].competenciaD,
              this.state.productsData[4].competenciaD,
            ],
            ...moreData2,
          }
        ],
      };
    };

    let { productsData } = this.state;
    return (
      <Page>
                        <Modal
                  isOpen={this.state.modal_nested_parent}
                  toggle={this.toggle('nested_parent')}
                  className={this.props.className}>
                  <ModalHeader toggle={this.toggle('nested_parent')}>
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                    <br />
                    <Button color="success" onClick={this.toggle('nested')}>
                      Show Nested Model
                    </Button>
                    <Modal
                      isOpen={this.state.modal_nested}
                      toggle={this.toggle('nested')}>
                      <ModalHeader>Nested Modal title</ModalHeader>
                      <ModalBody>Stuff and things</ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={this.toggle('nested')}>
                          Done
                        </Button>{' '}
                        <Button
                          color="secondary"
                          onClick={this.toggle('nested_parent')}>
                          All Done
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="primary"
                      onClick={this.toggle('nested_parent')}>
                      Do Something
                    </Button>{' '}
                    <Button
                      color="secondary"
                      onClick={this.toggle('nested_parent')}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
      <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>PRECIO DE VENTA
              <div className="container-buttons">
                <Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">SIMULAR</Button>
                <Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">APLICAR</Button>
                <Button color="primary" onClick={this.toggle('nested_parent')} className="btn-main-fuel-right">ACEPTAR</Button>
                <Button color="danger" onClick={this.resetSimulador} className="btn-main-fuel-right">CLEAR</Button>
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
                    return (
                      <tr>
                        <th  className="text-center" scope="row">{ prop.nombre }</th>
                          { this.state.simular ? 
                          <td className="text-left">
                              <p><input type="number" className="input-simulacion" id={ key } value= { prop.simular } onChange={ this.addValue } />  <input type="radio" name={ key } id={ key } value={ prop.simular } onClick={this.handSimulate} /></p>  
                          </td>:'' }
                          <td className="text-center"> { prop.precioventa } { this.state.simular ?  <input type="radio" name={ key } id={ key } value={ prop.precioventa }  onClick={this.handSimulate} /> : '' }</td>
                          <td className="text-center">32432</td>
                          <td className="text-center">{ prop.preciorecomenda }</td>
                          <td className="text-center txt-ok">{ prop.competenciaestrategica }</td>
                          <td className="text-center">{ prop.competenciaA }</td>
                          <td className="text-center txt-high">{ prop.competenciaB }</td>
                          <td className="text-center">{ prop.competenciaC }</td>
                          <td className="text-center">{ prop.competenciaD }</td>
                    </tr>
                    )
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

        <Row>
          <Col md="6" sm="12" xs="12">
          {/*<select class="select-estacion-grafica">
            <option selected>PEMEX DIESEL (DIESEL)</option>
            <option value="1">{"< 92"}</option>
            <option value="2">{"> 92"}</option>
            <option value="3">Gasoleo B</option>
            <option value="4">Diesel A+ </option>
            </select>*/}
            <Card>
            <CardHeader>PRECIO DE VENTA COMPETENCIA</CardHeader>
              <CardBody>
                {/*<Line data={chartjs.line.data} options={chartjs.line.options} />*/}
                <Bar data={ genLineData() } />
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
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
