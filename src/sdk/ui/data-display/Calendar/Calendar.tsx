import {
  Calendar as AntdCalendar,
  CalendarProps as AntdCalendarProps,
} from "antd";
import { Dayjs } from "dayjs";
import { FC } from "react";

interface CalendarProps extends AntdCalendarProps<Dayjs> {}

/**
 * Calendar component
 *
 * This component is a wrapper around Ant Design's Calendar component, providing a customizable calendar interface.
 * It supports various features such as date selection, disabled dates, custom cell rendering, and different view modes.
 *
 * @component
 * @example
 * ```jsx
 * <Calendar
 *   value={dayjs('2024-03-15')}
 *   onSelect={(date) => console.log('Selected date:', date.format('YYYY-MM-DD'))}
 *   mode="month"
 * />
 * ```
 *
 * @typedef {Object} CalendarProps
 * @property {Dayjs} [value] - The currently selected date
 * @property {Dayjs} [defaultValue] - The default selected date
 * @property {(date: Dayjs) => boolean} [disabledDate] - Function to determine if a date should be disabled
 * @property {(date: Dayjs, info: CellRenderInfo<Dayjs>) => React.ReactNode} [cellRender] - Custom cell content render function
 * @property {'year' | 'month'} [mode] - The display mode of the calendar
 * @property {(date: Dayjs) => void} [onChange] - Callback when the selected date changes
 * @property {(date: Dayjs, mode: CalendarMode) => void} [onPanelChange] - Callback when the calendar panel changes
 * @property {(date: Dayjs, selectInfo: SelectInfo) => void} [onSelect] - Callback when a date is selected
 *
 * @extends {AntdCalendarProps<Dayjs>}
 */

export const Calendar: FC<CalendarProps> = (props) => {
  return <AntdCalendar {...props} />;
};
