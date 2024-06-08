import { forwardRef } from "@yamada-ui/core"
import { ReceiptSwissFranc as ReceiptSwissFrancIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ReceiptSwissFrancProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptSwissFranc = forwardRef<ReceiptSwissFrancProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ReceiptSwissFrancIcon} {...props} />
  ),
)
