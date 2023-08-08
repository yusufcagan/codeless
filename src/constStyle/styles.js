export const bootstrap = `@charset "UTF-8";
/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors
 * Copyright 2011-2021 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}

hr:not([size]) {
  height: 1px;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

h1, .h1 {
  font-size: calc(1.375rem + 1.5vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 2.5rem;
  }
}

h2, .h2 {
  font-size: calc(1.325rem + 0.9vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 2rem;
  }
}

h3, .h3 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.75rem;
  }
}

h4, .h4 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h4, .h4 {
    font-size: 1.5rem;
  }
}

h5, .h5 {
  font-size: 1.25rem;
}

h6, .h6 {
  font-size: 1rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

abbr[title],
abbr[data-bs-original-title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: 2rem;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small, .small {
  font-size: 0.875em;
}

mark, .mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: #0d6efd;
  text-decoration: underline;
}
a:hover {
  color: #0a58ca;
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-family: var(--bs-font-monospace);
  font-size: 1em;
  direction: ltr /* rtl:ignore */;
  unicode-bidi: bidi-override;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  font-size: 0.875em;
}
pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}
a > code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 0.875em;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}
kbd kbd {
  padding: 0;
  font-size: 1em;
  font-weight: 700;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]::-webkit-calendar-picker-indicator {
  display: none;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.lead {
  font-size: 1.25rem;
  font-weight: 300;
}

.display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}
.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 0.875em;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.blockquote > :last-child {
  margin-bottom: 0;
}

.blockquote-footer {
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-size: 0.875em;
  color: #6c757d;
}
.blockquote-footer::before {
  content: "— ";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 0.875em;
  color: #6c757d;
}

.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container-sm, .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container-md, .container-sm, .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1140px;
  }
}
@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
    max-width: 1320px;
  }
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }

  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }

  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }

  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }

  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }

  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
}
.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-sm-0 {
    margin-left: 0;
  }

  .offset-sm-1 {
    margin-left: 8.33333333%;
  }

  .offset-sm-2 {
    margin-left: 16.66666667%;
  }

  .offset-sm-3 {
    margin-left: 25%;
  }

  .offset-sm-4 {
    margin-left: 33.33333333%;
  }

  .offset-sm-5 {
    margin-left: 41.66666667%;
  }

  .offset-sm-6 {
    margin-left: 50%;
  }

  .offset-sm-7 {
    margin-left: 58.33333333%;
  }

  .offset-sm-8 {
    margin-left: 66.66666667%;
  }

  .offset-sm-9 {
    margin-left: 75%;
  }

  .offset-sm-10 {
    margin-left: 83.33333333%;
  }

  .offset-sm-11 {
    margin-left: 91.66666667%;
  }

  .g-sm-0,
.gx-sm-0 {
    --bs-gutter-x: 0;
  }

  .g-sm-0,
.gy-sm-0 {
    --bs-gutter-y: 0;
  }

  .g-sm-1,
.gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-sm-1,
.gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-sm-2,
.gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-sm-2,
.gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-sm-3,
.gx-sm-3 {
    --bs-gutter-x: 1rem;
  }

  .g-sm-3,
.gy-sm-3 {
    --bs-gutter-y: 1rem;
  }

  .g-sm-4,
.gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-sm-4,
.gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-sm-5,
.gx-sm-5 {
    --bs-gutter-x: 3rem;
  }

  .g-sm-5,
.gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-md-0 {
    margin-left: 0;
  }

  .offset-md-1 {
    margin-left: 8.33333333%;
  }

  .offset-md-2 {
    margin-left: 16.66666667%;
  }

  .offset-md-3 {
    margin-left: 25%;
  }

  .offset-md-4 {
    margin-left: 33.33333333%;
  }

  .offset-md-5 {
    margin-left: 41.66666667%;
  }

  .offset-md-6 {
    margin-left: 50%;
  }

  .offset-md-7 {
    margin-left: 58.33333333%;
  }

  .offset-md-8 {
    margin-left: 66.66666667%;
  }

  .offset-md-9 {
    margin-left: 75%;
  }

  .offset-md-10 {
    margin-left: 83.33333333%;
  }

  .offset-md-11 {
    margin-left: 91.66666667%;
  }

  .g-md-0,
.gx-md-0 {
    --bs-gutter-x: 0;
  }

  .g-md-0,
.gy-md-0 {
    --bs-gutter-y: 0;
  }

  .g-md-1,
.gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-md-1,
.gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-md-2,
.gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-md-2,
.gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-md-3,
.gx-md-3 {
    --bs-gutter-x: 1rem;
  }

  .g-md-3,
.gy-md-3 {
    --bs-gutter-y: 1rem;
  }

  .g-md-4,
.gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-md-4,
.gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-md-5,
.gx-md-5 {
    --bs-gutter-x: 3rem;
  }

  .g-md-5,
.gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-lg-0 {
    margin-left: 0;
  }

  .offset-lg-1 {
    margin-left: 8.33333333%;
  }

  .offset-lg-2 {
    margin-left: 16.66666667%;
  }

  .offset-lg-3 {
    margin-left: 25%;
  }

  .offset-lg-4 {
    margin-left: 33.33333333%;
  }

  .offset-lg-5 {
    margin-left: 41.66666667%;
  }

  .offset-lg-6 {
    margin-left: 50%;
  }

  .offset-lg-7 {
    margin-left: 58.33333333%;
  }

  .offset-lg-8 {
    margin-left: 66.66666667%;
  }

  .offset-lg-9 {
    margin-left: 75%;
  }

  .offset-lg-10 {
    margin-left: 83.33333333%;
  }

  .offset-lg-11 {
    margin-left: 91.66666667%;
  }

  .g-lg-0,
.gx-lg-0 {
    --bs-gutter-x: 0;
  }

  .g-lg-0,
.gy-lg-0 {
    --bs-gutter-y: 0;
  }

  .g-lg-1,
.gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-lg-1,
.gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-lg-2,
.gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-lg-2,
.gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-lg-3,
.gx-lg-3 {
    --bs-gutter-x: 1rem;
  }

  .g-lg-3,
.gy-lg-3 {
    --bs-gutter-y: 1rem;
  }

  .g-lg-4,
.gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-lg-4,
.gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-lg-5,
.gx-lg-5 {
    --bs-gutter-x: 3rem;
  }

  .g-lg-5,
.gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xl-0 {
    margin-left: 0;
  }

  .offset-xl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xl-3 {
    margin-left: 25%;
  }

  .offset-xl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xl-6 {
    margin-left: 50%;
  }

  .offset-xl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xl-9 {
    margin-left: 75%;
  }

  .offset-xl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xl-11 {
    margin-left: 91.66666667%;
  }

  .g-xl-0,
.gx-xl-0 {
    --bs-gutter-x: 0;
  }

  .g-xl-0,
.gy-xl-0 {
    --bs-gutter-y: 0;
  }

  .g-xl-1,
.gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xl-1,
.gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xl-2,
.gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xl-2,
.gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xl-3,
.gx-xl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xl-3,
.gy-xl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xl-4,
.gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xl-4,
.gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xl-5,
.gx-xl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xl-5,
.gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }

  .offset-xxl-0 {
    margin-left: 0;
  }

  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }

  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }

  .offset-xxl-3 {
    margin-left: 25%;
  }

  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }

  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }

  .offset-xxl-6 {
    margin-left: 50%;
  }

  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }

  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }

  .offset-xxl-9 {
    margin-left: 75%;
  }

  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }

  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }

  .g-xxl-0,
.gx-xxl-0 {
    --bs-gutter-x: 0;
  }

  .g-xxl-0,
.gy-xxl-0 {
    --bs-gutter-y: 0;
  }

  .g-xxl-1,
.gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }

  .g-xxl-1,
.gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }

  .g-xxl-2,
.gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }

  .g-xxl-2,
.gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }

  .g-xxl-3,
.gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }

  .g-xxl-3,
.gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }

  .g-xxl-4,
.gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }

  .g-xxl-4,
.gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }

  .g-xxl-5,
.gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }

  .g-xxl-5,
.gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 1px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
.table > tbody {
  vertical-align: inherit;
}
.table > thead {
  vertical-align: bottom;
}
.table > :not(:last-child) > :last-child > * {
  border-bottom-color: currentColor;
}

.caption-top {
  caption-side: top;
}

.table-sm > :not(caption) > * > * {
  padding: 0.25rem 0.25rem;
}

.table-bordered > :not(caption) > * {
  border-width: 1px 0;
}
.table-bordered > :not(caption) > * > * {
  border-width: 0 1px;
}

.table-borderless > :not(caption) > * > * {
  border-bottom-width: 0;
}

.table-striped > tbody > tr:nth-of-type(odd) {
  --bs-table-accent-bg: var(--bs-table-striped-bg);
  color: var(--bs-table-striped-color);
}

.table-active {
  --bs-table-accent-bg: var(--bs-table-active-bg);
  color: var(--bs-table-active-color);
}

.table-hover > tbody > tr:hover {
  --bs-table-accent-bg: var(--bs-table-hover-bg);
  color: var(--bs-table-hover-color);
}

.table-primary {
  --bs-table-bg: #cfe2ff;
  --bs-table-striped-bg: #c5d7f2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bacbe6;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bacbe6;
}

.table-secondary {
  --bs-table-bg: #e2e3e5;
  --bs-table-striped-bg: #d7d8da;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #cbccce;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #d1d2d4;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #cbccce;
}

.table-success {
  --bs-table-bg: #d1e7dd;
  --bs-table-striped-bg: #c7dbd2;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #bcd0c7;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #c1d6cc;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #bcd0c7;
}

.table-info {
  --bs-table-bg: #cff4fc;
  --bs-table-striped-bg: #c5e8ef;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #badce3;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #bfe2e9;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #badce3;
}

.table-warning {
  --bs-table-bg: #fff3cd;
  --bs-table-striped-bg: #f2e7c3;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #e6dbb9;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #ece1be;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #e6dbb9;
}

.table-danger {
  --bs-table-bg: #f8d7da;
  --bs-table-striped-bg: #eccccf;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfc2c4;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5c7ca;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfc2c4;
}

.table-light {
  --bs-table-bg: #f8f9fa;
  --bs-table-striped-bg: #ecedee;
  --bs-table-striped-color: #000;
  --bs-table-active-bg: #dfe0e1;
  --bs-table-active-color: #000;
  --bs-table-hover-bg: #e5e6e7;
  --bs-table-hover-color: #000;
  color: #000;
  border-color: #dfe0e1;
}

.table-dark {
  --bs-table-bg: #212529;
  --bs-table-striped-bg: #2c3034;
  --bs-table-striped-color: #fff;
  --bs-table-active-bg: #373b3e;
  --bs-table-active-color: #fff;
  --bs-table-hover-bg: #323539;
  --bs-table-hover-color: #fff;
  color: #fff;
  border-color: #373b3e;
}

.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 767.98px) {
  .table-responsive-md {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 991.98px) {
  .table-responsive-lg {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1199.98px) {
  .table-responsive-xl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
@media (max-width: 1399.98px) {
  .table-responsive-xxl {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
.form-label {
  margin-bottom: 0.5rem;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.25rem;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.875rem;
}

.form-text {
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #6c757d;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control[type=file] {
  overflow: hidden;
}
.form-control[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-control::-webkit-date-and-time-value {
  height: 1.5em;
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled, .form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}
.form-control::file-selector-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::file-selector-button {
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: #dde0e3;
}
.form-control::-webkit-file-upload-button {
  padding: 0.375rem 0.75rem;
  margin: -0.375rem -0.75rem;
  -webkit-margin-end: 0.75rem;
  margin-inline-end: 0.75rem;
  color: #212529;
  background-color: #e9ecef;
  pointer-events: none;
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  border-inline-end-width: 1px;
  border-radius: 0;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control::-webkit-file-upload-button {
    -webkit-transition: none;
    transition: none;
  }
}
.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {
  background-color: #dde0e3;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  line-height: 1.5;
  color: #212529;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}
.form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  min-height: calc(1.5em + (0.5rem + 2px));
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}
.form-control-sm::-webkit-file-upload-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  -webkit-margin-end: 0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  min-height: calc(1.5em + (1rem + 2px));
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}
.form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: calc(1.5em + (0.75rem + 2px));
}
textarea.form-control-sm {
  min-height: calc(1.5em + (0.5rem + 2px));
}
textarea.form-control-lg {
  min-height: calc(1.5em + (1rem + 2px));
}

.form-control-color {
  max-width: 3rem;
  height: auto;
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}
.form-control-color::-webkit-color-swatch {
  height: 1.5em;
  border-radius: 0.25rem;
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-select {
    transition: none;
  }
}
.form-select:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-select[multiple], .form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  background-color: #e9ecef;
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212529;
}

.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}

.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}

.form-check {
  display: block;
  min-height: 1.5rem;
  padding-left: 1.5em;
  margin-bottom: 0.125rem;
}
.form-check .form-check-input {
  float: left;
  margin-left: -1.5em;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: #0d6efd;
  border-color: #0d6efd;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-range {
  width: 100%;
  height: 1.5rem;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-range:focus {
  outline: 0;
}
.form-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-range::-moz-focus-outer {
  border: 0;
}
.form-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-webkit-slider-thumb {
    -webkit-transition: none;
    transition: none;
  }
}
.form-range::-webkit-slider-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #0d6efd;
  border: 0;
  border-radius: 1rem;
  -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -moz-appearance: none;
  appearance: none;
}
@media (prefers-reduced-motion: reduce) {
  .form-range::-moz-range-thumb {
    -moz-transition: none;
    transition: none;
  }
}
.form-range::-moz-range-thumb:active {
  background-color: #b6d4fe;
}
.form-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}
.form-range:disabled {
  pointer-events: none;
}
.form-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}
.form-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.form-floating {
  position: relative;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
.form-floating > label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-floating > label {
    transition: none;
  }
}
.form-floating > .form-control {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control::-moz-placeholder {
  color: transparent;
}
.form-floating > .form-control::placeholder {
  color: transparent;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:-webkit-autofill {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}
.form-floating > .form-control:not(:-moz-placeholder-shown) ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}
.form-floating > .form-control:-webkit-autofill ~ label {
  opacity: 0.65;
  transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control,
.input-group > .form-select {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.input-group-lg > .form-control,
.input-group-lg > .form-select,
.input-group-lg > .input-group-text,
.input-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.input-group-sm > .form-control,
.input-group-sm > .form-select,
.input-group-sm > .input-group-text,
.input-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.input-group-lg > .form-select,
.input-group-sm > .form-select {
  padding-right: 3rem;
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #198754;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(25, 135, 84, 0.9);
  border-radius: 0.25rem;
}

.was-validated :valid ~ .valid-feedback,
.was-validated :valid ~ .valid-tooltip,
.is-valid ~ .valid-feedback,
.is-valid ~ .valid-tooltip {
  display: block;
}

.was-validated .form-control:valid, .form-control.is-valid {
  border-color: #198754;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:valid:focus, .form-control.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated textarea.form-control:valid, textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:valid, .form-select.is-valid {
  border-color: #198754;
}
.was-validated .form-select:valid:not([multiple]):not([size]), .was-validated .form-select:valid:not([multiple])[size="1"], .form-select.is-valid:not([multiple]):not([size]), .form-select.is-valid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:valid:focus, .form-select.is-valid:focus {
  border-color: #198754;
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}

.was-validated .form-check-input:valid, .form-check-input.is-valid {
  border-color: #198754;
}
.was-validated .form-check-input:valid:checked, .form-check-input.is-valid:checked {
  background-color: #198754;
}
.was-validated .form-check-input:valid:focus, .form-check-input.is-valid:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
}
.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
  color: #198754;
}

.form-check-inline .form-check-input ~ .valid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:valid, .input-group .form-control.is-valid,
.was-validated .input-group .form-select:valid,
.input-group .form-select.is-valid {
  z-index: 1;
}
.was-validated .input-group .form-control:valid:focus, .input-group .form-control.is-valid:focus,
.was-validated .input-group .form-select:valid:focus,
.input-group .form-select.is-valid:focus {
  z-index: 3;
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: 0.1rem;
  font-size: 0.875rem;
  color: #fff;
  background-color: rgba(220, 53, 69, 0.9);
  border-radius: 0.25rem;
}

.was-validated :invalid ~ .invalid-feedback,
.was-validated :invalid ~ .invalid-tooltip,
.is-invalid ~ .invalid-feedback,
.is-invalid ~ .invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid, .form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated textarea.form-control:invalid, textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .form-select:invalid, .form-select.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-select:invalid:not([multiple]):not([size]), .was-validated .form-select:invalid:not([multiple])[size="1"], .form-select.is-invalid:not([multiple]):not([size]), .form-select.is-invalid:not([multiple])[size="1"] {
  padding-right: 4.125rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-position: right 0.75rem center, center right 2.25rem;
  background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
.was-validated .form-select:invalid:focus, .form-select.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}

.was-validated .form-check-input:invalid, .form-check-input.is-invalid {
  border-color: #dc3545;
}
.was-validated .form-check-input:invalid:checked, .form-check-input.is-invalid:checked {
  background-color: #dc3545;
}
.was-validated .form-check-input:invalid:focus, .form-check-input.is-invalid:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);
}
.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
  color: #dc3545;
}

.form-check-inline .form-check-input ~ .invalid-feedback {
  margin-left: 0.5em;
}

.was-validated .input-group .form-control:invalid, .input-group .form-control.is-invalid,
.was-validated .input-group .form-select:invalid,
.input-group .form-select.is-invalid {
  z-index: 2;
}
.was-validated .input-group .form-control:invalid:focus, .input-group .form-control.is-invalid:focus,
.was-validated .input-group .form-select:invalid:focus,
.input-group .form-select.is-invalid:focus {
  z-index: 3;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #212529;
}
.btn-check:focus + .btn, .btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.btn:disabled, .btn.disabled, fieldset:disabled .btn {
  pointer-events: none;
  opacity: 0.65;
}

.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
.btn-check:focus + .btn-primary, .btn-primary:focus {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #0a58ca;
  border-color: #0a53be;
}
.btn-check:checked + .btn-primary:focus, .btn-check:active + .btn-primary:focus, .btn-primary:active:focus, .btn-primary.active:focus, .show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}
.btn-primary:disabled, .btn-primary.disabled {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-secondary:hover {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
}
.btn-check:focus + .btn-secondary, .btn-secondary:focus {
  color: #fff;
  background-color: #5c636a;
  border-color: #565e64;
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-check:checked + .btn-secondary, .btn-check:active + .btn-secondary, .btn-secondary:active, .btn-secondary.active, .show > .btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #565e64;
  border-color: #51585e;
}
.btn-check:checked + .btn-secondary:focus, .btn-check:active + .btn-secondary:focus, .btn-secondary:active:focus, .btn-secondary.active:focus, .show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(130, 138, 145, 0.5);
}
.btn-secondary:disabled, .btn-secondary.disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-success:hover {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
}
.btn-check:focus + .btn-success, .btn-success:focus {
  color: #fff;
  background-color: #157347;
  border-color: #146c43;
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-check:checked + .btn-success, .btn-check:active + .btn-success, .btn-success:active, .btn-success.active, .show > .btn-success.dropdown-toggle {
  color: #fff;
  background-color: #146c43;
  border-color: #13653f;
}
.btn-check:checked + .btn-success:focus, .btn-check:active + .btn-success:focus, .btn-success:active:focus, .btn-success.active:focus, .show > .btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(60, 153, 110, 0.5);
}
.btn-success:disabled, .btn-success.disabled {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}

.btn-info {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-info:hover {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
}
.btn-check:focus + .btn-info, .btn-info:focus {
  color: #000;
  background-color: #31d2f2;
  border-color: #25cff2;
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-check:checked + .btn-info, .btn-check:active + .btn-info, .btn-info:active, .btn-info.active, .show > .btn-info.dropdown-toggle {
  color: #000;
  background-color: #3dd5f3;
  border-color: #25cff2;
}
.btn-check:checked + .btn-info:focus, .btn-check:active + .btn-info:focus, .btn-info:active:focus, .btn-info.active:focus, .show > .btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(11, 172, 204, 0.5);
}
.btn-info:disabled, .btn-info.disabled {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}

.btn-warning {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-warning:hover {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
}
.btn-check:focus + .btn-warning, .btn-warning:focus {
  color: #000;
  background-color: #ffca2c;
  border-color: #ffc720;
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-check:checked + .btn-warning, .btn-check:active + .btn-warning, .btn-warning:active, .btn-warning.active, .show > .btn-warning.dropdown-toggle {
  color: #000;
  background-color: #ffcd39;
  border-color: #ffc720;
}
.btn-check:checked + .btn-warning:focus, .btn-check:active + .btn-warning:focus, .btn-warning:active:focus, .btn-warning.active:focus, .show > .btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(217, 164, 6, 0.5);
}
.btn-warning:disabled, .btn-warning.disabled {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
}
.btn-check:focus + .btn-danger, .btn-danger:focus {
  color: #fff;
  background-color: #bb2d3b;
  border-color: #b02a37;
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-check:checked + .btn-danger, .btn-check:active + .btn-danger, .btn-danger:active, .btn-danger.active, .show > .btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #b02a37;
  border-color: #a52834;
}
.btn-check:checked + .btn-danger:focus, .btn-check:active + .btn-danger:focus, .btn-danger:active:focus, .btn-danger.active:focus, .show > .btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(225, 83, 97, 0.5);
}
.btn-danger:disabled, .btn-danger.disabled {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-light {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-light:hover {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:focus + .btn-light, .btn-light:focus {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-check:checked + .btn-light, .btn-check:active + .btn-light, .btn-light:active, .btn-light.active, .show > .btn-light.dropdown-toggle {
  color: #000;
  background-color: #f9fafb;
  border-color: #f9fafb;
}
.btn-check:checked + .btn-light:focus, .btn-check:active + .btn-light:focus, .btn-light:active:focus, .btn-light.active:focus, .show > .btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(211, 212, 213, 0.5);
}
.btn-light:disabled, .btn-light.disabled {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-dark {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-dark:hover {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
}
.btn-check:focus + .btn-dark, .btn-dark:focus {
  color: #fff;
  background-color: #1c1f23;
  border-color: #1a1e21;
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-check:checked + .btn-dark, .btn-check:active + .btn-dark, .btn-dark:active, .btn-dark.active, .show > .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #1a1e21;
  border-color: #191c1f;
}
.btn-check:checked + .btn-dark:focus, .btn-check:active + .btn-dark:focus, .btn-dark:active:focus, .btn-dark.active:focus, .show > .btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.25rem rgba(66, 70, 73, 0.5);
}
.btn-dark:disabled, .btn-dark.disabled {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}

.btn-outline-primary {
  color: #0d6efd;
  border-color: #0d6efd;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:focus + .btn-outline-primary, .btn-outline-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-check:checked + .btn-outline-primary, .btn-check:active + .btn-outline-primary, .btn-outline-primary:active, .btn-outline-primary.active, .btn-outline-primary.dropdown-toggle.show {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-check:checked + .btn-outline-primary:focus, .btn-check:active + .btn-outline-primary:focus, .btn-outline-primary:active:focus, .btn-outline-primary.active:focus, .btn-outline-primary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.5);
}
.btn-outline-primary:disabled, .btn-outline-primary.disabled {
  color: #0d6efd;
  background-color: transparent;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}
.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:focus + .btn-outline-secondary, .btn-outline-secondary:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-check:checked + .btn-outline-secondary, .btn-check:active + .btn-outline-secondary, .btn-outline-secondary:active, .btn-outline-secondary.active, .btn-outline-secondary.dropdown-toggle.show {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-check:checked + .btn-outline-secondary:focus, .btn-check:active + .btn-outline-secondary:focus, .btn-outline-secondary:active:focus, .btn-outline-secondary.active:focus, .btn-outline-secondary.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.5);
}
.btn-outline-secondary:disabled, .btn-outline-secondary.disabled {
  color: #6c757d;
  background-color: transparent;
}

.btn-outline-success {
  color: #198754;
  border-color: #198754;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:focus + .btn-outline-success, .btn-outline-success:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-check:checked + .btn-outline-success, .btn-check:active + .btn-outline-success, .btn-outline-success:active, .btn-outline-success.active, .btn-outline-success.dropdown-toggle.show {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.btn-check:checked + .btn-outline-success:focus, .btn-check:active + .btn-outline-success:focus, .btn-outline-success:active:focus, .btn-outline-success.active:focus, .btn-outline-success.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.5);
}
.btn-outline-success:disabled, .btn-outline-success.disabled {
  color: #198754;
  background-color: transparent;
}

.btn-outline-info {
  color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-outline-info:hover {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:focus + .btn-outline-info, .btn-outline-info:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-check:checked + .btn-outline-info, .btn-check:active + .btn-outline-info, .btn-outline-info:active, .btn-outline-info.active, .btn-outline-info.dropdown-toggle.show {
  color: #000;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
.btn-check:checked + .btn-outline-info:focus, .btn-check:active + .btn-outline-info:focus, .btn-outline-info:active:focus, .btn-outline-info.active:focus, .btn-outline-info.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(13, 202, 240, 0.5);
}
.btn-outline-info:disabled, .btn-outline-info.disabled {
  color: #0dcaf0;
  background-color: transparent;
}

.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
}
.btn-outline-warning:hover {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:focus + .btn-outline-warning, .btn-outline-warning:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-check:checked + .btn-outline-warning, .btn-check:active + .btn-outline-warning, .btn-outline-warning:active, .btn-outline-warning.active, .btn-outline-warning.dropdown-toggle.show {
  color: #000;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-check:checked + .btn-outline-warning:focus, .btn-check:active + .btn-outline-warning:focus, .btn-outline-warning:active:focus, .btn-outline-warning.active:focus, .btn-outline-warning.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.5);
}
.btn-outline-warning:disabled, .btn-outline-warning.disabled {
  color: #ffc107;
  background-color: transparent;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
}
.btn-outline-danger:hover {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:focus + .btn-outline-danger, .btn-outline-danger:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-check:checked + .btn-outline-danger, .btn-check:active + .btn-outline-danger, .btn-outline-danger:active, .btn-outline-danger.active, .btn-outline-danger.dropdown-toggle.show {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-check:checked + .btn-outline-danger:focus, .btn-check:active + .btn-outline-danger:focus, .btn-outline-danger:active:focus, .btn-outline-danger.active:focus, .btn-outline-danger.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.5);
}
.btn-outline-danger:disabled, .btn-outline-danger.disabled {
  color: #dc3545;
  background-color: transparent;
}

.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-outline-light:hover {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:focus + .btn-outline-light, .btn-outline-light:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-check:checked + .btn-outline-light, .btn-check:active + .btn-outline-light, .btn-outline-light:active, .btn-outline-light.active, .btn-outline-light.dropdown-toggle.show {
  color: #000;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-check:checked + .btn-outline-light:focus, .btn-check:active + .btn-outline-light:focus, .btn-outline-light:active:focus, .btn-outline-light.active:focus, .btn-outline-light.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(248, 249, 250, 0.5);
}
.btn-outline-light:disabled, .btn-outline-light.disabled {
  color: #f8f9fa;
  background-color: transparent;
}

.btn-outline-dark {
  color: #212529;
  border-color: #212529;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:focus + .btn-outline-dark, .btn-outline-dark:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-check:checked + .btn-outline-dark, .btn-check:active + .btn-outline-dark, .btn-outline-dark:active, .btn-outline-dark.active, .btn-outline-dark.dropdown-toggle.show {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
.btn-check:checked + .btn-outline-dark:focus, .btn-check:active + .btn-outline-dark:focus, .btn-outline-dark:active:focus, .btn-outline-dark.active:focus, .btn-outline-dark.dropdown-toggle.show:focus {
  box-shadow: 0 0 0 0.25rem rgba(33, 37, 41, 0.5);
}
.btn-outline-dark:disabled, .btn-outline-dark.disabled {
  color: #212529;
  background-color: transparent;
}

.btn-link {
  font-weight: 400;
  color: #0d6efd;
  text-decoration: underline;
}
.btn-link:hover {
  color: #0a58ca;
}
.btn-link:disabled, .btn-link.disabled {
  color: #6c757d;
}

.btn-lg, .btn-group-lg > .btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    transition: none;
  }
}

.dropup,
.dropend,
.dropdown,
.dropstart {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: 0.125rem;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }

  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:hover, .dropdown-item:focus {
  color: #1e2125;
  background-color: #e9ecef;
}
.dropdown-item.active, .dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #0d6efd;
}
.dropdown-item.disabled, .dropdown-item:disabled {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1rem;
  color: #212529;
}

.dropdown-menu-dark {
  color: #dee2e6;
  background-color: #343a40;
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-item:hover, .dropdown-menu-dark .dropdown-item:focus {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.dropdown-menu-dark .dropdown-item.active, .dropdown-menu-dark .dropdown-item:active {
  color: #fff;
  background-color: #0d6efd;
}
.dropdown-menu-dark .dropdown-item.disabled, .dropdown-menu-dark .dropdown-item:disabled {
  color: #adb5bd;
}
.dropdown-menu-dark .dropdown-divider {
  border-color: rgba(0, 0, 0, 0.15);
}
.dropdown-menu-dark .dropdown-item-text {
  color: #dee2e6;
}
.dropdown-menu-dark .dropdown-header {
  color: #adb5bd;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
}
.btn-group > .btn-check:checked + .btn,
.btn-group > .btn-check:focus + .btn,
.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn-check:checked + .btn,
.btn-group-vertical > .btn-check:focus + .btn,
.btn-group-vertical > .btn:hover,
.btn-group-vertical > .btn:focus,
.btn-group-vertical > .btn:active,
.btn-group-vertical > .btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.btn-toolbar .input-group {
  width: auto;
}

.btn-group > .btn:not(:first-child),
.btn-group > .btn-group:not(:first-child) {
  margin-left: -1px;
}
.btn-group > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group > .btn-group:not(:last-child) > .btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-group > .btn:nth-child(n+3),
.btn-group > :not(.btn-check) + .btn,
.btn-group > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}
.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropend .dropdown-toggle-split::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group {
  width: 100%;
}
.btn-group-vertical > .btn:not(:first-child),
.btn-group-vertical > .btn-group:not(:first-child) {
  margin-top: -1px;
}
.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn ~ .btn,
.btn-group-vertical > .btn-group:not(:first-child) > .btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .nav-link {
    transition: none;
  }
}
.nav-link:hover, .nav-link:focus {
  color: #0a58ca;
}
.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  border-bottom: 1px solid #dee2e6;
}
.nav-tabs .nav-link {
  margin-bottom: -1px;
  background: none;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
  isolation: isolate;
}
.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.25rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #0d6efd;
}

.nav-fill > .nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified > .nav-link,
.nav-justified .nav-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-fill .nav-item .nav-link,
.nav-justified .nav-item .nav-link {
  width: 100%;
}

.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}
.navbar-nav .dropdown-menu {
  position: static;
}

.navbar-text {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .navbar-toggler {
    transition: none;
  }
}
.navbar-toggler:hover {
  text-decoration: none;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: 0 0 0 0.25rem;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.navbar-nav-scroll {
  max-height: var(--bs-scroll-height, 75vh);
  overflow-y: auto;
}

@media (min-width: 576px) {
  .navbar-expand-sm {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-sm .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-sm .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
    display: none;
  }
}
@media (min-width: 768px) {
  .navbar-expand-md {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-md .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-md .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
    display: none;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-lg .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1200px) {
  .navbar-expand-xl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
    display: none;
  }
}
@media (min-width: 1400px) {
  .navbar-expand-xxl {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
    flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
    position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }
  .navbar-expand-xxl .navbar-nav-scroll {
    overflow: visible;
  }
  .navbar-expand-xxl .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
    display: none;
  }
}
.navbar-expand {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
.navbar-expand .navbar-nav {
  flex-direction: row;
}
.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}
.navbar-expand .navbar-nav-scroll {
  overflow: visible;
}
.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}
.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}
.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}
.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.55);
  border-color: rgba(0, 0, 0, 0.1);
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.55);
}
.navbar-light .navbar-text a,
.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}
.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}
.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.55);
  border-color: rgba(255, 255, 255, 0.1);
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.55);
}
.navbar-dark .navbar-text a,
.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: #fff;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card > hr {
  margin-right: 0;
  margin-left: 0;
}
.card > .list-group {
  border-top: inherit;
  border-bottom: inherit;
}
.card > .list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.card > .list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.card > .card-header + .list-group,
.card > .list-group + .card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-subtitle {
  margin-top: -0.25rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}
.card-link + .card-link {
  margin-left: 1rem;
}

.card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}
.card-footer:last-child {
  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
  margin-left: -0.5rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.5rem;
  margin-left: -0.5rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  border-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}

.card-group > .card {
  margin-bottom: 0.75rem;
}
@media (min-width: 576px) {
  .card-group {
    display: flex;
    flex-flow: row wrap;
  }
  .card-group > .card {
    flex: 1 0 0%;
    margin-bottom: 0;
  }
  .card-group > .card + .card {
    margin-left: 0;
    border-left: 0;
  }
  .card-group > .card:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-top,
.card-group > .card:not(:last-child) .card-header {
    border-top-right-radius: 0;
  }
  .card-group > .card:not(:last-child) .card-img-bottom,
.card-group > .card:not(:last-child) .card-footer {
    border-bottom-right-radius: 0;
  }
  .card-group > .card:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-top,
.card-group > .card:not(:first-child) .card-header {
    border-top-left-radius: 0;
  }
  .card-group > .card:not(:first-child) .card-img-bottom,
.card-group > .card:not(:first-child) .card-footer {
    border-bottom-left-radius: 0;
  }
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  color: #0c63e4;
  background-color: #e7f1ff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-180deg);
}
.accordion-button::after {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.accordion-item:first-of-type {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.accordion-body {
  padding: 1rem 1.25rem;
}

.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button {
  border-radius: 0;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0;
  margin-bottom: 1rem;
  list-style: none;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;
  color: #6c757d;
  content: var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */;
}
.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
}

.page-link {
  position: relative;
  display: block;
  color: #0d6efd;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #dee2e6;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .page-link {
    transition: none;
  }
}
.page-link:hover {
  z-index: 2;
  color: #0a58ca;
  background-color: #e9ecef;
  border-color: #dee2e6;
}
.page-link:focus {
  z-index: 3;
  color: #0a58ca;
  background-color: #e9ecef;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.page-item:not(:first-child) .page-link {
  margin-left: -1px;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-link {
  padding: 0.375rem 0.75rem;
}

.page-item:first-child .page-link {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}
.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}
.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.alert {
  position: relative;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 3rem;
}
.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1.25rem 1rem;
}

.alert-primary {
  color: #084298;
  background-color: #cfe2ff;
  border-color: #b6d4fe;
}
.alert-primary .alert-link {
  color: #06357a;
}

.alert-secondary {
  color: #41464b;
  background-color: #e2e3e5;
  border-color: #d3d6d8;
}
.alert-secondary .alert-link {
  color: #34383c;
}

.alert-success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}
.alert-success .alert-link {
  color: #0c4128;
}

.alert-info {
  color: #055160;
  background-color: #cff4fc;
  border-color: #b6effb;
}
.alert-info .alert-link {
  color: #04414d;
}

.alert-warning {
  color: #664d03;
  background-color: #fff3cd;
  border-color: #ffecb5;
}
.alert-warning .alert-link {
  color: #523e02;
}

.alert-danger {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}
.alert-danger .alert-link {
  color: #6a1a21;
}

.alert-light {
  color: #636464;
  background-color: #fefefe;
  border-color: #fdfdfe;
}
.alert-light .alert-link {
  color: #4f5050;
}

.alert-dark {
  color: #141619;
  background-color: #d3d3d4;
  border-color: #bcbebf;
}
.alert-dark .alert-link {
  color: #101214;
}

@-webkit-keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #0d6efd;
  transition: width 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  -webkit-animation: 1s linear infinite progress-bar-stripes;
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    -webkit-animation: none;
    animation: none;
  }
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}

.list-group-numbered {
  list-style-type: none;
  counter-reset: section;
}
.list-group-numbered > li::before {
  content: counters(section, ".") ". ";
  counter-increment: section;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}
.list-group-item-action:hover, .list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}
.list-group-item-action:active {
  color: #212529;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}
.list-group-item.disabled, .list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}
.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.list-group-item + .list-group-item {
  border-top-width: 0;
}
.list-group-item + .list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}
.list-group-horizontal > .list-group-item:first-child {
  border-bottom-left-radius: 0.25rem;
  border-top-right-radius: 0;
}
.list-group-horizontal > .list-group-item:last-child {
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0;
}
.list-group-horizontal > .list-group-item.active {
  margin-top: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}
.list-group-horizontal > .list-group-item + .list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
    flex-direction: row;
  }
  .list-group-horizontal-sm > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 768px) {
  .list-group-horizontal-md {
    flex-direction: row;
  }
  .list-group-horizontal-md > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-md > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 992px) {
  .list-group-horizontal-lg {
    flex-direction: row;
  }
  .list-group-horizontal-lg > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1200px) {
  .list-group-horizontal-xl {
    flex-direction: row;
  }
  .list-group-horizontal-xl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
@media (min-width: 1400px) {
  .list-group-horizontal-xxl {
    flex-direction: row;
  }
  .list-group-horizontal-xxl > .list-group-item:first-child {
    border-bottom-left-radius: 0.25rem;
    border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item:last-child {
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl > .list-group-item.active {
    margin-top: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }
  .list-group-horizontal-xxl > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }
}
.list-group-flush {
  border-radius: 0;
}
.list-group-flush > .list-group-item {
  border-width: 0 0 1px;
}
.list-group-flush > .list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #084298;
  background-color: #cfe2ff;
}
.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
  color: #084298;
  background-color: #bacbe6;
}
.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #084298;
  border-color: #084298;
}

.list-group-item-secondary {
  color: #41464b;
  background-color: #e2e3e5;
}
.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
  color: #41464b;
  background-color: #cbccce;
}
.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #41464b;
  border-color: #41464b;
}

.list-group-item-success {
  color: #0f5132;
  background-color: #d1e7dd;
}
.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
  color: #0f5132;
  background-color: #bcd0c7;
}
.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #0f5132;
  border-color: #0f5132;
}

.list-group-item-info {
  color: #055160;
  background-color: #cff4fc;
}
.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
  color: #055160;
  background-color: #badce3;
}
.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #055160;
  border-color: #055160;
}

.list-group-item-warning {
  color: #664d03;
  background-color: #fff3cd;
}
.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
  color: #664d03;
  background-color: #e6dbb9;
}
.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #664d03;
  border-color: #664d03;
}

.list-group-item-danger {
  color: #842029;
  background-color: #f8d7da;
}
.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
  color: #842029;
  background-color: #dfc2c4;
}
.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #842029;
  border-color: #842029;
}

.list-group-item-light {
  color: #636464;
  background-color: #fefefe;
}
.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
  color: #636464;
  background-color: #e5e5e5;
}
.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #636464;
  border-color: #636464;
}

.list-group-item-dark {
  color: #141619;
  background-color: #d3d3d4;
}
.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
  color: #141619;
  background-color: #bebebf;
}
.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #141619;
  border-color: #141619;
}

.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
}
.btn-close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.btn-close:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  opacity: 1;
}
.btn-close:disabled, .btn-close.disabled {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  opacity: 0.25;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.toast {
  width: 350px;
  max-width: 100%;
  font-size: 0.875rem;
  pointer-events: auto;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}
.toast:not(.showing):not(.show) {
  opacity: 0;
}
.toast.hide {
  display: none;
}

.toast-container {
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  max-width: 100%;
  pointer-events: none;
}
.toast-container > :not(:last-child) {
  margin-bottom: 0.75rem;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}
.toast-header .btn-close {
  margin-right: -0.375rem;
  margin-left: 0.75rem;
}

.toast-body {
  padding: 0.75rem;
  word-wrap: break-word;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal.show .modal-dialog {
  transform: none;
}
.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  height: calc(100% - 1rem);
}
.modal-dialog-scrollable .modal-content {
  max-height: 100%;
  overflow: hidden;
}
.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
}
.modal-backdrop.show {
  opacity: 0.5;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin: -0.5rem -0.5rem -0.5rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-footer > * {
  margin: 0.25rem;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }

  .modal-dialog-scrollable {
    height: calc(100% - 3.5rem);
  }

  .modal-dialog-centered {
    min-height: calc(100% - 3.5rem);
  }

  .modal-sm {
    max-width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg,
.modal-xl {
    max-width: 800px;
  }
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1140px;
  }
}
.modal-fullscreen {
  width: 100vw;
  max-width: none;
  height: 100%;
  margin: 0;
}
.modal-fullscreen .modal-content {
  height: 100%;
  border: 0;
  border-radius: 0;
}
.modal-fullscreen .modal-header {
  border-radius: 0;
}
.modal-fullscreen .modal-body {
  overflow-y: auto;
}
.modal-fullscreen .modal-footer {
  border-radius: 0;
}

@media (max-width: 575.98px) {
  .modal-fullscreen-sm-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-sm-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-sm-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-sm-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 767.98px) {
  .modal-fullscreen-md-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-md-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-md-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-md-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 991.98px) {
  .modal-fullscreen-lg-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-lg-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-lg-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-lg-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1199.98px) {
  .modal-fullscreen-xl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xl-down .modal-footer {
    border-radius: 0;
  }
}
@media (max-width: 1399.98px) {
  .modal-fullscreen-xxl-down {
    width: 100vw;
    max-width: none;
    height: 100%;
    margin: 0;
  }
  .modal-fullscreen-xxl-down .modal-content {
    height: 100%;
    border: 0;
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-header {
    border-radius: 0;
  }
  .modal-fullscreen-xxl-down .modal-body {
    overflow-y: auto;
  }
  .modal-fullscreen-xxl-down .modal-footer {
    border-radius: 0;
  }
}
.tooltip {
  position: absolute;
  z-index: 1080;
  display: block;
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0;
}
.tooltip.show {
  opacity: 0.9;
}
.tooltip .tooltip-arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}
.tooltip .tooltip-arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top, .bs-tooltip-auto[data-popper-placement^=top] {
  padding: 0.4rem 0;
}
.bs-tooltip-top .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow {
  bottom: 0;
}
.bs-tooltip-top .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before {
  top: -1px;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-end, .bs-tooltip-auto[data-popper-placement^=right] {
  padding: 0 0.4rem;
}
.bs-tooltip-end .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-end .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before {
  right: -1px;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom, .bs-tooltip-auto[data-popper-placement^=bottom] {
  padding: 0.4rem 0;
}
.bs-tooltip-bottom .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow {
  top: 0;
}
.bs-tooltip-bottom .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before {
  bottom: -1px;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-start, .bs-tooltip-auto[data-popper-placement^=left] {
  padding: 0 0.4rem;
}
.bs-tooltip-start .tooltip-arrow, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}
.bs-tooltip-start .tooltip-arrow::before, .bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before {
  left: -1px;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0 /* rtl:ignore */;
  z-index: 1070;
  display: block;
  max-width: 276px;
  font-family: var(--bs-font-sans-serif);
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}
.popover .popover-arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
}
.popover .popover-arrow::before, .popover .popover-arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top > .popover-arrow, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow {
  bottom: calc(-0.5rem - 1px);
}
.bs-popover-top > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-top > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=top] > .popover-arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-end > .popover-arrow, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-end > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-end > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=right] > .popover-arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom > .popover-arrow, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow {
  top: calc(-0.5rem - 1px);
}
.bs-popover-bottom > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-bottom > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=bottom] > .popover-arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}
.bs-popover-bottom .popover-header::before, .bs-popover-auto[data-popper-placement^=bottom] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f0f0f0;
}

.bs-popover-start > .popover-arrow, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
}
.bs-popover-start > .popover-arrow::before, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.bs-popover-start > .popover-arrow::after, .bs-popover-auto[data-popper-placement^=left] > .popover-arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 1rem 1rem;
  color: #212529;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-item {
    transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

/* rtl:begin:ignore */
.carousel-item-next:not(.carousel-item-start),
.active.carousel-item-end {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-end),
.active.carousel-item-start {
  transform: translateX(-100%);
}

/* rtl:end:ignore */
.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}
.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-start,
.carousel-fade .carousel-item-prev.carousel-item-end {
  z-index: 1;
  opacity: 1;
}
.carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-start,
.carousel-fade .active.carousel-item-end {
    transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
.carousel-control-next {
    transition: none;
  }
}
.carousel-control-prev:hover, .carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

/* rtl:options: {
  "autoRename": true,
  "stringMap":[ {
    "name"    : "prev-next",
    "search"  : "prev",
    "replace" : "next"
  } ]
} */
.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-right: 15%;
  margin-bottom: 1rem;
  margin-left: 15%;
  list-style: none;
}
.carousel-indicators [data-bs-target] {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
}
@media (prefers-reduced-motion: reduce) {
  .carousel-indicators [data-bs-target] {
    transition: none;
  }
}
.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 1.25rem;
  left: 15%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #fff;
  text-align: center;
}

.carousel-dark .carousel-control-prev-icon,
.carousel-dark .carousel-control-next-icon {
  filter: invert(1) grayscale(100);
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #000;
}
.carousel-dark .carousel-caption {
  color: #000;
}

@-webkit-keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg) /* rtl:ignore */;
  }
}
.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: 0.75s linear infinite spinner-border;
  animation: 0.75s linear infinite spinner-border;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@-webkit-keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: -0.125em;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: 0.75s linear infinite spinner-grow;
  animation: 0.75s linear infinite spinner-grow;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .spinner-border,
.spinner-grow {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }
}
.offcanvas {
  position: fixed;
  bottom: 0;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  visibility: hidden;
  background-color: #fff;
  background-clip: padding-box;
  outline: 0;
  transition: transform 0.3s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .offcanvas {
    transition: none;
  }
}

.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
}
.offcanvas-header .btn-close {
  padding: 0.5rem 0.5rem;
  margin-top: -0.5rem;
  margin-right: -0.5rem;
  margin-bottom: -0.5rem;
}

.offcanvas-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.offcanvas-body {
  flex-grow: 1;
  padding: 1rem 1rem;
  overflow-y: auto;
}

.offcanvas-start {
  top: 0;
  left: 0;
  width: 400px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
}

.offcanvas-end {
  top: 0;
  right: 0;
  width: 400px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
}

.offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(-100%);
}

.offcanvas-bottom {
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  transform: translateY(100%);
}

.offcanvas.show {
  transform: none;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.link-primary {
  color: #0d6efd;
}
.link-primary:hover, .link-primary:focus {
  color: #0a58ca;
}

.link-secondary {
  color: #6c757d;
}
.link-secondary:hover, .link-secondary:focus {
  color: #565e64;
}

.link-success {
  color: #198754;
}
.link-success:hover, .link-success:focus {
  color: #146c43;
}

.link-info {
  color: #0dcaf0;
}
.link-info:hover, .link-info:focus {
  color: #3dd5f3;
}

.link-warning {
  color: #ffc107;
}
.link-warning:hover, .link-warning:focus {
  color: #ffcd39;
}

.link-danger {
  color: #dc3545;
}
.link-danger:hover, .link-danger:focus {
  color: #b02a37;
}

.link-light {
  color: #f8f9fa;
}
.link-light:hover, .link-light:focus {
  color: #f9fafb;
}

.link-dark {
  color: #212529;
}
.link-dark:hover, .link-dark:focus {
  color: #1a1e21;
}

.ratio {
  position: relative;
  width: 100%;
}
.ratio::before {
  display: block;
  padding-top: var(--bs-aspect-ratio);
  content: "";
}
.ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ratio-1x1 {
  --bs-aspect-ratio: 100%;
}

.ratio-4x3 {
  --bs-aspect-ratio: calc(3 / 4 * 100%);
}

.ratio-16x9 {
  --bs-aspect-ratio: calc(9 / 16 * 100%);
}

.ratio-21x9 {
  --bs-aspect-ratio: calc(9 / 21 * 100%);
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1020;
}

@media (min-width: 576px) {
  .sticky-sm-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 768px) {
  .sticky-md-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 992px) {
  .sticky-lg-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1200px) {
  .sticky-xl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
@media (min-width: 1400px) {
  .sticky-xxl-top {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
  }
}
.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  content: "";
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.float-start {
  float: left !important;
}

.float-end {
  float: right !important;
}

.float-none {
  float: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.overflow-visible {
  overflow: visible !important;
}

.overflow-scroll {
  overflow: scroll !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-grid {
  display: grid !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

.d-none {
  display: none !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
}

.top-0 {
  top: 0 !important;
}

.top-50 {
  top: 50% !important;
}

.top-100 {
  top: 100% !important;
}

.bottom-0 {
  bottom: 0 !important;
}

.bottom-50 {
  bottom: 50% !important;
}

.bottom-100 {
  bottom: 100% !important;
}

.start-0 {
  left: 0 !important;
}

.start-50 {
  left: 50% !important;
}

.start-100 {
  left: 100% !important;
}

.end-0 {
  right: 0 !important;
}

.end-50 {
  right: 50% !important;
}

.end-100 {
  right: 100% !important;
}

.translate-middle {
  transform: translate(-50%, -50%) !important;
}

.translate-middle-x {
  transform: translateX(-50%) !important;
}

.translate-middle-y {
  transform: translateY(-50%) !important;
}

.border {
  border: 1px solid #dee2e6 !important;
}

.border-0 {
  border: 0 !important;
}

.border-top {
  border-top: 1px solid #dee2e6 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-end {
  border-right: 1px solid #dee2e6 !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-start {
  border-left: 1px solid #dee2e6 !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #0d6efd !important;
}

.border-secondary {
  border-color: #6c757d !important;
}

.border-success {
  border-color: #198754 !important;
}

.border-info {
  border-color: #0dcaf0 !important;
}

.border-warning {
  border-color: #ffc107 !important;
}

.border-danger {
  border-color: #dc3545 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.border-dark {
  border-color: #212529 !important;
}

.border-white {
  border-color: #fff !important;
}

.border-1 {
  border-width: 1px !important;
}

.border-2 {
  border-width: 2px !important;
}

.border-3 {
  border-width: 3px !important;
}

.border-4 {
  border-width: 4px !important;
}

.border-5 {
  border-width: 5px !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.vw-100 {
  width: 100vw !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mh-100 {
  max-height: 100% !important;
}

.vh-100 {
  height: 100vh !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.gap-0 {
  gap: 0 !important;
}

.gap-1 {
  gap: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}

.gap-4 {
  gap: 1.5rem !important;
}

.gap-5 {
  gap: 3rem !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.justify-content-evenly {
  justify-content: space-evenly !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

.order-first {
  order: -1 !important;
}

.order-0 {
  order: 0 !important;
}

.order-1 {
  order: 1 !important;
}

.order-2 {
  order: 2 !important;
}

.order-3 {
  order: 3 !important;
}

.order-4 {
  order: 4 !important;
}

.order-5 {
  order: 5 !important;
}

.order-last {
  order: 6 !important;
}

.m-0 {
  margin: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;
}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}

.mx-3 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;
}

.mx-4 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;
}

.mx-5 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;
}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.my-4 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.my-5 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;
}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mt-1 {
  margin-top: 0.25rem !important;
}

.mt-2 {
  margin-top: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mt-auto {
  margin-top: auto !important;
}

.me-0 {
  margin-right: 0 !important;
}

.me-1 {
  margin-right: 0.25rem !important;
}

.me-2 {
  margin-right: 0.5rem !important;
}

.me-3 {
  margin-right: 1rem !important;
}

.me-4 {
  margin-right: 1.5rem !important;
}

.me-5 {
  margin-right: 3rem !important;
}

.me-auto {
  margin-right: auto !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-3 {
  margin-bottom: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mb-auto {
  margin-bottom: auto !important;
}

.ms-0 {
  margin-left: 0 !important;
}

.ms-1 {
  margin-left: 0.25rem !important;
}

.ms-2 {
  margin-left: 0.5rem !important;
}

.ms-3 {
  margin-left: 1rem !important;
}

.ms-4 {
  margin-left: 1.5rem !important;
}

.ms-5 {
  margin-left: 3rem !important;
}

.ms-auto {
  margin-left: auto !important;
}

.p-0 {
  padding: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;
}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.px-5 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;
}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pt-1 {
  padding-top: 0.25rem !important;
}

.pt-2 {
  padding-top: 0.5rem !important;
}

.pt-3 {
  padding-top: 1rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pe-0 {
  padding-right: 0 !important;
}

.pe-1 {
  padding-right: 0.25rem !important;
}

.pe-2 {
  padding-right: 0.5rem !important;
}

.pe-3 {
  padding-right: 1rem !important;
}

.pe-4 {
  padding-right: 1.5rem !important;
}

.pe-5 {
  padding-right: 3rem !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pb-1 {
  padding-bottom: 0.25rem !important;
}

.pb-2 {
  padding-bottom: 0.5rem !important;
}

.pb-3 {
  padding-bottom: 1rem !important;
}

.pb-4 {
  padding-bottom: 1.5rem !important;
}

.pb-5 {
  padding-bottom: 3rem !important;
}

.ps-0 {
  padding-left: 0 !important;
}

.ps-1 {
  padding-left: 0.25rem !important;
}

.ps-2 {
  padding-left: 0.5rem !important;
}

.ps-3 {
  padding-left: 1rem !important;
}

.ps-4 {
  padding-left: 1.5rem !important;
}

.ps-5 {
  padding-left: 3rem !important;
}

.font-monospace {
  font-family: var(--bs-font-monospace) !important;
}

.fs-1 {
  font-size: calc(1.375rem + 1.5vw) !important;
}

.fs-2 {
  font-size: calc(1.325rem + 0.9vw) !important;
}

.fs-3 {
  font-size: calc(1.3rem + 0.6vw) !important;
}

.fs-4 {
  font-size: calc(1.275rem + 0.3vw) !important;
}

.fs-5 {
  font-size: 1.25rem !important;
}

.fs-6 {
  font-size: 1rem !important;
}

.fst-italic {
  font-style: italic !important;
}

.fst-normal {
  font-style: normal !important;
}

.fw-light {
  font-weight: 300 !important;
}

.fw-lighter {
  font-weight: lighter !important;
}

.fw-normal {
  font-weight: 400 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.fw-bolder {
  font-weight: bolder !important;
}

.lh-1 {
  line-height: 1 !important;
}

.lh-sm {
  line-height: 1.25 !important;
}

.lh-base {
  line-height: 1.5 !important;
}

.lh-lg {
  line-height: 2 !important;
}

.text-start {
  text-align: left !important;
}

.text-end {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-decoration-underline {
  text-decoration: underline !important;
}

.text-decoration-line-through {
  text-decoration: line-through !important;
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* rtl:begin:remove */
.text-break {
  word-wrap: break-word !important;
  word-break: break-word !important;
}

/* rtl:end:remove */
.text-primary {
  color: #0d6efd !important;
}

.text-secondary {
  color: #6c757d !important;
}

.text-success {
  color: #198754 !important;
}

.text-info {
  color: #0dcaf0 !important;
}

.text-warning {
  color: #ffc107 !important;
}

.text-danger {
  color: #dc3545 !important;
}

.text-light {
  color: #f8f9fa !important;
}

.text-dark {
  color: #212529 !important;
}

.text-white {
  color: #fff !important;
}

.text-body {
  color: #212529 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-reset {
  color: inherit !important;
}

.bg-primary {
  background-color: #0d6efd !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}

.bg-success {
  background-color: #198754 !important;
}

.bg-info {
  background-color: #0dcaf0 !important;
}

.bg-warning {
  background-color: #ffc107 !important;
}

.bg-danger {
  background-color: #dc3545 !important;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.bg-dark {
  background-color: #212529 !important;
}

.bg-body {
  background-color: #fff !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.bg-gradient {
  background-image: var(--bs-gradient) !important;
}

.user-select-all {
  -webkit-user-select: all !important;
  -moz-user-select: all !important;
  user-select: all !important;
}

.user-select-auto {
  -webkit-user-select: auto !important;
  -moz-user-select: auto !important;
  user-select: auto !important;
}

.user-select-none {
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  user-select: none !important;
}

.pe-none {
  pointer-events: none !important;
}

.pe-auto {
  pointer-events: auto !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.rounded-1 {
  border-radius: 0.2rem !important;
}

.rounded-2 {
  border-radius: 0.25rem !important;
}

.rounded-3 {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-top {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

.rounded-end {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-start {
  border-bottom-left-radius: 0.25rem !important;
  border-top-left-radius: 0.25rem !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media (min-width: 576px) {
  .float-sm-start {
    float: left !important;
  }

  .float-sm-end {
    float: right !important;
  }

  .float-sm-none {
    float: none !important;
  }

  .d-sm-inline {
    display: inline !important;
  }

  .d-sm-inline-block {
    display: inline-block !important;
  }

  .d-sm-block {
    display: block !important;
  }

  .d-sm-grid {
    display: grid !important;
  }

  .d-sm-table {
    display: table !important;
  }

  .d-sm-table-row {
    display: table-row !important;
  }

  .d-sm-table-cell {
    display: table-cell !important;
  }

  .d-sm-flex {
    display: flex !important;
  }

  .d-sm-inline-flex {
    display: inline-flex !important;
  }

  .d-sm-none {
    display: none !important;
  }

  .flex-sm-fill {
    flex: 1 1 auto !important;
  }

  .flex-sm-row {
    flex-direction: row !important;
  }

  .flex-sm-column {
    flex-direction: column !important;
  }

  .flex-sm-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-sm-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-sm-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-sm-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-sm-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-sm-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-sm-wrap {
    flex-wrap: wrap !important;
  }

  .flex-sm-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-sm-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-sm-0 {
    gap: 0 !important;
  }

  .gap-sm-1 {
    gap: 0.25rem !important;
  }

  .gap-sm-2 {
    gap: 0.5rem !important;
  }

  .gap-sm-3 {
    gap: 1rem !important;
  }

  .gap-sm-4 {
    gap: 1.5rem !important;
  }

  .gap-sm-5 {
    gap: 3rem !important;
  }

  .justify-content-sm-start {
    justify-content: flex-start !important;
  }

  .justify-content-sm-end {
    justify-content: flex-end !important;
  }

  .justify-content-sm-center {
    justify-content: center !important;
  }

  .justify-content-sm-between {
    justify-content: space-between !important;
  }

  .justify-content-sm-around {
    justify-content: space-around !important;
  }

  .justify-content-sm-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-sm-start {
    align-items: flex-start !important;
  }

  .align-items-sm-end {
    align-items: flex-end !important;
  }

  .align-items-sm-center {
    align-items: center !important;
  }

  .align-items-sm-baseline {
    align-items: baseline !important;
  }

  .align-items-sm-stretch {
    align-items: stretch !important;
  }

  .align-content-sm-start {
    align-content: flex-start !important;
  }

  .align-content-sm-end {
    align-content: flex-end !important;
  }

  .align-content-sm-center {
    align-content: center !important;
  }

  .align-content-sm-between {
    align-content: space-between !important;
  }

  .align-content-sm-around {
    align-content: space-around !important;
  }

  .align-content-sm-stretch {
    align-content: stretch !important;
  }

  .align-self-sm-auto {
    align-self: auto !important;
  }

  .align-self-sm-start {
    align-self: flex-start !important;
  }

  .align-self-sm-end {
    align-self: flex-end !important;
  }

  .align-self-sm-center {
    align-self: center !important;
  }

  .align-self-sm-baseline {
    align-self: baseline !important;
  }

  .align-self-sm-stretch {
    align-self: stretch !important;
  }

  .order-sm-first {
    order: -1 !important;
  }

  .order-sm-0 {
    order: 0 !important;
  }

  .order-sm-1 {
    order: 1 !important;
  }

  .order-sm-2 {
    order: 2 !important;
  }

  .order-sm-3 {
    order: 3 !important;
  }

  .order-sm-4 {
    order: 4 !important;
  }

  .order-sm-5 {
    order: 5 !important;
  }

  .order-sm-last {
    order: 6 !important;
  }

  .m-sm-0 {
    margin: 0 !important;
  }

  .m-sm-1 {
    margin: 0.25rem !important;
  }

  .m-sm-2 {
    margin: 0.5rem !important;
  }

  .m-sm-3 {
    margin: 1rem !important;
  }

  .m-sm-4 {
    margin: 1.5rem !important;
  }

  .m-sm-5 {
    margin: 3rem !important;
  }

  .m-sm-auto {
    margin: auto !important;
  }

  .mx-sm-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-sm-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-sm-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-sm-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-sm-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-sm-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-sm-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-sm-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-sm-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-sm-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-sm-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-sm-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-sm-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-sm-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-sm-0 {
    margin-top: 0 !important;
  }

  .mt-sm-1 {
    margin-top: 0.25rem !important;
  }

  .mt-sm-2 {
    margin-top: 0.5rem !important;
  }

  .mt-sm-3 {
    margin-top: 1rem !important;
  }

  .mt-sm-4 {
    margin-top: 1.5rem !important;
  }

  .mt-sm-5 {
    margin-top: 3rem !important;
  }

  .mt-sm-auto {
    margin-top: auto !important;
  }

  .me-sm-0 {
    margin-right: 0 !important;
  }

  .me-sm-1 {
    margin-right: 0.25rem !important;
  }

  .me-sm-2 {
    margin-right: 0.5rem !important;
  }

  .me-sm-3 {
    margin-right: 1rem !important;
  }

  .me-sm-4 {
    margin-right: 1.5rem !important;
  }

  .me-sm-5 {
    margin-right: 3rem !important;
  }

  .me-sm-auto {
    margin-right: auto !important;
  }

  .mb-sm-0 {
    margin-bottom: 0 !important;
  }

  .mb-sm-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-sm-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-sm-3 {
    margin-bottom: 1rem !important;
  }

  .mb-sm-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-sm-5 {
    margin-bottom: 3rem !important;
  }

  .mb-sm-auto {
    margin-bottom: auto !important;
  }

  .ms-sm-0 {
    margin-left: 0 !important;
  }

  .ms-sm-1 {
    margin-left: 0.25rem !important;
  }

  .ms-sm-2 {
    margin-left: 0.5rem !important;
  }

  .ms-sm-3 {
    margin-left: 1rem !important;
  }

  .ms-sm-4 {
    margin-left: 1.5rem !important;
  }

  .ms-sm-5 {
    margin-left: 3rem !important;
  }

  .ms-sm-auto {
    margin-left: auto !important;
  }

  .p-sm-0 {
    padding: 0 !important;
  }

  .p-sm-1 {
    padding: 0.25rem !important;
  }

  .p-sm-2 {
    padding: 0.5rem !important;
  }

  .p-sm-3 {
    padding: 1rem !important;
  }

  .p-sm-4 {
    padding: 1.5rem !important;
  }

  .p-sm-5 {
    padding: 3rem !important;
  }

  .px-sm-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-sm-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-sm-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-sm-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-sm-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-sm-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-sm-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-sm-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-sm-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-sm-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-sm-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-sm-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-sm-0 {
    padding-top: 0 !important;
  }

  .pt-sm-1 {
    padding-top: 0.25rem !important;
  }

  .pt-sm-2 {
    padding-top: 0.5rem !important;
  }

  .pt-sm-3 {
    padding-top: 1rem !important;
  }

  .pt-sm-4 {
    padding-top: 1.5rem !important;
  }

  .pt-sm-5 {
    padding-top: 3rem !important;
  }

  .pe-sm-0 {
    padding-right: 0 !important;
  }

  .pe-sm-1 {
    padding-right: 0.25rem !important;
  }

  .pe-sm-2 {
    padding-right: 0.5rem !important;
  }

  .pe-sm-3 {
    padding-right: 1rem !important;
  }

  .pe-sm-4 {
    padding-right: 1.5rem !important;
  }

  .pe-sm-5 {
    padding-right: 3rem !important;
  }

  .pb-sm-0 {
    padding-bottom: 0 !important;
  }

  .pb-sm-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-sm-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-sm-3 {
    padding-bottom: 1rem !important;
  }

  .pb-sm-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-sm-5 {
    padding-bottom: 3rem !important;
  }

  .ps-sm-0 {
    padding-left: 0 !important;
  }

  .ps-sm-1 {
    padding-left: 0.25rem !important;
  }

  .ps-sm-2 {
    padding-left: 0.5rem !important;
  }

  .ps-sm-3 {
    padding-left: 1rem !important;
  }

  .ps-sm-4 {
    padding-left: 1.5rem !important;
  }

  .ps-sm-5 {
    padding-left: 3rem !important;
  }

  .text-sm-start {
    text-align: left !important;
  }

  .text-sm-end {
    text-align: right !important;
  }

  .text-sm-center {
    text-align: center !important;
  }
}
@media (min-width: 768px) {
  .float-md-start {
    float: left !important;
  }

  .float-md-end {
    float: right !important;
  }

  .float-md-none {
    float: none !important;
  }

  .d-md-inline {
    display: inline !important;
  }

  .d-md-inline-block {
    display: inline-block !important;
  }

  .d-md-block {
    display: block !important;
  }

  .d-md-grid {
    display: grid !important;
  }

  .d-md-table {
    display: table !important;
  }

  .d-md-table-row {
    display: table-row !important;
  }

  .d-md-table-cell {
    display: table-cell !important;
  }

  .d-md-flex {
    display: flex !important;
  }

  .d-md-inline-flex {
    display: inline-flex !important;
  }

  .d-md-none {
    display: none !important;
  }

  .flex-md-fill {
    flex: 1 1 auto !important;
  }

  .flex-md-row {
    flex-direction: row !important;
  }

  .flex-md-column {
    flex-direction: column !important;
  }

  .flex-md-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-md-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-md-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-md-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-md-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-md-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-md-wrap {
    flex-wrap: wrap !important;
  }

  .flex-md-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-md-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-md-0 {
    gap: 0 !important;
  }

  .gap-md-1 {
    gap: 0.25rem !important;
  }

  .gap-md-2 {
    gap: 0.5rem !important;
  }

  .gap-md-3 {
    gap: 1rem !important;
  }

  .gap-md-4 {
    gap: 1.5rem !important;
  }

  .gap-md-5 {
    gap: 3rem !important;
  }

  .justify-content-md-start {
    justify-content: flex-start !important;
  }

  .justify-content-md-end {
    justify-content: flex-end !important;
  }

  .justify-content-md-center {
    justify-content: center !important;
  }

  .justify-content-md-between {
    justify-content: space-between !important;
  }

  .justify-content-md-around {
    justify-content: space-around !important;
  }

  .justify-content-md-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-md-start {
    align-items: flex-start !important;
  }

  .align-items-md-end {
    align-items: flex-end !important;
  }

  .align-items-md-center {
    align-items: center !important;
  }

  .align-items-md-baseline {
    align-items: baseline !important;
  }

  .align-items-md-stretch {
    align-items: stretch !important;
  }

  .align-content-md-start {
    align-content: flex-start !important;
  }

  .align-content-md-end {
    align-content: flex-end !important;
  }

  .align-content-md-center {
    align-content: center !important;
  }

  .align-content-md-between {
    align-content: space-between !important;
  }

  .align-content-md-around {
    align-content: space-around !important;
  }

  .align-content-md-stretch {
    align-content: stretch !important;
  }

  .align-self-md-auto {
    align-self: auto !important;
  }

  .align-self-md-start {
    align-self: flex-start !important;
  }

  .align-self-md-end {
    align-self: flex-end !important;
  }

  .align-self-md-center {
    align-self: center !important;
  }

  .align-self-md-baseline {
    align-self: baseline !important;
  }

  .align-self-md-stretch {
    align-self: stretch !important;
  }

  .order-md-first {
    order: -1 !important;
  }

  .order-md-0 {
    order: 0 !important;
  }

  .order-md-1 {
    order: 1 !important;
  }

  .order-md-2 {
    order: 2 !important;
  }

  .order-md-3 {
    order: 3 !important;
  }

  .order-md-4 {
    order: 4 !important;
  }

  .order-md-5 {
    order: 5 !important;
  }

  .order-md-last {
    order: 6 !important;
  }

  .m-md-0 {
    margin: 0 !important;
  }

  .m-md-1 {
    margin: 0.25rem !important;
  }

  .m-md-2 {
    margin: 0.5rem !important;
  }

  .m-md-3 {
    margin: 1rem !important;
  }

  .m-md-4 {
    margin: 1.5rem !important;
  }

  .m-md-5 {
    margin: 3rem !important;
  }

  .m-md-auto {
    margin: auto !important;
  }

  .mx-md-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-md-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-md-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-md-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-md-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-md-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-md-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-md-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-md-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-md-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-md-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-md-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-md-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-md-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-md-0 {
    margin-top: 0 !important;
  }

  .mt-md-1 {
    margin-top: 0.25rem !important;
  }

  .mt-md-2 {
    margin-top: 0.5rem !important;
  }

  .mt-md-3 {
    margin-top: 1rem !important;
  }

  .mt-md-4 {
    margin-top: 1.5rem !important;
  }

  .mt-md-5 {
    margin-top: 3rem !important;
  }

  .mt-md-auto {
    margin-top: auto !important;
  }

  .me-md-0 {
    margin-right: 0 !important;
  }

  .me-md-1 {
    margin-right: 0.25rem !important;
  }

  .me-md-2 {
    margin-right: 0.5rem !important;
  }

  .me-md-3 {
    margin-right: 1rem !important;
  }

  .me-md-4 {
    margin-right: 1.5rem !important;
  }

  .me-md-5 {
    margin-right: 3rem !important;
  }

  .me-md-auto {
    margin-right: auto !important;
  }

  .mb-md-0 {
    margin-bottom: 0 !important;
  }

  .mb-md-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-md-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-md-3 {
    margin-bottom: 1rem !important;
  }

  .mb-md-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-md-5 {
    margin-bottom: 3rem !important;
  }

  .mb-md-auto {
    margin-bottom: auto !important;
  }

  .ms-md-0 {
    margin-left: 0 !important;
  }

  .ms-md-1 {
    margin-left: 0.25rem !important;
  }

  .ms-md-2 {
    margin-left: 0.5rem !important;
  }

  .ms-md-3 {
    margin-left: 1rem !important;
  }

  .ms-md-4 {
    margin-left: 1.5rem !important;
  }

  .ms-md-5 {
    margin-left: 3rem !important;
  }

  .ms-md-auto {
    margin-left: auto !important;
  }

  .p-md-0 {
    padding: 0 !important;
  }

  .p-md-1 {
    padding: 0.25rem !important;
  }

  .p-md-2 {
    padding: 0.5rem !important;
  }

  .p-md-3 {
    padding: 1rem !important;
  }

  .p-md-4 {
    padding: 1.5rem !important;
  }

  .p-md-5 {
    padding: 3rem !important;
  }

  .px-md-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-md-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-md-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-md-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-md-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-md-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-md-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-md-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-md-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-md-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-md-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-md-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-md-0 {
    padding-top: 0 !important;
  }

  .pt-md-1 {
    padding-top: 0.25rem !important;
  }

  .pt-md-2 {
    padding-top: 0.5rem !important;
  }

  .pt-md-3 {
    padding-top: 1rem !important;
  }

  .pt-md-4 {
    padding-top: 1.5rem !important;
  }

  .pt-md-5 {
    padding-top: 3rem !important;
  }

  .pe-md-0 {
    padding-right: 0 !important;
  }

  .pe-md-1 {
    padding-right: 0.25rem !important;
  }

  .pe-md-2 {
    padding-right: 0.5rem !important;
  }

  .pe-md-3 {
    padding-right: 1rem !important;
  }

  .pe-md-4 {
    padding-right: 1.5rem !important;
  }

  .pe-md-5 {
    padding-right: 3rem !important;
  }

  .pb-md-0 {
    padding-bottom: 0 !important;
  }

  .pb-md-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-md-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-md-3 {
    padding-bottom: 1rem !important;
  }

  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-md-5 {
    padding-bottom: 3rem !important;
  }

  .ps-md-0 {
    padding-left: 0 !important;
  }

  .ps-md-1 {
    padding-left: 0.25rem !important;
  }

  .ps-md-2 {
    padding-left: 0.5rem !important;
  }

  .ps-md-3 {
    padding-left: 1rem !important;
  }

  .ps-md-4 {
    padding-left: 1.5rem !important;
  }

  .ps-md-5 {
    padding-left: 3rem !important;
  }

  .text-md-start {
    text-align: left !important;
  }

  .text-md-end {
    text-align: right !important;
  }

  .text-md-center {
    text-align: center !important;
  }
}
@media (min-width: 992px) {
  .float-lg-start {
    float: left !important;
  }

  .float-lg-end {
    float: right !important;
  }

  .float-lg-none {
    float: none !important;
  }

  .d-lg-inline {
    display: inline !important;
  }

  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }

  .d-lg-grid {
    display: grid !important;
  }

  .d-lg-table {
    display: table !important;
  }

  .d-lg-table-row {
    display: table-row !important;
  }

  .d-lg-table-cell {
    display: table-cell !important;
  }

  .d-lg-flex {
    display: flex !important;
  }

  .d-lg-inline-flex {
    display: inline-flex !important;
  }

  .d-lg-none {
    display: none !important;
  }

  .flex-lg-fill {
    flex: 1 1 auto !important;
  }

  .flex-lg-row {
    flex-direction: row !important;
  }

  .flex-lg-column {
    flex-direction: column !important;
  }

  .flex-lg-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-lg-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-lg-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-lg-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-lg-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-lg-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-lg-wrap {
    flex-wrap: wrap !important;
  }

  .flex-lg-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-lg-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-lg-0 {
    gap: 0 !important;
  }

  .gap-lg-1 {
    gap: 0.25rem !important;
  }

  .gap-lg-2 {
    gap: 0.5rem !important;
  }

  .gap-lg-3 {
    gap: 1rem !important;
  }

  .gap-lg-4 {
    gap: 1.5rem !important;
  }

  .gap-lg-5 {
    gap: 3rem !important;
  }

  .justify-content-lg-start {
    justify-content: flex-start !important;
  }

  .justify-content-lg-end {
    justify-content: flex-end !important;
  }

  .justify-content-lg-center {
    justify-content: center !important;
  }

  .justify-content-lg-between {
    justify-content: space-between !important;
  }

  .justify-content-lg-around {
    justify-content: space-around !important;
  }

  .justify-content-lg-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-lg-start {
    align-items: flex-start !important;
  }

  .align-items-lg-end {
    align-items: flex-end !important;
  }

  .align-items-lg-center {
    align-items: center !important;
  }

  .align-items-lg-baseline {
    align-items: baseline !important;
  }

  .align-items-lg-stretch {
    align-items: stretch !important;
  }

  .align-content-lg-start {
    align-content: flex-start !important;
  }

  .align-content-lg-end {
    align-content: flex-end !important;
  }

  .align-content-lg-center {
    align-content: center !important;
  }

  .align-content-lg-between {
    align-content: space-between !important;
  }

  .align-content-lg-around {
    align-content: space-around !important;
  }

  .align-content-lg-stretch {
    align-content: stretch !important;
  }

  .align-self-lg-auto {
    align-self: auto !important;
  }

  .align-self-lg-start {
    align-self: flex-start !important;
  }

  .align-self-lg-end {
    align-self: flex-end !important;
  }

  .align-self-lg-center {
    align-self: center !important;
  }

  .align-self-lg-baseline {
    align-self: baseline !important;
  }

  .align-self-lg-stretch {
    align-self: stretch !important;
  }

  .order-lg-first {
    order: -1 !important;
  }

  .order-lg-0 {
    order: 0 !important;
  }

  .order-lg-1 {
    order: 1 !important;
  }

  .order-lg-2 {
    order: 2 !important;
  }

  .order-lg-3 {
    order: 3 !important;
  }

  .order-lg-4 {
    order: 4 !important;
  }

  .order-lg-5 {
    order: 5 !important;
  }

  .order-lg-last {
    order: 6 !important;
  }

  .m-lg-0 {
    margin: 0 !important;
  }

  .m-lg-1 {
    margin: 0.25rem !important;
  }

  .m-lg-2 {
    margin: 0.5rem !important;
  }

  .m-lg-3 {
    margin: 1rem !important;
  }

  .m-lg-4 {
    margin: 1.5rem !important;
  }

  .m-lg-5 {
    margin: 3rem !important;
  }

  .m-lg-auto {
    margin: auto !important;
  }

  .mx-lg-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-lg-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-lg-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-lg-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-lg-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-lg-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-lg-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-lg-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-lg-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-lg-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-lg-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-lg-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-lg-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-lg-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-lg-0 {
    margin-top: 0 !important;
  }

  .mt-lg-1 {
    margin-top: 0.25rem !important;
  }

  .mt-lg-2 {
    margin-top: 0.5rem !important;
  }

  .mt-lg-3 {
    margin-top: 1rem !important;
  }

  .mt-lg-4 {
    margin-top: 1.5rem !important;
  }

  .mt-lg-5 {
    margin-top: 3rem !important;
  }

  .mt-lg-auto {
    margin-top: auto !important;
  }

  .me-lg-0 {
    margin-right: 0 !important;
  }

  .me-lg-1 {
    margin-right: 0.25rem !important;
  }

  .me-lg-2 {
    margin-right: 0.5rem !important;
  }

  .me-lg-3 {
    margin-right: 1rem !important;
  }

  .me-lg-4 {
    margin-right: 1.5rem !important;
  }

  .me-lg-5 {
    margin-right: 3rem !important;
  }

  .me-lg-auto {
    margin-right: auto !important;
  }

  .mb-lg-0 {
    margin-bottom: 0 !important;
  }

  .mb-lg-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-lg-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-lg-3 {
    margin-bottom: 1rem !important;
  }

  .mb-lg-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-lg-5 {
    margin-bottom: 3rem !important;
  }

  .mb-lg-auto {
    margin-bottom: auto !important;
  }

  .ms-lg-0 {
    margin-left: 0 !important;
  }

  .ms-lg-1 {
    margin-left: 0.25rem !important;
  }

  .ms-lg-2 {
    margin-left: 0.5rem !important;
  }

  .ms-lg-3 {
    margin-left: 1rem !important;
  }

  .ms-lg-4 {
    margin-left: 1.5rem !important;
  }

  .ms-lg-5 {
    margin-left: 3rem !important;
  }

  .ms-lg-auto {
    margin-left: auto !important;
  }

  .p-lg-0 {
    padding: 0 !important;
  }

  .p-lg-1 {
    padding: 0.25rem !important;
  }

  .p-lg-2 {
    padding: 0.5rem !important;
  }

  .p-lg-3 {
    padding: 1rem !important;
  }

  .p-lg-4 {
    padding: 1.5rem !important;
  }

  .p-lg-5 {
    padding: 3rem !important;
  }

  .px-lg-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-lg-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-lg-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-lg-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-lg-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-lg-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-lg-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-lg-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-lg-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-lg-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-lg-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-lg-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-lg-0 {
    padding-top: 0 !important;
  }

  .pt-lg-1 {
    padding-top: 0.25rem !important;
  }

  .pt-lg-2 {
    padding-top: 0.5rem !important;
  }

  .pt-lg-3 {
    padding-top: 1rem !important;
  }

  .pt-lg-4 {
    padding-top: 1.5rem !important;
  }

  .pt-lg-5 {
    padding-top: 3rem !important;
  }

  .pe-lg-0 {
    padding-right: 0 !important;
  }

  .pe-lg-1 {
    padding-right: 0.25rem !important;
  }

  .pe-lg-2 {
    padding-right: 0.5rem !important;
  }

  .pe-lg-3 {
    padding-right: 1rem !important;
  }

  .pe-lg-4 {
    padding-right: 1.5rem !important;
  }

  .pe-lg-5 {
    padding-right: 3rem !important;
  }

  .pb-lg-0 {
    padding-bottom: 0 !important;
  }

  .pb-lg-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-lg-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-lg-3 {
    padding-bottom: 1rem !important;
  }

  .pb-lg-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-lg-5 {
    padding-bottom: 3rem !important;
  }

  .ps-lg-0 {
    padding-left: 0 !important;
  }

  .ps-lg-1 {
    padding-left: 0.25rem !important;
  }

  .ps-lg-2 {
    padding-left: 0.5rem !important;
  }

  .ps-lg-3 {
    padding-left: 1rem !important;
  }

  .ps-lg-4 {
    padding-left: 1.5rem !important;
  }

  .ps-lg-5 {
    padding-left: 3rem !important;
  }

  .text-lg-start {
    text-align: left !important;
  }

  .text-lg-end {
    text-align: right !important;
  }

  .text-lg-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .float-xl-start {
    float: left !important;
  }

  .float-xl-end {
    float: right !important;
  }

  .float-xl-none {
    float: none !important;
  }

  .d-xl-inline {
    display: inline !important;
  }

  .d-xl-inline-block {
    display: inline-block !important;
  }

  .d-xl-block {
    display: block !important;
  }

  .d-xl-grid {
    display: grid !important;
  }

  .d-xl-table {
    display: table !important;
  }

  .d-xl-table-row {
    display: table-row !important;
  }

  .d-xl-table-cell {
    display: table-cell !important;
  }

  .d-xl-flex {
    display: flex !important;
  }

  .d-xl-inline-flex {
    display: inline-flex !important;
  }

  .d-xl-none {
    display: none !important;
  }

  .flex-xl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xl-row {
    flex-direction: row !important;
  }

  .flex-xl-column {
    flex-direction: column !important;
  }

  .flex-xl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xl-0 {
    gap: 0 !important;
  }

  .gap-xl-1 {
    gap: 0.25rem !important;
  }

  .gap-xl-2 {
    gap: 0.5rem !important;
  }

  .gap-xl-3 {
    gap: 1rem !important;
  }

  .gap-xl-4 {
    gap: 1.5rem !important;
  }

  .gap-xl-5 {
    gap: 3rem !important;
  }

  .justify-content-xl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xl-center {
    justify-content: center !important;
  }

  .justify-content-xl-between {
    justify-content: space-between !important;
  }

  .justify-content-xl-around {
    justify-content: space-around !important;
  }

  .justify-content-xl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xl-start {
    align-items: flex-start !important;
  }

  .align-items-xl-end {
    align-items: flex-end !important;
  }

  .align-items-xl-center {
    align-items: center !important;
  }

  .align-items-xl-baseline {
    align-items: baseline !important;
  }

  .align-items-xl-stretch {
    align-items: stretch !important;
  }

  .align-content-xl-start {
    align-content: flex-start !important;
  }

  .align-content-xl-end {
    align-content: flex-end !important;
  }

  .align-content-xl-center {
    align-content: center !important;
  }

  .align-content-xl-between {
    align-content: space-between !important;
  }

  .align-content-xl-around {
    align-content: space-around !important;
  }

  .align-content-xl-stretch {
    align-content: stretch !important;
  }

  .align-self-xl-auto {
    align-self: auto !important;
  }

  .align-self-xl-start {
    align-self: flex-start !important;
  }

  .align-self-xl-end {
    align-self: flex-end !important;
  }

  .align-self-xl-center {
    align-self: center !important;
  }

  .align-self-xl-baseline {
    align-self: baseline !important;
  }

  .align-self-xl-stretch {
    align-self: stretch !important;
  }

  .order-xl-first {
    order: -1 !important;
  }

  .order-xl-0 {
    order: 0 !important;
  }

  .order-xl-1 {
    order: 1 !important;
  }

  .order-xl-2 {
    order: 2 !important;
  }

  .order-xl-3 {
    order: 3 !important;
  }

  .order-xl-4 {
    order: 4 !important;
  }

  .order-xl-5 {
    order: 5 !important;
  }

  .order-xl-last {
    order: 6 !important;
  }

  .m-xl-0 {
    margin: 0 !important;
  }

  .m-xl-1 {
    margin: 0.25rem !important;
  }

  .m-xl-2 {
    margin: 0.5rem !important;
  }

  .m-xl-3 {
    margin: 1rem !important;
  }

  .m-xl-4 {
    margin: 1.5rem !important;
  }

  .m-xl-5 {
    margin: 3rem !important;
  }

  .m-xl-auto {
    margin: auto !important;
  }

  .mx-xl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xl-0 {
    margin-top: 0 !important;
  }

  .mt-xl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xl-3 {
    margin-top: 1rem !important;
  }

  .mt-xl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xl-5 {
    margin-top: 3rem !important;
  }

  .mt-xl-auto {
    margin-top: auto !important;
  }

  .me-xl-0 {
    margin-right: 0 !important;
  }

  .me-xl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xl-3 {
    margin-right: 1rem !important;
  }

  .me-xl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xl-5 {
    margin-right: 3rem !important;
  }

  .me-xl-auto {
    margin-right: auto !important;
  }

  .mb-xl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xl-auto {
    margin-bottom: auto !important;
  }

  .ms-xl-0 {
    margin-left: 0 !important;
  }

  .ms-xl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xl-3 {
    margin-left: 1rem !important;
  }

  .ms-xl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xl-5 {
    margin-left: 3rem !important;
  }

  .ms-xl-auto {
    margin-left: auto !important;
  }

  .p-xl-0 {
    padding: 0 !important;
  }

  .p-xl-1 {
    padding: 0.25rem !important;
  }

  .p-xl-2 {
    padding: 0.5rem !important;
  }

  .p-xl-3 {
    padding: 1rem !important;
  }

  .p-xl-4 {
    padding: 1.5rem !important;
  }

  .p-xl-5 {
    padding: 3rem !important;
  }

  .px-xl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xl-0 {
    padding-top: 0 !important;
  }

  .pt-xl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xl-3 {
    padding-top: 1rem !important;
  }

  .pt-xl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xl-5 {
    padding-top: 3rem !important;
  }

  .pe-xl-0 {
    padding-right: 0 !important;
  }

  .pe-xl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xl-3 {
    padding-right: 1rem !important;
  }

  .pe-xl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xl-5 {
    padding-right: 3rem !important;
  }

  .pb-xl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xl-0 {
    padding-left: 0 !important;
  }

  .ps-xl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xl-3 {
    padding-left: 1rem !important;
  }

  .ps-xl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xl-5 {
    padding-left: 3rem !important;
  }

  .text-xl-start {
    text-align: left !important;
  }

  .text-xl-end {
    text-align: right !important;
  }

  .text-xl-center {
    text-align: center !important;
  }
}
@media (min-width: 1400px) {
  .float-xxl-start {
    float: left !important;
  }

  .float-xxl-end {
    float: right !important;
  }

  .float-xxl-none {
    float: none !important;
  }

  .d-xxl-inline {
    display: inline !important;
  }

  .d-xxl-inline-block {
    display: inline-block !important;
  }

  .d-xxl-block {
    display: block !important;
  }

  .d-xxl-grid {
    display: grid !important;
  }

  .d-xxl-table {
    display: table !important;
  }

  .d-xxl-table-row {
    display: table-row !important;
  }

  .d-xxl-table-cell {
    display: table-cell !important;
  }

  .d-xxl-flex {
    display: flex !important;
  }

  .d-xxl-inline-flex {
    display: inline-flex !important;
  }

  .d-xxl-none {
    display: none !important;
  }

  .flex-xxl-fill {
    flex: 1 1 auto !important;
  }

  .flex-xxl-row {
    flex-direction: row !important;
  }

  .flex-xxl-column {
    flex-direction: column !important;
  }

  .flex-xxl-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-xxl-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-xxl-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-xxl-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-xxl-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-xxl-shrink-1 {
    flex-shrink: 1 !important;
  }

  .flex-xxl-wrap {
    flex-wrap: wrap !important;
  }

  .flex-xxl-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-xxl-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .gap-xxl-0 {
    gap: 0 !important;
  }

  .gap-xxl-1 {
    gap: 0.25rem !important;
  }

  .gap-xxl-2 {
    gap: 0.5rem !important;
  }

  .gap-xxl-3 {
    gap: 1rem !important;
  }

  .gap-xxl-4 {
    gap: 1.5rem !important;
  }

  .gap-xxl-5 {
    gap: 3rem !important;
  }

  .justify-content-xxl-start {
    justify-content: flex-start !important;
  }

  .justify-content-xxl-end {
    justify-content: flex-end !important;
  }

  .justify-content-xxl-center {
    justify-content: center !important;
  }

  .justify-content-xxl-between {
    justify-content: space-between !important;
  }

  .justify-content-xxl-around {
    justify-content: space-around !important;
  }

  .justify-content-xxl-evenly {
    justify-content: space-evenly !important;
  }

  .align-items-xxl-start {
    align-items: flex-start !important;
  }

  .align-items-xxl-end {
    align-items: flex-end !important;
  }

  .align-items-xxl-center {
    align-items: center !important;
  }

  .align-items-xxl-baseline {
    align-items: baseline !important;
  }

  .align-items-xxl-stretch {
    align-items: stretch !important;
  }

  .align-content-xxl-start {
    align-content: flex-start !important;
  }

  .align-content-xxl-end {
    align-content: flex-end !important;
  }

  .align-content-xxl-center {
    align-content: center !important;
  }

  .align-content-xxl-between {
    align-content: space-between !important;
  }

  .align-content-xxl-around {
    align-content: space-around !important;
  }

  .align-content-xxl-stretch {
    align-content: stretch !important;
  }

  .align-self-xxl-auto {
    align-self: auto !important;
  }

  .align-self-xxl-start {
    align-self: flex-start !important;
  }

  .align-self-xxl-end {
    align-self: flex-end !important;
  }

  .align-self-xxl-center {
    align-self: center !important;
  }

  .align-self-xxl-baseline {
    align-self: baseline !important;
  }

  .align-self-xxl-stretch {
    align-self: stretch !important;
  }

  .order-xxl-first {
    order: -1 !important;
  }

  .order-xxl-0 {
    order: 0 !important;
  }

  .order-xxl-1 {
    order: 1 !important;
  }

  .order-xxl-2 {
    order: 2 !important;
  }

  .order-xxl-3 {
    order: 3 !important;
  }

  .order-xxl-4 {
    order: 4 !important;
  }

  .order-xxl-5 {
    order: 5 !important;
  }

  .order-xxl-last {
    order: 6 !important;
  }

  .m-xxl-0 {
    margin: 0 !important;
  }

  .m-xxl-1 {
    margin: 0.25rem !important;
  }

  .m-xxl-2 {
    margin: 0.5rem !important;
  }

  .m-xxl-3 {
    margin: 1rem !important;
  }

  .m-xxl-4 {
    margin: 1.5rem !important;
  }

  .m-xxl-5 {
    margin: 3rem !important;
  }

  .m-xxl-auto {
    margin: auto !important;
  }

  .mx-xxl-0 {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }

  .mx-xxl-1 {
    margin-right: 0.25rem !important;
    margin-left: 0.25rem !important;
  }

  .mx-xxl-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
  }

  .mx-xxl-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important;
  }

  .mx-xxl-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important;
  }

  .mx-xxl-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important;
  }

  .mx-xxl-auto {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  .my-xxl-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .my-xxl-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .my-xxl-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .my-xxl-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .my-xxl-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .my-xxl-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .my-xxl-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .mt-xxl-0 {
    margin-top: 0 !important;
  }

  .mt-xxl-1 {
    margin-top: 0.25rem !important;
  }

  .mt-xxl-2 {
    margin-top: 0.5rem !important;
  }

  .mt-xxl-3 {
    margin-top: 1rem !important;
  }

  .mt-xxl-4 {
    margin-top: 1.5rem !important;
  }

  .mt-xxl-5 {
    margin-top: 3rem !important;
  }

  .mt-xxl-auto {
    margin-top: auto !important;
  }

  .me-xxl-0 {
    margin-right: 0 !important;
  }

  .me-xxl-1 {
    margin-right: 0.25rem !important;
  }

  .me-xxl-2 {
    margin-right: 0.5rem !important;
  }

  .me-xxl-3 {
    margin-right: 1rem !important;
  }

  .me-xxl-4 {
    margin-right: 1.5rem !important;
  }

  .me-xxl-5 {
    margin-right: 3rem !important;
  }

  .me-xxl-auto {
    margin-right: auto !important;
  }

  .mb-xxl-0 {
    margin-bottom: 0 !important;
  }

  .mb-xxl-1 {
    margin-bottom: 0.25rem !important;
  }

  .mb-xxl-2 {
    margin-bottom: 0.5rem !important;
  }

  .mb-xxl-3 {
    margin-bottom: 1rem !important;
  }

  .mb-xxl-4 {
    margin-bottom: 1.5rem !important;
  }

  .mb-xxl-5 {
    margin-bottom: 3rem !important;
  }

  .mb-xxl-auto {
    margin-bottom: auto !important;
  }

  .ms-xxl-0 {
    margin-left: 0 !important;
  }

  .ms-xxl-1 {
    margin-left: 0.25rem !important;
  }

  .ms-xxl-2 {
    margin-left: 0.5rem !important;
  }

  .ms-xxl-3 {
    margin-left: 1rem !important;
  }

  .ms-xxl-4 {
    margin-left: 1.5rem !important;
  }

  .ms-xxl-5 {
    margin-left: 3rem !important;
  }

  .ms-xxl-auto {
    margin-left: auto !important;
  }

  .p-xxl-0 {
    padding: 0 !important;
  }

  .p-xxl-1 {
    padding: 0.25rem !important;
  }

  .p-xxl-2 {
    padding: 0.5rem !important;
  }

  .p-xxl-3 {
    padding: 1rem !important;
  }

  .p-xxl-4 {
    padding: 1.5rem !important;
  }

  .p-xxl-5 {
    padding: 3rem !important;
  }

  .px-xxl-0 {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .px-xxl-1 {
    padding-right: 0.25rem !important;
    padding-left: 0.25rem !important;
  }

  .px-xxl-2 {
    padding-right: 0.5rem !important;
    padding-left: 0.5rem !important;
  }

  .px-xxl-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .px-xxl-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
  }

  .px-xxl-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .py-xxl-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .py-xxl-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .py-xxl-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .py-xxl-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .py-xxl-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .py-xxl-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .pt-xxl-0 {
    padding-top: 0 !important;
  }

  .pt-xxl-1 {
    padding-top: 0.25rem !important;
  }

  .pt-xxl-2 {
    padding-top: 0.5rem !important;
  }

  .pt-xxl-3 {
    padding-top: 1rem !important;
  }

  .pt-xxl-4 {
    padding-top: 1.5rem !important;
  }

  .pt-xxl-5 {
    padding-top: 3rem !important;
  }

  .pe-xxl-0 {
    padding-right: 0 !important;
  }

  .pe-xxl-1 {
    padding-right: 0.25rem !important;
  }

  .pe-xxl-2 {
    padding-right: 0.5rem !important;
  }

  .pe-xxl-3 {
    padding-right: 1rem !important;
  }

  .pe-xxl-4 {
    padding-right: 1.5rem !important;
  }

  .pe-xxl-5 {
    padding-right: 3rem !important;
  }

  .pb-xxl-0 {
    padding-bottom: 0 !important;
  }

  .pb-xxl-1 {
    padding-bottom: 0.25rem !important;
  }

  .pb-xxl-2 {
    padding-bottom: 0.5rem !important;
  }

  .pb-xxl-3 {
    padding-bottom: 1rem !important;
  }

  .pb-xxl-4 {
    padding-bottom: 1.5rem !important;
  }

  .pb-xxl-5 {
    padding-bottom: 3rem !important;
  }

  .ps-xxl-0 {
    padding-left: 0 !important;
  }

  .ps-xxl-1 {
    padding-left: 0.25rem !important;
  }

  .ps-xxl-2 {
    padding-left: 0.5rem !important;
  }

  .ps-xxl-3 {
    padding-left: 1rem !important;
  }

  .ps-xxl-4 {
    padding-left: 1.5rem !important;
  }

  .ps-xxl-5 {
    padding-left: 3rem !important;
  }

  .text-xxl-start {
    text-align: left !important;
  }

  .text-xxl-end {
    text-align: right !important;
  }

  .text-xxl-center {
    text-align: center !important;
  }
}
@media (min-width: 1200px) {
  .fs-1 {
    font-size: 2.5rem !important;
  }

  .fs-2 {
    font-size: 2rem !important;
  }

  .fs-3 {
    font-size: 1.75rem !important;
  }

  .fs-4 {
    font-size: 1.5rem !important;
  }
}
@media print {
  .d-print-inline {
    display: inline !important;
  }

  .d-print-inline-block {
    display: inline-block !important;
  }

  .d-print-block {
    display: block !important;
  }

  .d-print-grid {
    display: grid !important;
  }

  .d-print-table {
    display: table !important;
  }

  .d-print-table-row {
    display: table-row !important;
  }

  .d-print-table-cell {
    display: table-cell !important;
  }

  .d-print-flex {
    display: flex !important;
  }

  .d-print-inline-flex {
    display: inline-flex !important;
  }

  .d-print-none {
    display: none !important;
  }
}

/*# sourceMappingURL=bootstrap.css.map */

/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
.fa,
.fab,
.fad,
.fal,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}
.fa-lg {
  font-size: 1.33333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}
.fa-xs {
  font-size: 0.75em;
}
.fa-sm {
  font-size: 0.875em;
}
.fa-1x {
  font-size: 1em;
}
.fa-2x {
  font-size: 2em;
}
.fa-3x {
  font-size: 3em;
}
.fa-4x {
  font-size: 4em;
}
.fa-5x {
  font-size: 5em;
}
.fa-6x {
  font-size: 6em;
}
.fa-7x {
  font-size: 7em;
}
.fa-8x {
  font-size: 8em;
}
.fa-9x {
  font-size: 9em;
}
.fa-10x {
  font-size: 10em;
}
.fa-fw {
  text-align: center;
  width: 1.25em;
}
.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}
.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}
.fa-border {
  border: 0.08em solid #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}
.fa-pull-left {
  float: left;
}
.fa-pull-right {
  float: right;
}
.fa.fa-pull-left,
.fab.fa-pull-left,
.fal.fa-pull-left,
.far.fa-pull-left,
.fas.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fab.fa-pull-right,
.fal.fa-pull-right,
.far.fa-pull-right,
.fas.fa-pull-right {
  margin-left: 0.3em;
}
.fa-spin {
  -webkit-animation: fa-spin 2s linear infinite;
  animation: fa-spin 2s linear infinite;
}
.fa-pulse {
  -webkit-animation: fa-spin 1s steps(8) infinite;
  animation: fa-spin 1s steps(8) infinite;
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}
.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
.fa-flip-vertical {
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
}
.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical,
.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
}
.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1);
  transform: scale(-1);
}
:root .fa-flip-both,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270 {
  -webkit-filter: none;
  filter: none;
}
.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}
.fa-stack-1x,
.fa-stack-2x {
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%;
}
.fa-stack-1x {
  line-height: inherit;
}
.fa-stack-2x {
  font-size: 2em;
}
.fa-inverse {
  color: #fff;
}
.fa-500px:before {
  content: "\f26e";
}
.fa-accessible-icon:before {
  content: "\f368";
}
.fa-accusoft:before {
  content: "\f369";
}
.fa-acquisitions-incorporated:before {
  content: "\f6af";
}
.fa-ad:before {
  content: "\f641";
}
.fa-address-book:before {
  content: "\f2b9";
}
.fa-address-card:before {
  content: "\f2bb";
}
.fa-adjust:before {
  content: "\f042";
}
.fa-adn:before {
  content: "\f170";
}
.fa-adversal:before {
  content: "\f36a";
}
.fa-affiliatetheme:before {
  content: "\f36b";
}
.fa-air-freshener:before {
  content: "\f5d0";
}
.fa-airbnb:before {
  content: "\f834";
}
.fa-algolia:before {
  content: "\f36c";
}
.fa-align-center:before {
  content: "\f037";
}
.fa-align-justify:before {
  content: "\f039";
}
.fa-align-left:before {
  content: "\f036";
}
.fa-align-right:before {
  content: "\f038";
}
.fa-alipay:before {
  content: "\f642";
}
.fa-allergies:before {
  content: "\f461";
}
.fa-amazon:before {
  content: "\f270";
}
.fa-amazon-pay:before {
  content: "\f42c";
}
.fa-ambulance:before {
  content: "\f0f9";
}
.fa-american-sign-language-interpreting:before {
  content: "\f2a3";
}
.fa-amilia:before {
  content: "\f36d";
}
.fa-anchor:before {
  content: "\f13d";
}
.fa-android:before {
  content: "\f17b";
}
.fa-angellist:before {
  content: "\f209";
}
.fa-angle-double-down:before {
  content: "\f103";
}
.fa-angle-double-left:before {
  content: "\f100";
}
.fa-angle-double-right:before {
  content: "\f101";
}
.fa-angle-double-up:before {
  content: "\f102";
}
.fa-angle-down:before {
  content: "\f107";
}
.fa-angle-left:before {
  content: "\f104";
}
.fa-angle-right:before {
  content: "\f105";
}
.fa-angle-up:before {
  content: "\f106";
}
.fa-angry:before {
  content: "\f556";
}
.fa-angrycreative:before {
  content: "\f36e";
}
.fa-angular:before {
  content: "\f420";
}
.fa-ankh:before {
  content: "\f644";
}
.fa-app-store:before {
  content: "\f36f";
}
.fa-app-store-ios:before {
  content: "\f370";
}
.fa-apper:before {
  content: "\f371";
}
.fa-apple:before {
  content: "\f179";
}
.fa-apple-alt:before {
  content: "\f5d1";
}
.fa-apple-pay:before {
  content: "\f415";
}
.fa-archive:before {
  content: "\f187";
}
.fa-archway:before {
  content: "\f557";
}
.fa-arrow-alt-circle-down:before {
  content: "\f358";
}
.fa-arrow-alt-circle-left:before {
  content: "\f359";
}
.fa-arrow-alt-circle-right:before {
  content: "\f35a";
}
.fa-arrow-alt-circle-up:before {
  content: "\f35b";
}
.fa-arrow-circle-down:before {
  content: "\f0ab";
}
.fa-arrow-circle-left:before {
  content: "\f0a8";
}
.fa-arrow-circle-right:before {
  content: "\f0a9";
}
.fa-arrow-circle-up:before {
  content: "\f0aa";
}
.fa-arrow-down:before {
  content: "\f063";
}
.fa-arrow-left:before {
  content: "\f060";
}
.fa-arrow-right:before {
  content: "\f061";
}
.fa-arrow-up:before {
  content: "\f062";
}
.fa-arrows-alt:before {
  content: "\f0b2";
}
.fa-arrows-alt-h:before {
  content: "\f337";
}
.fa-arrows-alt-v:before {
  content: "\f338";
}
.fa-artstation:before {
  content: "\f77a";
}
.fa-assistive-listening-systems:before {
  content: "\f2a2";
}
.fa-asterisk:before {
  content: "\f069";
}
.fa-asymmetrik:before {
  content: "\f372";
}
.fa-at:before {
  content: "\f1fa";
}
.fa-atlas:before {
  content: "\f558";
}
.fa-atlassian:before {
  content: "\f77b";
}
.fa-atom:before {
  content: "\f5d2";
}
.fa-audible:before {
  content: "\f373";
}
.fa-audio-description:before {
  content: "\f29e";
}
.fa-autoprefixer:before {
  content: "\f41c";
}
.fa-avianex:before {
  content: "\f374";
}
.fa-aviato:before {
  content: "\f421";
}
.fa-award:before {
  content: "\f559";
}
.fa-aws:before {
  content: "\f375";
}
.fa-baby:before {
  content: "\f77c";
}
.fa-baby-carriage:before {
  content: "\f77d";
}
.fa-backspace:before {
  content: "\f55a";
}
.fa-backward:before {
  content: "\f04a";
}
.fa-bacon:before {
  content: "\f7e5";
}
.fa-bacteria:before {
  content: "\e059";
}
.fa-bacterium:before {
  content: "\e05a";
}
.fa-bahai:before {
  content: "\f666";
}
.fa-balance-scale:before {
  content: "\f24e";
}
.fa-balance-scale-left:before {
  content: "\f515";
}
.fa-balance-scale-right:before {
  content: "\f516";
}
.fa-ban:before {
  content: "\f05e";
}
.fa-band-aid:before {
  content: "\f462";
}
.fa-bandcamp:before {
  content: "\f2d5";
}
.fa-barcode:before {
  content: "\f02a";
}
.fa-bars:before {
  content: "\f0c9";
}
.fa-baseball-ball:before {
  content: "\f433";
}
.fa-basketball-ball:before {
  content: "\f434";
}
.fa-bath:before {
  content: "\f2cd";
}
.fa-battery-empty:before {
  content: "\f244";
}
.fa-battery-full:before {
  content: "\f240";
}
.fa-battery-half:before {
  content: "\f242";
}
.fa-battery-quarter:before {
  content: "\f243";
}
.fa-battery-three-quarters:before {
  content: "\f241";
}
.fa-battle-net:before {
  content: "\f835";
}
.fa-bed:before {
  content: "\f236";
}
.fa-beer:before {
  content: "\f0fc";
}
.fa-behance:before {
  content: "\f1b4";
}
.fa-behance-square:before {
  content: "\f1b5";
}
.fa-bell:before {
  content: "\f0f3";
}
.fa-bell-slash:before {
  content: "\f1f6";
}
.fa-bezier-curve:before {
  content: "\f55b";
}
.fa-bible:before {
  content: "\f647";
}
.fa-bicycle:before {
  content: "\f206";
}
.fa-biking:before {
  content: "\f84a";
}
.fa-bimobject:before {
  content: "\f378";
}
.fa-binoculars:before {
  content: "\f1e5";
}
.fa-biohazard:before {
  content: "\f780";
}
.fa-birthday-cake:before {
  content: "\f1fd";
}
.fa-bitbucket:before {
  content: "\f171";
}
.fa-bitcoin:before {
  content: "\f379";
}
.fa-bity:before {
  content: "\f37a";
}
.fa-black-tie:before {
  content: "\f27e";
}
.fa-blackberry:before {
  content: "\f37b";
}
.fa-blender:before {
  content: "\f517";
}
.fa-blender-phone:before {
  content: "\f6b6";
}
.fa-blind:before {
  content: "\f29d";
}
.fa-blog:before {
  content: "\f781";
}
.fa-blogger:before {
  content: "\f37c";
}
.fa-blogger-b:before {
  content: "\f37d";
}
.fa-bluetooth:before {
  content: "\f293";
}
.fa-bluetooth-b:before {
  content: "\f294";
}
.fa-bold:before {
  content: "\f032";
}
.fa-bolt:before {
  content: "\f0e7";
}
.fa-bomb:before {
  content: "\f1e2";
}
.fa-bone:before {
  content: "\f5d7";
}
.fa-bong:before {
  content: "\f55c";
}
.fa-book:before {
  content: "\f02d";
}
.fa-book-dead:before {
  content: "\f6b7";
}
.fa-book-medical:before {
  content: "\f7e6";
}
.fa-book-open:before {
  content: "\f518";
}
.fa-book-reader:before {
  content: "\f5da";
}
.fa-bookmark:before {
  content: "\f02e";
}
.fa-bootstrap:before {
  content: "\f836";
}
.fa-border-all:before {
  content: "\f84c";
}
.fa-border-none:before {
  content: "\f850";
}
.fa-border-style:before {
  content: "\f853";
}
.fa-bowling-ball:before {
  content: "\f436";
}
.fa-box:before {
  content: "\f466";
}
.fa-box-open:before {
  content: "\f49e";
}
.fa-box-tissue:before {
  content: "\e05b";
}
.fa-boxes:before {
  content: "\f468";
}
.fa-braille:before {
  content: "\f2a1";
}
.fa-brain:before {
  content: "\f5dc";
}
.fa-bread-slice:before {
  content: "\f7ec";
}
.fa-briefcase:before {
  content: "\f0b1";
}
.fa-briefcase-medical:before {
  content: "\f469";
}
.fa-broadcast-tower:before {
  content: "\f519";
}
.fa-broom:before {
  content: "\f51a";
}
.fa-brush:before {
  content: "\f55d";
}
.fa-btc:before {
  content: "\f15a";
}
.fa-buffer:before {
  content: "\f837";
}
.fa-bug:before {
  content: "\f188";
}
.fa-building:before {
  content: "\f1ad";
}
.fa-bullhorn:before {
  content: "\f0a1";
}
.fa-bullseye:before {
  content: "\f140";
}
.fa-burn:before {
  content: "\f46a";
}
.fa-buromobelexperte:before {
  content: "\f37f";
}
.fa-bus:before {
  content: "\f207";
}
.fa-bus-alt:before {
  content: "\f55e";
}
.fa-business-time:before {
  content: "\f64a";
}
.fa-buy-n-large:before {
  content: "\f8a6";
}
.fa-buysellads:before {
  content: "\f20d";
}
.fa-calculator:before {
  content: "\f1ec";
}
.fa-calendar:before {
  content: "\f133";
}
.fa-calendar-alt:before {
  content: "\f073";
}
.fa-calendar-check:before {
  content: "\f274";
}
.fa-calendar-day:before {
  content: "\f783";
}
.fa-calendar-minus:before {
  content: "\f272";
}
.fa-calendar-plus:before {
  content: "\f271";
}
.fa-calendar-times:before {
  content: "\f273";
}
.fa-calendar-week:before {
  content: "\f784";
}
.fa-camera:before {
  content: "\f030";
}
.fa-camera-retro:before {
  content: "\f083";
}
.fa-campground:before {
  content: "\f6bb";
}
.fa-canadian-maple-leaf:before {
  content: "\f785";
}
.fa-candy-cane:before {
  content: "\f786";
}
.fa-cannabis:before {
  content: "\f55f";
}
.fa-capsules:before {
  content: "\f46b";
}
.fa-car:before {
  content: "\f1b9";
}
.fa-car-alt:before {
  content: "\f5de";
}
.fa-car-battery:before {
  content: "\f5df";
}
.fa-car-crash:before {
  content: "\f5e1";
}
.fa-car-side:before {
  content: "\f5e4";
}
.fa-caravan:before {
  content: "\f8ff";
}
.fa-caret-down:before {
  content: "\f0d7";
}
.fa-caret-left:before {
  content: "\f0d9";
}
.fa-caret-right:before {
  content: "\f0da";
}
.fa-caret-square-down:before {
  content: "\f150";
}
.fa-caret-square-left:before {
  content: "\f191";
}
.fa-caret-square-right:before {
  content: "\f152";
}
.fa-caret-square-up:before {
  content: "\f151";
}
.fa-caret-up:before {
  content: "\f0d8";
}
.fa-carrot:before {
  content: "\f787";
}
.fa-cart-arrow-down:before {
  content: "\f218";
}
.fa-cart-plus:before {
  content: "\f217";
}
.fa-cash-register:before {
  content: "\f788";
}
.fa-cat:before {
  content: "\f6be";
}
.fa-cc-amazon-pay:before {
  content: "\f42d";
}
.fa-cc-amex:before {
  content: "\f1f3";
}
.fa-cc-apple-pay:before {
  content: "\f416";
}
.fa-cc-diners-club:before {
  content: "\f24c";
}
.fa-cc-discover:before {
  content: "\f1f2";
}
.fa-cc-jcb:before {
  content: "\f24b";
}
.fa-cc-mastercard:before {
  content: "\f1f1";
}
.fa-cc-paypal:before {
  content: "\f1f4";
}
.fa-cc-stripe:before {
  content: "\f1f5";
}
.fa-cc-visa:before {
  content: "\f1f0";
}
.fa-centercode:before {
  content: "\f380";
}
.fa-centos:before {
  content: "\f789";
}
.fa-certificate:before {
  content: "\f0a3";
}
.fa-chair:before {
  content: "\f6c0";
}
.fa-chalkboard:before {
  content: "\f51b";
}
.fa-chalkboard-teacher:before {
  content: "\f51c";
}
.fa-charging-station:before {
  content: "\f5e7";
}
.fa-chart-area:before {
  content: "\f1fe";
}
.fa-chart-bar:before {
  content: "\f080";
}
.fa-chart-line:before {
  content: "\f201";
}
.fa-chart-pie:before {
  content: "\f200";
}
.fa-check:before {
  content: "\f00c";
}
.fa-check-circle:before {
  content: "\f058";
}
.fa-check-double:before {
  content: "\f560";
}
.fa-check-square:before {
  content: "\f14a";
}
.fa-cheese:before {
  content: "\f7ef";
}
.fa-chess:before {
  content: "\f439";
}
.fa-chess-bishop:before {
  content: "\f43a";
}
.fa-chess-board:before {
  content: "\f43c";
}
.fa-chess-king:before {
  content: "\f43f";
}
.fa-chess-knight:before {
  content: "\f441";
}
.fa-chess-pawn:before {
  content: "\f443";
}
.fa-chess-queen:before {
  content: "\f445";
}
.fa-chess-rook:before {
  content: "\f447";
}
.fa-chevron-circle-down:before {
  content: "\f13a";
}
.fa-chevron-circle-left:before {
  content: "\f137";
}
.fa-chevron-circle-right:before {
  content: "\f138";
}
.fa-chevron-circle-up:before {
  content: "\f139";
}
.fa-chevron-down:before {
  content: "\f078";
}
.fa-chevron-left:before {
  content: "\f053";
}
.fa-chevron-right:before {
  content: "\f054";
}
.fa-chevron-up:before {
  content: "\f077";
}
.fa-child:before {
  content: "\f1ae";
}
.fa-chrome:before {
  content: "\f268";
}
.fa-chromecast:before {
  content: "\f838";
}
.fa-church:before {
  content: "\f51d";
}
.fa-circle:before {
  content: "\f111";
}
.fa-circle-notch:before {
  content: "\f1ce";
}
.fa-city:before {
  content: "\f64f";
}
.fa-clinic-medical:before {
  content: "\f7f2";
}
.fa-clipboard:before {
  content: "\f328";
}
.fa-clipboard-check:before {
  content: "\f46c";
}
.fa-clipboard-list:before {
  content: "\f46d";
}
.fa-clock:before {
  content: "\f017";
}
.fa-clone:before {
  content: "\f24d";
}
.fa-closed-captioning:before {
  content: "\f20a";
}
.fa-cloud:before {
  content: "\f0c2";
}
.fa-cloud-download-alt:before {
  content: "\f381";
}
.fa-cloud-meatball:before {
  content: "\f73b";
}
.fa-cloud-moon:before {
  content: "\f6c3";
}
.fa-cloud-moon-rain:before {
  content: "\f73c";
}
.fa-cloud-rain:before {
  content: "\f73d";
}
.fa-cloud-showers-heavy:before {
  content: "\f740";
}
.fa-cloud-sun:before {
  content: "\f6c4";
}
.fa-cloud-sun-rain:before {
  content: "\f743";
}
.fa-cloud-upload-alt:before {
  content: "\f382";
}
.fa-cloudflare:before {
  content: "\e07d";
}
.fa-cloudscale:before {
  content: "\f383";
}
.fa-cloudsmith:before {
  content: "\f384";
}
.fa-cloudversify:before {
  content: "\f385";
}
.fa-cocktail:before {
  content: "\f561";
}
.fa-code:before {
  content: "\f121";
}
.fa-code-branch:before {
  content: "\f126";
}
.fa-codepen:before {
  content: "\f1cb";
}
.fa-codiepie:before {
  content: "\f284";
}
.fa-coffee:before {
  content: "\f0f4";
}
.fa-cog:before {
  content: "\f013";
}
.fa-cogs:before {
  content: "\f085";
}
.fa-coins:before {
  content: "\f51e";
}
.fa-columns:before {
  content: "\f0db";
}
.fa-comment:before {
  content: "\f075";
}
.fa-comment-alt:before {
  content: "\f27a";
}
.fa-comment-dollar:before {
  content: "\f651";
}
.fa-comment-dots:before {
  content: "\f4ad";
}
.fa-comment-medical:before {
  content: "\f7f5";
}
.fa-comment-slash:before {
  content: "\f4b3";
}
.fa-comments:before {
  content: "\f086";
}
.fa-comments-dollar:before {
  content: "\f653";
}
.fa-compact-disc:before {
  content: "\f51f";
}
.fa-compass:before {
  content: "\f14e";
}
.fa-compress:before {
  content: "\f066";
}
.fa-compress-alt:before {
  content: "\f422";
}
.fa-compress-arrows-alt:before {
  content: "\f78c";
}
.fa-concierge-bell:before {
  content: "\f562";
}
.fa-confluence:before {
  content: "\f78d";
}
.fa-connectdevelop:before {
  content: "\f20e";
}
.fa-contao:before {
  content: "\f26d";
}
.fa-cookie:before {
  content: "\f563";
}
.fa-cookie-bite:before {
  content: "\f564";
}
.fa-copy:before {
  content: "\f0c5";
}
.fa-copyright:before {
  content: "\f1f9";
}
.fa-cotton-bureau:before {
  content: "\f89e";
}
.fa-couch:before {
  content: "\f4b8";
}
.fa-cpanel:before {
  content: "\f388";
}
.fa-creative-commons:before {
  content: "\f25e";
}
.fa-creative-commons-by:before {
  content: "\f4e7";
}
.fa-creative-commons-nc:before {
  content: "\f4e8";
}
.fa-creative-commons-nc-eu:before {
  content: "\f4e9";
}
.fa-creative-commons-nc-jp:before {
  content: "\f4ea";
}
.fa-creative-commons-nd:before {
  content: "\f4eb";
}
.fa-creative-commons-pd:before {
  content: "\f4ec";
}
.fa-creative-commons-pd-alt:before {
  content: "\f4ed";
}
.fa-creative-commons-remix:before {
  content: "\f4ee";
}
.fa-creative-commons-sa:before {
  content: "\f4ef";
}
.fa-creative-commons-sampling:before {
  content: "\f4f0";
}
.fa-creative-commons-sampling-plus:before {
  content: "\f4f1";
}
.fa-creative-commons-share:before {
  content: "\f4f2";
}
.fa-creative-commons-zero:before {
  content: "\f4f3";
}
.fa-credit-card:before {
  content: "\f09d";
}
.fa-critical-role:before {
  content: "\f6c9";
}
.fa-crop:before {
  content: "\f125";
}
.fa-crop-alt:before {
  content: "\f565";
}
.fa-cross:before {
  content: "\f654";
}
.fa-crosshairs:before {
  content: "\f05b";
}
.fa-crow:before {
  content: "\f520";
}
.fa-crown:before {
  content: "\f521";
}
.fa-crutch:before {
  content: "\f7f7";
}
.fa-css3:before {
  content: "\f13c";
}
.fa-css3-alt:before {
  content: "\f38b";
}
.fa-cube:before {
  content: "\f1b2";
}
.fa-cubes:before {
  content: "\f1b3";
}
.fa-cut:before {
  content: "\f0c4";
}
.fa-cuttlefish:before {
  content: "\f38c";
}
.fa-d-and-d:before {
  content: "\f38d";
}
.fa-d-and-d-beyond:before {
  content: "\f6ca";
}
.fa-dailymotion:before {
  content: "\e052";
}
.fa-dashcube:before {
  content: "\f210";
}
.fa-database:before {
  content: "\f1c0";
}
.fa-deaf:before {
  content: "\f2a4";
}
.fa-deezer:before {
  content: "\e077";
}
.fa-delicious:before {
  content: "\f1a5";
}
.fa-democrat:before {
  content: "\f747";
}
.fa-deploydog:before {
  content: "\f38e";
}
.fa-deskpro:before {
  content: "\f38f";
}
.fa-desktop:before {
  content: "\f108";
}
.fa-dev:before {
  content: "\f6cc";
}
.fa-deviantart:before {
  content: "\f1bd";
}
.fa-dharmachakra:before {
  content: "\f655";
}
.fa-dhl:before {
  content: "\f790";
}
.fa-diagnoses:before {
  content: "\f470";
}
.fa-diaspora:before {
  content: "\f791";
}
.fa-dice:before {
  content: "\f522";
}
.fa-dice-d20:before {
  content: "\f6cf";
}
.fa-dice-d6:before {
  content: "\f6d1";
}
.fa-dice-five:before {
  content: "\f523";
}
.fa-dice-four:before {
  content: "\f524";
}
.fa-dice-one:before {
  content: "\f525";
}
.fa-dice-six:before {
  content: "\f526";
}
.fa-dice-three:before {
  content: "\f527";
}
.fa-dice-two:before {
  content: "\f528";
}
.fa-digg:before {
  content: "\f1a6";
}
.fa-digital-ocean:before {
  content: "\f391";
}
.fa-digital-tachograph:before {
  content: "\f566";
}
.fa-directions:before {
  content: "\f5eb";
}
.fa-discord:before {
  content: "\f392";
}
.fa-discourse:before {
  content: "\f393";
}
.fa-disease:before {
  content: "\f7fa";
}
.fa-divide:before {
  content: "\f529";
}
.fa-dizzy:before {
  content: "\f567";
}
.fa-dna:before {
  content: "\f471";
}
.fa-dochub:before {
  content: "\f394";
}
.fa-docker:before {
  content: "\f395";
}
.fa-dog:before {
  content: "\f6d3";
}
.fa-dollar-sign:before {
  content: "\f155";
}
.fa-dolly:before {
  content: "\f472";
}
.fa-dolly-flatbed:before {
  content: "\f474";
}
.fa-donate:before {
  content: "\f4b9";
}
.fa-door-closed:before {
  content: "\f52a";
}
.fa-door-open:before {
  content: "\f52b";
}
.fa-dot-circle:before {
  content: "\f192";
}
.fa-dove:before {
  content: "\f4ba";
}
.fa-download:before {
  content: "\f019";
}
.fa-draft2digital:before {
  content: "\f396";
}
.fa-drafting-compass:before {
  content: "\f568";
}
.fa-dragon:before {
  content: "\f6d5";
}
.fa-draw-polygon:before {
  content: "\f5ee";
}
.fa-dribbble:before {
  content: "\f17d";
}
.fa-dribbble-square:before {
  content: "\f397";
}
.fa-dropbox:before {
  content: "\f16b";
}
.fa-drum:before {
  content: "\f569";
}
.fa-drum-steelpan:before {
  content: "\f56a";
}
.fa-drumstick-bite:before {
  content: "\f6d7";
}
.fa-drupal:before {
  content: "\f1a9";
}
.fa-dumbbell:before {
  content: "\f44b";
}
.fa-dumpster:before {
  content: "\f793";
}
.fa-dumpster-fire:before {
  content: "\f794";
}
.fa-dungeon:before {
  content: "\f6d9";
}
.fa-dyalog:before {
  content: "\f399";
}
.fa-earlybirds:before {
  content: "\f39a";
}
.fa-ebay:before {
  content: "\f4f4";
}
.fa-edge:before {
  content: "\f282";
}
.fa-edge-legacy:before {
  content: "\e078";
}
.fa-edit:before {
  content: "\f044";
}
.fa-egg:before {
  content: "\f7fb";
}
.fa-eject:before {
  content: "\f052";
}
.fa-elementor:before {
  content: "\f430";
}
.fa-ellipsis-h:before {
  content: "\f141";
}
.fa-ellipsis-v:before {
  content: "\f142";
}
.fa-ello:before {
  content: "\f5f1";
}
.fa-ember:before {
  content: "\f423";
}
.fa-empire:before {
  content: "\f1d1";
}
.fa-envelope:before {
  content: "\f0e0";
}
.fa-envelope-open:before {
  content: "\f2b6";
}
.fa-envelope-open-text:before {
  content: "\f658";
}
.fa-envelope-square:before {
  content: "\f199";
}
.fa-envira:before {
  content: "\f299";
}
.fa-equals:before {
  content: "\f52c";
}
.fa-eraser:before {
  content: "\f12d";
}
.fa-erlang:before {
  content: "\f39d";
}
.fa-ethereum:before {
  content: "\f42e";
}
.fa-ethernet:before {
  content: "\f796";
}
.fa-etsy:before {
  content: "\f2d7";
}
.fa-euro-sign:before {
  content: "\f153";
}
.fa-evernote:before {
  content: "\f839";
}
.fa-exchange-alt:before {
  content: "\f362";
}
.fa-exclamation:before {
  content: "\f12a";
}
.fa-exclamation-circle:before {
  content: "\f06a";
}
.fa-exclamation-triangle:before {
  content: "\f071";
}
.fa-expand:before {
  content: "\f065";
}
.fa-expand-alt:before {
  content: "\f424";
}
.fa-expand-arrows-alt:before {
  content: "\f31e";
}
.fa-expeditedssl:before {
  content: "\f23e";
}
.fa-external-link-alt:before {
  content: "\f35d";
}
.fa-external-link-square-alt:before {
  content: "\f360";
}
.fa-eye:before {
  content: "\f06e";
}
.fa-eye-dropper:before {
  content: "\f1fb";
}
.fa-eye-slash:before {
  content: "\f070";
}
.fa-facebook:before {
  content: "\f09a";
}
.fa-facebook-f:before {
  content: "\f39e";
}
.fa-facebook-messenger:before {
  content: "\f39f";
}
.fa-facebook-square:before {
  content: "\f082";
}
.fa-fan:before {
  content: "\f863";
}
.fa-fantasy-flight-games:before {
  content: "\f6dc";
}
.fa-fast-backward:before {
  content: "\f049";
}
.fa-fast-forward:before {
  content: "\f050";
}
.fa-faucet:before {
  content: "\e005";
}
.fa-fax:before {
  content: "\f1ac";
}
.fa-feather:before {
  content: "\f52d";
}
.fa-feather-alt:before {
  content: "\f56b";
}
.fa-fedex:before {
  content: "\f797";
}
.fa-fedora:before {
  content: "\f798";
}
.fa-female:before {
  content: "\f182";
}
.fa-fighter-jet:before {
  content: "\f0fb";
}
.fa-figma:before {
  content: "\f799";
}
.fa-file:before {
  content: "\f15b";
}
.fa-file-alt:before {
  content: "\f15c";
}
.fa-file-archive:before {
  content: "\f1c6";
}
.fa-file-audio:before {
  content: "\f1c7";
}
.fa-file-code:before {
  content: "\f1c9";
}
.fa-file-contract:before {
  content: "\f56c";
}
.fa-file-csv:before {
  content: "\f6dd";
}
.fa-file-download:before {
  content: "\f56d";
}
.fa-file-excel:before {
  content: "\f1c3";
}
.fa-file-export:before {
  content: "\f56e";
}
.fa-file-image:before {
  content: "\f1c5";
}
.fa-file-import:before {
  content: "\f56f";
}
.fa-file-invoice:before {
  content: "\f570";
}
.fa-file-invoice-dollar:before {
  content: "\f571";
}
.fa-file-medical:before {
  content: "\f477";
}
.fa-file-medical-alt:before {
  content: "\f478";
}
.fa-file-pdf:before {
  content: "\f1c1";
}
.fa-file-powerpoint:before {
  content: "\f1c4";
}
.fa-file-prescription:before {
  content: "\f572";
}
.fa-file-signature:before {
  content: "\f573";
}
.fa-file-upload:before {
  content: "\f574";
}
.fa-file-video:before {
  content: "\f1c8";
}
.fa-file-word:before {
  content: "\f1c2";
}
.fa-fill:before {
  content: "\f575";
}
.fa-fill-drip:before {
  content: "\f576";
}
.fa-film:before {
  content: "\f008";
}
.fa-filter:before {
  content: "\f0b0";
}
.fa-fingerprint:before {
  content: "\f577";
}
.fa-fire:before {
  content: "\f06d";
}
.fa-fire-alt:before {
  content: "\f7e4";
}
.fa-fire-extinguisher:before {
  content: "\f134";
}
.fa-firefox:before {
  content: "\f269";
}
.fa-firefox-browser:before {
  content: "\e007";
}
.fa-first-aid:before {
  content: "\f479";
}
.fa-first-order:before {
  content: "\f2b0";
}
.fa-first-order-alt:before {
  content: "\f50a";
}
.fa-firstdraft:before {
  content: "\f3a1";
}
.fa-fish:before {
  content: "\f578";
}
.fa-fist-raised:before {
  content: "\f6de";
}
.fa-flag:before {
  content: "\f024";
}
.fa-flag-checkered:before {
  content: "\f11e";
}
.fa-flag-usa:before {
  content: "\f74d";
}
.fa-flask:before {
  content: "\f0c3";
}
.fa-flickr:before {
  content: "\f16e";
}
.fa-flipboard:before {
  content: "\f44d";
}
.fa-flushed:before {
  content: "\f579";
}
.fa-fly:before {
  content: "\f417";
}
.fa-folder:before {
  content: "\f07b";
}
.fa-folder-minus:before {
  content: "\f65d";
}
.fa-folder-open:before {
  content: "\f07c";
}
.fa-folder-plus:before {
  content: "\f65e";
}
.fa-font:before {
  content: "\f031";
}
.fa-font-awesome:before {
  content: "\f2b4";
}
.fa-font-awesome-alt:before {
  content: "\f35c";
}
.fa-font-awesome-flag:before {
  content: "\f425";
}
.fa-font-awesome-logo-full:before {
  content: "\f4e6";
}
.fa-fonticons:before {
  content: "\f280";
}
.fa-fonticons-fi:before {
  content: "\f3a2";
}
.fa-football-ball:before {
  content: "\f44e";
}
.fa-fort-awesome:before {
  content: "\f286";
}
.fa-fort-awesome-alt:before {
  content: "\f3a3";
}
.fa-forumbee:before {
  content: "\f211";
}
.fa-forward:before {
  content: "\f04e";
}
.fa-foursquare:before {
  content: "\f180";
}
.fa-free-code-camp:before {
  content: "\f2c5";
}
.fa-freebsd:before {
  content: "\f3a4";
}
.fa-frog:before {
  content: "\f52e";
}
.fa-frown:before {
  content: "\f119";
}
.fa-frown-open:before {
  content: "\f57a";
}
.fa-fulcrum:before {
  content: "\f50b";
}
.fa-funnel-dollar:before {
  content: "\f662";
}
.fa-futbol:before {
  content: "\f1e3";
}
.fa-galactic-republic:before {
  content: "\f50c";
}
.fa-galactic-senate:before {
  content: "\f50d";
}
.fa-gamepad:before {
  content: "\f11b";
}
.fa-gas-pump:before {
  content: "\f52f";
}
.fa-gavel:before {
  content: "\f0e3";
}
.fa-gem:before {
  content: "\f3a5";
}
.fa-genderless:before {
  content: "\f22d";
}
.fa-get-pocket:before {
  content: "\f265";
}
.fa-gg:before {
  content: "\f260";
}
.fa-gg-circle:before {
  content: "\f261";
}
.fa-ghost:before {
  content: "\f6e2";
}
.fa-gift:before {
  content: "\f06b";
}
.fa-gifts:before {
  content: "\f79c";
}
.fa-git:before {
  content: "\f1d3";
}
.fa-git-alt:before {
  content: "\f841";
}
.fa-git-square:before {
  content: "\f1d2";
}
.fa-github:before {
  content: "\f09b";
}
.fa-github-alt:before {
  content: "\f113";
}
.fa-github-square:before {
  content: "\f092";
}
.fa-gitkraken:before {
  content: "\f3a6";
}
.fa-gitlab:before {
  content: "\f296";
}
.fa-gitter:before {
  content: "\f426";
}
.fa-glass-cheers:before {
  content: "\f79f";
}
.fa-glass-martini:before {
  content: "\f000";
}
.fa-glass-martini-alt:before {
  content: "\f57b";
}
.fa-glass-whiskey:before {
  content: "\f7a0";
}
.fa-glasses:before {
  content: "\f530";
}
.fa-glide:before {
  content: "\f2a5";
}
.fa-glide-g:before {
  content: "\f2a6";
}
.fa-globe:before {
  content: "\f0ac";
}
.fa-globe-africa:before {
  content: "\f57c";
}
.fa-globe-americas:before {
  content: "\f57d";
}
.fa-globe-asia:before {
  content: "\f57e";
}
.fa-globe-europe:before {
  content: "\f7a2";
}
.fa-gofore:before {
  content: "\f3a7";
}
.fa-golf-ball:before {
  content: "\f450";
}
.fa-goodreads:before {
  content: "\f3a8";
}
.fa-goodreads-g:before {
  content: "\f3a9";
}
.fa-google:before {
  content: "\f1a0";
}
.fa-google-drive:before {
  content: "\f3aa";
}
.fa-google-pay:before {
  content: "\e079";
}
.fa-google-play:before {
  content: "\f3ab";
}
.fa-google-plus:before {
  content: "\f2b3";
}
.fa-google-plus-g:before {
  content: "\f0d5";
}
.fa-google-plus-square:before {
  content: "\f0d4";
}
.fa-google-wallet:before {
  content: "\f1ee";
}
.fa-gopuram:before {
  content: "\f664";
}
.fa-graduation-cap:before {
  content: "\f19d";
}
.fa-gratipay:before {
  content: "\f184";
}
.fa-grav:before {
  content: "\f2d6";
}
.fa-greater-than:before {
  content: "\f531";
}
.fa-greater-than-equal:before {
  content: "\f532";
}
.fa-grimace:before {
  content: "\f57f";
}
.fa-grin:before {
  content: "\f580";
}
.fa-grin-alt:before {
  content: "\f581";
}
.fa-grin-beam:before {
  content: "\f582";
}
.fa-grin-beam-sweat:before {
  content: "\f583";
}
.fa-grin-hearts:before {
  content: "\f584";
}
.fa-grin-squint:before {
  content: "\f585";
}
.fa-grin-squint-tears:before {
  content: "\f586";
}
.fa-grin-stars:before {
  content: "\f587";
}
.fa-grin-tears:before {
  content: "\f588";
}
.fa-grin-tongue:before {
  content: "\f589";
}
.fa-grin-tongue-squint:before {
  content: "\f58a";
}
.fa-grin-tongue-wink:before {
  content: "\f58b";
}
.fa-grin-wink:before {
  content: "\f58c";
}
.fa-grip-horizontal:before {
  content: "\f58d";
}
.fa-grip-lines:before {
  content: "\f7a4";
}
.fa-grip-lines-vertical:before {
  content: "\f7a5";
}
.fa-grip-vertical:before {
  content: "\f58e";
}
.fa-gripfire:before {
  content: "\f3ac";
}
.fa-grunt:before {
  content: "\f3ad";
}
.fa-guilded:before {
  content: "\e07e";
}
.fa-guitar:before {
  content: "\f7a6";
}
.fa-gulp:before {
  content: "\f3ae";
}
.fa-h-square:before {
  content: "\f0fd";
}
.fa-hacker-news:before {
  content: "\f1d4";
}
.fa-hacker-news-square:before {
  content: "\f3af";
}
.fa-hackerrank:before {
  content: "\f5f7";
}
.fa-hamburger:before {
  content: "\f805";
}
.fa-hammer:before {
  content: "\f6e3";
}
.fa-hamsa:before {
  content: "\f665";
}
.fa-hand-holding:before {
  content: "\f4bd";
}
.fa-hand-holding-heart:before {
  content: "\f4be";
}
.fa-hand-holding-medical:before {
  content: "\e05c";
}
.fa-hand-holding-usd:before {
  content: "\f4c0";
}
.fa-hand-holding-water:before {
  content: "\f4c1";
}
.fa-hand-lizard:before {
  content: "\f258";
}
.fa-hand-middle-finger:before {
  content: "\f806";
}
.fa-hand-paper:before {
  content: "\f256";
}
.fa-hand-peace:before {
  content: "\f25b";
}
.fa-hand-point-down:before {
  content: "\f0a7";
}
.fa-hand-point-left:before {
  content: "\f0a5";
}
.fa-hand-point-right:before {
  content: "\f0a4";
}
.fa-hand-point-up:before {
  content: "\f0a6";
}
.fa-hand-pointer:before {
  content: "\f25a";
}
.fa-hand-rock:before {
  content: "\f255";
}
.fa-hand-scissors:before {
  content: "\f257";
}
.fa-hand-sparkles:before {
  content: "\e05d";
}
.fa-hand-spock:before {
  content: "\f259";
}
.fa-hands:before {
  content: "\f4c2";
}
.fa-hands-helping:before {
  content: "\f4c4";
}
.fa-hands-wash:before {
  content: "\e05e";
}
.fa-handshake:before {
  content: "\f2b5";
}
.fa-handshake-alt-slash:before {
  content: "\e05f";
}
.fa-handshake-slash:before {
  content: "\e060";
}
.fa-hanukiah:before {
  content: "\f6e6";
}
.fa-hard-hat:before {
  content: "\f807";
}
.fa-hashtag:before {
  content: "\f292";
}
.fa-hat-cowboy:before {
  content: "\f8c0";
}
.fa-hat-cowboy-side:before {
  content: "\f8c1";
}
.fa-hat-wizard:before {
  content: "\f6e8";
}
.fa-hdd:before {
  content: "\f0a0";
}
.fa-head-side-cough:before {
  content: "\e061";
}
.fa-head-side-cough-slash:before {
  content: "\e062";
}
.fa-head-side-mask:before {
  content: "\e063";
}
.fa-head-side-virus:before {
  content: "\e064";
}
.fa-heading:before {
  content: "\f1dc";
}
.fa-headphones:before {
  content: "\f025";
}
.fa-headphones-alt:before {
  content: "\f58f";
}
.fa-headset:before {
  content: "\f590";
}
.fa-heart:before {
  content: "\f004";
}
.fa-heart-broken:before {
  content: "\f7a9";
}
.fa-heartbeat:before {
  content: "\f21e";
}
.fa-helicopter:before {
  content: "\f533";
}
.fa-highlighter:before {
  content: "\f591";
}
.fa-hiking:before {
  content: "\f6ec";
}
.fa-hippo:before {
  content: "\f6ed";
}
.fa-hips:before {
  content: "\f452";
}
.fa-hire-a-helper:before {
  content: "\f3b0";
}
.fa-history:before {
  content: "\f1da";
}
.fa-hive:before {
  content: "\e07f";
}
.fa-hockey-puck:before {
  content: "\f453";
}
.fa-holly-berry:before {
  content: "\f7aa";
}
.fa-home:before {
  content: "\f015";
}
.fa-hooli:before {
  content: "\f427";
}
.fa-hornbill:before {
  content: "\f592";
}
.fa-horse:before {
  content: "\f6f0";
}
.fa-horse-head:before {
  content: "\f7ab";
}
.fa-hospital:before {
  content: "\f0f8";
}
.fa-hospital-alt:before {
  content: "\f47d";
}
.fa-hospital-symbol:before {
  content: "\f47e";
}
.fa-hospital-user:before {
  content: "\f80d";
}
.fa-hot-tub:before {
  content: "\f593";
}
.fa-hotdog:before {
  content: "\f80f";
}
.fa-hotel:before {
  content: "\f594";
}
.fa-hotjar:before {
  content: "\f3b1";
}
.fa-hourglass:before {
  content: "\f254";
}
.fa-hourglass-end:before {
  content: "\f253";
}
.fa-hourglass-half:before {
  content: "\f252";
}
.fa-hourglass-start:before {
  content: "\f251";
}
.fa-house-damage:before {
  content: "\f6f1";
}
.fa-house-user:before {
  content: "\e065";
}
.fa-houzz:before {
  content: "\f27c";
}
.fa-hryvnia:before {
  content: "\f6f2";
}
.fa-html5:before {
  content: "\f13b";
}
.fa-hubspot:before {
  content: "\f3b2";
}
.fa-i-cursor:before {
  content: "\f246";
}
.fa-ice-cream:before {
  content: "\f810";
}
.fa-icicles:before {
  content: "\f7ad";
}
.fa-icons:before {
  content: "\f86d";
}
.fa-id-badge:before {
  content: "\f2c1";
}
.fa-id-card:before {
  content: "\f2c2";
}
.fa-id-card-alt:before {
  content: "\f47f";
}
.fa-ideal:before {
  content: "\e013";
}
.fa-igloo:before {
  content: "\f7ae";
}
.fa-image:before {
  content: "\f03e";
}
.fa-images:before {
  content: "\f302";
}
.fa-imdb:before {
  content: "\f2d8";
}
.fa-inbox:before {
  content: "\f01c";
}
.fa-indent:before {
  content: "\f03c";
}
.fa-industry:before {
  content: "\f275";
}
.fa-infinity:before {
  content: "\f534";
}
.fa-info:before {
  content: "\f129";
}
.fa-info-circle:before {
  content: "\f05a";
}
.fa-innosoft:before {
  content: "\e080";
}
.fa-instagram:before {
  content: "\f16d";
}
.fa-instagram-square:before {
  content: "\e055";
}
.fa-instalod:before {
  content: "\e081";
}
.fa-intercom:before {
  content: "\f7af";
}
.fa-internet-explorer:before {
  content: "\f26b";
}
.fa-invision:before {
  content: "\f7b0";
}
.fa-ioxhost:before {
  content: "\f208";
}
.fa-italic:before {
  content: "\f033";
}
.fa-itch-io:before {
  content: "\f83a";
}
.fa-itunes:before {
  content: "\f3b4";
}
.fa-itunes-note:before {
  content: "\f3b5";
}
.fa-java:before {
  content: "\f4e4";
}
.fa-jedi:before {
  content: "\f669";
}
.fa-jedi-order:before {
  content: "\f50e";
}
.fa-jenkins:before {
  content: "\f3b6";
}
.fa-jira:before {
  content: "\f7b1";
}
.fa-joget:before {
  content: "\f3b7";
}
.fa-joint:before {
  content: "\f595";
}
.fa-joomla:before {
  content: "\f1aa";
}
.fa-journal-whills:before {
  content: "\f66a";
}
.fa-js:before {
  content: "\f3b8";
}
.fa-js-square:before {
  content: "\f3b9";
}
.fa-jsfiddle:before {
  content: "\f1cc";
}
.fa-kaaba:before {
  content: "\f66b";
}
.fa-kaggle:before {
  content: "\f5fa";
}
.fa-key:before {
  content: "\f084";
}
.fa-keybase:before {
  content: "\f4f5";
}
.fa-keyboard:before {
  content: "\f11c";
}
.fa-keycdn:before {
  content: "\f3ba";
}
.fa-khanda:before {
  content: "\f66d";
}
.fa-kickstarter:before {
  content: "\f3bb";
}
.fa-kickstarter-k:before {
  content: "\f3bc";
}
.fa-kiss:before {
  content: "\f596";
}
.fa-kiss-beam:before {
  content: "\f597";
}
.fa-kiss-wink-heart:before {
  content: "\f598";
}
.fa-kiwi-bird:before {
  content: "\f535";
}
.fa-korvue:before {
  content: "\f42f";
}
.fa-landmark:before {
  content: "\f66f";
}
.fa-language:before {
  content: "\f1ab";
}
.fa-laptop:before {
  content: "\f109";
}
.fa-laptop-code:before {
  content: "\f5fc";
}
.fa-laptop-house:before {
  content: "\e066";
}
.fa-laptop-medical:before {
  content: "\f812";
}
.fa-laravel:before {
  content: "\f3bd";
}
.fa-lastfm:before {
  content: "\f202";
}
.fa-lastfm-square:before {
  content: "\f203";
}
.fa-laugh:before {
  content: "\f599";
}
.fa-laugh-beam:before {
  content: "\f59a";
}
.fa-laugh-squint:before {
  content: "\f59b";
}
.fa-laugh-wink:before {
  content: "\f59c";
}
.fa-layer-group:before {
  content: "\f5fd";
}
.fa-leaf:before {
  content: "\f06c";
}
.fa-leanpub:before {
  content: "\f212";
}
.fa-lemon:before {
  content: "\f094";
}
.fa-less:before {
  content: "\f41d";
}
.fa-less-than:before {
  content: "\f536";
}
.fa-less-than-equal:before {
  content: "\f537";
}
.fa-level-down-alt:before {
  content: "\f3be";
}
.fa-level-up-alt:before {
  content: "\f3bf";
}
.fa-life-ring:before {
  content: "\f1cd";
}
.fa-lightbulb:before {
  content: "\f0eb";
}
.fa-line:before {
  content: "\f3c0";
}
.fa-link:before {
  content: "\f0c1";
}
.fa-linkedin:before {
  content: "\f08c";
}
.fa-linkedin-in:before {
  content: "\f0e1";
}
.fa-linode:before {
  content: "\f2b8";
}
.fa-linux:before {
  content: "\f17c";
}
.fa-lira-sign:before {
  content: "\f195";
}
.fa-list:before {
  content: "\f03a";
}
.fa-list-alt:before {
  content: "\f022";
}
.fa-list-ol:before {
  content: "\f0cb";
}
.fa-list-ul:before {
  content: "\f0ca";
}
.fa-location-arrow:before {
  content: "\f124";
}
.fa-lock:before {
  content: "\f023";
}
.fa-lock-open:before {
  content: "\f3c1";
}
.fa-long-arrow-alt-down:before {
  content: "\f309";
}
.fa-long-arrow-alt-left:before {
  content: "\f30a";
}
.fa-long-arrow-alt-right:before {
  content: "\f30b";
}
.fa-long-arrow-alt-up:before {
  content: "\f30c";
}
.fa-low-vision:before {
  content: "\f2a8";
}
.fa-luggage-cart:before {
  content: "\f59d";
}
.fa-lungs:before {
  content: "\f604";
}
.fa-lungs-virus:before {
  content: "\e067";
}
.fa-lyft:before {
  content: "\f3c3";
}
.fa-magento:before {
  content: "\f3c4";
}
.fa-magic:before {
  content: "\f0d0";
}
.fa-magnet:before {
  content: "\f076";
}
.fa-mail-bulk:before {
  content: "\f674";
}
.fa-mailchimp:before {
  content: "\f59e";
}
.fa-male:before {
  content: "\f183";
}
.fa-mandalorian:before {
  content: "\f50f";
}
.fa-map:before {
  content: "\f279";
}
.fa-map-marked:before {
  content: "\f59f";
}
.fa-map-marked-alt:before {
  content: "\f5a0";
}
.fa-map-marker:before {
  content: "\f041";
}
.fa-map-marker-alt:before {
  content: "\f3c5";
}
.fa-map-pin:before {
  content: "\f276";
}
.fa-map-signs:before {
  content: "\f277";
}
.fa-markdown:before {
  content: "\f60f";
}
.fa-marker:before {
  content: "\f5a1";
}
.fa-mars:before {
  content: "\f222";
}
.fa-mars-double:before {
  content: "\f227";
}
.fa-mars-stroke:before {
  content: "\f229";
}
.fa-mars-stroke-h:before {
  content: "\f22b";
}
.fa-mars-stroke-v:before {
  content: "\f22a";
}
.fa-mask:before {
  content: "\f6fa";
}
.fa-mastodon:before {
  content: "\f4f6";
}
.fa-maxcdn:before {
  content: "\f136";
}
.fa-mdb:before {
  content: "\f8ca";
}
.fa-medal:before {
  content: "\f5a2";
}
.fa-medapps:before {
  content: "\f3c6";
}
.fa-medium:before {
  content: "\f23a";
}
.fa-medium-m:before {
  content: "\f3c7";
}
.fa-medkit:before {
  content: "\f0fa";
}
.fa-medrt:before {
  content: "\f3c8";
}
.fa-meetup:before {
  content: "\f2e0";
}
.fa-megaport:before {
  content: "\f5a3";
}
.fa-meh:before {
  content: "\f11a";
}
.fa-meh-blank:before {
  content: "\f5a4";
}
.fa-meh-rolling-eyes:before {
  content: "\f5a5";
}
.fa-memory:before {
  content: "\f538";
}
.fa-mendeley:before {
  content: "\f7b3";
}
.fa-menorah:before {
  content: "\f676";
}
.fa-mercury:before {
  content: "\f223";
}
.fa-meteor:before {
  content: "\f753";
}
.fa-microblog:before {
  content: "\e01a";
}
.fa-microchip:before {
  content: "\f2db";
}
.fa-microphone:before {
  content: "\f130";
}
.fa-microphone-alt:before {
  content: "\f3c9";
}
.fa-microphone-alt-slash:before {
  content: "\f539";
}
.fa-microphone-slash:before {
  content: "\f131";
}
.fa-microscope:before {
  content: "\f610";
}
.fa-microsoft:before {
  content: "\f3ca";
}
.fa-minus:before {
  content: "\f068";
}
.fa-minus-circle:before {
  content: "\f056";
}
.fa-minus-square:before {
  content: "\f146";
}
.fa-mitten:before {
  content: "\f7b5";
}
.fa-mix:before {
  content: "\f3cb";
}
.fa-mixcloud:before {
  content: "\f289";
}
.fa-mixer:before {
  content: "\e056";
}
.fa-mizuni:before {
  content: "\f3cc";
}
.fa-mobile:before {
  content: "\f10b";
}
.fa-mobile-alt:before {
  content: "\f3cd";
}
.fa-modx:before {
  content: "\f285";
}
.fa-monero:before {
  content: "\f3d0";
}
.fa-money-bill:before {
  content: "\f0d6";
}
.fa-money-bill-alt:before {
  content: "\f3d1";
}
.fa-money-bill-wave:before {
  content: "\f53a";
}
.fa-money-bill-wave-alt:before {
  content: "\f53b";
}
.fa-money-check:before {
  content: "\f53c";
}
.fa-money-check-alt:before {
  content: "\f53d";
}
.fa-monument:before {
  content: "\f5a6";
}
.fa-moon:before {
  content: "\f186";
}
.fa-mortar-pestle:before {
  content: "\f5a7";
}
.fa-mosque:before {
  content: "\f678";
}
.fa-motorcycle:before {
  content: "\f21c";
}
.fa-mountain:before {
  content: "\f6fc";
}
.fa-mouse:before {
  content: "\f8cc";
}
.fa-mouse-pointer:before {
  content: "\f245";
}
.fa-mug-hot:before {
  content: "\f7b6";
}
.fa-music:before {
  content: "\f001";
}
.fa-napster:before {
  content: "\f3d2";
}
.fa-neos:before {
  content: "\f612";
}
.fa-network-wired:before {
  content: "\f6ff";
}
.fa-neuter:before {
  content: "\f22c";
}
.fa-newspaper:before {
  content: "\f1ea";
}
.fa-nimblr:before {
  content: "\f5a8";
}
.fa-node:before {
  content: "\f419";
}
.fa-node-js:before {
  content: "\f3d3";
}
.fa-not-equal:before {
  content: "\f53e";
}
.fa-notes-medical:before {
  content: "\f481";
}
.fa-npm:before {
  content: "\f3d4";
}
.fa-ns8:before {
  content: "\f3d5";
}
.fa-nutritionix:before {
  content: "\f3d6";
}
.fa-object-group:before {
  content: "\f247";
}
.fa-object-ungroup:before {
  content: "\f248";
}
.fa-octopus-deploy:before {
  content: "\e082";
}
.fa-odnoklassniki:before {
  content: "\f263";
}
.fa-odnoklassniki-square:before {
  content: "\f264";
}
.fa-oil-can:before {
  content: "\f613";
}
.fa-old-republic:before {
  content: "\f510";
}
.fa-om:before {
  content: "\f679";
}
.fa-opencart:before {
  content: "\f23d";
}
.fa-openid:before {
  content: "\f19b";
}
.fa-opera:before {
  content: "\f26a";
}
.fa-optin-monster:before {
  content: "\f23c";
}
.fa-orcid:before {
  content: "\f8d2";
}
.fa-osi:before {
  content: "\f41a";
}
.fa-otter:before {
  content: "\f700";
}
.fa-outdent:before {
  content: "\f03b";
}
.fa-page4:before {
  content: "\f3d7";
}
.fa-pagelines:before {
  content: "\f18c";
}
.fa-pager:before {
  content: "\f815";
}
.fa-paint-brush:before {
  content: "\f1fc";
}
.fa-paint-roller:before {
  content: "\f5aa";
}
.fa-palette:before {
  content: "\f53f";
}
.fa-palfed:before {
  content: "\f3d8";
}
.fa-pallet:before {
  content: "\f482";
}
.fa-paper-plane:before {
  content: "\f1d8";
}
.fa-paperclip:before {
  content: "\f0c6";
}
.fa-parachute-box:before {
  content: "\f4cd";
}
.fa-paragraph:before {
  content: "\f1dd";
}
.fa-parking:before {
  content: "\f540";
}
.fa-passport:before {
  content: "\f5ab";
}
.fa-pastafarianism:before {
  content: "\f67b";
}
.fa-paste:before {
  content: "\f0ea";
}
.fa-patreon:before {
  content: "\f3d9";
}
.fa-pause:before {
  content: "\f04c";
}
.fa-pause-circle:before {
  content: "\f28b";
}
.fa-paw:before {
  content: "\f1b0";
}
.fa-paypal:before {
  content: "\f1ed";
}
.fa-peace:before {
  content: "\f67c";
}
.fa-pen:before {
  content: "\f304";
}
.fa-pen-alt:before {
  content: "\f305";
}
.fa-pen-fancy:before {
  content: "\f5ac";
}
.fa-pen-nib:before {
  content: "\f5ad";
}
.fa-pen-square:before {
  content: "\f14b";
}
.fa-pencil-alt:before {
  content: "\f303";
}
.fa-pencil-ruler:before {
  content: "\f5ae";
}
.fa-penny-arcade:before {
  content: "\f704";
}
.fa-people-arrows:before {
  content: "\e068";
}
.fa-people-carry:before {
  content: "\f4ce";
}
.fa-pepper-hot:before {
  content: "\f816";
}
.fa-perbyte:before {
  content: "\e083";
}
.fa-percent:before {
  content: "\f295";
}
.fa-percentage:before {
  content: "\f541";
}
.fa-periscope:before {
  content: "\f3da";
}
.fa-person-booth:before {
  content: "\f756";
}
.fa-phabricator:before {
  content: "\f3db";
}
.fa-phoenix-framework:before {
  content: "\f3dc";
}
.fa-phoenix-squadron:before {
  content: "\f511";
}
.fa-phone:before {
  content: "\f095";
}
.fa-phone-alt:before {
  content: "\f879";
}
.fa-phone-slash:before {
  content: "\f3dd";
}
.fa-phone-square:before {
  content: "\f098";
}
.fa-phone-square-alt:before {
  content: "\f87b";
}
.fa-phone-volume:before {
  content: "\f2a0";
}
.fa-photo-video:before {
  content: "\f87c";
}
.fa-php:before {
  content: "\f457";
}
.fa-pied-piper:before {
  content: "\f2ae";
}
.fa-pied-piper-alt:before {
  content: "\f1a8";
}
.fa-pied-piper-hat:before {
  content: "\f4e5";
}
.fa-pied-piper-pp:before {
  content: "\f1a7";
}
.fa-pied-piper-square:before {
  content: "\e01e";
}
.fa-piggy-bank:before {
  content: "\f4d3";
}
.fa-pills:before {
  content: "\f484";
}
.fa-pinterest:before {
  content: "\f0d2";
}
.fa-pinterest-p:before {
  content: "\f231";
}
.fa-pinterest-square:before {
  content: "\f0d3";
}
.fa-pizza-slice:before {
  content: "\f818";
}
.fa-place-of-worship:before {
  content: "\f67f";
}
.fa-plane:before {
  content: "\f072";
}
.fa-plane-arrival:before {
  content: "\f5af";
}
.fa-plane-departure:before {
  content: "\f5b0";
}
.fa-plane-slash:before {
  content: "\e069";
}
.fa-play:before {
  content: "\f04b";
}
.fa-play-circle:before {
  content: "\f144";
}
.fa-playstation:before {
  content: "\f3df";
}
.fa-plug:before {
  content: "\f1e6";
}
.fa-plus:before {
  content: "\f067";
}
.fa-plus-circle:before {
  content: "\f055";
}
.fa-plus-square:before {
  content: "\f0fe";
}
.fa-podcast:before {
  content: "\f2ce";
}
.fa-poll:before {
  content: "\f681";
}
.fa-poll-h:before {
  content: "\f682";
}
.fa-poo:before {
  content: "\f2fe";
}
.fa-poo-storm:before {
  content: "\f75a";
}
.fa-poop:before {
  content: "\f619";
}
.fa-portrait:before {
  content: "\f3e0";
}
.fa-pound-sign:before {
  content: "\f154";
}
.fa-power-off:before {
  content: "\f011";
}
.fa-pray:before {
  content: "\f683";
}
.fa-praying-hands:before {
  content: "\f684";
}
.fa-prescription:before {
  content: "\f5b1";
}
.fa-prescription-bottle:before {
  content: "\f485";
}
.fa-prescription-bottle-alt:before {
  content: "\f486";
}
.fa-print:before {
  content: "\f02f";
}
.fa-procedures:before {
  content: "\f487";
}
.fa-product-hunt:before {
  content: "\f288";
}
.fa-project-diagram:before {
  content: "\f542";
}
.fa-pump-medical:before {
  content: "\e06a";
}
.fa-pump-soap:before {
  content: "\e06b";
}
.fa-pushed:before {
  content: "\f3e1";
}
.fa-puzzle-piece:before {
  content: "\f12e";
}
.fa-python:before {
  content: "\f3e2";
}
.fa-qq:before {
  content: "\f1d6";
}
.fa-qrcode:before {
  content: "\f029";
}
.fa-question:before {
  content: "\f128";
}
.fa-question-circle:before {
  content: "\f059";
}
.fa-quidditch:before {
  content: "\f458";
}
.fa-quinscape:before {
  content: "\f459";
}
.fa-quora:before {
  content: "\f2c4";
}
.fa-quote-left:before {
  content: "\f10d";
}
.fa-quote-right:before {
  content: "\f10e";
}
.fa-quran:before {
  content: "\f687";
}
.fa-r-project:before {
  content: "\f4f7";
}
.fa-radiation:before {
  content: "\f7b9";
}
.fa-radiation-alt:before {
  content: "\f7ba";
}
.fa-rainbow:before {
  content: "\f75b";
}
.fa-random:before {
  content: "\f074";
}
.fa-raspberry-pi:before {
  content: "\f7bb";
}
.fa-ravelry:before {
  content: "\f2d9";
}
.fa-react:before {
  content: "\f41b";
}
.fa-reacteurope:before {
  content: "\f75d";
}
.fa-readme:before {
  content: "\f4d5";
}
.fa-rebel:before {
  content: "\f1d0";
}
.fa-receipt:before {
  content: "\f543";
}
.fa-record-vinyl:before {
  content: "\f8d9";
}
.fa-recycle:before {
  content: "\f1b8";
}
.fa-red-river:before {
  content: "\f3e3";
}
.fa-reddit:before {
  content: "\f1a1";
}
.fa-reddit-alien:before {
  content: "\f281";
}
.fa-reddit-square:before {
  content: "\f1a2";
}
.fa-redhat:before {
  content: "\f7bc";
}
.fa-redo:before {
  content: "\f01e";
}
.fa-redo-alt:before {
  content: "\f2f9";
}
.fa-registered:before {
  content: "\f25d";
}
.fa-remove-format:before {
  content: "\f87d";
}
.fa-renren:before {
  content: "\f18b";
}
.fa-reply:before {
  content: "\f3e5";
}
.fa-reply-all:before {
  content: "\f122";
}
.fa-replyd:before {
  content: "\f3e6";
}
.fa-republican:before {
  content: "\f75e";
}
.fa-researchgate:before {
  content: "\f4f8";
}
.fa-resolving:before {
  content: "\f3e7";
}
.fa-restroom:before {
  content: "\f7bd";
}
.fa-retweet:before {
  content: "\f079";
}
.fa-rev:before {
  content: "\f5b2";
}
.fa-ribbon:before {
  content: "\f4d6";
}
.fa-ring:before {
  content: "\f70b";
}
.fa-road:before {
  content: "\f018";
}
.fa-robot:before {
  content: "\f544";
}
.fa-rocket:before {
  content: "\f135";
}
.fa-rocketchat:before {
  content: "\f3e8";
}
.fa-rockrms:before {
  content: "\f3e9";
}
.fa-route:before {
  content: "\f4d7";
}
.fa-rss:before {
  content: "\f09e";
}
.fa-rss-square:before {
  content: "\f143";
}
.fa-ruble-sign:before {
  content: "\f158";
}
.fa-ruler:before {
  content: "\f545";
}
.fa-ruler-combined:before {
  content: "\f546";
}
.fa-ruler-horizontal:before {
  content: "\f547";
}
.fa-ruler-vertical:before {
  content: "\f548";
}
.fa-running:before {
  content: "\f70c";
}
.fa-rupee-sign:before {
  content: "\f156";
}
.fa-rust:before {
  content: "\e07a";
}
.fa-sad-cry:before {
  content: "\f5b3";
}
.fa-sad-tear:before {
  content: "\f5b4";
}
.fa-safari:before {
  content: "\f267";
}
.fa-salesforce:before {
  content: "\f83b";
}
.fa-sass:before {
  content: "\f41e";
}
.fa-satellite:before {
  content: "\f7bf";
}
.fa-satellite-dish:before {
  content: "\f7c0";
}
.fa-save:before {
  content: "\f0c7";
}
.fa-schlix:before {
  content: "\f3ea";
}
.fa-school:before {
  content: "\f549";
}
.fa-screwdriver:before {
  content: "\f54a";
}
.fa-scribd:before {
  content: "\f28a";
}
.fa-scroll:before {
  content: "\f70e";
}
.fa-sd-card:before {
  content: "\f7c2";
}
.fa-search:before {
  content: "\f002";
}
.fa-search-dollar:before {
  content: "\f688";
}
.fa-search-location:before {
  content: "\f689";
}
.fa-search-minus:before {
  content: "\f010";
}
.fa-search-plus:before {
  content: "\f00e";
}
.fa-searchengin:before {
  content: "\f3eb";
}
.fa-seedling:before {
  content: "\f4d8";
}
.fa-sellcast:before {
  content: "\f2da";
}
.fa-sellsy:before {
  content: "\f213";
}
.fa-server:before {
  content: "\f233";
}
.fa-servicestack:before {
  content: "\f3ec";
}
.fa-shapes:before {
  content: "\f61f";
}
.fa-share:before {
  content: "\f064";
}
.fa-share-alt:before {
  content: "\f1e0";
}
.fa-share-alt-square:before {
  content: "\f1e1";
}
.fa-share-square:before {
  content: "\f14d";
}
.fa-shekel-sign:before {
  content: "\f20b";
}
.fa-shield-alt:before {
  content: "\f3ed";
}
.fa-shield-virus:before {
  content: "\e06c";
}
.fa-ship:before {
  content: "\f21a";
}
.fa-shipping-fast:before {
  content: "\f48b";
}
.fa-shirtsinbulk:before {
  content: "\f214";
}
.fa-shoe-prints:before {
  content: "\f54b";
}
.fa-shopify:before {
  content: "\e057";
}
.fa-shopping-bag:before {
  content: "\f290";
}
.fa-shopping-basket:before {
  content: "\f291";
}
.fa-shopping-cart:before {
  content: "\f07a";
}
.fa-shopware:before {
  content: "\f5b5";
}
.fa-shower:before {
  content: "\f2cc";
}
.fa-shuttle-van:before {
  content: "\f5b6";
}
.fa-sign:before {
  content: "\f4d9";
}
.fa-sign-in-alt:before {
  content: "\f2f6";
}
.fa-sign-language:before {
  content: "\f2a7";
}
.fa-sign-out-alt:before {
  content: "\f2f5";
}
.fa-signal:before {
  content: "\f012";
}
.fa-signature:before {
  content: "\f5b7";
}
.fa-sim-card:before {
  content: "\f7c4";
}
.fa-simplybuilt:before {
  content: "\f215";
}
.fa-sink:before {
  content: "\e06d";
}
.fa-sistrix:before {
  content: "\f3ee";
}
.fa-sitemap:before {
  content: "\f0e8";
}
.fa-sith:before {
  content: "\f512";
}
.fa-skating:before {
  content: "\f7c5";
}
.fa-sketch:before {
  content: "\f7c6";
}
.fa-skiing:before {
  content: "\f7c9";
}
.fa-skiing-nordic:before {
  content: "\f7ca";
}
.fa-skull:before {
  content: "\f54c";
}
.fa-skull-crossbones:before {
  content: "\f714";
}
.fa-skyatlas:before {
  content: "\f216";
}
.fa-skype:before {
  content: "\f17e";
}
.fa-slack:before {
  content: "\f198";
}
.fa-slack-hash:before {
  content: "\f3ef";
}
.fa-slash:before {
  content: "\f715";
}
.fa-sleigh:before {
  content: "\f7cc";
}
.fa-sliders-h:before {
  content: "\f1de";
}
.fa-slideshare:before {
  content: "\f1e7";
}
.fa-smile:before {
  content: "\f118";
}
.fa-smile-beam:before {
  content: "\f5b8";
}
.fa-smile-wink:before {
  content: "\f4da";
}
.fa-smog:before {
  content: "\f75f";
}
.fa-smoking:before {
  content: "\f48d";
}
.fa-smoking-ban:before {
  content: "\f54d";
}
.fa-sms:before {
  content: "\f7cd";
}
.fa-snapchat:before {
  content: "\f2ab";
}
.fa-snapchat-ghost:before {
  content: "\f2ac";
}
.fa-snapchat-square:before {
  content: "\f2ad";
}
.fa-snowboarding:before {
  content: "\f7ce";
}
.fa-snowflake:before {
  content: "\f2dc";
}
.fa-snowman:before {
  content: "\f7d0";
}
.fa-snowplow:before {
  content: "\f7d2";
}
.fa-soap:before {
  content: "\e06e";
}
.fa-socks:before {
  content: "\f696";
}
.fa-solar-panel:before {
  content: "\f5ba";
}
.fa-sort:before {
  content: "\f0dc";
}
.fa-sort-alpha-down:before {
  content: "\f15d";
}
.fa-sort-alpha-down-alt:before {
  content: "\f881";
}
.fa-sort-alpha-up:before {
  content: "\f15e";
}
.fa-sort-alpha-up-alt:before {
  content: "\f882";
}
.fa-sort-amount-down:before {
  content: "\f160";
}
.fa-sort-amount-down-alt:before {
  content: "\f884";
}
.fa-sort-amount-up:before {
  content: "\f161";
}
.fa-sort-amount-up-alt:before {
  content: "\f885";
}
.fa-sort-down:before {
  content: "\f0dd";
}
.fa-sort-numeric-down:before {
  content: "\f162";
}
.fa-sort-numeric-down-alt:before {
  content: "\f886";
}
.fa-sort-numeric-up:before {
  content: "\f163";
}
.fa-sort-numeric-up-alt:before {
  content: "\f887";
}
.fa-sort-up:before {
  content: "\f0de";
}
.fa-soundcloud:before {
  content: "\f1be";
}
.fa-sourcetree:before {
  content: "\f7d3";
}
.fa-spa:before {
  content: "\f5bb";
}
.fa-space-shuttle:before {
  content: "\f197";
}
.fa-speakap:before {
  content: "\f3f3";
}
.fa-speaker-deck:before {
  content: "\f83c";
}
.fa-spell-check:before {
  content: "\f891";
}
.fa-spider:before {
  content: "\f717";
}
.fa-spinner:before {
  content: "\f110";
}
.fa-splotch:before {
  content: "\f5bc";
}
.fa-spotify:before {
  content: "\f1bc";
}
.fa-spray-can:before {
  content: "\f5bd";
}
.fa-square:before {
  content: "\f0c8";
}
.fa-square-full:before {
  content: "\f45c";
}
.fa-square-root-alt:before {
  content: "\f698";
}
.fa-squarespace:before {
  content: "\f5be";
}
.fa-stack-exchange:before {
  content: "\f18d";
}
.fa-stack-overflow:before {
  content: "\f16c";
}
.fa-stackpath:before {
  content: "\f842";
}
.fa-stamp:before {
  content: "\f5bf";
}
.fa-star:before {
  content: "\f005";
}
.fa-star-and-crescent:before {
  content: "\f699";
}
.fa-star-half:before {
  content: "\f089";
}
.fa-star-half-alt:before {
  content: "\f5c0";
}
.fa-star-of-david:before {
  content: "\f69a";
}
.fa-star-of-life:before {
  content: "\f621";
}
.fa-staylinked:before {
  content: "\f3f5";
}
.fa-steam:before {
  content: "\f1b6";
}
.fa-steam-square:before {
  content: "\f1b7";
}
.fa-steam-symbol:before {
  content: "\f3f6";
}
.fa-step-backward:before {
  content: "\f048";
}
.fa-step-forward:before {
  content: "\f051";
}
.fa-stethoscope:before {
  content: "\f0f1";
}
.fa-sticker-mule:before {
  content: "\f3f7";
}
.fa-sticky-note:before {
  content: "\f249";
}
.fa-stop:before {
  content: "\f04d";
}
.fa-stop-circle:before {
  content: "\f28d";
}
.fa-stopwatch:before {
  content: "\f2f2";
}
.fa-stopwatch-20:before {
  content: "\e06f";
}
.fa-store:before {
  content: "\f54e";
}
.fa-store-alt:before {
  content: "\f54f";
}
.fa-store-alt-slash:before {
  content: "\e070";
}
.fa-store-slash:before {
  content: "\e071";
}
.fa-strava:before {
  content: "\f428";
}
.fa-stream:before {
  content: "\f550";
}
.fa-street-view:before {
  content: "\f21d";
}
.fa-strikethrough:before {
  content: "\f0cc";
}
.fa-stripe:before {
  content: "\f429";
}
.fa-stripe-s:before {
  content: "\f42a";
}
.fa-stroopwafel:before {
  content: "\f551";
}
.fa-studiovinari:before {
  content: "\f3f8";
}
.fa-stumbleupon:before {
  content: "\f1a4";
}
.fa-stumbleupon-circle:before {
  content: "\f1a3";
}
.fa-subscript:before {
  content: "\f12c";
}
.fa-subway:before {
  content: "\f239";
}
.fa-suitcase:before {
  content: "\f0f2";
}
.fa-suitcase-rolling:before {
  content: "\f5c1";
}
.fa-sun:before {
  content: "\f185";
}
.fa-superpowers:before {
  content: "\f2dd";
}
.fa-superscript:before {
  content: "\f12b";
}
.fa-supple:before {
  content: "\f3f9";
}
.fa-surprise:before {
  content: "\f5c2";
}
.fa-suse:before {
  content: "\f7d6";
}
.fa-swatchbook:before {
  content: "\f5c3";
}
.fa-swift:before {
  content: "\f8e1";
}
.fa-swimmer:before {
  content: "\f5c4";
}
.fa-swimming-pool:before {
  content: "\f5c5";
}
.fa-symfony:before {
  content: "\f83d";
}
.fa-synagogue:before {
  content: "\f69b";
}
.fa-sync:before {
  content: "\f021";
}
.fa-sync-alt:before {
  content: "\f2f1";
}
.fa-syringe:before {
  content: "\f48e";
}
.fa-table:before {
  content: "\f0ce";
}
.fa-table-tennis:before {
  content: "\f45d";
}
.fa-tablet:before {
  content: "\f10a";
}
.fa-tablet-alt:before {
  content: "\f3fa";
}
.fa-tablets:before {
  content: "\f490";
}
.fa-tachometer-alt:before {
  content: "\f3fd";
}
.fa-tag:before {
  content: "\f02b";
}
.fa-tags:before {
  content: "\f02c";
}
.fa-tape:before {
  content: "\f4db";
}
.fa-tasks:before {
  content: "\f0ae";
}
.fa-taxi:before {
  content: "\f1ba";
}
.fa-teamspeak:before {
  content: "\f4f9";
}
.fa-teeth:before {
  content: "\f62e";
}
.fa-teeth-open:before {
  content: "\f62f";
}
.fa-telegram:before {
  content: "\f2c6";
}
.fa-telegram-plane:before {
  content: "\f3fe";
}
.fa-temperature-high:before {
  content: "\f769";
}
.fa-temperature-low:before {
  content: "\f76b";
}
.fa-tencent-weibo:before {
  content: "\f1d5";
}
.fa-tenge:before {
  content: "\f7d7";
}
.fa-terminal:before {
  content: "\f120";
}
.fa-text-height:before {
  content: "\f034";
}
.fa-text-width:before {
  content: "\f035";
}
.fa-th:before {
  content: "\f00a";
}
.fa-th-large:before {
  content: "\f009";
}
.fa-th-list:before {
  content: "\f00b";
}
.fa-the-red-yeti:before {
  content: "\f69d";
}
.fa-theater-masks:before {
  content: "\f630";
}
.fa-themeco:before {
  content: "\f5c6";
}
.fa-themeisle:before {
  content: "\f2b2";
}
.fa-thermometer:before {
  content: "\f491";
}
.fa-thermometer-empty:before {
  content: "\f2cb";
}
.fa-thermometer-full:before {
  content: "\f2c7";
}
.fa-thermometer-half:before {
  content: "\f2c9";
}
.fa-thermometer-quarter:before {
  content: "\f2ca";
}
.fa-thermometer-three-quarters:before {
  content: "\f2c8";
}
.fa-think-peaks:before {
  content: "\f731";
}
.fa-thumbs-down:before {
  content: "\f165";
}
.fa-thumbs-up:before {
  content: "\f164";
}
.fa-thumbtack:before {
  content: "\f08d";
}
.fa-ticket-alt:before {
  content: "\f3ff";
}
.fa-tiktok:before {
  content: "\e07b";
}
.fa-times:before {
  content: "\f00d";
}
.fa-times-circle:before {
  content: "\f057";
}
.fa-tint:before {
  content: "\f043";
}
.fa-tint-slash:before {
  content: "\f5c7";
}
.fa-tired:before {
  content: "\f5c8";
}
.fa-toggle-off:before {
  content: "\f204";
}
.fa-toggle-on:before {
  content: "\f205";
}
.fa-toilet:before {
  content: "\f7d8";
}
.fa-toilet-paper:before {
  content: "\f71e";
}
.fa-toilet-paper-slash:before {
  content: "\e072";
}
.fa-toolbox:before {
  content: "\f552";
}
.fa-tools:before {
  content: "\f7d9";
}
.fa-tooth:before {
  content: "\f5c9";
}
.fa-torah:before {
  content: "\f6a0";
}
.fa-torii-gate:before {
  content: "\f6a1";
}
.fa-tractor:before {
  content: "\f722";
}
.fa-trade-federation:before {
  content: "\f513";
}
.fa-trademark:before {
  content: "\f25c";
}
.fa-traffic-light:before {
  content: "\f637";
}
.fa-trailer:before {
  content: "\e041";
}
.fa-train:before {
  content: "\f238";
}
.fa-tram:before {
  content: "\f7da";
}
.fa-transgender:before {
  content: "\f224";
}
.fa-transgender-alt:before {
  content: "\f225";
}
.fa-trash:before {
  content: "\f1f8";
}
.fa-trash-alt:before {
  content: "\f2ed";
}
.fa-trash-restore:before {
  content: "\f829";
}
.fa-trash-restore-alt:before {
  content: "\f82a";
}
.fa-tree:before {
  content: "\f1bb";
}
.fa-trello:before {
  content: "\f181";
}
.fa-trophy:before {
  content: "\f091";
}
.fa-truck:before {
  content: "\f0d1";
}
.fa-truck-loading:before {
  content: "\f4de";
}
.fa-truck-monster:before {
  content: "\f63b";
}
.fa-truck-moving:before {
  content: "\f4df";
}
.fa-truck-pickup:before {
  content: "\f63c";
}
.fa-tshirt:before {
  content: "\f553";
}
.fa-tty:before {
  content: "\f1e4";
}
.fa-tumblr:before {
  content: "\f173";
}
.fa-tumblr-square:before {
  content: "\f174";
}
.fa-tv:before {
  content: "\f26c";
}
.fa-twitch:before {
  content: "\f1e8";
}
.fa-twitter:before {
  content: "\f099";
}
.fa-twitter-square:before {
  content: "\f081";
}
.fa-typo3:before {
  content: "\f42b";
}
.fa-uber:before {
  content: "\f402";
}
.fa-ubuntu:before {
  content: "\f7df";
}
.fa-uikit:before {
  content: "\f403";
}
.fa-umbraco:before {
  content: "\f8e8";
}
.fa-umbrella:before {
  content: "\f0e9";
}
.fa-umbrella-beach:before {
  content: "\f5ca";
}
.fa-uncharted:before {
  content: "\e084";
}
.fa-underline:before {
  content: "\f0cd";
}
.fa-undo:before {
  content: "\f0e2";
}
.fa-undo-alt:before {
  content: "\f2ea";
}
.fa-uniregistry:before {
  content: "\f404";
}
.fa-unity:before {
  content: "\e049";
}
.fa-universal-access:before {
  content: "\f29a";
}
.fa-university:before {
  content: "\f19c";
}
.fa-unlink:before {
  content: "\f127";
}
.fa-unlock:before {
  content: "\f09c";
}
.fa-unlock-alt:before {
  content: "\f13e";
}
.fa-unsplash:before {
  content: "\e07c";
}
.fa-untappd:before {
  content: "\f405";
}
.fa-upload:before {
  content: "\f093";
}
.fa-ups:before {
  content: "\f7e0";
}
.fa-usb:before {
  content: "\f287";
}
.fa-user:before {
  content: "\f007";
}
.fa-user-alt:before {
  content: "\f406";
}
.fa-user-alt-slash:before {
  content: "\f4fa";
}
.fa-user-astronaut:before {
  content: "\f4fb";
}
.fa-user-check:before {
  content: "\f4fc";
}
.fa-user-circle:before {
  content: "\f2bd";
}
.fa-user-clock:before {
  content: "\f4fd";
}
.fa-user-cog:before {
  content: "\f4fe";
}
.fa-user-edit:before {
  content: "\f4ff";
}
.fa-user-friends:before {
  content: "\f500";
}
.fa-user-graduate:before {
  content: "\f501";
}
.fa-user-injured:before {
  content: "\f728";
}
.fa-user-lock:before {
  content: "\f502";
}
.fa-user-md:before {
  content: "\f0f0";
}
.fa-user-minus:before {
  content: "\f503";
}
.fa-user-ninja:before {
  content: "\f504";
}
.fa-user-nurse:before {
  content: "\f82f";
}
.fa-user-plus:before {
  content: "\f234";
}
.fa-user-secret:before {
  content: "\f21b";
}
.fa-user-shield:before {
  content: "\f505";
}
.fa-user-slash:before {
  content: "\f506";
}
.fa-user-tag:before {
  content: "\f507";
}
.fa-user-tie:before {
  content: "\f508";
}
.fa-user-times:before {
  content: "\f235";
}
.fa-users:before {
  content: "\f0c0";
}
.fa-users-cog:before {
  content: "\f509";
}
.fa-users-slash:before {
  content: "\e073";
}
.fa-usps:before {
  content: "\f7e1";
}
.fa-ussunnah:before {
  content: "\f407";
}
.fa-utensil-spoon:before {
  content: "\f2e5";
}
.fa-utensils:before {
  content: "\f2e7";
}
.fa-vaadin:before {
  content: "\f408";
}
.fa-vector-square:before {
  content: "\f5cb";
}
.fa-venus:before {
  content: "\f221";
}
.fa-venus-double:before {
  content: "\f226";
}
.fa-venus-mars:before {
  content: "\f228";
}
.fa-vest:before {
  content: "\e085";
}
.fa-vest-patches:before {
  content: "\e086";
}
.fa-viacoin:before {
  content: "\f237";
}
.fa-viadeo:before {
  content: "\f2a9";
}
.fa-viadeo-square:before {
  content: "\f2aa";
}
.fa-vial:before {
  content: "\f492";
}
.fa-vials:before {
  content: "\f493";
}
.fa-viber:before {
  content: "\f409";
}
.fa-video:before {
  content: "\f03d";
}
.fa-video-slash:before {
  content: "\f4e2";
}
.fa-vihara:before {
  content: "\f6a7";
}
.fa-vimeo:before {
  content: "\f40a";
}
.fa-vimeo-square:before {
  content: "\f194";
}
.fa-vimeo-v:before {
  content: "\f27d";
}
.fa-vine:before {
  content: "\f1ca";
}
.fa-virus:before {
  content: "\e074";
}
.fa-virus-slash:before {
  content: "\e075";
}
.fa-viruses:before {
  content: "\e076";
}
.fa-vk:before {
  content: "\f189";
}
.fa-vnv:before {
  content: "\f40b";
}
.fa-voicemail:before {
  content: "\f897";
}
.fa-volleyball-ball:before {
  content: "\f45f";
}
.fa-volume-down:before {
  content: "\f027";
}
.fa-volume-mute:before {
  content: "\f6a9";
}
.fa-volume-off:before {
  content: "\f026";
}
.fa-volume-up:before {
  content: "\f028";
}
.fa-vote-yea:before {
  content: "\f772";
}
.fa-vr-cardboard:before {
  content: "\f729";
}
.fa-vuejs:before {
  content: "\f41f";
}
.fa-walking:before {
  content: "\f554";
}
.fa-wallet:before {
  content: "\f555";
}
.fa-warehouse:before {
  content: "\f494";
}
.fa-watchman-monitoring:before {
  content: "\e087";
}
.fa-water:before {
  content: "\f773";
}
.fa-wave-square:before {
  content: "\f83e";
}
.fa-waze:before {
  content: "\f83f";
}
.fa-weebly:before {
  content: "\f5cc";
}
.fa-weibo:before {
  content: "\f18a";
}
.fa-weight:before {
  content: "\f496";
}
.fa-weight-hanging:before {
  content: "\f5cd";
}
.fa-weixin:before {
  content: "\f1d7";
}
.fa-whatsapp:before {
  content: "\f232";
}
.fa-whatsapp-square:before {
  content: "\f40c";
}
.fa-wheelchair:before {
  content: "\f193";
}
.fa-whmcs:before {
  content: "\f40d";
}
.fa-wifi:before {
  content: "\f1eb";
}
.fa-wikipedia-w:before {
  content: "\f266";
}
.fa-wind:before {
  content: "\f72e";
}
.fa-window-close:before {
  content: "\f410";
}
.fa-window-maximize:before {
  content: "\f2d0";
}
.fa-window-minimize:before {
  content: "\f2d1";
}
.fa-window-restore:before {
  content: "\f2d2";
}
.fa-windows:before {
  content: "\f17a";
}
.fa-wine-bottle:before {
  content: "\f72f";
}
.fa-wine-glass:before {
  content: "\f4e3";
}
.fa-wine-glass-alt:before {
  content: "\f5ce";
}
.fa-wix:before {
  content: "\f5cf";
}
.fa-wizards-of-the-coast:before {
  content: "\f730";
}
.fa-wodu:before {
  content: "\e088";
}
.fa-wolf-pack-battalion:before {
  content: "\f514";
}
.fa-won-sign:before {
  content: "\f159";
}
.fa-wordpress:before {
  content: "\f19a";
}
.fa-wordpress-simple:before {
  content: "\f411";
}
.fa-wpbeginner:before {
  content: "\f297";
}
.fa-wpexplorer:before {
  content: "\f2de";
}
.fa-wpforms:before {
  content: "\f298";
}
.fa-wpressr:before {
  content: "\f3e4";
}
.fa-wrench:before {
  content: "\f0ad";
}
.fa-x-ray:before {
  content: "\f497";
}
.fa-xbox:before {
  content: "\f412";
}
.fa-xing:before {
  content: "\f168";
}
.fa-xing-square:before {
  content: "\f169";
}
.fa-y-combinator:before {
  content: "\f23b";
}
.fa-yahoo:before {
  content: "\f19e";
}
.fa-yammer:before {
  content: "\f840";
}
.fa-yandex:before {
  content: "\f413";
}
.fa-yandex-international:before {
  content: "\f414";
}
.fa-yarn:before {
  content: "\f7e3";
}
.fa-yelp:before {
  content: "\f1e9";
}
.fa-yen-sign:before {
  content: "\f157";
}
.fa-yin-yang:before {
  content: "\f6ad";
}
.fa-yoast:before {
  content: "\f2b1";
}
.fa-youtube:before {
  content: "\f167";
}
.fa-youtube-square:before {
  content: "\f431";
}
.fa-zhihu:before {
  content: "\f63f";
}
.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}
@font-face {
  font-family: "Font Awesome 5 Brands";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(../../fonts/fontAwesome/fa-brands-400.eot);
  src: url(../../fonts/fontAwesome/fa-brands-400.eot?#iefix)
      format("embedded-opentype"),
    url(../../fonts/fontAwesome/fa-brands-400.woff2) format("woff2"),
    url(../../fonts/fontAwesome/fa-brands-400.woff) format("woff"),
    url(../../fonts/fontAwesome/fa-brands-400.ttf) format("truetype"),
    url(../../fonts/fontAwesome/fa-brands-400.svg#fontawesome) format("svg");
}
.fab {
  font-family: "Font Awesome 5 Brands";
}
@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(../../fonts/fontAwesome/fa-regular-400.eot);
  src: url(../../fonts/fontAwesome/fa-regular-400.eot?#iefix)
      format("embedded-opentype"),
    url(../../fonts/fontAwesome/fa-regular-400.woff2) format("woff2"),
    url(../../fonts/fontAwesome/fa-regular-400.woff) format("woff"),
    url(../../fonts/fontAwesome/fa-regular-400.ttf) format("truetype"),
    url(../../fonts/fontAwesome/fa-regular-400.svg#fontawesome) format("svg");
}
.fab,
.far {
  font-weight: 400;
}
@font-face {
  font-family: "Font Awesome 5 Free";
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url(../../fonts/fontAwesome/fa-solid-900.eot);
  src: url(../../fonts/fontAwesome/fa-solid-900.eot?#iefix)
      format("embedded-opentype"),
    url(../../fonts/fontAwesome/fa-solid-900.woff2) format("woff2"),
    url(../../fonts/fontAwesome/fa-solid-900.woff) format("woff"),
    url(../../fonts/fontAwesome/fa-solid-900.ttf) format("truetype"),
    url(../../fonts/fontAwesome/fa-solid-900.svg#fontawesome) format("svg");
}
.fa,
.far,
.fas {
  font-family: "Font Awesome 5 Free";
}
.fa,
.fas {
  font-weight: 900;
}
@font-face {
	font-family: "themify";
	font-weight: normal;
	font-style: normal;

	font-display: swap;
	src: url("../../fonts/themify/themify.eot?-fvbane");
	src: url("../../fonts/themify/themify.eot?#iefix-fvbane") format("embedded-opentype"),
	url("../../fonts/themify/themify.woff?-fvbane") format("woff"),
	url("../../fonts/themify/themify.ttf?-fvbane") format("truetype"),
	url("../../fonts/themify/themify.svg?-fvbane#themify") format("svg");
}

[class^="ti-"], [class*=" ti-"] {
	font-family: "themify";
	font-weight: normal;
	font-style: normal;
	font-variant: normal;
	line-height: 1;

	text-transform: none;

/* Better Font Rendering =========== */

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	speak: none;
}

.ti-wand:before {
	content: "\e600";
}

.ti-volume:before {
	content: "\e601";
}

.ti-user:before {
	content: "\e602";
}

.ti-unlock:before {
	content: "\e603";
}

.ti-unlink:before {
	content: "\e604";
}

.ti-trash:before {
	content: "\e605";
}

.ti-thought:before {
	content: "\e606";
}

.ti-target:before {
	content: "\e607";
}

.ti-tag:before {
	content: "\e608";
}

.ti-tablet:before {
	content: "\e609";
}

.ti-star:before {
	content: "\e60a";
}

.ti-spray:before {
	content: "\e60b";
}

.ti-signal:before {
	content: "\e60c";
}

.ti-shopping-cart:before {
	content: "\e60d";
}

.ti-shopping-cart-full:before {
	content: "\e60e";
}

.ti-settings:before {
	content: "\e60f";
}

.ti-search:before {
	content: "\e610";
}

.ti-zoom-in:before {
	content: "\e611";
}

.ti-zoom-out:before {
	content: "\e612";
}

.ti-cut:before {
	content: "\e613";
}

.ti-ruler:before {
	content: "\e614";
}

.ti-ruler-pencil:before {
	content: "\e615";
}

.ti-ruler-alt:before {
	content: "\e616";
}

.ti-bookmark:before {
	content: "\e617";
}

.ti-bookmark-alt:before {
	content: "\e618";
}

.ti-reload:before {
	content: "\e619";
}

.ti-plus:before {
	content: "\e61a";
}

.ti-pin:before {
	content: "\e61b";
}

.ti-pencil:before {
	content: "\e61c";
}

.ti-pencil-alt:before {
	content: "\e61d";
}

.ti-paint-roller:before {
	content: "\e61e";
}

.ti-paint-bucket:before {
	content: "\e61f";
}

.ti-na:before {
	content: "\e620";
}

.ti-mobile:before {
	content: "\e621";
}

.ti-minus:before {
	content: "\e622";
}

.ti-medall:before {
	content: "\e623";
}

.ti-medall-alt:before {
	content: "\e624";
}

.ti-marker:before {
	content: "\e625";
}

.ti-marker-alt:before {
	content: "\e626";
}

.ti-arrow-up:before {
	content: "\e627";
}

.ti-arrow-right:before {
	content: "\e628";
}

.ti-arrow-left:before {
	content: "\e629";
}

.ti-arrow-down:before {
	content: "\e62a";
}

.ti-lock:before {
	content: "\e62b";
}

.ti-location-arrow:before {
	content: "\e62c";
}

.ti-link:before {
	content: "\e62d";
}

.ti-layout:before {
	content: "\e62e";
}

.ti-layers:before {
	content: "\e62f";
}

.ti-layers-alt:before {
	content: "\e630";
}

.ti-key:before {
	content: "\e631";
}

.ti-import:before {
	content: "\e632";
}

.ti-image:before {
	content: "\e633";
}

.ti-heart:before {
	content: "\e634";
}

.ti-heart-broken:before {
	content: "\e635";
}

.ti-hand-stop:before {
	content: "\e636";
}

.ti-hand-open:before {
	content: "\e637";
}

.ti-hand-drag:before {
	content: "\e638";
}

.ti-folder:before {
	content: "\e639";
}

.ti-flag:before {
	content: "\e63a";
}

.ti-flag-alt:before {
	content: "\e63b";
}

.ti-flag-alt-2:before {
	content: "\e63c";
}

.ti-eye:before {
	content: "\e63d";
}

.ti-export:before {
	content: "\e63e";
}

.ti-exchange-vertical:before {
	content: "\e63f";
}

.ti-desktop:before {
	content: "\e640";
}

.ti-cup:before {
	content: "\e641";
}

.ti-crown:before {
	content: "\e642";
}

.ti-comments:before {
	content: "\e643";
}

.ti-comment:before {
	content: "\e644";
}

.ti-comment-alt:before {
	content: "\e645";
}

.ti-close:before {
	content: "\e646";
}

.ti-clip:before {
	content: "\e647";
}

.ti-angle-up:before {
	content: "\e648";
}

.ti-angle-right:before {
	content: "\e649";
}

.ti-angle-left:before {
	content: "\e64a";
}

.ti-angle-down:before {
	content: "\e64b";
}

.ti-check:before {
	content: "\e64c";
}

.ti-check-box:before {
	content: "\e64d";
}

.ti-camera:before {
	content: "\e64e";
}

.ti-announcement:before {
	content: "\e64f";
}

.ti-brush:before {
	content: "\e650";
}

.ti-briefcase:before {
	content: "\e651";
}

.ti-bolt:before {
	content: "\e652";
}

.ti-bolt-alt:before {
	content: "\e653";
}

.ti-blackboard:before {
	content: "\e654";
}

.ti-bag:before {
	content: "\e655";
}

.ti-move:before {
	content: "\e656";
}

.ti-arrows-vertical:before {
	content: "\e657";
}

.ti-arrows-horizontal:before {
	content: "\e658";
}

.ti-fullscreen:before {
	content: "\e659";
}

.ti-arrow-top-right:before {
	content: "\e65a";
}

.ti-arrow-top-left:before {
	content: "\e65b";
}

.ti-arrow-circle-up:before {
	content: "\e65c";
}

.ti-arrow-circle-right:before {
	content: "\e65d";
}

.ti-arrow-circle-left:before {
	content: "\e65e";
}

.ti-arrow-circle-down:before {
	content: "\e65f";
}

.ti-angle-double-up:before {
	content: "\e660";
}

.ti-angle-double-right:before {
	content: "\e661";
}

.ti-angle-double-left:before {
	content: "\e662";
}

.ti-angle-double-down:before {
	content: "\e663";
}

.ti-zip:before {
	content: "\e664";
}

.ti-world:before {
	content: "\e665";
}

.ti-wheelchair:before {
	content: "\e666";
}

.ti-view-list:before {
	content: "\e667";
}

.ti-view-list-alt:before {
	content: "\e668";
}

.ti-view-grid:before {
	content: "\e669";
}

.ti-uppercase:before {
	content: "\e66a";
}

.ti-upload:before {
	content: "\e66b";
}

.ti-underline:before {
	content: "\e66c";
}

.ti-truck:before {
	content: "\e66d";
}

.ti-timer:before {
	content: "\e66e";
}

.ti-ticket:before {
	content: "\e66f";
}

.ti-thumb-up:before {
	content: "\e670";
}

.ti-thumb-down:before {
	content: "\e671";
}

.ti-text:before {
	content: "\e672";
}

.ti-stats-up:before {
	content: "\e673";
}

.ti-stats-down:before {
	content: "\e674";
}

.ti-split-v:before {
	content: "\e675";
}

.ti-split-h:before {
	content: "\e676";
}

.ti-smallcap:before {
	content: "\e677";
}

.ti-shine:before {
	content: "\e678";
}

.ti-shift-right:before {
	content: "\e679";
}

.ti-shift-left:before {
	content: "\e67a";
}

.ti-shield:before {
	content: "\e67b";
}

.ti-notepad:before {
	content: "\e67c";
}

.ti-server:before {
	content: "\e67d";
}

.ti-quote-right:before {
	content: "\e67e";
}

.ti-quote-left:before {
	content: "\e67f";
}

.ti-pulse:before {
	content: "\e680";
}

.ti-printer:before {
	content: "\e681";
}

.ti-power-off:before {
	content: "\e682";
}

.ti-plug:before {
	content: "\e683";
}

.ti-pie-chart:before {
	content: "\e684";
}

.ti-paragraph:before {
	content: "\e685";
}

.ti-panel:before {
	content: "\e686";
}

.ti-package:before {
	content: "\e687";
}

.ti-music:before {
	content: "\e688";
}

.ti-music-alt:before {
	content: "\e689";
}

.ti-mouse:before {
	content: "\e68a";
}

.ti-mouse-alt:before {
	content: "\e68b";
}

.ti-money:before {
	content: "\e68c";
}

.ti-microphone:before {
	content: "\e68d";
}

.ti-menu:before {
	content: "\e68e";
}

.ti-menu-alt:before {
	content: "\e68f";
}

.ti-map:before {
	content: "\e690";
}

.ti-map-alt:before {
	content: "\e691";
}

.ti-loop:before {
	content: "\e692";
}

.ti-location-pin:before {
	content: "\e693";
}

.ti-list:before {
	content: "\e694";
}

.ti-light-bulb:before {
	content: "\e695";
}

.ti-Italic:before {
	content: "\e696";
}

.ti-info:before {
	content: "\e697";
}

.ti-infinite:before {
	content: "\e698";
}

.ti-id-badge:before {
	content: "\e699";
}

.ti-hummer:before {
	content: "\e69a";
}

.ti-home:before {
	content: "\e69b";
}

.ti-help:before {
	content: "\e69c";
}

.ti-headphone:before {
	content: "\e69d";
}

.ti-harddrives:before {
	content: "\e69e";
}

.ti-harddrive:before {
	content: "\e69f";
}

.ti-gift:before {
	content: "\e6a0";
}

.ti-game:before {
	content: "\e6a1";
}

.ti-filter:before {
	content: "\e6a2";
}

.ti-files:before {
	content: "\e6a3";
}

.ti-file:before {
	content: "\e6a4";
}

.ti-eraser:before {
	content: "\e6a5";
}

.ti-envelope:before {
	content: "\e6a6";
}

.ti-download:before {
	content: "\e6a7";
}

.ti-direction:before {
	content: "\e6a8";
}

.ti-direction-alt:before {
	content: "\e6a9";
}

.ti-dashboard:before {
	content: "\e6aa";
}

.ti-control-stop:before {
	content: "\e6ab";
}

.ti-control-shuffle:before {
	content: "\e6ac";
}

.ti-control-play:before {
	content: "\e6ad";
}

.ti-control-pause:before {
	content: "\e6ae";
}

.ti-control-forward:before {
	content: "\e6af";
}

.ti-control-backward:before {
	content: "\e6b0";
}

.ti-cloud:before {
	content: "\e6b1";
}

.ti-cloud-up:before {
	content: "\e6b2";
}

.ti-cloud-down:before {
	content: "\e6b3";
}

.ti-clipboard:before {
	content: "\e6b4";
}

.ti-car:before {
	content: "\e6b5";
}

.ti-calendar:before {
	content: "\e6b6";
}

.ti-book:before {
	content: "\e6b7";
}

.ti-bell:before {
	content: "\e6b8";
}

.ti-basketball:before {
	content: "\e6b9";
}

.ti-bar-chart:before {
	content: "\e6ba";
}

.ti-bar-chart-alt:before {
	content: "\e6bb";
}

.ti-back-right:before {
	content: "\e6bc";
}

.ti-back-left:before {
	content: "\e6bd";
}

.ti-arrows-corner:before {
	content: "\e6be";
}

.ti-archive:before {
	content: "\e6bf";
}

.ti-anchor:before {
	content: "\e6c0";
}

.ti-align-right:before {
	content: "\e6c1";
}

.ti-align-left:before {
	content: "\e6c2";
}

.ti-align-justify:before {
	content: "\e6c3";
}

.ti-align-center:before {
	content: "\e6c4";
}

.ti-alert:before {
	content: "\e6c5";
}

.ti-alarm-clock:before {
	content: "\e6c6";
}

.ti-agenda:before {
	content: "\e6c7";
}

.ti-write:before {
	content: "\e6c8";
}

.ti-window:before {
	content: "\e6c9";
}

.ti-widgetized:before {
	content: "\e6ca";
}

.ti-widget:before {
	content: "\e6cb";
}

.ti-widget-alt:before {
	content: "\e6cc";
}

.ti-wallet:before {
	content: "\e6cd";
}

.ti-video-clapper:before {
	content: "\e6ce";
}

.ti-video-camera:before {
	content: "\e6cf";
}

.ti-vector:before {
	content: "\e6d0";
}

.ti-themify-logo:before {
	content: "\e6d1";
}

.ti-themify-favicon:before {
	content: "\e6d2";
}

.ti-themify-favicon-alt:before {
	content: "\e6d3";
}

.ti-support:before {
	content: "\e6d4";
}

.ti-stamp:before {
	content: "\e6d5";
}

.ti-split-v-alt:before {
	content: "\e6d6";
}

.ti-slice:before {
	content: "\e6d7";
}

.ti-shortcode:before {
	content: "\e6d8";
}

.ti-shift-right-alt:before {
	content: "\e6d9";
}

.ti-shift-left-alt:before {
	content: "\e6da";
}

.ti-ruler-alt-2:before {
	content: "\e6db";
}

.ti-receipt:before {
	content: "\e6dc";
}

.ti-pin2:before {
	content: "\e6dd";
}

.ti-pin-alt:before {
	content: "\e6de";
}

.ti-pencil-alt2:before {
	content: "\e6df";
}

.ti-palette:before {
	content: "\e6e0";
}

.ti-more:before {
	content: "\e6e1";
}

.ti-more-alt:before {
	content: "\e6e2";
}

.ti-microphone-alt:before {
	content: "\e6e3";
}

.ti-magnet:before {
	content: "\e6e4";
}

.ti-line-double:before {
	content: "\e6e5";
}

.ti-line-dotted:before {
	content: "\e6e6";
}

.ti-line-dashed:before {
	content: "\e6e7";
}

.ti-layout-width-full:before {
	content: "\e6e8";
}

.ti-layout-width-default:before {
	content: "\e6e9";
}

.ti-layout-width-default-alt:before {
	content: "\e6ea";
}

.ti-layout-tab:before {
	content: "\e6eb";
}

.ti-layout-tab-window:before {
	content: "\e6ec";
}

.ti-layout-tab-v:before {
	content: "\e6ed";
}

.ti-layout-tab-min:before {
	content: "\e6ee";
}

.ti-layout-slider:before {
	content: "\e6ef";
}

.ti-layout-slider-alt:before {
	content: "\e6f0";
}

.ti-layout-sidebar-right:before {
	content: "\e6f1";
}

.ti-layout-sidebar-none:before {
	content: "\e6f2";
}

.ti-layout-sidebar-left:before {
	content: "\e6f3";
}

.ti-layout-placeholder:before {
	content: "\e6f4";
}

.ti-layout-menu:before {
	content: "\e6f5";
}

.ti-layout-menu-v:before {
	content: "\e6f6";
}

.ti-layout-menu-separated:before {
	content: "\e6f7";
}

.ti-layout-menu-full:before {
	content: "\e6f8";
}

.ti-layout-media-right-alt:before {
	content: "\e6f9";
}

.ti-layout-media-right:before {
	content: "\e6fa";
}

.ti-layout-media-overlay:before {
	content: "\e6fb";
}

.ti-layout-media-overlay-alt:before {
	content: "\e6fc";
}

.ti-layout-media-overlay-alt-2:before {
	content: "\e6fd";
}

.ti-layout-media-left-alt:before {
	content: "\e6fe";
}

.ti-layout-media-left:before {
	content: "\e6ff";
}

.ti-layout-media-center-alt:before {
	content: "\e700";
}

.ti-layout-media-center:before {
	content: "\e701";
}

.ti-layout-list-thumb:before {
	content: "\e702";
}

.ti-layout-list-thumb-alt:before {
	content: "\e703";
}

.ti-layout-list-post:before {
	content: "\e704";
}

.ti-layout-list-large-image:before {
	content: "\e705";
}

.ti-layout-line-solid:before {
	content: "\e706";
}

.ti-layout-grid4:before {
	content: "\e707";
}

.ti-layout-grid3:before {
	content: "\e708";
}

.ti-layout-grid2:before {
	content: "\e709";
}

.ti-layout-grid2-thumb:before {
	content: "\e70a";
}

.ti-layout-cta-right:before {
	content: "\e70b";
}

.ti-layout-cta-left:before {
	content: "\e70c";
}

.ti-layout-cta-center:before {
	content: "\e70d";
}

.ti-layout-cta-btn-right:before {
	content: "\e70e";
}

.ti-layout-cta-btn-left:before {
	content: "\e70f";
}

.ti-layout-column4:before {
	content: "\e710";
}

.ti-layout-column3:before {
	content: "\e711";
}

.ti-layout-column2:before {
	content: "\e712";
}

.ti-layout-accordion-separated:before {
	content: "\e713";
}

.ti-layout-accordion-merged:before {
	content: "\e714";
}

.ti-layout-accordion-list:before {
	content: "\e715";
}

.ti-ink-pen:before {
	content: "\e716";
}

.ti-info-alt:before {
	content: "\e717";
}

.ti-help-alt:before {
	content: "\e718";
}

.ti-headphone-alt:before {
	content: "\e719";
}

.ti-hand-point-up:before {
	content: "\e71a";
}

.ti-hand-point-right:before {
	content: "\e71b";
}

.ti-hand-point-left:before {
	content: "\e71c";
}

.ti-hand-point-down:before {
	content: "\e71d";
}

.ti-gallery:before {
	content: "\e71e";
}

.ti-face-smile:before {
	content: "\e71f";
}

.ti-face-sad:before {
	content: "\e720";
}

.ti-credit-card:before {
	content: "\e721";
}

.ti-control-skip-forward:before {
	content: "\e722";
}

.ti-control-skip-backward:before {
	content: "\e723";
}

.ti-control-record:before {
	content: "\e724";
}

.ti-control-eject:before {
	content: "\e725";
}

.ti-comments-smiley:before {
	content: "\e726";
}

.ti-brush-alt:before {
	content: "\e727";
}

.ti-youtube:before {
	content: "\e728";
}

.ti-vimeo:before {
	content: "\e729";
}

.ti-twitter:before {
	content: "\e72a";
}

.ti-time:before {
	content: "\e72b";
}

.ti-tumblr:before {
	content: "\e72c";
}

.ti-skype:before {
	content: "\e72d";
}

.ti-share:before {
	content: "\e72e";
}

.ti-share-alt:before {
	content: "\e72f";
}

.ti-rocket:before {
	content: "\e730";
}

.ti-pinterest:before {
	content: "\e731";
}

.ti-new-window:before {
	content: "\e732";
}

.ti-microsoft:before {
	content: "\e733";
}

.ti-list-ol:before {
	content: "\e734";
}

.ti-linkedin:before {
	content: "\e735";
}

.ti-layout-sidebar-2:before {
	content: "\e736";
}

.ti-layout-grid4-alt:before {
	content: "\e737";
}

.ti-layout-grid3-alt:before {
	content: "\e738";
}

.ti-layout-grid2-alt:before {
	content: "\e739";
}

.ti-layout-column4-alt:before {
	content: "\e73a";
}

.ti-layout-column3-alt:before {
	content: "\e73b";
}

.ti-layout-column2-alt:before {
	content: "\e73c";
}

.ti-instagram:before {
	content: "\e73d";
}

.ti-google:before {
	content: "\e73e";
}

.ti-github:before {
	content: "\e73f";
}

.ti-flickr:before {
	content: "\e740";
}

.ti-facebook:before {
	content: "\e741";
}

.ti-dropbox:before {
	content: "\e742";
}

.ti-dribbble:before {
	content: "\e743";
}

.ti-apple:before {
	content: "\e744";
}

.ti-android:before {
	content: "\e745";
}

.ti-save:before {
	content: "\e746";
}

.ti-save-alt:before {
	content: "\e747";
}

.ti-yahoo:before {
	content: "\e748";
}

.ti-wordpress:before {
	content: "\e749";
}

.ti-vimeo-alt:before {
	content: "\e74a";
}

.ti-twitter-alt:before {
	content: "\e74b";
}

.ti-tumblr-alt:before {
	content: "\e74c";
}

.ti-trello:before {
	content: "\e74d";
}

.ti-stack-overflow:before {
	content: "\e74e";
}

.ti-soundcloud:before {
	content: "\e74f";
}

.ti-sharethis:before {
	content: "\e750";
}

.ti-sharethis-alt:before {
	content: "\e751";
}

.ti-reddit:before {
	content: "\e752";
}

.ti-pinterest-alt:before {
	content: "\e753";
}

.ti-microsoft-alt:before {
	content: "\e754";
}

.ti-linux:before {
	content: "\e755";
}

.ti-jsfiddle:before {
	content: "\e756";
}

.ti-joomla:before {
	content: "\e757";
}

.ti-html5:before {
	content: "\e758";
}

.ti-flickr-alt:before {
	content: "\e759";
}

.ti-email:before {
	content: "\e75a";
}

.ti-drupal:before {
	content: "\e75b";
}

.ti-dropbox-alt:before {
	content: "\e75c";
}

.ti-css3:before {
	content: "\e75d";
}

.ti-rss:before {
	content: "\e75e";
}

.ti-rss-alt:before {
	content: "\e75f";
}
/*----------------------------------------*/
/*  Font ABeeZee
/*----------------------------------------*/
/* latin */
@font-face {
	font-family: "ABeeZee";
	font-weight: 400;
	font-style: italic;

	font-display: swap;
	src: local("ABeeZee Italic"), local("ABeeZee-Italic"), url(../../fonts/abeezee/abeezee-italic.woff2) format("woff2");
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
	font-family: "ABeeZee";
	font-weight: 400;
	font-style: normal;

	font-display: swap;
	src: local("ABeeZee Regular"),
	local("ABeeZee-Regular"),
	url(../../fonts/abeezee/abeezee.woff2) format("woff2");
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/*----------------------------------------*/
/*  Font Futura
/*----------------------------------------*/

@font-face {
	font-family: "Futura";
	font-weight: 300;
	font-style: normal;

	font-display: swap;
	src: url(../../fonts/futura/futura-lig-webfont.eot);
	src: url(../../fonts/futura/futura-lig-webfont.eot?#iefix) format("embedded-opentype"),
	url(../../fonts/futura/futura-lig-webfont.woff2) format("woff2"),
	url(../../fonts/futura/futura-lig-webfont.woff) format("woff"),
	url(../../fonts/futura/futura-lig-webfont.svg#futuraligregular) format("svg");
	;
}

@font-face {
	font-family: "Futura";
	font-weight: 400;
	font-style: normal;

	font-display: swap;
	src: url(../../fonts/futura/futura-med-webfont.eot);
	src: url(../../fonts/futura/futura-med-webfont.eot?#iefix) format("embedded-opentype"),
	url(../../fonts/futura/futura-med-webfont.woff2) format("woff2"),
	url(../../fonts/futura/futura-med-webfont.woff) format("woff"),
	url(../../fonts/futura/futura-med-webfont.svg#futuramedregular) format("svg");
	;
}

@font-face {
	font-family: "Futura";
	font-weight: 600;
	font-style: normal;

	font-display: swap;
	src: url(../../fonts/futura/futura-bol-webfont.eot);
	src: url(../../fonts/futura/futura-bol-webfont.eot?#iefix) format("embedded-opentype"),
	url(../../fonts/futura/futura-bol-webfont.woff2) format("woff2"),
	url(../../fonts/futura/futura-bol-webfont.woff) format("woff"),
	url(../../fonts/futura/futura-bol-webfont.svg#futurabold) format("svg");
	;
}

/*----------------------------------------*/
/*  Font Marcellus
/*----------------------------------------*/
/* latin-ext */
@font-face {
	font-family: "Marcellus";
	font-weight: 400;
	font-style: normal;

	font-display: swap;
	src: local("Marcellus"),
	local("Marcellus-Regular"),
	url(../../fonts/marcellus/marcellus-latin-ext.woff2) format("woff2");
	unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
	font-family: "Marcellus";
	font-weight: 400;
	font-style: normal;

	font-display: swap;
	src: local("Marcellus"),
	local("Marcellus-Regular"),
	url(../../fonts/marcellus/marcellus-latin.woff2) format("woff2");
	unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/*----------------------------------------*/
/*  Font Modesty
/*----------------------------------------*/
@font-face {
	font-family: "Modesty";
	font-weight: normal;
	font-style: normal;

	font-display: swap;
	src: url("../../fonts/modesty/ModestyRegularByMCT.eot");
	src: url("../../fonts/modesty/ModestyRegularByMCT.eot?#iefix") format("embedded-opentype"),
	url("../../fonts/modesty/ModestyRegularByMCT.woff2") format("woff2"),
	url("../../fonts/modesty/ModestyRegularByMCT.woff") format("woff"),
	url("../../fonts/modesty/ModestyRegularByMCT.ttf") format("truetype"),
	url("../../fonts/modesty/ModestyRegularByMCT.svg#ModestyRegularByMCT") format("svg");
}
.select2-container {
  box-sizing: border-box;
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;
}
.select2-container .select2-selection--single {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 28px;
  user-select: none;
  -webkit-user-select: none;
}
.select2-container .select2-selection--single .select2-selection__rendered {
  display: block;
  padding-left: 8px;
  padding-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select2-container .select2-selection--single .select2-selection__clear {
  position: relative;
}
.select2-container[dir="rtl"]
  .select2-selection--single
  .select2-selection__rendered {
  padding-right: 8px;
  padding-left: 20px;
}
.select2-container .select2-selection--multiple {
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  min-height: 32px;
  user-select: none;
  -webkit-user-select: none;
}
.select2-container .select2-selection--multiple .select2-selection__rendered {
  display: inline-block;
  overflow: hidden;
  padding-left: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select2-container .select2-search--inline {
  float: left;
}
.select2-container .select2-search--inline .select2-search__field {
  box-sizing: border-box;
  border: none;
  font-size: 100%;
  margin-top: 5px;
  padding: 0;
}
.select2-container
  .select2-search--inline
  .select2-search__field::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.select2-dropdown {
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  box-sizing: border-box;
  display: block;
  position: absolute;
  left: -100000px;
  width: 100%;
  z-index: 1051;
}
.select2-results {
  display: block;
}
.select2-results__options {
  list-style: none;
  margin: 0;
  padding: 0;
}
.select2-results__option {
  padding: 6px;
  user-select: none;
  -webkit-user-select: none;
}
.select2-results__option[aria-selected] {
  cursor: pointer;
}
.select2-container--open .select2-dropdown {
  left: 0;
}
.select2-container--open .select2-dropdown--above {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container--open .select2-dropdown--below {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-search--dropdown {
  display: block;
  padding: 4px;
}
.select2-search--dropdown .select2-search__field {
  padding: 4px;
  width: 100%;
  box-sizing: border-box;
}
.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.select2-search--dropdown.select2-search--hide {
  display: none;
}
.select2-close-mask {
  border: 0;
  margin: 0;
  padding: 0;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100%;
  min-width: 100%;
  height: auto;
  width: auto;
  opacity: 0;
  z-index: 99;
  background-color: #fff;
  filter: alpha(opacity=0);
}
.select2-hidden-accessible {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}
.select2-container--default .select2-selection--single {
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 4px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__rendered {
  color: #444;
  line-height: 28px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__clear {
  cursor: pointer;
  float: right;
  font-weight: bold;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__placeholder {
  color: #999;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__arrow {
  height: 26px;
  position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: #888 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  height: 0;
  left: 50%;
  margin-left: -4px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
}
.select2-container--default[dir="rtl"]
  .select2-selection--single
  .select2-selection__clear {
  float: left;
}
.select2-container--default[dir="rtl"]
  .select2-selection--single
  .select2-selection__arrow {
  left: 1px;
  right: auto;
}
.select2-container--default.select2-container--disabled
  .select2-selection--single {
  background-color: #eee;
  cursor: default;
}
.select2-container--default.select2-container--disabled
  .select2-selection--single
  .select2-selection__clear {
  display: none;
}
.select2-container--default.select2-container--open
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: transparent transparent #888 transparent;
  border-width: 0 4px 5px 4px;
}
.select2-container--default .select2-selection--multiple {
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: text;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__rendered {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0 5px;
  width: 100%;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__rendered
  li {
  list-style: none;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__clear {
  cursor: pointer;
  float: right;
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;
  padding: 1px;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__choice {
  background-color: #e4e4e4;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: default;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  padding: 0 5px;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__choice__remove {
  color: #999;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  margin-right: 2px;
}
.select2-container--default
  .select2-selection--multiple
  .select2-selection__choice__remove:hover {
  color: #333;
}
.select2-container--default[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice,
.select2-container--default[dir="rtl"]
  .select2-selection--multiple
  .select2-search--inline {
  float: right;
}
.select2-container--default[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice {
  margin-left: 5px;
  margin-right: auto;
}
.select2-container--default[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice__remove {
  margin-left: 2px;
  margin-right: auto;
}
.select2-container--default.select2-container--focus
  .select2-selection--multiple {
  border: solid black 1px;
  outline: 0;
}
.select2-container--default.select2-container--disabled
  .select2-selection--multiple {
  background-color: #eee;
  cursor: default;
}
.select2-container--default.select2-container--disabled
  .select2-selection__choice__remove {
  display: none;
}
.select2-container--default.select2-container--open.select2-container--above
  .select2-selection--single,
.select2-container--default.select2-container--open.select2-container--above
  .select2-selection--multiple {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-container--default.select2-container--open.select2-container--below
  .select2-selection--single,
.select2-container--default.select2-container--open.select2-container--below
  .select2-selection--multiple {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container--default .select2-search--dropdown .select2-search__field {
  border: 1px solid #aaa;
}
.select2-container--default .select2-search--inline .select2-search__field {
  background: transparent;
  border: none;
  outline: 0;
  box-shadow: none;
  -webkit-appearance: textfield;
}
.select2-container--default .select2-results > .select2-results__options {
  max-height: 200px;
  overflow-y: auto;
}
.select2-container--default .select2-results__option[role="group"] {
  padding: 0;
}
.select2-container--default .select2-results__option[aria-disabled="true"] {
  color: #999;
}
.select2-container--default .select2-results__option[aria-selected="true"] {
  background-color: #ddd;
}
.select2-container--default .select2-results__option .select2-results__option {
  padding-left: 1em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__group {
  padding-left: 0;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -1em;
  padding-left: 2em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -2em;
  padding-left: 3em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -3em;
  padding-left: 4em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -4em;
  padding-left: 5em;
}
.select2-container--default
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option
  .select2-results__option {
  margin-left: -5em;
  padding-left: 6em;
}
.select2-container--default
  .select2-results__option--highlighted[aria-selected] {
  background-color: #5897fb;
  color: white;
}
.select2-container--default .select2-results__group {
  cursor: default;
  display: block;
  padding: 6px;
}
.select2-container--classic .select2-selection--single {
  background-color: #f7f7f7;
  border: 1px solid #aaa;
  border-radius: 4px;
  outline: 0;
  background-image: -webkit-linear-gradient(top, #fff 50%, #eee 100%);
  background-image: -o-linear-gradient(top, #fff 50%, #eee 100%);
  background-image: linear-gradient(to bottom, #fff 50%, #eee 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0);
}
.select2-container--classic .select2-selection--single:focus {
  border: 1px solid #5897fb;
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__rendered {
  color: #444;
  line-height: 28px;
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__clear {
  cursor: pointer;
  float: right;
  font-weight: bold;
  margin-right: 10px;
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__placeholder {
  color: #999;
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__arrow {
  background-color: #ddd;
  border: none;
  border-left: 1px solid #aaa;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 26px;
  position: absolute;
  top: 1px;
  right: 1px;
  width: 20px;
  background-image: -webkit-linear-gradient(top, #eee 50%, #ccc 100%);
  background-image: -o-linear-gradient(top, #eee 50%, #ccc 100%);
  background-image: linear-gradient(to bottom, #eee 50%, #ccc 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFCCCCCC', GradientType=0);
}
.select2-container--classic
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: #888 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  height: 0;
  left: 50%;
  margin-left: -4px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
}
.select2-container--classic[dir="rtl"]
  .select2-selection--single
  .select2-selection__clear {
  float: left;
}
.select2-container--classic[dir="rtl"]
  .select2-selection--single
  .select2-selection__arrow {
  border: none;
  border-right: 1px solid #aaa;
  border-radius: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  left: 1px;
  right: auto;
}
.select2-container--classic.select2-container--open .select2-selection--single {
  border: 1px solid #5897fb;
}
.select2-container--classic.select2-container--open
  .select2-selection--single
  .select2-selection__arrow {
  background: transparent;
  border: none;
}
.select2-container--classic.select2-container--open
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: transparent transparent #888 transparent;
  border-width: 0 4px 5px 4px;
}
.select2-container--classic.select2-container--open.select2-container--above
  .select2-selection--single {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-image: -webkit-linear-gradient(top, #fff 0%, #eee 50%);
  background-image: -o-linear-gradient(top, #fff 0%, #eee 50%);
  background-image: linear-gradient(to bottom, #fff 0%, #eee 50%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0);
}
.select2-container--classic.select2-container--open.select2-container--below
  .select2-selection--single {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-image: -webkit-linear-gradient(top, #eee 50%, #fff 100%);
  background-image: -o-linear-gradient(top, #eee 50%, #fff 100%);
  background-image: linear-gradient(to bottom, #eee 50%, #fff 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFFFFFFF', GradientType=0);
}
.select2-container--classic .select2-selection--multiple {
  background-color: white;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: text;
  outline: 0;
}
.select2-container--classic .select2-selection--multiple:focus {
  border: 1px solid #5897fb;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__rendered {
  list-style: none;
  margin: 0;
  padding: 0 5px;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__clear {
  display: none;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__choice {
  background-color: #e4e4e4;
  border: 1px solid #aaa;
  border-radius: 4px;
  cursor: default;
  float: left;
  margin-right: 5px;
  margin-top: 5px;
  padding: 0 5px;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__choice__remove {
  color: #888;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  margin-right: 2px;
}
.select2-container--classic
  .select2-selection--multiple
  .select2-selection__choice__remove:hover {
  color: #555;
}
.select2-container--classic[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice {
  float: right;
  margin-left: 5px;
  margin-right: auto;
}
.select2-container--classic[dir="rtl"]
  .select2-selection--multiple
  .select2-selection__choice__remove {
  margin-left: 2px;
  margin-right: auto;
}
.select2-container--classic.select2-container--open
  .select2-selection--multiple {
  border: 1px solid #5897fb;
}
.select2-container--classic.select2-container--open.select2-container--above
  .select2-selection--multiple {
  border-top: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.select2-container--classic.select2-container--open.select2-container--below
  .select2-selection--multiple {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.select2-container--classic .select2-search--dropdown .select2-search__field {
  border: 1px solid #aaa;
  outline: 0;
}
.select2-container--classic .select2-search--inline .select2-search__field {
  outline: 0;
  box-shadow: none;
}
.select2-container--classic .select2-dropdown {
  background-color: #fff;
  border: 1px solid transparent;
}
.select2-container--classic .select2-dropdown--above {
  border-bottom: none;
}
.select2-container--classic .select2-dropdown--below {
  border-top: none;
}
.select2-container--classic .select2-results > .select2-results__options {
  max-height: 200px;
  overflow-y: auto;
}
.select2-container--classic .select2-results__option[role="group"] {
  padding: 0;
}
.select2-container--classic .select2-results__option[aria-disabled="true"] {
  color: grey;
}
.select2-container--classic
  .select2-results__option--highlighted[aria-selected] {
  background-color: #3875d7;
  color: #fff;
}
.select2-container--classic .select2-results__group {
  cursor: default;
  display: block;
  padding: 6px;
}
.select2-container--classic.select2-container--open .select2-dropdown {
  border-color: #5897fb;
}
/* perfect-scrollbar v0.8.1 */
.ps {
  -ms-touch-action: auto;
  touch-action: auto;
  overflow: hidden !important;
  -ms-overflow-style: none;
}
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}
.ps.ps--active-x > .ps__scrollbar-x-rail,
.ps.ps--active-y > .ps__scrollbar-y-rail {
  display: block;
  background-color: transparent;
}
.ps.ps--in-scrolling.ps--x > .ps__scrollbar-x-rail {
  background-color: #eee;
  opacity: 0.9;
}
.ps.ps--in-scrolling.ps--x > .ps__scrollbar-x-rail > .ps__scrollbar-x {
  background-color: #999;
  height: 11px;
}
.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail {
  background-color: #eee;
  opacity: 0.9;
}
.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y {
  background-color: #999;
  width: 11px;
}
.ps > .ps__scrollbar-x-rail {
  display: none;
  position: absolute;
  opacity: 0;
  -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
  -o-transition: background-color 0.2s linear, opacity 0.2s linear;
  -moz-transition: background-color 0.2s linear, opacity 0.2s linear;
  transition: background-color 0.2s linear, opacity 0.2s linear;
  bottom: 0px;
  height: 15px;
}
.ps > .ps__scrollbar-x-rail > .ps__scrollbar-x {
  position: absolute;
  background-color: #aaa;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  -webkit-transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, -webkit-border-radius 0.2s ease-in-out;
  transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, -webkit-border-radius 0.2s ease-in-out;
  -o-transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  -moz-transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, border-radius 0.2s ease-in-out,
    -moz-border-radius 0.2s ease-in-out;
  transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, border-radius 0.2s ease-in-out,
    -webkit-border-radius 0.2s ease-in-out, -moz-border-radius 0.2s ease-in-out;
  bottom: 2px;
  height: 6px;
}
.ps > .ps__scrollbar-x-rail:hover > .ps__scrollbar-x,
.ps > .ps__scrollbar-x-rail:active > .ps__scrollbar-x {
  height: 11px;
}
.ps > .ps__scrollbar-y-rail {
  display: none;
  position: absolute;
  opacity: 0;
  -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
  -o-transition: background-color 0.2s linear, opacity 0.2s linear;
  -moz-transition: background-color 0.2s linear, opacity 0.2s linear;
  transition: background-color 0.2s linear, opacity 0.2s linear;
  right: 0;
  width: 15px;
}
.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y {
  position: absolute;
  background-color: #aaa;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  -webkit-transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, -webkit-border-radius 0.2s ease-in-out;
  transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, -webkit-border-radius 0.2s ease-in-out;
  -o-transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  -moz-transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, border-radius 0.2s ease-in-out,
    -moz-border-radius 0.2s ease-in-out;
  transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  transition: background-color 0.2s linear, height 0.2s linear,
    width 0.2s ease-in-out, border-radius 0.2s ease-in-out,
    -webkit-border-radius 0.2s ease-in-out, -moz-border-radius 0.2s ease-in-out;
  right: 2px;
  width: 6px;
}
.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y {
  width: 11px;
}
.ps:hover.ps--in-scrolling.ps--x > .ps__scrollbar-x-rail {
  background-color: #eee;
  opacity: 0.9;
}
.ps:hover.ps--in-scrolling.ps--x > .ps__scrollbar-x-rail > .ps__scrollbar-x {
  background-color: #999;
  height: 11px;
}
.ps:hover.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail {
  background-color: #eee;
  opacity: 0.9;
}
.ps:hover.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y {
  background-color: #999;
  width: 11px;
}
.ps:hover > .ps__scrollbar-x-rail,
.ps:hover > .ps__scrollbar-y-rail {
  opacity: 0.6;
}
.ps:hover > .ps__scrollbar-x-rail:hover {
  background-color: #eee;
  opacity: 0.9;
}
.ps:hover > .ps__scrollbar-x-rail:hover > .ps__scrollbar-x {
  background-color: #999;
}
.ps:hover > .ps__scrollbar-y-rail:hover {
  background-color: #eee;
  opacity: 0.9;
}
.ps:hover > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
  background-color: #999;
}
/**
 * Swiper 5.3.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 11, 2020
 */

@font-face {
  font-family: swiper-icons;
  src: url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA")
    format("woff");
  font-weight: 400;
  font-style: normal;
}
:root {
  --swiper-theme-color: #007aff;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.swiper-container-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.swiper-container-android .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-container-multirow > .swiper-wrapper {
  flex-wrap: wrap;
}
.swiper-container-multirow-column > .swiper-wrapper {
  flex-wrap: wrap;
  flex-direction: column;
}
.swiper-container-free-mode > .swiper-wrapper {
  transition-timing-function: ease-out;
  margin: 0 auto;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
.swiper-container-autoheight,
.swiper-container-autoheight .swiper-slide {
  height: auto;
}
.swiper-container-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-container-3d {
  perspective: 1200px;
}
.swiper-container-3d .swiper-cube-shadow,
.swiper-container-3d .swiper-slide,
.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top,
.swiper-container-3d .swiper-wrapper {
  transform-style: preserve-3d;
}
.swiper-container-3d .swiper-slide-shadow-bottom,
.swiper-container-3d .swiper-slide-shadow-left,
.swiper-container-3d .swiper-slide-shadow-right,
.swiper-container-3d .swiper-slide-shadow-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-container-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-container-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-container-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-container-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-container-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-container-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
:root {
  --swiper-navigation-size: 44px;
}
.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  text-transform: none;
  font-variant: initial;
}
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  left: 10px;
  right: auto;
}
.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-next:after {
  content: "prev";
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  right: 10px;
  left: auto;
}
.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: "next";
}
.swiper-button-next.swiper-button-white,
.swiper-button-prev.swiper-button-white {
  --swiper-navigation-color: #ffffff;
}
.swiper-button-next.swiper-button-black,
.swiper-button-prev.swiper-button-black {
  --swiper-navigation-color: #000000;
}
.swiper-button-lock {
  display: none;
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 0.3s opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
.swiper-container-vertical > .swiper-pagination-bullets {
  right: 10px;
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 6px 0;
  display: block;
}
.swiper-container-vertical
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}
.swiper-container-vertical
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  display: inline-block;
  transition: 0.2s transform, 0.2s top;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 4px;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  transition: 0.2s transform, 0.2s left;
}
.swiper-container-horizontal.swiper-container-rtl
  > .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  transition: 0.2s transform, 0.2s right;
}
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}
.swiper-container-rtl
  .swiper-pagination-progressbar
  .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}
.swiper-container-horizontal > .swiper-pagination-progressbar,
.swiper-container-vertical
  > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
}
.swiper-container-horizontal
  > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-container-vertical > .swiper-pagination-progressbar {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-white {
  --swiper-pagination-color: #ffffff;
}
.swiper-pagination-black {
  --swiper-pagination-color: #000000;
}
.swiper-pagination-lock {
  display: none;
}
.swiper-scrollbar {
  border-radius: 10px;
  position: relative;
  -ms-touch-action: none;
  background: rgba(0, 0, 0, 0.1);
}
.swiper-container-horizontal > .swiper-scrollbar {
  position: absolute;
  left: 1%;
  bottom: 3px;
  z-index: 50;
  height: 5px;
  width: 98%;
}
.swiper-container-vertical > .swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%;
}
.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  left: 0;
  top: 0;
}
.swiper-scrollbar-cursor-drag {
  cursor: move;
}
.swiper-scrollbar-lock {
  display: none;
}
.swiper-zoom-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.swiper-zoom-container > canvas,
.swiper-zoom-container > img,
.swiper-zoom-container > svg {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.swiper-slide-zoomed {
  cursor: move;
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  animation: swiper-preloader-spin 1s infinite linear;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  100% {
    transform: rotate(360deg);
  }
}
.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000;
}
.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  transition-timing-function: ease-out;
}
.swiper-container-fade .swiper-slide {
  pointer-events: none;
  transition-property: opacity;
}
.swiper-container-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-fade .swiper-slide-active,
.swiper-container-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-cube {
  overflow: visible;
}
.swiper-container-cube .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
  visibility: hidden;
  transform-origin: 0 0;
  width: 100%;
  height: 100%;
}
.swiper-container-cube .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-cube.swiper-container-rtl .swiper-slide {
  transform-origin: 100% 0;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-cube .swiper-slide-active,
.swiper-container-cube .swiper-slide-next,
.swiper-container-cube .swiper-slide-next + .swiper-slide,
.swiper-container-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible;
}
.swiper-container-cube .swiper-slide-shadow-bottom,
.swiper-container-cube .swiper-slide-shadow-left,
.swiper-container-cube .swiper-slide-shadow-right,
.swiper-container-cube .swiper-slide-shadow-top {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.swiper-container-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  -webkit-filter: blur(50px);
  filter: blur(50px);
  z-index: 0;
}
.swiper-container-flip {
  overflow: visible;
}
.swiper-container-flip .swiper-slide {
  pointer-events: none;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 1;
}
.swiper-container-flip .swiper-slide .swiper-slide {
  pointer-events: none;
}
.swiper-container-flip .swiper-slide-active,
.swiper-container-flip .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}
.swiper-container-flip .swiper-slide-shadow-bottom,
.swiper-container-flip .swiper-slide-shadow-left,
.swiper-container-flip .swiper-slide-shadow-right,
.swiper-container-flip .swiper-slide-shadow-top {
  z-index: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.nice-select {
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  border-radius: 5px;
  border: solid 1px #e8e8e8;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  display: block;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  height: 42px;
  line-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 30px;
  position: relative;
  text-align: left !important;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  width: auto;
}
.nice-select:hover {
  border-color: #dbdbdb;
}
.nice-select:active,
.nice-select.open,
.nice-select:focus {
  border-color: #999;
}
.nice-select:after {
  border-bottom: 2px solid #999;
  border-right: 2px solid #999;
  content: "";
  display: block;
  height: 5px;
  margin-top: -4px;
  pointer-events: none;
  position: absolute;
  right: 12px;
  top: 50%;
  -webkit-transform-origin: 66% 66%;
  -ms-transform-origin: 66% 66%;
  transform-origin: 66% 66%;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  width: 5px;
}
.nice-select.open:after {
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.nice-select.open .list {
  opacity: 1;
  pointer-events: auto;
  -webkit-transform: scale(1) translateY(0);
  -ms-transform: scale(1) translateY(0);
  transform: scale(1) translateY(0);
}
.nice-select.disabled {
  border-color: #ededed;
  color: #999;
  pointer-events: none;
}
.nice-select.disabled:after {
  border-color: #cccccc;
}
.nice-select.wide {
  width: 100%;
}
.nice-select.wide .list {
  left: 0 !important;
  right: 0 !important;
}
.nice-select.right {
  float: right;
}
.nice-select.right .list {
  left: auto;
  right: 0;
}
.nice-select.small {
  font-size: 12px;
  height: 36px;
  line-height: 34px;
}
.nice-select.small:after {
  height: 4px;
  width: 4px;
}
.nice-select.small .option {
  line-height: 34px;
  min-height: 34px;
}
.nice-select .list {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.11);
  box-sizing: border-box;
  margin-top: 4px;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  pointer-events: none;
  position: absolute;
  top: 100%;
  left: 0;
  -webkit-transform-origin: 50% 0;
  -ms-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transform: scale(0.75) translateY(-21px);
  -ms-transform: scale(0.75) translateY(-21px);
  transform: scale(0.75) translateY(-21px);
  -webkit-transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25),
    opacity 0.15s ease-out;
  transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
  z-index: 9;
}
.nice-select .list:hover .option:not(:hover) {
  background-color: transparent !important;
}
.nice-select .option {
  cursor: pointer;
  font-weight: 400;
  line-height: 40px;
  list-style: none;
  min-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 29px;
  text-align: left;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.nice-select .option:hover,
.nice-select .option.focus,
.nice-select .option.selected.focus {
  background-color: #f6f6f6;
}
.nice-select .option.selected {
  font-weight: bold;
}
.nice-select .option.disabled {
  background-color: transparent;
  color: #999;
  cursor: default;
}

.no-csspointerevents .nice-select .list {
  display: none;
}

.no-csspointerevents .nice-select.open .list {
  display: block;
}
/*!Ion.RangeSlider, 2.3.1, © Denis Ineshin, 2010 - 2019, IonDen.com, Build date: 2019-12-19 16:51:02*/
.irs {
  position: relative;
  display: block;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 12px;
  font-family: Arial, sans-serif;
}
.irs-line {
  position: relative;
  display: block;
  overflow: hidden;
  outline: none !important;
}
.irs-bar {
  position: absolute;
  display: block;
  left: 0;
  width: 0;
}
.irs-shadow {
  position: absolute;
  display: none;
  left: 0;
  width: 0;
}
.irs-handle {
  position: absolute;
  display: block;
  box-sizing: border-box;
  cursor: default;
  z-index: 1;
}
.irs-handle.type_last {
  z-index: 2;
}
.irs-min,
.irs-max {
  position: absolute;
  display: block;
  cursor: default;
}
.irs-min {
  left: 0;
}
.irs-max {
  right: 0;
}
.irs-from,
.irs-to,
.irs-single {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  cursor: default;
  white-space: nowrap;
}
.irs-grid {
  position: absolute;
  display: none;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
}
.irs-with-grid .irs-grid {
  display: block;
}
.irs-grid-pol {
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 8px;
  background: #000;
}
.irs-grid-pol.small {
  height: 4px;
}
.irs-grid-text {
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  text-align: center;
  font-size: 9px;
  line-height: 9px;
  padding: 0 3px;
  color: #000;
}
.irs-disable-mask {
  position: absolute;
  display: block;
  top: 0;
  left: -1%;
  width: 102%;
  height: 100%;
  cursor: default;
  background: rgba(0, 0, 0, 0);
  z-index: 2;
}
.lt-ie9 .irs-disable-mask {
  background: #000;
  filter: alpha(opacity=0);
  cursor: not-allowed;
}
.irs-disabled {
  opacity: 0.4;
}
.irs-hidden-input {
  position: absolute !important;
  display: block !important;
  top: 0 !important;
  left: 0 !important;
  width: 0 !important;
  height: 0 !important;
  font-size: 0 !important;
  line-height: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  overflow: hidden;
  outline: none !important;
  z-index: -9999 !important;
  background: none !important;
  border-style: solid !important;
  border-color: transparent !important;
}
.irs--flat {
  height: 40px;
}
.irs--flat.irs-with-grid {
  height: 60px;
}
.irs--flat .irs-line {
  top: 25px;
  height: 12px;
  background-color: #e1e4e9;
  border-radius: 4px;
}
.irs--flat .irs-bar {
  top: 25px;
  height: 12px;
  background-color: #ed5565;
}
.irs--flat .irs-bar--single {
  border-radius: 4px 0 0 4px;
}
.irs--flat .irs-shadow {
  height: 1px;
  bottom: 16px;
  background-color: #e1e4e9;
}
.irs--flat .irs-handle {
  top: 22px;
  width: 16px;
  height: 18px;
  background-color: transparent;
}
.irs--flat .irs-handle > i:first-child {
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background-color: #da4453;
}
.irs--flat .irs-handle.state_hover > i:first-child,
.irs--flat .irs-handle:hover > i:first-child {
  background-color: #a43540;
}
.irs--flat .irs-min,
.irs--flat .irs-max {
  top: 0;
  padding: 1px 3px;
  color: #999;
  font-size: 10px;
  line-height: 1.333;
  text-shadow: none;
  background-color: #e1e4e9;
  border-radius: 4px;
}
.irs--flat .irs-from,
.irs--flat .irs-to,
.irs--flat .irs-single {
  color: white;
  font-size: 10px;
  line-height: 1.333;
  text-shadow: none;
  padding: 1px 5px;
  background-color: #ed5565;
  border-radius: 4px;
}
.irs--flat .irs-from:before,
.irs--flat .irs-to:before,
.irs--flat .irs-single:before {
  position: absolute;
  display: block;
  content: "";
  bottom: -6px;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -3px;
  overflow: hidden;
  border: 3px solid transparent;
  border-top-color: #ed5565;
}
.irs--flat .irs-grid-pol {
  background-color: #e1e4e9;
}
.irs--flat .irs-grid-text {
  color: #999;
}
.irs--big {
  height: 55px;
}
.irs--big.irs-with-grid {
  height: 70px;
}
.irs--big .irs-line {
  top: 33px;
  height: 12px;
  background-color: white;
  background: linear-gradient(to bottom, #ddd -50%, white 150%);
  border: 1px solid #ccc;
  border-radius: 12px;
}
.irs--big .irs-bar {
  top: 33px;
  height: 12px;
  background-color: #92bce0;
  border: 1px solid #428bca;
  background: linear-gradient(to bottom, #ffffff 0%, #428bca 30%, #b9d4ec 100%);
  box-shadow: inset 0 0 1px 1px rgba(255, 255, 255, 0.5);
}
.irs--big .irs-bar--single {
  border-radius: 12px 0 0 12px;
}
.irs--big .irs-shadow {
  height: 1px;
  bottom: 16px;
  background-color: rgba(66, 139, 202, 0.5);
}
.irs--big .irs-handle {
  top: 25px;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #cbcfd5;
  background: linear-gradient(to bottom, white 0%, #b4b9be 30%, white 100%);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), inset 0 0 3px 1px white;
  border-radius: 30px;
}
.irs--big .irs-handle.state_hover,
.irs--big .irs-handle:hover {
  border-color: rgba(0, 0, 0, 0.45);
  background-color: #939ba7;
  background: linear-gradient(to bottom, white 0%, #919ba5 30%, white 100%);
}
.irs--big .irs-min,
.irs--big .irs-max {
  top: 0;
  padding: 1px 5px;
  color: white;
  text-shadow: none;
  background-color: #9f9f9f;
  border-radius: 3px;
}
.irs--big .irs-from,
.irs--big .irs-to,
.irs--big .irs-single {
  color: white;
  text-shadow: none;
  padding: 1px 5px;
  background-color: #428bca;
  background: linear-gradient(to bottom, #428bca 0%, #3071a9 100%);
  border-radius: 3px;
}
.irs--big .irs-grid-pol {
  background-color: #428bca;
}
.irs--big .irs-grid-text {
  color: #428bca;
}
.irs--modern {
  height: 55px;
}
.irs--modern.irs-with-grid {
  height: 55px;
}
.irs--modern .irs-line {
  top: 25px;
  height: 5px;
  background-color: #d1d6e0;
  background: linear-gradient(to bottom, #e0e4ea 0%, #d1d6e0 100%);
  border: 1px solid #a3adc1;
  border-bottom-width: 0;
  border-radius: 5px;
}
.irs--modern .irs-bar {
  top: 25px;
  height: 5px;
  background: #20b426;
  background: linear-gradient(to bottom, #20b426 0%, #18891d 100%);
}
.irs--modern .irs-bar--single {
  border-radius: 5px 0 0 5px;
}
.irs--modern .irs-shadow {
  height: 1px;
  bottom: 21px;
  background-color: rgba(209, 214, 224, 0.5);
}
.irs--modern .irs-handle {
  top: 37px;
  width: 12px;
  height: 13px;
  border: 1px solid #a3adc1;
  border-top-width: 0;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 3px 3px;
}
.irs--modern .irs-handle > i:nth-child(1) {
  position: absolute;
  display: block;
  top: -4px;
  left: 1px;
  width: 6px;
  height: 6px;
  border: 1px solid #a3adc1;
  background: white;
  transform: rotate(45deg);
}
.irs--modern .irs-handle > i:nth-child(2) {
  position: absolute;
  display: block;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 10px;
  height: 12px;
  background: #e9e6e6;
  background: linear-gradient(to bottom, white 0%, #e9e6e6 100%);
  border-radius: 0 0 3px 3px;
}
.irs--modern .irs-handle > i:nth-child(3) {
  position: absolute;
  display: block;
  box-sizing: border-box;
  top: 3px;
  left: 3px;
  width: 4px;
  height: 5px;
  border-left: 1px solid #a3adc1;
  border-right: 1px solid #a3adc1;
}
.irs--modern .irs-handle.state_hover,
.irs--modern .irs-handle:hover {
  border-color: #7685a2;
  background: #c3c7cd;
  background: linear-gradient(to bottom, #ffffff 0%, #919ba5 30%, #ffffff 100%);
}
.irs--modern .irs-handle.state_hover > i:nth-child(1),
.irs--modern .irs-handle:hover > i:nth-child(1) {
  border-color: #7685a2;
}
.irs--modern .irs-handle.state_hover > i:nth-child(3),
.irs--modern .irs-handle:hover > i:nth-child(3) {
  border-color: #48536a;
}
.irs--modern .irs-min,
.irs--modern .irs-max {
  top: 0;
  font-size: 10px;
  line-height: 1.333;
  text-shadow: none;
  padding: 1px 5px;
  color: white;
  background-color: #d1d6e0;
  border-radius: 5px;
}
.irs--modern .irs-from,
.irs--modern .irs-to,
.irs--modern .irs-single {
  font-size: 10px;
  line-height: 1.333;
  text-shadow: none;
  padding: 1px 5px;
  background-color: #20b426;
  color: white;
  border-radius: 5px;
}
.irs--modern .irs-from:before,
.irs--modern .irs-to:before,
.irs--modern .irs-single:before {
  position: absolute;
  display: block;
  content: "";
  bottom: -6px;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -3px;
  overflow: hidden;
  border: 3px solid transparent;
  border-top-color: #20b426;
}
.irs--modern .irs-grid {
  height: 25px;
}
.irs--modern .irs-grid-pol {
  background-color: #dedede;
}
.irs--modern .irs-grid-text {
  color: silver;
  font-size: 13px;
}
.irs--sharp {
  height: 50px;
  font-size: 12px;
  line-height: 1;
}
.irs--sharp.irs-with-grid {
  height: 57px;
}
.irs--sharp .irs-line {
  top: 30px;
  height: 2px;
  background-color: black;
  border-radius: 2px;
}
.irs--sharp .irs-bar {
  top: 30px;
  height: 2px;
  background-color: #ee22fa;
}
.irs--sharp .irs-bar--single {
  border-radius: 2px 0 0 2px;
}
.irs--sharp .irs-shadow {
  height: 1px;
  bottom: 21px;
  background-color: rgba(0, 0, 0, 0.5);
}
.irs--sharp .irs-handle {
  top: 25px;
  width: 10px;
  height: 10px;
  background-color: #a804b2;
}
.irs--sharp .irs-handle > i:first-child {
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: #a804b2;
}
.irs--sharp .irs-handle.state_hover,
.irs--sharp .irs-handle:hover {
  background-color: black;
}
.irs--sharp .irs-handle.state_hover > i:first-child,
.irs--sharp .irs-handle:hover > i:first-child {
  border-top-color: black;
}
.irs--sharp .irs-min,
.irs--sharp .irs-max {
  color: white;
  font-size: 14px;
  line-height: 1;
  top: 0;
  padding: 3px 4px;
  opacity: 0.4;
  background-color: #a804b2;
  border-radius: 2px;
}
.irs--sharp .irs-from,
.irs--sharp .irs-to,
.irs--sharp .irs-single {
  font-size: 14px;
  line-height: 1;
  text-shadow: none;
  padding: 3px 4px;
  background-color: #a804b2;
  color: white;
  border-radius: 2px;
}
.irs--sharp .irs-from:before,
.irs--sharp .irs-to:before,
.irs--sharp .irs-single:before {
  position: absolute;
  display: block;
  content: "";
  bottom: -6px;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -3px;
  overflow: hidden;
  border: 3px solid transparent;
  border-top-color: #a804b2;
}
.irs--sharp .irs-grid {
  height: 25px;
}
.irs--sharp .irs-grid-pol {
  background-color: #dedede;
}
.irs--sharp .irs-grid-text {
  color: silver;
  font-size: 13px;
}
.irs--round {
  height: 50px;
}
.irs--round.irs-with-grid {
  height: 65px;
}
.irs--round .irs-line {
  top: 36px;
  height: 4px;
  background-color: #dee4ec;
  border-radius: 4px;
}
.irs--round .irs-bar {
  top: 36px;
  height: 4px;
  background-color: #006cfa;
}
.irs--round .irs-bar--single {
  border-radius: 4px 0 0 4px;
}
.irs--round .irs-shadow {
  height: 4px;
  bottom: 21px;
  background-color: rgba(222, 228, 236, 0.5);
}
.irs--round .irs-handle {
  top: 26px;
  width: 24px;
  height: 24px;
  border: 4px solid #006cfa;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 255, 0.3);
}
.irs--round .irs-handle.state_hover,
.irs--round .irs-handle:hover {
  background-color: #f0f6ff;
}
.irs--round .irs-min,
.irs--round .irs-max {
  color: #333;
  font-size: 14px;
  line-height: 1;
  top: 0;
  padding: 3px 5px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.irs--round .irs-from,
.irs--round .irs-to,
.irs--round .irs-single {
  font-size: 14px;
  line-height: 1;
  text-shadow: none;
  padding: 3px 5px;
  background-color: #006cfa;
  color: white;
  border-radius: 4px;
}
.irs--round .irs-from:before,
.irs--round .irs-to:before,
.irs--round .irs-single:before {
  position: absolute;
  display: block;
  content: "";
  bottom: -6px;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -3px;
  overflow: hidden;
  border: 3px solid transparent;
  border-top-color: #006cfa;
}
.irs--round .irs-grid {
  height: 25px;
}
.irs--round .irs-grid-pol {
  background-color: #dedede;
}
.irs--round .irs-grid-text {
  color: silver;
  font-size: 13px;
}
.irs--square {
  height: 50px;
}
.irs--square.irs-with-grid {
  height: 60px;
}
.irs--square .irs-line {
  top: 31px;
  height: 4px;
  background-color: #dedede;
}
.irs--square .irs-bar {
  top: 31px;
  height: 4px;
  background-color: black;
}
.irs--square .irs-shadow {
  height: 2px;
  bottom: 21px;
  background-color: #dedede;
}
.irs--square .irs-handle {
  top: 25px;
  width: 16px;
  height: 16px;
  border: 3px solid black;
  background-color: white;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.irs--square .irs-handle.state_hover,
.irs--square .irs-handle:hover {
  background-color: #f0f6ff;
}
.irs--square .irs-min,
.irs--square .irs-max {
  color: #333;
  font-size: 14px;
  line-height: 1;
  top: 0;
  padding: 3px 5px;
  background-color: rgba(0, 0, 0, 0.1);
}
.irs--square .irs-from,
.irs--square .irs-to,
.irs--square .irs-single {
  font-size: 14px;
  line-height: 1;
  text-shadow: none;
  padding: 3px 5px;
  background-color: black;
  color: white;
}
.irs--square .irs-grid {
  height: 25px;
}
.irs--square .irs-grid-pol {
  background-color: #dedede;
}
.irs--square .irs-grid-text {
  color: silver;
  font-size: 11px;
}
/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */
/*
	Styles for basic PhotoSwipe functionality (sliding area, open/close transitions)
*/
/* pswp = photoswipe */
.pswp {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  -ms-touch-action: none;
  touch-action: none;
  z-index: 1500;
  -webkit-text-size-adjust: 100%;
  /* create separate layer, to avoid paint on window.onscroll in webkit/blink */
  -webkit-backface-visibility: hidden;
  outline: none;
}
.pswp * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.pswp img {
  max-width: none;
}

/* style is added when JS option showHideOpacity is set to true */
.pswp--animate_opacity {
  /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */
  opacity: 0.001;
  will-change: opacity;
  /* for open/close transition */
  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
}

.pswp--open {
  display: block;
}

.pswp--zoom-allowed .pswp__img {
  /* autoprefixer: off */
  cursor: -webkit-zoom-in;
  cursor: -moz-zoom-in;
  cursor: zoom-in;
}

.pswp--zoomed-in .pswp__img {
  /* autoprefixer: off */
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: grab;
}

.pswp--dragging .pswp__img {
  /* autoprefixer: off */
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}

/*
	Background is added as a separate element.
	As animating opacity is much faster than animating rgba() background-color.
*/
.pswp__bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  will-change: opacity;
}

.pswp__scroll-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.pswp__container,
.pswp__zoom-wrap {
  -ms-touch-action: none;
  touch-action: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

/* Prevent selection and tap highlights */
.pswp__container,
.pswp__img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

.pswp__zoom-wrap {
  position: absolute;
  width: 100%;
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
  /* for open/close transition */
  -webkit-transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
  transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
}

.pswp__bg {
  will-change: opacity;
  /* for open/close transition */
  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
}

.pswp--animated-in .pswp__bg,
.pswp--animated-in .pswp__zoom-wrap {
  -webkit-transition: none;
  transition: none;
}

.pswp__container,
.pswp__zoom-wrap {
  -webkit-backface-visibility: hidden;
}

.pswp__item {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}

.pswp__img {
  position: absolute;
  width: auto;
  height: auto;
  top: 0;
  left: 0;
}

/*
	stretched thumbnail or div placeholder element (see below)
	style is added to avoid flickering in webkit/blink when layers overlap
*/
.pswp__img--placeholder {
  -webkit-backface-visibility: hidden;
}

/*
	div element that matches size of large image
	large image loads on top of it
*/
.pswp__img--placeholder--blank {
  background: #222;
}

.pswp--ie .pswp__img {
  width: 100% !important;
  height: auto !important;
  left: 0;
  top: 0;
}

/*
	Error message appears when image is not loaded
	(JS option errorMsg controls markup)
*/
.pswp__error-msg {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  margin-top: -8px;
  color: #ccc;
}

.pswp__error-msg a {
  color: #ccc;
  text-decoration: underline;
}
/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */
/*

	Contents:

	1. Buttons
	2. Share modal and links
	3. Index indicator ("1 of X" counter)
	4. Caption
	5. Loading indicator
	6. Additional styles (root element, top bar, idle state, hidden state, etc.)

*/
/*
	
	1. Buttons

 */
/* <button> css reset */
.pswp__button {
  position: relative;

  display: block;
  float: right;
  overflow: visible;

  width: 44px;
  height: 44px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  -webkit-transition: opacity 0.2s;
  transition: opacity 0.2s;

  opacity: 0.75;
  border: 0;
  background: none;
  -webkit-box-shadow: none;
  box-shadow: none;

  -webkit-appearance: none;
}

.pswp__button:focus,
.pswp__button:hover {
  opacity: 1;
}

.pswp__button:active {
  opacity: 0.9;
  outline: none;
}

.pswp__button::-moz-focus-inner {
  padding: 0;

  border: 0;
}

/* pswp__ui--over-close class it added when mouse is over element that should close gallery */
.pswp__ui--over-close .pswp__button--close {
  opacity: 1;
}

.pswp__button,
.pswp__button--arrow--left:before,
.pswp__button--arrow--right:before {
  width: 44px;
  height: 44px;

  background: url(../../images/photoswipe/default-skin.webp) 0 0 no-repeat;
  background-size: 264px 88px;
}

@media (-webkit-min-device-pixel-ratio: 1.1),
  (-webkit-min-device-pixel-ratio: 1.09375),
  (min-resolution: 105dpi),
  (min-resolution: 1.1dppx) {
  /* Serve SVG sprite if browser supports SVG and resolution is more than 105dpi */
  .pswp--svg .pswp__button,
  .pswp--svg .pswp__button--arrow--left:before,
  .pswp--svg .pswp__button--arrow--right:before {
    background-image: url(../../images/photoswipe/default-skin.svg);
  }

  .pswp--svg .pswp__button--arrow--left,
  .pswp--svg .pswp__button--arrow--right {
    background: none;
  }
}

.pswp__button--close {
  background-position: 0 -44px;
}

.pswp__button--share {
  background-position: -44px -44px;
}

.pswp__button--fs {
  display: none;
}

.pswp--supports-fs .pswp__button--fs {
  display: block;
}

.pswp--fs .pswp__button--fs {
  background-position: -44px 0;
}

.pswp__button--zoom {
  display: none;

  background-position: -88px 0;
}

.pswp--zoom-allowed .pswp__button--zoom {
  display: block;
}

.pswp--zoomed-in .pswp__button--zoom {
  background-position: -132px 0;
}

/* no arrows on touch screens */
.pswp--touch .pswp__button--arrow--left,
.pswp--touch .pswp__button--arrow--right {
  visibility: hidden;
}

/*
	Arrow buttons hit area
	(icon is added to :before pseudo-element)
*/
.pswp__button--arrow--left,
.pswp__button--arrow--right {
  position: absolute;
  top: 50%;

  width: 70px;
  height: 100px;
  margin-top: -50px;

  background: none;
}

.pswp__button--arrow--left {
  left: 0;
}

.pswp__button--arrow--right {
  right: 0;
}

.pswp__button--arrow--left:before,
.pswp__button--arrow--right:before {
  position: absolute;
  top: 35px;

  width: 32px;
  height: 30px;

  content: "";

  background-color: rgba(0, 0, 0, 0.3);
}

.pswp__button--arrow--left:before {
  left: 6px;

  background-position: -138px -44px;
}

.pswp__button--arrow--right:before {
  right: 6px;

  background-position: -94px -44px;
}

/*

	2. Share modal/popup and links

 */
.pswp__counter,
.pswp__share-modal {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.pswp__share-modal {
  position: absolute;
  z-index: 1600;
  top: 0;
  left: 0;

  display: block;

  width: 100%;
  height: 100%;
  padding: 10px;

  -webkit-transition: opacity 0.25s ease-out;
  transition: opacity 0.25s ease-out;

  opacity: 0;
  background: rgba(0, 0, 0, 0.5);

  -webkit-backface-visibility: hidden;
  will-change: opacity;
}

.pswp__share-modal--hidden {
  display: none;
}

.pswp__share-tooltip {
  position: absolute;
  z-index: 1620;
  top: 56px;
  right: 44px;

  display: block;

  width: auto;

  -webkit-transition: -webkit-transform 0.25s;
  transition: transform 0.25s;
  -webkit-transform: translateY(6px);
  -ms-transform: translateY(6px);
  transform: translateY(6px);

  border-radius: 2px;
  background: #fff;
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);

  -webkit-backface-visibility: hidden;
  will-change: transform;
}

.pswp__share-tooltip a {
  font-size: 14px;
  line-height: 18px;

  display: block;

  padding: 8px 12px;

  text-decoration: none;

  color: #000;
}

.pswp__share-tooltip a:hover {
  text-decoration: none;

  color: #000;
}

.pswp__share-tooltip a:first-child {
  /* round corners on the first/last list item */
  border-radius: 2px 2px 0 0;
}

.pswp__share-tooltip a:last-child {
  border-radius: 0 0 2px 2px;
}

.pswp__share-modal--fade-in {
  opacity: 1;
}

.pswp__share-modal--fade-in .pswp__share-tooltip {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

/* increase size of share links on touch devices */
.pswp--touch .pswp__share-tooltip a {
  padding: 16px 12px;
}

a.pswp__share--facebook:before {
  position: absolute;
  top: -12px;
  right: 15px;

  display: block;

  width: 0;
  height: 0;

  content: "";
  pointer-events: none;

  border: 6px solid transparent;
  border-bottom-color: #fff;

  -webkit-pointer-events: none;
  -moz-pointer-events: none;
}

a.pswp__share--facebook:hover {
  color: #fff;
  background: #3e5c9a;
}

a.pswp__share--facebook:hover:before {
  border-bottom-color: #3e5c9a;
}

a.pswp__share--twitter:hover {
  color: #fff;
  background: #55acee;
}

a.pswp__share--pinterest:hover {
  color: #ce272d;
  background: #ccc;
}

a.pswp__share--download:hover {
  background: #ddd;
}

/*

	3. Index indicator ("1 of X" counter)

 */
.pswp__counter {
  font-size: 13px;
  line-height: 44px;

  position: absolute;
  top: 0;
  left: 0;

  height: 44px;
  padding: 0 10px;

  opacity: 0.75;
  color: #fff;
}

/*
	
	4. Caption

 */
.pswp__caption {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  min-height: 44px;
}

.pswp__caption small {
  font-size: 11px;

  color: #bbb;
}

.pswp__caption__center {
  font-size: 13px;
  line-height: 20px;

  max-width: 420px;
  margin: 0 auto;
  padding: 10px;

  text-align: left;

  color: #ccc;
}

.pswp__caption--empty {
  display: none;
}

/* Fake caption element, used to calculate height of next/prev image */
.pswp__caption--fake {
  visibility: hidden;
}

/*

	5. Loading indicator (preloader)

	You can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR

 */
.pswp__preloader {
  position: absolute;
  top: 0;
  left: 50%;

  width: 44px;
  height: 44px;
  margin-left: -22px;

  -webkit-transition: opacity 0.25s ease-out;
  transition: opacity 0.25s ease-out;

  opacity: 0;

  direction: ltr;
  will-change: opacity;
}

.pswp__preloader__icn {
  width: 20px;
  height: 20px;
  margin: 12px;
}

.pswp__preloader--active {
  opacity: 1;
}

.pswp__preloader--active .pswp__preloader__icn {
  /* We use .gif in browsers that don't support CSS animation */
  background: url(../../images/photoswipe/preloader.gif) 0 0 no-repeat;
}

.pswp--css_animation .pswp__preloader--active {
  opacity: 1;
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
  -webkit-animation: clockwise 500ms linear infinite;
  animation: clockwise 500ms linear infinite;
}

.pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
  -webkit-animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
  animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
}

.pswp--css_animation .pswp__preloader__icn {
  position: absolute;
  top: 15px;
  left: 15px;

  width: 14px;
  height: 14px;
  margin: 0;

  opacity: 0.75;
  background: none;
}

.pswp--css_animation .pswp__preloader__cut {
  /* 
			The idea of animating inner circle is based on Polymer ("material") loading indicator 
			 by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html
		*/
  position: relative;

  overflow: hidden;

  width: 7px;
  height: 14px;
}

.pswp--css_animation .pswp__preloader__donut {
  position: absolute;
  top: 0;
  left: 0;

  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  margin: 0;

  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-radius: 50%;
  background: none;
}

@media screen and (max-width: 1024px) {
  .pswp__preloader {
    position: relative;
    top: auto;
    left: auto;

    float: right;

    margin: 0;
  }
}

@-webkit-keyframes clockwise {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes clockwise {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-webkit-keyframes donut-rotate {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  50% {
    -webkit-transform: rotate(-140deg);
    transform: rotate(-140deg);
  }

  100% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
}

@keyframes donut-rotate {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  50% {
    -webkit-transform: rotate(-140deg);
    transform: rotate(-140deg);
  }

  100% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
}

/*
	
	6. Additional styles

 */
/* root element of UI */
.pswp__ui {
  z-index: 1550;

  visibility: visible;

  opacity: 1;

  -webkit-font-smoothing: auto;
}

/* top black bar with buttons and "1 of X" indicator */
.pswp__top-bar {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 44px;
}

.pswp__caption,
.pswp__top-bar,
.pswp--has_mouse .pswp__button--arrow--left,
.pswp--has_mouse .pswp__button--arrow--right {
  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);

  -webkit-backface-visibility: hidden;
  will-change: opacity;
}

/* pswp--has_mouse class is added only when two subsequent mousemove events occur */
.pswp--has_mouse .pswp__button--arrow--left,
.pswp--has_mouse .pswp__button--arrow--right {
  visibility: visible;
}

.pswp__top-bar,
.pswp__caption {
  background-color: rgba(0, 0, 0, 0.5);
}

/* pswp__ui--fit class is added when main image "fits" between top bar and bottom bar (caption) */
.pswp__ui--fit .pswp__top-bar,
.pswp__ui--fit .pswp__caption {
  background-color: rgba(0, 0, 0, 0.3);
}

/* pswp__ui--idle class is added when mouse isn't moving for several seconds (JS option timeToIdle) */
.pswp__ui--idle .pswp__top-bar {
  opacity: 0;
}

.pswp__ui--idle .pswp__button--arrow--left,
.pswp__ui--idle .pswp__button--arrow--right {
  opacity: 0;
}

/*
	pswp__ui--hidden class is added when controls are hidden
	e.g. when user taps to toggle visibility of controls
*/
.pswp__ui--hidden .pswp__top-bar,
.pswp__ui--hidden .pswp__caption,
.pswp__ui--hidden .pswp__button--arrow--left,
.pswp__ui--hidden .pswp__button--arrow--right {
  /* Force paint & create composition layer for controls. */
  opacity: 0.001;
}

/* pswp__ui--one-slide class is added when there is just one item in gallery */
.pswp__ui--one-slide .pswp__button--arrow--left,
.pswp__ui--one-slide .pswp__button--arrow--right,
.pswp__ui--one-slide .pswp__counter {
  display: none;
}

.pswp__element--disabled {
  display: none !important;
}

.pswp--minimal--dark .pswp__top-bar {
  background: none;
}
/* Magnific Popup CSS */
.mfp-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1042;
  overflow: hidden;
  position: fixed;
  background: #0b0b0b;
  opacity: 0.8;
}

.mfp-wrap {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1043;
  position: fixed;
  outline: none !important;
  -webkit-backface-visibility: hidden;
}

.mfp-container {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  box-sizing: border-box;
}

.mfp-container:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.mfp-align-top .mfp-container:before {
  display: none;
}

.mfp-content {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045;
}

.mfp-inline-holder .mfp-content,
.mfp-ajax-holder .mfp-content {
  width: 100%;
  cursor: auto;
}

.mfp-ajax-cur {
  cursor: progress;
}

.mfp-zoom-out-cur,
.mfp-zoom-out-cur .mfp-image-holder .mfp-close {
  cursor: -moz-zoom-out;
  cursor: -webkit-zoom-out;
  cursor: zoom-out;
}

.mfp-zoom {
  cursor: pointer;
  cursor: -webkit-zoom-in;
  cursor: -moz-zoom-in;
  cursor: zoom-in;
}

.mfp-auto-cursor .mfp-content {
  cursor: auto;
}

.mfp-close,
.mfp-arrow,
.mfp-preloader,
.mfp-counter {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.mfp-loading.mfp-figure {
  display: none;
}

.mfp-hide {
  display: none !important;
}

.mfp-preloader {
  color: #ccc;
  position: absolute;
  top: 50%;
  width: auto;
  text-align: center;
  margin-top: -0.8em;
  left: 8px;
  right: 8px;
  z-index: 1044;
}
.mfp-preloader a {
  color: #ccc;
}
.mfp-preloader a:hover {
  color: #fff;
}

.mfp-s-ready .mfp-preloader {
  display: none;
}

.mfp-s-error .mfp-content {
  display: none;
}

button.mfp-close,
button.mfp-arrow {
  overflow: visible;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  display: block;
  outline: none;
  padding: 0;
  z-index: 1046;
  box-shadow: none;
  touch-action: manipulation;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.mfp-close {
  width: 44px;
  height: 44px;
  line-height: 44px;
  position: absolute;
  right: 0;
  top: 0;
  text-decoration: none;
  text-align: center;
  opacity: 0.65;
  padding: 0 0 18px 10px;
  color: #fff;
  font-style: normal;
  font-size: 28px;
  font-family: Arial, Baskerville, monospace;
}
.mfp-close:hover,
.mfp-close:focus {
  opacity: 1;
}
.mfp-close:active {
  top: 1px;
}

.mfp-close-btn-in .mfp-close {
  color: #333;
}

.mfp-image-holder .mfp-close,
.mfp-iframe-holder .mfp-close {
  color: #fff;
  right: -6px;
  text-align: right;
  padding-right: 6px;
  width: 100%;
}

.mfp-counter {
  position: absolute;
  top: 0;
  right: 0;
  color: #ccc;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
}

.mfp-arrow {
  position: absolute;
  opacity: 0.65;
  margin: 0;
  top: 50%;
  margin-top: -55px;
  padding: 0;
  width: 90px;
  height: 110px;
  -webkit-tap-highlight-color: transparent;
}
.mfp-arrow:active {
  margin-top: -54px;
}
.mfp-arrow:hover,
.mfp-arrow:focus {
  opacity: 1;
}
.mfp-arrow:before,
.mfp-arrow:after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 35px;
  margin-left: 35px;
  border: medium inset transparent;
}
.mfp-arrow:after {
  border-top-width: 13px;
  border-bottom-width: 13px;
  top: 8px;
}
.mfp-arrow:before {
  border-top-width: 21px;
  border-bottom-width: 21px;
  opacity: 0.7;
}

.mfp-arrow-left {
  left: 0;
}
.mfp-arrow-left:after {
  border-right: 17px solid #fff;
  margin-left: 31px;
}
.mfp-arrow-left:before {
  margin-left: 25px;
  border-right: 27px solid #3f3f3f;
}

.mfp-arrow-right {
  right: 0;
}
.mfp-arrow-right:after {
  border-left: 17px solid #fff;
  margin-left: 39px;
}
.mfp-arrow-right:before {
  border-left: 27px solid #3f3f3f;
}

.mfp-iframe-holder {
  padding-top: 40px;
  padding-bottom: 40px;
}
.mfp-iframe-holder .mfp-content {
  line-height: 0;
  width: 100%;
  max-width: 900px;
}
.mfp-iframe-holder .mfp-close {
  top: -40px;
}

.mfp-iframe-scaler {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
}
.mfp-iframe-scaler iframe {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: #000;
}

/* Main image in popup */
img.mfp-img {
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  line-height: 0;
  box-sizing: border-box;
  padding: 40px 0 40px;
  margin: 0 auto;
}

/* The shadow behind the image */
.mfp-figure {
  line-height: 0;
}
.mfp-figure:after {
  content: "";
  position: absolute;
  left: 0;
  top: 40px;
  bottom: 40px;
  display: block;
  right: 0;
  width: auto;
  height: auto;
  z-index: -1;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  background: #444;
}
.mfp-figure small {
  color: #bdbdbd;
  display: block;
  font-size: 12px;
  line-height: 14px;
}
.mfp-figure figure {
  margin: 0;
}

.mfp-bottom-bar {
  margin-top: -36px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  cursor: auto;
}

.mfp-title {
  text-align: left;
  line-height: 18px;
  color: #f3f3f3;
  word-wrap: break-word;
  padding-right: 36px;
}

.mfp-image-holder .mfp-content {
  max-width: 100%;
}

.mfp-gallery .mfp-image-holder .mfp-figure {
  cursor: pointer;
}

@media screen and (max-width: 800px) and (orientation: landscape),
  screen and (max-height: 300px) {
  /**
       * Remove all paddings around the image on small screen
       */
  .mfp-img-mobile .mfp-image-holder {
    padding-left: 0;
    padding-right: 0;
  }
  .mfp-img-mobile img.mfp-img {
    padding: 0;
  }
  .mfp-img-mobile .mfp-figure:after {
    top: 0;
    bottom: 0;
  }
  .mfp-img-mobile .mfp-figure small {
    display: inline;
    margin-left: 5px;
  }
  .mfp-img-mobile .mfp-bottom-bar {
    background: rgba(0, 0, 0, 0.6);
    bottom: 0;
    margin: 0;
    top: auto;
    padding: 3px 5px;
    position: fixed;
    box-sizing: border-box;
  }
  .mfp-img-mobile .mfp-bottom-bar:empty {
    padding: 0;
  }
  .mfp-img-mobile .mfp-counter {
    right: 5px;
    top: 3px;
  }
  .mfp-img-mobile .mfp-close {
    top: 0;
    right: 0;
    width: 35px;
    height: 35px;
    line-height: 35px;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    text-align: center;
    padding: 0;
  }
}

@media all and (max-width: 900px) {
  .mfp-arrow {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  .mfp-arrow-left {
    -webkit-transform-origin: 0;
    transform-origin: 0;
  }
  .mfp-arrow-right {
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
  }
  .mfp-container {
    padding-left: 6px;
    padding-right: 6px;
  }
}
/* Slider */
.slick-slider {
  position: relative;

  display: block;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;

  display: block;
  overflow: hidden;

  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;

  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-track:before,
.slick-track:after {
  display: table;

  content: "";
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  display: none;
  float: left;

  height: 100%;
  min-height: 1px;
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;

  height: auto;

  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}
*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html,
body,
.site-wrapper {
  height: 100%;
}
body {
  font-family: "Futura", Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  line-height: 1.75;
  position: relative;
  visibility: visible;
  overflow-x: hidden;
  color: dimgray;
  background-color: #fff;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Marcellus", Arial, Helvetica, sans-serif;
  font-weight: 600;
  line-height: 1.2;
  margin-top: 0;
  color: #333;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  line-height: inherit;
  margin: 0;
}
p:last-child {
  margin-bottom: 0;
}
a,
button {
  line-height: inherit;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
a,
button,
img,
input {
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
*:focus {
  outline: none !important;
}
a:focus {
  text-decoration: none;
  color: inherit;
  outline: 0;
}
a:hover {
  text-decoration: none;
  color: #f8796c;
}
button,
input[type="submit"] {
  cursor: pointer;
}
img {
  max-width: 100%;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  opacity: 1;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  opacity: 1;
}
input::-moz-placeholder,
textarea::-moz-placeholder {
  opacity: 1;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  opacity: 1;
}
ul:last-child {
  margin-bottom: 0;
}
hr {
  border-top-width: 2px;
}
.fix {
  overflow: hidden;
}
.section,
.main-wrapper {
  float: left;
  width: 100%;
}
@media only screen and (min-width: 1500px) {
  .section-fluid {
    padding-right: 55px;
    padding-left: 55px;
  }
  .section-fluid > .container,
  .section-fluid > .container-fluid {
    max-width: 100%;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .section-fluid {
    padding-right: 35px;
    padding-left: 35px;
  }
  .section-fluid > .container,
  .section-fluid > .container-fluid {
    max-width: 100%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px) {
  .section-fluid {
    padding-right: 25px;
    padding-left: 25px;
  }
  .section-fluid > .container,
  .section-fluid > .container-fluid {
    max-width: 100%;
  }
}
.row {
  margin-top: 0;
  margin-right: -15px;
  margin-left: -15px;
}
.row > [class*="col"] {
  padding-right: 15px;
  padding-left: 15px;
}
.row > [class*="col"]:not([class*="learts-mt-"]) {
  margin-top: 0;
}
.row.g-0 {
  margin-right: 0;
  margin-left: 0;
}
.row.g-0 > [class*="col"] {
  padding-right: 0;
  padding-left: 0;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
}
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
@media only screen and (max-width: 575px) {
  .container {
    max-width: 450px;
  }
}
@media only screen and (max-width: 479px) {
  .container {
    max-width: 350px;
  }
}
.bg-primary {
  background-color: #f8796c !important;
}
.text-primary {
  color: #f8796c !important;
}
.bg-primary2 {
  background-color: #72a499 !important;
}
.text-primary2 {
  color: #72a499 !important;
}
.bg-primary3 {
  background-color: #baa491 !important;
}
.text-primary3 {
  color: #baa491 !important;
}
.bg-secondary {
  background-color: #6c757d !important;
}
.text-secondary {
  color: #6c757d !important;
}
.bg-success {
  background-color: #4caf50 !important;
}
.text-success {
  color: #4caf50 !important;
}
.bg-danger {
  background-color: #f44336 !important;
}
.text-danger {
  color: #f44336 !important;
}
.bg-warning {
  background-color: #ffc107 !important;
}
.text-warning {
  color: #ffc107 !important;
}
.bg-info {
  background-color: #17a2b8 !important;
}
.text-info {
  color: #17a2b8 !important;
}
.bg-light {
  background-color: #f8f9fa !important;
}
.text-light {
  color: #f8f9fa !important;
}
.bg-dark {
  background-color: #333 !important;
}
.text-dark {
  color: #333 !important;
}
.bg-black {
  background-color: #000 !important;
}
.text-black {
  color: #000 !important;
}
.bg-grey {
  background-color: #f8f9fd !important;
}
.text-grey {
  color: #f8f9fd !important;
}
.bg-body {
  background-color: dimgray !important;
}
.text-body {
  color: dimgray !important;
}
.bg-body-light {
  background-color: #7e7e7e !important;
}
.text-body-light {
  color: #7e7e7e !important;
}
.bg-heading {
  background-color: #333 !important;
}
.text-heading {
  color: #333 !important;
}
.fw-100 {
  font-weight: 100;
}
.fw-200 {
  font-weight: 200;
}
.fw-300 {
  font-weight: 300;
}
.fw-400 {
  font-weight: 400;
}
.fw-500 {
  font-weight: 500;
}
.fw-600 {
  font-weight: 600;
}
.fw-700 {
  font-weight: 700;
}
.fw-800 {
  font-weight: 800;
}
.fw-900 {
  font-weight: 900;
}
[data-overlay] {
  position: relative;
  z-index: 1;
}
[data-overlay]::before {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background-color: #000;
}
[data-overlay="0"]::before {
  opacity: 0;
}
[data-overlay="5"]::before {
  opacity: 0.05;
}
[data-overlay="10"]::before {
  opacity: 0.1;
}
[data-overlay="15"]::before {
  opacity: 0.15;
}
[data-overlay="20"]::before {
  opacity: 0.2;
}
[data-overlay="25"]::before {
  opacity: 0.25;
}
[data-overlay="30"]::before {
  opacity: 0.3;
}
[data-overlay="35"]::before {
  opacity: 0.35;
}
[data-overlay="40"]::before {
  opacity: 0.4;
}
[data-overlay="45"]::before {
  opacity: 0.45;
}
[data-overlay="50"]::before {
  opacity: 0.5;
}
[data-overlay="55"]::before {
  opacity: 0.55;
}
[data-overlay="60"]::before {
  opacity: 0.6;
}
[data-overlay="65"]::before {
  opacity: 0.65;
}
[data-overlay="70"]::before {
  opacity: 0.7;
}
[data-overlay="75"]::before {
  opacity: 0.75;
}
[data-overlay="80"]::before {
  opacity: 0.8;
}
[data-overlay="85"]::before {
  opacity: 0.85;
}
[data-overlay="90"]::before {
  opacity: 0.9;
}
[data-overlay="95"]::before {
  opacity: 0.95;
}
[data-overlay="100"]::before {
  opacity: 1;
}
[data-bg-image] {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
body.homepage-bg1 {
  padding: 0 15px 15px !important;
  background-color: #f4ede7;
}
body.homepage-bg1 .topbar-section {
  background-color: #f4ede7 !important;
}
body.homepage-bg1.offcanvas-open {
  padding-right: 32px !important;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  body.homepage-bg1.offcanvas-open {
    padding-right: 15px !important;
  }
}
#scrollUp {
  right: 25px;
  bottom: 25px;
  width: 40px;
  height: 40px;
  text-align: center;
  color: #fff;
  background-color: #f8796c;
}
#scrollUp i {
  line-height: 40px;
}
.border-top-dashed {
  border-top: 1px dashed #d2d2d2;
}
.border-bottom-dashed {
  border-bottom: 1px dashed #d2d2d2;
}
.img-hover-color {
  -webkit-filter: grayscale(100);
  filter: grayscale(100);
}
.img-hover-color:hover {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}
.section-padding {
  padding-top: 100px;
  padding-bottom: 100px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .section-padding {
    padding-top: 100px;
    padding-bottom: 100px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section-padding {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
@media only screen and (max-width: 767px) {
  .section-padding {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-1 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 8.333333%;
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-2 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 16.666666%;
    -ms-flex: 0 0 16.666666%;
    flex: 0 0 16.666666%;
    max-width: 16.666666%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 24.999999%;
    -ms-flex: 0 0 24.999999%;
    flex: 0 0 24.999999%;
    max-width: 24.999999%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-4 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 33.333332%;
    -ms-flex: 0 0 33.333332%;
    flex: 0 0 33.333332%;
    max-width: 33.333332%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-5 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 41.666665%;
    -ms-flex: 0 0 41.666665%;
    flex: 0 0 41.666665%;
    max-width: 41.666665%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-6 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 49.999998%;
    -ms-flex: 0 0 49.999998%;
    flex: 0 0 49.999998%;
    max-width: 49.999998%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-7 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 58.333331%;
    -ms-flex: 0 0 58.333331%;
    flex: 0 0 58.333331%;
    max-width: 58.333331%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-8 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 66.666664%;
    -ms-flex: 0 0 66.666664%;
    flex: 0 0 66.666664%;
    max-width: 66.666664%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-9 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 74.999997%;
    -ms-flex: 0 0 74.999997%;
    flex: 0 0 74.999997%;
    max-width: 74.999997%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-10 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 83.33333%;
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-11 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 91.666663%;
    -ms-flex: 0 0 91.666663%;
    flex: 0 0 91.666663%;
    max-width: 91.666663%;
  }
}
@media only screen and (min-width: 1500px) {
  .col-xxl-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 99.999996%;
    -ms-flex: 0 0 99.999996%;
    flex: 0 0 99.999996%;
    max-width: 99.999996%;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-1 {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-2 {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-3 {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-4 {
    -webkit-box-ordinal-group: 5;
    -webkit-order: 4;
    -ms-flex-order: 4;
    order: 4;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-5 {
    -webkit-box-ordinal-group: 6;
    -webkit-order: 5;
    -ms-flex-order: 5;
    order: 5;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-6 {
    -webkit-box-ordinal-group: 7;
    -webkit-order: 6;
    -ms-flex-order: 6;
    order: 6;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-7 {
    -webkit-box-ordinal-group: 8;
    -webkit-order: 7;
    -ms-flex-order: 7;
    order: 7;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-8 {
    -webkit-box-ordinal-group: 9;
    -webkit-order: 8;
    -ms-flex-order: 8;
    order: 8;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-9 {
    -webkit-box-ordinal-group: 10;
    -webkit-order: 9;
    -ms-flex-order: 9;
    order: 9;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-10 {
    -webkit-box-ordinal-group: 11;
    -webkit-order: 10;
    -ms-flex-order: 10;
    order: 10;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-11 {
    -webkit-box-ordinal-group: 12;
    -webkit-order: 11;
    -ms-flex-order: 11;
    order: 11;
  }
}
@media only screen and (min-width: 1500px) {
  .order-xxl-12 {
    -webkit-box-ordinal-group: 13;
    -webkit-order: 12;
    -ms-flex-order: 12;
    order: 12;
  }
}
.learts-mb-10 {
  margin-bottom: 10px;
}
.learts-mb-n10 {
  margin-bottom: -10px;
}
.learts-mb-20 {
  margin-bottom: 20px;
}
.learts-mb-n20 {
  margin-bottom: -20px;
}
.learts-mb-30 {
  margin-bottom: 30px;
}
.learts-mb-n30 {
  margin-bottom: -30px;
}
.learts-mb-40 {
  margin-bottom: 40px;
}
.learts-mb-n40 {
  margin-bottom: -40px;
}
.learts-mb-50 {
  margin-bottom: 50px;
}
.learts-mb-n50 {
  margin-bottom: -50px;
}
.learts-mb-60 {
  margin-bottom: 60px;
}
.learts-mb-n60 {
  margin-bottom: -60px;
}
.learts-mb-70 {
  margin-bottom: 70px;
}
.learts-mb-n70 {
  margin-bottom: -70px;
}
.learts-mb-80 {
  margin-bottom: 80px;
}
.learts-mb-n80 {
  margin-bottom: -80px;
}
.learts-mb-90 {
  margin-bottom: 90px;
}
.learts-mb-n90 {
  margin-bottom: -90px;
}
.learts-mb-100 {
  margin-bottom: 100px;
}
.learts-mb-n100 {
  margin-bottom: -100px;
}
.learts-mt-10 {
  margin-top: 10px;
}
.learts-mt-n10 {
  margin-top: -10px;
}
.learts-mt-20 {
  margin-top: 20px;
}
.learts-mt-n20 {
  margin-top: -20px;
}
.learts-mt-30 {
  margin-top: 30px;
}
.learts-mt-n30 {
  margin-top: -30px;
}
.learts-mt-40 {
  margin-top: 40px;
}
.learts-mt-n40 {
  margin-top: -40px;
}
.learts-mt-50 {
  margin-top: 50px;
}
.learts-mt-n50 {
  margin-top: -50px;
}
.learts-mt-60 {
  margin-top: 60px;
}
.learts-mt-n60 {
  margin-top: -60px;
}
.learts-mt-70 {
  margin-top: 70px;
}
.learts-mt-n70 {
  margin-top: -70px;
}
.learts-mt-80 {
  margin-top: 80px;
}
.learts-mt-n80 {
  margin-top: -80px;
}
.learts-mt-90 {
  margin-top: 90px;
}
.learts-mt-n90 {
  margin-top: -90px;
}
.learts-mt-100 {
  margin-top: 100px;
}
.learts-mt-n100 {
  margin-top: -100px;
}
.learts-pb-10 {
  padding-bottom: 10px;
}
.learts-pb-20 {
  padding-bottom: 20px;
}
.learts-pb-30 {
  padding-bottom: 30px;
}
.learts-pb-40 {
  padding-bottom: 40px;
}
.learts-pb-50 {
  padding-bottom: 50px;
}
.learts-pb-60 {
  padding-bottom: 60px;
}
.learts-pb-70 {
  padding-bottom: 70px;
}
.learts-pb-80 {
  padding-bottom: 80px;
}
.learts-pb-90 {
  padding-bottom: 90px;
}
.learts-pb-100 {
  padding-bottom: 100px;
}
.learts-pt-10 {
  padding-top: 10px;
}
.learts-pt-20 {
  padding-top: 20px;
}
.learts-pt-30 {
  padding-top: 30px;
}
.learts-pt-40 {
  padding-top: 40px;
}
.learts-pt-50 {
  padding-top: 50px;
}
.learts-pt-60 {
  padding-top: 60px;
}
.learts-pt-70 {
  padding-top: 70px;
}
.learts-pt-80 {
  padding-top: 80px;
}
.learts-pt-90 {
  padding-top: 90px;
}
.learts-pt-100 {
  padding-top: 100px;
}
.zoomImg {
  -webkit-transition: none;
  transition: none;
}
.irs--learts {
  font-family: "Futura";
  margin: 7px 0 40px;
}
.irs--learts .irs {
  font-family: "Futura";
  position: relative;
  width: 100%;
}
.irs--learts .irs .irs-line {
  width: 100%;
  height: 5px;
  background-color: #eee;
}
.irs--learts .irs .irs-from,
.irs--learts .irs .irs-to {
  display: none !important;
}
.irs--learts .irs .irs-single {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  position: absolute;
  top: calc(100% + 25px);
  left: 0 !important;
  visibility: visible !important;
}
.irs--learts .irs .irs-single::before {
  content: "Price: ";
}
.irs--learts .irs-bar {
  top: 0;
  height: 5px;
  background-color: #333;
}
.irs--learts .irs-handle {
  top: 50%;
  width: 18px;
  height: 18px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-indent: -9999px;
  border-radius: 50%;
  background-color: #333;
}
.ps {
  position: relative;
  padding-right: 10px;
}
.ps:not(.ps--active-y) {
  overflow: visible !important;
}
.ps .ps__scrollbar-y-rail {
  width: 5px;
  opacity: 0;
  border-radius: 5px;
}
.ps .ps__scrollbar-y-rail .ps__scrollbar-y {
  right: 1px;
  width: 3px !important;
  -webkit-transition: all 0.1s ease 0s;
  transition: all 0.1s ease 0s;
  border-radius: 5px;
}
.pswp__img {
  -webkit-transition: none;
  transition: none;
}
.cd-product-viewer-wrapper {
  position: relative;
  padding-bottom: 20px;
}
.cd-product-viewer-wrapper .close {
  font-size: 30px;
  font-weight: 300;
  position: absolute;
  top: -35px;
  right: -35px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  opacity: 1;
  border: 0;
  border-radius: 50%;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}
.cd-product-viewer-wrapper .close:hover {
  opacity: 1 !important;
}
.cd-product-viewer-wrapper .product-viewer {
  position: relative;
  overflow: hidden;
}
.cd-product-viewer-wrapper img {
  position: relative;
  z-index: 1;
  display: block;
}
.cd-product-viewer-wrapper .product-sprite {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 1600%;
  height: 100%;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  opacity: 0;
  background: url(../images/product/single/7/frame-total.webp) no-repeat center
    center;
  background-size: 100%;
}
.cd-product-viewer-wrapper.loaded .product-sprite {
  opacity: 1;
}
.cd-product-viewer-handle {
  position: relative;
  z-index: 2;
  width: 60%;
  max-width: 300px;
  height: 4px;
  margin: auto;
  background: #4d4d4d;
}
.cd-product-viewer-handle .fill {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
  -webkit-transform: scaleX(0);
  -ms-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: left center;
  -ms-transform-origin: left center;
  transform-origin: left center;
  border-radius: inherit;
  background: #b54240;
}
.loaded .cd-product-viewer-handle .fill {
  opacity: 0;
}
.cd-product-viewer-handle .handle {
  position: absolute;
  z-index: 2;
  top: -20px;
  left: 0;
  display: inline-block;
  width: 44px;
  height: 44px;
  -webkit-transform: translateX(-50%) scale(0);
  -ms-transform: translateX(-50%) scale(0);
  transform: translateX(-50%) scale(0);
  text-indent: -9999px;
  border-radius: 50%;
  background: #b54240 url(../images/icons/cd-arrows.svg) no-repeat center center;
}
.loaded .cd-product-viewer-handle .handle {
  -webkit-transform: translateX(-50%) scale(1);
  -ms-transform: translateX(-50%) scale(1);
  transform: translateX(-50%) scale(1);
  -webkit-animation: cd-bounce 0.3s 0.3s;
  animation: cd-bounce 0.3s 0.3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes cd-bounce {
  0% {
    -webkit-transform: translateX(-50%) scale(0);
    transform: translateX(-50%) scale(0);
  }
  60% {
    -webkit-transform: translateX(-50%) scale(1.1);
    transform: translateX(-50%) scale(1.1);
  }
  100% {
    -webkit-transform: translateX(-50%) scale(1);
    transform: translateX(-50%) scale(1);
  }
}
@keyframes cd-bounce {
  0% {
    -webkit-transform: translateX(-50%) scale(0);
    transform: translateX(-50%) scale(0);
  }
  60% {
    -webkit-transform: translateX(-50%) scale(1.1);
    transform: translateX(-50%) scale(1.1);
  }
  100% {
    -webkit-transform: translateX(-50%) scale(1);
    transform: translateX(-50%) scale(1);
  }
}
.select2 {
  width: 100% !important;
}
.select2-selection {
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  display: block;
  width: 100%;
  height: auto !important;
  padding: 10px 0;
  color: #333;
  border: 2px solid rgba(0, 0, 0, 0) !important;
  border-bottom-color: #ededed !important;
  border-radius: 0 !important;
  background-color: rgba(0, 0, 0, 0);
}
.select2-selection__rendered {
  padding: 0 !important;
}
.select2-selection__arrow {
  top: 50% !important;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.select2-selection__arrow b {
  border-top-color: #333 !important;
}
.select2-container--open .select2-selection__arrow b {
  border-bottom-color: #333 !important;
}
.select2-dropdown {
  border: 1px solid #eee;
  border-radius: 0;
  -webkit-box-shadow: -2px 2px 80px -27px rgba(0, 0, 0, 0.3);
  box-shadow: -2px 2px 80px -27px rgba(0, 0, 0, 0.3);
}
.select2-search {
  padding: 15px;
}
.select2-search input[type="search"] {
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 15px !important;
  border-color: #ededed !important;
}
.select2-results__options {
  padding-right: 0;
}
.select2-results__options .select2-results__option {
  line-height: 24px;
  padding: 10px 15px;
}
.select2-results__options .select2-results__option[aria-selected="true"] {
  background-color: #eee;
}
.select2-results__options
  .select2-results__option.select2-results__option--highlighted {
  background-color: #f8796c;
}
.slick-slider {
  overflow: hidden;
  margin-right: -40px;
  margin-left: -40px;
  padding-right: 40px;
  padding-left: 40px;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .slick-slider {
    margin-right: -20px;
    margin-left: -20px;
    padding-right: 20px;
    padding-left: 20px;
  }
}
.slick-slider:hover .slick-arrow {
  opacity: 1;
}
.slick-slider:hover .slick-arrow.slick-prev {
  left: 0;
}
.slick-slider:hover .slick-arrow.slick-next {
  right: 0;
}
.slick-slider .slick-list {
  margin-right: -15px;
  margin-left: -15px;
}
.slick-slider .slick-list .slick-slide > div {
  padding-right: 15px;
  padding-left: 15px;
}
.slick-arrow {
  position: absolute;
  z-index: 9;
  top: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 0;
  color: dimgray;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.slick-arrow i {
  font-size: 25px;
  line-height: 1;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.slick-arrow.slick-prev {
  right: auto;
  left: -40px;
}
.slick-arrow.slick-next {
  right: -40px;
  left: auto;
}
.slick-arrow:hover {
  color: #333;
}
.slick-dots {
  position: static;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 18px;
  margin-top: 35px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
.slick-dots li {
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0 6px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.slick-dots li button {
  width: 10px;
  height: 10px;
  padding: 0;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  text-indent: -9999px;
  opacity: 0.2;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
  background-color: #1f1f1f;
}
.slick-dots li.slick-active button {
  width: 18px;
  height: 18px;
  opacity: 1;
  border-color: #333;
  background-color: rgba(0, 0, 0, 0);
}
.swiper-slider-wrapper {
  position: relative;
  overflow: hidden;
  margin-right: -40px;
  margin-left: -40px;
  padding-right: 40px;
  padding-left: 40px;
}
.swiper-slider-wrapper .swiper-button-prev {
  left: -40px;
}
.swiper-slider-wrapper .swiper-button-next {
  right: -40px;
}
.swiper-slider-wrapper:hover [class*="swiper-button"] {
  opacity: 1;
}
.swiper-slider-wrapper:hover .swiper-button-prev {
  left: 0;
}
.swiper-slider-wrapper:hover .swiper-button-next {
  right: 0;
}
[class*="swiper-button"] {
  width: 40px;
  height: 40px;
  margin-top: 0 !important;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 0;
  color: dimgray;
}
[class*="swiper-button"] i {
  font-size: 25px;
  line-height: 1;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
[class*="swiper-button"]::after {
  display: none !important;
}
[class*="swiper-button"]:hover {
  color: #333;
}
.swiper-pagination {
  position: static;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  max-height: 20px;
  margin-top: 35px;
}
.swiper-pagination .swiper-pagination-bullet {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  width: 10px;
  max-width: 10px;
  height: 10px;
  max-height: 10px;
  margin: 6px !important;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #1f1f1f;
}
.swiper-pagination .swiper-pagination-bullet-active {
  width: 18px;
  max-width: 18px;
  height: 18px;
  max-height: 18px;
  border-color: #333;
  background-color: rgba(0, 0, 0, 0);
}
.btn {
  font-weight: 400;
  line-height: 24px;
  padding: 15px 40px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 500px;
}
.btn:focus {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.btn-icon {
  width: 56px;
  padding: 15px;
}
.btn-sm {
  font-size: 12px;
  padding: 5px 20px;
}
.btn-md {
  font-size: 14px;
  padding: 10px 30px;
}
.btn-lg {
  font-size: 18px;
  padding: 20px 50px;
}
.btn-xl {
  font-size: 20px;
  padding: 25px 60px;
}
.btn-primary {
  border-color: #f8796c;
  background-color: #f8796c;
  color: #fff;
}
.btn-primary:hover {
  border-color: #f65847;
  background-color: #f65847;
  color: #fff;
}
.btn-outline-primary {
  color: #f8796c;
  border-color: #f8796c;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-primary:hover {
  border-color: #f8796c;
  background-color: #f8796c;
  color: #fff;
}
.btn-primary2 {
  border-color: #72a499;
  background-color: #72a499;
  color: #fff;
}
.btn-primary2:hover {
  border-color: #5e9286;
  background-color: #5e9286;
  color: #fff;
}
.btn-outline-primary2 {
  color: #72a499;
  border-color: #72a499;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-primary2:hover {
  border-color: #72a499;
  background-color: #72a499;
  color: #fff;
}
.btn-primary3 {
  border-color: #baa491;
  background-color: #baa491;
  color: #fff;
}
.btn-primary3:hover {
  border-color: #ab9179;
  background-color: #ab9179;
  color: #fff;
}
.btn-outline-primary3 {
  color: #baa491;
  border-color: #baa491;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-primary3:hover {
  border-color: #baa491;
  background-color: #baa491;
  color: #fff;
}
.btn-secondary {
  border-color: #6c757d;
  background-color: #6c757d;
  color: #fff;
}
.btn-secondary:hover {
  border-color: #5a6268;
  background-color: #5a6268;
  color: #fff;
}
.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-secondary:hover {
  border-color: #6c757d;
  background-color: #6c757d;
  color: #fff;
}
.btn-success {
  border-color: #4caf50;
  background-color: #4caf50;
  color: #fff;
}
.btn-success:hover {
  border-color: #409444;
  background-color: #409444;
  color: #fff;
}
.btn-outline-success {
  color: #4caf50;
  border-color: #4caf50;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-success:hover {
  border-color: #4caf50;
  background-color: #4caf50;
  color: #fff;
}
.btn-danger {
  border-color: #f44336;
  background-color: #f44336;
  color: #fff;
}
.btn-danger:hover {
  border-color: #f22112;
  background-color: #f22112;
  color: #fff;
}
.btn-outline-danger {
  color: #f44336;
  border-color: #f44336;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-danger:hover {
  border-color: #f44336;
  background-color: #f44336;
  color: #fff;
}
.btn-warning {
  border-color: #ffc107;
  background-color: #ffc107;
  color: #333;
}
.btn-warning:hover {
  border-color: #e0a800;
  background-color: #e0a800;
  color: #333;
}
.btn-outline-warning {
  color: #ffc107;
  border-color: #ffc107;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-warning:hover {
  border-color: #ffc107;
  background-color: #ffc107;
  color: #333;
}
.btn-info {
  border-color: #17a2b8;
  background-color: #17a2b8;
  color: #fff;
}
.btn-info:hover {
  border-color: #138496;
  background-color: #138496;
  color: #fff;
}
.btn-outline-info {
  color: #17a2b8;
  border-color: #17a2b8;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-info:hover {
  border-color: #17a2b8;
  background-color: #17a2b8;
  color: #fff;
}
.btn-light {
  border-color: #f8f9fa;
  background-color: #f8f9fa;
  color: #333;
}
.btn-light:hover {
  border-color: #e2e6ea;
  background-color: #e2e6ea;
  color: #333;
}
.btn-outline-light {
  color: #f8f9fa;
  border-color: #f8f9fa;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-light:hover {
  border-color: #f8f9fa;
  background-color: #f8f9fa;
  color: #333;
}
.btn-dark {
  border-color: #333;
  background-color: #333;
  color: #fff;
}
.btn-dark:hover {
  border-color: #202020;
  background-color: #202020;
  color: #fff;
}
.btn-outline-dark {
  color: #333;
  border-color: #333;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-dark:hover {
  border-color: #333;
  background-color: #333;
  color: #fff;
}
.btn-black {
  border-color: #000;
  background-color: #000;
  color: #fff;
}
.btn-black:hover {
  border-color: #000;
  background-color: #000;
  color: #fff;
}
.btn-outline-black {
  color: #000;
  border-color: #000;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-black:hover {
  border-color: #000;
  background-color: #000;
  color: #fff;
}
.btn-grey {
  border-color: #f8f9fd;
  background-color: #f8f9fd;
  color: #fff;
}
.btn-grey:hover {
  border-color: #dae0f5;
  background-color: #dae0f5;
  color: #fff;
}
.btn-outline-grey {
  color: #f8f9fd;
  border-color: #f8f9fd;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-grey:hover {
  border-color: #f8f9fd;
  background-color: #f8f9fd;
  color: #fff;
}
.btn-body {
  border-color: dimgray;
  background-color: dimgray;
  color: #fff;
}
.btn-body:hover {
  border-color: #565656;
  background-color: #565656;
  color: #fff;
}
.btn-outline-body {
  color: dimgray;
  border-color: dimgray;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-body:hover {
  border-color: dimgray;
  background-color: dimgray;
  color: #fff;
}
.btn-body-light {
  border-color: #7e7e7e;
  background-color: #7e7e7e;
  color: #fff;
}
.btn-body-light:hover {
  border-color: #6b6b6b;
  background-color: #6b6b6b;
  color: #fff;
}
.btn-outline-body-light {
  color: #7e7e7e;
  border-color: #7e7e7e;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-body-light:hover {
  border-color: #7e7e7e;
  background-color: #7e7e7e;
  color: #fff;
}
.btn-heading {
  border-color: #333;
  background-color: #333;
  color: #fff;
}
.btn-heading:hover {
  border-color: #202020;
  background-color: #202020;
  color: #fff;
}
.btn-outline-heading {
  color: #333;
  border-color: #333;
  background-color: rgba(0, 0, 0, 0);
}
.btn-outline-heading:hover {
  border-color: #333;
  background-color: #333;
  color: #fff;
}
.btn-hover-primary:hover,
.btn-hover-primary:not(:disabled):not(.disabled).active {
  border-color: #f8796c;
  background-color: #f8796c;
  color: #fff;
}
.btn-outline-hover-primary:hover,
.btn-outline-hover-primary:not(:disabled):not(.disabled).active {
  color: #f8796c;
  border-color: #f8796c;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-primary2:hover,
.btn-hover-primary2:not(:disabled):not(.disabled).active {
  border-color: #72a499;
  background-color: #72a499;
  color: #fff;
}
.btn-outline-hover-primary2:hover,
.btn-outline-hover-primary2:not(:disabled):not(.disabled).active {
  color: #72a499;
  border-color: #72a499;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-primary3:hover,
.btn-hover-primary3:not(:disabled):not(.disabled).active {
  border-color: #baa491;
  background-color: #baa491;
  color: #fff;
}
.btn-outline-hover-primary3:hover,
.btn-outline-hover-primary3:not(:disabled):not(.disabled).active {
  color: #baa491;
  border-color: #baa491;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-secondary:hover,
.btn-hover-secondary:not(:disabled):not(.disabled).active {
  border-color: #6c757d;
  background-color: #6c757d;
  color: #fff;
}
.btn-outline-hover-secondary:hover,
.btn-outline-hover-secondary:not(:disabled):not(.disabled).active {
  color: #6c757d;
  border-color: #6c757d;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-success:hover,
.btn-hover-success:not(:disabled):not(.disabled).active {
  border-color: #4caf50;
  background-color: #4caf50;
  color: #fff;
}
.btn-outline-hover-success:hover,
.btn-outline-hover-success:not(:disabled):not(.disabled).active {
  color: #4caf50;
  border-color: #4caf50;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-danger:hover,
.btn-hover-danger:not(:disabled):not(.disabled).active {
  border-color: #f44336;
  background-color: #f44336;
  color: #fff;
}
.btn-outline-hover-danger:hover,
.btn-outline-hover-danger:not(:disabled):not(.disabled).active {
  color: #f44336;
  border-color: #f44336;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-warning:hover,
.btn-hover-warning:not(:disabled):not(.disabled).active {
  border-color: #ffc107;
  background-color: #ffc107;
  color: #333;
}
.btn-outline-hover-warning:hover,
.btn-outline-hover-warning:not(:disabled):not(.disabled).active {
  color: #ffc107;
  border-color: #ffc107;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-info:hover,
.btn-hover-info:not(:disabled):not(.disabled).active {
  border-color: #17a2b8;
  background-color: #17a2b8;
  color: #fff;
}
.btn-outline-hover-info:hover,
.btn-outline-hover-info:not(:disabled):not(.disabled).active {
  color: #17a2b8;
  border-color: #17a2b8;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-light:hover,
.btn-hover-light:not(:disabled):not(.disabled).active {
  border-color: #f8f9fa;
  background-color: #f8f9fa;
  color: #333;
}
.btn-outline-hover-light:hover,
.btn-outline-hover-light:not(:disabled):not(.disabled).active {
  color: #f8f9fa;
  border-color: #f8f9fa;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-dark:hover,
.btn-hover-dark:not(:disabled):not(.disabled).active {
  border-color: #333;
  background-color: #333;
  color: #fff;
}
.btn-outline-hover-dark:hover,
.btn-outline-hover-dark:not(:disabled):not(.disabled).active {
  color: #333;
  border-color: #333;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-black:hover,
.btn-hover-black:not(:disabled):not(.disabled).active {
  border-color: #000;
  background-color: #000;
  color: #fff;
}
.btn-outline-hover-black:hover,
.btn-outline-hover-black:not(:disabled):not(.disabled).active {
  color: #000;
  border-color: #000;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-grey:hover,
.btn-hover-grey:not(:disabled):not(.disabled).active {
  border-color: #f8f9fd;
  background-color: #f8f9fd;
  color: #fff;
}
.btn-outline-hover-grey:hover,
.btn-outline-hover-grey:not(:disabled):not(.disabled).active {
  color: #f8f9fd;
  border-color: #f8f9fd;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-body:hover,
.btn-hover-body:not(:disabled):not(.disabled).active {
  border-color: dimgray;
  background-color: dimgray;
  color: #fff;
}
.btn-outline-hover-body:hover,
.btn-outline-hover-body:not(:disabled):not(.disabled).active {
  color: dimgray;
  border-color: dimgray;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-body-light:hover,
.btn-hover-body-light:not(:disabled):not(.disabled).active {
  border-color: #7e7e7e;
  background-color: #7e7e7e;
  color: #fff;
}
.btn-outline-hover-body-light:hover,
.btn-outline-hover-body-light:not(:disabled):not(.disabled).active {
  color: #7e7e7e;
  border-color: #7e7e7e;
  background-color: rgba(0, 0, 0, 0);
}
.btn-hover-heading:hover,
.btn-hover-heading:not(:disabled):not(.disabled).active {
  border-color: #333;
  background-color: #333;
  color: #fff;
}
.btn-outline-hover-heading:hover,
.btn-outline-hover-heading:not(:disabled):not(.disabled).active {
  color: #333;
  border-color: #333;
  background-color: rgba(0, 0, 0, 0);
}
[class*="hintT"] {
  position: relative;
  z-index: 9;
}
[class*="hintT"]::before {
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  position: absolute;
  z-index: 9;
  visibility: hidden;
  padding: 8px 10px;
  content: attr(data-hint);
  -webkit-transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1) 0s;
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1) 0s;
  white-space: nowrap;
  text-transform: initial;
  pointer-events: none;
  opacity: 0;
  color: #fff;
  background: #333;
  -webkit-box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  text-shadow: 0 -1px 0 #000;
}
[class*="hintT"]::after {
  position: absolute;
  z-index: 1000001;
  z-index: 8;
  visibility: hidden;
  content: "";
  -webkit-transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1) 0s;
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1) 0s;
  opacity: 0;
  border: 6px solid rgba(0, 0, 0, 0);
  background: 0;
}
[class*="hintT"]:hover::before,
[class*="hintT"]:hover::after {
  visibility: visible;
  opacity: 1;
}
.hintT-top::before {
  bottom: calc(100% - 4px);
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.hintT-top::after {
  bottom: calc(100% - 16px);
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  border-top-color: #333;
}
.hintT-top:hover::before {
  bottom: calc(100% + 6px);
}
.hintT-top:hover::after {
  bottom: calc(100% - 5px);
}
.hintT-right::before {
  top: 50%;
  left: calc(100% - 4px);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.hintT-right::after {
  top: 50%;
  left: calc(100% - 16px);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border-right-color: #333;
}
.hintT-right:hover::before {
  left: calc(100% + 6px);
}
.hintT-right:hover::after {
  left: calc(100% - 5px);
}
.hintT-bottom::before {
  top: calc(100% - 4px);
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.hintT-bottom::after {
  top: calc(100% - 16px);
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  border-bottom-color: #333;
}
.hintT-bottom:hover::before {
  top: calc(100% + 6px);
}
.hintT-bottom:hover::after {
  top: calc(100% - 5px);
}
.hintT-left::before {
  top: 50%;
  right: calc(100% - 4px);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.hintT-left::after {
  top: 50%;
  right: calc(100% - 16px);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border-left-color: #333;
}
.hintT-left:hover::before {
  right: calc(100% + 6px);
}
.hintT-left:hover::after {
  right: calc(100% - 5px);
}
.accordion .card {
  border-width: 1px 0 0;
  border-color: rgba(0, 0, 0, 0.075);
  border-radius: 0 !important;
}
.accordion .card:last-child {
  border-bottom-width: 1px;
}
.accordion .card .card-header {
  padding: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.accordion .card .card-header .btn {
  font-family: "Marcellus";
  font-size: 18px;
  display: block;
  width: 100%;
  padding: 0;
  padding: 15px 20px;
  text-align: left;
  text-decoration: none;
  text-transform: inherit;
  color: #333;
  border: 0;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0);
}
.accordion .card .card-header .btn:not(.collapsed) {
  background-color: rgba(0, 0, 0, 0.075);
}
.accordion .card .card-body {
  padding: 30px 0;
}
.accordion .card .card-body p {
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  color: #7e7e7e;
}
.brand-carousel .slick-track {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.brand-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.brand-item a {
  display: block;
  opacity: 0.4;
}
.brand-item a img {
  max-width: 100%;
}
.brand-item a:hover {
  opacity: 1;
}
.icon-box1 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 100%;
}
.icon-box1 .inner {
  text-align: center;
}
.icon-box1 .inner .icon {
  margin-bottom: 30px;
  color: #ccc;
}
.icon-box1 .inner .icon i {
  font-size: 56px;
  line-height: 1;
  display: block;
}
.icon-box1 .inner .content .title {
  font-family: "Futura";
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 15px;
  color: #333;
}
.icon-box1 .inner .content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #7e7e7e;
}
.icon-box2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.icon-box2 .inner {
  text-align: left;
}
.icon-box2 .inner .icon {
  float: left;
  padding-right: 20px;
  color: #ccc;
}
.icon-box2 .inner .icon i {
  font-size: 30px;
  line-height: 1;
  display: block;
}
.icon-box2 .inner .content {
  overflow: hidden;
}
.icon-box2 .inner .content .title {
  font-family: "Futura";
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 10px;
  color: #333;
}
.icon-box2 .inner .content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #7e7e7e;
}
.icon-box3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 100%;
}
.icon-box3:nth-child(1) {
  background-color: #edf6eb;
}
.icon-box3:nth-child(1) .inner .icon {
  color: #a3d39c;
}
.icon-box3:nth-child(2) {
  background-color: #f8f5de;
}
.icon-box3:nth-child(2) .inner .icon {
  color: #ddb758;
}
.icon-box3:nth-child(3) {
  background-color: #ecf4fb;
}
.icon-box3:nth-child(3) .inner .icon {
  color: #7eb7e6;
}
.icon-box3 .inner {
  padding: 60px 20px;
  text-align: center;
}
.icon-box3 .inner .icon {
  margin-bottom: 30px;
  color: #ccc;
}
.icon-box3 .inner .icon i {
  font-size: 56px;
  line-height: 1;
  display: block;
}
.icon-box3 .inner .content .title {
  font-family: "Futura";
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 15px;
  color: #333;
}
.icon-box3 .inner .content p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #7e7e7e;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .icon-box3 .inner {
    padding: 40px 15px;
  }
}
@media only screen and (max-width: 767px) {
  .icon-box3 .inner {
    padding: 50px 15px;
  }
}
.icon-box4 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 100%;
  text-align: center;
}
.icon-box4 .inner .icon {
  margin-bottom: 30px;
  color: #ccc;
}
.icon-box4 .inner .icon i {
  font-size: 56px;
  line-height: 1;
  display: block;
}
.icon-box4 .inner .content .title {
  font-family: "Futura";
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 15px;
  color: #333;
}
.icon-box4 .inner .content p {
  line-height: 1.5;
  color: #7e7e7e;
}
.icon-box5 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.icon-box5 .icon {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 90px;
  -ms-flex: 1 0 90px;
  flex: 1 0 90px;
  max-width: 90px;
  height: 90px;
  text-align: center;
  color: #f8796c;
  border-radius: 50%;
  background-color: #fff;
}
.icon-box5 .icon i {
  font-size: 22px;
  line-height: 90px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.icon-box5 .content {
  padding-left: 20px;
}
.icon-box5 .content .title {
  font-family: "Futura";
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
}
.icon-box5:hover .icon i {
  -webkit-transform: scale(1.25);
  -ms-transform: scale(1.25);
  transform: scale(1.25);
}
blockquote:not(.learts-blockquote):not(.learts-blockquote2) {
  margin-bottom: 20px;
  margin-left: 40px;
  padding: 10px 20px;
  border-left: 2px solid #333;
}
blockquote:not(.learts-blockquote):not(.learts-blockquote2) p {
  font-size: 18px !important;
  font-weight: 300;
  font-style: italic;
  line-height: 1.675;
}
blockquote:not(.learts-blockquote):not(.learts-blockquote2) p:last-child {
  margin-bottom: 0;
}
@media only screen and (max-width: 575px) {
  blockquote:not(.learts-blockquote):not(.learts-blockquote2) {
    margin-left: 0;
  }
}
blockquote.learts-blockquote,
.learts-blockquote {
  overflow: hidden;
  height: 100%;
  padding: 60px;
  background-color: #f5ede6;
}
blockquote.learts-blockquote .inner .title,
.learts-blockquote .inner .title {
  font-size: 40px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 20px;
}
blockquote.learts-blockquote .inner .desc,
.learts-blockquote .inner .desc {
  margin-bottom: 20px;
}
blockquote.learts-blockquote .inner .desc p,
.learts-blockquote .inner .desc p {
  font-size: 16px;
  font-weight: 400;
}
blockquote.learts-blockquote .inner .link,
.learts-blockquote .inner .link {
  font-size: 16px;
  font-weight: 400;
  position: relative;
  float: right;
  margin-left: auto;
  color: #333;
}
blockquote.learts-blockquote .inner .link::before,
.learts-blockquote .inner .link::before {
  position: absolute;
  top: 50%;
  right: 100%;
  width: 60px;
  height: 2px;
  margin-right: 20px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #333;
}
blockquote.learts-blockquote .inner .link:hover::before,
.learts-blockquote .inner .link:hover::before {
  margin-right: 5px;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  blockquote.learts-blockquote,
  .learts-blockquote {
    padding: 50px;
  }
  blockquote.learts-blockquote .inner .title,
  .learts-blockquote .inner .title {
    font-size: 36px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  blockquote.learts-blockquote,
  .learts-blockquote {
    padding: 50px;
  }
  blockquote.learts-blockquote .inner .title,
  .learts-blockquote .inner .title {
    font-size: 32px;
  }
}
@media only screen and (max-width: 767px) {
  blockquote.learts-blockquote,
  .learts-blockquote {
    padding: 40px;
  }
  blockquote.learts-blockquote .inner .title,
  .learts-blockquote .inner .title {
    font-size: 30px;
  }
}
@media only screen and (max-width: 479px) {
  blockquote.learts-blockquote,
  .learts-blockquote {
    padding: 30px;
  }
  blockquote.learts-blockquote .inner .title,
  .learts-blockquote .inner .title {
    font-size: 24px;
  }
}
blockquote.learts-blockquote2,
.learts-blockquote2 {
  margin-bottom: 0;
  margin-left: 0;
  padding: 0;
  text-align: center;
}
blockquote.learts-blockquote2:last-child,
.learts-blockquote2:last-child {
  margin-bottom: 0;
}
blockquote.learts-blockquote2 .icon,
.learts-blockquote2 .icon {
  margin-bottom: 36px;
}
blockquote.learts-blockquote2 .content p,
.learts-blockquote2 .content p {
  font-family: "Marcellus";
  font-size: 24px !important;
  font-weight: 400;
  line-height: 1.675;
}
label {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  display: block;
  margin-bottom: 10px;
  letter-spacing: 1.6px;
  color: #333;
}
label .required {
  font-size: 16px;
  color: red;
}
label:last-child {
  margin-bottom: 0;
}
input:not([type="checkbox"]):not([type="radio"]),
textarea {
  font-size: 16px;
  font-weight: 400;
  display: block;
  width: 100%;
  padding: 10px 0;
  color: #333;
  border: 2px solid rgba(0, 0, 0, 0);
  border-bottom-color: #ededed;
  background-color: rgba(0, 0, 0, 0);
}
input:not([type="checkbox"]):not([type="radio"])::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #7e7e7e;
}
input:not([type="checkbox"]):not([type="radio"]):-moz-placeholder,
textarea:-moz-placeholder {
  color: #7e7e7e;
}
input:not([type="checkbox"]):not([type="radio"])::-moz-placeholder,
textarea::-moz-placeholder {
  color: #7e7e7e;
}
input:not([type="checkbox"]):not([type="radio"]):-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #7e7e7e;
}
input:not([type="checkbox"]):not([type="radio"]):focus,
textarea:focus {
  border-bottom-color: #333;
}
textarea {
  height: 200px;
  resize: none;
}
.form-check {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.form-check input[type="checkbox"] {
  margin-top: 2px;
  color: #f8796c;
}
.form-check input[type="checkbox"]:checked {
  border-color: currentColor;
  background-color: currentColor;
}
.form-check input[type="checkbox"]:focus {
  border-color: currentColor;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.form-check .form-check-label {
  margin-left: 10px;
}
fieldset {
  padding: 30px 40px;
  border: 1px solid #eee;
}
fieldset legend {
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  width: auto;
  margin-top: -42px;
  margin-bottom: 0;
  padding: 0 15px;
  text-transform: uppercase;
  color: #333;
  background-color: #fff;
}
.topbar-section {
  font-size: 16px;
  font-weight: 400;
  position: relative;
  z-index: 101;
}
@media only screen and (min-width: 1500px) {
  .topbar-section.section-fluid {
    padding-right: 55px;
    padding-left: 55px;
  }
  .topbar-section.section-fluid .container,
  .topbar-section.section-fluid .container-fluid {
    max-width: 100%;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .topbar-section.section-fluid {
    padding-right: 35px;
    padding-left: 35px;
  }
  .topbar-section.section-fluid .container,
  .topbar-section.section-fluid .container-fluid {
    max-width: 100%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .topbar-section.section-fluid {
    padding-right: 0;
    padding-left: 0;
  }
  .topbar-section.section-fluid .container {
    max-width: 960px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .topbar-section.section-fluid {
    padding-right: 0;
    padding-left: 0;
  }
  .topbar-section.section-fluid .container {
    max-width: 720px;
  }
}
.topbar-menu ul {
  font-weight: 400;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.topbar-menu ul li {
  position: relative;
  margin-right: 15px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
}
.topbar-menu ul li::after {
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 15px;
  content: "";
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #d8d8d8;
}
.topbar-menu ul li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.topbar-menu ul li:last-child::after {
  display: none;
}
.topbar-menu ul li a i {
  font-size: 14px;
  margin-right: 10px;
}
.header-lan-curr ~ ul li:last-child {
  margin-right: 15px;
  padding-right: 15px;
}
.header-lan-curr ~ ul li:last-child::after {
  display: block !important;
}
.header-section {
  position: relative;
  z-index: 98;
}
.header-section .container,
.header-section .container-fluid {
  position: relative;
}
.header-section .row > [class*="col"] {
  position: static;
}
.header-section.header-menu-center .row > [class*="col"]:first-child,
.header-section.header-menu-center .row > [class*="col"]:last-child {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 210px;
  -ms-flex: 1 0 210px;
  flex: 1 0 210px;
  max-width: 210px;
}
.header-section.header-transparent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0) !important;
}
.sticky-header {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
}
.sticky-header .container,
.sticky-header .container-fluid {
  position: relative;
}
.sticky-header .row > [class*="col"] {
  position: static;
}
@media only screen and (min-width: 1200px) {
  .sticky-header.header-menu-center .row > [class*="col"]:first-child,
  .sticky-header.header-menu-center .row > [class*="col"]:last-child {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 210px;
    -ms-flex: 1 0 210px;
    flex: 1 0 210px;
    max-width: 210px;
  }
}
.sticky-header.is-sticky {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
body.offside-header-left {
  margin-left: 400px;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  body.offside-header-left {
    margin-left: 300px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  body.offside-header-left {
    margin-left: 0;
  }
}
.header-call {
  position: absolute;
  top: 0;
  right: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 200px;
  height: 100%;
  border-right: 1px solid #dee2e6;
  border-left: 1px solid #dee2e6;
}
.header-call p {
  font-size: 16px;
  font-weight: 600;
}
.header-call p i {
  margin-right: 10px;
}
.header-logo {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
}
.header-logo a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.header-lan-curr {
  font-size: 16px;
  font-weight: 400;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.header-lan-curr > li {
  position: relative;
  margin-right: 16px;
  padding-right: 15px;
}
.header-lan-curr > li::after {
  position: absolute;
  top: 50%;
  right: 0;
  width: 1px;
  height: 15px;
  content: "";
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #d8d8d8;
}
.header-lan-curr > li:last-child {
  margin-right: 0;
  padding-right: 0;
}
.header-lan-curr > li:last-child::after {
  display: none;
}
.header-lan-curr > li > a {
  line-height: 1;
  padding: 5px 0;
  color: #7e7e7e;
}
.header-lan-curr > li > a::after {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  font-weight: 900;
  margin-left: 5px;
  content: "";
  opacity: 0.4;
}
.header-lan-curr > li > .curr-lan-sub-menu {
  position: absolute;
  z-index: 1;
  top: 150%;
  left: -15px;
  display: block;
  visibility: hidden;
  min-width: 120px;
  margin: 0;
  padding: 10px 15px;
  list-style: none;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  letter-spacing: 0;
  opacity: 0;
  background-color: #fff;
  -webkit-box-shadow: -1px 10px 80px -15px rgba(0, 0, 0, 0.3);
  box-shadow: -1px 10px 80px -15px rgba(0, 0, 0, 0.3);
}
.header-lan-curr > li > .curr-lan-sub-menu li {
  line-height: 1.75;
  margin: 0;
  padding: 0;
}
.header-lan-curr > li > .curr-lan-sub-menu li::after {
  display: none;
}
.header-lan-curr > li > .curr-lan-sub-menu li + li {
  margin-top: 5px;
}
.header-lan-curr > li > .curr-lan-sub-menu li a {
  display: block;
  padding: 0;
  color: #7e7e7e;
}
.header-lan-curr > li > .curr-lan-sub-menu li a:hover {
  padding-left: 5px;
}
.header-lan-curr > li:hover > a {
  color: #333;
}
.header-lan-curr > li:hover > .curr-lan-sub-menu {
  top: 100%;
  visibility: visible;
  opacity: 1;
}
.header-tools {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.header-tools > div {
  margin-left: 25px;
}
.header-tools > div a {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: #333;
}
.header-tools > div a span {
  font-size: 13px;
  font-weight: 700;
  line-height: 1rem;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  min-width: 16px;
  height: 16px;
  padding: 0 3px;
  text-align: center;
  color: #fff;
  border-radius: 14px;
  background-color: #f8796c;
}
.header-tools > div a i {
  font-size: 20px;
  line-height: 32px;
  display: block;
}
.header-tools > div.header-wishlist > a i,
.header-tools > div.header-cart > a i {
  margin-right: 10px;
}
.header-tools > div.mobile-menu-toggle > a {
  width: 24px;
  height: 32px;
}
.header-tools > div:first-child {
  margin-left: 0;
}
@media only screen and (max-width: 575px) {
  .header-tools > div {
    margin-left: 15px;
  }
}
.mobile-menu-toggle svg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 60px;
  margin-top: -2px;
  margin-left: -2px;
  cursor: pointer;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
.mobile-menu-toggle svg path {
  -webkit-transition: stroke-dashoffset 0.5s
      cubic-bezier(0.25, -0.25, 0.75, 1.25),
    stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
  transition: stroke-dashoffset 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25),
    stroke-dasharray 0.5s cubic-bezier(0.25, -0.25, 0.75, 1.25);
  fill: none;
  stroke: #333;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke-width: 30px;
}
.mobile-menu-toggle svg path.top,
.mobile-menu-toggle svg path.bottom {
  stroke-dasharray: 240px 950px;
}
.mobile-menu-toggle svg path.middle {
  stroke-dasharray: 240px 240px;
}
.mobile-menu-toggle .close {
  opacity: 1;
}
.mobile-menu-toggle .close svg path.top,
.mobile-menu-toggle .close svg path.bottom {
  stroke-dasharray: -650px;
  stroke-dashoffset: -650px;
}
.mobile-menu-toggle .close svg path.middle {
  stroke-dasharray: 1px 220px;
  stroke-dashoffset: -115px;
}
.site-menu-section {
  border-top: 1px dashed #dedede;
}
.site-main-menu {
  font-weight: 400;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.site-main-menu > ul {
  font-size: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.site-main-menu > ul > li {
  letter-spacing: 1.5px;
}
.site-main-menu > ul > li > a {
  line-height: 1.5;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 25px;
  text-transform: uppercase;
  color: #7e7e7e;
}
.site-main-menu > ul > li > a > .menu-text {
  position: relative;
}
.site-main-menu > ul > li > a > .menu-text::after {
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 1px;
  content: "";
  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.8, 0, 0.2, 1);
  transition: -webkit-transform 0.5s cubic-bezier(0.8, 0, 0.2, 1);
  transition: transform 0.5s cubic-bezier(0.8, 0, 0.2, 1);
  transition: transform 0.5s cubic-bezier(0.8, 0, 0.2, 1),
    -webkit-transform 0.5s cubic-bezier(0.8, 0, 0.2, 1);
  transition: transform 0.5s cubic-bezier(0.8, 0, 0.2, 1),
    -webkit-transform 0.5s cubic-bezier(0.8, 0, 0.2, 1);
  -webkit-transform: scale3d(0, 1, 1);
  transform: scale3d(0, 1, 1);
  -webkit-transform-origin: 100% 50%;
  -ms-transform-origin: 100% 50%;
  transform-origin: 100% 50%;
  background-color: #333;
}
.site-main-menu > ul > li.has-children > a::before {
  font-family: "Font Awesome 5 Free";
  font-size: 10px;
  position: absolute;
  top: 50%;
  right: 10px;
  content: "";
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-weight: 900;
  opacity: 0.6;
}
.site-main-menu > ul > li.align-left > .sub-menu {
  right: 0;
  left: auto;
}
.site-main-menu > ul > li:hover > a {
  color: #333;
}
.site-main-menu > ul > li:hover > a > .menu-text::after {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transform-origin: 0 50%;
  -ms-transform-origin: 0 50%;
  transform-origin: 0 50%;
}
.site-main-menu > ul > li:hover > .sub-menu {
  z-index: 99;
  top: 100%;
  visibility: visible;
  opacity: 1;
}
.site-main-menu.menu-height-100 > ul > li > a {
  padding-top: 38px;
  padding-bottom: 38px;
}
.site-main-menu.menu-height-60 > ul > li > a {
  padding-top: 18px;
  padding-bottom: 18px;
}
.sub-menu {
  position: absolute;
  z-index: 9;
  z-index: 9;
  top: 150%;
  visibility: hidden;
  min-width: 280px;
  margin: 0;
  padding: 20px 0;
  list-style: none;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  letter-spacing: 0;
  opacity: 0;
  background-color: #fff;
  -webkit-box-shadow: -1px 10px 80px -15px rgba(0, 0, 0, 0.3);
  box-shadow: -1px 10px 80px -15px rgba(0, 0, 0, 0.3);
}
.sub-menu li {
  line-height: 3.125;
  position: relative;
}
.sub-menu li a {
  position: relative;
  display: block;
  padding: 0 30px;
  color: #7e7e7e;
}
.sub-menu li a:not(.mega-menu-title) .menu-text {
  position: relative;
}
.sub-menu li a:not(.mega-menu-title) .menu-text::after {
  position: absolute;
  top: calc(50% + 10px);
  left: 0;
  width: 100%;
  height: 1px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background-color: #333;
}
.sub-menu li a:hover .menu-text::after {
  opacity: 0.2;
}
.sub-menu li.has-children > a::before {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  position: absolute;
  top: 50%;
  right: 30px;
  font-weight: 900;
  content: "";
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 0.6;
}
.sub-menu li.has-children.align-left > a::before {
  content: "";
}
.sub-menu li.has-children.align-left > .sub-menu {
  right: 100%;
  left: auto;
}
.sub-menu li > .sub-menu {
  top: 100%;
  left: 100%;
}
.sub-menu li:hover > a {
  color: #333;
}
.sub-menu li:hover > .sub-menu {
  top: 0;
  visibility: visible;
  opacity: 1;
}
.sub-menu.mega-menu {
  right: auto;
  left: 15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 1170px;
  margin: 0;
  padding: 30px 30px 30px 10px;
  list-style: none;
}
.sub-menu.mega-menu > li {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 25%;
  -ms-flex: 1 0 25%;
  flex: 1 0 25%;
  padding: 0 10px 0 30px;
  border-right: 1px solid #e7e7e7;
}
.sub-menu.mega-menu > li:last-child {
  border: 0;
}
.sub-menu.mega-menu > li > a {
  padding: 0;
}
.sub-menu.mega-menu > li > a.mega-menu-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 16px;
  letter-spacing: 0.01em;
  color: #333;
}
.sub-menu.mega-menu > li:hover > a {
  color: #333;
}
.sub-menu.mega-menu > li ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.sub-menu.mega-menu > li ul li {
  line-height: 3.125;
  position: relative;
}
.sub-menu.mega-menu > li ul li a {
  padding: 0;
  color: #7e7e7e;
}
.sub-menu.mega-menu > li ul li > img {
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 40%;
  visibility: hidden;
  width: 250px;
  height: auto;
  -webkit-transform: translateY(-40%);
  -ms-transform: translateY(-40%);
  transform: translateY(-40%);
  opacity: 0;
  border-radius: 5px;
  -webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.sub-menu.mega-menu > li ul li:hover > a {
  color: #333;
}
.sub-menu.mega-menu > li ul li:hover > img {
  visibility: visible;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 1;
}
body.offcanvas-open {
  overflow: hidden;
  padding-right: 17px;
}
body.offcanvas-open .sticky-header {
  right: 17px;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  body.offcanvas-open {
    padding-right: 0;
  }
  body.offcanvas-open .sticky-header {
    right: 0;
  }
}
.offcanvas-overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
}
.offcanvas {
  font-size: 16px;
  font-weight: 400;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: auto;
  display: block;
  overflow: hidden;
  width: 400px;
  height: 100vh;
  padding: 20px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
  background-color: #fff;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.offcanvas.offcanvas-open {
  visibility: visible;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.offcanvas .inner {
  position: relative;
  z-index: 9;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
}
.offcanvas .inner.ps {
  margin-right: -10px;
}
.offcanvas .inner .head {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.offcanvas .inner .head .title {
  font-size: 18px;
  line-height: 1;
  color: #333;
}
.offcanvas .inner .head .offcanvas-close {
  position: relative;
  width: 20px;
  height: 20px;
  text-indent: -9999px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.offcanvas .inner .head .offcanvas-close::before,
.offcanvas .inner .head .offcanvas-close::after {
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  width: 20px;
  height: 2px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: #333;
}
.offcanvas .inner .head .offcanvas-close::after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.offcanvas .inner .head .offcanvas-close:hover::before {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.offcanvas .inner .head .offcanvas-close:hover::after {
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
}
.offcanvas .inner .body {
  overflow: hidden;
  height: auto;
}
.offcanvas .inner .foot {
  width: 100%;
  margin-top: 25px;
}
.offcanvas .inner .foot .sub-total {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid #eee;
}
.offcanvas .inner .foot .sub-total strong {
  font-weight: 600;
  color: #333;
}
.offcanvas .inner .foot .sub-total .amount {
  font-weight: 600;
  color: #f8796c;
}
.offcanvas .inner .foot .buttons {
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.offcanvas .inner .foot .buttons .btn {
  display: block;
  padding: 10px 20px;
}
.offcanvas .inner .foot .buttons .btn + .btn {
  margin-top: 15px;
}
.offcanvas .inner .foot .minicart-message {
  margin-top: 15px;
}
.offcanvas.offcanvas-cart .inner .body {
  max-height: calc(100% - 305px);
}
.offcanvas.offcanvas-wishlist .inner .body {
  max-height: calc(100% - 152px);
}
.offcanvas.offcanvas-mobile-menu {
  right: auto;
  left: 0;
  padding: 50px 40px;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
}
.offcanvas.offcanvas-mobile-menu.offcanvas-open {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.offcanvas.offcanvas-search {
  width: 100%;
  padding: 40px;
  -webkit-transition: all 0.5s ease 0.5s;
  transition: all 0.5s ease 0.5s;
}
.offcanvas.offcanvas-search::before {
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  background-color: #fff;
}
.offcanvas.offcanvas-search .inner {
  z-index: 5;
  padding-right: 10%;
}
.offcanvas.offcanvas-search .inner .offcanvas-close {
  position: absolute;
  top: 5px;
  right: 0;
  width: 50px;
  height: 50px;
  text-indent: -9999px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.offcanvas.offcanvas-search .inner .offcanvas-close::before,
.offcanvas.offcanvas-search .inner .offcanvas-close::after {
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  width: 50px;
  height: 2px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: #333;
}
.offcanvas.offcanvas-search .inner .offcanvas-close::after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.offcanvas.offcanvas-search .inner .offcanvas-close:hover::before {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.offcanvas.offcanvas-search .inner .offcanvas-close:hover::after {
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
}
.offcanvas.offcanvas-search.offcanvas-open {
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.offcanvas.offcanvas-search.offcanvas-open::before {
  width: 0;
  -webkit-transition: all 0.5s ease 0.5s;
  transition: all 0.5s ease 0.5s;
}
.offcanvas.offcanvas-header {
  position: fixed;
  right: auto;
  left: 0;
  visibility: visible;
  padding: 50px 40px;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .offcanvas.offcanvas-header {
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  .offcanvas.offcanvas-header.offcanvas-open {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
}
.offcanvas.offcanvas-overlay-menu {
  left: 0;
  visibility: hidden;
  width: 100%;
  padding: 40px;
  -webkit-transition: all 0.5s ease 0.5s;
  transition: all 0.5s ease 0.5s;
  -webkit-transform: scale(0.3);
  -ms-transform: scale(0.3);
  transform: scale(0.3);
  opacity: 0;
  background-color: #f4ede7;
}
.offcanvas.offcanvas-overlay-menu .inner {
  z-index: 5;
  padding-right: 0;
}
.offcanvas.offcanvas-overlay-menu .inner .offcanvas-close {
  position: absolute;
  z-index: 9;
  top: 5px;
  right: 0;
  width: 50px;
  height: 50px;
  text-indent: -9999px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.offcanvas.offcanvas-overlay-menu .inner .offcanvas-close::before,
.offcanvas.offcanvas-overlay-menu .inner .offcanvas-close::after {
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  width: 50px;
  height: 2px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: #333;
}
.offcanvas.offcanvas-overlay-menu .inner .offcanvas-close::after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.offcanvas.offcanvas-overlay-menu .inner .offcanvas-close:hover::before {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.offcanvas.offcanvas-overlay-menu .inner .offcanvas-close:hover::after {
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
}
.offcanvas.offcanvas-overlay-menu.offcanvas-open {
  visibility: visible;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .offcanvas.offcanvas-header {
    width: 300px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .offcanvas.offcanvas-search .inner .offcanvas-close {
    width: 40px;
    height: 40px;
  }
  .offcanvas.offcanvas-search .inner .offcanvas-close::before,
  .offcanvas.offcanvas-search .inner .offcanvas-close::after {
    width: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .offcanvas.offcanvas-search .inner {
    padding-right: 40px;
  }
  .offcanvas.offcanvas-search .inner .offcanvas-close {
    width: 30px;
    height: 30px;
  }
  .offcanvas.offcanvas-search .inner .offcanvas-close::before,
  .offcanvas.offcanvas-search .inner .offcanvas-close::after {
    width: 30px;
  }
}
@media only screen and (max-width: 575px) {
  .offcanvas.offcanvas-search {
    padding: 30px;
  }
  .offcanvas.offcanvas-overlay-menu {
    padding: 30px;
  }
}
@media only screen and (max-width: 479px) {
  .offcanvas {
    width: 300px;
  }
  .offcanvas.offcanvas-search {
    padding: 20px;
  }
  .offcanvas.offcanvas-overlay-menu {
    padding: 20px;
  }
}
.minicart-product-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.minicart-product-list li {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.minicart-product-list li:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}
.minicart-product-list li .image {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 75px;
  -ms-flex: 1 0 75px;
  flex: 1 0 75px;
}
.minicart-product-list li .content {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 calc(100% - 75px);
  -ms-flex: 1 0 calc(100% - 75px);
  flex: 1 0 calc(100% - 75px);
  padding-left: 15px;
}
.minicart-product-list li .content .title {
  color: #7e7e7e;
}
.minicart-product-list li .content .title:hover {
  color: #333;
}
.minicart-product-list li .content .quantity-price {
  font-size: 12px;
  display: block;
  margin-top: 10px;
}
.minicart-product-list li .content .quantity-price .amount {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}
.minicart-product-list li .content .remove {
  font-size: 24px;
  line-height: 1;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 5px;
  color: #7e7e7e;
}
.minicart-product-list li .content .remove:hover {
  color: red;
}
.offcanvas-search-form input[type="text"] {
  font-size: 48px;
  line-height: 1;
  width: 95%;
  padding: 5px 0;
  vertical-align: middle;
  border: 0;
  border-bottom: 2px solid #333;
  background-color: #fff;
  background-size: 30px;
}
.offcanvas-search-form input[type="text"]::-webkit-input-placeholder {
  opacity: 0.5;
}
.offcanvas-search-form input[type="text"]:-moz-placeholder {
  opacity: 0.5;
}
.offcanvas-search-form input[type="text"]::-moz-placeholder {
  opacity: 0.5;
}
.offcanvas-search-form input[type="text"]:-ms-input-placeholder {
  opacity: 0.5;
}
.offcanvas-search-form .select2 {
  font-size: 48px;
  line-height: 1;
  width: 100% !important;
  border: 0;
  border-bottom: 2px solid #333;
}
.offcanvas-search-form .select2 .selection .select2-selection {
  font-size: inherit;
  height: 75px !important;
  padding: 5px 0;
  border: none !important;
  border-radius: 0;
  background-color: #fff;
}
.offcanvas-search-form
  .select2
  .selection
  .select2-selection
  .select2-selection__rendered {
  font-size: inherit;
  font-weight: 400;
  line-height: inherit;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  padding-left: 0;
  opacity: 0.8;
}
.offcanvas-search-form
  .select2
  .selection
  .select2-selection
  .select2-selection__rendered::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 300;
  position: absolute;
  top: 50%;
  right: 0;
  content: "";
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.offcanvas-search-form
  .select2
  .selection
  .select2-selection
  .select2-selection__arrow {
  display: none;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .offcanvas-search-form input[type="text"],
  .offcanvas-search-form .select2 {
    font-size: 36px;
  }
  .offcanvas-search-form .select2 .selection .select2-selection {
    height: 59px !important;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .offcanvas-search-form input[type="text"],
  .offcanvas-search-form .select2 {
    font-size: 36px;
    width: 100%;
  }
  .offcanvas-search-form .select2 .selection .select2-selection {
    height: 59px !important;
  }
}
@media only screen and (max-width: 767px) {
  .offcanvas-search-form input[type="text"],
  .offcanvas-search-form .select2 {
    font-size: 30px;
    width: 100%;
  }
  .offcanvas-search-form .select2 .selection .select2-selection {
    height: 51px !important;
  }
}
@media only screen and (max-width: 575px) {
  .offcanvas-search-form input[type="text"],
  .offcanvas-search-form .select2 {
    font-size: 24px;
  }
  .offcanvas-search-form .select2 .selection .select2-selection {
    height: 42px !important;
  }
}
@media only screen and (max-width: 479px) {
  .offcanvas-search-form input[type="text"],
  .offcanvas-search-form .select2 {
    font-size: 20px;
  }
  .offcanvas-search-form .select2 .selection .select2-selection {
    height: 37px !important;
  }
}
.offcanvas-logo {
  margin-bottom: 50px;
}
.offcanvas-menu-search-form {
  margin-bottom: 30px;
}
.offcanvas-menu-search-form form {
  position: relative;
}
.offcanvas-menu-search-form form input[type="text"] {
  width: 100%;
  padding: 8px 20px;
  padding-right: 50px;
  color: #7e7e7e;
  border: 1px solid #eee;
}
.offcanvas-menu-search-form form button {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 5px 15px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.offcanvas-menu > ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.offcanvas-menu > ul > li {
  position: relative;
}
.offcanvas-menu > ul > li > a {
  display: block;
  padding: 8px 24px 8px 0;
  text-transform: uppercase;
  color: #7e7e7e;
}
.offcanvas-menu > ul > li > a:hover {
  color: #333;
}
.offcanvas-menu > ul > li .menu-expand {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  width: 24px;
  height: 44px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
}
.offcanvas-menu > ul > li .menu-expand::before,
.offcanvas-menu > ul > li .menu-expand::after {
  position: absolute;
  top: calc(50% - 1px);
  left: calc(50% - 7px);
  width: 14px;
  height: 2px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: scale(0.75);
  -ms-transform: scale(0.75);
  transform: scale(0.75);
  background-color: #7e7e7e;
}
.offcanvas-menu > ul > li .menu-expand::after {
  -webkit-transform: rotate(90deg) scale(0.75);
  -ms-transform: rotate(90deg) scale(0.75);
  transform: rotate(90deg) scale(0.75);
}
.offcanvas-menu > ul > li.active > .menu-expand::after {
  -webkit-transform: rotate(0) scale(0.75);
  -ms-transform: rotate(0) scale(0.75);
  transform: rotate(0) scale(0.75);
}
.offcanvas-menu > ul > li .sub-menu {
  position: static;
  top: auto;
  display: none;
  visibility: visible;
  width: 100%;
  min-width: auto;
  padding: 0;
  padding-left: 15px;
  -webkit-transition: none;
  transition: none;
  opacity: 1;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.offcanvas-menu > ul > li .sub-menu li {
  line-height: inherit;
  position: relative;
}
.offcanvas-menu > ul > li .sub-menu li > a {
  display: block;
  padding: 8px 24px 8px 0;
  color: #7e7e7e;
}
.offcanvas-menu > ul > li .sub-menu li > a:hover {
  color: #333;
}
.offcanvas-menu > ul > li .sub-menu li.active > .menu-expand::after {
  -webkit-transform: rotate(0) scale(0.75);
  -ms-transform: rotate(0) scale(0.75);
  transform: rotate(0) scale(0.75);
}
.offcanvas-buttons {
  margin-top: 30px;
}
.offcanvas-buttons:not(:last-child) {
  margin-bottom: 30px;
}
.offcanvas-social {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
.offcanvas-social a {
  line-height: 1;
  width: 48px;
  height: 48px;
  margin: 0 5px;
  padding: 0;
  text-align: center;
  color: #333;
  border-radius: 50%;
  background-color: #f4ede7;
}
.offcanvas-social a:hover {
  color: #fff;
  background-color: #333;
}
.offcanvas-social a:last-child {
  margin-right: 0;
}
.offcanvas-social a i {
  line-height: 48px;
}
.overlay-menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  margin: 0 -40px;
}
.overlay-menu > ul {
  font-size: 32px;
  overflow-x: auto;
  width: 100%;
  max-height: 100%;
  margin-bottom: 0;
  padding: 0 40px;
  list-style: none;
  text-align: center;
}
.overlay-menu > ul > li {
  position: relative;
}
.overlay-menu > ul > li + li {
  margin-top: 15px;
}
.overlay-menu > ul > li > a {
  font-family: "Futura";
  font-weight: 400;
  line-height: 1.75;
  text-transform: uppercase;
  color: #333;
}
.overlay-menu > ul .sub-menu {
  font-size: 75%;
  position: static;
  display: none;
  visibility: visible;
  padding-bottom: 0;
  -webkit-transition: none;
  transition: none;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0);
  -webkit-box-shadow: none;
  box-shadow: none;
}
.overlay-menu > ul .sub-menu > li + li {
  margin-top: 15px;
}
.overlay-menu > ul .sub-menu > li > a {
  font-family: "Futura";
  font-weight: 400;
  line-height: 1.75;
  text-transform: uppercase;
}
.overlay-menu > ul .sub-menu .sub-menu {
  font-size: 70%;
}
@media only screen and (max-width: 575px) {
  .overlay-menu {
    margin: 0 -30px;
  }
  .overlay-menu > ul {
    padding: 0 30px;
  }
}
@media only screen and (max-width: 479px) {
  .overlay-menu {
    margin: 0 -20px;
  }
  .overlay-menu > ul {
    padding: 0 20px;
  }
}
.header2-search form {
  position: relative;
}
.header2-search form input[type="text"] {
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  height: 40px;
  margin: 0;
  padding-right: 10px;
  padding-left: 30px;
  color: #333;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.header2-search form input[type="text"]::-webkit-input-placeholder {
  letter-spacing: 0.5px;
  color: #ababab;
}
.header2-search form input[type="text"]:-moz-placeholder {
  letter-spacing: 0.5px;
  color: #ababab;
}
.header2-search form input[type="text"]::-moz-placeholder {
  letter-spacing: 0.5px;
  color: #ababab;
}
.header2-search form input[type="text"]:-ms-input-placeholder {
  letter-spacing: 0.5px;
  color: #ababab;
}
.header2-search form .btn {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 30px;
  height: 40px;
  padding: 0;
  text-align: center;
  color: #ababab;
}
.header2-search form .btn i {
  line-height: 40px;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .header2-search form input[type="text"] {
    width: 135px;
  }
}
.header6-search {
  width: 100%;
  max-width: 650px;
  margin: auto;
}
.header6-search form {
  position: relative;
}
.header6-search form .select2 {
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  width: 170px !important;
  padding: 7px 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
  border: 0;
}
.header6-search form .select2 .selection .select2-selection {
  height: auto;
  padding: 5px 0;
  border: none !important;
  border-radius: 0;
  background-color: #fff;
}
.header6-search
  form
  .select2
  .selection
  .select2-selection
  .select2-selection__rendered {
  font-weight: 500;
  line-height: inherit;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  padding-left: 0;
  opacity: 0.8;
}
.header6-search
  form
  .select2
  .selection
  .select2-selection
  .select2-selection__rendered::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 700;
  position: absolute;
  top: 50%;
  right: 5px;
  content: "";
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.header6-search
  form
  .select2
  .selection
  .select2-selection
  .select2-selection__arrow {
  display: none;
}
.header6-search form input[type="text"] {
  font-size: 16px;
  line-height: 26px;
  width: 100%;
  padding: 10px 20px;
  color: dimgray;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #ededed;
}
.header6-search form button {
  width: 30px;
  margin-left: -30px;
  padding: 0;
  text-align: center;
  color: #333;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.header-categories {
  position: absolute;
  top: 0;
  left: 15px;
}
.header-categories .category-toggle {
  font-family: "Futura";
  line-height: 30px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 15px 35px;
  padding-right: 70px;
  letter-spacing: 0.1px;
  color: #fff;
  border: 0;
  background-color: #333;
}
.header-categories .category-toggle i {
  line-height: 1;
  margin-right: 10px;
}
.header-categories .category-toggle::after {
  font-family: "Font Awesome 5 Free";
  font-weight: 700;
  line-height: 12px;
  position: absolute;
  top: 50%;
  right: 30px;
  width: 12px;
  margin-top: -6px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.header-categories .category-toggle.active::after {
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
}
.header-categories + .site-main-menu {
  padding: 0 200px 0 270px;
}
.header-category-list {
  display: none;
  width: 100%;
  margin: 0;
  padding-left: 0;
  list-style: none;
  background-color: #72a499;
}
.header-category-list li {
  padding: 0 35px;
  border-bottom: 1px solid #72a499;
}
.header-category-list li a {
  font-size: 16px;
  font-weight: 400;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: -1px;
  padding: 15px 0;
  color: #fff;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
}
.header-category-list li a img {
  margin-right: 20px;
}
.header-category-list li:last-child {
  border-bottom: 0;
}
.header-category-list li:last-child a {
  border: 0;
}
.header-category-list li:hover {
  background-color: #63998d;
}
.home1-slider {
  width: 100%;
  height: 750px;
}
.home1-slider:hover [class*="swiper-button"] {
  opacity: 1;
}
.home1-slider:hover [class*="swiper-button"]:hover i {
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
}
@media only screen and (max-width: 767px) {
  .home1-slider {
    height: 550px;
  }
}
@media only screen and (max-width: 575px) {
  .home1-slider {
    height: 500px;
  }
}
@media only screen and (max-width: 479px) {
  .home1-slider {
    height: 450px;
  }
}
.home1-slide-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.home1-slide1-content {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 466px;
  height: 466px;
  padding: 25px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
}
.home1-slide1-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home1-slide1-content .bg {
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0.85);
  -ms-transform: scale(0.85);
  transform: scale(0.85);
  border-radius: 50%;
  background-color: #fff;
}
.home1-slide1-content .slide-border {
  position: absolute;
  z-index: -1;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  border: 1px dashed #72a499;
  border-radius: 50%;
}
.home1-slide1-content .icon {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 15px;
  -webkit-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  transform: translateY(-30px);
}
.home1-slide1-content .title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 11px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  color: #333;
}
.home1-slide1-content .sub-title {
  font-size: 34px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 28px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  color: #72a499;
}
.home1-slide1-content .link {
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home1-slide1-content .link a {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 2px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid #333;
}
.home1-slide1-content .link a:hover {
  color: #72a499;
  border-color: #72a499;
}
@media only screen and (max-width: 767px) {
  .home1-slide1-content {
    width: 400px;
    height: 400px;
  }
  .home1-slide1-content .icon img {
    height: 100px;
  }
  .home1-slide1-content .title {
    font-size: 54px;
  }
  .home1-slide1-content .sub-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .home1-slide1-content .link a {
    font-size: 14px;
  }
}
@media only screen and (max-width: 575px) {
  .home1-slide1-content {
    width: 350px;
    height: 350px;
  }
  .home1-slide1-content .icon img {
    height: 80px;
  }
  .home1-slide1-content .title {
    font-size: 48px;
  }
  .home1-slide1-content .sub-title {
    font-size: 20px;
  }
}
@media only screen and (max-width: 479px) {
  .home1-slide1-content {
    width: 300px;
    height: 300px;
  }
  .home1-slide1-content .icon img {
    height: 60px;
  }
  .home1-slide1-content .title {
    font-size: 40px;
  }
  .home1-slide1-content .sub-title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .home1-slide1-content .link a {
    font-size: 12px;
  }
}
.home1-slide2-content {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 466px;
  height: 466px;
  padding: 25px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
}
.home1-slide2-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home1-slide2-content .bg {
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0.85);
  -ms-transform: scale(0.85);
  transform: scale(0.85);
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
}
.home1-slide2-content .slide-border {
  position: absolute;
  z-index: -1;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  border: 3px solid #e1d8d0;
  border-radius: 50%;
}
.home1-slide2-content .icon {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 25px;
  -webkit-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  transform: translateY(-30px);
}
.home1-slide2-content .icon img:last-child:not(:first-child) {
  margin-left: 15px;
}
.home1-slide2-content .title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 11px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  color: #baa491;
}
.home1-slide2-content .sub-title {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 25px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  text-align: center;
  color: #333;
}
.home1-slide2-content .link {
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home1-slide2-content .link a {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 2px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid #333;
}
.home1-slide2-content .link a:hover {
  color: #72a499;
  border-color: #72a499;
}
@media only screen and (max-width: 767px) {
  .home1-slide2-content {
    width: 400px;
    height: 400px;
  }
  .home1-slide2-content .title {
    font-size: 54px;
    margin-bottom: 20px;
  }
  .home1-slide2-content .sub-title {
    font-size: 28px;
    margin-bottom: 20px;
  }
  .home1-slide2-content .link a {
    font-size: 14px;
  }
}
@media only screen and (max-width: 575px) {
  .home1-slide2-content {
    width: 350px;
    height: 350px;
  }
  .home1-slide2-content .title {
    font-size: 48px;
  }
  .home1-slide2-content .sub-title {
    font-size: 24px;
  }
}
@media only screen and (max-width: 479px) {
  .home1-slide2-content {
    width: 300px;
    height: 300px;
  }
  .home1-slide2-content .icon {
    margin-bottom: 15px;
  }
  .home1-slide2-content .title {
    font-size: 40px;
  }
  .home1-slide2-content .sub-title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .home1-slide2-content .link a {
    font-size: 12px;
  }
}
.home1-slide3-content {
  max-width: calc(100% - 20px);
  margin-top: 80px;
  text-align: center;
}
.home1-slide3-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home1-slide3-content .title {
  font-family: "Modesty";
  font-size: 76px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 20px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  color: #baa491;
}
.home1-slide3-content .sub-title {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.1;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 35px;
  padding: 0 80px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  text-align: center;
  color: #000;
}
.home1-slide3-content .sub-title img {
  position: absolute;
  top: 50%;
  margin-top: -12px;
  opacity: 0;
}
.home1-slide3-content .sub-title img.left-icon {
  left: 0;
  -webkit-transform: translateX(30px);
  -ms-transform: translateX(30px);
  transform: translateX(30px);
}
.home1-slide3-content .sub-title img.right-icon {
  right: 0;
  -webkit-transform: translateX(-30px);
  -ms-transform: translateX(-30px);
  transform: translateX(-30px);
}
.home1-slide3-content .link {
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home1-slide3-content .link a {
  font-family: "Marcellus";
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  z-index: 9;
  padding: 0 45px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  background-image: url("../images/slider/home1/slide-3-3.webp");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
@media only screen and (max-width: 767px) {
  .home1-slide3-content {
    margin-top: 60px;
  }
  .home1-slide3-content .title {
    font-size: 70px;
    margin-bottom: 20px;
  }
  .home1-slide3-content .sub-title {
    font-size: 36px;
    margin-bottom: 25px;
  }
  .home1-slide3-content .link a {
    font-size: 14px;
  }
}
@media only screen and (max-width: 575px) {
  .home1-slide3-content {
    margin-top: 60px;
  }
  .home1-slide3-content .title {
    font-size: 54px;
  }
  .home1-slide3-content .sub-title {
    font-size: 30px;
    margin-bottom: 20px;
    padding: 0 50px;
  }
  .home1-slide3-content .sub-title img {
    height: 16px;
    margin-top: -8px;
  }
}
@media only screen and (max-width: 479px) {
  .home1-slide3-content .title {
    font-size: 40px;
  }
  .home1-slide3-content .sub-title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .home1-slide3-content .link a {
    font-size: 12px;
  }
}
.swiper-slide-active .home1-slide1-content > * {
  opacity: 1;
}
.swiper-slide-active .home1-slide1-content .bg {
  -webkit-transition-delay: 0.75s;
  transition-delay: 0.75s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-slide-active .home1-slide1-content .slide-border {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-slide-active .home1-slide1-content .icon {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide1-content .title {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide1-content .sub-title {
  -webkit-transition-delay: 1.5s;
  transition-delay: 1.5s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide1-content .link {
  -webkit-transition-delay: 1.7s;
  transition-delay: 1.7s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide2-content > * {
  opacity: 1;
}
.swiper-slide-active .home1-slide2-content .bg {
  -webkit-transition-delay: 0.75s;
  transition-delay: 0.75s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-slide-active .home1-slide2-content .slide-border {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-slide-active .home1-slide2-content .icon {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide2-content .title {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide2-content .sub-title {
  -webkit-transition-delay: 1.5s;
  transition-delay: 1.5s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide2-content .link {
  -webkit-transition-delay: 1.7s;
  transition-delay: 1.7s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide3-content > * {
  opacity: 1;
}
.swiper-slide-active .home1-slide3-content .title {
  -webkit-transition-delay: 0.75s;
  transition-delay: 0.75s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide3-content .sub-title {
  -webkit-transition-delay: 0.95s;
  transition-delay: 0.95s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home1-slide3-content .sub-title img {
  -webkit-transition-delay: 1.5s;
  transition-delay: 1.5s;
  opacity: 1;
}
.swiper-slide-active .home1-slide3-content .sub-title img.left-icon {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home1-slide3-content .sub-title img.right-icon {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home1-slide3-content .link {
  -webkit-transition-delay: 1.15s;
  transition-delay: 1.15s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.home2-slider {
  width: 100%;
  height: 770px;
}
.home2-slider [class*="swiper-button"]:hover i {
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
}
.home2-slider:hover [class*="swiper-button"] {
  opacity: 1;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .home2-slider {
    height: 550px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home2-slider {
    height: 450px;
  }
}
@media only screen and (max-width: 575px) {
  .home2-slider {
    height: 650px;
  }
}
.home2-slide-item .slide-pointer {
  overflow: hidden;
  width: 40px;
  height: 40px;
  padding: 0;
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  text-align: center;
  opacity: 0;
  color: #fff;
  border: 0;
  border-radius: 50%;
  background-color: #da0e2b;
}
.home2-slide-item .slide-pointer span {
  font-size: 40px;
  line-height: 1;
  display: block;
  margin-top: -5px;
}
.home2-slide-item .slide-product {
  position: absolute;
  display: none;
  width: 300px;
  padding: 40px;
  background-color: #fff;
}
.home2-slide-item .slide-product .image {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 240px;
  margin-bottom: 20px;
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home2-slide-item .slide-product .image img {
  max-width: 100%;
  max-height: 100%;
}
.home2-slide-item .slide-product .title {
  font-family: "Futura";
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  color: #333;
}
.home2-slide-item .slide-product .price {
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  color: #333;
}
.home2-slide-item .slide-product.active {
  display: block;
}
.home2-slide-item .slide-product.active .image {
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
@media only screen and (min-width: 1200px) and (max-width: 1499px),
  only screen and (min-width: 992px) and (max-width: 1199px) {
  .home2-slide-item .slide-pointer {
    width: 30px;
    height: 30px;
  }
  .home2-slide-item .slide-pointer span {
    font-size: 36px;
    margin-top: -5px;
  }
  .home2-slide-item .slide-product {
    width: 180px;
    padding: 30px;
  }
  .home2-slide-item .slide-product .image {
    height: 140px;
    margin-bottom: 20px;
  }
  .home2-slide-item .slide-product .title {
    font-size: 16px;
  }
  .home2-slide-item .slide-product .price {
    font-size: 14px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home2-slide-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }
  .home2-slide-item .slide-product {
    width: 180px;
    padding: 30px;
  }
  .home2-slide-item .slide-product .image {
    height: 140px;
    margin-bottom: 20px;
  }
  .home2-slide-item .slide-product .title {
    font-size: 16px;
  }
  .home2-slide-item .slide-product .price {
    font-size: 14px;
  }
}
@media only screen and (max-width: 575px) {
  .home2-slide-item .slide-pointer {
    display: none;
  }
}
.home2-slide1-image {
  position: absolute;
  z-index: 9;
  top: 10%;
  right: 15%;
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .home2-slide1-image {
    max-width: 500px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home2-slide1-image {
    max-width: 400px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home2-slide1-image {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    display: inline-block;
    max-width: 600px;
    margin: 0 auto;
  }
}
.home2-slide1-product1 {
  position: absolute;
  top: 10%;
  right: 22%;
}
.home2-slide1-product1 .slide-product {
  top: 0;
  left: 100%;
  margin-left: 20px;
  -webkit-transform: translateY(-20%);
  -ms-transform: translateY(-20%);
  transform: translateY(-20%);
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home2-slide1-product1 .slide-product {
    right: 100%;
    left: auto;
    margin-right: 20px;
    margin-left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .home2-slide1-product1 .slide-product {
    right: 100%;
    left: auto;
    margin-right: 20px;
    margin-left: 0;
  }
}
.home2-slide2-image {
  position: absolute;
  z-index: 9;
  top: 14%;
  right: 9%;
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .home2-slide2-image {
    max-width: 700px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home2-slide2-image {
    max-width: 550px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home2-slide2-image {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    display: inline-block;
    max-width: 600px;
    margin: 0 auto 20px;
  }
}
.home2-slide2-product1 {
  position: absolute;
  bottom: 27%;
  left: 7%;
}
.home2-slide2-product1 .slide-product {
  right: 100%;
  bottom: 100%;
  margin-right: 30px;
  -webkit-transform: translateY(15%);
  -ms-transform: translateY(15%);
  transform: translateY(15%);
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home2-slide2-product1 .slide-product {
    right: auto;
    left: 100%;
    margin-right: 0;
    margin-left: 20px;
    -webkit-transform: translateY(50%);
    -ms-transform: translateY(50%);
    transform: translateY(50%);
  }
}
.home2-slide2-product2 {
  position: absolute;
  top: 30%;
  left: 51%;
}
.home2-slide2-product2 .slide-product {
  top: 50%;
  left: 100%;
  margin-left: 30px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home2-slide2-product2 .slide-product {
    margin-left: 20px;
  }
}
.home2-slide3-image {
  position: absolute;
  z-index: 9;
  right: 30%;
  bottom: 0;
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .home2-slide3-image {
    right: 25%;
    max-width: 450px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home2-slide3-image {
    right: 20%;
    max-width: 350px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home2-slide3-image {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    display: inline-block;
    max-width: 300px;
    margin: 0 auto 20px;
  }
}
.home2-slide3-product1 {
  position: absolute;
  bottom: 55%;
  left: 5%;
}
.home2-slide3-product1 .slide-product {
  top: 50%;
  right: 100%;
  margin-right: 20px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
@media only screen and (max-width: 767px) {
  .home2-slide3-product1 .slide-product {
    right: auto;
    left: 100%;
    margin-right: auto;
    margin-left: 20px;
  }
}
.home2-slide3-product2 {
  position: absolute;
  right: 3%;
  bottom: 28%;
}
.home2-slide3-product2 .slide-product {
  bottom: 100%;
  left: 100%;
  margin-left: 20px;
  -webkit-transform: translateY(15%);
  -ms-transform: translateY(15%);
  transform: translateY(15%);
}
@media only screen and (max-width: 767px) {
  .home2-slide3-product2 .slide-product {
    right: 100%;
    left: auto;
    margin-right: 20px;
    margin-left: auto;
  }
}
.home2-slide-content {
  position: absolute;
  z-index: 99;
  bottom: 18%;
  left: 8%;
}
.home2-slide-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home2-slide-content .sub-title {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 30px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  letter-spacing: 5px;
  color: #333;
}
.home2-slide-content .title {
  font-size: 56px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 20px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  color: #333;
}
.home2-slide-content .link {
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home2-slide-content .link a {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 2px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid #333;
}
.home2-slide-content .link a:hover {
  color: #72a499;
  border-color: #72a499;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home2-slide-content .sub-title {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .home2-slide-content .title {
    font-size: 36px;
  }
  .home2-slide-content .link a {
    font-size: 14px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home2-slide-content {
    position: static;
    width: 100%;
    text-align: center;
  }
}
@media only screen and (max-width: 767px) {
  .home2-slide-content .sub-title {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .home2-slide-content .title {
    font-size: 44px;
  }
  .home2-slide-content .link a {
    font-size: 14px;
  }
}
@media only screen and (max-width: 575px) {
  .home2-slide-content .title {
    font-size: 36px;
  }
}
@media only screen and (max-width: 479px) {
  .home2-slide-content .sub-title {
    font-size: 14px;
  }
  .home2-slide-content .title {
    font-size: 30px;
  }
  .home2-slide-content .link a {
    font-size: 12px;
  }
}
.home2-slide-pages {
  font-size: 56px;
  font-weight: 400;
  line-height: 1;
  position: absolute;
  right: 4%;
  bottom: 15%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.home2-slide-pages > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home2-slide-pages .current {
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(40px);
  transform: translateX(40px);
  color: #333;
}
.home2-slide-pages .border {
  display: block;
  width: 80px;
  height: 2px;
  margin: 5px 15px 0;
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(40px);
  transform: translateX(40px);
  border: none !important;
  background-color: #333;
}
.home2-slide-pages .total {
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(40px);
  transform: translateX(40px);
  color: rgba(126, 126, 126, 0.5);
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home2-slide-pages {
    font-size: 44px;
  }
  .home2-slide-pages .border {
    width: 50px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home2-slide-pages {
    display: none;
  }
}
.swiper-slide-active .home2-slide1-image,
.swiper-slide-active .home2-slide2-image,
.swiper-slide-active .home2-slide3-image {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
.swiper-slide-active .slide-pointer {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
  opacity: 1;
}
.swiper-slide-active .home2-slide-content > * {
  opacity: 1;
}
.swiper-slide-active .home2-slide-content .sub-title {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home2-slide-content .title {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home2-slide-content .link {
  -webkit-transition-delay: 1.6s;
  transition-delay: 1.6s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home2-slide-pages > * {
  opacity: 1;
}
.swiper-slide-active .home2-slide-pages .current {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home2-slide-pages .border {
  -webkit-transition-delay: 1.2s;
  transition-delay: 1.2s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home2-slide-pages .total {
  -webkit-transition-delay: 1.4s;
  transition-delay: 1.4s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.home3-slider {
  height: 600px;
}
.home3-slider [class*="swiper-button"] {
  top: auto;
  top: auto;
  bottom: 0;
  left: auto;
  width: 80px;
  height: 80px;
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
  opacity: 1;
  color: #7e7e7e;
  background-color: #fff;
}
.home3-slider [class*="swiper-button"] i {
  font-size: 18px;
}
.home3-slider [class*="swiper-button"]:hover {
  color: #333;
  background-color: #f5ede6;
}
.home3-slider .swiper-button-prev {
  right: 80px;
}
.home3-slider .swiper-button-next {
  right: 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home3-slider {
    height: 450px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home3-slider {
    height: 350px;
  }
  .home3-slider [class*="swiper-button"] {
    width: 60px;
    height: 60px;
  }
  .home3-slider .swiper-button-prev {
    right: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .home3-slider {
    height: 300px;
  }
  .home3-slider [class*="swiper-button"] {
    width: 50px;
    height: 50px;
  }
  .home3-slider [class*="swiper-button"]::after {
    font-size: 14px;
  }
  .home3-slider .swiper-button-prev {
    right: 50px;
  }
}
@media only screen and (max-width: 575px) {
  .home3-slider {
    height: 250px;
  }
  .home3-slider [class*="swiper-button"] {
    width: 40px;
    height: 40px;
  }
  .home3-slider .swiper-button-prev {
    right: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .home3-slider {
    height: 200px;
  }
  .home3-slider [class*="swiper-button"] {
    width: 30px;
    height: 30px;
  }
  .home3-slider .swiper-button-prev {
    right: 30px;
  }
}
.home3-slide-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.home3-slide-content {
  display: inline-block;
  text-align: center;
}
.home3-slide-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home3-slide-content > *:last-child {
  margin-bottom: 0;
}
.home3-slide-content .sub-title {
  font-family: "Modesty";
  font-size: 52px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 24px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  color: #72a499;
}
.home3-slide-content .title {
  font-size: 52px;
  font-weight: 400;
  line-height: 1.55;
  margin-bottom: 18px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home3-slide-content .link {
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home3-slide-content .sub-title {
    font-size: 44px;
    margin-bottom: 20px;
  }
  .home3-slide-content .title {
    font-size: 40px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home3-slide-content .sub-title {
    font-size: 36px;
    margin-bottom: 15px;
  }
  .home3-slide-content .title {
    font-size: 30px;
  }
  .home3-slide-content .link .btn {
    padding: 10px 30px;
  }
}
@media only screen and (max-width: 767px) {
  .home3-slide-content .sub-title {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .home3-slide-content .title {
    font-size: 24px;
  }
  .home3-slide-content .link .btn {
    font-size: 14px;
    padding: 8px 25px;
  }
}
@media only screen and (max-width: 479px) {
  .home3-slide-content .sub-title {
    font-size: 24px;
    margin-bottom: 5px;
  }
  .home3-slide-content .title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .home3-slide-content .link .btn {
    font-size: 12px;
    padding: 3px 20px;
  }
}
.swiper-slide-active .home3-slide-content > * {
  opacity: 1;
}
.swiper-slide-active .home3-slide-content .sub-title {
  -webkit-transition-delay: 0.75s;
  transition-delay: 0.75s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home3-slide-content .title {
  -webkit-transition-delay: 0.95s;
  transition-delay: 0.95s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home3-slide-content .link {
  -webkit-transition-delay: 1.15s;
  transition-delay: 1.15s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.home4-slider {
  overflow: visible;
}
.home4-slider [class*="swiper-button"] {
  color: #e7e7e7;
}
.home4-slider [class*="swiper-button"] i {
  font-size: 40px;
}
.home4-slider [class*="swiper-button"]:hover {
  color: #333;
}
.home4-slider .swiper-button-prev {
  left: -120px;
}
.home4-slider .swiper-button-next {
  right: -120px;
}
.home4-slider:hover [class*="swiper-button"] {
  opacity: 1;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home4-slider {
    overflow: hidden;
  }
  .home4-slider [class*="swiper-button"] {
    color: #7e7e7e;
  }
  .home4-slider [class*="swiper-button"] i {
    font-size: 30px;
  }
  .home4-slider .swiper-button-prev {
    left: -40px;
  }
  .home4-slider .swiper-button-next {
    right: -40px;
  }
  .home4-slider:hover .swiper-button-prev {
    left: 0;
  }
  .home4-slider:hover .swiper-button-next {
    right: 0;
  }
  .home4-slider .swiper-pagination {
    margin-top: 30px;
  }
}
@media only screen and (max-width: 575px) {
  .home4-slider .swiper-pagination {
    margin-top: 20px;
  }
}
.home4-slide-content {
  position: absolute;
  top: 50%;
  left: 70px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.home4-slide-content .category {
  font-family: "Futura";
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  display: block;
  margin-bottom: 35px;
  letter-spacing: 3px;
}
.home4-slide-content .title {
  font-size: 48px;
  font-weight: 400;
  line-height: 1.35;
  margin-bottom: 36px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home4-slide-content {
    left: 50px;
  }
  .home4-slide-content .category {
    margin-bottom: 25px;
  }
  .home4-slide-content .title {
    font-size: 40px;
    margin-bottom: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home4-slide-content {
    left: 40px;
  }
  .home4-slide-content .category {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .home4-slide-content .title {
    font-size: 32px;
    margin-bottom: 25px;
  }
  .home4-slide-content .link .btn {
    padding: 10px 30px;
  }
}
@media only screen and (max-width: 767px) {
  .home4-slide-content {
    left: 30px;
  }
  .home4-slide-content .category {
    font-size: 12px;
    margin-bottom: 15px;
  }
  .home4-slide-content .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .home4-slide-content .link .btn {
    font-size: 14px;
    padding: 8px 20px;
  }
}
@media only screen and (max-width: 479px) {
  .home4-slide-content {
    left: 20px;
  }
  .home4-slide-content .category {
    font-size: 10px;
    margin-bottom: 10px;
  }
  .home4-slide-content .title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .home4-slide-content .link .btn {
    font-size: 12px;
    padding: 3px 15px;
  }
}
.home5-slider {
  position: relative;
  height: 720px;
}
.home5-slider .swiper-container {
  height: 100%;
}
.home5-slider .swiper-pagination {
  position: absolute;
  bottom: 40px;
  left: 40px;
}
@media only screen and (max-width: 767px) {
  .home5-slider {
    height: 700px;
  }
  .home5-slider .swiper-pagination {
    bottom: 25px;
    left: 30px;
  }
}
.home5-slide-item {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0 150px;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#f4f3ec),
    color-stop(60%, #f4f3ec),
    color-stop(60%, #fff),
    to(#fff)
  );
  background-image: -webkit-linear-gradient(
    left,
    #f4f3ec 0,
    #f4f3ec 60%,
    #fff 60%,
    #fff 100%
  );
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #f4f3ec),
    color-stop(60%, #f4f3ec),
    color-stop(60%, #fff),
    to(#fff)
  );
  background-image: linear-gradient(
    to right,
    #f4f3ec 0,
    #f4f3ec 60%,
    #fff 60%,
    #fff 100%
  );
}
@media only screen and (min-width: 1200px) and (max-width: 1499px),
  only screen and (min-width: 992px) and (max-width: 1199px) {
  .home5-slide-item {
    padding: 0 100px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home5-slide-item {
    padding: 0 50px;
    background-color: #f4f3ec;
    background-image: none;
  }
}
.home5-slide1-image {
  -webkit-animation: homr5image 5s linear infinite alternate both;
  animation: homr5image 5s linear infinite alternate both;
  text-align: center;
}
@media only screen and (max-width: 767px) {
  .home5-slide1-image {
    max-width: 300px;
    margin: 0 auto;
  }
}
.home5-slide1-content {
  text-align: center;
}
.home5-slide1-content .sub-title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 400;
  line-height: 1;
  display: block;
  margin-bottom: 20px;
  color: #454545;
}
.home5-slide1-content .sub-title::before {
  padding-right: 20px;
  content: url("../images/title/title-decor-left.webp");
  -webkit-filter: grayscale(100);
  filter: grayscale(100);
}
.home5-slide1-content .sub-title::after {
  padding-left: 20px;
  content: url("../images/title/title-decor-right.webp");
  -webkit-filter: grayscale(100);
  filter: grayscale(100);
}
.home5-slide1-content .title {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 0;
}
@media only screen and (max-width: 767px) {
  .home5-slide1-content .sub-title {
    font-size: 50px;
    margin-bottom: 10px;
  }
}
@media only screen and (max-width: 575px) {
  .home5-slide1-content .sub-title::before,
  .home5-slide1-content .sub-title::after {
    display: none;
  }
}
@media only screen and (max-width: 479px) {
  .home5-slide1-content .sub-title {
    font-size: 40px;
  }
}
.home5-slide2-image {
  -webkit-animation: homr5image 5s linear infinite alternate both;
  animation: homr5image 5s linear infinite alternate both;
  text-align: center;
}
@media only screen and (max-width: 767px) {
  .home5-slide2-image {
    max-width: 300px;
    margin: 0 auto;
  }
}
.home5-slide2-content {
  text-align: center;
}
.home5-slide2-content .sub-title {
  font-family: "Modesty";
  font-size: 120px;
  font-weight: 400;
  line-height: 1;
  display: block;
  margin: 0;
  color: #454545;
}
.home5-slide2-content .sub-title::before {
  padding-right: 10px;
  content: url("../images/title/title-decor-left.webp");
  -webkit-filter: grayscale(100);
  filter: grayscale(100);
}
.home5-slide2-content .sub-title::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
  -webkit-filter: grayscale(100);
  filter: grayscale(100);
}
.home5-slide2-content .title {
  font-size: 64px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 30px;
}
.home5-slide2-content .btn {
  color: #333;
  background-color: #fff;
}
.home5-slide2-content .btn:hover {
  color: #fff;
  background-color: #333;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px),
  only screen and (min-width: 992px) and (max-width: 1199px) {
  .home5-slide2-content .sub-title {
    font-size: 90px;
  }
  .home5-slide2-content .title {
    font-size: 50px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home5-slide2-content .sub-title {
    font-size: 50px;
    margin-bottom: 10px;
  }
  .home5-slide2-content .title {
    font-size: 34px;
  }
  .home5-slide2-content .btn {
    padding: 10px 30px;
  }
}
@media only screen and (max-width: 767px) {
  .home5-slide2-content .sub-title {
    font-size: 80px;
    margin-bottom: 10px;
  }
  .home5-slide2-content .title {
    font-size: 40px;
  }
  .home5-slide2-content .btn {
    padding: 10px 30px;
  }
}
@media only screen and (max-width: 575px) {
  .home5-slide2-content .sub-title::before,
  .home5-slide2-content .sub-title::after {
    display: none;
  }
}
@media only screen and (max-width: 479px) {
  .home5-slide2-content .sub-title {
    font-size: 40px;
  }
  .home5-slide2-content .title {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .home5-slide2-content .btn {
    font-size: 14px;
    padding: 8px 20px;
  }
}
.home5-slide3-image {
  -webkit-animation: homr5image 5s linear infinite alternate both;
  animation: homr5image 5s linear infinite alternate both;
  text-align: center;
}
@media only screen and (max-width: 767px) {
  .home5-slide3-image {
    max-width: 90%;
    margin: 0 auto;
  }
}
.home5-slide3-content {
  text-align: center;
}
.home5-slide3-content .sub-title {
  font-family: "Modesty";
  font-size: 70px;
  font-weight: 400;
  line-height: 1;
  display: block;
  margin-bottom: 20px;
  color: #454545;
}
.home5-slide3-content .title {
  font-family: "Futura";
  font-size: 60px;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0;
  letter-spacing: 14px;
  text-transform: uppercase;
  color: #baa491;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home5-slide3-content .title {
    font-size: 50px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home5-slide3-content .sub-title {
    font-size: 55px;
  }
  .home5-slide3-content .title {
    font-size: 40px;
  }
}
@media only screen and (max-width: 575px) {
  .home5-slide3-content .sub-title {
    font-size: 45px;
  }
  .home5-slide3-content .title {
    font-size: 30px;
  }
}
@media only screen and (max-width: 479px) {
  .home5-slide3-content .sub-title {
    font-size: 40px;
  }
  .home5-slide3-content .title {
    font-size: 24px;
    letter-spacing: 5px;
  }
}
.home5-slide-collection,
.home5-slide-sale {
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 60px;
  width: auto;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  letter-spacing: 5px;
  color: #333;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px),
  only screen and (min-width: 992px) and (max-width: 1199px) {
  .home5-slide-collection,
  .home5-slide-sale {
    left: 40px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home5-slide-collection,
  .home5-slide-sale {
    font-size: 14px;
    left: 20px;
  }
}
@media only screen and (max-width: 479px) {
  .home5-slide-collection,
  .home5-slide-sale {
    font-size: 12px;
    left: 10px;
  }
}
.home5-slide-sale {
  right: 60px;
  left: auto;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px),
  only screen and (min-width: 992px) and (max-width: 1199px) {
  .home5-slide-sale {
    right: 40px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home5-slide-sale {
    right: 20px;
  }
}
@media only screen and (max-width: 479px) {
  .home5-slide-sale {
    right: 10px;
  }
}
.home5-slide-shop-link {
  position: absolute;
  right: 50px;
  bottom: 40px;
  width: auto;
}
.home5-slide-shop-link::before {
  position: absolute;
  top: 50%;
  right: calc(100% + 15px);
  width: 60px;
  height: 2px;
  content: "";
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #333;
}
.home5-slide-shop-link a {
  font-weight: 400;
  color: #333;
}
.home5-slide-shop-link a:hover {
  color: #72a499;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px),
  only screen and (min-width: 992px) and (max-width: 1199px) {
  .home5-slide-shop-link {
    right: 40px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home5-slide-shop-link {
    right: 30px;
    bottom: 30px;
  }
}
@media only screen and (max-width: 479px) {
  .home5-slide-shop-link {
    right: 20px;
    bottom: 20px;
  }
  .home5-slide-shop-link::before {
    display: none;
  }
  .home5-slide-shop-link a {
    font-size: 14px;
  }
}
@-webkit-keyframes homr5image {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
@keyframes homr5image {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
.home6-slide-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 90vh;
  padding: 60px 0;
}
.home6-slide1-content {
  text-align: center;
}
.home6-slide1-content .sub-title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 400;
  line-height: 1.375;
  color: #fff;
}
.home6-slide1-content .title {
  font-size: 64px;
  font-weight: 400;
  line-height: 1.25;
  color: #fff;
}
.home6-slide1-content .title:not(:last-child) {
  margin-bottom: 50px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px) {
  .home6-slide1-content .sub-title {
    font-size: 70px;
  }
  .home6-slide1-content .title {
    font-size: 56px;
  }
}
@media only screen and (max-width: 767px) {
  .home6-slide1-content .sub-title {
    font-size: 50px;
  }
  .home6-slide1-content .title {
    font-size: 40px;
  }
  .home6-slide1-content .title:not(:last-child) {
    margin-bottom: 30px;
  }
  .home6-slide1-content .link .btn {
    padding: 10px 30px;
  }
}
@media only screen and (max-width: 575px) {
  .home6-slide1-content .sub-title {
    font-size: 40px;
  }
  .home6-slide1-content .title {
    font-size: 36px;
  }
  .home6-slide1-content .title:not(:last-child) {
    margin-bottom: 25px;
  }
}
@media only screen and (max-width: 479px) {
  .home6-slide1-content .sub-title {
    font-size: 30px;
  }
  .home6-slide1-content .title {
    font-size: 30px;
  }
  .home6-slide1-content .title:not(:last-child) {
    margin-bottom: 20px;
  }
  .home6-slide1-content .link .btn {
    font-size: 14px;
    padding: 8px 25px;
  }
}
.home7-slider {
  height: 850px;
}
.home7-slider [class*="swiper-button"]:hover i {
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
}
.home7-slider:hover [class*="swiper-button"] {
  opacity: 1;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home7-slider {
    height: 650px;
  }
}
@media only screen and (max-width: 767px) {
  .home7-slider {
    height: 550px;
  }
}
@media only screen and (max-width: 575px) {
  .home7-slider {
    height: 500px;
  }
}
@media only screen and (max-width: 479px) {
  .home7-slider {
    height: 450px;
  }
}
.home7-slide-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.home7-slide1-content {
  z-index: 1;
  overflow: hidden;
  text-align: center;
}
.home7-slide1-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home7-slide1-content .name {
  font-family: "Modesty";
  font-size: 120px;
  line-height: 1.2;
  display: block;
  margin-bottom: -30px;
  -webkit-transform: scale(0.85);
  -ms-transform: scale(0.85);
  transform: scale(0.85);
  color: #454545;
}
.home7-slide1-content .title {
  font-family: "Futura";
  font-size: 55px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 11px;
  -webkit-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  transform: translateY(-30px);
  letter-spacing: 20px;
  text-transform: uppercase;
  color: #baa491;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home7-slide1-content .name {
    font-size: 90px;
  }
  .home7-slide1-content .title {
    font-size: 44px;
    letter-spacing: 15px;
  }
}
@media only screen and (max-width: 767px) {
  .home7-slide1-content .name {
    font-size: 70px;
    margin-bottom: -15px;
  }
  .home7-slide1-content .title {
    font-size: 36px;
    letter-spacing: 10px;
  }
}
@media only screen and (max-width: 575px) {
  .home7-slide1-content .name {
    font-size: 50px;
    margin-bottom: 0;
  }
  .home7-slide1-content .title {
    font-size: 30px;
    letter-spacing: 5px;
  }
}
.home7-slide1-image {
  position: relative;
  display: inline-block;
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  -webkit-transform: scale(0.85);
  -ms-transform: scale(0.85);
  transform: scale(0.85);
  opacity: 0;
}
.home7-slide1-image:not(:first-child) {
  margin-top: 50px;
}
.home7-slide1-image .price {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.35;
  position: absolute;
  top: 0;
  left: 30px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #333;
  border-radius: 50%;
  background-color: #fff;
}
.home7-slide1-image .price .amount {
  font-size: 24px;
  font-weight: 700;
  display: block;
  letter-spacing: 0;
}
.home7-slide1-image img {
  -webkit-animation: hero7SlideUpDown 2s linear infinite alternate both;
  animation: hero7SlideUpDown 2s linear infinite alternate both;
}
@media only screen and (max-width: 767px) {
  .home7-slide1-image .price {
    font-size: 10px;
    left: 20px;
    width: 60px;
    height: 60px;
  }
  .home7-slide1-image .price .amount {
    font-size: 18px;
  }
}
@media only screen and (max-width: 479px) {
  .home7-slide1-image .price {
    top: -10px;
  }
}
@-webkit-keyframes hero7SlideUpDown {
  0% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  100% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
@keyframes hero7SlideUpDown {
  0% {
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
  100% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}
.home7-slide2-content {
  z-index: 1;
  display: inline-block;
  overflow: hidden;
  text-align: center;
}
.home7-slide2-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home7-slide2-content .sub-title {
  font-family: "Modesty";
  font-size: 70px;
  line-height: 1;
  display: block;
  margin-bottom: 20px;
  -webkit-transform: scale(0.85);
  -ms-transform: scale(0.85);
  transform: scale(0.85);
  color: #454545;
}
.home7-slide2-content .title {
  font-size: 65px;
  font-weight: 400;
  line-height: 1.25;
  position: relative;
  margin-bottom: 40px;
  padding: 0 60px;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  letter-spacing: 5px;
  text-transform: uppercase;
}
.home7-slide2-content .title::before,
.home7-slide2-content .title::after {
  line-height: 0.9;
  position: absolute;
  top: 0;
}
.home7-slide2-content .title::before {
  left: 0;
  content: url(../images/slider/home7/slide2-title-1.webp);
}
.home7-slide2-content .title::after {
  right: 0;
  content: url(../images/slider/home7/slide2-title-2.webp);
}
.home7-slide2-content .link {
  -webkit-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  transform: translateY(-30px);
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home7-slide2-content .sub-title {
    font-size: 60px;
  }
  .home7-slide2-content .title {
    font-size: 50px;
  }
}
@media only screen and (max-width: 767px) {
  .home7-slide2-content .sub-title {
    font-size: 50px;
  }
  .home7-slide2-content .title {
    font-size: 40px;
    margin-bottom: 30px;
  }
}
@media only screen and (max-width: 575px) {
  .home7-slide2-content .sub-title {
    font-size: 40px;
  }
  .home7-slide2-content .title {
    font-size: 30px;
    margin-bottom: 30px;
    padding: 0;
  }
  .home7-slide2-content .title::before,
  .home7-slide2-content .title::after {
    display: none;
  }
}
@media only screen and (max-width: 479px) {
  .home7-slide2-content .sub-title {
    font-size: 26px;
  }
  .home7-slide2-content .title {
    font-size: 24px;
  }
}
.swiper-slide-active .home7-slide1-content > * {
  opacity: 1;
}
.swiper-slide-active .home7-slide1-content .name {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-slide-active .home7-slide1-content .title {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home7-slide1-image {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
.swiper-slide-active .home7-slide2-content > * {
  opacity: 1;
}
.swiper-slide-active .home7-slide2-content .sub-title {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-slide-active .home7-slide2-content .title {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home7-slide2-content .link {
  -webkit-transition-delay: 1.7s;
  transition-delay: 1.7s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.home8-slider .swiper-pagination {
  position: absolute;
  top: 50%;
  right: 0;
  bottom: auto;
  left: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: auto;
  height: auto;
  margin: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.home8-slide-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.home8-slide-image {
  z-index: 1;
  overflow: hidden;
  max-width: 64%;
}
.home8-slide-image img {
  width: 100%;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home8-slide-image {
    max-width: 70%;
  }
}
@media only screen and (max-width: 767px) {
  .home8-slide-image {
    max-width: 100%;
  }
}
.home8-slide-content {
  position: absolute;
  z-index: 1;
  z-index: 8;
  top: 50%;
  left: 64%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
}
.home8-slide-content > * {
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
}
.home8-slide-content .sub-title {
  font-family: "Modesty";
  font-size: 75px;
  font-weight: 400;
  line-height: 1.5;
  display: block;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  color: #333;
}
.home8-slide-content .title {
  font-size: 60px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 30px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home8-slide-content .link {
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home8-slide-content .link a {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 2px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid #333;
}
.home8-slide-content .link a:hover {
  color: #72a499;
  border-color: #72a499;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .home8-slide-content .sub-title {
    font-size: 50px;
  }
  .home8-slide-content .title {
    font-size: 50px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home8-slide-content .sub-title {
    font-size: 50px;
  }
  .home8-slide-content .title {
    font-size: 40px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .home8-slide-content {
    left: 70%;
  }
  .home8-slide-content .sub-title {
    font-size: 40px;
  }
  .home8-slide-content .title {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .home8-slide-content .link a {
    font-size: 14px;
  }
}
@media only screen and (max-width: 767px) {
  .home8-slide-content {
    position: relative;
    right: 0;
    left: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 100%;
    -ms-flex: 1 0 100%;
    flex: 1 0 100%;
    margin-top: -80px;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  .home8-slide-content .sub-title {
    font-size: 40px;
  }
  .home8-slide-content .title {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .home8-slide-content .link a {
    font-size: 14px;
  }
}
@media only screen and (max-width: 479px) {
  .home8-slide-content {
    margin-top: -40px;
  }
  .home8-slide-content .sub-title {
    font-size: 36px;
  }
  .home8-slide-content .title {
    font-size: 24px;
  }
}
.home8-slide-pages {
  font-size: 56px;
  font-weight: 400;
  line-height: 1;
  position: absolute;
  z-index: 9;
  right: 3%;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}
.home8-slide-pages > * {
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
}
.home8-slide-pages .current {
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(40px);
  transform: translateX(40px);
  color: #333;
}
.home8-slide-pages .border {
  display: block;
  width: 80px;
  height: 2px;
  margin: 5px 15px 0;
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(40px);
  transform: translateX(40px);
  border: none !important;
  background-color: #333;
}
.home8-slide-pages .total {
  -webkit-transform: translateX(40px);
  -ms-transform: translateX(40px);
  transform: translateX(40px);
  color: rgba(126, 126, 126, 0.5);
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .home8-slide-pages {
    font-size: 44px;
  }
  .home8-slide-pages .border {
    width: 50px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .home8-slide-pages {
    font-size: 40px;
    right: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .home8-slide-pages .border {
    width: 40px;
    margin-right: 10px;
    margin-left: 10px;
  }
}
@media only screen and (max-width: 767px) {
  .home8-slide-pages {
    font-size: 30px;
    right: 5px;
    bottom: 5px;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  .home8-slide-pages .border {
    width: 30px;
  }
}
.swiper-slide-active .home8-slide-image img {
  -webkit-transition-delay: 0.75s;
  transition-delay: 0.75s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home8-slide-content > * {
  opacity: 1;
}
.swiper-slide-active .home8-slide-content .sub-title {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home8-slide-content .title {
  -webkit-transition-delay: 1.6s;
  transition-delay: 1.6s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home8-slide-content .link {
  -webkit-transition-delay: 2s;
  transition-delay: 2s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home8-slide-pages > * {
  opacity: 1;
}
.swiper-slide-active .home8-slide-pages .current {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home8-slide-pages .border {
  -webkit-transition-delay: 1.2s;
  transition-delay: 1.2s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home8-slide-pages .total {
  -webkit-transition-delay: 1.4s;
  transition-delay: 1.4s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.home12-slider {
  width: 100%;
}
.home12-slider:hover [class*="swiper-button"] {
  opacity: 1;
}
.home12-slider:hover [class*="swiper-button"]:hover i {
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
}
.home12-slide-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 645px;
}
@media only screen and (max-width: 767px) {
  .home12-slide-item {
    height: 550px;
  }
}
@media only screen and (max-width: 575px) {
  .home12-slide-item {
    height: 500px;
  }
}
@media only screen and (max-width: 479px) {
  .home12-slide-item {
    height: 450px;
  }
}
.home12-slide1-content {
  position: relative;
  z-index: 1;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  width: 100%;
  max-width: 600px;
  padding: 40px 40px 55px;
  text-align: center;
}
.home12-slide1-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home12-slide1-content .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0.85);
  -ms-transform: scale(0.85);
  transform: scale(0.85);
  background-color: #fff;
}
.home12-slide1-content .bg::before {
  position: absolute;
  top: 15px;
  left: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  content: "";
  border: 1px dashed #72a499;
}
.home12-slide1-content .sub-title {
  font-family: "Modesty";
  font-size: 55px;
  font-weight: 400;
  line-height: 1.25;
  display: block;
  margin-bottom: 28px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  color: #72a499;
}
.home12-slide1-content .title {
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 25px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  letter-spacing: 3px;
  color: #333;
}
.home12-slide1-content .price {
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
@media only screen and (max-width: 767px) {
  .home12-slide1-content {
    max-width: 450px;
  }
  .home12-slide1-content .sub-title {
    font-size: 50px;
  }
  .home12-slide1-content .title {
    font-size: 36px;
  }
}
@media only screen and (max-width: 479px) {
  .home12-slide1-content .sub-title {
    font-size: 40px;
  }
  .home12-slide1-content .title {
    font-size: 30px;
  }
}
.home12-slide2-content {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 466px;
  height: 466px;
  padding: 25px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
}
.home12-slide2-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home12-slide2-content .bg {
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(0.85);
  -ms-transform: scale(0.85);
  transform: scale(0.85);
  border-radius: 50%;
  background-color: #fff;
}
.home12-slide2-content .icon {
  margin-bottom: 25px;
  -webkit-transform: translateY(-30px);
  -ms-transform: translateY(-30px);
  transform: translateY(-30px);
}
.home12-slide2-content .title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 11px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home12-slide2-content .price {
  margin-bottom: 20px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home12-slide2-content .link {
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
}
.home12-slide2-content .link a {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 2px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid #333;
}
.home12-slide2-content .link a:hover {
  color: #72a499;
  border-color: #72a499;
}
@media only screen and (max-width: 767px) {
  .home12-slide2-content {
    width: 400px;
    height: 400px;
  }
  .home12-slide2-content .title {
    font-size: 60px;
  }
  .home12-slide2-content .link a {
    font-size: 14px;
  }
}
@media only screen and (max-width: 575px) {
  .home12-slide2-content {
    width: 350px;
    height: 350px;
  }
  .home12-slide2-content .icon {
    height: 60px;
    margin-bottom: 20px;
  }
  .home12-slide2-content .title {
    font-size: 48px;
  }
  .home12-slide2-content .price {
    height: 60px;
  }
}
@media only screen and (max-width: 479px) {
  .home12-slide2-content {
    width: 300px;
    height: 300px;
  }
  .home12-slide2-content .title {
    font-size: 40px;
  }
  .home12-slide2-content .price {
    height: 50px;
  }
  .home12-slide2-content .link a {
    font-size: 12px;
  }
}
.home12-slide3-content {
  max-width: calc(100% - 20px);
  margin-top: 80px;
  text-align: center;
}
.home12-slide3-content > * {
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  opacity: 0;
}
.home12-slide3-content .title {
  font-family: "Modesty";
  font-size: 76px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 20px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  color: #72a499;
}
.home12-slide3-content .sub-title {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.1;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 35px;
  padding: 0 80px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  text-align: center;
  color: #000;
}
.home12-slide3-content .sub-title img {
  position: absolute;
  top: 50%;
  margin-top: -12px;
  opacity: 0;
}
.home12-slide3-content .sub-title img.left-icon {
  left: 0;
  -webkit-transform: translateX(30px);
  -ms-transform: translateX(30px);
  transform: translateX(30px);
}
.home12-slide3-content .sub-title img.right-icon {
  right: 0;
  -webkit-transform: translateX(-30px);
  -ms-transform: translateX(-30px);
  transform: translateX(-30px);
}
.home12-slide3-content .price {
  font-family: "Marcellus";
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  z-index: 9;
  display: inline-block;
  padding: 0 45px;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  background-image: url("../images/slider/home1/slide-3-3.webp");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
@media only screen and (max-width: 767px) {
  .home12-slide3-content {
    margin-top: 60px;
  }
  .home12-slide3-content .title {
    font-size: 70px;
    margin-bottom: 20px;
  }
  .home12-slide3-content .sub-title {
    font-size: 36px;
    margin-bottom: 25px;
  }
  .home12-slide3-content .price {
    font-size: 14px;
  }
}
@media only screen and (max-width: 575px) {
  .home12-slide3-content {
    margin-top: 60px;
  }
  .home12-slide3-content .title {
    font-size: 54px;
  }
  .home12-slide3-content .sub-title {
    font-size: 30px;
    margin-bottom: 20px;
    padding: 0 50px;
  }
  .home12-slide3-content .sub-title img {
    height: 16px;
    margin-top: -8px;
  }
}
@media only screen and (max-width: 479px) {
  .home12-slide3-content .title {
    font-size: 40px;
  }
  .home12-slide3-content .sub-title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .home12-slide3-content .price {
    font-size: 12px;
  }
}
.swiper-slide-active .home12-slide1-content > * {
  opacity: 1;
}
.swiper-slide-active .home12-slide1-content .bg {
  -webkit-transition-delay: 0.75s;
  transition-delay: 0.75s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-slide-active .home12-slide1-content .sub-title {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home12-slide1-content .title {
  -webkit-transition-delay: 1.5s;
  transition-delay: 1.5s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home12-slide1-content .price {
  -webkit-transition-delay: 1.7s;
  transition-delay: 1.7s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home12-slide2-content > * {
  opacity: 1;
}
.swiper-slide-active .home12-slide2-content .bg {
  -webkit-transition-delay: 0.75s;
  transition-delay: 0.75s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.swiper-slide-active .home12-slide2-content .icon {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home12-slide2-content .title {
  -webkit-transition-delay: 1.3s;
  transition-delay: 1.3s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home12-slide2-content .price {
  -webkit-transition-delay: 1.5s;
  transition-delay: 1.5s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home12-slide2-content .link {
  -webkit-transition-delay: 1.7s;
  transition-delay: 1.7s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home12-slide3-content > * {
  opacity: 1;
}
.swiper-slide-active .home12-slide3-content .title {
  -webkit-transition-delay: 0.75s;
  transition-delay: 0.75s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home12-slide3-content .sub-title {
  -webkit-transition-delay: 0.95s;
  transition-delay: 0.95s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.swiper-slide-active .home12-slide3-content .sub-title img {
  -webkit-transition-delay: 1.5s;
  transition-delay: 1.5s;
  opacity: 1;
}
.swiper-slide-active .home12-slide3-content .sub-title img.left-icon {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home12-slide3-content .sub-title img.right-icon {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}
.swiper-slide-active .home12-slide3-content .price {
  -webkit-transition-delay: 1.15s;
  transition-delay: 1.15s;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}
.section-title {
  margin-bottom: 80px;
}
.section-title .sub-title {
  font-family: "Modesty";
  font-size: 76px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 5px;
  color: #72a499;
}
.section-title .sub-title:last-child {
  margin-bottom: 0;
}
.section-title .title {
  font-size: 56px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0;
  color: #333;
}
.section-title .title.title-icon-both::before {
  padding-right: 10px;
  content: url("../images/title/title-decor-left.webp");
}
.section-title .title.title-icon-both::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
}
.section-title .title.title-icon-left::before {
  padding-right: 10px;
  content: url("../images/title/title-decor-left.webp");
}
.section-title .title.title-icon-right::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section-title .sub-title {
    font-size: 60px;
  }
  .section-title .title {
    font-size: 44px;
  }
}
@media only screen and (max-width: 767px) {
  .section-title {
    margin-bottom: 60px;
  }
  .section-title .sub-title {
    font-size: 50px;
  }
  .section-title .title {
    font-size: 30px;
  }
}
@media only screen and (max-width: 575px) {
  .section-title {
    margin-bottom: 50px;
  }
  .section-title .sub-title {
    font-size: 40px;
  }
  .section-title .title {
    font-size: 24px;
  }
  .section-title .title::before,
  .section-title .title::after {
    display: none !important;
  }
}
.section-title2 {
  margin-bottom: 80px;
}
.section-title2 .sub-title {
  font-family: "Modesty";
  font-size: 56px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 8px;
  color: #72a499;
}
.section-title2 .title {
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0;
  color: #333;
}
.section-title2 .title.title-icon-both::before {
  padding-right: 10px;
  content: url("../images/title/title-decor-left.webp");
}
.section-title2 .title.title-icon-both::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
}
.section-title2 .title.title-icon-left::before {
  padding-right: 10px;
  content: url("../images/title/title-decor-left.webp");
}
.section-title2 .title.title-icon-right::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
}
.section-title2 p {
  line-height: 1.75;
  max-width: 570px;
  margin-top: 25px;
}
.section-title2.text-center p {
  margin-right: auto;
  margin-left: auto;
}
@media only screen and (max-width: 767px) {
  .section-title2 {
    margin-bottom: 60px;
  }
  .section-title2 .sub-title {
    font-size: 50px;
  }
  .section-title2 .title {
    font-size: 32px;
  }
  .section-title2 p {
    margin-top: 15px;
  }
}
@media only screen and (max-width: 575px) {
  .section-title2 {
    margin-bottom: 50px;
  }
  .section-title2 .sub-title {
    font-size: 40px;
  }
  .section-title2 .title {
    font-size: 24px;
  }
  .section-title2 .title::before,
  .section-title2 .title::after {
    display: none !important;
  }
  .section-title2 p {
    margin-top: 10px;
  }
}
.section-title3 {
  margin-bottom: 80px;
  padding: 20px 0;
  background-size: auto 100%;
}
.section-title3 .title {
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0;
  color: #333;
}
.section-title3 .desc {
  font-weight: 400;
  line-height: 1.5;
  margin-top: 15px;
}
@media only screen and (max-width: 767px) {
  .section-title3 {
    margin-bottom: 60px;
  }
  .section-title3 .sub-title {
    font-size: 50px;
  }
  .section-title3 .title {
    font-size: 32px;
  }
  .section-title3 p {
    margin-top: 15px;
  }
}
@media only screen and (max-width: 575px) {
  .section-title3 {
    margin-bottom: 50px;
  }
  .section-title3 .sub-title {
    font-size: 40px;
  }
  .section-title3 .title {
    font-size: 24px;
  }
  .section-title3 p {
    margin-top: 10px;
  }
}
.section-title4 {
  margin-bottom: 80px;
}
.section-title4 .title {
  font-family: "Modesty";
  font-size: 72px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0;
}
.section-title4 .title.title-icon-both::before {
  padding-right: 10px;
  content: url("../images/title/title-decor-left.webp");
}
.section-title4 .title.title-icon-both::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
}
.section-title4 .title.title-icon-left::before {
  padding-right: 10px;
  content: url("../images/title/title-decor-left.webp");
}
.section-title4 .title.title-icon-right::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .section-title4 .title {
    font-size: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .section-title4 {
    margin-bottom: 60px;
  }
  .section-title4 .title {
    font-size: 50px;
  }
}
@media only screen and (max-width: 575px) {
  .section-title4 {
    margin-bottom: 50px;
  }
  .section-title4 .title {
    font-size: 40px;
  }
  .section-title4 .title::before,
  .section-title4 .title::after {
    display: none !important;
  }
}
.block-title {
  margin-bottom: 35px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ededed;
}
.block-title .title {
  font-size: 30px;
  font-weight: 400;
  line-height: 1;
  margin: 0;
}
.page-title-section {
  padding: 130px 0;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px) {
  .page-title-section {
    padding: 80px 0;
  }
}
@media only screen and (max-width: 767px) {
  .page-title-section {
    padding: 60px 0;
  }
}
@media only screen and (max-width: 479px) {
  .page-title-section {
    padding: 50px 0;
  }
}
.page-title .title {
  font-size: 56px;
  font-weight: 400;
  margin-bottom: 30px;
}
.page-title .breadcrumb {
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
}
.page-title .breadcrumb .breadcrumb-item {
  font-size: 16px;
  font-weight: 400;
  color: #999;
}
.page-title .breadcrumb .breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  color: #333;
}
.page-title .breadcrumb .breadcrumb-item a:hover {
  color: #333;
}
.page-title .breadcrumb .breadcrumb-item.active {
  color: #333;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .page-title .title {
    font-size: 44px;
    margin-bottom: 20px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .page-title .title {
    font-size: 40px;
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .page-title .title {
    font-size: 30px;
    margin-bottom: 15px;
  }
}
@media only screen and (max-width: 575px) {
  .page-title .title {
    font-size: 24px;
  }
}
@media only screen and (max-width: 479px) {
  .page-title .title {
    font-size: 20px;
    margin-bottom: 10px;
  }
}
.sale-banner1 {
  position: relative;
  width: 100%;
  max-width: 510px;
  margin: auto;
  padding-bottom: 100%;
}
.sale-banner1 .inner {
  position: absolute;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.sale-banner1 .inner .title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 3px;
  color: #333;
}
.sale-banner1 .inner .sale-percent {
  font-size: 34px;
  font-weight: 300;
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 200px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
}
.sale-banner1 .inner .sale-percent .number {
  font-size: 100px;
}
.sale-banner1 .inner .link {
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  padding: 2px 0;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.sale-banner1 .inner .link:hover {
  border-color: rgba(51, 51, 51, 0.2);
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sale-banner1 .inner {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 479px) {
  .sale-banner1 .inner {
    -webkit-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
  }
  .sale-banner1 .inner .link {
    font-size: 20px;
  }
}
.sale-banner2 .inner .image {
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 35px;
}
.sale-banner2 .inner .image::before {
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  content: "";
  border: 1px solid #fff;
}
.sale-banner2 .inner .image img {
  width: 100%;
}
.sale-banner2 .inner .image:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.sale-banner2 .inner .content .sale-percent {
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 3px;
}
.sale-banner2 .inner .content .text {
  font-family: "ABeeZee";
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #333;
}
.sale-banner2 .inner .content .btn {
  background-color: #f9f0ee;
}
@media only screen and (max-width: 575px) {
  .sale-banner2 .inner .image {
    margin-bottom: 20px;
  }
}
.sale-banner3 {
  position: relative;
  width: 100%;
  padding: 80px 30px;
  text-align: center;
  border: 3px solid rgba(114, 164, 153, 0.4);
}
.sale-banner3 .special-title {
  font-family: "Modesty";
  font-size: 56px;
  line-height: 1.25;
  display: block;
  margin-bottom: 25px;
  color: #72a499;
}
.sale-banner3 .title {
  font-size: 40px;
  font-weight: 400;
  position: relative;
  z-index: 1;
  margin-bottom: 48px;
}
.sale-banner3 .title::before {
  font-family: "Futura";
  font-size: 100px;
  font-weight: 700;
  line-height: 1;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 0;
  width: 100%;
  content: attr(data-text);
  -webkit-transform: translateY(-60%);
  -ms-transform: translateY(-60%);
  transform: translateY(-60%);
  text-align: center;
  color: #f2f2f2;
}
.sale-banner3 .link {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  padding-bottom: 4px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
}
.sale-banner3 .link:hover {
  border-color: #333;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sale-banner3 .title {
    font-size: 32px;
  }
  .sale-banner3 .title::before {
    font-size: 80px;
  }
}
.sale-banner3-1 {
  position: relative;
  width: 100%;
  text-align: center;
}
.sale-banner3-1 .image img {
  width: 100%;
}
.sale-banner3-1 .content {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 0;
  width: 100%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.sale-banner3-1 .content .special-title {
  font-family: "Modesty";
  font-size: 56px;
  line-height: 1.25;
  display: block;
  margin-bottom: 25px;
  color: #72a499;
}
.sale-banner3-1 .content .title {
  font-size: 34px;
  font-weight: 400;
  position: relative;
  z-index: 1;
  margin-bottom: 48px;
}
.sale-banner3-1 .content .link {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  padding-bottom: 4px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
}
.sale-banner3-1 .content .link:hover {
  border-color: #333;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px) {
  .sale-banner3-1 .content .title {
    font-size: 32px;
  }
}
@media only screen and (max-width: 479px) {
  .sale-banner3-1 .content .special-title {
    font-size: 44px;
  }
  .sale-banner3-1 .content .title {
    font-size: 28px;
  }
}
.sale-banner4 {
  height: 100%;
}
.sale-banner4 .inner {
  position: relative;
  height: 100%;
}
.sale-banner4 .inner > img {
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.sale-banner4 .inner .content {
  position: absolute;
  z-index: 9;
  top: 15%;
  left: 0;
  width: 100%;
  text-align: center;
}
.sale-banner4 .inner .content .sub-title {
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 25px;
}
.sale-banner4 .inner .content .title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 400;
  line-height: 0.9;
  margin-bottom: 40px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (max-width: 575px) {
  .sale-banner4 .inner .content .sub-title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .sale-banner4 .inner .content .title {
    font-size: 60px;
    margin-bottom: 30px;
  }
}
@media only screen and (max-width: 479px) {
  .sale-banner4 .inner .content {
    top: 12%;
  }
  .sale-banner4 .inner .content .sub-title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .sale-banner4 .inner .content .title {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .sale-banner4 .inner .content .button-banner img {
    height: 16px;
  }
}
.sale-banner5 .inner {
  position: relative;
  display: block;
}
.sale-banner5 .inner > img {
  z-index: 1;
  display: block;
  width: 100%;
}
.sale-banner5 .inner .content {
  position: absolute;
  z-index: 9;
  bottom: 50px;
  left: 50px;
}
.sale-banner5 .inner .content .title {
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 25px;
}
.sale-banner5 .inner .content .price {
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  color: #333;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (max-width: 575px) {
  .sale-banner5 .inner .content {
    bottom: 40px;
    left: 40px;
  }
  .sale-banner5 .inner .content .title {
    font-size: 32px;
    margin-bottom: 15px;
  }
}
@media only screen and (max-width: 479px) {
  .sale-banner5 .inner .content {
    left: 20px;
  }
  .sale-banner5 .inner .content .title {
    font-size: 22px;
    margin-bottom: 5px;
  }
  .sale-banner5 .inner .content .price {
    font-size: 14px;
  }
}
.sale-banner6 .inner {
  position: relative;
  display: block;
}
.sale-banner6 .inner > img {
  z-index: 1;
  display: block;
  width: 100%;
}
.sale-banner6 .inner .content {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 0;
  width: 100%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}
.sale-banner6 .inner .content img {
  display: block;
  margin: auto;
}
.sale-banner6 .inner .content img.price {
  margin-bottom: 25px;
}
.sale-banner6 .inner .content .title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 400;
  line-height: 0.9;
  margin-bottom: 20px;
}
.sale-banner6 .inner .content .link {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  display: inline-block;
  padding-bottom: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
}
.sale-banner6 .inner .content .link:hover {
  border-color: #333;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .sale-banner6 .inner .content .title {
    font-size: 60px;
  }
  .sale-banner6 .inner .content img.icon {
    height: 50px;
  }
  .sale-banner6 .inner .content img.price {
    height: 50px;
    margin-bottom: 20px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (max-width: 767px) {
  .sale-banner6 .inner .content .title {
    font-size: 60px;
  }
  .sale-banner6 .inner .content img.icon {
    height: 40px;
  }
  .sale-banner6 .inner .content img.price {
    height: 30px;
    margin-bottom: 15px;
  }
}
@media only screen and (max-width: 479px) {
  .sale-banner6 .inner .content .title {
    font-size: 40px;
    margin-bottom: 10px;
  }
  .sale-banner6 .inner .content img.icon {
    height: 30px;
  }
  .sale-banner6 .inner .content img.price {
    height: 20px;
    margin-bottom: 10px;
  }
}
.sale-banner7 {
  height: 100%;
}
.sale-banner7 .inner {
  position: relative;
  height: 100%;
}
.sale-banner7 .inner .image {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.sale-banner7 .inner .image img {
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.sale-banner7 .inner .image::before {
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  border: 1px solid #fff;
}
.sale-banner7 .inner .content {
  position: absolute;
  z-index: 9;
  top: 15%;
  left: 0;
  width: 100%;
  text-align: center;
}
.sale-banner7 .inner .content .title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 10px;
  color: dimgray;
}
.sale-banner7 .inner .content .sub-title {
  font-family: "Futura";
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #baa491;
}
.sale-banner7:hover .inner .image img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.sale-banner7:hover .inner .image::before {
  opacity: 1;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (max-width: 575px) {
  .sale-banner7 .inner .content .title {
    font-size: 60px;
  }
  .sale-banner7 .inner .content .sub-title {
    font-size: 24px;
  }
}
@media only screen and (max-width: 479px) {
  .sale-banner7 .inner .content .title {
    font-size: 40px;
  }
  .sale-banner7 .inner .content .sub-title {
    font-size: 20px;
  }
}
.sale-banner8 {
  position: relative;
  display: block;
  overflow: hidden;
}
.sale-banner8 img {
  display: block;
  width: 100%;
}
.sale-banner8 .content {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 40px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.sale-banner8 .content .title {
  font-size: 34px;
  font-weight: 400;
  line-height: 1.35;
  margin-bottom: 10px;
}
.sale-banner8 .content .link {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  display: inline-block;
  padding-bottom: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
}
.sale-banner8 .content .link:hover {
  border-color: #333;
}
.sale-banner8:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .sale-banner8 .content .title {
    font-size: 30px;
  }
  .sale-banner8 .content .link {
    font-size: 14px;
  }
}
@media only screen and (max-width: 575px) {
  .sale-banner8 .content .title {
    font-size: 24px;
  }
  .sale-banner8 .content .link {
    font-size: 14px;
  }
}
@media only screen and (max-width: 479px) {
  .sale-banner8 .content {
    left: 20px;
  }
  .sale-banner8 .content .title {
    font-size: 18px;
    margin-bottom: 6px;
  }
  .sale-banner8 .content .link {
    font-size: 12px;
  }
}
.sale-banner9 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  padding: 60px 30px;
}
.sale-banner9 .inner .content {
  text-align: center;
}
.sale-banner9 .inner .content .title {
  font-family: "Modesty";
  font-size: 100px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 30px;
  color: #72a499;
}
.sale-banner9 .inner .content .cuppon {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  display: block;
  margin-bottom: 34px;
  letter-spacing: 2px;
  color: #333;
}
.sale-banner9 .inner .content .cuppon .code {
  font-weight: 600;
  padding: 1px 16px;
  color: #fff;
  background-image: url(../images/banner/sale/sale-banner9-1.1.webp);
  background-size: cover;
}
.sale-banner9 .inner .content .offer {
  font-size: 90px;
  font-weight: 600;
  line-height: 1;
  display: block;
  margin-bottom: 35px;
  color: #333;
}
@media only screen and (max-width: 767px) {
  .sale-banner9 .inner .content .title {
    font-size: 80px;
  }
  .sale-banner9 .inner .content .cuppon {
    font-size: 14px;
    margin-bottom: 25px;
  }
  .sale-banner9 .inner .content .offer {
    font-size: 80px;
    margin-bottom: 25px;
  }
}
@media only screen and (max-width: 479px) {
  .sale-banner9 .inner .content .title {
    font-size: 60px;
  }
  .sale-banner9 .inner .content .cuppon {
    font-size: 12px;
  }
  .sale-banner9 .inner .content .offer {
    font-size: 60px;
  }
}
.sale-banner9-image {
  height: 100%;
}
.sale-banner9-image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.sale-banner10 .inner {
  position: relative;
  overflow: hidden;
}
.sale-banner10 .inner > img {
  width: 100%;
}
.sale-banner10 .inner .content {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  padding: 0 20px;
  text-align: center;
}
.sale-banner10 .inner .content .sub-title {
  font-family: "Modesty";
  font-size: 56px;
  line-height: 1;
  display: block;
  margin-bottom: 20px;
  color: #72a499;
}
.sale-banner10 .inner .content .title {
  font-size: 34px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 4px;
}
.sale-banner10:hover .inner > img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.sale-banner11 .inner {
  position: relative;
  overflow: hidden;
}
.sale-banner11 .inner::before {
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 20px;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  content: "";
  border: 1px solid #fff;
}
.sale-banner11 .inner > img {
  width: 100%;
}
.sale-banner11 .inner .content {
  position: absolute;
  z-index: 9;
  bottom: 75px;
  left: 0;
  width: 100%;
  padding: 0 30px;
  text-align: center;
}
.sale-banner11 .inner .content .title {
  font-size: 34px;
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 20px;
}
.sale-banner11:hover .inner > img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.category-banner1 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
}
.category-banner1 .inner .image {
  position: relative;
  display: block;
  overflow: hidden;
}
.category-banner1 .inner .image:not(:last-child) {
  margin-bottom: 20px;
}
.category-banner1 .inner .image::before {
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  content: "";
  border: 1px solid #fff;
}
.category-banner1 .inner .image img {
  width: 100%;
}
.category-banner1 .inner .content .title {
  font-size: 24px;
  font-weight: 400;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0;
}
.category-banner1 .inner .content .title a:hover {
  color: #333;
}
.category-banner1 .inner .content .title .number {
  font-family: "Futura";
  font-size: 16px;
  line-height: 1;
  position: relative;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  color: #333;
}
.category-banner1 .inner .content .title .number::before {
  position: absolute;
  top: calc(50% + 2px);
  right: calc(100% + 10px);
  width: 50px;
  height: 1px;
  content: "";
  background-color: #ccc;
}
.category-banner1:hover .inner .image img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.category-banner2 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
}
.category-banner2 .inner {
  display: block;
}
.category-banner2 .inner .image {
  position: relative;
  display: block;
  overflow: hidden;
}
.category-banner2 .inner .image:not(:last-child) {
  margin-bottom: 30px;
}
.category-banner2 .inner .image::before {
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  border: 1px solid #fff;
}
.category-banner2 .inner .image img {
  width: 100%;
}
.category-banner2 .inner .content .title {
  font-size: 34px;
  font-weight: 400;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
}
.category-banner2 .inner .content .title .number {
  font-family: "Futura";
  font-size: 16px;
  line-height: 1;
  position: relative;
  padding-left: 5px;
  color: #333;
}
.category-banner2 .banner-desc {
  font-family: "Futura";
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  white-space: nowrap;
  letter-spacing: 3px;
  color: dimgray;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
.category-banner2 .banner-desc.right {
  right: -40px;
}
.category-banner2 .banner-desc.left {
  left: -40px;
}
.category-banner2:hover .inner .image img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.category-banner2:hover .inner .image::before {
  opacity: 1;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .category-banner2 .inner .content .title {
    font-size: 24px;
  }
  .category-banner2 .banner-desc {
    display: none;
  }
}
.category-banner3 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
}
.category-banner3 .inner {
  position: relative;
  display: block;
}
.category-banner3 .inner .image {
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 0;
}
.category-banner3 .inner .image::before {
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  border: 1px solid #fff;
}
.category-banner3 .inner .image img {
  width: 100%;
}
.category-banner3 .inner .content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 40px 50px;
}
.category-banner3 .inner .content .title {
  font-size: 34px;
  font-weight: 400;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
}
.category-banner3 .inner .content .title .number {
  font-family: "Futura";
  font-size: 16px;
  line-height: 1;
  position: relative;
  padding-left: 5px;
  color: #333;
}
.category-banner3:hover .inner .image img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.category-banner3:hover .inner .image::before {
  opacity: 1;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .category-banner3 .inner .content .title {
    font-size: 24px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 575px) {
  .category-banner3 .inner .content {
    padding-bottom: 35px;
  }
}
@media only screen and (max-width: 479px) {
  .category-banner3 .inner .content {
    padding: 0 25px 20px;
  }
}
.category-banner4 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
}
.category-banner4 .inner {
  position: relative;
  display: block;
}
.category-banner4 .inner .image {
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 0;
}
.category-banner4 .inner .image::before {
  position: absolute;
  z-index: 2;
  top: 15px;
  left: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  border: 1px solid #fff;
}
.category-banner4 .inner .image img {
  width: 100%;
}
.category-banner4 .inner .content {
  position: relative;
  z-index: 9;
  max-width: 80%;
  margin: -25px auto 0;
  padding: 15px 10px;
}
.category-banner4 .inner .content .title {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.125;
  margin: 0;
  text-align: center;
}
.category-banner4:hover .inner .image img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.category-banner4:hover .inner .image::before {
  opacity: 1;
}
.category-banner5 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
}
.category-banner5 .inner {
  position: relative;
  display: block;
}
.category-banner5 .inner .image {
  position: relative;
  display: block;
  margin-bottom: 40px;
}
.category-banner5 .inner .image img {
  display: block;
  width: 100%;
  max-width: 264px;
  margin: auto;
  border-radius: 50%;
}
.category-banner5 .inner .content {
  margin: 0;
  padding: 0;
  text-align: center;
}
.category-banner5 .inner .content .title {
  font-size: 24px;
  font-weight: 400;
  line-height: 1.125;
  margin: 0 0 15px;
}
.category-banner5 .inner .content .number {
  font-size: 16px;
  font-weight: 400;
  display: block;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  color: #999;
}
.category-banner5:hover .inner .image img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.category-banner5:hover .inner .content .number {
  color: #333;
}
.category-banner6 {
  position: relative;
  display: block;
  float: left;
  width: 100%;
}
.category-banner6 .inner {
  position: relative;
}
.category-banner6 .inner .image {
  position: relative;
  z-index: 1;
  display: block;
  overflow: hidden;
  margin-bottom: 0;
}
.category-banner6 .inner .image::before {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.category-banner6 .inner .image img {
  width: 100%;
}
.category-banner6 .inner .content {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 0;
}
.category-banner6 .inner .content .title {
  font-size: 20px;
  font-weight: 400;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0;
  padding-bottom: 5px;
}
.category-banner6 .inner .content .title::before {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #fff;
}
.category-banner6 .inner .content .title a {
  color: #fff;
}
.category-banner6 .inner .content .title a:hover {
  color: #fff;
}
.category-banner6 .inner .content .title .number {
  font-family: "Futura";
  font-size: 16px;
  line-height: 1;
  position: relative;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  margin-left: 50px;
  color: #fff;
}
.category-banner6 .inner .content .title .number::before {
  position: absolute;
  top: calc(50% + 2px);
  right: calc(100% + 10px);
  width: 30px;
  height: 1px;
  content: "";
  background-color: #fff;
}
.category-banner6:hover .inner .image::before {
  opacity: 1;
}
.category-banner6:hover .inner .image img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.category-banner6:hover .inner .content {
  opacity: 1;
}
.category-banner6:hover .inner .content .title::before {
  width: 100%;
}
.parallax-banner {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
}
.parallax-banner .parallax-image {
  position: absolute;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
}
.parallax-banner .parallax-image img {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  min-width: 100%;
  min-height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -o-object-fit: cover;
  object-fit: cover;
}
.parallax-banner .content {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 50%;
  -ms-flex: 1 0 50%;
  flex: 1 0 50%;
  max-width: 50%;
}
.parallax-banner-1 {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.parallax-banner-1 .content {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 100%;
  -ms-flex: 1 0 100%;
  flex: 1 0 100%;
  max-width: 100%;
  -webkit-transform: translateY(-100%);
  -ms-transform: translateY(-100%);
  transform: translateY(-100%);
}
.parallax-banner-1 .content .sub-title {
  font-family: "Modesty";
  font-size: 120px;
  line-height: 0.75;
  display: block;
  color: #333;
}
.parallax-banner-1 .content .title {
  font-family: "Futura";
  font-size: 56px;
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
  letter-spacing: 20px;
  color: #baa491;
}
.parallax-banner-2 {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.parallax-banner-2 .content .price {
  margin-bottom: 35px;
}
.parallax-banner-2 .content .title {
  font-size: 64px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 20px;
}
.parallax-banner-2 .content .sub-title {
  font-family: "Modesty";
  font-size: 72px;
  line-height: 1;
  display: block;
  color: #72a499;
}
.parallax-banner-3 .content .title {
  font-size: 64px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 30px;
}
.parallax-banner-4 .content {
  max-width: 500px;
  margin-left: 15%;
}
.parallax-banner-4 .content .sub-title {
  font-family: "Modesty";
  font-size: 80px;
  line-height: 1;
  display: block;
  margin-bottom: 10px;
  color: #333;
}
.parallax-banner-4 .content .title {
  font-size: 48px;
  font-weight: 400;
  line-height: 1.35;
  margin-bottom: 30px;
}
.parallax-banner-4 .content a {
  font-family: "Futura";
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .parallax-banner-4 .content {
    margin-left: 5%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .parallax-banner-1 .content .sub-title {
    font-size: 100px;
  }
  .parallax-banner-1 .content .title {
    font-size: 44px;
  }
  .parallax-banner-2 .content .title {
    font-size: 44px;
  }
  .parallax-banner-2 .content .sub-title {
    font-size: 56px;
  }
  .parallax-banner-3 .content .title {
    font-size: 44px;
  }
  .parallax-banner-4 .content {
    max-width: 420px;
    margin-left: 5%;
  }
  .parallax-banner-4 .content .sub-title {
    font-size: 60px;
  }
  .parallax-banner-4 .content .title {
    font-size: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .parallax-banner .content {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 100%;
    -ms-flex: 1 0 100%;
    flex: 1 0 100%;
    max-width: 100%;
  }
  .parallax-banner-1 .content .sub-title {
    font-size: 80px;
  }
  .parallax-banner-1 .content .title {
    font-size: 40px;
    letter-spacing: 10px;
  }
  .parallax-banner-4 .content {
    max-width: 350px;
  }
}
@media only screen and (max-width: 479px) {
  .parallax-banner-2 .content .title {
    font-size: 36px;
  }
  .parallax-banner-2 .content .sub-title {
    font-size: 44px;
  }
  .parallax-banner-3 .content .title {
    font-size: 36px;
  }
  .parallax-banner-4 .content .sub-title {
    font-size: 50px;
  }
  .parallax-banner-4 .content .title {
    font-size: 36px;
  }
}
.instagram-banner1 .image img {
  width: 100%;
}
.instagram-banner1 .content {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 0;
  width: 100%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}
.instagram-banner1 .content .icon {
  margin-bottom: 20px;
  color: #e2efec;
}
.instagram-banner1 .content .icon i {
  font-size: 40px;
  line-height: 1;
  display: block;
}
.instagram-banner1 .content .sub-title {
  font-size: 18px;
  font-weight: 400;
  display: block;
  margin-bottom: 8px;
  color: #333;
}
.instagram-banner1 .content .title {
  font-size: 34px;
  font-weight: 400;
  margin-bottom: 0;
}
.instagram-banner1 .content .title a:hover {
  color: #72a499;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 479px) {
  .instagram-banner1 .content .sub-title {
    font-size: 14px;
  }
  .instagram-banner1 .content .title {
    font-size: 24px;
  }
}
.video-banner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 750px;
}
.video-banner .content {
  margin-top: 170px;
  text-align: center;
}
.video-banner .content .title {
  font-family: "Futura";
  font-size: 34px;
  font-weight: 400;
  margin-bottom: 70px;
  letter-spacing: 12px;
  color: #ababab;
}
.video-banner .content .title:last-child {
  margin-bottom: 0;
}
.video-banner .content .title span {
  font-weight: 600;
}
.video-banner .content .video-popup {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  border-radius: 50%;
}
.video-banner .content .video-popup:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .video-banner {
    height: 600px;
  }
  .video-banner .content {
    margin-top: 100px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px) {
  .video-banner {
    height: 500px;
  }
  .video-banner .content {
    margin-top: 80px;
  }
  .video-banner .content .title {
    margin-bottom: 50px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .video-banner .content .title {
    font-size: 30px;
    margin-bottom: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .video-banner {
    height: 400px;
  }
  .video-banner .content {
    margin-top: 50px;
  }
  .video-banner .content .title {
    font-size: 30px;
    margin-bottom: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .video-banner .content {
    margin-top: 40px;
  }
  .video-banner .content .title {
    font-size: 24px;
    margin-bottom: 30px;
  }
}
.video-banner2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 560px;
}
.video-banner2 .content {
  text-align: center;
}
.video-banner2 .content .video-popup {
  display: block;
  border-radius: 50%;
}
.video-banner2 .content .video-popup:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px) {
  .video-banner2 {
    height: 500px;
  }
}
@media only screen and (max-width: 767px) {
  .video-banner2 {
    height: 400px;
  }
}
.widget-banner {
  position: relative;
  display: block;
  overflow: hidden;
}
.widget-banner::before {
  position: absolute;
  z-index: 2;
  top: 0;
  left: -100%;
  display: block;
  width: 50%;
  height: 100%;
  content: "";
  -webkit-transform: skewX(-25deg);
  -ms-transform: skewX(-25deg);
  transform: skewX(-25deg);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(255, 255, 255, 0)),
    to(rgba(255, 255, 255, 0.3))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.3) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgba(255, 255, 255, 0)),
    to(rgba(255, 255, 255, 0.3))
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.3) 100%
  );
}
.widget-banner img {
  width: 100%;
}
.widget-banner:hover::before {
  -webkit-animation: shine 0.75s;
  animation: shine 0.75s;
}
@-webkit-keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 125%;
  }
}
@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 125%;
  }
}
.products {
  margin-bottom: -50px;
}
.products .product {
  margin-bottom: 50px;
}
.products-no-space {
  margin-bottom: 0;
}
.products-no-space .product {
  margin-bottom: 0;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .products {
    margin-bottom: -50px;
  }
  .products .product {
    margin-bottom: 50px;
  }
}
.product-tab-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 66px;
}
.product-tab-list li {
  line-height: 1;
  margin: 0 20px;
}
.product-tab-list li a {
  font-family: "Marcellus";
  font-size: 34px;
  font-weight: 400;
  line-height: 1;
  position: relative;
  display: block;
  color: #ababab;
}
.product-tab-list li a:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  content: url("../images/others/tab-hover.webp");
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  text-align: center;
  opacity: 0;
}
.product-tab-list li a.active,
.product-tab-list li a:hover {
  color: #333;
}
.product-tab-list li a.active:after,
.product-tab-list li a:hover:after {
  top: 100%;
  opacity: 1;
}
.product-tab-list.tab-hover2 li a:after {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 10px;
  content: url("../images/others/tab-hover-2.webp");
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product-tab-list li a {
    font-size: 24px;
  }
}
@media only screen and (max-width: 767px) {
  .product-tab-list {
    margin-bottom: 20px;
  }
  .product-tab-list li {
    margin: 0 10px 10px;
  }
  .product-tab-list li a {
    font-size: 20px;
  }
  .product-tab-list li a::after {
    display: none;
  }
}
@media only screen and (max-width: 575px) {
  .product-tab-list li a {
    font-size: 18px;
  }
}
.product-list-slider {
  position: relative;
  overflow: visible;
  margin: 0;
  padding: 0;
}
.product-list-slider .slick-arrow {
  line-height: 1;
  position: absolute;
  top: -60px;
  visibility: visible;
  width: auto;
  height: 30px;
  padding: 0;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 1;
  color: #7e7e7e;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.product-list-slider .slick-arrow i {
  font-size: 16px;
  line-height: 1;
}
.product-list-slider .slick-arrow:hover {
  color: #333;
}
.product-list-slider .slick-arrow.slick-prev {
  right: 30px !important;
  left: auto !important;
}
.product-list-slider .slick-arrow.slick-next {
  right: 0 !important;
}
.product-list-slider .slick-list {
  margin-right: 0;
  margin-left: 0;
}
.product-list-slider .slick-list .slick-slide > div {
  padding-right: 0;
  padding-left: 0;
}
.product-list-slider .slick-slide > div {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.product-list-slider .slick-slide > div:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}
.product {
  position: relative;
}
.product:hover .product-thumb .image img.image-hover {
  z-index: 1;
  visibility: visible;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
.product:hover .product-thumb .add-to-wishlist {
  z-index: 2;
  visibility: visible;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}
.product:hover .product-thumb .product-options {
  visibility: visible;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}
.product:hover .product-info .title,
.product:hover .product-info .price {
  visibility: hidden;
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px);
  opacity: 0;
}
.product:hover .product-info .product-buttons {
  visibility: visible;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
}
.product:hover .product2-info .title,
.product:hover .product2-info .price {
  visibility: hidden;
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px);
  opacity: 0;
}
.product:hover .product2-buttons {
  visibility: visible;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 1;
}
.product-thumb {
  position: relative;
  z-index: 2;
  margin: 0;
}
.product-thumb .image {
  position: relative;
  display: block;
  overflow: hidden;
}
.product-thumb .image img {
  z-index: 3;
  width: 100%;
}
.product-thumb .image img.image-hover {
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  visibility: hidden;
  -webkit-transition-duration: 0.7s;
  transition-duration: 0.7s;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0;
}
.product-thumb .add-to-wishlist {
  position: absolute;
  z-index: 7;
  top: 15px;
  right: 15px;
  visibility: hidden;
  width: 48px;
  height: 48px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateY(10px);
  -ms-transform: translateY(10px);
  transform: translateY(10px);
  text-align: center;
  opacity: 0;
  color: #f8796c;
}
.product-thumb .add-to-wishlist i {
  font-size: 24px;
  line-height: 48px;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .product-thumb .add-to-wishlist {
    visibility: visible;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
.product-badges {
  position: absolute;
  top: 20px;
  left: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: -12px;
}
.product-badges span {
  font-weight: 400;
  line-height: 48px;
  z-index: 5;
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
  text-align: center;
  text-transform: lowercase;
  color: #fff;
  border-radius: 50%;
}
.product-badges span.onsale {
  background-color: #98d8ca;
}
.product-badges span.hot {
  background-color: #c61932;
}
.product-badges span.outofstock {
  background-color: #333;
}
.product-options {
  position: absolute;
  z-index: 7;
  bottom: 20px;
  left: 20px;
  visibility: hidden;
  width: calc(100% - 40px);
  padding: 15px 10px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
  opacity: 0;
  background-color: #fff;
}
.product-options ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #333;
}
.product-options ul:not(:last-child) {
  margin-bottom: 10px;
}
.product-options ul li {
  font-weight: 400;
  line-height: 1;
  margin: 0 4px;
  padding: 0;
  cursor: pointer;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.product-options ul.colors li {
  width: 18px;
  height: 18px;
  text-indent: -9999px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.product-options ul.colors li img {
  display: block;
  width: 100%;
  border-radius: 50%;
}
.product-options ul.colors li.active {
  border: 2px solid #f8796c;
}
.product-options ul.sizes li {
  padding-bottom: 3px;
  opacity: 0.5;
}
.product-options ul.sizes li:hover,
.product-options ul.sizes li.active {
  opacity: 1;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .product-options {
    display: none;
  }
}
.product-info {
  position: relative;
  z-index: 3;
  text-align: center;
}
.product-info:not(:first-child) {
  margin-top: 28px;
}
.product-info .title {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 12px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.product-info .title a {
  color: #7e7e7e;
}
.product-info .title a:hover {
  color: #333;
}
.product-info .price {
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  color: #333;
}
.product-info .price span.old {
  text-decoration: line-through;
  color: #aaa;
}
.product-info .price span.new {
  margin-left: 10px;
  color: #f8796c;
}
.product-info .product-buttons {
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  visibility: hidden;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
  transform: translateY(50%);
  opacity: 0;
}
.product-info .product-buttons .product-button {
  width: 48px;
  height: 48px;
  margin: 0 5px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background-color: #333;
}
.product-info .product-buttons .product-button i {
  font-size: 16px;
  line-height: 48px;
}
.product-info .product-buttons .product-button:hover {
  background-color: #f8796c;
}
.product-info .product-rating {
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 20px;
}
.product-info .product-rating .rating {
  font-size: 12px;
  position: relative;
  display: block;
}
.product-info .product-rating .rating::before {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  font-weight: 300;
  line-height: 1;
  content: "    ";
  color: #ababab;
}
.product-info .product-rating .rating .rating-active {
  font-size: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  height: 100%;
}
.product-info .product-rating .rating .rating-active::before {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  font-weight: 900;
  line-height: 1;
  content: "    ";
  white-space: nowrap;
  color: #f5cc26;
}
.product-info .product-stock-status {
  margin-top: 15px;
}
.product-info .product-stock-status .bar {
  display: block;
  float: left;
  width: 100%;
  height: 7px;
  border-radius: 50px;
  background-color: #ededed;
}
.product-info .product-stock-status .bar .progress {
  display: block;
  height: 100%;
  border-radius: 50px;
  background-color: #f8796c;
}
.product-info .product-stock-status > span {
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  display: block;
  margin-top: 12px;
  color: #7e7e7e;
}
.product-info .product-stock-status > span span {
  font-weight: 600;
  color: #333;
}
.product-info .product-stock-status > span.sold {
  float: left;
}
.product-info .product-stock-status > span.available {
  float: right;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .product-info .title,
  .product-info .price,
  .product-info .product-buttons {
    visibility: visible !important;
    -webkit-transform: translateY(0) !important;
    -ms-transform: translateY(0) !important;
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .product-info .product-buttons {
    position: static;
    margin-top: 15px;
  }
}
.product2-info {
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  padding: 0 25px 25px;
  text-align: left;
}
.product2-info .title {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 12px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.product2-info .title a {
  color: #7e7e7e;
}
.product2-info .title a:hover {
  color: #333;
}
.product2-info .price {
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  color: #333;
}
.product2-info .price span.old {
  text-decoration: line-through;
  color: #aaa;
}
.product2-info .price span.new {
  margin-left: 10px;
  color: #f8796c;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .product2-info {
    position: static;
    margin-top: 28px;
    padding: 0;
    text-align: center;
  }
  .product2-info .title,
  .product2-info .price {
    visibility: visible !important;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transform: translateY(0) !important;
    -ms-transform: translateY(0) !important;
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
}
.product2-buttons {
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  visibility: hidden;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
}
.product2-buttons .product-button {
  width: 48px;
  height: 48px;
  margin: 0 5px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background-color: #333;
}
.product2-buttons .product-button i {
  font-size: 16px;
  line-height: 48px;
}
.product2-buttons .product-button:hover {
  background-color: #f8796c;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .product2-buttons {
    position: static;
    visibility: visible !important;
    margin-top: 15px;
    -webkit-transform: translateY(0) !important;
    -ms-transform: translateY(0) !important;
    transform: translateY(0) !important;
    opacity: 1 !important;
  }
}
.list-product {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.list-product .thumbnail {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 140px;
  -ms-flex: 0 0 140px;
  flex: 0 0 140px;
  padding-right: 20px;
}
.list-product .thumbnail a {
  display: block;
}
.list-product .thumbnail a img {
  width: 100%;
}
.list-product .content {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 calc(100% - 140px);
  -ms-flex: 1 0 calc(100% - 140px);
  flex: 1 0 calc(100% - 140px);
}
.list-product .content .title {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 12px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.list-product .content .title a {
  color: #7e7e7e;
}
.list-product .content .title a:hover {
  color: #333;
}
.list-product .content .price {
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 8px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  color: #333;
}
.list-product .content .price:last-child {
  margin-bottom: 0;
}
.list-product .content .price span.old {
  text-decoration: line-through;
  color: #aaa;
}
.list-product .content .price span.new {
  margin-left: 10px;
  color: #f8796c;
}
.list-product .content .ratting {
  line-height: 1;
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.list-product .content .ratting::before {
  font-family: "Font Awesome 5 Free";
  font-size: 11px;
  font-weight: 300;
  line-height: 1;
  content: "    ";
  color: #aaa;
}
.list-product .content .ratting .rate {
  position: absolute;
  top: 0;
  left: 0;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  overflow: hidden;
  white-space: nowrap;
  color: #f5cc26;
}
.list-product .content .ratting .rate::before {
  font-family: "Font Awesome 5 Free";
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  content: "    ";
}
[data-name="mojs-shape"] {
  z-index: 99;
}
.product-deal-image img {
  -webkit-animation: dealImage 2s linear infinite alternate both;
  animation: dealImage 2s linear infinite alternate both;
}
@-webkit-keyframes dealImage {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-40px);
    transform: translateY(-40px);
  }
}
@keyframes dealImage {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-40px);
    transform: translateY(-40px);
  }
}
.product-deal-content {
  max-width: 525px;
}
.product-deal-content .title {
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 20px;
}
.product-deal-content .title::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
}
.product-deal-content .desc {
  max-width: 460px;
  margin-bottom: 30px;
}
.product-deal-content .countdown1 {
  margin-bottom: 55px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product-deal-content .title {
    font-size: 34px;
  }
  .product-deal-content .countdown1 {
    margin-bottom: 45px;
  }
}
@media only screen and (max-width: 767px) {
  .product-deal-content .title::after {
    display: none;
  }
}
@media only screen and (max-width: 575px) {
  .product-deal-content .title {
    font-size: 34px;
  }
  .product-deal-content .countdown1 {
    margin-bottom: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .product-deal-content .title {
    font-size: 28px;
  }
}
.product-images {
  position: relative;
}
.product-images.vertical {
  padding-left: 210px;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .product-images.vertical {
    padding-left: 140px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product-images.vertical {
    padding-left: 110px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product-images.vertical {
    padding-left: 155px;
  }
}
@media only screen and (max-width: 767px) {
  .product-images.vertical {
    padding-left: 110px;
  }
}
@media only screen and (max-width: 575px) {
  .product-images.vertical {
    padding-left: 95px;
  }
}
@media only screen and (max-width: 479px) {
  .product-images.vertical {
    padding-left: 75px;
  }
}
.product-gallery-popup {
  position: absolute;
  z-index: 9;
  top: 20px;
  right: 20px;
  width: 30px;
  padding: 0;
  text-align: center;
  color: #333;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.product-gallery-popup i {
  font-size: 24px;
  line-height: 1;
  display: block;
}
.product-video-popup {
  position: absolute;
  z-index: 9;
  top: 70px;
  right: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: #333;
  border: 1px solid #333;
  border-radius: 50%;
}
.product-video-popup i {
  font-size: 10px;
  line-height: 1;
  margin-left: 3px;
}
.product-video-popup:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  color: #333;
}
.toggle-360 {
  position: absolute;
  z-index: 9;
  top: 70px;
  right: 20px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.toggle-360:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.product-gallery-slider {
  margin: 0;
  padding: 0;
}
.product-gallery-slider .slick-slide > div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.product-gallery-slider .slick-dots {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
}
.product-zoom {
  display: block !important;
}
.product-zoom img:not(.zoomImg) {
  width: 100%;
}
.product-thumb-slider {
  margin: 30px 0 0;
  padding: 0;
}
.product-thumb-slider .slick-list {
  margin: 0 -15px;
}
.product-thumb-slider .slick-list .slick-slide {
  padding: 0 15px;
}
.product-thumb-slider .slick-list .slick-slide > div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.product-thumb-slider .slick-list .slick-slide.slick-current .item {
  border-color: #333;
}
.product-thumb-slider .item {
  margin-bottom: 1px;
  border: 1px solid rgba(0, 0, 0, 0);
}
.product-thumb-slider .item img {
  width: 100%;
}
.product-thumb-slider-vertical {
  position: absolute;
  top: 0;
  left: 0;
  width: 195px;
  margin: 0;
  padding: 0 0 75px;
}
.product-thumb-slider-vertical .slick-arrow {
  top: auto;
  bottom: 0;
  width: calc(50% - 3px);
  height: 30px;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 0.7;
  color: #fff;
  border-radius: 500px;
  background-color: #7e7e7e;
}
.product-thumb-slider-vertical .slick-arrow.slick-prev {
  left: 0;
}
.product-thumb-slider-vertical .slick-arrow.slick-next {
  right: 1px;
}
.product-thumb-slider-vertical .slick-arrow i {
  font-size: 14px;
}
.product-thumb-slider-vertical:hover .slick-arrow.slick-next {
  right: 1px;
}
.product-thumb-slider-vertical .slick-list {
  margin: 0 0 -10px;
}
.product-thumb-slider-vertical .slick-list .slick-slide {
  padding: 0 0 10px;
}
.product-thumb-slider-vertical .slick-list .slick-slide > div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.product-thumb-slider-vertical .slick-list .slick-slide.slick-current .item {
  border-color: #333;
}
.product-thumb-slider-vertical .item {
  margin-bottom: 1px;
  border: 1px solid rgba(0, 0, 0, 0);
}
.product-thumb-slider-vertical .item img {
  width: 100%;
}
@media only screen and (min-width: 1200px) and (max-width: 1499px) {
  .product-thumb-slider-vertical {
    width: 125px;
    padding-bottom: 60px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .product-thumb-slider-vertical {
    width: 95px;
    padding-bottom: 60px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .product-thumb-slider-vertical {
    width: 140px;
    padding-bottom: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .product-thumb-slider-vertical {
    width: 95px;
    padding-bottom: 60px;
  }
}
@media only screen and (max-width: 575px) {
  .product-thumb-slider-vertical {
    width: 80px;
    padding-bottom: 75px;
  }
  .product-thumb-slider-vertical .slick-arrow {
    right: 0;
    left: 0;
    width: 100% !important;
  }
  .product-thumb-slider-vertical .slick-arrow.slick-prev {
    bottom: 35px;
  }
}
@media only screen and (max-width: 575px) {
  .product-thumb-slider-vertical {
    width: 65px;
    padding-bottom: 50px;
  }
  .product-thumb-slider-vertical .slick-arrow {
    height: 20px;
  }
  .product-thumb-slider-vertical .slick-arrow.slick-prev {
    bottom: 25px;
  }
}
.product-summery {
  position: relative;
}
.product-summery-center {
  text-align: center;
}
.product-summery-center .product-ratings {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.product-summery-center .product-variations {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.product-summery-center .product-variations table tbody tr td.label {
  text-align: right;
}
.product-summery-center .product-variations table tbody tr td.value {
  text-align: left;
}
.product-summery-center .product-buttons {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.product-summery-center .product-brands .brands {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.product-summery-center .product-meta {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.product-summery-center .product-meta table tbody tr td.label {
  text-align: right;
}
.product-summery-center .product-meta table tbody tr td.value {
  text-align: left;
}
.product-nav {
  position: absolute;
  top: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.product-nav a {
  padding: 8px 0 10px;
  color: #7e7e7e;
}
.product-nav a + a {
  margin-left: 10px;
}
.product-nav a i {
  font-size: 24px;
  line-height: 1;
  display: block;
}
.product-nav a:hover {
  color: #333;
}
@media only screen and (max-width: 767px) {
  .product-nav {
    display: none;
  }
}
.product-ratings {
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 15px;
  padding: 13px 0;
}
.product-ratings .star-rating {
  font-size: 12px;
  position: relative;
  display: block;
  margin-right: 10px;
}
.product-ratings .star-rating::before {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  font-weight: 300;
  line-height: 1;
  content: "    ";
  color: #ababab;
}
.product-ratings .star-rating .rating-active {
  font-size: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  height: 100%;
}
.product-ratings .star-rating .rating-active::before {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  font-weight: 900;
  line-height: 1;
  content: "    ";
  white-space: nowrap;
  color: #f5cc26;
}
.product-ratings .review-link {
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #7e7e7e;
}
.product-ratings .review-link:hover {
  color: #333;
}
.product-title {
  font-size: 48px;
  font-weight: 400;
  line-height: 1.1675;
  margin-bottom: 25px;
}
@media only screen and (max-width: 575px) {
  .product-title {
    font-size: 36px;
  }
}
@media only screen and (max-width: 479px) {
  .product-title {
    font-size: 30px;
  }
}
.product-price {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.175;
  display: block;
  margin-bottom: 25px;
  color: #333;
}
.product-description {
  margin-bottom: 45px;
}
.product-description p {
  line-height: 1.565;
}
.group-product-list {
  margin-bottom: 10px;
}
.group-product-list .info-text {
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 15px;
}
.group-product-list .info-text:last-child {
  margin-bottom: 0;
}
.group-product-list .info-text span {
  font-weight: 700;
}
.group-product-list table {
  width: 100%;
  margin-bottom: 15px;
  border-top: 1px dotted #e5e5e5;
}
.group-product-list table:last-child {
  margin-bottom: 0;
}
.group-product-list table tbody tr td {
  font-weight: 500;
  padding: 10px 10px 10px 0;
  border-width: 0 0 1px 0;
  border-style: dotted;
  border-color: #e5e5e5;
  background-color: rgba(0, 0, 0, 0);
}
.group-product-list table tbody tr td.quantity {
  font-size: 13px;
  color: #333;
}
.group-product-list table tbody tr td.thumb {
  width: 50px;
}
.group-product-list table tbody tr td.title {
  font-size: 16px;
  font-weight: 500;
}
.group-product-list table tbody tr td.price {
  padding-right: 0;
}
.group-product-list table tbody tr td.price .pro-price {
  display: block;
  text-align: right;
}
.group-product-list table tbody tr td.price .pro-price span {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.group-product-list table tbody tr td.price .pro-price span.old {
  font-size: 13px;
  margin-right: 5px;
  text-decoration: line-through;
  opacity: 0.5;
}
@media only screen and (max-width: 479px) {
  .group-product-list table tbody tr td.price .pro-price span {
    display: block;
  }
}
.product-variations {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 30px;
}
.product-variations .label span {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
}
.product-variations table tbody tr td {
  padding-top: 10px;
  padding-bottom: 10px;
}
.product-variations table tbody tr td.label {
  width: 160px;
  padding-right: 40px;
}
@media only screen and (max-width: 575px) {
  .product-variations table tbody tr td.label {
    width: 120px;
  }
}
.product-sizes {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.product-sizes a {
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  margin-right: 15px;
  color: #ababab;
}
.product-sizes a:last-child {
  margin-right: 0;
}
.product-sizes a:hover {
  color: #333;
}
@media only screen and (max-width: 575px) {
  .product-sizes a {
    font-size: 18px;
  }
}
.product-colors {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.product-colors a {
  width: 18px;
  height: 18px;
  margin-right: 15px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.product-colors a:last-child {
  margin-right: 0;
}
.product-quantity {
  font-weight: 600;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 117px;
  padding: 10px 0;
  border-bottom: 2px solid #ccc;
}
.product-quantity .qty-btn {
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  color: #333;
}
.product-quantity .input-qty {
  font-size: 14px !important;
  line-height: 1;
  max-width: 88px;
  padding: 0 15px !important;
  text-align: center;
  border: none !important;
}
.product-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-bottom: 40px;
  margin-left: -15px;
}
.product-buttons .btn {
  margin-right: 15px;
  margin-bottom: 10px;
  margin-left: 15px;
}
@media only screen and (max-width: 479px) {
  .product-buttons {
    margin-right: -5px;
    margin-left: -5px;
  }
  .product-buttons .btn {
    margin-right: 5px;
    margin-left: 5px;
  }
  .product-buttons .btn-icon {
    width: 50px;
    padding: 12px;
  }
  .product-buttons .btn:not(.btn-icon) {
    padding: 12px 30px;
  }
}
.product-brands {
  margin-bottom: 30px;
}
.product-brands .title {
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  display: block;
  margin-bottom: 30px;
  text-transform: uppercase;
  color: #333;
}
.product-brands .brands {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0 -20px;
}
.product-brands .brands a {
  margin: 0 20px;
}
.product-brands .brands a img {
  opacity: 0.3;
}
.product-brands .brands a:hover img {
  opacity: 1;
}
.product-meta {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 20px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}
.product-meta .label span {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
}
.product-meta table tbody tr td {
  padding-top: 10px;
  padding-bottom: 10px;
}
.product-meta table tbody tr td.label {
  width: 160px;
  padding-right: 40px;
}
@media only screen and (max-width: 575px) {
  .product-meta table tbody tr td.label {
    width: 120px;
  }
}
.product-category {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.product-category li {
  font-size: 16px;
}
.product-category li:not(:last-child)::after {
  margin-right: 6px;
  content: ",";
}
.product-category li a:hover {
  color: #333;
}
.product-tags {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.product-tags li {
  font-size: 16px;
}
.product-tags li:not(:last-child)::after {
  margin-right: 6px;
  content: ",";
}
.product-tags li a:hover {
  color: #333;
}
.product-share {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.product-share a {
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 20px;
}
.product-share a:last-child {
  margin-right: 0;
}
.product-share a i {
  font-size: 16px;
  line-height: 1;
}
.product-share a:hover {
  color: #333;
}
.product-info-tab-list {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 -20px 60px;
}
.product-info-tab-list li {
  padding: 0 20px 20px;
}
.product-info-tab-list li a {
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  display: block;
  opacity: 0.2;
  color: #333;
}
.product-info-tab-list li a.active,
.product-info-tab-list li a:hover {
  opacity: 1;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px) {
  .product-info-tab-list {
    margin-right: -15px;
    margin-left: -15px;
  }
  .product-info-tab-list li {
    padding-right: 15px;
    padding-left: 15px;
  }
  .product-info-tab-list li a {
    font-size: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .product-info-tab-list {
    margin-right: -10px;
    margin-bottom: 30px;
    margin-left: -10px;
  }
  .product-info-tab-list li {
    padding-right: 10px;
    padding-left: 10px;
  }
  .product-info-tab-list li a {
    font-size: 24px;
  }
}
.product-review-wrapper {
  max-width: 820px;
  margin: auto;
}
.product-review-wrapper > .title {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  display: block;
  margin-bottom: 40px;
  text-align: center;
  color: #333;
}
.product-review-wrapper > .title:last-child {
  margin-bottom: 0;
}
.product-review-list {
  margin: 0 0 70px;
  padding-left: 0;
  list-style: none;
}
.product-review-list li {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e8e8e8;
}
@media only screen and (max-width: 767px) {
  .product-review-list {
    margin-bottom: 50px;
  }
}
.product-review {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.product-review .thumb {
  overflow: hidden;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  width: 70px;
  border-radius: 50%;
}
.product-review .thumb img {
  width: 100%;
}
.product-review .content {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 calc(100% - 70px);
  -ms-flex: 1 0 calc(100% - 70px);
  flex: 1 0 calc(100% - 70px);
  padding-left: 30px;
}
.product-review .content .ratings {
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 15px;
}
.product-review .content .ratings .star-rating {
  font-size: 12px;
  position: relative;
  display: block;
  margin-right: 10px;
}
.product-review .content .ratings .star-rating::before {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  font-weight: 300;
  line-height: 1;
  content: "    ";
  color: #ababab;
}
.product-review .content .ratings .star-rating .rating-active {
  font-size: 0;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  height: 100%;
}
.product-review .content .ratings .star-rating .rating-active::before {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  font-weight: 900;
  line-height: 1;
  content: "    ";
  white-space: nowrap;
  color: #f5cc26;
}
.product-review .content .meta {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 20px;
}
.product-review .content .meta .title {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  margin: 0;
}
.product-review .content .meta .date {
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin-left: 12px;
  color: #333;
}
.product-review .content .meta .date::before {
  margin-right: 10px;
  content: "/";
}
@media only screen and (max-width: 479px) {
  .product-review {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .product-review .content {
    padding-top: 20px;
    padding-left: 0;
  }
}
.review-form .note {
  font-size: 16px;
  margin-bottom: 25px;
}
.form-rating {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.form-rating .title {
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  display: block;
  margin-right: 40px;
  margin-bottom: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #333;
}
.form-rating .rating {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  line-height: 1;
  position: relative;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  color: #f5cc26;
}
.form-rating .rating::before {
  content: "    ";
}
.form-rating .rating .star {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.form-rating .rating .star::before {
  font-weight: 700;
  content: "    ";
}
.form-rating .rating:hover .star {
  opacity: 1;
}
.quickViewModal .modal-dialog {
  width: calc(100% - 30px);
  max-width: 1200px;
}
.quickViewModal .modal-dialog .modal-content {
  padding: 30px;
}
.quickViewModal .modal-dialog .modal-content .close {
  font-size: 30px;
  font-weight: 300;
  position: absolute;
  top: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
}
@media only screen and (min-width: 992px) {
  .quickViewModal .modal-dialog .modal-content .product-summery {
    position: absolute;
    right: 15px;
    left: 15px;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
  }
}
@media only screen and (max-width: 479px) {
  .quickViewModal .modal-dialog .modal-content {
    padding: 20px;
  }
}
.product-gallery-slider-quickview {
  margin: 0;
  padding: 0;
}
.product-gallery-slider-quickview .slick-list {
  margin: 0;
}
.product-gallery-slider-quickview .slick-list .slick-slide > div {
  padding: 0;
}
.product-gallery-slider-quickview .slick-dots {
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
}
.blog .image {
  margin-bottom: 30px;
}
.blog .image a {
  display: block;
}
.blog .image a img {
  width: 100%;
}
.blog .content .meta {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;
}
.blog .content .meta li {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-right: 25px;
}
.blog .content .meta li:last-child {
  margin-right: 0;
}
.blog .content .meta li i {
  margin-right: 8px;
  color: #999;
}
.blog .content .meta li a {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.blog .content .meta li a:hover {
  color: #333;
  border-color: rgba(51, 51, 51, 0.2);
}
.blog .content .title {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
}
.blog .content .title a:hover {
  color: #333;
}
.blog .content .desc {
  margin-bottom: 20px;
}
.blog .content .desc p {
  font-size: 16px;
}
.blog .content .desc p:last-child {
  margin-bottom: 0;
}
.blog .content .link {
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
}
.blog .content .link:hover {
  border-color: #333;
}
.single-blog .image {
  margin-bottom: 30px;
}
.single-blog .image a {
  display: block;
}
.single-blog .image a img {
  width: 100%;
}
.single-blog .content:not(:last-child) {
  margin-bottom: 60px;
}
.single-blog .category {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;
}
.single-blog .category li {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
}
.single-blog .category li::after {
  margin: 0 7px;
  content: "/";
}
.single-blog .category li:last-child::after {
  display: none;
}
.single-blog .category li a {
  padding-bottom: 1px;
  text-transform: uppercase;
  color: #ababab;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
}
.single-blog .category li a:hover {
  color: #333;
  border-color: rgba(51, 51, 51, 0.2);
}
.single-blog .title {
  font-weight: 400;
  margin-bottom: 25px;
}
.single-blog .meta {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-left: 0;
  list-style: none;
}
.single-blog .meta li {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 10px;
}
.single-blog .meta li:not(:last-child) {
  margin-right: 25px;
}
.single-blog .meta li i {
  margin-right: 8px;
  color: #999;
}
.single-blog .meta li a {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.single-blog .meta li a:hover {
  color: #333;
  border-color: rgba(51, 51, 51, 0.2);
}
.single-blog .tags {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 30px;
  list-style: none;
}
.single-blog .tags li {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
}
.single-blog .tags li.icon {
  font-size: 14px;
  line-height: 1;
  position: absolute;
  top: 5px;
  left: 0;
}
.single-blog .tags li:not(:last-child):not(.icon):after {
  margin-right: 3px;
  content: ",";
}
.single-blog .tags li i {
  margin-right: 8px;
  color: #999;
}
.single-blog .tags li a {
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.single-blog .tags li a:hover {
  color: #333;
  border-color: rgba(51, 51, 51, 0.2);
}
.single-blog .desc {
  margin-bottom: 20px;
}
.single-blog .desc p {
  font-size: 16px;
  margin-bottom: 25px;
}
.single-blog .desc p:last-child {
  margin-bottom: 0;
}
.single-blog .desc blockquote {
  margin: 40px 0 40px 60px;
}
.single-blog .blog-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.single-blog .post-share {
  font-size: 16px;
  font-weight: 400;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.single-blog .post-share .toggle {
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-left: 20px;
  padding: 3px 0;
  cursor: pointer;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  border: 2px solid #ededed;
  border-radius: 100%;
}
.single-blog .post-share .toggle i {
  font-size: 18px;
}
.single-blog .post-share .toggle:hover {
  color: #fff;
  border-color: #333;
  background-color: #333;
}
.single-blog .post-share .social-list {
  line-height: 1;
  position: absolute;
  right: 0;
  bottom: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  visibility: hidden;
  margin: 0;
  padding: 5px;
  list-style: none;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.single-blog .post-share .social-list::before {
  position: absolute;
  right: 19px;
  bottom: -3px;
  width: 10px;
  height: 10px;
  content: "";
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: #fff;
}
.single-blog .post-share .social-list li {
  line-height: inherit;
}
.single-blog .post-share .social-list li a {
  line-height: 1;
  padding: 5px 8px;
}
.single-blog .post-share .social-list li a i {
  font-size: 14px;
  line-height: 1;
}
.single-blog .post-share .social-list li a:hover {
  color: #333;
}
.single-blog .post-share.active .toggle {
  color: #fff;
  border-color: #333;
  background-color: #333;
}
.single-blog .post-share.active .social-list {
  visibility: visible;
  margin-bottom: 10px;
  opacity: 1;
}
@media only screen and (max-width: 575px) {
  .single-blog .title {
    font-size: 24px;
  }
  .single-blog .desc blockquote {
    margin: 30px 0 30px 30px;
  }
}
.blog-author {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
.blog-author .thumbnail {
  width: 90px;
}
.blog-author .thumbnail img {
  width: 90px;
  height: 90px;
  border-radius: 100%;
}
.blog-author .thumbnail .social {
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 15px;
}
.blog-author .thumbnail .social a {
  line-height: inherit;
  padding: 5px;
}
.blog-author .thumbnail .social a i {
  font-size: 14px;
  line-height: 1;
}
.blog-author .thumbnail .social a:hover {
  color: #333;
}
.blog-author .content {
  width: calc(100% - 90px);
  padding-right: 50px;
  padding-left: 20px;
}
.blog-author .content .name {
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  display: block;
  margin-bottom: 15px;
  color: #333;
}
.blog-author .content p {
  font-size: 16px;
  font-weight: 400;
}
@media only screen and (max-width: 575px) {
  .blog-author .content {
    width: 100%;
    padding-top: 20px;
    padding-right: 0;
    padding-left: 0;
  }
}
.related-blog {
  margin-bottom: 60px;
}
.comment-list,
.child-comment {
  margin-bottom: 60px !important;
  padding-left: 0;
  list-style: none;
}
.child-comment {
  margin-bottom: 0 !important;
}
.child-comment .comment {
  padding-left: 110px;
}
@media only screen and (max-width: 575px) {
  .child-comment .comment {
    padding-left: 0;
  }
}
.comment {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e8e8e8;
}
.comment .thumbnail {
  width: 90px;
}
.comment .thumbnail img {
  width: 90px;
  height: 90px;
  border-radius: 100%;
}
.comment .content {
  width: calc(100% - 90px);
  padding-right: 50px;
  padding-left: 20px;
}
.comment .content .name {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  display: block;
  margin-bottom: 15px;
}
.comment .content p {
  font-size: 16px;
  font-weight: 400;
}
.comment .content .actions {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.comment .content .actions .date {
  font-size: 14px;
  font-weight: 500;
}
.comment .content .actions .date::after {
  margin: 0 15px;
  content: "|";
}
.comment .content .actions .reply-link {
  font-size: 16px;
  font-weight: 700;
}
.comment .content .actions .reply-link:hover {
  color: #333;
}
@media only screen and (max-width: 575px) {
  .comment .content {
    width: 100%;
    padding-top: 20px;
    padding-right: 0;
    padding-left: 0;
  }
}
.team .image {
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}
.team .image img {
  width: 100%;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.team .image::before {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  visibility: hidden;
  width: 100%;
  height: 100%;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background-color: rgba(51, 51, 51, 0.8);
}
.team .image::after {
  position: absolute;
  z-index: 3;
  top: 20px;
  left: 20px;
  visibility: hidden;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0);
}
.team .image .social {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  visibility: hidden;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 0;
}
.team .image .social a {
  line-height: 1.25;
  display: block;
  margin: 0 10px;
  padding: 0 5px;
  color: #fff;
}
.team .image .social a i {
  font-size: 18px;
}
.team .image .social a:hover {
  color: #f8796c;
}
.team .content .name {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 600;
  color: #333;
}
.team .content .title {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #7e7e7e;
}
.team:hover .image img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.team:hover .image::before {
  visibility: visible;
  opacity: 1;
}
.team:hover .image::after {
  visibility: visible;
  opacity: 1;
}
.team:hover .image .social {
  visibility: visible;
  opacity: 1;
}
@media only screen and (max-width: 767px) {
  .testimonial-carousel.slick-slider {
    margin-right: -10px;
    margin-left: -10px;
    padding-right: 10px;
    padding-left: 10px;
  }
}
.testimonial {
  padding-right: 20px;
}
.testimonial p {
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
  margin-bottom: 48px;
  opacity: 0.8;
  color: #454545;
}
.testimonial .author {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.testimonial .author img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
}
.testimonial .author .content {
  text-align: left;
}
.testimonial .author .content .name {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 18px;
  color: #333;
}
.testimonial .author .content .title {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  display: block;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #7e7e7e;
}
@media only screen and (max-width: 767px) {
  .testimonial {
    text-align: center;
  }
  .testimonial p {
    line-height: 1.5;
  }
  .testimonial .author {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}
.testimonial2 {
  text-align: center;
}
.testimonial2 p {
  font-family: "Marcellus";
  font-size: 24px;
  font-weight: 400;
  line-height: 1.75;
  max-width: 800px;
  margin-right: auto;
  margin-bottom: 40px;
  margin-left: auto;
  opacity: 0.8;
  color: #454545;
}
.testimonial2 .author {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.testimonial2 .author img {
  width: 100px;
  height: 100px;
  margin-right: 30px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
}
.testimonial2 .author .content {
  text-align: left;
}
.testimonial2 .author .content .name {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 18px;
  color: #333;
}
.testimonial2 .author .content .title {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  display: block;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #7e7e7e;
}
@media only screen and (max-width: 767px) {
  .testimonial2 p {
    font-size: 20px;
  }
  .testimonial2 .author img {
    width: 80px;
    height: 80px;
  }
}
@media only screen and (max-width: 575px) {
  .testimonial2 p {
    font-size: 18px;
  }
}
.instafeed-carousel .slick-list {
  margin-right: -7.5px !important;
  margin-left: -7.5px !important;
}
.instafeed-carousel .slick-list .slick-slide {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 7.5px;
  padding-left: 7.5px;
}
.instafeed-carousel .slick-list .slick-slide > * {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0 !important;
}
@media only screen and (max-width: 767px) {
  .instafeed-carousel {
    overflow: hidden;
  }
  .instafeed-carousel .slick-slider {
    margin-right: -10px;
    margin-left: -10px;
    padding-right: 10px;
    padding-left: 10px;
  }
}
.instafeed-grid {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
}
.instafeed-grid .instafeed-item {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 25%;
  -ms-flex: 1 0 25%;
  flex: 1 0 25%;
  max-width: 25%;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .instafeed-grid .instafeed-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 33.3333%;
    -ms-flex: 1 0 33.3333%;
    flex: 1 0 33.3333%;
    max-width: 33.3333%;
  }
}
@media only screen and (max-width: 767px) {
  .instafeed-grid .instafeed-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 50%;
    -ms-flex: 1 0 50%;
    flex: 1 0 50%;
    max-width: 50%;
  }
}
@media only screen and (max-width: 479px) {
  .instafeed-grid .instafeed-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 100%;
    -ms-flex: 1 0 100%;
    flex: 1 0 100%;
    max-width: 100%;
  }
}
.instafeed-item {
  position: relative;
  display: block;
}
.instafeed-item::before {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background-color: #000;
}
.instafeed-item img {
  width: 100%;
}
.instafeed-item i {
  font-size: 20px;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
  opacity: 0;
  color: #fff;
}
.instafeed-item:hover::before {
  opacity: 0.5;
}
.instafeed-item:hover i {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}
.countdown1 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}
.countdown1 .count {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 25%;
  -ms-flex: 1 0 25%;
  flex: 1 0 25%;
  max-width: 25%;
  padding: 0 5px;
}
.countdown1 .count span {
  display: block;
}
.countdown1 .count span.amount {
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 27px;
  color: #333;
}
.countdown1 .count span.amount::after {
  font-weight: 300;
  float: right;
  margin-top: -4px;
  content: ":";
  color: #7e7e7e;
}
.countdown1 .count span.period {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  color: #7e7e7e;
}
.countdown1 .count:last-child .amount::after {
  display: none;
}
@media only screen and (max-width: 479px) {
  .countdown1 .count span.amount {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .countdown1 .count span.period {
    font-size: 12px;
  }
}
.countdown2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.countdown2 .count {
  margin-right: 30px;
  padding-right: 15px;
}
.countdown2 .count:last-child {
  margin-right: 0;
  padding-right: 0;
}
.countdown2 .count span {
  display: block;
  text-align: center;
}
.countdown2 .count span.amount {
  font-family: "Marcellus";
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 27px;
  color: #f8796c;
}
.countdown2 .count span.amount::after {
  font-weight: 100;
  float: right;
  margin-top: -4px;
  margin-right: -20px;
  content: ":";
  color: #7e7e7e;
}
.countdown2 .count span.period {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  color: #7e7e7e;
}
.countdown2 .count:last-child .amount::after {
  display: none;
}
.countdown2.primary2 .count span.amount {
  color: #72a499;
}
@media only screen and (max-width: 479px) {
  .countdown2 .count {
    margin-right: 20px;
    padding-right: 10px;
  }
  .countdown2 .count span.amount {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .countdown2 .count span.amount::after {
    margin-right: -15px;
  }
  .countdown2 .count span.period {
    font-size: 12px;
  }
}
.portfolio {
  position: relative;
  overflow: hidden;
}
.portfolio .thumbnail {
  position: relative;
}
.portfolio .thumbnail::before {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  opacity: 0;
  background-color: #f4ede7;
}
.portfolio .thumbnail img {
  width: 100%;
}
.portfolio .content {
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 0;
  padding: 20px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  text-align: center;
  opacity: 0;
  opacity: 0;
}
.portfolio .content .title {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
}
.portfolio .content .title a:hover {
  color: #333;
}
.portfolio .content .desc {
  margin-bottom: 20px;
}
.portfolio .content .desc p {
  font-size: 16px;
  font-weight: 400;
}
.portfolio .content .link a {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 2px;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
}
.portfolio .content .link a:hover {
  border-color: #333;
}
.portfolio:hover .thumbnail::before {
  opacity: 1;
}
.portfolio:hover .content {
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 1;
}
@media only screen and (max-width: 767px) {
  .portfolio .content {
    position: absolute;
    z-index: 9;
    top: 50%;
    left: 0;
    padding: 20px;
    -webkit-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
    text-align: center;
    opacity: 0;
    opacity: 0;
  }
  .portfolio .content .title {
    margin-bottom: 10px;
  }
  .portfolio .content .desc {
    margin-bottom: 10px;
  }
}
.portfolio-image {
  overflow: hidden;
}
.portfolio-image img {
  width: 100%;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.portfolio-image:hover img {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.portfolio-content .title {
  font-weight: 400;
  margin-bottom: 25px;
}
.portfolio-content .desc p {
  font-size: 16px;
  margin-bottom: 20px;
}
.portfolio-content .meta {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.portfolio-content .meta li {
  padding: 10px 0;
  border-top: 1px solid #eee;
}
.portfolio-content .meta li span.name {
  font-weight: 500;
  color: #333;
}
.portfolio-content .meta li span.value.category a:not(:last-child)::after,
.portfolio-content .meta li span.value.tags a:not(:last-child)::after {
  margin-right: 1px;
  content: ",";
}
.portfolio-content .meta li span.value.social a {
  padding: 0 10px;
}
.portfolio-content .meta li span.value a:hover {
  color: #333;
}
@media only screen and (max-width: 575px) {
  .portfolio-content .title {
    font-size: 24px;
  }
}
.portfolio-overview p {
  font-size: 16px;
}
.single-widget {
  float: left;
  width: 100%;
}
.widget-title {
  font-family: "Futura";
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 20px;
  color: #333;
}
.widget-search form {
  position: relative;
}
.widget-search form input {
  font-size: 16px;
  line-height: 1.25;
  width: 100%;
  padding: 8px 36px 8px 0 !important;
  color: dimgray;
  border: 2px solid rgba(0, 0, 0, 0);
  border-bottom-color: #ccc;
}
.widget-search form button {
  position: absolute;
  top: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.widget-menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding-left: 0;
  list-style: none;
}
.widget-menu li {
  font-size: 16px;
  font-weight: 400;
  margin: 0 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.widget-menu li a {
  color: #7e7e7e;
}
.widget-menu li a:hover {
  color: #333;
}
@media only screen and (max-width: 767px) {
  .widget-menu li {
    font-size: 14px;
  }
}
.widget-about img {
  margin-bottom: 20px;
}
.widget-about img:last-child {
  margin-bottom: 0;
}
.widget-about p {
  line-height: 1.5;
  max-width: 400px;
}
.widget-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.widget-list li {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.widget-list li + li {
  margin-top: 25px;
}
.widget-list li i {
  width: 35px;
}
.widget-list li a {
  color: #999;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
.widget-list li a:hover {
  color: #333;
  border-color: rgba(51, 51, 51, 0.2);
}
.widget-list li .count {
  margin-left: auto;
  color: #999;
}
.widget-colors {
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -10px -20px;
  padding-left: 0;
  list-style: none;
}
.widget-colors li {
  margin: 0 10px 20px;
}
.widget-colors li a span {
  display: block;
  width: 20px;
  height: 20px;
  text-indent: -9999px;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
}
.widget-products {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.widget-products .product {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.widget-products .product + .product {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.widget-products .product .thumbnail {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 120px;
  -ms-flex: 0 0 120px;
  flex: 0 0 120px;
  padding-right: 20px;
}
.widget-products .product .thumbnail a {
  display: block;
}
.widget-products .product .thumbnail a img {
  width: 100%;
}
.widget-products .product .content {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 calc(100% - 120px);
  -ms-flex: 1 0 calc(100% - 120px);
  flex: 1 0 calc(100% - 120px);
}
.widget-products .product .content .title {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 12px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.widget-products .product .content .title a {
  color: #7e7e7e;
}
.widget-products .product .content .title a:hover {
  color: #333;
}
.widget-products .product .content .price {
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 8px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  color: #333;
}
.widget-products .product .content .price:last-child {
  margin-bottom: 0;
}
.widget-products .product .content .price span.old {
  text-decoration: line-through;
  color: #aaa;
}
.widget-products .product .content .price span.new {
  margin-left: 10px;
  color: #f8796c;
}
.widget-products .product .content .ratting {
  line-height: 1;
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
.widget-products .product .content .ratting::before {
  font-family: "Font Awesome 5 Free";
  font-size: 11px;
  font-weight: 300;
  line-height: 1;
  content: "    ";
  color: #aaa;
}
.widget-products .product .content .ratting .rate {
  position: absolute;
  top: 0;
  left: 0;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  overflow: hidden;
  white-space: nowrap;
  color: #f5cc26;
}
.widget-products .product .content .ratting .rate::before {
  font-family: "Font Awesome 5 Free";
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  content: "    ";
}
.widget-blogs {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.widget-blogs .widget-blog {
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.widget-blogs .widget-blog + .widget-blog {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.widget-blogs .widget-blog .thumbnail {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 120px;
  -ms-flex: 0 0 120px;
  flex: 0 0 120px;
  padding-right: 20px;
}
.widget-blogs .widget-blog .thumbnail a {
  display: block;
}
.widget-blogs .widget-blog .thumbnail a img {
  width: 100%;
}
.widget-blogs .widget-blog .content {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 calc(100% - 120px);
  -ms-flex: 1 0 calc(100% - 120px);
  flex: 1 0 calc(100% - 120px);
}
.widget-blogs .widget-blog .content .title {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 16px;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.widget-blogs .widget-blog .content .title a {
  color: #333;
}
.widget-blogs .widget-blog .content .title a:hover {
  color: #333;
}
.widget-blogs .widget-blog .content .date {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  display: block;
}
.widget-tags a {
  font-size: 16px;
  font-weight: 400;
  position: relative;
  color: #7e7e7e;
}
.widget-tags a::before {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: calc(100% - 18px);
  height: 1px;
  content: "";
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  opacity: 0;
  background-color: #333;
}
.widget-tags a::after {
  font-size: 16px;
  margin: 0 8px;
  content: "/";
  color: #7e7e7e;
}
.widget-tags a:hover {
  color: #333;
}
.widget-tags a:hover::before {
  opacity: 0.2;
}
.widget-social {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -10px;
  padding-left: 0;
  list-style: none;
}
.widget-social li {
  margin: 0 10px;
}
.widget-social li a {
  line-height: 1.25;
  display: block;
  padding: 0 5px;
  color: #333;
}
.widget-social li a i {
  font-size: 18px;
}
.widget-subscibe {
  position: relative;
  width: 100%;
  max-width: 570px;
  margin: auto;
}
.widget-subscibe input[type="email"] {
  font-size: 16px;
  width: 100%;
  height: 50px;
  padding-top: 10px;
  padding-right: 170px;
  padding-bottom: 10px;
  padding-left: 20px;
  letter-spacing: 0.03em;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  background-color: #fff;
}
.widget-subscibe input[type="email"]::-webkit-input-placeholder {
  color: #ababab;
}
.widget-subscibe input[type="email"]:-moz-placeholder {
  color: #ababab;
}
.widget-subscibe input[type="email"]::-moz-placeholder {
  color: #ababab;
}
.widget-subscibe input[type="email"]:-ms-input-placeholder {
  color: #ababab;
}
.widget-subscibe input[type="email"]:focus {
  border-color: rgba(0, 0, 0, 0) !important;
}
.widget-subscibe .btn {
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  letter-spacing: 1.5px;
}
.widget-subscibe .btn:hover {
  border-color: rgba(0, 0, 0, 0) !important;
  background-color: #72a499 !important;
}
@media only screen and (max-width: 767px) {
  .widget-subscibe input[type="email"] {
    width: 510px;
  }
}
@media only screen and (max-width: 575px) {
  .widget-subscibe input[type="email"] {
    width: 420px;
  }
}
@media only screen and (max-width: 479px) {
  .widget-subscibe input[type="email"] {
    width: 100%;
    padding-right: 20px;
    text-align: center;
  }
  .widget-subscibe .btn {
    position: static;
    width: 100%;
    margin-top: 10px;
  }
}
.widget-subscibe2 {
  position: relative;
  max-width: 570px;
  margin: 0;
}
.widget-subscibe2 input[type="email"] {
  font-size: 16px;
  width: 100%;
  height: 50px;
  padding-top: 10px;
  padding-right: 150px;
  padding-bottom: 10px;
  padding-left: 0;
  letter-spacing: 0.03em;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #ccc;
  border-radius: 0;
  background-color: rgba(0, 0, 0, 0);
}
.widget-subscibe2 input[type="email"]::-webkit-input-placeholder {
  color: #ababab;
}
.widget-subscibe2 input[type="email"]:-moz-placeholder {
  color: #ababab;
}
.widget-subscibe2 input[type="email"]::-moz-placeholder {
  color: #ababab;
}
.widget-subscibe2 input[type="email"]:-ms-input-placeholder {
  color: #ababab;
}
.widget-subscibe2 input[type="email"]:focus {
  border-color: rgba(0, 0, 0, 0) !important;
}
.widget-subscibe2 .btn {
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  padding: 10px;
  letter-spacing: 1.5px;
  border: 0;
  border-bottom: 2px solid #333;
  border-radius: 0;
}
.widget-subscibe2 .btn:hover {
  color: #72a499 !important;
  border-color: #72a499 !important;
}
.widget-contact .email {
  font-size: 15px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 12px;
}
.widget-contact .phone {
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  color: #333;
}
.widget-contact .app-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0 -10px;
}
.widget-contact .app-buttons:not(:first-child) {
  margin-top: 35px;
}
.widget-contact .app-buttons a {
  margin: 0 10px;
}
.widget-contact .app-buttons a img:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}
.widget-contact2 p {
  font-size: 16px;
  font-weight: 400;
}
.footer1-section {
  background-color: #f4ede7;
}
.footer1-logo {
  margin-bottom: 60px;
}
@media only screen and (max-width: 767px) {
  .footer1-logo {
    margin-bottom: 40px;
  }
}
.footer1-menu {
  margin-bottom: 40px;
}
.footer1-subscribe {
  margin-bottom: 55px;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .footer1-subscribe {
    margin-bottom: 40px;
  }
}
.footer1-social {
  margin-bottom: 50px;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .footer1-social {
    margin-bottom: 30px;
  }
}
.footer2-section {
  background-color: #f8f8f8;
}
.footer2-copyright {
  padding: 20px 0;
  color: #999;
  border-top: 1px solid #ebebeb;
  background-color: #f8f8f8;
}
.copyright {
  font-size: 16px;
  font-weight: 400;
}
.copyright strong {
  color: #333;
}
.copyright a:hover {
  color: #333;
}
.shop-toolbar {
  padding-top: 25px;
  padding-bottom: 25px;
}
.shop-product-filter {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -20px -10px;
}
.shop-product-filter button {
  font-size: 18px;
  line-height: 1;
  margin: 0 20px 10px;
  padding: 0;
  text-transform: uppercase;
  color: #ababab;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.shop-product-filter button:hover,
.shop-product-filter button.active {
  color: #333;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .shop-product-filter {
    margin: 0 -15px -10px;
  }
  .shop-product-filter button {
    font-size: 16px;
    margin: 0 15px 10px;
  }
}
@media only screen and (max-width: 575px) {
  .shop-product-filter {
    margin: 0 -10px -10px;
  }
  .shop-product-filter button {
    font-size: 14px;
    margin: 0 10px 10px;
  }
}
.shop-toolbar-controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -15px;
  padding-left: 0;
  list-style: none;
}
.shop-toolbar-controls > li {
  margin: 0 15px;
}
@media only screen and (min-width: 992px) and (max-width: 1199px),
  only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .shop-toolbar-controls {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
}
.product-sorting {
  position: relative;
  z-index: 9;
}
.product-sorting .nice-select {
  height: auto;
  padding-left: 0;
  border: 0;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
}
.product-sorting .nice-select::after {
  font-family: "Font Awesome 5 Free";
  font-weight: 700;
  line-height: 1;
  top: 50%;
  right: 8px;
  bottom: auto;
  width: auto;
  height: auto;
  margin: 0;
  content: "";
  -webkit-transform: rotate(0) translateY(-50%);
  -ms-transform: rotate(0) translateY(-50%);
  transform: rotate(0) translateY(-50%);
  color: #ababab;
  border: 0;
}
.product-sorting .nice-select .current {
  font-size: 16px;
  line-height: 28px;
  display: block;
  padding-bottom: 4px;
}
.product-sorting .nice-select .list {
  margin-top: 10px;
  padding: 15px;
  -webkit-transform: scale(1) translate(0, 0);
  -ms-transform: scale(1) translate(0, 0);
  transform: scale(1) translate(0, 0);
  border-radius: 0;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
}
.product-sorting .nice-select .list li {
  font-size: 16px;
  font-weight: 400 !important;
  line-height: 1.25;
  min-height: auto;
  padding: 8px;
}
.product-sorting .nice-select .list li.selected {
  color: #333;
  background-color: rgba(0, 0, 0, 0);
}
.product-sorting .nice-select .list li:hover {
  -webkit-transform: translateX(5px);
  -ms-transform: translateX(5px);
  transform: translateX(5px);
  background-color: rgba(0, 0, 0, 0);
}
.product-sorting .nice-select.open .list {
  margin-top: 0;
}
.product-column-toggle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 0 -10px;
}
.product-column-toggle .toggle {
  margin: 0 10px;
  padding: 0;
  color: #ababab;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.product-column-toggle .toggle i {
  font-size: 14px;
}
.product-column-toggle .toggle:hover,
.product-column-toggle .toggle.active {
  color: #333;
}
.product-filter-toggle {
  font-size: 16px;
  font-weight: 400;
  line-height: 2;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: dimgray;
}
.product-filter-toggle::before {
  font-family: "Font Awesome 5 Free";
  font-size: 13px;
  line-height: 1;
  margin-right: 6px;
  margin-bottom: -3px;
  font-weight: 900;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.product-filter-toggle::after {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  background-color: #333;
}
.product-filter-toggle:hover {
  color: #333;
}
.product-filter-toggle:hover::after {
  right: auto;
  left: 0;
  width: 100%;
}
.product-filter-toggle.active {
  color: #333;
}
.product-filter-toggle.active::before {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.product-filter-toggle.active::after {
  right: auto;
  left: 0;
  width: 100%;
}
.product-filter {
  display: none;
  padding-top: 50px;
  padding-bottom: 50px;
}
.product-filter-widget-title {
  font-family: "Marcellus";
  margin-bottom: 30px;
}
.product-filter-widget {
  max-height: 210px;
}
.cart-wishlist-table {
  margin-bottom: 25px;
  border: 1px solid #ededed;
}
.cart-wishlist-table thead tr th {
  padding: 12px 16px;
  white-space: nowrap;
  border-top: 0;
  border-bottom: 1px solid #ededed !important;
}
.cart-wishlist-table thead tr th:first-child {
  padding-left: 25px;
}
.cart-wishlist-table tbody tr {
  position: relative;
}
.cart-wishlist-table tbody tr td {
  padding: 25px 10px 25px 25px;
  vertical-align: middle;
  border-color: #ededed;
}
.cart-wishlist-table tbody tr td.thumbnail {
  width: 110px;
  min-width: 110px;
}
.cart-wishlist-table tbody tr td.thumbnail a {
  display: block;
}
.cart-wishlist-table tbody tr td.name a {
  font-size: 16px;
  font-weight: 400;
  color: dimgray;
}
.cart-wishlist-table tbody tr td.name a:hover {
  color: #333;
}
.cart-wishlist-table tbody tr td.price,
.cart-wishlist-table tbody tr td.subtotal {
  font-size: 14px;
  font-weight: 600;
}
.cart-wishlist-table tbody tr td.remove .btn {
  font-size: 24px;
  padding: 5px 10px;
  color: dimgray;
}
.cart-wishlist-table tbody tr td.remove .btn:hover {
  color: #f44336;
}
@media only screen and (max-width: 767px) {
  .cart-wishlist-table thead {
    display: none;
  }
  .cart-wishlist-table tbody tr td {
    display: block;
    width: 100% !important;
    margin-bottom: 15px;
    padding: 0;
    text-align: center;
  }
  .cart-wishlist-table tbody tr td:not(:first-child) {
    border-top: 0;
  }
  .cart-wishlist-table tbody tr td.thumbnail {
    padding-top: 20px;
  }
  .cart-wishlist-table tbody tr td .product-quantity {
    margin: auto;
  }
  .cart-wishlist-table tbody tr td.remove {
    position: absolute;
    z-index: 9;
    top: 0;
    right: 0;
    width: auto !important;
  }
  .cart-wishlist-table tbody tr:first-child td:first-child {
    border-top: 0;
  }
}
.cart-coupon {
  position: relative;
}
.cart-coupon input[type="text"] {
  width: 300px;
  padding-right: 30px;
}
.cart-coupon .btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 0;
}
.cart-coupon .btn i {
  font-size: 20px;
}
.cart-totals {
  float: right;
  width: 400px;
  padding: 40px 30px;
  text-align: center;
  background-color: #f7f7f7;
}
.cart-totals .title {
  margin-bottom: 25px;
}
.cart-totals table {
  width: 100%;
  margin-bottom: 30px;
}
.cart-totals table tbody tr {
  font-family: "Futura";
  font-weight: 700;
  color: #333;
}
.cart-totals table tbody tr.subtotal td {
  font-size: 14px;
}
.cart-totals table tbody tr.total td {
  font-size: 24px;
}
.cart-totals table tbody tr th {
  font-size: 18px;
  padding: 15px 10px;
  text-align: left;
}
.cart-totals table tbody tr td {
  padding: 15px 10px;
  text-align: right;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .cart-totals {
    width: 100%;
  }
}
.checkout-coupon {
  font-weight: 400;
  margin-bottom: 50px;
}
.checkout-coupon .coupon-toggle {
  margin-bottom: 20px;
}
.checkout-coupon .coupon-toggle a {
  color: #333;
  border-bottom: 1px solid #333;
}
.coupon-form {
  max-width: 500px;
  margin-bottom: 0;
  padding: 30px;
  background-color: #f8f9fa;
}
.coupon-form p {
  font-size: 16px;
  margin-bottom: 25px;
}
.coupon-form form {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.coupon-form form input {
  font-weight: 400;
}
.coupon-form form .btn {
  white-space: nowrap;
}
@media only screen and (max-width: 575px) {
  .coupon-form form {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .coupon-form form .btn {
    width: 100%;
  }
}
.checkout-form input,
.checkout-form textarea {
  font-weight: 400 !important;
}
.checkout-form .select2-selection__rendered {
  font-weight: 400;
}
.order-review .table {
  margin: 0;
  text-align: left;
  border-bottom: 1px solid #ededed;
}
.order-review .table thead tr th {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 16px 10px;
  text-transform: none;
  color: #333;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.order-review .table thead tr th.total {
  font-size: 18px;
  text-align: right;
}
.order-review .table tbody tr td {
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  border-color: #ededed;
}
.order-review .table tbody tr td.name {
  color: #7e7e7e;
}
.order-review .table tbody tr td.total {
  font-size: 14px;
  font-weight: 700;
  text-align: right;
}
.order-review .table tfoot tr th {
  font-size: 18px;
  font-weight: 700;
  border: 0;
}
.order-review .table tfoot tr td {
  font-weight: 700;
  text-align: right;
  border: 0;
}
.order-review .table tfoot tr.subtotal td {
  font-size: 14px;
}
.order-review .table tfoot tr.total td {
  font-size: 24px;
  color: #f8796c;
}
.payment-method {
  margin-bottom: 30px;
  border-width: 0 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.075);
}
.payment-method .accordion .card {
  padding: 20px;
}
.payment-method .accordion .card .card-header button {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.675;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0;
  padding-left: 22px;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
}
.payment-method .accordion .card .card-header button::before {
  position: absolute;
  top: 50%;
  left: 0;
  width: 17px;
  height: 17px;
  margin-top: 2px;
  content: "";
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  border: 1px solid #333;
  border-radius: 50%;
}
.payment-method .accordion .card .card-header button::after {
  position: absolute;
  top: 50%;
  left: 3px;
  width: 11px;
  height: 11px;
  margin-top: 2px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 0;
  border-radius: 50%;
  background-color: #333;
}
.payment-method .accordion .card .card-header button img {
  height: 40px;
  margin: 0 10px;
}
.payment-method .accordion .card .card-body {
  position: relative;
  margin-top: 12px;
  padding: 10px 15px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.payment-method .accordion .card .card-body::before {
  position: absolute;
  top: -3px;
  left: 25px;
  width: 10px;
  height: 10px;
  content: "";
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: #fff;
}
.payment-method .accordion .card .card-body p {
  font-size: 16px;
  font-weight: 500;
}
.payment-method .accordion .card.active .card-header button::after {
  opacity: 1;
}
.payment-note {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
}
.order-tracking {
  max-width: 630px;
  margin: auto;
  padding: 60px;
  background-color: #f8f9fa;
}
.order-tracking p {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
}
.order-tracking input {
  font-weight: 400;
}
.order-tracking input::-webkit-input-placeholder {
  font-weight: 400;
}
.order-tracking input:-moz-placeholder {
  font-weight: 400;
}
.order-tracking input::-moz-placeholder {
  font-weight: 400;
}
.order-tracking input:-ms-input-placeholder {
  font-weight: 400;
}
@media only screen and (max-width: 575px) {
  .order-tracking {
    padding: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .order-tracking {
    padding: 30px;
  }
}
.user-login-register {
  font-weight: 400;
  padding: 60px;
}
@media only screen and (max-width: 575px) {
  .user-login-register {
    padding: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .user-login-register {
    padding: 30px;
  }
}
.login-register-title {
  margin-bottom: 40px;
  text-align: center;
}
.login-register-form form input {
  font-weight: 400;
}
.login-register-form form input::-webkit-input-placeholder {
  font-weight: 400;
}
.login-register-form form input:-moz-placeholder {
  font-weight: 400;
}
.login-register-form form input::-moz-placeholder {
  font-weight: 400;
}
.login-register-form form input:-ms-input-placeholder {
  font-weight: 400;
}
.login-register-form form p,
.login-register-form form a {
  font-size: 16px;
}
.login-register-form form a {
  color: #333;
}
.lost-password {
  max-width: 500px;
  margin: auto;
  padding: 40px;
  background-color: #f8f9fa;
}
.lost-password p {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 30px;
}
.lost-password input {
  font-weight: 400;
}
.lost-password input::-webkit-input-placeholder {
  font-weight: 400;
}
.lost-password input:-moz-placeholder {
  font-weight: 400;
}
.lost-password input::-moz-placeholder {
  font-weight: 400;
}
.lost-password input:-ms-input-placeholder {
  font-weight: 400;
}
@media only screen and (max-width: 575px) {
  .lost-password {
    padding: 40px;
  }
}
@media only screen and (max-width: 479px) {
  .lost-password {
    padding: 30px;
  }
}
.myaccount-tab-list {
  display: block;
  margin-right: 30px;
  border: 1px solid #eee;
}
.myaccount-tab-list a {
  font-weight: 500;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 14px 20px;
}
.myaccount-tab-list a + a {
  border-top: 1px solid #eee;
}
.myaccount-tab-list a:hover {
  color: #333;
}
.myaccount-tab-list a.active {
  cursor: default;
  background-color: #fafafa;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .myaccount-tab-list {
    margin-right: 0;
  }
}
.myaccount-content {
  font-size: 16px;
  font-weight: 400;
}
.myaccount-content.dashboad p {
  padding: 20px;
  background-color: #fafafa;
}
.myaccount-content.dashboad p:not(:last-child) {
  margin-bottom: 24px;
}
.myaccount-content.dashboad p span {
  text-decoration: underline;
}
.myaccount-content.order table,
.myaccount-content.download table {
  white-space: nowrap;
}
.myaccount-content.address > p {
  padding: 20px;
  background-color: #fafafa;
}
.myaccount-content.address > p:not(:last-child) {
  margin-bottom: 24px;
}
.myaccount-content.address > p span {
  text-decoration: underline;
}
.myaccount-content.address .title {
  margin-bottom: 20px;
}
.myaccount-content.address .title .edit-link {
  font-size: 12px;
  margin-left: 5px;
  text-transform: capitalize;
  color: #7e7e7e;
}
.myaccount-content.address .title .edit-link:hover {
  color: #f8796c;
}
.myaccount-content.address address {
  margin-bottom: 0;
}
.about-us {
  text-align: center;
}
.about-us .inner .logo {
  margin-bottom: 40px;
}
.about-us .inner .title {
  font-size: 40px;
  font-weight: 400;
}
.about-us .inner .title::before {
  padding-right: 10px;
  content: url("../images/title/title-decor-left.webp");
}
.about-us .inner .title::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
}
.about-us .inner .title.no-shape::before,
.about-us .inner .title.no-shape::after {
  display: none;
}
.about-us .inner .special-title {
  font-family: "Modesty";
  font-size: 56px;
  line-height: 1.25;
  display: block;
  margin-bottom: 5px;
  color: #72a499;
}
.about-us .inner p {
  margin-bottom: 35px;
}
.about-us .inner .link {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  text-transform: uppercase;
  color: #333;
  border-bottom: 1px solid rgba(51, 51, 51, 0.2);
}
.about-us .inner .link:hover {
  border-color: #333;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .about-us .inner .title {
    font-size: 28px;
  }
}
@media only screen and (max-width: 575px) {
  .about-us .inner .title {
    font-size: 28px;
  }
  .about-us .inner .title::before,
  .about-us .inner .title::after {
    display: none;
  }
}
.about-us2 {
  text-align: center;
}
.about-us2 .inner .title {
  font-family: "Modesty";
  font-size: 80px;
  font-weight: 400;
  margin-bottom: 15px;
}
.about-us2 .inner .title::before {
  padding-right: 10px;
  content: url("../images/title/title-decor-left.webp");
}
.about-us2 .inner .title::after {
  padding-left: 10px;
  content: url("../images/title/title-decor-right.webp");
}
.about-us2 .inner .sub-title {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  display: block;
  margin-bottom: 25px;
  letter-spacing: 5px;
  color: #72a499;
}
.about-us2 .inner .desc p {
  font-size: 16px;
  line-height: 2;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .about-us2 .inner .title {
    font-size: 60px;
  }
}
@media only screen and (max-width: 767px) {
  .about-us2 .inner .title {
    font-size: 50px;
  }
}
@media only screen and (max-width: 575px) {
  .about-us2 .inner .title::before,
  .about-us2 .inner .title::after {
    display: none;
  }
}
.about-us3 .sub-title {
  font-size: 18px;
  font-weight: 500;
  display: block;
  margin-bottom: 20px;
  color: #333;
}
.about-us3 .title {
  font-size: 40px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 20px;
}
.about-us3 .desc {
  margin-bottom: 35px;
}
.about-us3 .link {
  font-weight: 500;
  line-height: 1.25;
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #333;
}
.about-us3 .link::before {
  width: 60px;
  height: 2px;
  margin-right: 10px;
  content: "";
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  background-color: #333;
}
.about-us3 .link:hover {
  color: #f8796c;
}
.about-us3 .link:hover::before {
  width: 70px;
}
@media only screen and (max-width: 575px) {
  .about-us3 .title {
    font-size: 30px;
  }
  .about-us3 .desc {
    margin-bottom: 20px;
  }
}
.about-us4 .sub-title {
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 20px;
  letter-spacing: 2px;
  color: #333;
}
.about-us4 .title {
  font-size: 56px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 20px;
}
.about-us4 .title:last-child {
  margin-bottom: 0;
}
.about-us4 .desc {
  margin-bottom: 35px;
}
@media only screen and (max-width: 767px) {
  .about-us4 .title {
    font-size: 40px;
  }
}
@media only screen and (max-width: 575px) {
  .about-us4 .title {
    font-size: 30px;
  }
}
.contact-info .title {
  font-family: "Futura";
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 15px;
  padding-left: 44px;
}
.contact-info .info {
  position: relative;
  display: block;
  padding-left: 44px;
}
.contact-info .info:not(:last-child) {
  margin-bottom: 5px;
}
.contact-info .info .icon {
  font-size: 22px;
  line-height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  color: #d8d8d8;
}
.contact-map {
  width: 100%;
  height: 500px;
}
@media only screen and (max-width: 767px) {
  .contact-map {
    height: 350px;
  }
}
.section-404 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 100vh;
}
@media only screen and (min-width: 768px) and (max-width: 991px),
  only screen and (max-width: 767px) {
  .section-404 {
    min-height: calc(100vh - 70px);
  }
}
.content-404 {
  padding: 100px 0;
}
.content-404 .title {
  font-size: 100px;
  font-weight: 400;
  line-height: 1;
  margin: 0;
}
.content-404 .sub-title {
  font-size: 64px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 30px;
}
.content-404 p {
  margin-bottom: 40px;
}
.content-404 .buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -20px;
  margin-bottom: -20px;
}
.content-404 .buttons .btn {
  margin-right: 20px;
  margin-bottom: 20px;
}
@media only screen and (max-width: 767px) {
  .content-404 {
    padding: 100px 0 60px;
  }
  .content-404 .title {
    font-size: 80px;
  }
  .content-404 .sub-title {
    font-size: 50px;
  }
}
@media only screen and (max-width: 575px) {
  .content-404 .title {
    font-size: 60px;
  }
  .content-404 .sub-title {
    font-size: 40px;
  }
}
.coming-soon-section {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 100vh;
}
.coming-soon-content {
  text-align: center;
}
.coming-soon-content .logo {
  margin-bottom: 80px;
}
.coming-soon-content .title {
  font-size: 56px;
  font-weight: 400;
  margin-bottom: 40px;
}
.coming-soon-content .countdown3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 80px;
}
.coming-soon-content .countdown3 .count {
  min-width: 130px;
  margin: 0 10px;
}
.coming-soon-content .countdown3 .count span {
  display: block;
  color: #333;
}
.coming-soon-content .countdown3 .count span.amount {
  font-size: 100px;
  line-height: 1;
}
.coming-soon-content .countdown3 .count span.period {
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 2px;
  text-transform: uppercase;
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .coming-soon-content .countdown3 .count {
    min-width: 100px;
  }
  .coming-soon-content .countdown3 .count span.amount {
    font-size: 80px;
  }
}
@media only screen and (max-width: 767px) {
  .coming-soon-content .logo {
    margin-bottom: 60px;
  }
  .coming-soon-content .title {
    font-size: 44px;
    margin-bottom: 30px;
  }
  .coming-soon-content .countdown3 {
    margin-bottom: 60px;
  }
  .coming-soon-content .countdown3 .count {
    min-width: 80px;
  }
  .coming-soon-content .countdown3 .count span.amount {
    font-size: 60px;
  }
  .coming-soon-content .countdown3 .count span.period {
    font-size: 14px;
  }
}
@media only screen and (max-width: 479px) {
  .coming-soon-content .logo {
    margin-bottom: 40px;
  }
  .coming-soon-content .title {
    font-size: 30px;
    margin-bottom: 30px;
  }
  .coming-soon-content .countdown3 {
    margin-bottom: 40px;
  }
  .coming-soon-content .countdown3 .count {
    min-width: 60px;
    margin: 0 5px;
  }
  .coming-soon-content .countdown3 .count span.amount {
    font-size: 40px;
  }
  .coming-soon-content .countdown3 .count span.period {
    font-size: 12px;
    letter-spacing: 0;
  }
}

`;
