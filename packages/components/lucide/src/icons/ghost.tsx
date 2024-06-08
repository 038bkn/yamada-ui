import { forwardRef } from "@yamada-ui/core"
import { Ghost as GhostIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GhostProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ghost = forwardRef<GhostProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GhostIcon} {...props} />
))
