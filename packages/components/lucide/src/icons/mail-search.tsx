import { forwardRef } from "@yamada-ui/core"
import { MailSearch as MailSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MailSearchProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MailSearch = forwardRef<MailSearchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MailSearchIcon} {...props} />
))
