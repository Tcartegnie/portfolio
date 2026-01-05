
const GameVideos = [
  "Koak5K9WI9g", // Space shooter
  "B1bDyS_FiEU?si=hwYBNLzHE5ZzgMpk",      // Zombie invasion
  "OqAuJAZR6kM?si=3sQ8Zm4iCu8nHj8k",      // Car road racing
  "2y4Q-9lMFKE?"       // Super shooter
];

const titles = [
  "Space shooter",
  "Zombie invasion",
  "Car road racing",
  "Super shooter"
];


const SfxVIdeos = [
"Ombswt54Cao?si=xheIVnr37mAn2fw6", // Acid pool
"hdo8dawCsGg?si=PXIr5aZ-HdtlleSO"  // Black holes
];


const SfxTitles = [
    "Acid pool",
    "Black holes"
];

const Url1 =[
    "https://github.com/Tcartegnie/SpaceShooter/blob/master/Assets/Script/UI/SpaceShipUI.cs",//Space shoote - SpaceShipUI
    "https://github.com/Tcartegnie/ZombieShooter/tree/master/Assets/Scripts/Player/Input",//Zombie invasion
    "https://github.com/Tcartegnie/Car-road-racing/blob/master/8SEC%20-%20Subway%20surfer%20race/Assets/Scripts/ObjectGenerator/ObjectGenerator.cs",//Car road racing
    "",//Super shooter
]

const Url2 =[
  "https://github.com/Tcartegnie/SpaceShooter/tree/master/Assets/Script/IA/Steering", //Space shoote - Steering Behaviors
  "https://github.com/Tcartegnie/ZombieShooter/tree/master/Assets/Scripts/Weapon",//Zombie invasion
  "https://github.com/Tcartegnie/Car-road-racing/blob/master/8SEC%20-%20Subway%20surfer%20race/Assets/Scripts/Shop/ShopMenu.cs",//Car road racing
  "",//Super shooter
]

const Url3 =[
  "https://github.com/Tcartegnie/SpaceShooter/tree/master/Assets/Script/Game", //Space shoote - Game Systems
  "https://github.com/Tcartegnie/ZombieShooter/tree/master/Assets/Scripts/Zombie",//Zombie invasion
  "https://github.com/Tcartegnie/Car-road-racing/blob/master/8SEC%20-%20Subway%20surfer%20race/Assets/Scripts/Gameplay/Car%20controller/CarController.cs",//Car road racing
  "test"//Super shooter
]

const Url1Title =[
    "Velocity predicter",//Space shooter - SpaceShipUI
    "Inputs for phone and gamepad",//Zombie invasion
    "Bonus management",//Car road racing
    "WIP",//Super shooter
]


const Url2Title =[
    "Steering behaviour",//Space shooter - SpaceShipUI
    "Weapons",//Zombie invasion
    "Game shop",//Car road racing
    "WIP"//Super shooter
]



const Url3Title =[
    "Game system",//Space shooter - SpaceShipUI
    "Zombies, the funier part.",//Zombie invasion
    "Controller",//Car road racing
    "WIP"//Super shooter
]


const Pharagraphe = [
  "Space shooter is a video games about space exploration, and being democracy and holy graal to uncivilised world.",//Space shooter - SpaceShipUI 
  "Zombie shooter is a game about shooting zombie in a mall because people are stupide.",//Zombie invasion
  "Car road racing is a game about driving a the opposite driving direction, and still be cool.",//Car road racing
  "Super shooter is the proof i know what i do with this gas facilities of UE4"//Super shooter
]

const SfxPharagraphe = [
    "This SFX represent an acid pool, made with particle system and material editor in Unity.",
    "This SFX represent black holes, made with particle system and material editor in Unity."
]

const UrlSfx1 =[
    "",
    ""
]

const UrlSfx2 =[
    "",
    ""
] 
const UrlSfx3 =[ 
  "",
  ""
]



GameVideos.forEach((videoId, index) => {
  addVideoTemplate(videoId, titles[index], "GameVideosContainer",Pharagraphe[index],Url1[index],Url2[index],Url3[index],Url1Title[index],Url2Title[index],Url3Title[index]);
});


SfxVIdeos.forEach((videoId, index) => {
    addVideoTemplate(videoId, SfxTitles[index], "SfxVideosContainer",SfxPharagraphe[index],UrlSfx1[index],UrlSfx2[index],UrlSfx3[index],"","","");
});

function addVideoTemplate(videoId, title, containerName,Pharagraphe,Url1,Url2,Url3,Url1Title,Url2Title,Url3Title) {
  // 1️⃣ Récupérer le container
  const container = document.getElementById(containerName);

  // 2️⃣ Créer une colonne Bootstrap
  const div = document.createElement("div");
  div.classList.add("col");

  // 3️⃣ Ajouter le contenu vidéo à l'intérieur
  div.innerHTML = `
  
    <div class="ratio ratio-16x9 my-3">
      <iframe class ="shadow-sm rounded-3"
        src="https://www.youtube.com/embed/${videoId}"
        title="${title}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      
      
    </div>
     <div class="d-flex flex-column bg-secondary bg-opacity-75 p-3 rounded-3 shadow-sm">
            <b><h2 class="text-center mt-2">${title}</h2></b> 
        <div class="text-center"> 
           <p>${Pharagraphe}</p>
          </div>
       
          <b><h4 class="text-center mt-2">Cool links :</h4></b> 
            
            <div class = text-center flex-row ms-5>

              <div = class="d-flex flex-row  justify-content-center text-start"> 
              <p>${Url1Title}</p> <b><a href = ${Url1} > - here</a></b>
              </div>
              
              <div = class="d-flex flex-row  justify-content-center text-start"> 
              <p>${Url2Title}</p> <b><a href = ${Url2} > - here</a></b>
              </div>

              <div = class="d-flex flex-row  justify-content-center text-start"> 
              <p>${Url3Title}</p> <b><a href = ${Url3} >  -  here</a></b>
              </div>

           </div>
        </div>
    </div>
  `;

  // 4️⃣ Ajouter au container
  container.appendChild(div);
}


export { addVideoTemplate };
