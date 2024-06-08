import { forwardRef } from "@yamada-ui/core"
import { Vote as VoteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VoteProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Vote = forwardRef<VoteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VoteIcon} {...props} />
))
