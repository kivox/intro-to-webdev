<script>
  import "@/styles/tailwind.css";
  import {curStep, slides} from "$lib/stores.js";
  import {page} from "$app/stores";
  import {goto} from "$app/navigation";

  slides.set([
    {
      link: "/",
      steps: 0,
    },
    {
      link: "/1",
      steps: 3,
    },
    {
      link: "/2",
      steps: 0,
    },
  ]);

  function pageHandler(event) {
    let currentPageLink = $page.url.pathname;
    let currentPageIndex = $slides.findIndex((page) => page.link === currentPageLink);
    let currentSteps = $slides[currentPageIndex].steps;

    if (event.key === "ArrowRight") {
      if (currentSteps > $curStep + 1) {
        curStep.set($curStep + 1);
      } else {
        let nextPageIndex = currentPageIndex + 1;

        if (nextPageIndex < $slides.length) {
          curStep.set(0);
          goto($slides[nextPageIndex].link);
        }
      }
    } else if (event.key === "ArrowLeft") {
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
  }
</script>

<svelte:window on:keydown={pageHandler}/>

<div class="w-screen h-screen bg-gray-900 text-white">
  <slot />
</div>
