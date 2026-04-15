import imgproject1 from '../assets/SRE_Login.jpg'
import imgproject2 from '../assets/ExpoGo.png'
import imgproject3 from '../assets/TaqueroVR.jpeg'

export interface Project {
  title: string;
  description: string;
  techs: string[];
  image: string;
  github?: string;
  private?: boolean;
}

const projects = [
    {
        title: "Sistema en Secretaría de Relaciones Exteriores",
        description: "Desarrollo de nuevas funcionalidades backend y frontend para optimizar procesos internos y mejorar la experiencia del personal.",
        techs: ["Angular", "Node.js", "Laravel", "MySQL"],
        image: imgproject1,
        private: true
    },
    {
        title: "Aplicación móvil de pagos con microservicios",
        description: "App desarrollada con React Native y TypeScript que integra microservicios para verificación de pagos en tiempo real.",
        techs: ["React Native", "TypeScript", "Expo", "Firebase"],
        image: imgproject2,
        github: "https://github.com/Raf-dotmx/expo-go-pagosz"
    },
    {
        title: "Taquero VR",
        description: "Videojuego de realidad virtual desarrollado con Unity y C# para una experiencia inmersiva, divertida y comica en la preparación de tacos.",
        techs: ["Unity", "C#", "Oculus Quest", "Blender"],
        image: imgproject3,
    }
];

export default projects;