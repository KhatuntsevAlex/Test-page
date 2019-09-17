import React from 'react'
import style from './TotalInfoCard.module.css'
import CardHeader from '../common/CardHeader/CardHeader'
import CardContent from '../common/CardContent/CardContent'
import TotalStatistics from '../common/TotalStatistics/TotalStatistics'
import Card from '../common/Card/Card'
import StyledSpan from '../common/StyledSpan/StyledSpan'

const TotalInfoCard = ({
  name,
  period,
  total,
  totalName,
  percentage,
  icon,
  color,
}) => (
    <div className={style.wrapper} data-area="">
      <Card>
        <CardHeader title={name}>
          <StyledSpan color={color}>{period}</StyledSpan>
        </CardHeader>
        <CardContent>
          <TotalStatistics total={total} name={totalName} color={color} percentage={percentage} icon={icon} />
        </CardContent>
      </Card>
    </div >
  )

export default TotalInfoCard

