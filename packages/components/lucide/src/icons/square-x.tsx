import { forwardRef } from "@yamada-ui/core"
import { SquareX as SquareXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SquareXProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareX = forwardRef<SquareXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SquareXIcon} {...props} />
))
