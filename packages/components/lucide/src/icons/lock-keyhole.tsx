import { forwardRef } from "@yamada-ui/core"
import { LockKeyhole as LockKeyholeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LockKeyholeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LockKeyhole = forwardRef<LockKeyholeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LockKeyholeIcon} {...props} />
))
