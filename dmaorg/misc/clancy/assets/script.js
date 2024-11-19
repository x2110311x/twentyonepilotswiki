{
    const countDownDates = [
        { date: new Date("May 24, 2024").getTime(), elementId: "countdown__timer" },
        { date: new Date("June 25, 2024").getTime(), elementId: "countdown__timer_2" }
    ];

    const updateCountdown = (targetDate, elementId) => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const element = document.getElementById(elementId);

        if (distance < 0) {
            element.innerHTML = "Released";
            return false;
        } else {
            element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            return true;
        }
    };

    const startCountdowns = () => {
        countDownDates.forEach((countdown, index) => {
            const interval = setInterval(() => {
                const keepRunning = updateCountdown(countdown.date, countdown.elementId);
                if (!keepRunning) clearInterval(interval);
            }, 1000);
        });
    };

    const loadProjects = async () => {
        const projectDiv = document.querySelector('#project_list');

        try {
            const response = await fetch(`assets/projects.json`);
            const data = await response.json();

            data.projects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.classList.add('p-4', 'lg:w-1/2', 'md:w-full');
                projectItem.innerHTML = `
                <div class="flex border-2 rounded-lg border-gray-400 border-opacity-50 p-8 sm:flex-row flex-col hover:bg-black hover:bg-opacity-25">
                    <div class="flex-grow">
                        <h2 class="text-[#D62420] text-lg title-font font-medium mb-3">${project.title}</h2>
                        <p class="leading-relaxed text-base text-gray-400 ">${project.desc}</p>
                        <a href="${project.href}" class="mt-3 text-[#D62420] inline-flex items-center"><button class="mt-2 inline-flex text-white border-2 border-[#D62420] hover:bg-[#D62420] hover:transition-all py-2 px-6 focus:outline-none">View more</button></a>
                    </div>
                </div>`;

                projectDiv.appendChild(projectItem);
            });
        } catch (error) {
            console.error('Error loading projects:', error);
            projectDiv.innerHTML = '<p>Failed to load projects.</p>';
        }
    };

    const init = () => {
        loadProjects();
        startCountdowns();
    };

    init();
}
