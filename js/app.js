const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      attr: 'src',
      img: 'https://fastly.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY',
      count: 0,
      evt: 'submit'
    }
  },
  methods: {
    submit(event) {
      this.count ++;
    }
  },
  // template: `<img v-bind:[attr]="img"></img>`
  template: `
    <form v-on:[evt].prevent="submit">
      <button>{{ count }}</button>
    </form>
  `
}).mount('#app')