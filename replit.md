# Russian Market Entry Landing Page

## Overview

This is a bilingual (English/Russian) single-page application that serves as a landing page for a business consultancy service helping international companies enter the Russian market. The application provides information about market research, localization, and customer outreach services through a modern, responsive web interface.

The project is built as a full-stack application with a React frontend and Express backend, designed to handle contact form submissions and provide a professional online presence for the consultancy business.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React Context API for language switching and TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript for consistent type checking across the stack
- **API Design**: RESTful endpoints with JSON request/response format
- **Request Handling**: Express middleware for JSON parsing, URL encoding, and request logging
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot reload and development middleware integration with Vite

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Development Storage**: In-memory storage implementation for development and testing
- **Session Management**: PostgreSQL-based session storage with connect-pg-simple

### Authentication and Authorization
- **User System**: Basic user schema with username/password authentication
- **Session Handling**: Express sessions with PostgreSQL storage backend
- **Data Validation**: Zod schemas for runtime type validation and security

### Key Features
- **Bilingual Support**: Complete English/Russian localization with context-based language switching
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Contact Forms**: Validated contact form submissions with server-side processing
- **Component Library**: Comprehensive UI component system with consistent theming
- **SEO Optimization**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA labels and keyboard navigation support through Radix UI

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production deployment
- **Drizzle ORM**: Type-safe database queries and schema management

### UI and Styling
- **Radix UI**: Headless component primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including social media icons

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema declaration and validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Development Tools
- **TypeScript**: Static type checking across frontend and backend
- **Vite**: Build tool with hot module replacement and optimized bundling
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

### Runtime and Utilities
- **TanStack Query**: Server state management and caching
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Type-safe variant handling for component styling
- **CLSX**: Conditional className utility for dynamic styling

### Deployment and Monitoring
- **Replit Integration**: Development environment integration with runtime error overlay
- **Express Session Management**: Secure session handling with PostgreSQL backing