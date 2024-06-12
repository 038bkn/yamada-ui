import { forwardRef } from "@yamada-ui/core"
import { LayoutPanelLeft as LayoutPanelLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LayoutPanelLeftProps = LucideIconProps

/**
 * `LayoutPanelLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayoutPanelLeft = forwardRef<LayoutPanelLeftProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LayoutPanelLeftIcon} {...props} />,
)
