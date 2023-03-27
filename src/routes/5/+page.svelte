<script>
    import {curStep} from "$lib/stores.js";

    import {fly} from 'svelte/transition'

    import Highlight, {LineNumbers} from "svelte-highlight";
    import html from "svelte-highlight/languages/vbscript-html";
    import css from "svelte-highlight/languages/css";

    let htmlFile = `<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p class="example_class">This is a paragraph.</p>
    </body>
</html>`;
    let cssFile = `body {
  background-color: #dc2626;
}
h1, p {
  color: white;
  text-align: center;
}

.example_class {
  font-size: 20px;
}`;

    let htmlHighlighted = []
    let cssHighlighted = []

    // on curStep change
    curStep.subscribe((value) => {
        switch (value) {
            case 1:
                htmlHighlighted = [5, 8]
                cssHighlighted = [1]
                break;
            case 2:
                htmlHighlighted = [6, 7]
                cssHighlighted = [4]
                break;
            case 3:
                htmlHighlighted = [6, 7]
                cssHighlighted = [5]
                break;
            case 4:
                htmlHighlighted = [8]
                cssHighlighted = [9]
                break;
            default:
                htmlHighlighted = []
                cssHighlighted = []
        }
    })
</script>

<div class="w-full h-full flex justify-center items-start max-w-screen-2xl m-auto">
    <div class="flex flex-row gap-2 w-full h-full p-24">
        <div class="w-2/4 h-full flex flex-col w-full gap-2">
            <div class="mr-auto h-1/2 bg-gray-800 w-full px-2 pb-2 rounded-t rounded-b"
                 in:fly={{ x: -400, duration: 400 }}>
                <div class="flex flex-row pr-2 justify-center items-center bg-gray-800 h-10 rounded-t gap-2">
                    <div class="text-xs py-1 px-2 bg-gray-900 bg-opacity-50 rounded">
                        index.html
                    </div>
                    <div class="flex-grow"></div>
                    <div class="flex flex-row gap-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                </div>
                <div class="h-full w-full flex flex-col gap-2">
                    <div class="flex flex-col h-full">
                        <Highlight code={htmlFile} language={html} let:highlighted>
                            <LineNumbers hideBorder={true} {highlighted} highlightedLines={htmlHighlighted}/>
                        </Highlight>
                        <div class="flex-grow bg-gray-900 mb-10"></div>
                    </div>
                </div>
            </div>
            <div class="mr-auto h-1/2 bg-gray-800 px-2 w-full pb-2 rounded-t rounded-b"
                 in:fly={{ x: -400, duration: 400 }}>
                <div class="flex flex-row pr-2 justify-center items-center bg-gray-800 h-10 rounded-t gap-2">
                    <div class="text-xs py-1 px-2 bg-gray-900 bg-opacity-50 rounded">
                        styles.css
                    </div>
                    <div class="flex-grow"></div>
                    <div class="flex flex-row gap-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                </div>
                <div class="h-full w-full flex flex-col gap-2">
                    <div class="flex flex-col h-full">
                        <Highlight code={cssFile} language={css} let:highlighted>
                            <LineNumbers hideBorder={true} {highlighted} highlightedLines={cssHighlighted}/>
                        </Highlight>
                        <div class="flex-grow bg-gray-900 mb-10"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-2/4 mr-auto h-full {$curStep >= 1 ? 'bg-red-600' : 'bg-white'} rounded"
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
            <div class="flex flex-col h-full -mt-10 pt-12 px-2 font-serif {$curStep >= 2 ? 'text-white':'text-black'}">
                <h1 class="text-2xl {$curStep >= 3 ? 'text-center' : 'text-left' } {$curStep === 2 || $curStep === 3 ? 'bg-yellow-500 bg-opacity-50':''}">
                    This is a Heading
                </h1>
                <p class="text-sm {$curStep >= 4 ? 'text-[20px]' : 'text-left' } {$curStep >= 3 ? 'text-center' : 'text-left' } {$curStep === 2 || $curStep === 3 || $curStep === 4 ? 'bg-yellow-500 bg-opacity-50':''}">
                    This is a paragraph
                </p>
            </div>
        </div>
    </div>
</div>
