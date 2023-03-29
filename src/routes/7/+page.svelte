<script>
    import {curStep} from "$lib/stores.js";

    import {fly} from 'svelte/transition'

    import Highlight, {LineNumbers} from "svelte-highlight";
    import html from "svelte-highlight/languages/javascript";
    import css from "svelte-highlight/languages/css";
    import javascript from "svelte-highlight/languages/javascript";

    let htmlFile = `    <head>
        <title>Dynamic Heading and Paragraph</title>
        <link rel="stylesheet" href="styles.css"></link>
        <script src="script.js"><\/script>
    </head>
    <body>
        <h1 id="heading">This is a Heading</h1>
        <p id="paragraph">This is a paragraph.</p>
        <input type="text" placeholder="Enter new heading" id="new-heading">
        <input type="text" placeholder="Enter new paragraph" id="new-paragraph">
    </body>
</html>`;
    let cssFile = `h1, p {
    color: #000;
    text-align: center;
}`;
    let jsFile = `/* selecting the elements */
const newHeading = document.getElementById('new-heading');
const newParagraph = document.getElementById('new-paragraph');
const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');

newHeading.addEventListener('input', function() {
  heading.innerText = newHeading.value;
});

newParagraph.addEventListener('input', function() {
  paragraph.innerText = newParagraph.value;
});`

    let htmlHighlighted = []
    let cssHighlighted = []
    let jsHighlighted = []

    // on curStep change
    curStep.subscribe((value) => {
        switch (value) {
            case 1:
                htmlHighlighted = [8]
                cssHighlighted = []
                jsHighlighted = [1,3,6,7,8]
                break;
            case 2:
                htmlHighlighted = [9]
                cssHighlighted = []
                jsHighlighted = [2,4,10,11,12]
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
                            <LineNumbers hideBorder={true} {highlighted} startingLineNumber={3}
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
                        <Highlight code={cssFile} language={css} let:highlighted>
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
                        Dynamic Heading and Paragraph
                    </div>
                    <div class="flex-grow"></div>
                    <div class="flex flex-row gap-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                </div>
                <div class="flex flex-col h-full -mt-10 pt-12 px-2 font-serif text-black">
                    <h1 class="text-2xl text-center">
                        {$curStep >= 1 ? 'This is a *new* Heading': 'This is a Heading'}
                    </h1>
                    <p class="text-sm text-center">
                        {$curStep >= 2 ? 'This is a *new* paragraph': 'This is a paragraph'}
                    </p>
                    <div class="flex flex-col gap-2">
                        <input type="text" placeholder="Enter new heading" id="new-heading"
                               class="text-black border border-black rounded w-64 px-1 {$curStep === 1 ? 'bg-yellow-200': ''}"
                               value={$curStep >= 1 ? 'This is a *new* Heading': ''}>
                        <input type="text" placeholder="Enter new paragraph" id="new-paragraph"
                               class="text-black border border-black rounded w-64 px-1 {$curStep === 2 ? 'bg-yellow-200': ''}"
                               value={$curStep >= 2 ? 'This is a *new* paragraph': ''}>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
