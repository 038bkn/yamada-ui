import { forwardRef } from "@yamada-ui/core"
import { FolderOpenDot as FolderOpenDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FolderOpenDotProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FolderOpenDot = forwardRef<FolderOpenDotProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FolderOpenDotIcon} {...props} />,
)
