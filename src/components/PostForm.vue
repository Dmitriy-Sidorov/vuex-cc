<template>
    <form @submit.prevent="onsubmit">
        <input type="text" placeholder="title" v-model="title">
        <input type="text" placeholder="body" v-model="body">
        <button type="submit">Create Post</button>
    </form>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    data: () => ({
        title: '',
        body: ''
    }),
    methods: {
        ...mapMutations(['createPost']),
        onsubmit() {
            this.createPost({title: this.title, body: this.body, id: Date.now()})
            this.title = this.body = ''
        }
    }
}
</script>

<style scoped>
input {
    display: block;
    width: 100%;
    border-radius: 2px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}

button {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
    background: green;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 4px;
}
</style>