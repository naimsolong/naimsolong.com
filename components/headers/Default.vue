<template>
    <header class="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-10 pt-16 py-12">
        <div class="flex flex-col gap-5">
            <a href="/">
                <p class="text-center sm:text-left text-4xl font-extrabold text-gray-800 ">Amirul Naim Mohd Solong</p>
            </a>
            <nav>
                <ul class="flex flex-wrap sm:justify-start justify-center uppercase text-xs font-semibold gap-7 text-gray-500 ">
                    <li class="text-gray-900"><a href="/">Home</a></li>
                    <li class="hover:text-gray-500"><a href="/">Posts</a></li>
                    <li class="hover:text-gray-500"><a href="/">Projects</a></li>
                    <li class="hover:text-gray-500"><a href="/">Setup</a></li>
                </ul>
            </nav>
        </div>
        <div class="flex-none w-20 h-20 rounded-full overflow-hidden hidden sm:block">
            <img srcset="https://picsum.photos/200" src="https://picsum.photos/200" width="200" height="200" alt="Sites">
        </div>
    </header>
</template>