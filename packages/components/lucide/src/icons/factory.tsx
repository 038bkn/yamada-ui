import { forwardRef } from "@yamada-ui/core"
import { Factory as FactoryIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FactoryProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Factory = forwardRef<FactoryProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FactoryIcon} {...props} />
))
