const app = Vue.createApp({
    data() {
        return {
            text: 'Hello Vue!'
        }
    },
    provide() {
        return {
            message: this.text
        }
    },
    template: `
        <padre></padre>
    `
})

app.component('padre', {
    template: `
        <hijo></hijo>
    `
})

app.component('hijo', {
    inject: ['message'],
    template: `
        <div>{{message}}</div>
    `
})

const vm = app.mount('#door')