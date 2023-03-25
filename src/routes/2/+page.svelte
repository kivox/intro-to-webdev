<script>
    import {page} from '$app/stores';
    import {curStep, slides} from '$lib/stores.js';

    const currentPage = parseInt($page.url.pathname.split('/')[1]) || 1;
    let currentSteps = $slides.find((slide) => slide.link === $page.url.pathname).steps;
</script>

<h1>Page {currentPage}</h1>

<p>Step {$curStep + 1} of {currentSteps}</p>
