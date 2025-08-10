document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    // All variables must be defined here to be used throughout the script
    const retroHeader = document.querySelector('.retro-header');
    const navLogo = document.querySelector('.nav-logo');
    const gameGridContainer = document.getElementById('game-grid-container');
    const gameDetailsContainer = document.getElementById('game-details-container');
    const gameDisplay = document.getElementById('game-display');
    const backToGridBtn = document.getElementById('back-to-grid-btn');
    const gameGrid = document.getElementById('game-grid');


    // --- Header Animations ---
    setTimeout(() => {
        retroHeader.style.opacity = '1';
        retroHeader.style.transform = 'translateY(0)';
    }, 500);

    setInterval(() => {
        navLogo.style.textShadow = `
            0 0 5px var(--purple-light),
            0 0 10px var(--purple-light),
            0 0 15px var(--purple-light)`;
        setTimeout(() => {
            navLogo.style.textShadow = `
                0 0 5px var(--purple-light),
                0 0 10px var(--purple-light)`;
        }, 300);
    }, 5000);


    // --- Game Data ---
    const games = [
        {
            title: "Galactic Drifter",
            description: "An endless runner through a neon asteroid field.",
            image: "https://via.placeholder.com/250x150/8E00FF/000000?text=GAME+1",
            link: "https://poki.com/en/g/galactic-empire",
            apiId: 582 // I've added a mock apiId here for consistency
        },
        {
            title: "Cyberpunk Racer",
            description: "Race through a retro-futuristic city with hovercars.",
            image: "https://www.freetogame.com/g/582/thumbnail.jpg",
            apiId: 582 // Using a real Free-to-Game ID
        },
        {
            title: "Pixel Fighter",
            description: "A classic 8-bit fighting game with special moves.",
            image: "https://via.placeholder.com/250x150/F2A3FF/000000?text=GAME+3",
            link: "#",
            apiId: 521 // Example using another Free-to-Game ID
        },
        {
            title: "Asteroid Commando",
            description: "Blast your way through waves of alien ships.",
            image: "https://via.placeholder.com/250x150/E0E0FF/000000?text=GAME+4",
            link: "#",
            apiId: 510 // Example
        },
        {
            title: "Starship Defense",
            description: "Protect your space station from invading forces.",
            image: "https://via.placeholder.com/250x150/8E00FF/000000?text=GAME+5",
            link: "#",
            apiId: 517 // Example
        },
        {
            title: "Cosmic Quest",
            description: "An epic RPG journey across the galaxy.",
            image: "https://via.placeholder.com/250x150/CE65FF/000000?text=GAME+6",
            link: "#",
            apiId: 508 // Example
        },
    ];

    // --- Dynamic Card Generation and Event Listeners ---
    function generateGameCards() {
        gameGrid.innerHTML = '';
        gameGrid.classList.remove('loading-grid');

        games.forEach((game, index) => {
            const card = document.createElement('li');
            card.classList.add('game-card');
            card.style.animationDelay = `${index * 0.1}s`;

            // ➡️ Removed the <a> tag wrapping the entire card
            // ➡️ The button now has the data-game-id attribute
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${game.image}" alt="${game.title}" class="card-image">
                </div>
                <div class="card-content">
                    <h3 class="card-title pixel-text">${game.title}</h3>
                    <p class="card-description pixel-text">${game.description}</p>
                    <button class="play-btn pixel-text" data-game-id="${game.apiId}">PLAY NOW</button>
                </div>
            `;
            gameGrid.appendChild(card);
        });
        
        // ➡️ The event listeners are now attached AFTER the cards are created.
        document.querySelectorAll('.play-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const gameId = event.target.dataset.gameId;
                fetchGame(gameId);
            });
        });
    }

    // --- Loading Screen Transition ---
    setTimeout(() => {
        generateGameCards();
    }, 1500);


    // --- API Integration and Display Logic ---
    async function fetchGame(gameId) {
        // Hide the grid and show the loading screen
        gameGridContainer.classList.add('hidden');
        gameDetailsContainer.classList.remove('hidden');
        gameDisplay.innerHTML = `<h3 class="pixel-text">LOADING...</h3>`;

        const apiUrl = `https://api.allorigins.win/raw?url=https://www.freetogame.com/api/game?id=${gameId}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            const gameData = await response.json();
            console.log("Fetched Game Data:", gameData);
            displayGameContent(gameData);
        } catch (error) {
            console.error('Failed to fetch game:', error);
            gameDisplay.innerHTML = `<p class="pixel-text">ERROR: COULD NOT LOAD GAME.</p>`;
        }
    }

function displayGameContent(game) {
    // Check if the screenshots property exists before trying to map it
    const screenshotsHtml = game.screenshots ?
        game.screenshots.map(screenshot => `<img src="${screenshot.image}" alt="Screenshot" class="screenshot-img pixel-art-img">`).join('') :
        `<p class="pixel-text">No screenshots available.</p>`;

    // Now build your display using the new screenshotsHtml variable
    gameDisplay.innerHTML = `
        <h2 class="pixel-text" style="color: var(--accent-yellow);">${game.title}</h2>
        <div class="game-info">
            <img src="${game.thumbnail}" alt="${game.title} thumbnail" class="game-thumbnail pixel-art-img">
            <div class="info-text">
                <p class="pixel-text">Platform: ${game.platform}</p>
                <p class="pixel-text">Genre: ${game.genre}</p>
                <p class="pixel-text">Developer: ${game.developer}</p>
            </div>
        </div>
        <p class="pixel-text game-description-full">${game.description}</p>
        <h3 class="pixel-text" style="color: var(--purple-bright);">Screenshots</h3>
        <div class="screenshots-grid">
            ${screenshotsHtml}
        </div>
    `;
}

    // --- UI State Management ---
    backToGridBtn.addEventListener('click', () => {
        gameDetailsContainer.classList.add('hidden');
        gameGridContainer.classList.remove('hidden');
    });

    // --- Parallax Effect for Background ---
    const retroBackground = document.getElementById('retro-background');
    const backgroundSize = 500;
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        const bgPosX = mouseX * backgroundSize * -1;
        const bgPosY = mouseY * backgroundSize * -1;
        retroBackground.style.backgroundPosition = `
            ${bgPosX * 0.1}% ${bgPosY * 0.1}%,
            ${bgPosX * 0.2}% ${bgPosY * 0.2}%,
            ${bgPosX * 0.3}% ${bgPosY * 0.3}%,
            ${bgPosX * 0.4}% ${bgPosY * 0.4}%`;
    });
});