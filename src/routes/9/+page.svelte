<script>
    import {curStep} from "$lib/stores.js";

    import {fly} from 'svelte/transition'

    import Highlight, {LineNumbers} from "svelte-highlight";
    import html from "svelte-highlight/languages-typescript";
    import css from "svelte-highlight/languages/css";
    import javascript from "svelte-highlight/languages/javascript";

    let htmlFile = `<html>
    <head>
        <title>Dynamic background colour</title>
        <link rel="stylesheet" href="styles.css">
        <script src="script.js"><\/script>
    </head>
    <body>
      <button id="button">Change background colour to blue</button>
    </body>
</html>`;
    let cssFile = `body {
    background-color: white;
}`;let cssFileNew = `body {
    background-color: blue;
}`;
    let jsFile = `document.getElementById("button").addEventListener("click", function() {
  document.body.style.backgroundColor = "blue";
});`

    let htmlHighlighted = []
    let cssHighlighted = []
    let jsHighlighted = []

    // on curStep change
    curStep.subscribe((value) => {
        switch (value) {
            case 1:
                htmlHighlighted = [7]
                cssHighlighted = []
                jsHighlighted = []
                break;
            case 2:
                htmlHighlighted = []
                cssHighlighted = []
                jsHighlighted = [1]
                break;
            case 3:
                htmlHighlighted = []
                cssHighlighted = [1]
                jsHighlighted = []
                break;
            default:
                htmlHighlighted = []
                cssHighlighted = []
                jsHighlighted = []
        }
    })
</script>

<div class="w-full h-full flex justify-center items-start py-16 max-w-screen-2xl m-auto">
    <div class="flex flex-row gap-2 w-full h-full">
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
                            <LineNumbers hideBorder={true} {highlighted}
                                         highlightedLines={htmlHighlighted}/>
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
                        <Highlight code={$curStep >= 3 ? cssFileNew : cssFile} language={css} let:highlighted>
                            <LineNumbers hideBorder={true} {highlighted} highlightedLines={cssHighlighted}/>
                        </Highlight>
                        <div class="flex-grow bg-gray-900 mb-10"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-2/4 h-full flex flex-col w-full gap-2">
            <div class="mr-auto h-full bg-gray-800 w-full px-2 pb-2 rounded-t rounded-b"
                 in:fly={{ x: -400, duration: 400 }}>
                <div class="flex flex-row pr-2 justify-center items-center bg-gray-800 h-10 rounded-t gap-2">
                    <div class="text-xs py-1 px-2 bg-gray-900 bg-opacity-50 rounded">
                        script.js
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
                        <Highlight code={jsFile} language={javascript} let:highlighted>
                            <LineNumbers hideBorder={true} {highlighted} highlightedLines={jsHighlighted}/>
                        </Highlight>
                        <div class="flex-grow bg-gray-900 mb-10"></div>
                    </div>
                </div>
            </div>
            <div class="w-full mr-auto h-full bg-white rounded"
                 in:fly={{ x: 400, duration: 400 }}>
                <div class="flex flex-row px-2 justify-center items-center bg-gray-800 h-10 rounded-t">
                    <div class="text-xs py-1 px-2 bg-gray-900 rounded">
                        Dynamic background colour
                    </div>
                    <div class="flex-grow"></div>
                    <div class="flex flex-row gap-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                </div>
                <div class="flex flex-col h-full -mt-10 pt-12 px-2 font-serif text-black">
                    <div class="block">
                        <button class="rounded px-1 border border-black {$curStep  === 1 ? 'bg-yellow-200' : 'bg-gray-200'}">Change background colour to blue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
