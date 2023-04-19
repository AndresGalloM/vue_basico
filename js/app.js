const { createApp } = Vue

// const vm = createApp({
//   data() {
//     return {
//       firstName: 'Andres',
//       lastName: 'Gallo',
//       message: 'Hello Vue!',
//       attr: 'src',
//       img: 'https://fastly.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY',
//       count: 0,
//       evt: 'submit'
//     }
//   },
//   computed: {
//     fullName() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   },
//   watch: {
//     message(newValue, oldValue) {
//       console.log('Watcher activado', newValue, oldValue)
//     }
//   },
//   methods: {
//     // submit(event) {
//     //   this.count ++;
//     // }
//     // increment() {
//     //   this.count ++;
//     // },

//     // decrement() {
//     //   this.count --;
//     // }
//   },
//   // template: `<img v-bind:[attr]="img"></img>`
//   // template: `
//   //   <form v-on:[evt].prevent="submit">
//   //     <button>{{ count }}</button>
//   //   </form>
//   // `
//   // template: `
//   //   <p>Contador: {{ count }}</p>
//   //   <button v-on:click="increment"> + </button>
//   //   <button v-on:click="decrement"> - </button>
//   // `
//   // template: `
//   //   <p> {{ message }} </p>
//   //   <input type="text" v-model="message"/>
//   // `
//   template: `
//     <p>Nombre completo: {{ fullName }}</p>
//   `
// }).mount('#app')

const app = createApp({
  data() {
    return {
      username: '',
      message: 'Accede a tu cuenta',
      open: false,
      posts: [
        {
          title: 'Titulo 1',
          description: 'Lorem ipsum...'
        },
        {
          title: 'Titulo 2',
          description: 'Lorem ipsum...'
        },
        {
          title: 'Titulo 3',
          description: 'Lorem ipsum...'
        },
        {
          title: 'Titulo 4',
          description: 'Lorem ipsum...'
        }
      ]
    }
  },
  watch: {
    open(newValue) {
      if (newValue) {
        this.message = 'Cierra sesión';
      } else {
        this.message = 'Accede a tu cuenta';
        this.username = '';
      }
    }
  },
  computed: {
    label() {
      return this.open ? 'Salir' : 'Acceder';
    },
    styles() {
      return this.open ? 'open' : 'closed';
    }
  },
  methods: {
    deletePost(index) {
      this.posts.splice(index, 1);
    }
  },
  template: `
    <div class="container" :class="styles">
      <h2>{{ message }}</h2>
      <div v-if="open">
        <p>Hola, {{ username }}</p>
        <div class="list">
          <item 
            v-for="(item, i) in posts" 
            :key="i"
            :post="item"
          >
        </div>
      </div>
      <div v-else>
        <div>Username</div>
        <input type="text" v-model="username"/>
      </div>
      <button @click="open = !open">
        <div v-if="!open">Acceder</div>
        <div v-else>Salir</div>
      </button>
    </div>
  `
})

app.component('item', {
  props: ['post'],
  template: `
  <div class="item">
    <div class="title">{{ post.title }}</div>
    <p>{{ post.description }}</p>
    <button class="delete">Eliminar</button>
  </div>
  `
})

const vm = app.mount('#door');