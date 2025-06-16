import React from 'react'
import { Link} from 'react-router-dom';

 const Incoming_orders = () => {
  const orders = [
    { id: "123", date: "2025-06-05", user: "Tasmia" },
    { id: "456", date: "2025-05-05", user: "Ahad" },
    { id: "567", date: "2025-06-05", user: "koebhi" },
    
  ];
  
  return (
    < div className="min-h-screen flex items-center justify-center  py-12 animate-fadeIn" >
     <div className="w-auto min-w-[1000px] bg-white rounded-xl shadow-md p-8 ">
      <h2 className='text-3xl font-bold bg-sky-200 m-3 text-center  rounded-lg w-full py-2 px-4'>Incoming orders</h2>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='bg-gray-300'>
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
                 <Link to="/Admin/order-details/:orderId">
                <button className='font-bold bg-green-400 hover:bg-green-500 rounded-lg py-2 px-4' >View</button>
                </Link></td>
            </tr>
            
            )}
           
          </tbody>
      </table>
       <div className='flex justify-center my-4 '>
        <Link to="/admin">
         <button className="font-bold  w-[150px] bg-red-500 hover:bg-red-600 rounded-lg py-2 px-4" >Back</button>
        </Link>
     
      </div>

    </div>

    </div>
   
  )
}

export default Incoming_orders;