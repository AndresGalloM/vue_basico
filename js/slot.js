const { createApp } = Vue;

const app = createApp({
    template: `
        <div>
            <v-layout>
                <template v-slot:header>titulo</template>
                <template v-slot:content>Lorem ipsum ...</template>
            </v-layout>
        </div>
    `
})

app.component('v-layout', {
    template: `
    <div>
        <header>
            <slot name="header"></slot>
        </header>

        <div>
            <slot name="content"></slot>
        </div>
    </div>
    `
})

const vm = app.mount('#door');