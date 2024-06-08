import { forwardRef } from "@yamada-ui/core"
import { MailOpen as MailOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailOpenProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailOpen = forwardRef<MailOpenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailOpenIcon} {...props} />
))
