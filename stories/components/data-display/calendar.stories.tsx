import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { ComponentStory } from '@storybook/react'
import { Calendar, CalendarType } from '@yamada-ui/calendar'
import {
  Heading,
  Wrap,
  FontAwesomeIcon,
  Tooltip,
  Center,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Portal,
  VStack,
  Card,
  CardBody,
  Button,
} from '@yamada-ui/react'
import { useRef, useState } from 'react'
import 'dayjs/locale/ja'

export default {
  title: 'Components / Data Display / Calendar',
}

export const basic: ComponentStory<typeof Calendar> = () => {
  return <Calendar />
}

export const withSize: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar size='sm' />

      <Calendar size='md' />

      <Calendar size='lg' />

      <Calendar size='full' />
    </>
  )
}

export const withVarint: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar variant='solid' today defaultValue={new Date(new Date().setDate(1))} />

      <Calendar variant='subtle' today defaultValue={new Date(new Date().setDate(1))} />

      <Calendar variant='unstyled' today defaultValue={new Date(new Date().setDate(1))} />
    </>
  )
}

export const withColorScheme: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Heading size='xl'>Solid</Heading>

      <Wrap gap='md'>
        <Calendar
          variant='solid'
          colorScheme='primary'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='secondary'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='warning'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='danger'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='link'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='gray'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='red'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='orange'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='yellow'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='green'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='teal'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='blue'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='cyan'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='purple'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='pink'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='linkedin'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='facebook'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='messenger'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='whatsapp'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='twitter'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='line'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='instagram'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='solid'
          colorScheme='youtube'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />
      </Wrap>

      <Heading size='xl'>Subtle</Heading>

      <Wrap gap='md'>
        <Calendar
          variant='subtle'
          colorScheme='primary'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='secondary'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='warning'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='danger'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='link'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='gray'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='red'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='orange'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='yellow'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='green'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='teal'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='blue'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='cyan'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='purple'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='pink'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='linkedin'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='facebook'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='messenger'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='whatsapp'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='twitter'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='line'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='instagram'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />

        <Calendar
          variant='subtle'
          colorScheme='youtube'
          today
          defaultValue={new Date(new Date().setDate(1))}
        />
      </Wrap>
    </>
  )
}

export const withDefaultType: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar defaultType='date' />

      <Calendar defaultType='month' />

      <Calendar defaultType='year' />
    </>
  )
}

export const withDefaultValue: ComponentStory<typeof Calendar> = () => {
  return <Calendar defaultValue={new Date()} />
}

export const withDefaultMonth: ComponentStory<typeof Calendar> = () => {
  return <Calendar defaultMonth={new Date('1993-08-18')} />
}

export const withFirstDayOfWeek: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar firstDayOfWeek='monday' />

      <Calendar firstDayOfWeek='sunday' />
    </>
  )
}

export const withMinMaxDate: ComponentStory<typeof Calendar> = () => {
  return (
    <Calendar
      minDate={new Date(new Date().setDate(1))}
      maxDate={new Date(new Date().setDate(18))}
    />
  )
}

export const withToday: ComponentStory<typeof Calendar> = () => {
  return <Calendar today />
}

export const withWeekendDays: ComponentStory<typeof Calendar> = () => {
  return <Calendar weekendDays={[0, 1]} />
}

export const withHolidays: ComponentStory<typeof Calendar> = () => {
  const holidays = [
    new Date('2022-01-01'),
    new Date('2022-01-10'),
    new Date('2022-02-11'),
    new Date('2022-02-23'),
    new Date('2022-03-21'),
    new Date('2022-04-29'),
    new Date('2022-05-03'),
    new Date('2022-05-04'),
    new Date('2022-05-05'),
    new Date('2022-07-18'),
    new Date('2022-08-11'),
    new Date('2022-09-19'),
    new Date('2022-09-23'),
    new Date('2022-10-10'),
    new Date('2022-11-03'),
    new Date('2022-11-23'),
    new Date('2023-01-01'),
    new Date('2023-01-02'),
    new Date('2023-01-09'),
    new Date('2023-02-11'),
    new Date('2023-02-23'),
    new Date('2023-03-21'),
    new Date('2023-04-29'),
    new Date('2023-05-03'),
    new Date('2023-05-04'),
    new Date('2023-05-05'),
    new Date('2023-07-17'),
    new Date('2023-08-11'),
    new Date('2023-09-18'),
    new Date('2023-09-23'),
    new Date('2023-10-09'),
    new Date('2023-11-03'),
    new Date('2023-11-23'),
    new Date('2024-01-01'),
    new Date('2024-01-08'),
    new Date('2024-02-11'),
    new Date('2024-02-12'),
    new Date('2024-02-23'),
    new Date('2024-03-20'),
    new Date('2024-04-29'),
    new Date('2024-05-03'),
    new Date('2024-05-04'),
    new Date('2024-05-05'),
    new Date('2024-05-06'),
    new Date('2024-07-15'),
    new Date('2024-08-11'),
    new Date('2024-08-12'),
    new Date('2024-09-16'),
    new Date('2024-09-22'),
    new Date('2024-09-23'),
    new Date('2024-10-14'),
    new Date('2024-11-03'),
    new Date('2024-11-04'),
    new Date('2024-11-23'),
  ]

  return <Calendar holidays={holidays} />
}

