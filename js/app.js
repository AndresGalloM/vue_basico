const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  template: `<div v-text="message"></div>`
}).mount('#app')