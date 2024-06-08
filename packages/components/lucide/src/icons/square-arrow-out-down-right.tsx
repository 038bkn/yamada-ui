import { forwardRef } from "@yamada-ui/core"
import { SquareArrowOutDownRight as SquareArrowOutDownRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareArrowOutDownRightProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutDownRight = forwardRef<
  SquareArrowOutDownRightProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={SquareArrowOutDownRightIcon} {...props} />
))
