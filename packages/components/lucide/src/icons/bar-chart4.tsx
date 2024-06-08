import { forwardRef } from "@yamada-ui/core"
import { BarChart4 as BarChart4Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BarChart4Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BarChart4 = forwardRef<BarChart4Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BarChart4Icon} {...props} />
))
