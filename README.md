# 🔺Full Screen Height🔺 

A small javascript plugin for fix 100vh problem on mobile screens

---
## ⚙ Installation

### Using package managers

Install `full-screen-height` package:
* `npm install full-screen-height`

Import script, styles and initialize AOS:
```js
import fullScreenHeight from 'full-screen-height/dist/fullScreenHeight';
import 'full-screen-height/dist/fullScreenHeight.css';
// ..
fullScreenHeight();
```

---


## 🤔 How to use it?
### 1. Initialize in your main.js file:

```js
fullScreenHeight();
```

### 2. Set css class:

For `height`:
```html
  <div class="h-full-screen"></div>
```

For `min-height`:
```html
  <div class="min-h-full-screen"></div>
```

For `max-height`:
```html
  <div class="max-h-full-screen"></div>
```

Or if you need to subtract some amount from the full height of the page, use this:

```css
.your-element {
    height: calc(var(--doc-height) - `value`px)
    // ..
}
```