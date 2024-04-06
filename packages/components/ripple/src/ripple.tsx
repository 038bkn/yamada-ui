import type { CSSUIObject } from "@yamada-ui/core"
import { AnimatePresence, Motion, type MotionProps } from "@yamada-ui/motion"
import { cx, handlerAll } from "@yamada-ui/utils"
import type { FC, Key } from "react"
import type { RippleOptions } from "./use-ripple"

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export type RippleProps = MotionProps<"span"> & {
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  isDisabled?: boolean
  ripples: RippleOptions[]
  onClear: (key: Key) => void
}

export const Ripple: FC<RippleProps> = ({
  className,
  ripples,
  onAnimationComplete,
  onClear,
  color = "currentColor",
  style,
  isDisabled,
  ...rest
}) => {
  if (isDisabled) return null

  const css: CSSUIObject = {
    rounded: "fallback(full, 9999px)",
    zIndex: "fallback(kurillin, 9)",
  }

  return (
    <>
      {ripples.map(({ key, x, y, size }) => {
        const duration = clamp(0.01 * size, 0.2, size > 100 ? 0.75 : 0.5)

        return (
          <AnimatePresence key={key} mode="popLayout">
            <Motion
              as="span"
              className={cx("ui-ripple", className)}
              initial={{ transform: "scale(0)", opacity: 0.35 }}
              animate={{ transform: "scale(2)", opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration }}
              bgColor={color}
              style={{
                position: "absolute",
                transformOrigin: "center",
                pointerEvents: "none",
                left: x,
                top: y,
                width: `${size}px`,
                height: `${size}px`,
                ...style,
              }}
              __css={css}
              {...rest}
              onAnimationComplete={handlerAll(onAnimationComplete, () =>
                onClear(key),
              )}
            />
          </AnimatePresence>
        )
      })}
    </>
  )
}
