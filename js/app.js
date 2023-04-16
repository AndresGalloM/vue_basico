const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      img: 'https://fastly.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY'
    }
  },
  template: `<img v-bind:src="img" v-bind:alt="img"></img>`
}).mount('#app')