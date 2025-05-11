# r3versein blog

A modern, responsive blog website built with HTML, Tailwind CSS, and JavaScript.

## Overview

This is a blog website for Shaswata Roy, featuring a clean and modern UI with fancy design elements. The website is built using:

- HTML5 for structure
- Tailwind CSS (via CDN) for styling
- Vanilla JavaScript for interactivity

## Features

- Responsive design that works on all device sizes
- Modern UI with gradient effects, animations, and smooth transitions
- Blog post listing with filtering and search capabilities
- Individual blog post pages with related posts
- Contact form with validation
- Newsletter subscription
- Mobile-friendly navigation

## Pages

- **Home**: Featured posts, about section, newsletter signup, and contact form
- **Posts**: All blog posts with search and filtering
- **Individual Post**: Detailed blog posts with author info and related posts

## Setup

Since this project uses Tailwind CSS via CDN, there's no build process required. Simply clone the repository and open the HTML files in a browser.

```bash
git clone <repository-url>
cd blog
```

Then open `index.html` in your browser.

## Customization

### Colors

The primary color scheme is defined in the Tailwind config in each HTML file:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0f172a',
                secondary: '#6366f1',
                accent: '#f97316',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        }
    }
}
```

### Adding New Posts

To add a new blog post:

1. Create a new HTML file in the `posts` directory
2. Copy the structure from an existing post file
3. Update the content, title, meta information, and images
4. Add the post to the grid in `posts/index.html`
5. Optionally, add it to the featured section on the homepage if it's a featured post

## Author

Shaswata Roy

## License

This project is open source and available under the [MIT License](LICENSE). 