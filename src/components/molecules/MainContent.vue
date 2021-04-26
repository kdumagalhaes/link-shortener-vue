<template>
    <main class="main-content">
        <Hero />
        <ShortenerInput />
        <ShortenerResult />
    </main>
</template>

<script>
// atoms
import { Hero, ShortenerInput, ShortenerResult } from '@/components/atoms'

export default {
    components: {
        Hero,
        ShortenerInput,
        ShortenerResult,
    },
}
</script>

<style lang="scss" scoped>
.main-content {
    width: 100%;
    max-width: 700px;
    padding: 0 20px;
}
</style>
