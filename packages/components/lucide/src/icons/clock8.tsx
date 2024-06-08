import { forwardRef } from "@yamada-ui/core"
import { Clock8 as Clock8Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Clock8Props = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Clock8 = forwardRef<Clock8Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Clock8Icon} {...props} />
))
