const contacts = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
        name: "Shohzod",
        phone: "+99-897-240-11-55",
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png",
        name: "Aziz",
        phone: "+99-897-240-44-77",
    },
    {
        img: "https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png",
        name: "Doston",
        phone: "+99-897-240-33-11",
    },
];

const contactsList = document.getElementById("list");

const setData = (search) => {
    console.log("search: " + search);
    contactsList.innerHTML = ``;

    const filtered = contacts.filter((value, index) => {
        return value.name.toLowerCase()
    })
}

contacts.map((value, index) => {
    const li = document.createElement("li");
    li.className = `ist-group-item d-flex align-items-center py-3`;
    li.innerHTML = `
                        <img src="${value.img}" alt="">
                        <div>
                            ${value.name}
                            <p>+998-97-240-11-55</p>
                        </div>
    `;

    contactsList.appendChild(li);
}
)