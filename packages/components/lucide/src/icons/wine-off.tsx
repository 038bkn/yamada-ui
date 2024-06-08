import { forwardRef } from "@yamada-ui/core"
import { WineOff as WineOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type WineOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WineOff = forwardRef<WineOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={WineOffIcon} {...props} />
))