export const withExcludeDate: ComponentStory<typeof Calendar> = () => {
  return <Calendar excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6} />
}

export const withLocale: ComponentStory<typeof Calendar> = () => {
  // import 'dayjs/locale/ja'

  return <Calendar locale='ja' />
}

export const withFormat: ComponentStory<typeof Calendar> = () => {
  return (
    <Wrap gap='md'>
      <Calendar locale='ja' dateFormat='YYYY年 MMMM' />

      <Calendar locale='ja' defaultType='month' yearFormat='YYYY年' />

      <Calendar locale='ja' defaultType='month' monthFormat='MM' />

      <Calendar locale='ja' defaultType='year' yearFormat='YY' />

      <Calendar locale='ja' weekdayFormat='dd曜' />
    </Wrap>
  )
}

export const withAmountOfMonths: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar amountOfMonths={1} disableOutsideDays />

      <Calendar amountOfMonths={2} disableOutsideDays />

      <Calendar amountOfMonths={3} disableOutsideDays />
    </>
  )
}

export const withPaginateBy: ComponentStory<typeof Calendar> = () => {
  return <Calendar amountOfMonths={3} disableOutsideDays paginateBy={1} />
}

export const withNaxSelectedValues: ComponentStory<typeof Calendar> = () => {
  return <Calendar defaultValue={[]} maxSelectedValues={3} />
}

export const disabledOutsideDays: ComponentStory<typeof Calendar> = () => {
  return <Calendar disableOutsideDays />
}

export const disabledHeader: ComponentStory<typeof Calendar> = () => {
  return <Calendar withHeader={false} />
}

export const disabledControls: ComponentStory<typeof Calendar> = () => {
  return <Calendar withControls={false} />
}

export const disabledLabel: ComponentStory<typeof Calendar> = () => {
  return <Calendar withLabel={false} />
}

export const disabledWeekdays: ComponentStory<typeof Calendar> = () => {
  return <Calendar withWeekdays={false} />
}

export const useMultiValue: ComponentStory<typeof Calendar> = () => {
  return <Calendar defaultValue={[]} />
}

export const useControl: ComponentStory<typeof Calendar> = () => {
  const typeRef = useRef<() => void>(null)
  const prevRef = useRef<() => void>(null)
  const nextRef = useRef<() => void>(null)

  const onChangeType = () => typeRef.current?.()
  const onPrev = () => prevRef.current?.()
  const onNext = () => nextRef.current?.()

  return (
    <>
      <Wrap gap='md'>
        <Button onClick={onPrev}>Prev</Button>
        <Button onClick={onChangeType}>Change Type</Button>
        <Button onClick={onNext}>Next</Button>
      </Wrap>

      <Calendar withHeader={false} typeRef={typeRef} prevRef={prevRef} nextRef={nextRef} />
    </>
  )
}

export const customControlType: ComponentStory<typeof Calendar> = () => {
  const [type, onChangeType] = useState<CalendarType>('month')

  return <Calendar type={type} onChangeType={onChangeType} />
}

export const customControlMonth: ComponentStory<typeof Calendar> = () => {
  const [month, onChangeMonth] = useState<Date>(new Date('1993-08-18'))

  return <Calendar month={month} onChangeMonth={onChangeMonth} />
}

export const customControlValue: ComponentStory<typeof Calendar> = () => {
  const [value, onChange] = useState<Date>(new Date())

  return <Calendar value={value} onChange={onChange} />
}

export const constomLabelButton: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar labelProps={{ color: 'gray.500' }} />

      <Calendar labelProps={{ icon: <FontAwesomeIcon icon={faPoo} fontSize='0.75em' /> }} />
    </>
  )
}

