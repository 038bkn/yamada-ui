import { a11y, act, fireEvent, render } from "@yamada-ui/test"
import { RangeDatePicker } from "../src"

describe("<RangeDatePicker />", () => {
  test("RangeDatePicker renders correctly", async () => {
    const { container } = render(<RangeDatePicker placeholder="basic" />)
    await a11y(container)
  })

  test("should render dates of range", async () => {
    const { container } = render(
      <RangeDatePicker
        placeholder="basic"
        today
        defaultValue={[new Date(new Date().setDate(1))]}
      />,
    )
    const selectDateFrom = new Date(new Date().setDate(7))
    const dateStrFrom = new Date(selectDateFrom.setHours(0, 0, 0, 0)).toString()
    const selectBtnFrom = container.querySelector(
      `button[data-value="${dateStrFrom}"]`,
    )

    act(() => {
      fireEvent.click(selectBtnFrom!)
    })

    expect(selectBtnFrom).toHaveAttribute("data-selected")

    const selectDateTo = new Date(new Date().setDate(14))
    const dateStrTo = new Date(selectDateTo.setHours(0, 0, 0, 0)).toString()
    const selectBtnTo = container.querySelector(
      `button[data-value="${dateStrTo}"]`,
    )

    act(() => {
      fireEvent.click(selectBtnTo!)
    })

    expect(selectBtnTo).toHaveAttribute("data-selected")
  })
})
