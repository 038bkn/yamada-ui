import { forwardRef } from "@yamada-ui/core"
import { Cannabis as CannabisIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CannabisProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cannabis = forwardRef<CannabisProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CannabisIcon} {...props} />
))
