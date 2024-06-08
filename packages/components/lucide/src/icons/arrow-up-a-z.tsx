import { forwardRef } from "@yamada-ui/core"
import { ArrowUpAZ as ArrowUpAZIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ArrowUpAZProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowUpAZ = forwardRef<ArrowUpAZProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ArrowUpAZIcon} {...props} />
))
