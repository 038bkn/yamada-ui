import { forwardRef } from "@yamada-ui/core"
import { Nut as NutIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type NutProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Nut = forwardRef<NutProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={NutIcon} {...props} />
))
