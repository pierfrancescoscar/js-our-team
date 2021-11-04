// Our Team
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.


// 1. Creiamo array di oggetti con i membri del team

    const members = [
    {
        completeName: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg',

    },
    {
        completeName: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg',

    },
    {
        completeName: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg',

    },
    {
        completeName: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg',

    },
    {
        completeName: 'Scott Estrada',
        role: 'Developer',
        photo: 'img/scott-estrada-developer.jpg',

    },
    {
        completeName: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg',

    },
    ];

    console.log(members);

// 2. Stampiamo tutte le card presenti nel nostro team

const cardContainer = document.querySelector('.team-container');

for (let i = 0; i < members.length; i++) {

    const cardItem = members[i];

    cardContainer.innerHTML +=
    `<div class="team-card">
        <div class="card-image">
        <img
            src="${cardItem.photo}"
            alt="${cardItem.completeName}"
        />
        </div>
        <div class="card-text">
        <h3>${cardItem.completeName}</h3>
        <p>${cardItem.role}</p>
        </div>
    </div>`;
}

// 3. Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

// Al click del bottone "add" devi inserire i dati inseriti dall'utente nel tuo array

const addBtn = document.getElementById('addMemberButton');

addBtn.addEventListener('click', function() {
    cardContainer.innerHTML = '';

    const newName = document.getElementById('name').value;
    const newRole = document.getElementById('role').value;
    const newPhoto = document.getElementById('image').value;

    const newMember = {
        completeName: newName,
        role: newRole,
        photo: newPhoto,
    };

    members.push(newMember);
    console.log(members);

    // New loop for new members

    for (let i = 0; i < members.length; i++) {

        const cardItem = members[i];
    
        cardContainer.innerHTML +=
        `<div class="team-card">
            <div class="card-image">
            <img
                src="${cardItem.photo}"
                alt="${cardItem.completeName}"
            />
            </div>
            <div class="card-text">
            <h3>${cardItem.completeName}</h3>
            <p>${cardItem.role}</p>
            </div>
        </div>`;
    }

})






