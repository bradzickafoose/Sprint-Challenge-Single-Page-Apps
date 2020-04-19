import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    max-width: 100%;
}

body {
    background-color: #f7f7f7;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

main {
    width: 85vw;
    max-width: 1024px;
    margin: auto;
    padding: 15px;
    border-radius: 10px;
}

section {
  margin: 2rem;
}

.grid {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* Utility classes */

.center {
    text-align: center;
}
`;
