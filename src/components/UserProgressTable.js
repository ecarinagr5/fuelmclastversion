import React from 'react';
import PropTypes from 'utils/propTypes';
import moment from "moment";

import { Table, Progress } from 'reactstrap';
import { getThemeColors } from 'utils/colors';

import Avatar from 'components/Avatar';

import withBadge from 'hocs/withBadge';
import {
  Badge,
} from 'reactstrap';

const colors = getThemeColors();
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
        { usersData.map(({ avatar, nombre, precioventa, utilidad, preciodecompra, fechadeultimacompra, precioultimacompra, preciocompramanana, margenteorico ,margenreal,volumenpromediodelmes, volumenobjetivomensual }, index) => {
          let diferencia = preciodecompra - preciocompramanana;

          let arrayToDefine = [ precioultimacompra, preciodecompra, preciocompramanana, precioventa, margenteorico, margenreal];
          let min = Math.min.apply(Math, arrayToDefine);
          let max = Math.max.apply(Math, arrayToDefine);

        return (
          <tr key={index}>
            <td className="align-middle text-center">
              <AvatarWithBadge src={avatar} />
            </td>
            <td className="align-middle text-left ">{nombre}</td>
            <td className={ precioultimacompra === min ? "align-middle text-center txt-ok" : precioultimacompra === max ? "align-middle text-center txt-high" : "align-middle text-center" }>$ {precioultimacompra.toFixed(2)} <Badge color="primary" className="mr-1"><span className="update-date">{fechadeultimacompra}</span></Badge></td>
            <td className={ preciodecompra === min ? "align-middle text-center txt-ok" : preciodecompra === max ? "align-middle text-center txt-high" : "align-middle text-center"  }>$ {preciodecompra.toFixed(2)}</td>
            <td className={ preciocompramanana === min ? "align-middle text-center txt-ok" : preciocompramanana === max ? "align-middle text-center txt-high" : "align-middle text-center"  }>$ {preciocompramanana}</td>
            <td className="align-middle text-center">$ {diferencia.toFixed(2)}</td>
            <td className={ precioventa === min ? "align-middle text-center txt-ok" : precioventa === max ? "align-middle text-center txt-high" : "align-middle text-center"  }>$ {precioventa}</td>
            <td className={ margenteorico === min ? "align-middle text-center txt-ok" : margenteorico === max ? "align-middle text-center txt-high" : "align-middle text-center"  }>$ {margenteorico}</td>
            <td className={ margenreal === min ? "align-middle text-center txt-ok" : margenreal === max ? "align-middle text-center txt-high" : "align-middle text-center"  }>$ {margenreal}</td>
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
                {volumenobjetivomensual} lts
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
