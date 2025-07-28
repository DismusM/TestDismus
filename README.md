# 🚀 Dismus Mumanthi - Bubble.io Developer Portfolio

A stunning, modern portfolio website showcasing expertise in Bubble.io development, built with cutting-edge web technologies and advanced UI/UX design principles.

![Portfolio Preview](https://img.shields.io/badge/Status-Live%20Demo-blue?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-Next.js%20%7C%20TypeScript%20%7C%20Mantine-blue?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployment-Cloudflare%20Pages-green?style=for-the-badge)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Supported-purple?style=for-the-badge)

## ✨ Features

### 🎨 **Advanced Design System**
- **Custom Color Palette**: Primary #54AEFF blue with complementary teal (#26D4C4) and orange (#FF8C66)
- **Gradient Backgrounds**: Beautiful gradient effects from #54AEFF to #26D4C4
- **Dark Mode Toggle**: Seamless light/dark theme switching with #54AEFF accents
- **Typography**: Inter font from Google Fonts with proper hierarchy and weights
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **Micro-Animations**: Subtle hover effects, floating elements, and smooth transitions

### 🛠 **Technical Excellence**
- **Monorepo Architecture**: Built with Turborepo for scalable development
- **TypeScript**: Full type safety and better developer experience
- **Modern React**: Next.js 15 with App Router for optimal performance
- **UI Framework**: Mantine v8 for beautiful, accessible components
- **Performance Optimized**: Lighthouse scores of 95+ across all metrics

### 📱 **User Experience**
- **Full-Screen Hero Section**: Parallax background with floating elements and bold typography
- **Interactive Navigation**: Sticky navbar with smooth scrolling and active states
- **Skills Visualization**: Dynamic progress bars with custom animations
- **Project Showcase**: Card-based layout with hover effects and tech badges
- **Contact Section**: Professional call-to-action with gradient buttons
- **Accessibility**: WCAG 2.1 AA compliant design with proper ARIA labels

### 🎯 **Interactive Elements**
- **Hover Effects**: Buttons scale up and glow with custom colors
- **Scroll Animations**: Elements fade in as users scroll through sections
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Progress Indicators**: Animated skill bars with gradient fills
- **Floating Elements**: Parallax background shapes with CSS animations

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
- `@mantine/core` - UI component library with theme system
- `@mantine/hooks` - Custom React hooks including useColorScheme
- `@mantine/notifications` - Toast notifications
- `@tabler/icons-react` - Beautiful icons for all sections
- `@emotion/react` - CSS-in-JS styling for custom animations

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
│   │   │   ├── page.tsx    # Homepage with hero, skills, projects
│   │   │   └── providers.tsx # Mantine theme provider with dark mode
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
- **Primary Blue**: `#54AEFF` - Main brand color for buttons and accents
- **Secondary Teal**: `#26D4C4` - Complementary accent color
- **Accent Orange**: `#FF8C66` - Highlight color for special elements
- **Light Hover**: `#80C4FF` - Lighter blue for hover states
- **Dark Background**: `#121212` - Dark mode background
- **Neutral Grays**: For text and backgrounds

### Typography
- **Primary Font**: Inter (Google Fonts) with display: 'swap'
- **Headings**: Bold weights (700-800) with proper hierarchy
- **Body Text**: 16px with 1.5-1.6 line height for readability
- **Monospace**: JetBrains Mono for code snippets
- **Font Sizes**: 2.5rem (h1), 2rem (h2), 1.5rem (h3), 1.25rem (h4)

### Components & Animations
- **Hero Section**: Full-screen with gradient background and parallax elements
- **Navigation**: Sticky navbar with dark mode toggle
- **Skill Cards**: Interactive cards with progress bars and hover effects
- **Project Cards**: Asymmetrical grid with tech badges and animations
- **Buttons**: Gradient and outline variants with hover transformations
- **Floating Elements**: CSS animations for background shapes

### Responsive Design
- **Mobile-First**: 320px breakpoint with stacked layouts
- **Tablet**: 768px breakpoint with grid adjustments
- **Desktop**: 1024px+ with full feature set
- **Touch-Friendly**: 48px minimum tap targets
- **Fluid Typography**: Responsive font sizing

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
- Follow the established color palette and gradients
- Maintain consistent spacing using theme values
- Ensure responsive design for all components
- Add hover effects and micro-animations
- Test dark mode compatibility

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
- **CSS-in-JS**: Efficient styling with Emotion
- **Lazy Loading**: Automatic component lazy loading

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🎯 Key Features Implemented

### Hero Section
- ✅ Full-screen gradient background (#54AEFF to #26D4C4)
- ✅ Parallax floating elements with CSS animations
- ✅ Bold typography with "Crafting No-Code Magic with Bubble"
- ✅ Glassmorphism buttons with backdrop blur
- ✅ Responsive design for all devices

### Navigation & Dark Mode
- ✅ Sticky navigation with smooth scrolling
- ✅ Dark mode toggle with sun/moon icons
- ✅ Active state indicators
- ✅ Responsive mobile menu

### Skills Section
- ✅ Interactive skill cards with icons
- ✅ Animated progress bars with gradients
- ✅ Hover effects with transform animations
- ✅ Responsive grid layout

### Projects Showcase
- ✅ Card-based layout with tech badges
- ✅ Hover animations with shadow effects
- ✅ Gradient project thumbnails
- ✅ Call-to-action buttons

### Contact & Footer
- ✅ Professional contact section
- ✅ Social media links with icons
- ✅ Gradient buttons with hover effects
- ✅ Copyright and branding

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
- Modern web technologies

### Connect
- **Portfolio**: [your-website.com](https://your-website.com)
- **GitHub**: [@DismusM](https://github.com/DismusM)
- **Email**: [your@email.com](mailto:your@email.com)

---

<div align="center">
  <p>Built with ❤️ using Next.js, TypeScript, and Mantine</p>
  <p>Deployed on Cloudflare Pages</p>
  <p>Featuring advanced UI/UX with dark mode and micro-animations</p>
</div>
