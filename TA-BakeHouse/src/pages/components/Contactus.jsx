import React from 'react'


const Contactus = () => {
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Name" className="border p-3 rounded" />
        <input type="email" placeholder="Email" className="border p-3 rounded" />
        <textarea placeholder="Message" className="border p-3 rounded h-32" />
        <button type="submit" className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contactus;
