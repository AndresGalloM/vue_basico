const { createApp } = Vue
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp({
    data() {
        return{
            message: 'Hola Vue!'
        }
    },
    template: `
        <div>Holaa</div>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>

        <router-view></router-view>
    `
})

app.use(router)

const vm = app.mount('#door')