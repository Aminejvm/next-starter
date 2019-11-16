/* eslint-disable max-len */
import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${normalize()}
    html {
  box-sizing: border-box; /* 1 */
  font-family: sans-serif; /* 2 */
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
/**
 * Removes the default spacing and border for appropriate elements.
 */
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
p,
pre {
  margin: 0;
}
button {
  background: transparent;
  padding: 0;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
fieldset {
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
/**
 * Tailwind custom reset styles
 */
/**
 * 1. Use the system font stack as a sane default.
 * 2. Use Tailwind's default "normal" line-height so the user isn't forced
 * to override it to ensure consistency even when using the default theme.
 */
html {
  font-family: "graphik",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  line-height: 1.5; /* 2 */
}
*,
*::before,
*::after {
  border-width: 0;
  border-style: solid;
  border-color: #e2e8f0;
}
img {
  border-style: solid;
}
textarea {
  resize: vertical;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: inherit;
  opacity: 0.5;
}
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  color: inherit;
  opacity: 0.5;
}
input::placeholder,
textarea::placeholder {
  color: inherit;
  opacity: 0.5;
}
button,
[role="button"] {
  cursor: pointer;
}
table {
  border-collapse: collapse;
}
/**
 * Reset links to optimize for opt-in styling instead of
 * opt-out.
 */
a {
  color: inherit;
  font-size:inherit;
  text-decoration: inherit;
}
/**
 * Reset form element properties that are easy to forget to
 * style explicitly so you don't inadvertently introduce
 * styles that deviate from your design system. These styles
 * supplement a partial reset that is already applied by
 * normalize.css.
 */
button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}
/**
 * Use the configured 'mono' font family for elements that
 * are expected to be rendered with a monospace font, falling
 * back to the system monospace stack if there is no configured
 * 'mono' font family.
 */
pre,
code,
kbd,
samp {
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
/**
 * Make replaced elements by default as that's
 * the behavior you want almost all of the time. Inspired by
 * CSS Remedy, with  added as well.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}
/**
 * Constrain images and videos to the parent width and preserve
 * their instrinsic aspect ratio.
 *
 * https://github.com/mozdevs/cssremedy/issues/14
 */
img,
video {
  max-width: 100%;
  height: auto;
}
`;
export default GlobalStyles;
