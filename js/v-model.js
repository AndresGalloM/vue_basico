const app = Vue.createApp({
    data() {
        return {
            text: 'Hola Vue!' 
        }
    },
    template: `
        <p>{{ text }}</p>
        <v-input v-model:message="text"/>
    `
})

app.component('v-input', {
    props: {
        message: String
    },
    methods: {
        changeText(event) {
            this.$emit('update:message', event.target.value)
        }
    },
    template: `
        <input type="text" :value="message" @input="changeText"/>
    `
})

const vm = app.mount('#door');