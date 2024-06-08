import { forwardRef } from "@yamada-ui/core"
import { Tornado as TornadoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TornadoProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Tornado = forwardRef<TornadoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TornadoIcon} {...props} />
))
