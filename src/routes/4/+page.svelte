<script>
    import Typewriter from 'svelte-typewriter'
    import {curStep} from "$lib/stores.js";

    import {fly} from 'svelte/transition';
    import Highlight, {LineNumbers} from "svelte-highlight";
    import css from "svelte-highlight/languages/css";

    let code = `h1 {
    text-align: center;
}

p {
    text-align: center;
}

/* Or you could make it simpler*/
h1, p { /*This is applied to both h1 and p elements*/
    text-align: center;
}
`;

</script>

<div class="w-full h-full flex justify-center items-start py-16 max-w-screen-2xl m-auto">
    <div class="flex flex-col w-2/3 gap-12 w-full h-full">
        <h1 class="text-6xl font-bold text-center">What is CSS?</h1>

        <ul class="text-3xl leading-relaxed font-medium flex flex-col gap-4 list-disc text-gray-200">
            {#if $curStep >= 1}
                <Typewriter element="li" interval={7.5}>
                    CSS stands for Cascading Style Sheet, it can format HTML document content
                </Typewriter>
            {/if}
            {#if $curStep >= 2}
                <ul class="pl-16 list-disc text-3xl text-semibold text-gray-300">
                    <li>Layout</li>
                    <li>Colours</li>
                    <li>Fonts</li>
                    <li>etc.</li>
                </ul>
            {/if}
            {#if $curStep >= 3}
                <Typewriter element="li" interval={7.5}>
                    CSS operates by targeting specific HTML elements and applying style rules to them
                </Typewriter>
            {/if}
            {#if $curStep >= 4}
                <Typewriter element="li" interval={7.5}>
                    CSS also has the ability to create a responsive experience that adapts to screen sizes
                </Typewriter>
            {/if}
        </ul>


        {#if $curStep >= 5}
            <div class="flex flex-row gap-2">
                <div class="w-2/4 mr-auto h-full bg-gray-800 px-2 pb-2 rounded"
                     in:fly={{ x: -400, duration: 400 }}>
                    <div class="flex flex-row pr-2 justify-center items-center bg-gray-800 h-10 rounded-t gap-2">
                        <div class="text-xs py-1 px-2 bg-gray-900 bg-opacity-50 rounded">
                            index.html
                        </div>
                        <div class="text-xs py-1 px-2 bg-gray-900 rounded">
                            styles.css
                        </div>
                        <div class="flex-grow"></div>
                        <div class="flex flex-row gap-2">
                            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                    </div>
                    <Highlight language={css} {code} let:highlighted>
                        <LineNumbers {highlighted} hideBorder={true}/>
                    </Highlight>
                </div>
                <div class="w-2/4 mr-auto h-full bg-white rounded"
                     in:fly={{ x: 400, duration: 400 }}>
                    <div class="flex flex-row px-2 justify-center items-center bg-gray-800 h-10 rounded-t">
                        <div class="text-xs py-1 px-2 bg-gray-900 rounded">
                            Page Title
                        </div>
                        <div class="flex-grow"></div>
                        <div class="flex flex-row gap-2">
                            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                    </div>
                    <div class="flex flex-col h-full -mt-10 pt-12 px-2 font-serif text-black">
                        <h1 class="text-2xl text-center">This is a Heading</h1>
                        <p class="text-sm text-center">This is a paragraph.</p>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