export const constomControlButton: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar controlProps={{ icon: <FontAwesomeIcon icon={faPoo} fontSize='0.75em' /> }} />

      <Calendar prevProps={{ icon: <FontAwesomeIcon icon={faPoo} fontSize='0.75em' /> }} />

      <Calendar nextProps={{ icon: <FontAwesomeIcon icon={faPoo} fontSize='0.75em' /> }} />
    </>
  )
}

export const constomYearButton: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar defaultType='year' yearProps={{ color: 'gray.500' }} />

      <Calendar
        defaultType='year'
        yearProps={{
          component: ({ year }) => (
            <Tooltip label={year}>
              <Center as='span' w='full' h='full'>
                {year}
              </Center>
            </Tooltip>
          ),
        }}
      />
    </>
  )
}

export const constomMonthButton: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar defaultType='month' monthProps={{ color: 'gray.500' }} />

      <Calendar
        defaultType='month'
        monthProps={{
          component: ({ year, month }) => (
            <Tooltip label={year}>
              <Center as='span' w='full' h='full'>
                {month}
              </Center>
            </Tooltip>
          ),
        }}
      />
    </>
  )
}

export const constomWeekday: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Calendar locale='ja' weekdayProps={{ color: 'orange.500' }} />

      <Calendar
        locale='ja'
        weekdayProps={{
          component: ({ weekday }) => (
            <Tooltip label={`${weekday}曜日`} gutter={-8}>
              <Center as='span' w='full' h='full'>
                {weekday}
              </Center>
            </Tooltip>
          ),
        }}
      />
    </>
  )
}

export const constomDayButton: ComponentStory<typeof Calendar> = () => {
  return (
    <>
      <Wrap gap='md'>
        <Calendar
          dayProps={{
            color: 'blue.500',
            _weekend: { color: 'green.500' },
            _outside: { color: 'orange.500' },
          }}
        />

        <Calendar
          dayProps={{
            sx: { _outside: { pointerEvents: 'none' } },
            component: ({ isOutside, date }) =>
              !isOutside ? <Text as='span'>{date.getDate()}</Text> : null,
          }}
        />

        <Calendar
          dayProps={{
            component: ({ col, row, date }) => (
              <Text as='span' color={col === 3 || row === 3 ? 'blue.500' : undefined}>
                {date.getDate()}
              </Text>
            ),
          }}
        />
      </Wrap>

      <Wrap gap='md'>
        <Calendar
          dayProps={{
            component: ({ date }) => (
              <Tooltip label={`No schedule`}>
                <Center as='span' w='full' h='full'>
                  {date.getDate()}
                </Center>
              </Tooltip>
            ),
          }}
        />

        <Calendar
          dateFormat='YYYY年 MMMM'
          locale='ja'
          colorScheme='primary'
          dayProps={{
            component: ({ date }) => (
              <Popover>
                <PopoverTrigger>
                  <Center as='span' w='full' h='full'>
                    {date.getDate()}
                  </Center>
                </PopoverTrigger>

                <Portal>
                  <PopoverContent>
                    <PopoverHeader>
                      {date.getMonth() + 1}月{date.getDate()}日
                    </PopoverHeader>
                    <PopoverBody>
                      <VStack minW='sm' gap='sm'>
                        <Card variant='solid' colorScheme='secondary' size='sm' fontSize='sm'>
                          <CardBody>山田の誕生日</CardBody>
                        </Card>
                      </VStack>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            ),
          }}
        />
      </Wrap>

      <Calendar
        dateFormat='YYYY年 MMMM'
        locale='ja'
        size='full'
        type='date'
        headerProps={{ mb: 2 }}
        labelProps={{ pointerEvents: 'none', icon: { display: 'none' } }}
        tableProps={{
          border: '1px solid',
          borderColor: 'border',
          th: { border: '1px solid', borderColor: 'border' },
          td: { border: '1px solid', borderColor: 'border' },
        }}
        dayProps={{
          h: 'auto',
          p: 2,
          _selected: undefined,
          _hover: undefined,
          _active: undefined,
          transitionProperty: 'none',
          component: ({ date, isSelected }) => (
            <VStack alignItems='center'>
              <Center
                bg={isSelected ? 'primary' : undefined}
                w={8}
                lineHeight={8}
                rounded='full'
                color={isSelected ? 'white' : undefined}
                transitionProperty='background'
                transitionDuration='normal'
              >
                {date.getDate()}
              </Center>

              <VStack gap='sm'>
                <Card variant='solid' colorScheme='secondary' size='sm' fontSize='sm'>
                  <CardBody>
                    <Text>山田の誕生日</Text>
                  </CardBody>
                </Card>
              </VStack>
            </VStack>
          ),
        }}
      />
    </>
  )
}
