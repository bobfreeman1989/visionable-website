// Split out so LazyMotion can fetch the animation features after hydration
// instead of shipping them in every page's first-load bundle.
export { domMax as default } from "motion/react";
