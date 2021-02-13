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


const AvatarWithBadge = withBadge({
  position: 'bottom-right',
  color: 'success',
})(Avatar);

const UserProgressTable = ({ headers, usersData, ...restProps }) => {
  return (
    <Table responsive hover {...restProps}>
      <thead className="header-table">
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        { 
          usersData.map(({ avatar, nombre, precioventa, utilidad, preciodecomprahoy, fechadeultimacompra, precioultimacompra, preciocompramanana, margenteorico ,margenreal,volumenpromediodelmes, volumenobjetivomensual, margenobjetivo }, index) => {
          let diferencia = preciodecomprahoy - preciocompramanana;
        return (
          <tr key={index}>
            <td className="align-middle text-center">
              <AvatarWithBadge src={productimg} />
            </td>
            <td className="align-middle text-left ">{nombre}</td>
            <td className={"align-middle text-center"}>$ {precioultimacompra.toFixed(2)} <Badge color="primary" className="mr-1"><span className="update-date">{fechadeultimacompra}</span></Badge></td>
            <td className={"align-middle text-center"}>$ {preciodecomprahoy.toFixed(2)}</td>
            <td className={"align-middle text-center"}>$ {preciocompramanana}</td>
            <td className="align-middle text-center">$ {diferencia.toFixed(2)}</td>
            <td className={ margenteorico < margenobjetivo ? "align-middle text-center txt-ok" : margenteorico > margenobjetivo ? "align-middle text-center txt-high" : "align-middle text-center"  }>$ {margenteorico}</td>
            <td className={ margenreal < margenobjetivo ? "align-middle text-center txt-ok" : margenreal > margenobjetivo ? "align-middle text-center txt-high" : "align-middle text-center"  }>$ {margenreal}</td>
            <td className="align-middle text-center">
              <Progress
                  color="success"
                  value={volumenpromediodelmes}
                  className="mb-3"
                >
                {volumenpromediodelmes} lts
              </Progress>  
            </td>
            <td className="align-middle text-center">
            <Progress
                  color="success"
                  value={volumenobjetivomensual}
                  className="mb-3"
                >
                {volumenobjetivomensual} %
              </Progress>  
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
