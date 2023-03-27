<script>
    import Typewriter from 'svelte-typewriter'
    import {curStep} from "$lib/stores.js";

    import {fly} from 'svelte/transition'
    import Highlight, {LineNumbers} from "svelte-highlight";
    import javascript from "svelte-highlight/languages/javascript";

    let code = `function greet() {
    console.log("Hello, World!");
}

greet();`;

    let output = `Hello, World!



    `;

</script>

<div class="w-full h-full flex justify-center items-start py-16 max-w-screen-2xl m-auto">
    <div class="flex flex-col w-2/3 gap-12 w-full h-full">
        <h1 class="text-6xl font-bold text-center">What is JavaScript?</h1>

        <ul class="text-3xl leading-relaxed font-medium flex flex-col gap-4 list-disc text-gray-200">
            {#if $curStep >= 1}
                <Typewriter element="li" interval={7.5}>
                    JavaScript is a programming language that allows you to create dynamic and interactive content on
                    web pages.
                </Typewriter>
            {/if}
            {#if $curStep >= 2}
                <Typewriter element="li" interval={7.5}>
                    It is used to manipulate the Document Object Model (DOM) for updating elements, managing events, and
                    creating animations.
                </Typewriter>
            {/if}
            {#if $curStep >= 3}
                <Typewriter element="li" interval={7.5}>
                    JavaScript can be used for tasks like:
                </Typewriter>
            {/if}
            {#if $curStep >= 4}
                <ul class="pl-16 list-disc text-2xl text-semibold text-gray-300">
                    <li>Form validation</li>
                    <li>Fetching data from APIs</li>
                    <li>Creating sliders, carousels, and other interactive components</li>
                    <li>Handling user input</li>
                    <li>Animating elements</li>
                    <li>And much more</li>
                </ul>
            {/if}
        </ul>

        {#if $curStep >= 5}
            <div class="flex flex-row gap-2">
                <div class="w-2/4 mr-auto h-full bg-gray-800 px-2 pb-2 rounded"
                     in:fly={{ x: -400, duration: 400 }}>
                    <div class="flex flex-row pr-2 justify-center items-center bg-gray-800 h-10 rounded-t">
                        <div class="text-xs py-1 px-2 bg-gray-900 rounded">
                            script.js
                        </div>
                        <div class="flex-grow"></div>
                        <div class="flex flex-row gap-2">
                            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                    </div>
                    <Highlight language={javascript} {code} let:highlighted>
                        <LineNumbers {highlighted} hideBorder={true}/>
                    </Highlight>
                </div>
                <div class="w-2/4 mr-auto h-full bg-gray-800 px-2 pb-2 rounded"
                     in:fly={{ x: 400, duration: 400 }}>
                    <div class="flex flex-row pr-2 justify-center items-center bg-gray-800 h-10 rounded-t">
                        <div class="text-xs py-1 px-2 bg-gray-900 rounded">
                            script.js
                        </div>
                        <div class="flex-grow"></div>
                        <div class="flex flex-row gap-2">
                            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                    </div>
                    <div class="bg-gray-900 pb-2">

                        <Highlight language={javascript} code={output}/>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
