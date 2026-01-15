## 🕹️ Retro_Blast
"A Synthwave Arcade Portal for the Modern Web."

Retro_Blast is a high-energy, synthwave-inspired arcade portal designed to recreate the experience of a classic 80s game lounge inside the browser. It allows users to browse a library of retro-style games and play them instantly through a seamless, full-screen pop-up modal interface.

## Live Demo
👉 https://retroblast.onrender.com

## 🚀 Features
### Immersive Modal Gameplay
A custom-built modal system that uses iframes to load game APIs, allowing users to play without navigating away from the home page.

### Dynamic Game Library
The game grid is rendered dynamically using JavaScript, making it easy to scale and add new titles.

### Synthwave Aesthetic
- **Glitch Text Effects:** CSS-driven animations for a "corrupted data" look  
- **CRT Overlay:** Scanline and flicker effects to mimic vintage monitors  
- **Parallax Background:** Deep-space aurora effect that reacts to mouse movement

### Responsive UI
Fully fluid layout using CSS Grid and Flexbox to ensure the arcade looks great on any screen size.


## 🛠️ Tech Stack
HTML5: Semantic structure for accessible and high-performance layouts.

CSS3: Advanced styling using CSS Variables, Keyframe animations, and filter effects.

JavaScript (ES6+): DOM manipulation, modal state management, and dynamic rendering of the game grid.

Flask (Python): Backend routing and user authentication.

Google Fonts: Utilizing 'Press Start 2P' for that authentic 8-bit feel.


## 📁 Project Structure

├── app.py              # Flask application entry point  
├── static/             # CSS, JavaScript, and assets  
│   ├── *.css           # Page-specific and theme styles  
│   └── *.js            # Game logic, modal control, effects  
├── templates/          # Jinja2 HTML templates  
│   ├── index.html      # Landing page  
│   ├── homepage.html   # Arcade dashboard  
│   ├── login.html      # Authentication  
│   └── signup.html     # Registration  
└── requirements.txt    # Python dependencies

The project follows a clean MVC-style separation with Flask handling routing, templates managing views, and static assets controlling presentation and interactivity.



## 🕹️ How to Run
Clone the repository:

Bash
git clone https://github.com/priyaparate/RetroBlast.git

cd RetroBlast

python -m venv venv
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

python app.py

Visit http://127.0.0.1:5000 in your browser.

## 🎨 Thematic Palette
Background: #0e001b (Galactic Dark)

Primary Neon: #ff00d4 (Hyper Pink)

Secondary Neon: #ff00ff (Cyber Magenta)

Accent: #FFFF66 (Retro Yellow)

## 📝 License
This project is open-source and available under the MIT License.

## 👑 Credits

**Project Lead & Backend Engineer:**  
Shreya Shahu – Backend integration, API logic, database architecture, and deployment pipeline

**UI & Database Contributors:**  
Priya Parate – UI design and database creation  
Himani Ingole – UI design and database creation


Inspired by 80s cyberpunk aesthetics and the golden age of arcade gaming.
