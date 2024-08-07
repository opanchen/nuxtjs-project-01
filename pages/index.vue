<script setup lang="ts">
// import Alerts from '../components/Alerts.vue';
import { useCounterStore } from '../stores/myStore';

definePageMeta({
    middleware: 'auth'
})

// Create a reactive state and set default value
// const counter = useState('counter', () => Math.round(Math.random() * 100))
// Use shared state
const counter = useCounter()

// state management via Pinia
const store = useCounterStore();
console.log('[STORE]: ', store);


const { $sayHello } = useNuxtApp()
const { sayHello } = useUtils();

$sayHello('Oleh, it is your plugin.')
sayHello();
</script>



<template>
    <div class="Main">
        <!-- <Alerts />
        <Profile /> -->
        <h1>Home page</h1>

        <ContentDoc />
        <IconsBell class="w-6 h-6" />

        <div class="flex gap-4">
            <img class="w-[200px] block" src="@/assets/hello.jpg" alt="Alt pic">
            <img class="w-[200px] h-200 block" src="/hello.jpg" alt="Alt pic">
        </div>

        <div id="main" class="mt-4 flex items-center gap-3">
            Counter: {{ counter }}
            <button class="p-2 border-amber-300 border-[1px] rounded-md" @click="counter++">
                +
            </button>
            <button class="p-2 border-amber-300 border-[1px] rounded-md" @click="counter--">
                -
            </button>
        </div>

        <Counter id="counter" />
    </div>

</template>