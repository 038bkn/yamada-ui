import { forwardRef } from "@yamada-ui/core"
import { Lectern as LecternIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LecternProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Lectern = forwardRef<LecternProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LecternIcon} {...props} />
))
