import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [showPopup, setShowPopup] = useState(false);

  const selectedItems = location.state?.selectedItems || [];

  const total = selectedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formik = useFormik({
    initialValues: {
      customerName: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:5000/api/orders", {
          userId: user.id,
          customerName: values.customerName,
          phone: values.phone,
          address: values.address,
          items: selectedItems,
          totalAmount: total,
        });

        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          nav("/user");
        }, 3000);
      } catch (error) {
        console.error("Order placement failed:", error);
        alert("❌ Failed to place order. Try again.");
      }
    },
  });

  return (
    <div className="w-full min-h-[1000px] px-4 py-10 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl w-full mx-auto p-6 mt-[150px] bg-gray-50 rounded-xl border border-2 border-userborder animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        <form onSubmit={formik.handleSubmit} className="mb-6 space-y-4">
          <div>
            <input
              type="text"
              name="customerName"
              placeholder="Full Name"
              value={formik.values.customerName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-3 border rounded-xl ${
                formik.touched.customerName && formik.errors.customerName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.customerName && formik.errors.customerName && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.customerName}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-3 border rounded-xl ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>

          <div>
            <textarea
              name="address"
              placeholder="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full p-3 border rounded-xl ${
                formik.touched.address && formik.errors.address
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.address}
              </p>
            )}
          </div>
        </form>

        <h3 className="text-xl font-semibold mb-4">Your Order</h3>
        <div className="space-y-4 mb-6">
          {selectedItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center border rounded-xl p-4 bg-gray-50 shadow-sm"
            >
              <img
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : `http://localhost:5000/${item.image?.replace(/\\/g, "/")}`
                }
                alt={item.name}
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Price: Rs. {item.price}</p>
                <p className="font-bold">
                  Total: Rs. {item.quantity * item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right text-lg font-bold mb-6">
          Final Total: Rs. {total}
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Confirm Order
          </button>

          <button
            type="button"
            onClick={() => nav("/user/cart")}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2 text-green-600">
              Order Placed!
            </h3>
            <p className="text-gray-700">
              Thank you for your order. We will contact you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
