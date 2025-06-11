import React from 'react';
import { useNavigate } from 'react-router-dom';
 const Feedbacks = () => {
  const feedbacks = [
    { id: 1, user: 'Tasmia', message: 'Loved the chocolate cake!', date: '2025-06-04' },
    { id: 2, user: 'Ahad', message: 'Pastries were fresh and tasty.', date: '2025-06-03' },
    { id: 3, user: 'Koebhi', message: 'Delivery was a bit late.', date: '2025-06-02' },
  ];
  const nav=useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold bg-lime-200 m-3 text-center p-2 rounded-md">
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
            <button className="bg-gray-400 rounded-lg py-2 px-4 " onClick={()=>nav("/dashboard")}>Back</button>
        </div>
        
      </div>
    </div>
  );
};

export default Feedbacks;