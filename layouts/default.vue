<template>
    <nav class="flex justify-center bg-green-600">
        <NuxtLink keep-alive class="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest
    text-black-500 transition-all hover:border-[#234BA7]/40 hover:text-[#8E44AD]/40"  to="/">Home</NuxtLink>
    </nav>
    <main class="bg-[rgb(36,36,36)] text-white 
    h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]">
        <slot />
    </main>
</template>