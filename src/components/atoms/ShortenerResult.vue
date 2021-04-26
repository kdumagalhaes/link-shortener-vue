<template>
    <fieldset class="shortener-result">
        <legend class="shortener-result__title">Link encurtado:</legend>
        <div class="shortener-result__area">
            <a href="#" class="shortener-result__area--url"
                >http://bit.ly/AsdE23</a
            >
            <a href="#" class="shortener-result__area--icon-link">
                <img
                    src="@/assets/img/copy.svg"
                    alt="Copy icon"
                    class="shortener-result__area--icon-copy"
                />
            </a>
        </div>
    </fieldset>
</template>

<script>
export default {}
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

        .shortener-result__area--icon-copy {
            width: 100%;
            max-width: 25px;
            opacity: 1;
            transition: opacity 0.4s;

            &:hover {
                opacity: 0.5;
            }
        }
    }
}
</style>
