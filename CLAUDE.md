# Mailtemi Website - Claude Development Guide

## Project Overview
This is an Astro-based website for Mailtemi, built with React components, Tailwind CSS, and MDX for blog content.

## Development Commands

### Setup
```bash
npm install
```

### Development
```bash
npm run dev          # Start development server at http://localhost:4321/
npm run build        # Build for production
npm run format       # Format code with Prettier
npm run json         # Generate JSON files with scripts/jsonGenerator.js
```

### Linting & Type Checking
- No specific lint/typecheck commands configured in package.json
- Uses TypeScript with tsconfig.json

## Project Structure

### Key Directories
- `src/pages/` - Astro pages and routing
- `src/content/` - MDX content (blog posts, features, etc.)
- `src/layouts/` - Astro layouts and components
- `src/layouts/function-components/` - React components
- `src/styles/` - SCSS stylesheets
- `public/` - Static assets

### Content Management
- Blog posts: `src/content/blog/` (MDX format)
- Pages: `src/content/pages/` (Markdown/MDX)
- Configuration: `src/config/` (JSON files)

## Technology Stack
- **Framework**: Astro 4.16.18
- **UI**: React 18.2.0 + Tailwind CSS
- **Content**: MDX with gray-matter
- **Styling**: SCSS + Tailwind CSS
- **Icons**: Tabler Icons, React Icons
- **Package Manager**: npm (originally pnpm)

## Common Issues
- **npm cache permissions**: Run `sudo chown -R $(whoami) ~/.npm` if installation fails
- **Sass deprecation warnings**: Legacy @import syntax in use, consider migrating to @use
- **Image service**: Using deprecated Squoosh, consider migrating to Sharp

## Build Output
- Static site generated to `dist/`
- 23 pages typically generated
- Includes sitemap generation via @astrojs/sitemap

## Development Notes
- Uses React components within Astro pages
- Content collections configured in `src/content/config.ts`
- Responsive design with Tailwind utilities
- Blog with categories, pagination, and Disqus comments