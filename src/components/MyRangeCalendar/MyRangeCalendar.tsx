import type { DateValue, RangeCalendarProps } from "react-aria-components";
import {
  Button,
  CalendarCell,
  CalendarGrid,
  Heading,
  RangeCalendar,
  Text,
} from "react-aria-components";

import "./MyRangeCalendar.css";
import React from "react";
import { parseDate } from "@internationalized/date";
import type { CalendarDate } from "@internationalized/date";

interface MyRangeCalendarProps extends RangeCalendarProps<CalendarDate> {
  errorMessage?: string;
}

export default function MyRangeCalendar({
  errorMessage,
  ...props
}: MyRangeCalendarProps) {
  const [value, setValue] = React.useState<{
    start: CalendarDate;
    end: CalendarDate;
  } | null>({
    start: parseDate("2020-02-03"),
    end: parseDate("2020-02-12"),
  });

  // Convert CalendarDate to Date and calculate nights
  const getNumberOfNights = (start: CalendarDate, end: CalendarDate): number => {
    const startDate = new Date(start.year, start.month - 1, start.day);
    const endDate = new Date(end.year, end.month - 1, end.day);
    const diffTime = endDate.getTime() - startDate.getTime();
    return diffTime / (1000 * 3600 * 24);
  };

  // Format CalendarDate to "May 21, 2025"
  const formatDate = (calendarDate: CalendarDate): string => {
    const date = new Date(calendarDate.year, calendarDate.month - 1, calendarDate.day);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  // Conditionally render based on whether value is null
  const nights = value ? getNumberOfNights(value.start, value.end) : 0;
  const formattedStartDate = value ? formatDate(value.start) : "";
  const formattedEndDate = value ? formatDate(value.end) : "";

  return (
    <>
      <div>
        <h2 className="dates__title">
          {value ? `${nights} nights in Copenhagen` : "Select your dates"}
        </h2>
        <div className="dates__selected">
          {value ? `${formattedStartDate} - ${formattedEndDate}` : "No dates selected"}
        </div>
      </div>

      <div className="dates__calendar-container">
        <RangeCalendar {...props} value={value} onChange={setValue}>
          <header>
            <Button slot="previous">◀</Button>
            <Heading level={3} />
            <Button slot="next">▶</Button>
          </header>
          <div style={{ display: "flex", gap: 30, overflow: "auto" }}>
            <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
            <CalendarGrid offset={{ months: 1 }}>
              {(date) => <CalendarCell date={date} />}
            </CalendarGrid>
          </div>
          {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
        </RangeCalendar>
      </div>

      <Button onPress={() => setValue(null)} className="dates__clear-btn">
        Clear dates
      </Button>
    </>
  );
}
