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
      message: 'Puerta cerrada',
      open: true
    }
  },
  watch: {
    open(newValue) {
      newValue ? this.message = 'Puerta cerrada' : this.message = 'Puerta abierta';
    }
  },
  computed: {
    label() {
      return this.open ? 'Abrir' : 'Cerrar';
    },
    styles() {
      return this.open ? 'open' : 'closed';
    }
  },
  template: `
    <div class="container" :class="styles">
      <h2>{{ message }}</h2>
      <button @click="open = !open">{{ label }}</button>
    </div>
  `
}).mount('#door')