/// <reference types="@kitajs/html/htmx.d.ts" />
import { Html } from "@kitajs/html";

const testHtmx = (
  <div id="me">
    <button hx-get="./api/foo.tsx" hx-trigger="click" hx-target="#me">
      Click me to get
    </button>
  </div>
);

export { testHtmx };
