import { DatePicker as AntdDatePicker } from "antd";
import {
  DatePickerProps as AntdDatePickerProps,
  MonthPickerProps as AntdMonthPickerProps,
  RangePickerProps as AntdRangePickerProps,
  WeekPickerProps as AntdWeekPickerProps,
} from "antd/lib/date-picker";
import { FC } from "react";

interface DatePickerProps extends AntdDatePickerProps {}
interface MonthPickerProps extends AntdMonthPickerProps {}
interface WeekPickerProps extends AntdWeekPickerProps {}
interface RangePickerProps extends AntdRangePickerProps {}

/**
 * DatePicker component that extends Ant Design's DatePicker functionality.
 *
 * This component combines properties from various Ant Design DatePicker types:
 * - Standard DatePicker
 * - MonthPicker
 * - WeekPicker
 * - RangePicker
 *
 * It provides a unified interface for all these picker types, allowing for flexible usage.
 *
 * The component includes:
 * - DatePicker: For selecting a specific date
 * - MonthPicker: For selecting a month
 * - WeekPicker: For selecting a week
 * - RangePicker: For selecting a date range
 *
 * Each sub-component maintains its specific props type for type safety and autocompletion.
 */

export const DatePicker: FC<DatePickerProps> & {
  MonthPicker: FC<MonthPickerProps>;
  WeekPicker: FC<WeekPickerProps>;
  RangePicker: FC<RangePickerProps>;
} = (props) => {
  return <AntdDatePicker {...props} />;
};

DatePicker.MonthPicker = AntdDatePicker.MonthPicker;
DatePicker.WeekPicker = AntdDatePicker.WeekPicker;
DatePicker.RangePicker = AntdDatePicker.RangePicker;
