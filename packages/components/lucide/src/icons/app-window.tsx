import { forwardRef } from "@yamada-ui/core"
import { AppWindow as AppWindowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AppWindowProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AppWindow = forwardRef<AppWindowProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AppWindowIcon} {...props} />
))
