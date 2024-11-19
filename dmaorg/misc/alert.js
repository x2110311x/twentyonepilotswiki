{
    const init = () => {
        const alert = document.getElementById('alert');
        const closeAlertButton = document.getElementById('close-alert');

        if (localStorage.getItem('alertDismissed') === 'true') {
            alert.style.display = 'none';
        }

        closeAlertButton.addEventListener('click', () => {
            alert.style.display = 'none';
            localStorage.setItem('alertDismissed', 'true');
        });
    };

    init();
}