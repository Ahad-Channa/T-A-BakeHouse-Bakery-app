import React from 'react';
import { Link} from 'react-router-dom';
 const Feedbacks = () => {
  const feedbacks = [
    { id: 1, user: 'Tasmia', message: 'Loved the chocolate cake!', date: '2025-06-04' },
    { id: 2, user: 'Ahad', message: 'Pastries were fresh and tasty.', date: '2025-06-03' },
    { id: 3, user: 'Koebhi', message: 'Delivery was a bit late.', date: '2025-06-02' },
  ];
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-adminbg py-12 animate-fadeIn" >
      <div className="w-auto min-w-[1000px] bg-white rounded-xl shadow-md p-8 border border-2 border-borderbrown">
        <h2 className="text-2xl font-bold bg-sky-300 m-3 text-center p-2 rounded-md">
          User Feedbacks
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">#ID</th>
              <th className="py-2 px-4 border">User</th>
              <th className="py-2 px-4 border">Message</th>
              <th className="py-2 px-4 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id}>
                <td className="py-2 px-4 border text-center">{fb.id}</td>
                <td className="py-2 px-4 border text-center">{fb.date}</td>
                <td className="py-2 px-4 border text-center">{fb.user}</td>
                <td className="py-2 px-4 border text-center">{fb.message}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex justify-center my-3 '>
        <Link to="/admin">
         <button className="w-[150px] bg-red-400 hover:bg-red-500 font-bold px-5 py-2 m-5 rounded-lg  " >Back</button>
        </Link>
           
        </div>
        
      </div>
    </div>
  );
};

export default Feedbacks;