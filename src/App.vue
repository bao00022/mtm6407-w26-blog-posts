<script setup>

import { postData } from './post-data';

import BlogPosts from './components/BlogPosts.vue';

</script>

<template>

  <div class="wrapper">
    <BlogPosts :posts="postData" />
  </div>

</template>

<style>

  body {
    font-family: sans-serif !important;
    font-size: 14px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .wrapper {
    margin: 20px auto;
    width: 100%;
    max-width: 600px;
  }

</style>
