# Xzavier Driving School (XDS) - Replit Configuration

## Overview

This is a modern driving school website built with React, TypeScript, and Express.js. The application serves customers in South East Melbourne, specifically targeting areas around Dandenong. It provides information about driving lessons, suburb coverage, VicRoads test information, and includes a contact form for potential students.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state, React hooks for local state
- **Build Tool**: Vite with hot module replacement
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution
- **Production Build**: esbuild for server bundling

### Database Strategy
- **Database**: PostgreSQL with Neon Database integration
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Shared schema definition in TypeScript
- **Migrations**: Drizzle Kit for database migrations
- **Current State**: DatabaseStorage class using PostgreSQL
- **Tables**: users, contacts (contact form submissions)

## Key Components

### Core Pages
1. **Home Page** (`/`) - Hero section with suburb search, services overview, customer reviews
2. **Suburbs Page** (`/suburbs`) - Comprehensive list of serviced suburbs with VicRoads center mapping
3. **Suburb Detail** (`/suburb/:suburb`) - Individual suburb information and contact form
4. **Drive Test Info** (`/drive-test-info`) - Victorian driving test requirements and procedures
5. **404 Page** - Not found handling

### UI Components
- **Header**: Sticky navigation with mobile responsiveness and phone number display
- **Footer**: Company information, service areas, and quick links
- **Contact Form**: Comprehensive form with validation using react-hook-form and zod
- **Search Bar**: Suburb/postcode search with real-time filtering
- **FAQ Section**: Expandable question/answer interface

### Data Management
- **Suburbs Data**: 100+ South East Melbourne suburbs with VicRoads mapping
- **FAQ Data**: Categorized questions about driving lessons and tests
- **Customer Reviews**: Verified testimonials with location information

## Data Flow

### Client-Side Flow
1. User navigates to pages via Wouter routing
2. React Query manages API calls and caching
3. Form submissions use react-hook-form with zod validation
4. Search functionality filters local data arrays
5. Responsive design adapts to mobile/desktop via custom hooks

### Server-Side Flow
1. Express.js serves API routes under `/api` prefix
2. Vite middleware handles development hot reloading
3. Static assets served in production build
4. Request logging middleware tracks API performance

### Storage Interface
- Abstract `IStorage` interface for CRUD operations
- Current `DatabaseStorage` implementation using PostgreSQL
- Contact form submissions stored in database
- User management ready for authentication features

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **Routing**: wouter for lightweight client-side routing
- **Forms**: react-hook-form with @hookform/resolvers for zod integration
- **Validation**: zod for schema validation, drizzle-zod for database schemas

### UI and Styling
- **Component Library**: Comprehensive Radix UI primitives collection
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling

### Database and Server
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Connection**: @neondatabase/serverless for cloud database
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin and error overlay
- **Type Checking**: TypeScript with strict configuration
- **Replit Integration**: Cartographer plugin and error modal for development

## Deployment Strategy

### Development Environment
- Vite dev server with HMR on port 5173
- Express server with middleware integration
- TypeScript compilation via tsx
- Replit-specific development banners and tools

### Production Build
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Assets**: Static files served from dist directory
4. **Environment**: NODE_ENV controls development vs production features

### Database Migration
- Drizzle Kit configured for PostgreSQL migrations
- Schema located in `shared/schema.ts` for type sharing
- Environment variable `DATABASE_URL` required for production
- Push command available via `npm run db:push`

### Contact Information Integration
The application is configured for:
- **Address**: 124 Stud Rd, Dandenong VIC 3175
- **Phone**: 0434 538 142
- **Service Areas**: South East Melbourne suburbs
- **Specialization**: Victorian driving test preparation and instruction

This architecture supports scalable growth from the current development state to a full production driving school management system.