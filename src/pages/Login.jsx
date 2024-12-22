function Login() {
  return (
    <div className="w-screen h-screen font-[Poppins] text-black bg-rose-200 flex items-center justify-center overflow-hidden pt-1">
      <div className="flex justify-center items-center h-screen">
        <div className="xl:w-[700px] px-10 h-[400px] rounded-3xl xl:shadow-xl bg-rose-50">
          <h1 className="text-3xl font-[Poppins] font-medium text-rose-950 text-center mt-10 pb-10 pt-1">Log In</h1>
          <hr className="mb-6" />
          <div className="flex justify-center mt-6">
            <form>
              <input
                type="text"
                className="py-3 px-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-rose-300 mb-4"
                placeholder="Enter your email"
              />
              <input
                type="password"
                className="py-3 px-5 rounded-md bg-zinc-50 md:w-[500px] w-[300px] outline-rose-300 mb-4"
                placeholder="Enter your password"
              />
              <div className="flex justify-end mb-4">
                <a href="#" className="text-rose-800 hover:underline">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="py-3 bg-rose-900 text-white w-full rounded-md font-bold hover:bg-rose-700">
                Submit
              </button>

              <div className="flex justify-center mb-4 mt-2">
                <a href="Signup" className="text-rose-800 hover:underline">
                  Don't have an account? Sign up here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
