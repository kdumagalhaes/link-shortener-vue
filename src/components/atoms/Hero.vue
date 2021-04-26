<template>
    <div class="hero">
        <img
            src="@/assets/img/hero-img.svg"
            alt="hero image"
            class="hero__img"
        />
        <h1 class="hero__title">
            Link <strong class="hero__title--strong">Shortener</strong>
        </h1>
        <p class="hero__text">
            Paste your long URL in the input and press the "Shorten" button!
        </p>
    </div>
</template>

<script>
export default {
    setup() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.hero {
    text-align: center;

    .hero__img,
    .hero__text {
        margin-bottom: 40px;
    }

    .hero__img {
        width: 100%;
        max-width: 300px;
    }

    .hero__title {
        color: $color1;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1.5rem;
        font-weight: $light;
        margin-bottom: 15px;

        .hero__title--strong {
            font-weight: $bold;
        }
    }

    .hero__text {
        font-size: 1.2rem;
        color: $color4;
    }
}
</style>
