<script setup lang="ts">
import { profile, socials } from '~/datas/root'

let currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="text-xs font-semibold text-gray-500 pt-5 pb-10 grid gap-3 sm:grid-cols-2">
        <div class="order-2 sm:order-1 ">
            © 2019 - {{ currentYear }} — <a class="hover:text-gray-500" href="/">{{ profile.username }}</a>
        </div>
        <div class="order-1 sm:order-2">
            <ul class="flex sm:justify-end gap-5">
                <li v-for="social in socials"><a class="hover:text-gray-500" :href="social.link" target="_blank" rel="noopener noreferrer">{{ social.title }}</a></li>
            </ul>
        </div>
        <div class="sm:col-span-2 order-3">
            <span class="font-normal">Inspiration from </span>
            <a class="hover:text-gray-500" href="https://github.com/nixentric/Lowkey-Hugo-Theme" target="_blank" rel="noopener noreferrer">Lowkey</a>
            <span class="font-normal"> and made with </span>
            <a class="hover:text-gray-500" href="https://nuxt.com/" target="_blank" rel="noopener noreferrer">NuxtJS</a>
            <span class="font-normal">+</span>
            <a class="hover:text-gray-500" href="https://flowbite.com/" target="_blank" rel="noopener noreferrer">Flowbite</a>
            <span class="font-normal">+</span>
            <a class="hover:text-gray-500" href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer">SVG Repo</a>
        </div>
    </footer>
</template>