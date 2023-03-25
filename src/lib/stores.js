import { writable } from "svelte/store";

export const totalPages = writable(0);
export const curPage = writable(0);

export const curPageSlide = writable(0);
export const pageSlides = writable(0);
