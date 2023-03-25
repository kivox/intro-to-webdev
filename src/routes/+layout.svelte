<script>
  import "@/styles/tailwind.css";

  import {totalPages, curPage, curPageSlide, pageSlides } from "$lib/stores.js";

  function nextPage() {
    if (pageSlides > 0 && curPageSlide > pageSlides) {
      let nextPageLink = curPageSlide + 1

      if (nextPageLink > pageSlides) {
        nextPageLink = 0
      }
      
      goto(`/${nextPage > 0 ? nextPageLink : ''}`)
  }

  function nextPage() {
    if (pageSlides > 0 && curPageSlide > pageSlides) {
      let nextPageLink = curPageSlide - 1

      if (nextPageLink > pageSlides) {
        nextPageLink = 0
      }
      
      goto(`/${nextPage > 0 ? nextPageLink : ''}`)
  }


  function handleNextPage(event) {
    if (event.key === "ArrowRight") {
      if (pageSlides > 0 && curPageSlide > pageSlides) {
        curPageStep += 1;
      } else {
        nextPage()
      }
    } else if (event.key === "ArrowLeft") {
      if (curPageSlide > 0) {
        curPageStep -= 1;
      } else {
        prevPage()
      }
    }
  }
</script>

<svelte:window on:keydown={handleNextPage} />

<div class="w-screen h-screen bg-gray-900 text-white">
  <slot />
</div>
