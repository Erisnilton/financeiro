<script setup lang="ts">
defineProps({
    tag: {
        type: String,
        default: 'button'
    },
    type: {
        type: String,
        default: 'button'
    }
})
</script>
<template>
<component class="f-btn" :is="tag" :type="type">
    <slot>

    </slot>
</component>

</template>

<style lang="scss"> 
    .f-btn{
        display: inline-block;
        padding: var(--spacing-1) var(--spacing-2);
        cursor: pointer;
        border: none;
        background-color: var(--theme-primary);
        color: black;
        border-radius: 0.357142857rem;
        text-transform: uppercase;
        font-weight: bold;

        text-decoration: none;

        &:hover{
            filter: brightness(90%);
        }
        &:active {
            filter: brightness(75%);
        }

    }
</style>