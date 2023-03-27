<script>
    import Typewriter from 'svelte-typewriter'
    import {curStep} from "$lib/stores.js";
</script>

<div class="w-full h-full flex justify-center items-start py-16 max-w-screen-2xl m-auto">
    <div class="flex flex-col w-2/3 gap-12 w-full h-full">
        <h1 class="text-6xl font-bold text-center">Useful Resources</h1>

        <ul class="text-3xl leading-relaxed font-medium flex flex-col gap-4 list-disc text-gray-200">
            {#if $curStep >= 1}
                <Typewriter element="li" interval={7.5}>
                    Mozilla Developer Network (MDN) - <a href="https://developer.mozilla.org"
                                                         class="underline font-bold">https://developer.mozilla.org</a>
                </Typewriter>
            {/if}
            {#if $curStep >= 2}
                <Typewriter element="li" interval={7.5}>
                    W3Schools - <a href="https://www.w3schools.com" class="underline font-bold">https://www.w3schools.com</a>
                </Typewriter>
            {/if}
            {#if $curStep >= 3}
                <Typewriter element="li" interval={7.5}>
                    Trinket - <a href="https://trinket.io" class="underline font-bold">https://trinket.io</a>
                </Typewriter>
            {/if}
        </ul>
    </div>
</div>
