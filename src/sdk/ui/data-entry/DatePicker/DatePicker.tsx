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
