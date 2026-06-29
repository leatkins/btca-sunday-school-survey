<script setup lang="ts">

const currentYear = new Date().getFullYear();

</script>

<template>
  <footer class="mx-auto container py-20 bg-white text-gray-500 text-center">
    <p>
    <p class="text-sm">&copy; {{ currentYear }}  All rights reserved.</p><br />
    <p>Bethesda Temple Church of Alton | 512 Spring Street, Alton, IL 62002</p>
    <p>District Elder Tanya C. Brown - Pastor </p>
    <p>Bishop Lawrence Brown Jr. </p>
    <a href="https://bethesdatemplealton.org"  class="hover:text-gray-700 text-blue-500 underline text-sm" target="_blank">bethesdatemplealton.org</a>
    </p>
  </footer>
</template>
