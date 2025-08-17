/*generated pallet animation for header*/
 document.addEventListener('DOMContentLoaded', () => {
                const header = document.querySelector('.header-animation');
                for (let i = 0; i < 20; i++) {
                    const pellet = document.createElement('div');
                    pellet.classList.add('pellet');
                    pellet.style.left = `${i * 5}%`;
                    header.appendChild(pellet);
                }
            });
/* Add some random floating pixels in the background for extra retro effect*/
        document.addEventListener('DOMContentLoaded', () => {
            const pixelBg = document.querySelector('.pixel-bg');
            for (let i = 0; i < 50; i++) {
                const pixel = document.createElement('div');
                pixel.style.position = 'absolute';
                pixel.style.width = '2px';
                pixel.style.height = '2px';
                pixel.style.backgroundColor = ['#ff00ff', '#00ffff', '#ffff00'][Math.floor(Math.random() * 3)];
                pixel.style.left = `${Math.random() * 100}%`;
                pixel.style.top = `${Math.random() * 100}%`;
                pixel.style.opacity = `${Math.random() * 0.7 + 0.3}`;
                pixel.style.boxShadow = `0 0 5px ${pixel.style.backgroundColor}`;
                pixel.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
                pixel.style.animationDelay = `${Math.random() * 2}s`;
                pixelBg.appendChild(pixel);
            }
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;
    if(b){var d=b.createElement('script');
        d.innerHTML="window.__CF$cv$params={r:'9676e94957e43bb6',t:'MTc1MzkwMDA1OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
        b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');
        a.height=1;
        a.width=1;
        a.style.position='absolute';
        a.style.top=0;
        a.style.left=0;
        a.style.border='none';
        a.style.visibility='hidden';
        document.body.appendChild(a);
        if('loading'!==document.readyState)c();
          else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);
        else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);
        'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
           