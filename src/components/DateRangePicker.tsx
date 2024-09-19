import React from 'react';

interface DateRange {
  fromDate: string;
  toDate: string;
}

interface DateRangePickerProps {
  dateRange: DateRange;
  setDateRange: (dateRange: DateRange) => void;
}

function DateRangePicker({ dateRange, setDateRange }: DateRangePickerProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-4">
      <input
        type="date"
        name="fromDate"
        value={dateRange.fromDate}
        onChange={handleChange}
        className="mr-2 p-2 border rounded"
      />
      <input
        type="date"
        name="toDate"
        value={dateRange.toDate}
        onChange={handleChange}
        className="p-2 border rounded"
      />
    </div>
  );
}

export default DateRangePicker;
