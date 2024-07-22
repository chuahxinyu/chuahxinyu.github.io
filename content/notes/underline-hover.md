---
external: false
draft: false
title: "[CSS Snippet ✨] Cool Hover Effects"
description: "Like the underline on hover CSS on this site"
date: 2024-07-22
---

TailwindPlayLink: [https://play.tailwindcss.com/JzVl6AD3Em](https://play.tailwindcss.com/JzVl6AD3Em)

Demo Example:

- ![](/assets/css-snippets/underline-hover.gif)

```html
<p>
  <a
    class="unset gradient-link tracking-wider font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00abda] to-[#1476ff] hover:after:bg-gradient-to-r hover:after:from-[#00abda] hover:after:to-[#1476ff]"
    href={"https://play.tailwindcss.com/JzVl6AD3Em"}
    target="_blank"
  >
    Tailwind
  </a>
</p>
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.gradient-link {
  position: relative;
  box-decoration-break: clone;
  text-decoration: none;
}

.gradient-link:hover:after {
  transform: translateZ(0) scale(1);
}

.gradient-link:after {
  left: 0;
  right: 0;
  bottom: -2px;
  content: "";
  height: 2px;
  position: absolute;
  transform: translateZ(0) scaleX(0);
  transform-origin: left center;
  transition: all 0.15s ease-in-out;
}
```
