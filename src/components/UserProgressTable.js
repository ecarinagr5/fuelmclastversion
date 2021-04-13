import React from 'react';
import PropTypes from 'utils/propTypes';
import moment from "moment";

import { Table, Progress } from 'reactstrap';
import { getThemeColors } from 'utils/colors';

import Avatar from 'components/Avatar';
import productimg from '../assets/img/lata-de-gasolina.png';

import withBadge from 'hocs/withBadge';
import {
  Badge,
} from 'reactstrap';


const AvatarWithBadge1 = withBadge({
  position: 'bottom-right',
  color: 'success',
})(Avatar);

const AvatarWithBadge2 = withBadge({
  position: 'bottom-right',
  color: 'danger',
})(Avatar);

const AvatarWithBadge3 = withBadge({
  position: 'bottom-right',
  color: 'primary',
})(Avatar);

const UserProgressTable = ({ headers, usersData, simular, viewprice, ...restProps }) => {
  console.log("Sd", viewprice)
  return (
    <Table responsive hover {...restProps}>
      <thead className="header-table">
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        { 
          usersData.map(({ avatar, nombre, precioventa, utilidad ,volumenobjetivo,volumenreal,preciodecomprahoy, fechadeultimacompra, precioultimacompra, preciocompramanana, margenteorico ,margenreal,volumenpromediodelmes, volumenobjetivomensual, margenobjetivo , preciomodificadofranja1,preciomodificadofranja2, preciomodificadofranja3, pvprecomendadofranja1, pvprecomendadofranja2, pvprecomendadofranja3}, index) => {
          let diferencia = preciodecomprahoy - preciocompramanana;
          let diferenciaVolumen = volumenobjetivo - volumenreal;
          //Diferencia Volumen volumenreal - volumenobjetivo
        return (
          <tr key={index}>
           {nombre==='magna' ? <td className="align-middle text-center">
            <AvatarWithBadge1 src={productimg} /></td> 
            : nombre==='premium' ? <td className="align-middle text-center">
            <AvatarWithBadge2 src={productimg} /></td> : <td className="align-middle text-center">
            <AvatarWithBadge3 src={productimg} /></td> }
            <td className="align-middle text-left ">{nombre}</td>
            <td className={"align-middle text-center"}>$ {precioultimacompra.toFixed(2)} <Badge color="primary" className="mr-1"><span className="update-date">{ fechadeultimacompra }</span></Badge></td>
            <td className={"align-middle text-center"}>$ {preciodecomprahoy.toFixed(2)}</td>
            <td className={"align-middle text-center"}>$ {preciocompramanana}</td>
            <td className="align-middle text-center">$ {diferencia.toFixed(2)}</td>
            { simular && !viewprice ? <td className="align-middle text-center text-shadow">$ {preciomodificadofranja1 > 0 ? preciomodificadofranja1 : pvprecomendadofranja1 }</td> :   <td className="align-middle text-center text-shadow">$ {preciomodificadofranja1 > 0 ? preciomodificadofranja1 : pvprecomendadofranja1 }</td> }
            { simular && !viewprice ? <td className="align-middle text-center text-shadowb">$ {preciomodificadofranja2 > 0 ? preciomodificadofranja2 : pvprecomendadofranja2 }</td> : ''}
            { simular && !viewprice ? <td className="align-middle text-center text-shadowc">$ {preciomodificadofranja3 > 0 ? preciomodificadofranja3 : pvprecomendadofranja3 }</td> : ''}
            <td className={ margenteorico < margenobjetivo ? "align-middle text-center txt-ok" : margenteorico > margenobjetivo ? "align-middle text-center txt-high" : "align-middle text-center"  }>$ {margenteorico}</td>
            <td className={ margenreal < margenobjetivo ? "align-middle text-center txt-ok" : margenreal > margenobjetivo ? "align-middle text-center txt-high" : "align-middle text-center"  }>$ {margenreal}</td>
            {/*<td className="align-middle text-center">
                <Progress
                  color="success"
                  value={volumenpromediodelmes}
                  className="mb-3"
                >
                {volumenpromediodelmes} lts
              </Progress>  
            </td>*/}
            <td className="align-middle text-center">
                {diferenciaVolumen} %
              </td>
          </tr>
        )})}
      </tbody>
        </Table>
  );
};

UserProgressTable.propTypes = {
  headers: PropTypes.node,
  usersData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.date,
    })
  ),
};

UserProgressTable.defaultProps = {
  headers: [],
  usersData: [],
};

export default UserProgressTable;
