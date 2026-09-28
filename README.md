# zLegoleon™

A small personal website project for **zLegoleon™** — a deliberately serious-looking corporate-style website with a few questionable products.

## Features

- Responsive homepage
- Light / dark mode
- Store with product pages
- Local shopping cart
- Centralized product data and pricing
- Demo checkout/payment popup
- About page
- Minecraft-themed plushie products

## Structure

```text
zLegoleon/
├── index.html
├── style.css
├── script.js
├── products.js
├── store.js
│
├── images/
│   └── plushies/
│
├── store/
├── plushies/
├── cart/
└── about/
```

## Tech

Built with plain:

- HTML
- CSS
- JavaScript

No external libraries are required.

## Notes

Product names, prices, images and descriptions are managed centrally in `products.js`.

The cart uses `localStorage`, so it works directly in the browser without a backend.

This project is primarily a fun personal web-development project rather than a real online store.
