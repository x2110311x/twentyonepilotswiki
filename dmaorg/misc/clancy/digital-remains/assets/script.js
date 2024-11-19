{
    let currentIndex;
    let photos;

    const loadPhotos = async () => {
        try {
            const response = await fetch('assets/images.json');
            const data = await response.json();
            photos = data.photos;
            const gallery = document.getElementById('gallery');

            photos.forEach((photo, index) => {
                const divElement = document.createElement('div');
                divElement.classList.add('relative', 'group');
                divElement.dataset.index = index;

                const imgElement = document.createElement('img');
                imgElement.src = photo.url;
                imgElement.alt = `Photo ${photo.index}`;
                imgElement.classList.add('w-full', 'h-auto', 'rounded', 'shadow-md', 'transition-shadow', 'duration-300');

                const overlay = document.createElement('div');
                overlay.classList.add('absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-300', 'hover:cursor-pointer');

                const textElement = document.createElement('span');
                textElement.textContent = `Page ${photo.index}`;
                textElement.classList.add('text-white', 'text-lg');

                overlay.appendChild(textElement);
                divElement.appendChild(imgElement);
                divElement.appendChild(overlay);
                gallery.appendChild(divElement);

                divElement.addEventListener('click', () => openModal(index));
            });
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const openModal = (index) => {
        currentIndex = index;
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('img01');
        const captionText = document.getElementById('caption');
        const downloadButton = document.getElementById('downloadImage');

        modal.style.display = "block";
        modalImg.src = photos[currentIndex].url;
        captionText.innerHTML = `Page ${photos[currentIndex].index}`;
        downloadButton.href = "#"; // reset href since we handle download manually

        downloadButton.addEventListener('click', downloadImage); // add click event listener for downloading

        document.addEventListener('keydown', handleKeydown);
    };

    const downloadImage = async (event) => {
        event.preventDefault();
        const photoUrl = photos[currentIndex].url;
        const fileName = photoUrl.split('/').pop();

        try {
            const response = await fetch(photoUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    };

    const changeImage = (direction) => {
        currentIndex = (currentIndex + direction + photos.length) % photos.length;
        const modalImg = document.getElementById('img01');
        const captionText = document.getElementById('caption');
        const downloadButton = document.getElementById('downloadImage');

        modalImg.src = photos[currentIndex].url;
        captionText.innerHTML = `Photo ${photos[currentIndex].index}`;
        downloadButton.href = "#"; // reset href since we handle download manually
    };

    const closeModal = () => {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
        document.removeEventListener('keydown', handleKeydown);
    };

    const handleKeydown = (event) => {
        if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'Escape') {
            closeModal();
        }
    };

    const init = () => {
        document.querySelector('.close').addEventListener('click', closeModal);
        document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
        document.querySelector('.next').addEventListener('click', () => changeImage(1));
        loadPhotos();
    };

    init();
}
