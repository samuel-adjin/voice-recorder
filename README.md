# 🎙️ Voice Recorder — Next.js

> A simple browser-based voice recorder built with Next.js.  
> Record, play, download, and delete your audio recordings — with waveform visualization powered by Wavesurfer.js and state managed via React Context + useReducer.

**Live Demo:** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

---

## 🧭 Table of Contents
- [What it Does](#what-it-does)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [State Management](#state-management)
- [Wavesurfer Notes](#wavesurfer-notes)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## 📝 What it Does
This project is a simple **voice recorder app** that allows users to:
- Record audio using their microphone
- View a live waveform while recording or playing back
- Play, download, and delete recordings
- Manage app-wide state with **React Context + useReducer**

Perfect for learning audio APIs, reducer patterns, and integrating Wavesurfer in a modern React app.

---

## ⚙️ Features
✅ Start / Stop recording  
✅ Live waveform visualization (record & playback)  
✅ Play / Pause audio  
✅ Download recordings  
✅ Delete from list  
✅ Global state management (Context + useReducer)  
✅ Lightweight UI  

---

## 🧱 Tech Stack
- **Next.js (React 18+)**
- **Wavesurfer.js** (with Record Plugin)
- **React Context API + useReducer**
- **Web Audio API / MediaRecorder**
- *(Optional)* Tailwind CSS for styling

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/<your-username>/voice-recorder-nextjs.git
cd voice-recorder-nextjs

# Install dependencies
npm install
# or
yarn install
