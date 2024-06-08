import { forwardRef } from "@yamada-ui/core"
import { UmbrellaOff as UmbrellaOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UmbrellaOffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UmbrellaOff = forwardRef<UmbrellaOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UmbrellaOffIcon} {...props} />
))
