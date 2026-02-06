import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      Storybook only, run <code>pnpm run storybook</code>
    </div>
  </StrictMode>,
);
