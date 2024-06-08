import { forwardRef } from "@yamada-ui/core"
import { Cross as CrossIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CrossProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cross = forwardRef<CrossProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CrossIcon} {...props} />
))
