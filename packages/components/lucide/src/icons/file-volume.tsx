import { forwardRef } from "@yamada-ui/core"
import { FileVolume as FileVolumeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileVolumeProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileVolume = forwardRef<FileVolumeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FileVolumeIcon} {...props} />
))
