import { forwardRef } from "@yamada-ui/core"
import { PenTool as PenToolIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PenToolProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenTool = forwardRef<PenToolProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PenToolIcon} {...props} />
))
