<template>
  <div class="min-h-screen h-full bg-black font-mono text-gray-100">
    <div class="flex flex-col justify-center h-full">
      <div class="border-b border-gray-800 shadow-lg shadow w-full">
        <div class="flex justify-between p-5 w-full max-w-2xl mx-auto">
          <h1>elliotmcintyre.com</h1>
          <div>
            <a class="text-green-200 focus:text-green-100" href="/">About</a>
            <a class="text-green-400 hover:text-green-200 focus:text-green-100 line-through ml-5" href="#">Portfolio</a>
            <a class="text-green-400 hover:text-green-200 focus:text-green-100 line-through ml-5" href="#">Journal</a>
          </div>
        </div>
      </div>
      <div class="content p-5 w-full max-w-2xl mx-auto">
        <Content />
      </div>
    </div>
  </div>
</template>
