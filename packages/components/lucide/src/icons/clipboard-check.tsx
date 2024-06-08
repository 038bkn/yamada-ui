import { forwardRef } from "@yamada-ui/core"
import { ClipboardCheck as ClipboardCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ClipboardCheckProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardCheck = forwardRef<ClipboardCheckProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ClipboardCheckIcon} {...props} />,
)
