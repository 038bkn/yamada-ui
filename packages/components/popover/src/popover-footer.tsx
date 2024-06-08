import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { usePopover } from "./popover"

export type PopoverFooterProps = HTMLUIProps<"footer">

export const PopoverFooter = forwardRef<PopoverFooterProps, "footer">(
  ({ className, ...rest }, ref) => {
    const { styles } = usePopover()

    const css: CSSUIObject = {
      ...styles.footer,
    }

    return (
      <ui.footer
        ref={ref}
        className={cx("ui-popover__footer", className)}
        __css={css}
        {...rest}
      />
    )
  },
)
