import React from 'react';

const Allorderstable = () => {
    const fakeData = [
        { id: 1, name: 'کامیار اسماعیلی', email: 'john@example.com' },
        { id: 2, name: 'ارشک حیدری', email: 'jane@example.com' },
        { id: 3, name: 'نیما توفیق ', email: 'alice@example.com' },
        { id: 4, name: 'علی حسینی  ', email: 'alice@example.com' }
    ];

    return (
         
        <div className="overflow-x-auto w-full rounded-3xl">
            <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">شماره ردیف</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">نام سفارش دهنده</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ایمیل</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ادیت</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">حذف</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {fakeData.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    ادیت
                                </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400">
                                    حذف
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Allorderstable;
