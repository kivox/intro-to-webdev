<script>
    import Typewriter from 'svelte-typewriter'
    import {curStep} from "$lib/stores.js";
</script>

<div class="w-full h-full flex justify-center items-start py-16 max-w-screen-2xl m-auto">
    <div class="flex flex-col w-2/3 gap-4 w-full h-full">
        <h1 class="text-6xl font-bold text-center pb-12">Additional Information</h1>



        <div class="text-5xl leading-relaxed font-medium flex flex-col text-gray-200">
            Useful Resources
        </div>
        <ul class="text-3xl leading-relaxed font-normal flex flex-col gap-4 list-disc text-gray-300 pl-16">
            <Typewriter element="li" interval={7.5}>
                Mozilla Developer Network (MDN) - <a href="https://developer.mozilla.org" class="underline font-bold">https://developer.mozilla.org</a>
            </Typewriter>
            <Typewriter element="li" interval={7.5}>
                W3Schools - <a href="https://www.w3schools.com" class="underline font-bold">https://www.w3schools.com</a>
            </Typewriter>
            <Typewriter element="li" interval={7.5}>
                Trinket - <a href="https://trinket.io" class="underline font-bold">https://trinket.io</a> (Create websites with live change previews, makes development easier)
            </Typewriter>
        </ul>

        <div class="text-5xl leading-relaxed font-medium flex flex-col text-gray-200 pt-8">
                Task
        </div>
        <ul class="text-3xl leading-relaxed flex flex-col gap-4 list-disc text-gray-300 pl-16 font-bold">
            <Typewriter element="li" interval={7.5}>
                Using these HTML, CSS and JavaScript, create a website, one of the most important things when it comes to web development is creativity.
                Here are just some examples of what you could create.
            </Typewriter>
        </ul>
        <ul class="text-3xl leading-relaxed font-normal flex flex-col gap-4 list-disc text-gray-300 pl-32">
            <Typewriter element="li" interval={7.5}>
                Calculator - A simple but useful tool that can be built with HTML, CSS, and JavaScript.
            </Typewriter>
            <Typewriter element="li" interval={7.5}>
                Measurement Conversion - A conversion calculator is a tool that can be used to convert between different units of measurement.
            </Typewriter>
            <Typewriter element="li" interval={7.5}>
                Currency Converter - Similar to measurement conversion but for currencies.
            </Typewriter>
            <Typewriter element="li" interval={7.5}>
                Background Switcher - With a click of a button, the website switches it's background colour randomly. A variation of this task was shown previously.
            </Typewriter>
        </ul>
    </div>
</div>
