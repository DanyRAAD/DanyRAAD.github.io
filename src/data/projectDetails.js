import TheElementalHero from "../assets/img-projects/TheElementalHero.png";
import ElementalEnemy from "../assets/projects/elemental-hero/enemies.png";
import ElementalInterface from "../assets/projects/elemental-hero/interface.png";
import ElementalStore from "../assets/projects/elemental-hero/store.png";
import ElementalChallenge1 from "../assets/projects/elemental-hero/challenge 1.png";
import ElementalChallenge2 from "../assets/projects/elemental-hero/challenge 2.png";
import ElementalEnd from "../assets/projects/elemental-hero/end.png";
/**------------------------------------------------------------------------------ */
import Karim from "../assets/img-projects/Karim.png";
import KarimMarvelous from "../assets/projects/karim/marvelous.png";
import KarimPesos from "../assets/projects/karim/pesos.png";
import KarimRiggid from "../assets/projects/karim/riggid.png";
import KarimSubstance from "../assets/projects/karim/substance.png";
import KarimAnimation from "../assets/projects/karim/animation.png";
import KarimRender from "../assets/projects/karim/render.png";
/**------------------------------------------------------------------------------ */
import MagicMix from "../assets/img-projects/MagicMix.png";
import MagicMenu from "../assets/projects/magimix/menu.png";
import MagicJuego1 from "../assets/projects/magimix/juego1.png";
import MagicJuego2 from "../assets/projects/magimix/juego2.png";
import MagicLose from "../assets/projects/magimix/lose.png";
import MagicJuego3 from "../assets/projects/magimix/juego3.png";
import MagicWin from "../assets/projects/magimix/win.png";



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

    },
    {
        slug:"karim",
        titulo:"KARIM",
        imagen:Karim.src,
        descripcionCompleta:
        "Karim is a project developed from scratch, featuring a stylized character modeled and sculpted in ZBrush. The story takes place in a world consumed by the Zarons, a race that invaded the planet. Karim is a cyborg determined to protect humanity. His clothing was created in Marvelous Designer, while the accessories were modeled in Blender. The character was then textured in Substance Painter, with careful attention to clean UV layouts and high-quality texture maps. Finally, it was rigged and animated in Maya using Advanced Skeleton.",
        miRol:
        "My role in this project was as a 3D Generalist Artist, overseeing every stage of production. I was responsible for the character concept and backstory, as well as modeling, sculpting, retopology, UV mapping, texturing, rigging, animation, and final rendering, bringing the character to life through a compelling narrative.",
        retos:
        "One of the main challenges in this project was weight painting the character's body and face, ensuring natural deformations during animation. Another major challenge was creating a complete animation, which required refining poses and facial expressions frame by frame to achieve a more natural and expressive performance.",
        soluciones:
        "Overcoming these challenges required time, iteration, and continuous refinement. Both the weight painting and the animation were adjusted repeatedly to achieve cleaner, more natural deformations, reducing errors during movement and resulting in a more detailed and fluid animation.",
        
        informacion:{
            categoria:"Technical Art",
            rol:"Technical Artist",
            engine:"Marmoset",
            team:[
            "Daniela Ramirez - Technical Artist",
            ],
            duracion:"5 Months"

        },

        herramientas:[
            {
                nombre:"Zbrush",
                icono:"/icons/zbrush.svg"
            },
            {
                nombre:"Maya",
                icono:"/icons/maya.svg"
            },
            {
                nombre:"Blender",
                icono:"/icons/blender.svg"
            },
            {
                nombre:"Marvelous",
                icono:"/icons/marvelous.svg"
            },
            {
                nombre:"Substance Painter",
                icono:"/icons/substance.svg"
            },
            {
                nombre:"Marmoset",
                icono:"/icons/marmoset.svg"
            },

        ],

        video:{
        type:"youtube",
        url:"https://www.youtube.com/embed/o3hATtYf3_A"
        },

        links:{
            github:"",
            itch:"",
            artstation:""
        },

        galeria:[
            KarimMarvelous.src,
            KarimPesos.src,
            KarimRiggid.src,
            KarimSubstance.src,
            KarimAnimation.src,
            KarimRender.src 
        ]


    },
       {
        slug:"MagicMix",
        titulo:"MagicMix",
        imagen:MagicMix.src,
        descripcionCompleta:
        "Magic Mix is a 3D isometric game where you play as a wizard who must defeat goblins by casting lightning bolts at the mini goblins. As you progress, you must collect three potions and bring them to the cauldron to brew a magical potion. Once it is ready, you can throw it at the boss to defeat him. Each time you clear a wave of goblins, the next wave spawns with even more enemies, making the game progressively more challenging.",
        miRol:
        "During the development of this project, I was responsible for creating the 3D art, designing and implementing the user interface (UI/UX), and integrating the game's audio system. ",
        retos:
        "During the development of this project, we faced several challenges. One of the main issues was a problem with the GitHub repository, where our develop branch became corrupted. Another challenge I encountered was the difference between the coordinate systems used by Unity and Blender, as each application uses a different axis orientation, which caused some difficulties when importing and setting up the 3D models.",
        soluciones:
        "To solve these issues, we first used a teammate's branch that contained the complete project to create a backup branch. This allowed us to rebuild the develop branch and successfully merge the rest of the team's work. As for the axis orientation issue between Blender and Unity, I adjusted the models' orientation in Blender before exporting and importing them back into Unity, which resolved the problem.",
        
        informacion:{
            categoria:"Game Develope",
            rol:"Technical Artist - UI/UX",
            engine:"Unity",
            team:[
            "Daniela Ramirez - 3d Artist and Technical Artist",
            "Sebastian Castellanos Torres - Developing and Mecanics",
            "D. Camilo Figueroa -  Developing and Tecnical Artist",
            "Esteban Perdomo - VFX Artist"
            ],
            duracion:"3 days"

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

        ],

        video:{
        type:"local",
        url:"..assets//videos/MagicMix.mp4"
        },

        links:{
            github:"https://github.com/CamiBlackFire-Dev/GameJam1-Generation-Cohorte12",
            itch:"https://knigthcamidev.itch.io/magicmixgame",
            artstation:""
        },

        galeria:[
            MagicMenu.src,
            MagicJuego1.src,
            MagicJuego2.src,
            MagicLose.src,
            MagicJuego3.src,
            MagicWin.src 
        ]


    }

];