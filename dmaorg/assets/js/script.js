{
    const init = async () => {
        // Fetch the JSON data from the file
        const response = await fetch('assets/data/info.json');
        const myJSON = await response.json();

        const myJSONString = JSON.stringify(myJSON, null, 2); // Pretty-print JSON with indentation

        // Replace JSON parts with span elements having appropriate Tailwind classes
        const regexString = myJSONString.replace(/"([^"]+)":|("(.*?)")|(:\s)|(\d+)|(\[|\]|\{|\})|(true|false|null)/g,
            (match, p1, p2, p3, p4, p5, p6, p7) => {
                if (p1) return `<span class="text-[#D9BAFF]">"${p1}"</span>:`;
                if (p2) return `<span class="text-[#FE8170]">${p2}</span>`;
                if (p3) return `<span class="text-red-500">${p2}</span>`;
                if (p4) return `<span class="text-white">${p4}</span>`;
                if (p5) return `<span class="text-orange-400">${p5}</span>`;
                if (p6) return `<span class="text-blue-400">${p6}</span>`;
                if (p7) return `<span class="text-red-400">${p7}</span>`;
                return match;
            });

        document.querySelector("#regexString").innerHTML = regexString;
    }

    init();
}
