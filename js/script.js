    function changeFavicon(newIconPath) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = /img/icons/favicon2.png;
        document.head.appendChild(link);
    }

    // Example usage: change favicon every 5 seconds
    let currentIcon = 1;
    setInterval(() => {
        const iconPaths = ["/img/icons/favicon1.png", "/img/icons/favicon2.png"];
        changeFavicon(iconPaths[currentIcon % iconPaths.length]);
        currentIcon++;
    }, 5000);
