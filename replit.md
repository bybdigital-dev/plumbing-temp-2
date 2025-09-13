# Replit.md

## Overview

AquaPro Plumbing is a professional plumbing company website built as a React single-page application with Express.js backend. The site showcases plumbing services including emergency repairs, leak detection, drain cleaning, geyser installation, bathroom renovations, and commercial plumbing. It features a modern, trust-focused design with service galleries, team profiles, contact forms, and comprehensive service information to establish credibility and generate leads.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React router)
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Styling**: Tailwind CSS with custom design system based on professional service industry standards
- **State Management**: TanStack Query for server state and React hooks for local state
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Data Layer**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Vite middleware integration for seamless full-stack development

### Design System
- **Color Palette**: Professional blue primary (#215 85% 29%) with orange accent (#28 100% 50%)
- **Typography**: Inter font family with consistent weight hierarchy
- **Component Library**: Custom components built on Radix UI primitives
- **Layout**: Responsive grid system using Tailwind's spacing units
- **Trust Elements**: Badge-style indicators for credibility (24/7 Emergency, Licensed & Insured, Upfront Pricing)

### Application Structure
- **Client Directory**: React frontend with pages, components, and utilities
- **Server Directory**: Express backend with routes and storage abstractions
- **Shared Directory**: Common TypeScript types and database schema
- **Asset Management**: Generated images stored in attached_assets with Vite alias support

### Database Schema
- **User Management**: Basic user table with UUID primary keys and unique usernames
- **Schema Definition**: Drizzle schema with Zod integration for type safety
- **Migration Support**: Drizzle Kit configured for PostgreSQL migrations

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Backend**: Express.js, Node.js types
- **Build Tools**: Vite, TypeScript, ESBuild for production builds

### UI and Styling
- **Component Library**: Radix UI primitives (40+ components including Dialog, Dropdown, Navigation, etc.)
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Utilities**: Class Variance Authority, clsx for conditional styling
- **Icons**: Lucide React for consistent iconography

### Database and Validation
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Database Provider**: Neon Database serverless PostgreSQL
- **Validation**: Zod for schema validation and type safety
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Development**: Replit-specific plugins for error handling and debugging
- **Date Handling**: date-fns for date manipulation
- **Code Quality**: TypeScript strict mode with comprehensive type checking

### Form and Interaction
- **Form Handling**: React Hook Form with Hookform Resolvers for Zod integration
- **UI Interactions**: Embla Carousel for image galleries
- **Command Interface**: cmdk for search and command functionality

### External Services Integration Ready
- **Form Submission**: Configured for FormSubmit.co service for contact forms
- **Email Handling**: Contact form setup with success/error handling
- **Asset Management**: Vite-based asset loading with TypeScript support