/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5oj9j5jQsBU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <section className="overflow-auto">
        <table className="w-full text-left whitespace-nowrap">
          <thead>
            <tr className="border-t border-gray-200 dark:border-gray-800">
              <th className="px-4 md:px-6 py-3 text-xs tracking-wide font-medium text-gray-500 uppercase dark:text-gray-500 dark:text-gray-400">
                ID
              </th>
              <th className="px-4 md:px-6 py-3 text-xs tracking-wide font-medium text-gray-500 uppercase dark:text-gray-500 dark:text-gray-400">
                Name
              </th>
              <th className="px-4 md:px-6 py-3 text-xs tracking-wide font-medium text-gray-500 uppercase dark:text-gray-500 dark:text-gray-400">
                Price
              </th>
              <th className="px-4 md:px-6 py-3 text-xs tracking-wide font-medium text-gray-500 uppercase dark:text-gray-500 dark:text-gray-400">
                Brand
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            <tr className="transition-all hover:bg-gray-50 dark:hover:bg-gray-850">
              <td className="px-4 md:px-6 py-4">001</td>
              <td className="px-4 md:px-6 py-4">Classic Leather Shoes</td>
              <td className="px-4 md:px-6 py-4">$59.99</td>
              <td className="px-4 md:px-6 py-4">Footwear Co.</td>
            </tr>
            <tr className="transition-all hover:bg-gray-50 dark:hover:bg-gray-850">
              <td className="px-4 md:px-6 py-4">002</td>
              <td className="px-4 md:px-6 py-4">Designer Handbag</td>
              <td className="px-4 md:px-6 py-4">$89.99</td>
              <td className="px-4 md:px-6 py-4">Fashion House</td>
            </tr>
            <tr className="transition-all hover:bg-gray-50 dark:hover:bg-gray-850">
              <td className="px-4 md:px-6 py-4">003</td>
              <td className="px-4 md:px-6 py-4">Wireless Earbuds</td>
              <td className="px-4 md:px-6 py-4">$69.99</td>
              <td className="px-4 md:px-6 py-4">Acoustics Ltd.</td>
            </tr>
            <tr className="transition-all hover:bg-gray-50 dark:hover:bg-gray-850">
              <td className="px-4 md:px-6 py-4">004</td>
              <td className="px-4 md:px-6 py-4">Vintage Pocket Watch</td>
              <td className="px-4 md:px-6 py-4">$79.99</td>
              <td className="px-4 md:px-6 py-4">Timeless Timepieces</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center items-center gap-4 mt-4">
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md">Previous</button>
          <span>Page 1 of 5</span>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md">Next</button>
        </div>
      </section>
    )
  }
  
  