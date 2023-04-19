const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            nombre: 'Andres'
        }
    },
    template: `
        <div>
            <hijo :name="nombre"></hijo>
        </div>
    `
})

app.component('hijo' ,{
    props: {
        name: {
            type: String,
            required: true,
            default: 'Pedro'
        }
    },
    template: `
        <p>{{ name }}</p>
    `
})

const vm = app.mount('#door')