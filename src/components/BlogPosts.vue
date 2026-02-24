<script setup>

// Import the 'BlogPost' component
import { postData } from '@/post-data';
import BlogPost from './BlogPost.vue';

 // Define the 'posts' prop (Hint: the prop type should be Array)


</script>

<template>
    <ul class="blog-posts">
        <li v-for="post in posts" :key="post.id">
            <BlogPost :post="post" />
        </li>
    </ul>
</template>

<style scoped>

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0 0 30px 0;
        padding: 0;
    }

</style>