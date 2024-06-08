import { forwardRef } from "@yamada-ui/core"
import { UserRoundCheck as UserRoundCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UserRoundCheckProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UserRoundCheck = forwardRef<UserRoundCheckProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={UserRoundCheckIcon} {...props} />,
)
