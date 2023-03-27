<script>
    import Highlight, {LineNumbers} from "svelte-highlight";
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
</script>

<div class="flex flex-row justify-center items-center">
    <div class="px-2 py-1 font-mono text-xs border-gray-700 bg-gray-900 bg-opacity-70 border rounded">
        index.html
    </div>
    <div class="flex-auto"></div>
    <div class="flex flex-row gap-2">
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
    </div>
</div>
<div class="bg-gray-900 border border-gray-800 p-0.5 rounded">
    <Highlight {code} language={html} let:highlighted>
        <LineNumbers hideBorder={true} {highlighted}/>
    </Highlight>
</div>