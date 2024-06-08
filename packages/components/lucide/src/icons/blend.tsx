import { forwardRef } from "@yamada-ui/core"
import { Blend as BlendIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BlendProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Blend = forwardRef<BlendProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BlendIcon} {...props} />
))
