/// <reference types="@kitajs/html/htmx.d.ts" />
import { Html } from "@kitajs/html";

const index = (
  <div id="me">
    <button hx-get="./foo" hx-trigger="click" hx-target="#me">
      Click me to get some data
    </button>
  </div>
);

export default index;
