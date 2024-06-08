import { forwardRef } from "@yamada-ui/core"
import { MailMinus as MailMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailMinusProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailMinus = forwardRef<MailMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailMinusIcon} {...props} />
))
