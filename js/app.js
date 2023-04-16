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

createApp({
  data() {
    return {
      username: '',
      message: 'Accede a tu cuenta',
      open: false
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
  template: `
    <div class="container" :class="styles">
      <h2>{{ message }}</h2>
      <div v-if="open">
        <p>Hola, {{ username }}</p>
      </div>
      <div v-else>
        <label>Username: </label>
        <input type="text" v-model="username"/>
      </div>
      <button @click="open = !open">
        <div v-if="!open">Acceder</div>
        <div v-else>Salir</div>
      </button>
    </div>
  `
}).mount('#door')