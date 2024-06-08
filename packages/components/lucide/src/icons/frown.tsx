import { forwardRef } from "@yamada-ui/core"
import { Frown as FrownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FrownProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Frown = forwardRef<FrownProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FrownIcon} {...props} />
))
