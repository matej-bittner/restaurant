import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order id</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">12359478415</td>
            <td className="py-6 px-1">20.20.2024</td>
            <td className="py-6 px-1">$189</td>
            <td className="hidden md:block py-6 px-1">
              Big burger (10) + Fries
            </td>
            <td className="py-6 px-1">On the way...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12359478415</td>
            <td className="py-6 px-1">20.20.2024</td>
            <td className="py-6 px-1">$189</td>
            <td className="hidden md:block py-6 px-1">
              Big burger (10) + Fries
            </td>
            <td className="py-6 px-1">On the way...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">12359478415</td>
            <td className="py-6 px-1">20.20.2024</td>
            <td className="py-6 px-1">$189</td>
            <td className="hidden md:block py-6 px-1">
              Big burger (10) + Fries
            </td>
            <td className="py-6 px-1">On the way...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
