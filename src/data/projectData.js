import BallonsandBombs from "../assets/img-projects/ballons.png";
import SoccerBall from "../assets/img-projects/soccer.png";
import TheElementalHero from "../assets/img-projects/TheElementalHero.png";
import MilitaryBox  from "../assets/img-projects/militarybox.jpeg";
import Axe from "../assets/img-projects/axe.jpeg";

export const proyectos = [
  {
    titulo: "The Elemental Hero",
    descripcion:
      "In this project, I participated in the comprehensive development of the video game, combining programming and 3D art. I implemented the main mechanics in Unity, developed the main character and enemy models, worked with textures, materials, and shaders, and implemented the enemy attack systems. This project represented a great challenge, as it allowed me to integrate different areas of game development into a single experience.",
    imagen: TheElementalHero.src,
    tecnologias: ["Unity", "3DsMax", "C#", "Blender"],
    //demo: "",
    codigo: "https://github.com/DanyRAAD/TheElementalHero",
    categoria: "Game Development",
  },
  {
    titulo: "SoccerBall",
    imagen: SoccerBall.src,
    descripcion:"In this project, I took on challenges like implementing a wave-based enemy spawning system that gradually increased the game's difficulty. My role involved developing core mechanics, adding new features, and fixing bugs to enhance the overall gameplay experience.",
    tecnologias: ["Unity", "C#"],
    demo: "https://danyraad.itch.io/soccerball",
    codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "Game Development",
  },
  {
    titulo: "Ballons and Bombs",
    descripcion:"In this project, I implemented particle systems and sound effects to provide visual and auditory feedback during the player's interactions with environmental objects. Additionally, I developed the logic that detects collisions with enemies and triggers the Game Over state.",
    imagen: BallonsandBombs.src,
    tecnologias: ["Unity", "C#"],
    demo: "https://danyraad.itch.io/balloons-and-bombs",
    codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "Game Development",
  },
  {
    titulo: "Military Box",
    descripcion:"In this project, I developed the 3D model of a military crate using different hard surface modeling techniques. I carried out the UV Mapping, texturing, and normal map baking process to add a higher level of detail without increasing the polygon count, keeping the model low poly and optimized for real-time rendering. The final render was done in Marmoset Toolbag.",
    imagen: MilitaryBox.src,
    tecnologias: ["Blender", "Marmoset", "Substance painter"],
    demo: "https://www.artstation.com/artwork/P4a6ao",
    //codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "3D Art",
  },
   {
    titulo: "Axe",
    descripcion:"This project was developed entirely in Blender, covering the entire workflow: modeling, sculpting, UV Mapping, baking, and texturing. I used the node system for material creation and Blender's baking tools to generate the necessary maps, demonstrating that it is possible to achieve a high-quality, realistic model without resorting to additional software. ",
    imagen: Axe.src,
    tecnologias: ["Blender"],
    demo: "https://www.artstation.com/artwork/zxV6Lw",
    //codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "3D Art",
  },
  
];
