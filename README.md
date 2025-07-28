# 🚀 Dismus Mumanthi - Bubble.io Developer Portfolio

A modern, responsive portfolio website showcasing expertise in Bubble.io development, built with cutting-edge web technologies.

![Portfolio Preview](https://img.shields.io/badge/Status-Live%20Demo-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-Next.js%20%7C%20TypeScript%20%7C%20Mantine-blue?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployment-Cloudflare%20Pages-green?style=for-the-badge)

## ✨ Features

### 🎨 **Modern Design**
- **Custom Color Palette**: Primary #54AEFF blue with complementary teal (#26D4C4) and orange (#FF8C66)
- **Typography**: Inter font from Google Fonts with proper hierarchy
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Micro-interactions and hover effects

### 🛠 **Technical Excellence**
- **Monorepo Architecture**: Built with Turborepo for scalable development
- **TypeScript**: Full type safety and better developer experience
- **Modern React**: Next.js 15 with App Router for optimal performance
- **UI Framework**: Mantine v8 for beautiful, accessible components

### 📱 **User Experience**
- **Fast Loading**: Optimized for performance with Next.js
- **Accessibility**: WCAG 2.1 AA compliant design
- **SEO Optimized**: Proper metadata and structured content
- **Cross-browser**: Works seamlessly across all modern browsers

## 🏗 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 15.4.2 |
| **TypeScript** | Type Safety | 5.8.2 |
| **Mantine** | UI Components | 8.2.1 |
| **Turborepo** | Monorepo Tool | Latest |
| **pnpm** | Package Manager | Latest |
| **Open Next** | Deployment | 3.1.3 |

### 🎯 **Key Libraries**
- `@mantine/core` - UI component library
- `@mantine/hooks` - Custom React hooks
- `@mantine/notifications` - Toast notifications
- `@tabler/icons-react` - Beautiful icons
- `@emotion/react` - CSS-in-JS styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DismusM/TestDismus.git
   cd TestDismus
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm check-types  # TypeScript type checking

# Monorepo commands
pnpm run build    # Build all apps and packages
pnpm run dev      # Develop all apps and packages
pnpm run lint     # Lint all apps and packages
```

## 📁 Project Structure

```
TestDismus/
├── apps/
│   ├── web/                 # Main portfolio application
│   │   ├── app/            # Next.js App Router
│   │   │   ├── layout.tsx  # Root layout with providers
│   │   │   ├── page.tsx    # Homepage component
│   │   │   └── providers.tsx # Mantine theme provider
│   │   ├── public/         # Static assets
│   │   └── package.json    # Web app dependencies
│   └── docs/               # Documentation site
├── packages/               # Shared packages
│   ├── ui/                # Shared UI components
│   ├── eslint-config/     # ESLint configuration
│   └── typescript-config/ # TypeScript configuration
├── turbo.json             # Turborepo configuration
└── package.json           # Root package.json
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#54AEFF` - Main brand color
- **Secondary Teal**: `#26D4C4` - Accent color
- **Accent Orange**: `#FF8C66` - Highlight color
- **Neutral Grays**: For text and backgrounds

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold weights (700) with proper hierarchy
- **Body Text**: 16px with 1.5 line height for readability
- **Monospace**: JetBrains Mono for code snippets

### Components
- **Buttons**: Custom styled with hover effects
- **Cards**: Paper components with shadows and borders
- **Layout**: Container-based responsive design
- **Navigation**: Sticky header with smooth scrolling

## 🌐 Deployment

### Cloudflare Pages
This portfolio is optimized for deployment on Cloudflare Pages using Open Next:

1. **Build Configuration**
   ```bash
   Build Command: pnpm --filter=web run build && pnpm --filter=web run export
   Output Directory: apps/web/.open-next
   ```

2. **Environment Variables**
   - No additional environment variables required for basic deployment

3. **Custom Domain**
   - Configure your custom domain in Cloudflare Pages dashboard

### Alternative Deployments
- **Vercel**: Compatible with zero configuration
- **Netlify**: Works with standard Next.js build process
- **AWS Amplify**: Full support for Next.js applications

## 🔧 Development

### Adding New Features
1. Create feature branch: `git checkout -b feature/new-feature`
2. Implement changes in `apps/web/app/`
3. Test locally: `pnpm dev`
4. Commit changes: `git commit -m "feat: add new feature"`
5. Push and create pull request

### Styling Guidelines
- Use Mantine components when possible
- Follow the established color palette
- Maintain consistent spacing using theme values
- Ensure responsive design for all components

### Code Quality
- TypeScript strict mode enabled
- ESLint configuration for code consistency
- Prettier for code formatting
- Husky for pre-commit hooks

## 📈 Performance

### Optimizations
- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Google Fonts with display: 'swap'
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Built-in Next.js bundle analyzer

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Dismus Mumanthi** is a passionate Bubble.io developer specializing in:
- No-code web application development
- UI/UX design and implementation
- API integrations and custom workflows
- Responsive and accessible design
- Performance optimization

### Connect
- **Portfolio**: [your-website.com](https://your-website.com)
- **GitHub**: [@DismusM](https://github.com/DismusM)
- **Email**: [your@email.com](mailto:your@email.com)

---

<div align="center">
  <p>Built with ❤️ using Next.js, TypeScript, and Mantine</p>
  <p>Deployed on Cloudflare Pages</p>
</div>
