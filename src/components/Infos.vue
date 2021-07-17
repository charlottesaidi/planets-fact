<template>
    <div class="planet_infos">
        <div class="description">
            <slot />
        </div> 
        <div class="buttons">
            <overview-button />
            <internal-button />
            <geology-button />
        </div>
    </div>
</template>

<script>
import OverviewButton from '../components/OverviewButton.vue'
import GeologyButton from '../components/GeologyButton.vue'
import InternalButton from '../components/InternalButton.vue'
export default {
    components: {
        OverviewButton,
        InternalButton,
        GeologyButton,
    },
}
</script>