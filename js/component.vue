<template>
    <div>
        <p>Single file component</p>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hola vue'
            }
        },
    }
</script>

<style>
    p {
        cursor: pointer;
    }
</style>