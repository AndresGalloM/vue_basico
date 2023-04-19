const { createApp } = Vue;


const app = createApp({
    data() {
        return {
            infoPersonas: [
                {
                    name: 'Andres Gallo',
                    email: 'andres@gmail.com',
                    bornDate: '17/07/2004'
                },
                {
                    name: 'Leidy Gallo',
                    email: 'leidy@gmail.com',
                    bornDate: '08/04/2002'
                },
                {
                    name: 'Diego Gallo',
                    email: 'diego@gmail.com',
                    bornDate: '28/09/2006'
                }
            ]
        }
    },
    template: `
    <div style="display:flex; flex-direction: column; gap:10px;">
        <v-card-user 
            v-for="persona in infoPersonas"
            :user="persona"
        >
        </v-card-user>
    </div>
    `
})

app.component('v-card-user', {
    props: ['user'],
    methods: {
        remove() {
            console.log('holaa')
        }
    },
    template: `
        <div style="border: 1px solid black; padding: 10px 20px;">
            <p>{{user.name}}</p>
            <p>{{user.email}}</p>
            <p>{{user.bornDate}}</p>
            <button 
                style="border: 1px solid black; border-radius: 4px; cursor: pointer; margin: 5px 0px;"
                @click="remove"
            >
                Eliminar
            </button>
        </div>
    `
})

const vm = app.mount('#door');