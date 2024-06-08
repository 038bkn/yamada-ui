import { forwardRef } from "@yamada-ui/core"
import { FileX as FileXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileXProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileX = forwardRef<FileXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileXIcon} {...props} />
))
