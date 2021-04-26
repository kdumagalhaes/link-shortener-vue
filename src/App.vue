<template>
    <div class="app-template">
        <MainContent />
    </div>
</template>

<script>
// molecules
import MainContent from '@/components/molecules/MainContent'

export default {
    name: 'App',
    components: {
        MainContent,
    },
}
</script>

<style lang="scss" scoped>
.app-template {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>
