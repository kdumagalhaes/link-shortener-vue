<template>
    <form class="shortener-input" @submit.prevent>
        <input type="text" class="shortener-input__bar" v-model="inputUrl" />
        <button class="shortener-input__button" @click="putUrl">Shorten</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            inputUrl: '',
        }
    },
    methods: {
        putUrl() {
            this.$store.dispatch('fetchBitLyApi', this.inputUrl)
        },
    },
}
</script>

<style lang="scss" scoped>
.shortener-input {
    display: flex;
    width: 100%;
    margin-bottom: 40px;

    .shortener-input__bar,
    .shortener-input__button {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border-radius: 10px;
        height: 60px;
    }

    .shortener-input__bar {
        width: 100%;
        border: 1px solid $color2;
        padding-left: 20px;
        margin-right: 30px;
    }

    .shortener-input__button {
        width: 100%;
        max-width: 120px;
        border: none;
        transition: all 0.4s;
        text-transform: uppercase;
        color: $color4;
        letter-spacing: 2px;
        font-weight: $bold;
        background-color: $color1;

        &:hover {
            box-shadow: none;
        }
    }
}
</style>
