<h1 align="center" id="header">
  React Native Basic Auth
</h1>
<p align="center">
  <img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native">
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo">
  <img src="https://img.shields.io/badge/Expo_SDK-55-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo SDK 55">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Expo_Router-000000?style=for-the-badge&logo=expo&logoColor=white" alt="Expo Router">
  <img src="https://img.shields.io/badge/NativeWind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="NativeWind">
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
  <img src="https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM">
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
</p>
<p align="center">
  A <strong>starter boilerplate</strong> for authentication in React Native, built with Expo Router, NativeWind, Drizzle ORM, and SQLite. Includes sign up, sign in, sign out, forgot password, and reset password flows — designed as a solid foundation to build on, not a production-ready solution out of the box.
</p>

> ⚠️ **This is a starting point.** Before shipping to production, review the [Security Considerations](#security-considerations) section below. Several intentional simplifications were made to keep this boilerplate approachable.

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

<h2 id="security-considerations">
  Security Considerations
</h2>

This project is intentionally simplified. Before using it as a base for a real-world app, you should address the following:

### Password Hashing

Currently, passwords are hashed using `Crypto.CryptoDigestAlgorithm.SHA256` via `expo-crypto`. **SHA-256 is not suitable for password hashing in production** — it is fast by design, which makes brute-force attacks trivial.

> The `argon2` npm package is **not compatible with React Native** as it relies on Node.js native bindings (C++). Use one of the alternatives below instead.

**Option 1 — `react-native-argon2`** (recommended, requires `expo prebuild` — exits Expo Go):

```bash
bun add react-native-argon2
bun run prebuild
```

```ts
import Argon2 from "react-native-argon2";

async function hashPassword(password: string, salt: string): Promise<string> {
  const { rawHash } = await Argon2.hash(password, salt, { mode: "argon2id" });
  return rawHash;
}
```

**Option 2 — `expo-crypto` with SHA-512 + salt** (no eject required, stays in Expo Go):

```ts
import * as Crypto from "expo-crypto";

async function hashPassword(password: string, salt: string): Promise<string> {
  return Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA512,
    salt + password,
  );
}
```

> SHA-512 is still not ideal for password hashing, but significantly better than SHA-256 when combined with a unique per-user salt stored alongside the hash.

**Option 3 — Backend authentication** (most secure for production):
Move auth entirely to a server (Node.js, Go, etc.) where Argon2id runs natively, and have the app communicate via HTTPS. Services like [Supabase](https://supabase.com) or [Firebase Auth](https://firebase.google.com/products/auth) handle this out of the box.

> Argon2id is the current recommendation from [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) and [RFC 9106](https://www.rfc-editor.org/rfc/rfc9106).

### Other Areas to Improve Before Production

- **Password reset tokens** — currently passed via route params (visible in navigation). Consider storing them only server-side or using a deeper link strategy.
- **Session management** — sessions are stored in SQLite with no expiry. Add a `expiresAt` column and invalidate stale sessions.
- **Input validation** — add stricter password rules (min length, complexity) via Zod schemas.
- **Rate limiting** — no protection against brute-force login attempts exists in a local-first setup; consider adding attempt counters.
- **Token expiry** — reset tokens expire after 15 minutes by default; adjust as needed for your use case.
- **No email verification** — there is no email confirmation step on sign up.
- **Local-only** — this project uses SQLite with no backend. For multi-device or server-side auth, you will need to integrate a backend (e.g., Supabase, Firebase, or a custom API).

---

<h2 id="installation">
  Installation & Setup
</h2>

### 1. Clone the Repository

```bash
git clone https://github.com/Victor-Zarzar/react-native-basic-auth
cd react-native-basic-auth
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
| `bun run upgrade-deps`   | Fix and align dependencies with Expo SDK        |
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
- **Expo SDK 55** – Development platform and tooling
- **Expo Router** – File-based routing
- **TypeScript** – Type-safe development
- **NativeWind** – Tailwind CSS for React Native
- **SQLite (Expo SQLite)** – Local persistent storage
- **Drizzle ORM** – Type-safe ORM for SQLite with migration support
- **Expo Crypto** – Cryptographic utilities (SHA-256 for dev; replace with Argon2id for prod)
- **React Native Reusables** – Accessible UI component system

---

<h2 id="features">
  Key Features
</h2>

- Complete auth flow — Sign Up, Sign In, Sign Out, Forgot Password, Reset Password
- Local data persistence with SQLite via Expo SQLite
- Type-safe database queries with Drizzle ORM
- Drizzle Studio integration via `expo-drizzle-studio-plugin` for database inspection during development
- Password hashing with Expo Crypto (SHA-256 — see [Security Considerations](#security-considerations) for production upgrade path)
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
react-native-basic-auth/
├── .expo/                            # Expo cache and config
├── .github/                          # GitHub Actions & workflows
├── assets/                           # Images and fonts
├── drizzle/                          # Generated SQL migration files
├── i18n/                             # Internationalization config
├── node_modules/                     # Dependencies
├── src/
│   ├── app/                          # Expo Router routes
│   │   ├── (auth)/                   # Public auth routes (unauthenticated)
│   │   │   ├── _layout.tsx           # Auth stack layout
│   │   │   ├── forgot-password.tsx   # Forgot password screen
│   │   │   ├── reset-password.tsx    # Reset password screen
│   │   │   ├── signin.tsx            # Sign in screen
│   │   │   └── signup.tsx            # Sign up screen
│   │   ├── (main)/                   # Protected main routes (authenticated)
│   │   │   └── (tabs)/               # Bottom tab navigator
│   │   │       ├── about/            # About tab
│   │   │       │   ├── _layout.tsx
│   │   │       │   └── index.tsx
│   │   │       ├── home/             # Home tab
│   │   │       │   ├── _layout.tsx
│   │   │       │   └── index.tsx
│   │   │       └── settings/         # Settings tab
│   │   │           ├── _layout.tsx
│   │   │           └── index.tsx
│   │   ├── +html.tsx                 # Custom HTML shell (web)
│   │   ├── +not-found.tsx            # 404 screen
│   │   └── _layout.tsx               # Root layout
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
│       │       ├── header-avatar.tsx
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

</br>

<p align="center">
  <img src="https://github.com/user-attachments/assets/05dce4c2-72cd-46c9-afb9-d04146848ea2" width="1000" height="600" alt="SQL Drizzle Studio">
</p>

</br>

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

Project Link: [https://github.com/Victor-Zarzar/react-native-basic-auth](https://github.com/Victor-Zarzar/react-native-basic-auth)

---
