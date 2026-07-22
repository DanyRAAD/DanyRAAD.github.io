import MagicMix from "../assets/img-projects/MagicMix.png";
import Karim from "../assets/img-projects/Karim.png";
import TheElementalHero from "../assets/img-projects/TheElementalHero.png";
import MilitaryBox  from "../assets/img-projects/militarybox.jpeg";
import Axe from "../assets/img-projects/axe.jpeg";

export const proyectos = [
  {
    titulo: "The Elemental Hero",
    slug: "the-elemental-hero",
    descripcion:
      "I contributed to the full development of this video game by combining programming and 3D art. I implemented core gameplay mechanics in Unity, created the main character and enemy models, developed textures and shaders, and programmed the enemy attack systems.",
    imagen: TheElementalHero.src,
    tecnologias: ["Unity", "3DsMax", "C#", "Blender"],
    //demo: "",
    codigo: "https://github.com/DanyRAAD/TheElementalHero",
    categoria: "Game Development",
  },
  {
    titulo: "KARIM",
    slug: "karim",
    imagen: Karim.src,
    descripcion:"This project focused on the complete creation of a biped character, covering modeling, sculpting, texture map creation, and animation.",
    tecnologias: ["Zbrush","Maya", "Blender","Marvelous Designer","Substance Painter","Mamorset Toolbag"],
    demo: "",
    codigo: "",
    categoria: "Technical Art",
  },
  {
    titulo: "MagicMix",
    slug: "MagicMix",
    descripcion:"",
    imagen: MagicMix.src,
    tecnologias: ["Unity", "C#", "Blender"],
    demo: "https://knigthcamidev.itch.io/magicmixgame",
    codigo: "https://github.com/CamiBlackFire-Dev/GameJam1-Generation-Cohorte12",
    categoria: "Game Development",
  },
  {
    titulo: "Military Box",
    slug: "military-box",
    descripcion:"In this project, I developed the 3D model of a military crate using different hard surface modeling techniques. I carried out the UV Mapping, texturing, and normal map baking process to add a higher level of detail without increasing the polygon count, keeping the model low poly and optimized for real-time rendering. The final render was done in Marmoset Toolbag.",
    imagen: MilitaryBox.src,
    tecnologias: ["Blender", "Marmoset", "Substance painter"],
    demo: "https://www.artstation.com/artwork/P4a6ao",
    //codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "3D Art",
  },
   {
    titulo: "Axe",
    slug: "axe",
    descripcion:"This project was developed entirely in Blender, covering the entire workflow: modeling, sculpting, UV Mapping, baking, and texturing. I used the node system for material creation and Blender's baking tools to generate the necessary maps, demonstrating that it is possible to achieve a high-quality, realistic model without resorting to additional software. ",
    imagen: Axe.src,
    tecnologias: ["Blender"],
    demo: "https://www.artstation.com/artwork/zxV6Lw",
    //codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "3D Art",
  },
  
];
