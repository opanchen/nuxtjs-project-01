<script setup>
const counter = useCounter()
</script>

<template>
    <div class="mt-4 flex items-center gap-3">
        Counter: {{ counter }}
        <button class="p-2  border-[1px] rounded-md" @click="counter++">
            +
        </button>
        <button class="p-2  border-[1px] rounded-md" @click="counter--">
            -
        </button>
    </div>
</template>