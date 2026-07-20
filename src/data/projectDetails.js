import TheElementalHero from "../assets/img-projects/TheElementalHero.png";
import ElementalEnemy from "../assets/projects/elemental-hero/enemies.png";
import ElementalInterface from "../assets/projects/elemental-hero/interface.png";
import ElementalStore from "../assets/projects/elemental-hero/store.png";
import ElementalChallenge1 from "../assets/projects/elemental-hero/challenge 1.png";
import ElementalChallenge2 from "../assets/projects/elemental-hero/challenge 2.png";
import ElementalEnd from "../assets/projects/elemental-hero/end.png";
/**------------------------------------------------------------------------------ */

/**------------------------------------------------------------------------------ */


export const projectDetails = [

{
    slug:"the-elemental-hero",

    titulo:"The Elemental Hero",

    imagen:TheElementalHero.src,


    descripcionCompleta:
    "The Elemental Hero is a third-person action-adventure game developed in Unity. In this experience, players take on the role of a young adventurer who must overcome a series of challenges, explore diverse environments, and battle enemies to restore balance to the world. Throughout the journey, players collect elemental powers to ultimately defeat the sorcerer Zaron and bring peace back to the kingdom.",


    miRol:
    "In this project, I took on a generalist role, contributing to multiple areas of development. My responsibilities included gameplay programming, 3D art creation, shader implementation, particle effects, animation integration, UI development, and audio implementation.",


    retos:
    "Throughout the development process, I faced several technical challenges. One of the main challenges was implementing an enemy attack system that allowed enemies to detect the player and throw rocks with consistent behavior. Another challenge was developing an in-game shop where players could purchase potions and integrating it smoothly with the game's progression system.",


    soluciones:
    "To overcome these challenges, I used Unity's **NavMesh** system to enable enemies to detect and pursue the player. Once the player entered a specified range, enemies launched a rock projectile using a prefab-based attack system. For the shop, I implemented a currency system to track and deduct coins when purchasing potions, while integrating the health and shield bars so that potion usage correctly updated the player's status.",

    informacion:{

        categoria:"Game Development",

        rol:"Gameplay Programmer / Technical Artist",

        engine:"Unity",

        team:[
        "Daniela Ramirez - Gameplay Programmer",
        ],

        duracion:"5 Months"

    },

    herramientas:[
        {
            nombre:"Unity",
            icono:"/icons/unity_gris.svg"
        },
        {
            nombre:"C#",
            icono:"/icons/csharp.svg"
        },
        {
            nombre:"Blender",
            icono:"/icons/blender.svg"
        },
        {
            nombre:"3DsMax",
            icono:"/icons/3dsmax.svg"
        },

    ],


    video:{
    type:"youtube",
    url:"https://www.youtube.com/embed/s9YoPTpBGLY"
    },


    links:{
        github:"https://github.com/DanyRAAD/TheElementalHero",
        itch:"",
        artstation:""
    },


    galeria:[
        ElementalInterface.src,
        ElementalEnemy.src,
        ElementalStore.src,
        ElementalChallenge1.src,
        ElementalChallenge2.src,
        ElementalEnd.src 
    ]

}

];