<script>
    import {fly} from 'svelte/transition'
    import Highlight, {LineNumbers} from "svelte-highlight";
    import {curStep} from "$lib/stores.js";
    import html from "svelte-highlight/languages/vbscript-html";

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

    let curHighlighted = []

    // on curStep change
    curStep.subscribe((value) => {
        switch (value) {
            case 1:
                curHighlighted = [3]
                break;
            case 2:
                curHighlighted = [5, 6, 7, 8]
                break;
            case 3:
                curHighlighted = [6]
                break;
            case 4:
                curHighlighted = [7]
                break;
            default:
                curHighlighted = []
        }

    })
</script>

<div class="w-full h-full flex justify-center items-start py-16 max-w-screen-2xl m-auto">
    <div class="flex flex-row gap-2 w-full h-full p-24">
        <div class="w-2/4 mr-auto h-full bg-gray-800 px-2 pb-2 rounded-t rounded-b"
             in:fly={{ x: -400, duration: 400 }}>
            <div class="flex flex-row pr-2 justify-center items-center bg-gray-800 h-10 rounded-t">
                <div class="text-xs py-1 px-2 bg-gray-900 rounded">
                    index.html
                </div>
                <div class="flex-grow"></div>
                <div class="flex flex-row gap-2">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
            </div>
            <div class="flex flex-col h-full">
                <Highlight {code} language={html} let:highlighted>
                    <LineNumbers hideBorder={true} {highlighted} highlightedLines={curHighlighted}/>
                </Highlight>
                <div class="flex-grow bg-gray-900 mb-10"></div>
            </div>
        </div>
        <div class="w-2/4 mr-auto h-full bg-white rounded"
             in:fly={{ x: 400, duration: 400 }}>
            <div class="flex flex-row px-2 justify-center items-center bg-gray-800 h-10 rounded-t">
                <div class="text-xs py-1 px-2 {$curStep === 1 ? 'bg-yellow-500 bg-opacity-50' : 'bg-gray-900' } rounded">
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
                <h1 class="text-2xl {$curStep === 2 || $curStep === 3 ? 'bg-yellow-500 bg-opacity-50':''}">This is a
                    Heading</h1>
                <p class="text-sm {$curStep === 2 || $curStep === 4 ? 'bg-yellow-500 bg-opacity-50':''}">This is a
                    paragraph.</p>
            </div>
        </div>
    </div>
</div>
