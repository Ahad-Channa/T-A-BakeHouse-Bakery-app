import React from 'react'
import { Link } from 'react-router-dom';

 const Incoming_orders = () => {
  const orders = [
    { id: "123", date: "2025-06-05", user: "Tasmia" },
    { id: "456", date: "2025-05-05", user: "Ahad" },
    { id: "567", date: "2025-06-05", user: "koebhi" },
    
  ];
 
  return (
    < div >
     <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mt-50">
      <h2 className='text-2xl font-bold bg-sky-200 m-3 text-center '>Incoming orders</h2>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='py-2 px-4 border'>OrderID</th>
            <th className='py-2 px-4 border'>User</th>
            <th className='py-2 px-4 border'> Date</th>
            <th className='py-2 px-4 border'>view details </th>
          </tr>
          </thead>
          <tbody>
            {orders.map((ord)=>
             <tr key={ord.id}>
              <td className='py-2 px-4 border text-center'>{ord.id}</td>
              <td className='py-2 px-4 border text-center'>{ord.user}</td>
              <td className='py-2 px-4 border text-center'>{ord.date}</td>
              <td className='py-2 px-4 border text-center'>
                <Link to="/admin/order-details/:orderId">
                <button className='bg-gray-100 rounded-lg py-2 px-4' >View</button>
                </Link>
                </td>
            </tr>
            
            )}
           
          </tbody>
      </table>
      <div className='flex justify-center my-3'>
        <Link to="/admin/dashboard">
         <button className="bg-gray-400 rounded-lg py-2 px-4" >Back</button>
        </Link>
     
      </div>
       

    </div>

    </div>
   
  )
}

export default Incoming_orders;