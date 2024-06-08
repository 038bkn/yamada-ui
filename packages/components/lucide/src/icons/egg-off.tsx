import { forwardRef } from "@yamada-ui/core"
import { EggOff as EggOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EggOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EggOff = forwardRef<EggOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EggOffIcon} {...props} />
))
