import { forwardRef } from "@yamada-ui/core"
import { BellElectric as BellElectricIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BellElectricProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BellElectric = forwardRef<BellElectricProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BellElectricIcon} {...props} />,
)
