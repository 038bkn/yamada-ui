import { forwardRef } from "@yamada-ui/core"
import { ChevronsLeft as ChevronsLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ChevronsLeftProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ChevronsLeft = forwardRef<ChevronsLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ChevronsLeftIcon} {...props} />,
)
