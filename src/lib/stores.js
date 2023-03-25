import {writable} from "svelte/store";

export const slides = writable([]);

export const curStep = writable(0);

export const back = writable(false);