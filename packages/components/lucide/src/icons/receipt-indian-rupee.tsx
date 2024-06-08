import { forwardRef } from "@yamada-ui/core"
import { ReceiptIndianRupee as ReceiptIndianRupeeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ReceiptIndianRupeeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ReceiptIndianRupee = forwardRef<ReceiptIndianRupeeProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={ReceiptIndianRupeeIcon} {...props} />
  ),
)
