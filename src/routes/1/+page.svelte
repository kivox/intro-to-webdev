<script>
    import Typewriter from 'svelte-typewriter'
    import {curStep} from "$lib/stores.js";

    import {fly} from 'svelte/transition';
</script>

<div class="w-full h-full flex justify-center items-start py-16 max-w-screen-2xl m-auto">
    <div class="flex flex-col w-2/3 items-right gap-12 w-full h-full">
        <h1 class="text-6xl font-bold text-center">What is Web Development?</h1>

        <ul class="text-3xl leading-relaxed font-medium flex flex-col gap-4 list-disc text-gray-200">
            {#if $curStep >= 1}
                <Typewriter element="li" interval={7.5}>
                    Web development is the process of building and maintaining websites and web applications.
                </Typewriter>
            {/if}
            {#if $curStep >= 2}
                <Typewriter element="li" interval={7.5}>
                    A website is a collection of related web pages that are accessed via the internet and displayed in a
                    web browser.
                </Typewriter>
            {/if}
            {#if $curStep >= 3}
                <Typewriter element="li" interval={7.5}>
                    Websites are created using a mix of HTML, CSS and JavaScript.
                </Typewriter>
            {/if}
            {#if $curStep >= 4}
                <Typewriter element="li" interval={7.5}>
                    Websites usually consist of 3 essential parts Header, Content and Footer.
                </Typewriter>
            {/if}
        </ul>

        {#if $curStep >= 5}
            <div class="w-1/2 mx-auto h-full bg-white rounded"
                 in:fly={{ y: 400, duration: 400 }}>
                <div class="flex flex-row px-2 justify-center items-center bg-gray-800 h-10 rounded-t">
                    <div class="text-xs py-1 px-2 bg-gray-900 rounded">
                        Example Website
                    </div>
                    <div class="flex-grow"></div>
                    <div class="flex flex-row gap-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                </div>
                <div class="flex flex-col h-full -mt-10 pt-10">
                    <div class="flex justify-center items-center bg-blue-200 w-full h-12 text-xs text-black font-serif">
                        Header
                    </div>
                    <div class="flex justify-center items-center bg-green-200 w-full h-full text-xs text-black font-serif">
                        Content
                    </div>
                    <div class="flex justify-center items-center bg-red-200 w-full h-12 text-xs text-black font-serif rounded-b">
                        Footer
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
