import React from 'react'
import { BarChart } from '../../pages/chart/BarChart'
import { PieChart } from '../../pages/chart/PieChart'

const Graph = () => {
  return (
    <div style={{ width: "100%", height: "50"}}>
        {/* <BarChart /> */}
        <PieChart />
    </div>
  )
}

export default Graph