// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = ({ onSignup }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     // In a real app, you would register the user here
//     onSignup(); // This sets isLoggedIn to true in App.js
//     navigate('/home');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
//             <input
//               type="text"
//               name="name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
//           >
//             Sign Up
//           </button>
//           <p className="mt-4 text-center text-sm text-gray-600">
//             Already have an account?{' '}
//             <button 
//               type="button"
//               onClick={() => navigate('/login')}
//               className="text-blue-600 hover:underline"
//             >
//               Sign In
//             </button>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;