<template>
  <div class="bg-black font-mono text-gray-100">
    <div class="border-b border-gray-800 shadow-lg w-full">
      <div class="flex justify-between p-5 w-full max-w-2xl mx-auto">
        <h1>
          <a class="hover:text-blue-200" href="https://elliotmcintyre.com" title="elliotmcintyre.com">
            elliotmcintyre.com
          </a>
        </h1>
        <div>
          <a class="text-green-200 focus:text-green-100" href="/">About</a>
          <a class="text-green-400 hover:text-green-200 focus:text-green-100 line-through ml-5" href="#">Portfolio</a>
          <a class="text-green-400 hover:text-green-200 focus:text-green-100 line-through ml-5" href="#">Journal</a>
        </div>
      </div>
    </div>
    <div class="content px-5 w-full max-w-2xl mx-auto">
      <slot />
    </div>
  </div>
</template>
