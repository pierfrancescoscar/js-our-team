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


