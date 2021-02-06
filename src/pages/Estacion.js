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
import moment from "moment";

import Slider from "react-slick";
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
const PRODUCTS = ['<92', '>92', 'Gasoleo B', 'Diesel A+', 'PEMEX DIESEL'];

const genPriceBuy = (moreData = {}, moreData2 = {}) => {
  return {
    labels: MONTHS,
    datasets: [
      {
        label: '< 92',
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
        label: '>92',
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
        label: 'Gasoleo B',
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
        label: 'Diesel A+',
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
        label: 'PEMEX DIESEL (DIESEL)',
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
          nombre: '<92',
          precioventa: 13.41,
          simular:null,
          preciorealdehoy:12.21,
          preciorecomendadoponderado:0,
          preciorecomenda:11.3,
          competenciaestrategica:11.4,
          preciomodificado:0,
          preciodecompra:13.4,
          preciopromediodeventa:16,
          mipreciopromediodeventa:12,
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
          preciodecompra:13,
          preciopromediodeventa:16,
          mipreciopromediodeventa:12,
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
          preciodecompra:14,
          preciopromediodeventa:17,
          mipreciopromediodeventa:12,
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
          preciodecompra:14,
          preciopromediodeventa:16.3,
          mipreciopromediodeventa:12,
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
          preciodecompra:15,
          preciopromediodeventa:18,
          mipreciopromediodeventa:12,
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

 componentDidMount(){
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
              this.state.simular ? this.state.productsData[0].precioventa : this.state.productsData[0].precioventa,
              this.state.simular ? this.state.productsData[1].precioventa : this.state.productsData[1].precioventa,
              this.state.simular ? this.state.productsData[2].precioventa : this.state.productsData[2].precioventa,
              this.state.simular ? this.state.productsData[3].precioventa : this.state.productsData[3].precioventa,
              this.state.simular ? this.state.productsData[4].precioventa : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].precioventa : this.state.productsData[4].precioventa,  
              this.state.simular ? this.state.productsData[4].precioventa : this.state.productsData[4].precioventa           
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
        labels: PRODUCTS,
        datasets: [
          {
            label:this.state.simular ? 'PRECIO REAL DE HOY ' : 'PRECIO REAL DE HOY',
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
          }
        ],
      };
    };


    const genLineDataMONTHS = (moreData = {}, moreData2 = {}) => {
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
              this.state.productsData[0].preciopromediodeventa,
              this.state.productsData[1].preciopromediodeventa,
              this.state.productsData[2].preciopromediodeventa,
              this.state.productsData[3].preciopromediodeventa,
              this.state.productsData[4].preciopromediodeventa,
              this.state.productsData[1].preciopromediodeventa,
              this.state.productsData[2].preciopromediodeventa,
            ],
            ...moreData,
          },
          {
            label: 'MI PRECIO DE VENTA PROMEDIO',
            backgroundColor: getColor('warning'),
            borderColor: getColor('warning'),
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
        ],
      };
    };
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
                            return (
                              <tr>
                                  <td className="text-center text-mini">{prop.nombre}</td>
                                  <td className="text-center text-mini">${  prop.preciomodificado }</td>
                                  <td className="text-center text-mini">$1.1</td>
                                  <td className="text-center text-mini">$1.4</td>
                                  <td className="text-center text-mini">$1,1200</td>
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
                    <th className="header-table">PRECIO PROMEDIO PONDERADO</th>
                    <th className="header-table">COMPETENCIA ESTRATÉGICA</th>
                    <th className="header-table">COMPETENCIA A</th>
                    <th className="header-table">COMPETENCIA B</th>
                    <th className="header-table">COMPETENCIA C</th>
                    <th className="header-table">COMPETENCIA D</th>
                    <th className="header-table">PRECIO REAL DE HOY</th>
                    {this.state.simular ? <th className="header-table">SIMULACIÓN</th> : '' }
                    <th className="header-table">PRECIO RECOMENDADO</th>
                    <th className="header-table">DIFERENCIA PRECIO REAL<br></br>PRECIO SELECCIONADO</th>
                  </tr>
                </thead>
                <tbody>
                {   
                    productsData.map((prop, key) => {
                      let precioponderado =  (prop.precioventa * 100 ) / promedio; 
                      let diferenciaprecio =  prop.preciorealdehoy -  prop.preciorecomenda;
                    /*return <th key={key}>{prop}</th>;*/
                    return (
                      <tr>
                          <td  className="text-center">{ prop.nombre }</td>
                          <td className="text-center">${ precioponderado.toFixed(1) / 2}</td>
                          <td className= { prop.competenciaestrategica > 14 ? "text-center txt-high" : prop.competenciaestrategica < 10 ? "text-center txt-ok" : "text-center"}> $ { prop.competenciaestrategica }</td>
                          <td className= { prop.preciorecomenda > 14 ? "text-center txt-high" : prop.preciorecomenda === 10.3 || prop.preciorecomenda === 10.7  ? "text-center txt-ok" : "text-center"}>$ { prop.competenciaA }</td>
                          <td className={ prop.preciorecomenda > 14 ? "text-center txt-high" : prop.preciorecomenda === 10.3 || prop.preciorecomenda === 10.7  ? "text-center txt-ok" : "text-center"}> $ { prop.competenciaB }</td>
                          <td className={ prop.preciorecomenda > 14 ? "text-center txt-high" :  "text-center"}>${ prop.competenciaC }</td>
                          <td className= { prop.competenciaD > 13 ? "text-center txt-high" : "text-center"}>${ prop.competenciaD }</td>
                          <td className="text-center">${ prop.preciorealdehoy }</td>
                          { this.state.simular ? 
                          <td className="text-left">
                              <p><input type="number" className="input-simulacion" id={ key } value= { prop.simular } onChange={ this.addValue } />  <input type="radio" name={ key } id={ key } value={ prop.simular } onClick={this.handSimulate} /></p>  
                          </td>:'' }
                          <td className={this.state.simular ? "text-center td-size":"text-center" }>${ prop.preciorecomenda } { this.state.simular ?  <input type="radio" name={ key } id={ key } value={ prop.preciorecomenda }  onClick={this.handSimulate} /> : '' }</td>
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
                    <Bar data={genLineDataMONTHS({ type: 'line', fill: false })} height={80} />
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
                  usersData={userProgressTableData}
                /> :
                <UserProgressTable
                  headers= {['','PRODUCTO','PRECIO ÚLTIMA COMPRA','PRECIO DE COMPRA DE HOY','PRECIO DE COMPRA DE MAÑANA','DIFERENCIA HOY/MAÑANA','PRECIO DE VENTA RECOMENDADO','MARGEN TEÓRICO','MARGEN REAL','VOLUMEN DEL MES HASTA AHORA','VOLUMEN OBJETIVO MENSUAL']}
                  usersData={userProgressTableData}
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
export default Estacion;
