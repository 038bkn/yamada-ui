import { forwardRef } from "@yamada-ui/core"
import { PenLine as PenLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PenLineProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PenLine = forwardRef<PenLineProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={PenLineIcon} {...props} />
))
