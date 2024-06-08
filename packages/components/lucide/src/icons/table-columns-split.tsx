import { forwardRef } from "@yamada-ui/core"
import { TableColumnsSplit as TableColumnsSplitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TableColumnsSplitProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TableColumnsSplit = forwardRef<TableColumnsSplitProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={TableColumnsSplitIcon} {...props} />
  ),
)
