{
    const loadShows = async () => {
        const showDiv = document.querySelector('#list');

        try {
            const response = await fetch(`./assets/shows.json`);
            const data = await response.json();

            // create a header row
            const header = document.createElement('div');
            header.classList.add('grid', 'grid-cols-1', 'md:grid-cols-4', 'gap-4', 'p-4', 'border-b', 'border-gray-600', 'text-gray-400');
            header.innerHTML = `
                <div class="uppercase text-sm whitespace-nowrap tracking-widest">Date</div>
                <div class="uppercase text-sm whitespace-nowrap">Venue</div>
                <div class="uppercase text-sm whitespace-nowrap">Location</div>
                <div class="uppercase text-sm whitespace-nowrap">Access Code</div>
            `;
            showDiv.appendChild(header);

            // Array to keep track of open show items
            const openShows = [];

            data.shows.forEach(show => {
                const showItem = document.createElement('div');
                showItem.classList.add('grid', 'grid-cols-1', 'md:grid-cols-4', 'gap-4', 'hover:bg-[#2e2e2e]', 'p-4', 'border-b', 'border-gray-600', 'cursor-pointer', 'transition', 'ease-in-out', 'duration-300');
                showItem.innerHTML = `
                  <div class="uppercase text-sm text-[#D62420] whitespace-nowrap tracking-widest">${show.date}</div>
                  <div class="uppercase text-xl text-[#D62420] whitespace-nowrap">${show.venue}</div>
                  <div class="uppercase text-sm text-[#D62420] whitespace-nowrap">${show.city}</div>
                  <div class="uppercase text-sm text-[#D62420] whitespace-nowrap">
                      <span class="border border-[#D62420] text-[#D62420] py-1 px-3 rounded-full">${show.tm_code}</span>
                  </div>
                `;

                // Toggle extra-info visibility on click
                showItem.addEventListener('click', () => {
                    const extraInfo = showItem.querySelector('.extra-info');
                    const isOpen = showItem.classList.contains('open');

                    // Close all other open shows
                    openShows.forEach(openShow => {
                        if (openShow !== showItem) {
                            openShow.classList.remove('open');
                            openShow.querySelector('.extra-info').classList.add('hidden');
                        }
                    });

                    // Toggle current show
                    showItem.classList.toggle('open');
                    extraInfo.classList.toggle('hidden');

                    // Update openShows array
                    if (isOpen) {
                        const index = openShows.indexOf(showItem);
                        if (index > -1) {
                            openShows.splice(index, 1);
                        }
                    } else {
                        openShows.push(showItem);
                    }
                });

                // Create extra-info div for question and answer
                const extraInfo = document.createElement('div');
                extraInfo.classList.add('extra-info', 'hidden', 'col-span-full', 'mt-4', 'text-[#D62420]', 'whitespace-pre-line', 'transition', 'ease-in-out', 'duration-300');
                extraInfo.innerHTML = `
                    <div><strong>Question:</strong> <p class="text-gray-300">${show.tm_question}</p></div>
                    <div><strong>Answer:</strong> <p class="text-gray-300 capitalize">"${show.tm_answer}"</p></div>
                `;
                showItem.appendChild(extraInfo);

                showDiv.appendChild(showItem);
            });
        } catch (error) {
            console.error('Error loading shows:', error);
            showDiv.innerHTML = '<p>Failed to load shows.</p>';
        }
    }

    const init = () => {
        loadShows();
    }

    init();
}
