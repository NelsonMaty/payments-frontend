import React, { useState, useEffect } from 'react';
import PaymentsTable from './components/PaymentsTable';
import Pagination from './components/Pagination';
import DateRangePicker from './components/DateRangePicker';

interface Payment {
  id: string;
  date: string;
  description: string;
  amount: number;
}

interface DateRange {
  fromDate: string;
  toDate: string;
}

function App() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [dateRange, setDateRange] = useState<DateRange>({ fromDate: '', toDate: '' });

  useEffect(() => {
    fetchPayments();
  }, [currentPage, dateRange]);

  const fetchPayments = async () => {
    const { fromDate, toDate } = dateRange;
    const response = await fetch(`http://localhost:3001/payments?page=${currentPage}&limit=10&fromDate=${fromDate}&toDate=${toDate}`);
    const data = await response.json();
    setPayments(data.items);
    setTotalPages(data.totalPages);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payments Dashboard</h1>
      <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
      <PaymentsTable payments={payments} />
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
