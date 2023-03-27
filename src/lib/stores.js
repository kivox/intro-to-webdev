import { writable } from "svelte/store";

export const slides = writable([
  {
    title: "",
    link: "/",
    steps: 0,
  },
  {
    title: "",
    link: "/1",
    steps: 6,
  },
  {
    title: "",
    link: "/2",
    steps: 6,
  },
  {
    title: "What is HTML?",
    link: "/3",
    steps: 5,
  },
  {
    title: "",
    link: "/4",
    steps: 6,
  },
  {
    title: "What is CSS?",
    link: "/5",
    steps: 6,
  },
  {
    title: "",
    link: "/6",
    steps: 6,
  },
  {
    title: "What is JavaScript?",
    link: "/7",
    steps: 3,
  },
  {
    title: "",
    link: "/8",
    steps: 6,
  },
  {
    title: "What is the DOM?",
    link: "/9",
    steps: 4,
  },
  {
    title: "",
    link: "/10",
    steps: 0,
  },
]);

export const curStep = writable(0);
