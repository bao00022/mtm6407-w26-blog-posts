<script setup>

// Define the 'post' prop (Hint: the prop type should be Object)

</script>

<template>

    <span>
        <img :src="post.image" :alt="post.title" />
        <h1>{{ post.title }}</h1>
        <p>By: {{ post.author }}</p>
        <p>Published: {{ post.publishedAt }}</p>
        <div v-html="post.content"></div>
    </span>

</template>

<style scoped>
    span {
        display: block;
        padding: 10px;
        border: 1px solid #DDD;
        border-radius: 6px;
        width: 100%;
    }

    h1 {
        color: #111;
        font-size: 24px;
        margin: 12px 0;
    }

    h2 {
        color: #111;
        font-size: 18px;
        margin: 12px 0;
    }

    p {
        font-size: 12px;
        margin: 6px 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }
</style>