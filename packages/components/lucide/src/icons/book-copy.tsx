import { forwardRef } from "@yamada-ui/core"
import { BookCopy as BookCopyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookCopyProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookCopy = forwardRef<BookCopyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookCopyIcon} {...props} />
))
