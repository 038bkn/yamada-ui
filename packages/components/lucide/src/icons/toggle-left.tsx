import { forwardRef } from "@yamada-ui/core"
import { ToggleLeft as ToggleLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ToggleLeftProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ToggleLeft = forwardRef<ToggleLeftProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ToggleLeftIcon} {...props} />
))
