import { forwardRef } from "@yamada-ui/core"
import { Equal as EqualIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type EqualProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Equal = forwardRef<EqualProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={EqualIcon} {...props} />
))
