import React from 'react';
import PropTypes from 'utils/propTypes';

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
      <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        { usersData.map(({ avatar, name, precioventa, utilidad, precioultimacompra, preciocompra,preciocompramañana, margen,margenreal, volumenpromediodelmes, progress,volumen }, index) => {
          let diferencia = preciocompra - preciocompramañana;
          let utilidadtotal = (precioventa * margen * 10000 ) / 100;
        return (
          <tr key={index}>
            <td className="align-middle text-center">
              <AvatarWithBadge src={avatar} />
            </td>
            <td className="align-middle text-left ">{name}</td>
            <td className="align-middle text-center">$ {precioultimacompra} <Badge color="primary" className="mr-1"><span className="update-date">24/01/2021</span></Badge></td>
            <td className="align-middle text-center">$ {preciocompra}</td>
            <td className="align-middle text-center">$ {preciocompramañana}</td>
            <td className="align-middle text-center">$ {diferencia.toFixed(2)}</td>
            <td className="align-middle text-center text-shadow">$ {precioventa}</td>
            <td className={margen > 59 ? "align-middle text-center txt-high" : "align-middle text-center txt-ok" }>$ {margen}</td>
              {/*<Progress
                  color="success"
                  value={margen}
                  className="mb-3"
                >
                  {margen}%
              </Progress>*/}
            <td className={margenreal > 59 ? "align-middle text-center txt-high" : "align-middle text-center txt-ok" }>$ {margenreal}</td>
              {/*<Progress
                color="success"
                value={margenreal}
                className="mb-3"
              >
                {margenreal}%
              </Progress>*/}
            <td className="align-middle text-center">
              <Progress
                  color="success"
                  value={volumen}
                  className="mb-3"
                >
                {volumen} lts
              </Progress>  
            </td>
            <td className="align-middle text-center">
            <Progress
                  color="success"
                  value={100}
                  className="mb-3"
                >
                100 lts
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
