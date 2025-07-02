import { VChart } from '@visactor/vchart'
import { registerBarChart } from '@visactor/vchart'
import { registerTooltip, registerCartesianCrossHair, registerDomTooltipHandler } from '@visactor/vchart'

VChart.useRegisters([registerBarChart, registerTooltip, registerDomTooltipHandler, registerCartesianCrossHair])

export default VChart
