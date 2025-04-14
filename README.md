# Personal Portfolio Website

A modern and responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Dark mode support
- Interactive UI with smooth animations
- Optimized for SEO
- Fast loading times
- Easy to customize

## Sections

1. **Hero** - A welcoming introduction with a call to action
2. **About** - Personal information and skills
3. **Projects** - Showcase of your work
4. **Skills** - Technologies and tools you work with
5. **Contact** - A form for visitors to reach out

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Update your personal information and portfolio details in the following files:

- `src/app/page.tsx` - Edit the main content including your name, role, about section, projects, and skills
- `src/components/Footer.tsx` - Update social links and contact information

### Projects

Add your projects in the Projects section of `src/app/page.tsx`. For each project, you can specify:

- Title
- Description
- Technologies used
- Links to live demo and source code
- Image (place project images in the `public` directory)

### Resume

Replace the placeholder resume at `public/resume.html` with your actual resume.

### Styling

The portfolio uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the Tailwind theme in `tailwind.config.js`
2. Editing component styles directly in their respective files

## Deployment

### Deploying to Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically build and deploy your app

### Other Deployment Options

You can also deploy to other platforms such as:

- Netlify
- GitHub Pages
- AWS Amplify
- Digital Ocean App Platform

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for hosting and deployment
