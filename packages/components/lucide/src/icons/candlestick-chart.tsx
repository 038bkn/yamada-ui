import { forwardRef } from "@yamada-ui/core"
import { CandlestickChart as CandlestickChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CandlestickChartProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CandlestickChart = forwardRef<CandlestickChartProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CandlestickChartIcon} {...props} />,
)
