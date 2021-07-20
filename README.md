# @devmoath/tailwindcss-capitalize-first [![Node.js Package](https://github.com/DevMoath/tailwindcss-capitalize-first/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/DevMoath/tailwindcss-capitalize-first/actions/workflows/npm-publish.yml)

Add utility class to capitalize first letter of a paragraph.

## Installation

Install the plugin from npm:

```shell
# Using npm
npm install @devmoath/tailwindcss-capitalize-first

# Using Yarn
yarn add @devmoath/tailwindcss-capitalize-first
```

Then add the plugin to your tailwind.config.js file:

```javascript
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('@devmoath/tailwindcss-capitalize-first'),
        // ...
    ],
};
```

## Usage

Now you can use the `capitalize-first` class to capitalize first letter:

```html
<div class="capitalize-first">lorem ipsum dolor sit amet</div>
<!-- result is: Lorem ipsum dolor sit amet -->
```

[Try it in tailwindcss play](https://play.tailwindcss.com/FnkHPhwv4t)
