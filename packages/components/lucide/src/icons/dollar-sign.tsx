import { forwardRef } from "@yamada-ui/core"
import { DollarSign as DollarSignIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type DollarSignProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const DollarSign = forwardRef<DollarSignProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={DollarSignIcon} {...props} />
))
