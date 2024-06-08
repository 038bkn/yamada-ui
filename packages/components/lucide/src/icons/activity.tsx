import { forwardRef } from "@yamada-ui/core"
import { Activity as ActivityIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ActivityProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Activity = forwardRef<ActivityProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ActivityIcon} {...props} />
))
