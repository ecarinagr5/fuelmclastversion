import React from 'react';
import PropTypes from 'utils/propTypes';

import { Table, Progress } from 'reactstrap';
import { getThemeColors } from 'utils/colors';

import Avatar from 'components/Avatar';

import withBadge from 'hocs/withBadge';

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
        { usersData.map(({ avatar, name, precioventa, utilidad,precioultimacompra, preciocompra,preciocompramañana, margen,margenreal, volumenpromediodelmes, progress,volumen }, index) => (
      
          <tr key={index}>
            <td className="align-middle text-center">
              <AvatarWithBadge src={avatar} />
            </td>
            <td className="align-middle text-left ">{name}</td>
            <td className="align-middle text-center">$ {precioultimacompra}</td>
            <td className="align-middle text-center">$ {preciocompra}</td>
            <td className="align-middle text-center">$ {preciocompramañana}</td>
            <td className="align-middle text-center">$ {(preciocompra - preciocompramañana).toFixed(2)}</td>
            <td className="align-middle text-center">$ {precioventa}</td>
            <td className="align-middle text-center">
              <Progress
                color="success"
                value={margen}
                className="mb-3"
              >
                {margen}%
              </Progress>
            </td>
            <td className="align-middle text-center">
              <Progress
                color="success"
                value={margenreal}
                className="mb-3"
              >
                {margenreal}%
              </Progress>
            </td>
            <td className="align-middle text-center">{volumen} lts </td>
            <td className="align-middle text-center">{volumenpromediodelmes - volumen} lts </td>
            <td className="align-middle text-center">${ (precioventa * margen * 10000 ) / 100 } </td>
          </tr>
        ))}
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
