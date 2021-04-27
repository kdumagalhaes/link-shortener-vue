<template>
    <form class="shortener-input" @submit.prevent>
        <div class="shortener-input__control">
            <input
                type="text"
                class="shortener-input__control--input"
                v-model="inputUrl"
                placeholder="http://google.com"
                autofocus
            />
            <button class="shortener-input__control--button" @click="putUrl">
                Shorten
            </button>
        </div>
        <p v-if="errorMessage !== null" class="shortener-input__error-message">
            {{ errorMessage }}
        </p>
    </form>
</template>

<script>
export default {
    data() {
        return {
            inputUrl: '',
            errorMessage: null,
        }
    },
    methods: {
        putUrl() {
            const regex = /^(ftp|http|https):\/\/[^ "]+$/

            if (regex.test(this.inputUrl)) {
                this.$store.dispatch('fetchBitLyApi', this.inputUrl)
                this.errorMessage = null
            } else {
                this.errorMessage = 'This is not a URL! =/'
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.shortener-input {
    width: 100%;
    margin-bottom: 40px;

    .shortener-input__error-message {
        color: $color7;
        font-weight: $bold;
        margin: 10px;
    }

    .shortener-input__control {
        display: flex;

        @media only screen and (max-width: 375px) {
            flex-direction: column;
        }
    }

    .shortener-input__control--input,
    .shortener-input__control--button {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border-radius: 10px;
        height: 60px;
    }

    .shortener-input__control--input {
        width: 100%;
        padding-left: 20px;
        margin-right: 30px;
        border: 1px solid $color2;

        @media only screen and (max-width: 375px) {
            margin-bottom: 20px;
        }
    }

    .shortener-input__control--button {
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
            background-color: $color2;
        }

        @media only screen and (max-width: 375px) {
            max-width: 100%;
        }
    }
}
</style>
