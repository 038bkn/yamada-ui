import { forwardRef } from "@yamada-ui/core"
import { CircleChevronDown as CircleChevronDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CircleChevronDownProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CircleChevronDown = forwardRef<CircleChevronDownProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={CircleChevronDownIcon} {...props} />
  ),
)
