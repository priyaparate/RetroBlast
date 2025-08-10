document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
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
            title: "Super Sprint",
            description: "Sprint and jump over spikes, obstacles, springs, and lasers. Run as long as you can in this HTML5 game.",
            image: "https://www.arcadeclub.co.uk/cdn/game-library/super-sprint/480/super-sprint_title_@480.jpg",
            playableUrl:"https://zv1y2i8p.play.gamezop.com/g/HyV_Nm-kK",
        },
        {
            title: "Fizz Fuss",
            description: "Is bartending on your bucket-list? Now's your chance! Serve your customers well.",
            image: "https://www.frivls.com/thumbs/fizz-fuss_1.webp",
            playableUrl:"https://zv1y2i8p.play.gamezop.com/g/S1VZ-LjQUUl" 
        },
        {
            title: "Pixel Fighter",
            description: "A classic 8-bit fighting game with special moves.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXKGKCYOmbV8I8VzOWFRKRsQWMS7bkpLaag&s",
            playableUrl:"https://zv1y2i8p.play.gamezop.com/g/BJ9bvzIKdJl" 
        },
        {
            title: "Asteroid Commando",
            description: "Blast your way through waves of alien ships.",
            image: "https://via.placeholder.com/250x150/E0E0FF/000000?text=GAME+4",
            link: "#",
            apiId: 510
        },
        {
            title: "Starship Defense",
            description: "Protect your space station from invading forces.",
            image: "https://via.placeholder.com/250x150/8E00FF/000000?text=GAME+5",
            link: "#",
            apiId: 517
        },
        {
            title: "Cosmic Quest",
            description: "An epic RPG journey across the galaxy.",
            image: "https://via.placeholder.com/250x150/CE65FF/000000?text=GAME+6",
            link: "#",
            apiId: 508
        },
    ];


    // --- Game Logic Functions ---

    function embedGame(url) {
        gameGridContainer.classList.add('hidden');
        gameDetailsContainer.classList.remove('hidden');
        
        const iframeHTML = `
            <iframe seamless="seamless" 
                    allowtransparency="true" 
                    allowfullscreen="true" 
                    frameborder="0" 
                    style="width: 100%; height: 600px; border: 0px;" 
                    src="${url}">
            </iframe>
        `;

        gameDisplay.innerHTML = iframeHTML;
    }

    /*
        These functions are commented out.
        You can delete them if you're sure you won't need the API.
    */
    // async function fetchGame(gameId) {
    //     gameGridContainer.classList.add('hidden');
    //     gameDetailsContainer.classList.remove('hidden');
    //     gameDisplay.innerHTML = `<h3 class="pixel-text">LOADING...</h3>`;
    //
    //     const apiUrl = `https://api.allorigins.win/raw?url=https://www.freetogame.com/api/game?id=${gameId}`;
    //
    //     try {
    //         const response = await fetch(apiUrl);
    //         if (!response.ok) {
    //             throw new Error(`API Error: ${response.status}`);
    //         }
    //         const gameData = await response.json();
    //         displayGameContent(gameData);
    //     } catch (error) {
    //         console.error('Failed to fetch game:', error);
    //         gameDisplay.innerHTML = `<p class="pixel-text">ERROR: COULD NOT LOAD GAME.</p>`;
    //     }
    // }
    //
    // function displayGameContent(game) {
    //     const screenshotsHtml = game.screenshots ?
    //         game.screenshots.map(screenshot => `<img src="${screenshot.image}" alt="Screenshot" class="screenshot-img pixel-art-img">`).join('') :
    //         `<p class="pixel-text">No screenshots available.</p>`;
    //
    //     gameDisplay.innerHTML = `
    //         <h2 class="pixel-text" style="color: var(--accent-yellow);">${game.title}</h2>
    //         ...
    //     `;
    // }


    // --- Dynamic Card Generation and Event Listeners ---
    function generateGameCards() {
        gameGrid.innerHTML = '';
        gameGrid.classList.remove('loading-grid');

        games.forEach((game, index) => {
            const card = document.createElement('li');
            card.classList.add('game-card');
            card.style.animationDelay = `${index * 0.1}s`;

            // Use a ternary operator to dynamically set the data attribute
            const dataAttribute = game.playableUrl 
                ? `data-playable-url="${game.playableUrl}"` 
                : (game.apiId ? `data-game-id="${game.apiId}"` : '');
            
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${game.image}" alt="${game.title}" class="card-image">
                </div>
                <div class="card-content">
                    <h3 class="card-title pixel-text">${game.title}</h3>
                    <p class="card-description pixel-text">${game.description}</p>
                    <button class="play-btn pixel-text" ${dataAttribute}>PLAY NOW</button>
                </div>
            `;
            gameGrid.appendChild(card);
        });
        
        // The single, correct event listener for all 'PLAY NOW' buttons
        document.querySelectorAll('.play-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const playableUrl = event.target.dataset.playableUrl;
                const gameId = event.target.dataset.gameId;

                if (playableUrl) {
                    embedGame(playableUrl);
                } else if (gameId) {
                    fetchGame(gameId); // This call will now work if fetchGame is defined and in scope
                }
            });
        });
    }

    // --- Loading Screen Transition ---
    setTimeout(() => {
        generateGameCards();
    }, 1500);


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