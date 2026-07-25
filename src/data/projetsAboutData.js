
import MagicMix from "../assets/img-projects/MagicMix.png";
import Karim from "../assets/img-projects/Karim.png";
import TheElementalHero from "../assets/img-projects/TheElementalHero.png";
import MilitaryBox  from "../assets/img-projects/militarybox.jpeg";

export const proyectos = [
    
  {
    titulo: "KARIM",
    slug: "karim",
    imagen: Karim.src,
    tecnologias: ["Zbrush","Maya", "Blender","Marvelous Designer","Substance Painter","Mamorset Toolbag"],
    demo: "",
    codigo: "",
  },
  {
    titulo: "MagicMix", 
    slug: "MagicMix",
    imagen: MagicMix.src,
    tecnologias: ["Unity", "C#","Blender"],
    demo: "https://knigthcamidev.itch.io/magicmixgame",
    codigo: "https://github.com/CamiBlackFire-Dev/GameJam1-Generation-Cohorte12",
  },
  {
    titulo: "The Elemental Hero",
    slug: "the-elemental-hero",
    imagen: TheElementalHero.src,
    tecnologias: ["Unity", "3DsMax", "C#", "Blender"],
    //demo: "",
    codigo: "https://github.com/DanyRAAD/TheElementalHero",
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
  
];
