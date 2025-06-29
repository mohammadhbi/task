A robust and scalable authentication and dashboard system built with Next.js, TypeScript, React Context, and SCSS Modules.

Overview
This project demonstrates a clean, maintainable authentication flow where users can log in by submitting their phone number. Upon successful authentication via an external API, the user is redirected to a fully responsive dashboard. The dashboard features a sleek sidebar navigation that adapts gracefully from desktop to mobile with a hamburger menu.

Key Features
Simple authentication via randomuser API, simulating real-world user data fetching.

Global state management using React Context API for seamless user session handling.

Reusable UI components including buttons, inputs, and sidebar navigation.

TypeScript-powered for type safety and improved developer experience.

Responsive design crafted with SCSS Modules, optimized for all screen sizes.

Form validation leveraging yup and react-hook-form for robust input handling.

User feedback through toast notifications using react-toastify.

Next.js Image optimization configured for external images.

Logout functionality integrated within the sidebar for secure session termination.

Mobile-first hamburger menu with smooth animation and accessibility in mind.

Project Structure:
/src
 ├── /app
 │    ├── /auth          # Login and authentication pages
 │    └── /dashboard     # Dashboard with sidebar and user details
 ├── /components         # UI components (Button, Input, Sidebar)
 ├── /context            # React Context for user state management
 └── /styles             # Modular SCSS stylesheets

Technical Notes
API endpoint for user data is easily configurable in /app/auth/page.tsx.

External images are enabled through next.config.js image domains configuration.

Iconography handled with react-icons for consistency and scalability.

Logout clears user context and localStorage, then redirects to login.

Form validation schema built with yup ensures phone number correctness.

Responsive sidebar shifts between fixed and relative positioning with a smooth slide-in animation.

Future Improvements
Implement JWT-based authentication with backend integration.

Add role-based access control and multi-user support.

Enhance dashboard with dynamic widgets and analytics.

Write comprehensive unit and integration tests.

Improve accessibility and internationalization support.