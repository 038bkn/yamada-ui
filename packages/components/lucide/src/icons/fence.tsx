import { forwardRef } from "@yamada-ui/core"
import { Fence as FenceIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FenceProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Fence = forwardRef<FenceProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FenceIcon} {...props} />
))
