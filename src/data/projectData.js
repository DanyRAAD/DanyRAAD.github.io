import BallonsandBombs from "../assets/img-projects/ballons.png";
import SoccerBall from "../assets/img-projects/soccer.png";
import TheElementalHero from "../assets/img-projects/TheElementalHero.png";
import MilitaryBox  from "../assets/img-projects/militarybox.jpeg";
import Axe from "../assets/img-projects/axe.jpeg";

export const proyectos = [
  {
    titulo: "The Elemental Hero",
    descripcion:
      "En este proyecto participé en el desarrollo integral del videojuego, combinando programación y arte 3D. Implementé las mecánicas principales en Unity, desarrollé los modelos del personaje principal y de los enemigos, trabajé con texturas, materiales y shaders, e implementé los sistemas de ataque de los enemigos. Este proyecto representó un gran reto, ya que me permitió integrar distintas áreas del desarrollo de videojuegos en una sola experiencia. ",
    imagen: TheElementalHero.src,
    tecnologias: ["Unity", "3DsMax", "C#", "Blender"],
    //demo: "",
    codigo: "https://github.com/DanyRAAD/TheElementalHero",
    categoria: "Game Development",
  },
  {
    titulo: "SoccerBall",
    imagen: SoccerBall.src,
    descripcion:"En este proyecto enfrenté retos como implementar un sistema de generación de enemigos por rondas, incrementando progresivamente la dificultad del juego. Mi rol consistió en desarrollar las mecánicas principales, implementar nuevas funcionalidades y solucionar errores para mejorar la experiencia de juego.",
    tecnologias: ["Unity", "C#"],
    demo: "https://danyraad.itch.io/soccerball",
    codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "Game Development",
  },
  {
    titulo: "Ballons and Bombs",
    descripcion:"En este proyecto implementé sistemas de partículas y efectos de sonido para proporcionar retroalimentación visual y auditiva durante las interacciones del jugador con los objetos del entorno. Además, desarrollé la lógica que detecta la colisión con los enemigos y desencadena el estado de Game Over.",
    imagen: BallonsandBombs.src,
    tecnologias: ["Unity", "C#"],
    demo: "https://danyraad.itch.io/balloons-and-bombs",
    codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "Game Development",
  },
  {
    titulo: "Military Box",
    descripcion:"En este proyecto desarrollé el modelo 3D de una caja militar utilizando diferentes técnicas de modelado hard surface. Realicé el proceso de UV Mapping, texturizado y horneado de mapas de normales (Normal Maps) para añadir mayor nivel de detalle sin incrementar la cantidad de polígonos, manteniendo un modelo low poly optimizado para tiempo real. El render final fue realizado en Marmoset Toolbag.",
    imagen: MilitaryBox.src,
    tecnologias: ["Blender", "Marmoset", "Substance painter"],
    demo: "https://www.artstation.com/artwork/P4a6ao",
    //codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "3D Art",
  },
   {
    titulo: "Axe",
    descripcion:"Este proyecto fue desarrollado completamente en Blender, abarcando todo el flujo de trabajo: modelado, esculpido, UV Mapping, horneado (baking) y texturizado. Utilicé el sistema de nodos para la creación de materiales y las herramientas de bake de Blender para generar los mapas necesarios, demostrando que es posible obtener un modelo de alta calidad y realismo sin recurrir a software adicional. ",
    imagen: Axe.src,
    tecnologias: ["Blender"],
    demo: "https://www.artstation.com/artwork/zxV6Lw",
    //codigo: "https://github.com/DanyRAAD/UnityCreateWithCode",
    categoria: "3D Art",
  },
  
];
