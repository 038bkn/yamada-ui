import { forwardRef } from "@yamada-ui/core"
import { TicketSlash as TicketSlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TicketSlashProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TicketSlash = forwardRef<TicketSlashProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TicketSlashIcon} {...props} />
))
