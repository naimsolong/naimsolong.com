<script setup lang="ts">
import { profile } from '~/datas/root'
</script>

<template>
    <header class="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-10 pt-16 py-12">
        <div class="flex flex-col gap-5">
            <a href="/">
                <p class="text-center sm:text-left text-2xl font-bold text-gray-800 ">{{ profile.fullname }}</p>
            </a>
            <nav>
                <ul class="flex flex-wrap sm:justify-start justify-center uppercase text-xs font-semibold gap-7 text-gray-500 ">
                    <li class="text-gray-900"><a href="/">Home</a></li>
                    <li class="hover:text-gray-500"><a href="/posts">Posts</a></li>
                    <li class="hover:text-gray-500"><a href="/projects">Projects</a></li>
                    <li class="hover:text-gray-500"><a href="/setup">Setup</a></li>
                </ul>
            </nav>
        </div>
        <div class="flex-none w-20 h-20 rounded-full overflow-hidden hidden sm:block">
            <img :src="profile.image" width="200" height="200" alt="Sites">
        </div>
    </header>
</template>