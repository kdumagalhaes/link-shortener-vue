<template>
    <fieldset class="shortener-result" v-if="setResultDisplay">
        <legend class="shortener-result__title">Shortened URL:</legend>
        <div class="shortener-result__area">
            <a
                :href="setShortenedUrl"
                target="_blank"
                class="shortener-result__area--url"
                >{{ setShortenedUrl }}</a
            >
        </div>
    </fieldset>
</template>

<script>
export default {
    computed: {
        setResultDisplay() {
            return this.$store.getters.getResultDisplay
        },
        setShortenedUrl() {
            return this.$store.getters.getShortenedUrl
        },
    },
}
</script>

<style lang="scss" scoped>
.shortener-result {
    border: 1px solid $color6;
    padding: 20px;
    border-radius: 10px;

    .shortener-result__title {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: $bold;
        color: $color1;
        font-size: 0.7rem;
        padding: 0 10px;
    }

    .shortener-result__area {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .shortener-result__area--url {
            font-weight: $bold;
            color: $color4;
            text-decoration: underline;
        }
    }
}
</style>
