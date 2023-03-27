<script>
import "svelte-highlight/styles/atom-one-dark-reasonable.css"
  import "@/styles/tailwind.css";

  import {curStep, slides} from "$lib/stores.js";
  import {page} from "$app/stores";
  import {goto} from "$app/navigation";

  function handleRight() {
    let currentPageLink = $page.url.pathname;
    let currentPageIndex = $slides.findIndex((page) => page.link === currentPageLink);
    let currentPageSteps = $slides[currentPageIndex].steps;

    if (currentPageSteps > $curStep + 1) {
      curStep.set($curStep + 1);
    } else {
      let nextPageIndex = currentPageIndex + 1;

      if (nextPageIndex < $slides.length) {
        let nextPageSteps = $slides[nextPageIndex].steps;
        curStep.set(nextPageSteps > 0 ? 0 : -1); // Reset the curStep when navigating to the next page
        goto($slides[nextPageIndex].link);
      }
    }
  }

  function handleLeft() {
    let currentPageLink = $page.url.pathname;
    let currentPageIndex = $slides.findIndex((page) => page.link === currentPageLink);

    if ($curStep > 0) {
      curStep.set($curStep - 1);
    } else {
      let prevPageIndex = currentPageIndex - 1;

      if (prevPageIndex >= 0) {
        let prevPageSteps = $slides[prevPageIndex].steps;
        curStep.set(prevPageSteps - 1);
        goto($slides[prevPageIndex].link);
      }
    }
  }

  function arrowHandler(event) {
    /*if (!document.fullscreenElement) {
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      }
    }*/

    if (event.key === "ArrowRight") {
      handleRight();
    } else if (event.key === "ArrowLeft") {
      handleLeft();
    }
  }
</script>

<svelte:window on:keydown={arrowHandler}/>

<div class="w-screen h-screen bg-gray-900 text-white overflow-hidden">
  <div class="fixed top-4 left-4 bg-gray-900 text-white font-bold text-2xl">
    {$slides[$slides.findIndex((curPage) => curPage.link === $page.url.pathname)].title}
  </div>
  <slot/>
</div>
