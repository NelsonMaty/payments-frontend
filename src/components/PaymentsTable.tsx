import React from 'react';

interface Payment {
  id: string;
  date: string;
  description: string;
  amount: number;
}

interface PaymentsTableProps {
  payments: Payment[];
}

function PaymentsTable({ payments }: PaymentsTableProps) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Date</th>
          <th className="py-2 px-4 border-b">Description</th>
          <th className="py-2 px-4 border-b">Amount</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.id}>
            <td className="py-2 px-4 border-b">{payment.id}</td>
            <td className="py-2 px-4 border-b">{payment.date}</td>
            <td className="py-2 px-4 border-b">{payment.description}</td>
            <td className="py-2 px-4 border-b">${payment.amount.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PaymentsTable;
