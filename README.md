# Blackbird

A modern web application built with Next.js 15.3, featuring a dynamic and playful bird logo that randomly alternates between black and white variants.

## Features

- 🦅 Dynamic Bird Logo: Interactive component that smoothly transitions between black and white variants
- ⚡ Modern Stack: Built with Next.js 15.3 and React 19
- 🎨 Responsive Design: Styled with TailwindCSS
- 📱 Type-Safe: Full TypeScript support
- 🚀 Turbopack Enabled: Fast development experience

## Tech Stack

- **Next.js 15.3**: Latest version of the React framework with advanced features and optimizations
- **React 19**: The newest version of React with concurrent features
- **TypeScript**: For type safety and enhanced developer experience
- **TailwindCSS 4**: Utility-first CSS framework for rapid UI development
- **ESLint**: Configured with Next.js recommended rules for code quality
- **Turbopack**: Enabled for faster development experience

## Project Structure

```
blackbird/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout component
│   │   ├── page.tsx      # Home page component
│   │   └── globals.css   # Global styles
│   └── components/       # Reusable components
│       └── Bird.tsx      # Dynamic bird logo component
├── public/              # Static assets
├── next.config.ts      # Next.js configuration
└── package.json        # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd blackbird
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Bird Component

The Bird component (`src/components/Bird.tsx`) is a key feature of the application that:

- Displays a bird logo that smoothly transitions between black and white variants
- Uses CSS transitions for smooth opacity changes
- Automatically changes variants at random intervals (1-6 seconds)
- Implements React's hooks (useState, useEffect, useCallback) for state management
- Utilizes Next.js Image component for optimized image loading

## Development

- `npm run dev`: Starts the development server with Turbopack
- `npm run build`: Creates a production build
- `npm run start`: Runs the production server
- `npm run lint`: Runs ESLint for code quality checks

## Configuration

The project includes several configuration files:

- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration
- `eslint.config.mjs`: ESLint rules
- `postcss.config.mjs`: PostCSS configuration for TailwindCSS

## License

[Your License Here]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
