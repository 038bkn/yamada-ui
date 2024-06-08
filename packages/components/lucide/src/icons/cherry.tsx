import { forwardRef } from "@yamada-ui/core"
import { Cherry as CherryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CherryProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Cherry = forwardRef<CherryProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CherryIcon} {...props} />
))
