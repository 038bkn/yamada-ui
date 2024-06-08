import { forwardRef } from "@yamada-ui/core"
import { List as ListIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ListProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const List = forwardRef<ListProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ListIcon} {...props} />
))
