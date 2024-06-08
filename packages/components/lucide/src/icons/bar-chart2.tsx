import { forwardRef } from "@yamada-ui/core"
import { BarChart2 as BarChart2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BarChart2Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BarChart2 = forwardRef<BarChart2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BarChart2Icon} {...props} />
))
