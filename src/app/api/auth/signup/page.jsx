'use client';
const page = () => {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const form  = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    const type = form.type.value;
    const newUser = { name, email, password, image, type };
    console.log(newUser);

    const response = await fetch('http://localhost:3000/api/auth/signup/new-user',{
      body: JSON.stringify(newUser),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-2xl px-8 py-10 w-full max-w-sm space-y-5">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create an Account
        </h2>

        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="image"
          name="image"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="type"
          name="type"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default page;
