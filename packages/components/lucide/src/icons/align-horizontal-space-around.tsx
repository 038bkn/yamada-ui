import { forwardRef } from "@yamada-ui/core"
import { AlignHorizontalSpaceAround as AlignHorizontalSpaceAroundIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlignHorizontalSpaceAroundProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlignHorizontalSpaceAround = forwardRef<
  AlignHorizontalSpaceAroundProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={AlignHorizontalSpaceAroundIcon} {...props} />
))
