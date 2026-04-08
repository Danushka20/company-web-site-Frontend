import React from 'react';

const ProductTable: React.FC<{ products: any[] }> = ({ products }) => {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products?.length > 0 ? products.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap font-medium">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.stock} units</td>
            </tr>
          )) : (
             <tr><td colSpan={3} className="px-6 py-10 text-center text-gray-500">No products listed</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
