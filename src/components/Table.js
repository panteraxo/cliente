import React from 'react'

export default function Table({list,total}) {
  return (
    <>
      <table width="100%" className="mb-10">
        <thead >
          <tr className="color1 text-white p-1 ">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>

        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div className='flex justify-between'>
        <h2 className='ml-10'>Gesamtsumme</h2>
        <h2 className="mr-10  text-gray-800  font-bold">EUR {total.toLocaleString()}</h2>
      </div>
    </>
  )
}
