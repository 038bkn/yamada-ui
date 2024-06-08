import { forwardRef } from "@yamada-ui/core"
import { Fish as FishIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FishProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Fish = forwardRef<FishProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FishIcon} {...props} />
))
