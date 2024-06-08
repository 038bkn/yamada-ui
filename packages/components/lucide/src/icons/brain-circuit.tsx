import { forwardRef } from "@yamada-ui/core"
import { BrainCircuit as BrainCircuitIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BrainCircuitProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BrainCircuit = forwardRef<BrainCircuitProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BrainCircuitIcon} {...props} />,
)
