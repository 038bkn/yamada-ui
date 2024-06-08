import { forwardRef } from "@yamada-ui/core"
import { Ampersand as AmpersandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AmpersandProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Ampersand = forwardRef<AmpersandProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AmpersandIcon} {...props} />
))
