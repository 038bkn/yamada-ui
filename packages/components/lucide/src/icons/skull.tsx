import { forwardRef } from "@yamada-ui/core"
import { Skull as SkullIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SkullProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Skull = forwardRef<SkullProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SkullIcon} {...props} />
))
