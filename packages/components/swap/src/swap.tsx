import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { ReactElement } from "react"
import { Airy } from "./airy"
import { Flip } from "./flip"
import { Rotate } from "./rotate"

type AnimationType = "airy" | "rotate" | "horizontalFlip" | "verticalFlip"

export type SwapElements = {
  from: ReactElement
  to: ReactElement
}

type SwapOptions = {
  animation: AnimationType
} & SwapElements

export type SwapProps = HTMLUIProps<"div"> & ThemeProps<"Swap"> & SwapOptions

/**
 * `Swap` is component.
 *
 * @see Docs https://yamada-ui.com/components/motion/swap
 */
export const Swap = forwardRef<SwapProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Swap", props)
  const { className, from, to, animation, ...rest } =
    omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
  }

  return (
    <ui.div
      ref={ref}
      className={cx("ui-swap", className)}
      __css={css}
      {...rest}
    >
      {animation === "airy" ? (
        <Airy from={from} to={to} />
      ) : animation === "rotate" ? (
        <Rotate from={from} to={to} />
      ) : animation === "horizontalFlip" ? (
        <Flip from={from} to={to} direction="horizontal" />
      ) : animation === "verticalFlip" ? (
        <Flip from={from} to={to} direction="vertical" />
      ) : null}
    </ui.div>
  )
})
