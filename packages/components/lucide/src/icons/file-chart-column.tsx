import { forwardRef } from "@yamada-ui/core"
import { FileChartColumn as FileChartColumnIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileChartColumnProps = LucideIconProps

/**
 * `FileChartColumn` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartColumn = forwardRef<FileChartColumnProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FileChartColumnIcon} {...props} />,
)
