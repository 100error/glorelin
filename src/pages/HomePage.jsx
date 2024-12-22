import React from 'react'

function Content() {
  return (
    <div className="min-h-screen flex w-screen items-center justify-center font-[Poppins] bg-[url('/public/ab.png')] bg-center bg-no-repeat bg-rose-100 bg-contain">
      <div className="text-center text-rose-950 bg-rose-200 bg-opacity-70 rounded-lg p-10 flex">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">Welcome to Velvet Pastery</h1>
          <p className="py-6">
            Treat yourself to a world of sweetness and savor every bite
          </p>
        </div>
      </div>
    </div>
  )
}

export default Content
