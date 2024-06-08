import { forwardRef } from "@yamada-ui/core"
import { TimerOff as TimerOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TimerOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TimerOff = forwardRef<TimerOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TimerOffIcon} {...props} />
))
