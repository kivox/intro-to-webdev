<script>
    import Typewriter from 'svelte-typewriter'
    import {curStep} from "$lib/stores.js";

    import {fly} from 'svelte/transition'
    import Highlight, {LineNumbers} from "svelte-highlight";
    import html from "svelte-highlight/languages/javascript";

    let code = `<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
</html>`;
</script>

<div class="w-full h-full flex justify-center items-start py-16 max-w-screen-2xl m-auto">
    <div class="flex flex-col w-2/3 gap-12 w-full h-full">
        <h1 class="text-6xl font-bold text-center">What is the DOM?</h1>

        <ul class="text-3xl leading-relaxed font-medium flex flex-col gap-4 list-disc text-gray-200">
            {#if $curStep >= 1}
                <Typewriter element="li" interval={7.5}>
                    The Document Object Model (DOM) is an application programming interface (API) for HTML documents.
                </Typewriter>
            {/if}
            {#if $curStep >= 2}
                <Typewriter element="li" interval={7.5}>
                    It represents the page so that programs can change the document structure, style, and content.
                </Typewriter>
            {/if}
            {#if $curStep >= 3}
                <Typewriter element="li" interval={7.5}>
                    The DOM represents the document as nodes and objects; that way, programming languages such as JavaScript can interact with the page.
                </Typewriter>
            {/if}
            {#if $curStep >= 4}
                <Typewriter element="li" interval={7.5}>
                    The DOM allows developers to add, modify or delete elements, attributes, and styles in an HTML document, providing a dynamic and interactive user experience.
                </Typewriter>
            {/if}
        </ul>

        {#if $curStep >= 5}
           <div class="flex justify-center items-center w-full pt-12"
                in:fly={{ y: 400, duration: 400 }}>
               <img src="https://www.freecodecamp.org/news/content/images/size/w1000/2021/09/Document.jpg" alt="The Dom">
           </div>
        {/if}
    </div>
</div>
