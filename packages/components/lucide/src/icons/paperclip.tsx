import { forwardRef } from "@yamada-ui/core"
import { Paperclip as PaperclipIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PaperclipProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Paperclip = forwardRef<PaperclipProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PaperclipIcon} {...props} />
))
