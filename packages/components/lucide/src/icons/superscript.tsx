import { forwardRef } from "@yamada-ui/core"
import { Superscript as SuperscriptIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SuperscriptProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Superscript = forwardRef<SuperscriptProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SuperscriptIcon} {...props} />
))
