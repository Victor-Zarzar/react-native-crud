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
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
</p>

<p align="center">
  A full-featured CRUD application built with React Native, Expo Router, NativeWind, and SQLite. Create, read, update, and delete records with a clean, production-ready mobile interface.
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

### 3. Run the App (Start the development server):

```bash
bun run dev
```

Open the app:

- Press `i` → iOS Simulator
- Press `a` → Android Emulator
- Press `w` → Web

## Or scan the QR Code using Expo Go on your device.

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
- **React Native Reusables** – Accessible UI component system

---

<h2 id="features">
  Key Features
</h2>

- Full CRUD operations — Create, Read, Update, and Delete records
- Local data persistence with SQLite via Expo SQLite
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
├── app/                     # Expo Router routes
│   ├── (tabs)/              # Tab navigation
│   ├── _layout.tsx          # Root layout
│   └── index.tsx            # Home screen
├── shared/
│   ├── components/          # Reusable UI components
│   │   └── ui/              # React Native Reusables
│   ├── constants/           # Constants and configs
│   ├── lib/                 # Utilities and database helpers
│   └── global.css           # NativeWind global styles
├── assets/                  # Images and fonts
├── app.json                 # Expo configuration
├── package.json             # Dependencies
├── tailwind.config.js       # NativeWind config
├── tsconfig.json            # TypeScript config
└── babel.config.js          # Babel config
```

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
