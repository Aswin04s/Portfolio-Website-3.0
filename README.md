# Modern React Portfolio

A professional portfolio website built with React.js, Vite, and Tailwind CSS.

## Features

- ⚡ Lightning-fast with Vite
- 🎨 Styled with Tailwind CSS
- 📱 Fully Responsive
- 🌙 Dark/Light Mode
- 📧 EmailJS Contact Form
- 🚀 Deployed on Vercel

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file and add your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── common/      # Common UI elements
│   └── layout/      # Layout components
├── sections/        # Main page sections
├── data/            # Content data files
├── assets/          # Images and files
├── utils/           # Helper functions
├── hooks/           # Custom hooks
└── styles/          # Global styles
```

## Updating Content

All content is centralized in the `src/data/` folder:

- `personalInfo.js` - Update your bio, contact info
- `skills.js` - Add/remove skills
- `projects.js` - Add new projects
- `experience.js` - Update work history

## Deployment

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

## License

MIT