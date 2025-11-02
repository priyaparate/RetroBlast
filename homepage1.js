document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DOM Elements ---
    
    // Elements from your new JS
    const retroHeader = document.querySelector('.retro-header');
    const navLogo = document.querySelector('.nav-logo');
    const gameGridContainer = document.getElementById('game-grid-container');
    const gameGrid = document.getElementById('game-grid');
    const retroBackground = document.getElementById('retro-background');

    // Elements for the Modal (from your HTML)
    const modalOverlay = document.getElementById('game-modal-overlay');
    const gameModalContent = document.getElementById('game-modal-content'); // Get the modal content window
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const gameDisplay = document.getElementById('game-display'); // This is the one INSIDE the modal


    // --- 2. Header & Background Effects (from your JS) ---
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


    // --- 3. Game Data (from your JS) ---
    // Added width and height properties for each game
    const games = [
        {
            title: "Super Sprint",
            description: "Sprint and jump over spikes, obstacles, springs, and lasers. Run as long as you can.",
            image: "https://www.arcadeclub.co.uk/cdn/game-library/super-sprint/480/super-sprint_title_@480.jpg",
            playableUrl:"https://zv1y2i8p.play.gamezop.com/g/HyV_Nm-kK",
            width: 800,
            height: 600
        },
        {
            title: "Fizz Fuss",
            description: "Is bartending on your bucket-list? Now's your chance! Serve your customers well.",
            image: "https://www.frivls.com/thumbs/fizz-fuss_1.webp",
            playableUrl:"https://zv1y2i8p.play.gamezop.com/g/S1VZ-LjQUUl",
            width: 800,
            height: 600
        },
        {
            title: "Brick Plunge",
            description: "Are you nostalgic of the timeless brick arranging game? Who isn't? You are in the right place!",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpXKGKCYOmbV8I8VzOWFRKRsQWMS7bkpLaag&s",
            playableUrl:"https://zv1y2i8p.play.gamezop.com/g/BJ9bvzIKdJl",
            width: 400,
            height: 600
        },
        {
            title: "Super Mario",
            description: "Hey! , it's me Mario!",
            image: "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png",
            playableUrl:"https://funhtml5games.com/?play=mariojump",
            width: 768,
            height: 720
        },
        {
            title: "Sonic the Hedgehog",
            description: "Gotta Go Fast",
            image: "https://m.gjcdn.net/game-header/950/429794-x7hp4xub-v4.jpg",
            playableUrl:"https://funhtml5games.com?embed=sonic",
            width: 800,
            height: 600
        },
        {
            title: "Pac Man",
            description: "A labyrinth of fun & amusement!.",
            image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/08/pacman.jpg",
            playableUrl:"https://funhtml5games.com?embed=pacman",
            width: 448,
            height: 576
        },
        {
            title: "Space Invaders",
            description: "Stop the alien invasion!.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmjmro8wDG7Aqo8YWD_0s6VYYwZCfUQbGqg&s",
            playableUrl:"https://funhtml5games.com?embed=spaceinvaders",
            width: 448,
            height: 576
        },
        {
            title: "Flappy Bird",
            description: "Tap to Fly, Die to Try",
            image: "https://c4.wallpaperflare.com/wallpaper/838/630/344/flappy-bird-game-popular-news-wallpaper-preview.jpg",
            playableUrl:"https://funhtml5games.com?embed=flappy",
            width: 400,
            height: 600
        }
    ];


    // --- 4. Modal Control Functions (To match your HTML) ---
    function openModal(gameUrl, width, height) {
        // Create an iframe and load the game
        const iframe = document.createElement('iframe');
        iframe.src = gameUrl;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', 'true');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        
        // Clear any old game and add the new one
        gameDisplay.innerHTML = '';
        gameDisplay.appendChild(iframe);
        
        // --- Resize Logic ---
        if (width && height) {
            // We have dimensions. Calculate the best fit.
            const padding = 40; // Viewport padding
            // Max height is 90vh, minus ~60px for the close button area
            const maxAllowedHeight = (window.innerHeight * 0.9) - 60;
            const maxAllowedWidth = window.innerWidth - padding;

            let finalWidth = parseInt(width);
            let finalHeight = parseInt(height);

            // Check if the game dimensions are larger than the allowed space
            if (finalWidth > maxAllowedWidth || finalHeight > maxAllowedHeight) {
                // Calculate the ratios
                const widthRatio = maxAllowedWidth / finalWidth;
                const heightRatio = maxAllowedHeight / finalHeight;
                
                // Use the smaller ratio to scale the game down, maintaining aspect ratio
                const ratio = Math.min(widthRatio, heightRatio);
                
                finalWidth = finalWidth * ratio;
                finalHeight = finalHeight * ratio;
            }
            
            // Set the size of the game-display (the iframe's container)
            gameDisplay.style.width = `${finalWidth}px`;
            gameDisplay.style.height = `${finalHeight}px`;

            // Set the modal content window to shrink-wrap the game display
            gameModalContent.style.width = `${finalWidth}px`; // Match game width
            gameModalContent.style.height = 'auto'; // Let height be automatic
            gameModalContent.style.maxHeight = '90vh'; // Re-apply max height

        } else {
            // No dimensions provided. Reset to CSS defaults.
            gameDisplay.style.width = '';
            gameDisplay.style.height = '';
            gameModalContent.style.width = '';
            gameModalContent.style.height = '';
            gameModalContent.style.maxHeight = ''; // Let CSS handle it
        }

        // Show the modal
        modalOverlay.classList.remove('hidden');
    }

    function closeModal() {
        // Hide the modal
        modalOverlay.classList.add('hidden');
        
        // **IMPORTANT:** Clear the iframe's content
        // This stops the game (and its audio) from running in the background.
        gameDisplay.innerHTML = ''; 
        
        // --- Reset Modal Size ---
        // Clear inline styles so it returns to CSS defaults
        gameDisplay.style.width = '';
        gameDisplay.style.height = '';
        gameModalContent.style.width = '';
        gameModalContent.style.height = '';
        gameModalContent.style.maxHeight = '';
    }


    // --- 5. Dynamic Card Generation (from your JS) ---
    function generateGameCards() {
        gameGrid.innerHTML = '';
        gameGrid.classList.remove('loading-grid');

        games.forEach((game, index) => {
            const card = document.createElement('li');
            card.classList.add('game-card');
            card.style.animationDelay = `${index * 0.1}s`;

            // Use a ternary operator to dynamically set the data attribute
            let dataAttributes = "";
            if (game.playableUrl) {
                dataAttributes += ` data-playable-url="${game.playableUrl}"`;
                // Add width and height attributes if they exist
                if (game.width && game.height) {
                    dataAttributes += ` data-game-width="${game.width}"`;
                    dataAttributes += ` data-game-height="${game.height}"`;
                }
            } else if (game.apiId) {
                // Fallback for potential API-based games
                dataAttributes += ` data-game-id="${game.apiId}"`;
            }
            
            // This is your card structure
            card.innerHTML = `
                <div class.bind="card-image-container">
                    <img src="${game.image}" alt="${game.title}" class="card-image" onerror="this.src='https://placehold.co/400x300/24193b/00f0ff?text=No+Image';">
                </div>
                <div class="card-content">
                    <h3 class="card-title pixel-text">${game.title}</h3>
                    <p class="card-description pixel-text">${game.description}</p>
                    <button class="play-btn pixel-text" ${dataAttributes}>PLAY NOW</button>
                </div>
            `;
            // Add fallback image in case one fails to load
            
            gameGrid.appendChild(card);
        });
        // NOTE: I removed the event listener loop from here
        // We will use a more efficient "event delegation" listener below
    }


    // --- 6. Event Listeners ---
    
    // Listen for clicks on the ENTIRE game grid
    gameGrid.addEventListener('click', (event) => {
        // Check if the clicked element (or its parent) is a .play-btn
        const playButton = event.target.closest('.play-btn');

        if (playButton) {
            const playableUrl = playButton.dataset.playableUrl;
            // Get the new width and height attributes
            const gameWidth = playButton.dataset.gameWidth;
            const gameHeight = playButton.dataset.gameHeight;

            // We ignore gameId for now since you removed the fetchGame function
            if (playableUrl) {
                // Pass width and height (or null if they don't exist)
                openModal(playableUrl, gameWidth || null, gameHeight || null);
            }
        }
    });

    // Listener for the "CLOSE GAME" button
    modalCloseBtn.addEventListener('click', closeModal);

    // Listener to close modal by clicking on the dark overlay area
    modalOverlay.addEventListener('click', (event) => {
        // Only close if the click is on the overlay itself
        if (event.target === modalOverlay) {
            closeModal();
        }
    });


    // --- 7. Initialization ---
    setTimeout(() => {
        generateGameCards();
    }, 1500);

});

