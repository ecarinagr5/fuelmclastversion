import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import {Tabs, Tab} from 'react-bootstrap-tabs';
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
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
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
const MONTHS = ['21/01/2021', '22/01/2021', '23/01/2021', '24/01/2021', '25/01/2021', '26/01/2021', '27/01/2021'];

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
      tools:false,
      productsData:[
        {
          nombre: '<92',
          precioventa: 13.41,
          simular:null,
          preciorealdehoy:12.21,
          preciorecomendadoponderado:0,
          preciorecomenda:11.3,
          competenciaestrategica:11.4,
          preciomodificado:0,
          competenciaA:12.4,
          competenciaB:11.4,
          competenciaC:12.4,
          competenciaD:12.3,
        },
        {
          nombre: '>92',
          precioventa: 14.41,
          simular:null,
          preciorealdehoy:13.11,
          preciorecomendadoponderado:0,
          preciorecomenda:10.3,
          competenciaestrategica:12.4,
          preciomodificado:0,
          competenciaA:11.4,
          competenciaB:13.4,
          competenciaC:16.4,
          competenciaD:12.3,
        },
        {
          nombre: 'Gasoleo B',
          precioventa: 15.41,
          simular:null,
          preciorealdehoy:14.10,
          preciorecomendadoponderado:0,
          preciorecomenda:11.2,
          competenciaestrategica:12.4,
          preciomodificado:0,
          competenciaA:10.4,
          competenciaB:12.4,
          competenciaC:14.4,
          competenciaD:12.3,
        },
        {
          nombre: 'Diesel A+',
          precioventa: 16.41,
          preciorealdehoy:12.11,
          simular:null,
          preciorecomendadoponderado:0,
          preciorecomenda:10.7,
          competenciaestrategica:12.4,
          preciomodificado:0,
          competenciaA:13.4,
          competenciaB:11.4,
          competenciaC:13.4,
          competenciaD:12.3,
        },
        {
          nombre: 'PEMEX DIESEL (DIESEL)',
          precioventa: 17.41,
          preciorealdehoy:13.41,
          simular:null,
          preciorecomendadoponderado:0,
          preciomodificado:0,
          preciorecomenda:13.3,
          competenciaestrategica:14.4,
          competenciaA:12.4,
          competenciaB:12.8,
          competenciaC:12.4,
          competenciaD:12.3,
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handSimulate = this.handSimulate.bind(this);
    this.addValue =  this.addValue.bind(this);
    this.resetSimulador = this.resetSimulador.bind(this);
    this.handTools = this.handTools.bind(this);
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



  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    const PRODUCTOS =[];
    this.state.productsData.map(prop => {
        PRODUCTOS.push(prop.nombre)
    })

    const genLineDataHistorico = (moreData = {}, moreData2 = {}) => {
      return {
        labels: MONTHS,
        datasets: [
          {
            label: this.state.productsData[0].nombre,
            backgroundColor: getColor('secondary'),
            borderColor: getColor('secondary'),
            borderWidth: 1,
            data: [
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[0].precioventa,
              this.state.simular ? this.state.productsData[1].modificado : this.state.productsData[1].precioventa,
              this.state.simular ? this.state.productsData[2].modificado : this.state.productsData[2].precioventa,
              this.state.simular ? this.state.productsData[3].modificado : this.state.productsData[3].precioventa,
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa           
            ],
            ...moreData,
          },
          {
            label: this.state.productsData[1].nombre,
            backgroundColor: getColor('primary'),
            borderColor: getColor('primary'),
            borderWidth: 1,
            data: [
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[0].precioventa,
              this.state.simular ? this.state.productsData[1].modificado : this.state.productsData[1].precioventa,
              this.state.simular ? this.state.productsData[2].modificado : this.state.productsData[2].precioventa,
              this.state.simular ? this.state.productsData[3].modificado : this.state.productsData[3].precioventa,
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa 
            ],
            ...moreData,
          },
          {
            label: this.state.productsData[2].nombre,
            backgroundColor: getColor('third'),
            borderColor: getColor('third'),
            borderWidth: 1,
            data: [
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[0].precioventa,
              this.state.simular ? this.state.productsData[1].modificado : this.state.productsData[1].precioventa,
              this.state.simular ? this.state.productsData[2].modificado : this.state.productsData[2].precioventa,
              this.state.simular ? this.state.productsData[3].modificado : this.state.productsData[3].precioventa,
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa 
            ],
            ...moreData2,
          },
          {
            label:this.state.productsData[3].nombre,
            backgroundColor: getColor('secondary'),
            borderColor: getColor('secondary'),
            borderWidth: 1,
            data: [
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[0].precioventa,
              this.state.simular ? this.state.productsData[1].modificado : this.state.productsData[1].precioventa,
              this.state.simular ? this.state.productsData[2].modificado : this.state.productsData[2].precioventa,
              this.state.simular ? this.state.productsData[3].modificado : this.state.productsData[3].precioventa,
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa 
            ],
            ...moreData2,
          },
          {
            label: this.state.productsData[4].nombre,
            backgroundColor: getColor('secondary'),
            borderColor: getColor('secondary'),
            borderWidth: 1,
            data: [
              this.state.simular ? this.state.productsData[0].modificado : this.state.productsData[0].precioventa,
              this.state.simular ? this.state.productsData[1].modificado : this.state.productsData[1].precioventa,
              this.state.simular ? this.state.productsData[2].modificado : this.state.productsData[2].precioventa,
              this.state.simular ? this.state.productsData[3].modificado : this.state.productsData[3].precioventa,
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].modificado : this.state.productsData[4].precioventa 
            ],
            ...moreData2,
          }
        ],
      };
    };


    const genLineData = (moreData = {}, moreData2 = {}) => {
      return {
        labels: MONTHS,
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
              this.state.productsData[1].preciorecomenda,
              this.state.productsData[2].preciorecomenda,
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
              this.state.productsData[1].competenciaestrategica,
              this.state.productsData[2].competenciaestrategica,
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
              this.state.productsData[1].competenciaB,
              this.state.productsData[2].competenciaB,
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
              this.state.productsData[2].competenciaC,
              this.state.productsData[3].competenciaC,
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
              this.state.productsData[1].competenciaD,
              this.state.productsData[2].competenciaD,
            ],
            ...moreData2,
          }
        ],
      };
    };

    let { productsData } = this.state;
    let promedio = 63 //Promedio de competencia estrategica;
    return (
      <Page>
        {/* Tools */}
          <Button color="primary" className="btn-fixed-setup" onClick={this.handTools}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
              <path d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"/>
            </svg>
          </Button>
          <div className={ this.state.tools ? "container-tools show" : "hide"}>       
            <Col xl={8} lg={12} md={12}>
              <Card>
                <CardBody  className="container-tools-inside">
                  <Form inline>
                    <FormGroup>
                      <Label for="exampleEmail" className="text-tools label-simular">
                        MARGEN POR LITRO OBJETIVO
                      </Label>
                      <Input type="number" name="margen" className="input-tools label-simular" />
                    </FormGroup>{' '}
                    <FormGroup>
                      <Label for="examplePassword"  className="text-tools label-simular" >
                      VOLUMEN OBJETIVO
                      </Label>
                      <Input
                        type="number"
                        name="Volumen"
                        className="input-tools"
                      />
                    </FormGroup>{' '}
                    <Button color="primary" >APLICAR</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </div>
        {/* Modal */}
              <Modal
                  isOpen={this.state.modal_nested_parent}
                  toggle={this.toggle('nested_parent')}
                  className={this.props.className}>
                  <ModalHeader toggle={this.toggle('nested_parent')}>
                    ACEPTAR PRECIOS
                  </ModalHeader>
                  <ModalBody>
                    Estas seguro de Aplicar los siguientes cambios:
                    {
                      this.state.productsData.map( product =>
                      <p className="product-row"> { product.nombre } <span className="text-validate">$ { product.preciomodificado } </span> </p>
                      )
                    }
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
              <CardHeader>PRECIO DE VENTA
              <div className="container-buttons">
                <Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">SIMULAR</Button>
                <Button color="primary" onClick={this.handleClick} className="btn-main-fuel-right">APLICAR</Button>
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
                    <th className="header-table">PRECIO REAL DE HOY</th>
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
                      let precioponderado =  (prop.precioventa * 100 ) / promedio; 
                    /*return <th key={key}>{prop}</th>;*/
                    return (
                      <tr>
                        <th  className="text-center" scope="row">{ prop.nombre }</th>
                          <td className="text-center">{ prop.preciorealdehoy }</td>
                          { this.state.simular ? 
                          <td className="text-left">
                              <p><input type="number" className="input-simulacion" id={ key } value= { prop.simular } onChange={ this.addValue } />  <input type="radio" name={ key } id={ key } value={ prop.simular } onClick={this.handSimulate} /></p>  
                          </td>:'' }
                          <td className="text-center"> { prop.precioventa } { this.state.simular ?  <input type="radio" name={ key } id={ key } value={ prop.precioventa }  onClick={this.handSimulate} /> : '' }</td>
                          <td className="text-center">{ precioponderado.toFixed(1)  / 2}</td>
                          <td className= { prop.preciorecomenda  > 12 ? "text-center txt-high" : prop.preciorecomenda === 10.3 || prop.preciorecomenda === 10.7  ? "text-center txt-ok" : "text-center"}>{ prop.preciorecomenda }</td>
                          <td className= { prop.competenciaestrategica > 13 ? "text-center txt-high" : prop.competenciaestrategica < 10 ? "text-center txt-ok" : "text-center"}>{ prop.competenciaestrategica }</td>
                          <td className= { prop.preciorecomenda > 12 ? "text-center txt-high" : prop.preciorecomenda === 10.3 || prop.preciorecomenda === 10.7  ? "text-center txt-ok" : "text-center"}>{ prop.competenciaA }</td>
                          <td className={ prop.preciorecomenda > 12 ? "text-center txt-high" : prop.preciorecomenda === 10.3 || prop.preciorecomenda === 10.7  ? "text-center txt-ok" : "text-center"}>{ prop.competenciaB }</td>
                          <td className={ prop.preciorecomenda > 12 ? "text-center txt-high" :  "text-center"}>{ prop.competenciaC }</td>
                          <td className= { prop.competenciaD > 13 ? "text-center txt-high" : "text-center"}>{ prop.competenciaD }</td>
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
              <Tabs headerStyle={{fontWeight: 'bold'}} activeHeaderStyle={{color:'black'}} >
              <Tab label="POR PRECIO" className="tab-container"> 
                <CardBody>
                  {/*<Line data={chartjs.line.data} options={chartjs.line.options} />*/}
                  <Bar data={ genLineData() } />
                </CardBody>
              </Tab>
              <Tab label="POR PRODUCTO" onClick={this.handleClick}> 
                <CardBody>

                {/*<Bar data={ genLineDataHistorico({ type: 'line', fill: false })} />*/}
                <Line data={genLineDataHistorico({ fill: false }, { fill: false })}    
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
                    }} />
                    {/*<Bar data={ genLineDataHistorico() } />*/}
                </CardBody>
              </Tab>
              </Tabs>
              <p className="update-text">Last Update 25/01/2021 09:35 am</p>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>RECOMENDACIÓN</CardHeader>
              <CardBody>
                { this.state.simular ?
                <UserProgressTable
                  headers= {['','PRODUCTO','PRECIO DE VENTA POR LITRO SELECCIONADO','MARGEN POR LITRO OBJETIVO','VOLUMEN OBJETIVO','UTILIDAD TOTAL']}
                  usersData={userProgressTableData}
                /> :
                <UserProgressTable
                  headers= {['','PRODUCTO','PRECIO DE VENTA POR LITRO','MARGEN POR LITRO OBJETIVO','VOLUMEN OBJETIVO','UTILIDAD TOTAL']}
                  usersData={userProgressTableData}
                />
                }
              </CardBody>
              <p className="update-text">Last Update 25/01/2021 09:35 am</p>
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
                    <td className="text-center"> 13.41 <Badge href="#" color="primary" className="mr-1"><span className="update-date">22/01/2021</span></Badge></td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th  className="text-center" scope="row">{'> 92'}</th>
                    <td className="text-center">13.41 <Badge href="#" color="primary" className="mr-1"><span className="update-date">21/01/2021</span></Badge></td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th  className="text-center" scope="row">Gasoleo B</th>
                    <td className="text-center">13.41 <Badge href="#" color="primary" className="mr-1"><span className="update-date">19/01/2021</span></Badge></td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">Diesel A+ </th>
                    <td className="text-center">13.41 <Badge href="#" color="primary" className="mr-1"><span className="update-date">20/01/2021</span></Badge></td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                  <tr>
                    <th className="text-center" scope="row">PEMEX DIESEL (DIESEL) </th>
                    <td className="text-center">13.41 <Badge href="#" color="primary" className="mr-1"><span className="update-date">24/01/2021</span></Badge></td>
                    <td className="text-center">13.41</td>
                    <td className="text-center">12.3</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
            <p className="update-text">Last Update 25/01/2021 09:35 am</p>
          </Card>
        </Col>
        <Col md="6" sm="12" xs="12">
        <select class="select-estacion-grafica">
            <option selected>PEMEX DIESEL (DIESEL)</option>
            <option value="1">{"< 92"}</option>
            <option value="2">{"> 92"}</option>
            <option value="3">Gasoleo B</option>
            <option value="4">Diesel A+ </option>
            <option value="5">All</option>
        </select>
        <Card>
            <CardHeader>PRECIO DE COMPRA | TAR AZCAPOTZALCO </CardHeader>
            <CardBody>
            <Line data={genPriceBuy({ fill: false }, { fill: false })} />
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
export default Estacion;
