import React from 'react'

const Landing = () => {
  return (
    <div><section>
    <div class="mx-auto max-w-screen-2xl py-2 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div class="relative z-10 lg:py-16">
          <div class="relative h-64 sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://plus.unsplash.com/premium_photo-1681487865280-c2b836dd83e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNob3BwaW5nJTIwYmFnJTIwcHVycGxlfGVufDB8fDB8fHww"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
  
        <div class="relative flex items-center bg-gray-100">
          <span
            class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div class="p-8 sm:p-16 lg:p-24">
            <h2 class="text-2xl font-bold sm:text-3xl">
              SHOP MELOWN
            </h2>
  
            <p class="mt-4 text-gray-600">
              Welcome to our OFFICIAL PRODUCT 
              CATALOGUE. Feel free to observe and understand our products and organization.
            </p>
  
            {/* <a
              href="#"
              class="mt-8 inline-block rounded border border-purple-600 bg-purple-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              View Catalogue
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Landing