<h1 align="center" id="header">
  React Native CRUD
</h1>
<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native">
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Expo_Router-000000?style=for-the-badge&logo=expo&logoColor=white" alt="Expo Router">
  <img src="https://img.shields.io/badge/NativeWind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="NativeWind">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
</p>
<p align="center">
  A full-featured CRUD application built with React Native, Expo Router, NativeWind, Drizzle ORM, and SQLite. Create, read, update, and delete records with a clean, production-ready mobile interface.
</p>

---

<h2 id="stack">
  Tech Stack
</h2>
<p>
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/React-Dark.svg" width="48" title="React Native">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TypeScript.svg" width="48" title="TypeScript">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/TailwindCSS-Dark.svg" width="48" title="NativeWind">
<img src="https://github.com/tandpfun/skill-icons/blob/main/icons/SQLite.svg" width="48" title="SQLite">
</p>

---

<h2 id="installation">
  Installation & Setup
</h2>

### 1. Clone the Repository

```bash
git clone https://github.com/Victor-Zarzar/react-native-crud
cd react-native-crud
```

### 2. Install Dependencies

```bash
bun i
```

### 3. Generate Database Migrations

```bash
bun run db:generate
```

### 4. Run the App (Start the development server):

```bash
bun run dev
```

Open the app:

- Press `i` → iOS Simulator
- Press `a` → Android Emulator
- Press `w` → Web

## Or scan the QR Code using Expo Go on your device.

---

<h2 id="scripts">
  Available Scripts
</h2>

| Script                   | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `bun run dev`            | Start the development server (with cache clear) |
| `bun run android`        | Start on Android Emulator                       |
| `bun run ios`            | Start on iOS Simulator                          |
| `bun run web`            | Start on Web                                    |
| `bun run db:generate`    | Generate Drizzle ORM migration files            |
| `bun run prebuild`       | Rebuild native directories with Expo Prebuild   |
| `bun run ios:native`     | Run native iOS build                            |
| `bun run android:native` | Run native Android build                        |
| `bun run lint`           | Check code with Biome                           |
| `bun run lint:fix`       | Auto-fix lint issues with Biome                 |
| `bun run format`         | Format code with Biome                          |
| `bun run typecheck`      | Run TypeScript type checking                    |
| `bun test`               | Run tests with Bun                              |

---

<h2 id="core-technologies">
  Core Technologies
</h2>

- **React Native** – Cross-platform mobile framework
- **Expo SDK** – Development platform and tooling
- **Expo Router** – File-based routing
- **TypeScript** – Type-safe development
- **NativeWind** – Tailwind CSS for React Native
- **SQLite (Expo SQLite)** – Local persistent storage for CRUD operations
- **Drizzle ORM** – Type-safe ORM for SQLite with migration support
- **Expo Crypto** – Cryptographic utilities for secure ID generation and hashing
- **React Native Reusables** – Accessible UI component system

---

<h2 id="features">
  Key Features
</h2>

- Full CRUD operations — Create, Read, Update, and Delete records
- Local data persistence with SQLite via Expo SQLite
- Type-safe database queries with Drizzle ORM
- Drizzle Studio integration via `expo-drizzle-studio-plugin` for database inspection during development
- Secure ID generation with Expo Crypto
- Production-ready scalable structure
- File-based routing with Expo Router
- Dark mode support
- Reusable component system preconfigured
- Edge-to-edge support
- New Architecture enabled (Fabric + TurboModules)
- Cross-platform (iOS, Android, Web)
- Fully compatible with Expo Go

---

<h2 id="prerequisites">
  Prerequisites
</h2>

Before starting, ensure you have:

- Node.js (v24+)
- npm or Bun
- Expo CLI
- iOS Simulator (Mac) or Android Emulator
- Git

---

<h2 id="project-structure">
  Project Structure
</h2>

```
react-native-crud/
├── src/
│   ├── app/                          # Expo Router routes
│   │   ├── (auth)/                   # Public auth routes
│   │   │   ├── +html.tsx
│   │   │   ├── +not-found.tsx
│   │   │   └── _layout.tsx
│   └── shared/
│       ├── auth/                     # Auth context & logic
│       │   ├── context.ts
│       │   ├── index.ts
│       │   └── provider.tsx
│       ├── components/
│       │   ├── language/             # i18n / language components
│       │   │   ├── flags/
│       │   │   └── index.tsx
│       │   └── ui/                   # Reusable UI components
│       │       ├── forgot-password-form.tsx
│       │       ├── reset-password-form.tsx
│       │       ├── sign-in-form.tsx
│       │       ├── sign-up-form.tsx
│       │       ├── social-connections.tsx
│       │       ├── user-menu.tsx
│       │       └── verify-email-form.tsx
│       ├── constants/
│       │   ├── Colors.ts
│       │   └── theme-icon.tsx
│       ├── db/                       # Database layer
│       │   ├── client.ts             # SQLite client setup
│       │   ├── db-migration.tsx      # Migration runner
│       │   ├── index.ts
│       │   ├── provider.tsx          # DB context provider
│       │   └── schema.ts             # Drizzle schema definitions
│       ├── hooks/
│       │   ├── useAuth.ts
│       │   └── useColorScheme.ts
│       ├── lib/
│       │   ├── theme.ts
│       │   └── utils.ts
│       ├── services/
│       │   └── userService.ts
│       └── types/
│           ├── auth.ts
│           ├── icon.ts
│           └── locale.ts
├── tests/                            # Test files
├── assets/                           # Images and fonts
├── global.css                        # Global styles
├── app.json                          # Expo configuration
├── drizzle.config.ts                 # Drizzle Kit configuration
├── package.json                      # Dependencies
├── tailwind.config.js                # NativeWind config
├── tsconfig.json                     # TypeScript config
└── babel.config.js                   # Babel config
```

---

<h2 id="database">
  Database & Migrations
</h2>

This project uses **Drizzle ORM** on top of **Expo SQLite** for type-safe, local database operations.

### Generating Migrations

After modifying the schema, run:

```bash
bun run db:generate
```

This will generate SQL migration files inside the `drizzle/` folder using Drizzle Kit.

### Inspecting the Database with Drizzle Studio

With the development server running (`bun run dev`), press `Shift + M` in the terminal to open the Dev Tools menu, then select **`expo-drizzle-studio-plugin`** from the list. Drizzle Studio will open in a new browser tab, allowing you to browse and manage your local SQLite database visually.

> **Note:** This plugin is available during native development only (iOS/Android). It does not work on Web.

---

<h2 id="adding-components">
  Adding Components
</h2>

```bash
npx react-native-reusables/cli@latest add input textarea
```

Install all components:

```bash
npx react-native-reusables/cli@latest add --all
```

---

<h2 id="deployment">
  Deployment
</h2>

### Using EAS (Recommended)

```bash
npm install -g eas-cli
eas login
eas build
```

Documentation: https://docs.expo.dev/eas/

---

<h2 id="contributing">
  Contributing
</h2>

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

<h2 id="license">
  License
</h2>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<h2 id="author">
  Author
</h2>

Victor Zarzar - [@Victor-Zarzar](https://github.com/Victor-Zarzar)

Project Link: [https://github.com/Victor-Zarzar/react-native-crud](https://github.com/Victor-Zarzar/react-native-crud)

---
