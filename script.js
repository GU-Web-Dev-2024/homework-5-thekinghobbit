document.addEventListener('DOMContentLoaded', () => {
    const artPanels = document.querySelectorAll('.art-panel');
    const counter = document.getElementById('counter');
    const resetButton = document.getElementById('reset-button');
    const addArtButton = document.getElementById('add-art-button');
    const removeArtButton = document.getElementById('remove-art-button');
    const artGrid = document.querySelector('.art-grid');
    let viewedCount = 0;
    let removeMode = false;

    const artworks = [
        { title: 'She\'s coming for you', artist: 'Unknown', img: 'https://m.media-amazon.com/images/I/81ul96JjP-L._AC_UY1000_.jpg' },
        { title: 'Momo can run faster than you', artist: 'Momo', img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/04/14/momo.jpg?width=1200&height=1200&fit=crop' },
        { title: 'What was that sound', artist: 'Yourself', img: 'https://spirit.scene7.com/is/image/Spirit/01577667-a?$Detail$' },
        { title: 'American Momo', artist: 'Momo', img: 'https://rukminim2.flixcart.com/image/750/900/xif0q/mask/j/5/g/free-size-momo-horror-scary-mask-with-hair-1-gladsome-bear-original-imaggnbqhfhc5myu.jpeg?q=20&crop=false' },
        { title: 'Las Momo', artist: 'Momo', img: 'https://faithandfourletterwords.com/wp-content/uploads/2019/02/momo.jpg' },
        { title: 'The Last Momo', artist: 'momo...', img: 'https://mynbc15.com/resources/media/af15d90f-aeed-46ac-9ca7-a1b62d21f35d-jumbo21x9_MomoChallengeNew.jpg?1545331335749' },
        { title: 'she hears that', artist: 'momo.', img: 'https://wjactv.com/resources/media/d60d4f1c-9fcc-4ae4-8058-05e885080e19-jumbo1x1_momo2.PNG?1551379953972' },
        { title: 'You can\' run from her', artist: 'Momo', img: 'https://img.kwcdn.com/product/open/2024-06-12/1718176920223-9e6929b367fc4960af6f7aed2ccfdde3-goods.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp' }
    ];

    function updateCounter() {
        counter.textContent = `Artworks Viewed: ${viewedCount}`;
    }

    function toggleViewed(panel) {
        if (panel.classList.contains('viewed')) {
            panel.classList.remove('viewed');
            viewedCount--;
        } else {
            panel.classList.add('viewed');
            viewedCount++;
        }
        updateCounter();
    }

    function resetGallery() {
        const allPanels = document.querySelectorAll('.art-panel');
        allPanels.forEach(panel => {
            panel.classList.remove('viewed');
        });
        viewedCount = 0;
        updateCounter();
    }

    function toggleRemoveMode() {
        removeMode = !removeMode;
        removeArtButton.classList.toggle('active', removeMode);
        removeArtButton.textContent = removeMode ? 'Remove viewed (Active)' : 'Remove viewed';
    }


    
    function handlePanelClick(panel) {
        if (removeMode) {
            if (panel.classList.contains('viewed')) {
                panel.classList.remove('viewed');
                viewedCount--;
                updateCounter();
            }
        } else {
            if (!panel.classList.contains('viewed')) {
                panel.classList.add('viewed');
                viewedCount++;
                updateCounter();
            }
        }
    }
    
    artPanels.forEach(panel => {
        panel.addEventListener('click', () => handlePanelClick(panel));
    });
    
    resetButton.addEventListener('click', resetGallery);
    removeArtButton.addEventListener('click', toggleRemoveMode);
    
    addArtButton.addEventListener('click', () => {
        const randomArtwork = artworks[Math.floor(Math.random() * artworks.length)];
        const newPanel = document.createElement('div');
        newPanel.classList.add('art-panel');
        newPanel.innerHTML = `
            <img src="${randomArtwork.img}" alt="${randomArtwork.title}">
            <p>${randomArtwork.title} by ${randomArtwork.artist}</p>
        `;
        newPanel.addEventListener('click', () => handlePanelClick(newPanel));
        artGrid.appendChild(newPanel);
    });
});