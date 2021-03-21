export default {
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            const posts = await response.json()

            ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        validPost(state) {
            return state.posts.filter(post => {
                return post.title && post.body
            })
        },
        allPosts(state) {
            return state.posts
        },
        postCount(state) {
            return state.posts.length
        }
    },
}