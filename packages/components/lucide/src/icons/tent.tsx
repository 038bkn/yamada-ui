import { forwardRef } from "@yamada-ui/core"
import { Tent as TentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TentProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tent = forwardRef<TentProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TentIcon} {...props} />
))
