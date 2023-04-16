const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      attr: 'src',
      img: 'https://fastly.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY'
    }
  },
  template: `<img v-bind:[attr]="img"></img>`
}).mount('#app')