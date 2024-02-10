import * as Htmx from "htmx.org";

declare global {
  let htmx: typeof Htmx;

  interface Window {
    htmx: typeof Htmx;
  }
}

export {};
