import React from 'react'
import StyledSpan from '../common/StyledSpan/StyledSpan'
import TotalStatistics from '../common/TotalStatistics/TotalStatistics'

const UserProject = ({ status, date, user, value, icon, clock }) => (
  <tr>
    <td>
      {status !== 'Pending...'
        ? <StyledSpan
          color={status === 'Completed' ? 'green' : 'orange'}>
          {status}
        </StyledSpan>
        : <StyledSpan>{status}</StyledSpan>
      }
    </td>
    <td className="noWrap">{`${clock} ${date}`}</td>
    <td>{user}</td>
    <td>
      <TotalStatistics color="green" percentage={value} icon={icon} />
    </td>
  </tr>
)


export default UserProject


