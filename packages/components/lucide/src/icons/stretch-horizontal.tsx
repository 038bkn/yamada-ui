import { forwardRef } from "@yamada-ui/core"
import { StretchHorizontal as StretchHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type StretchHorizontalProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StretchHorizontal = forwardRef<StretchHorizontalProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={StretchHorizontalIcon} {...props} />
  ),
)
