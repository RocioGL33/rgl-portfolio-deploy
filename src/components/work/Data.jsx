import Holocruxe from "../../assets/holocruxe.png";
import Movies from "../../assets/Movies.jpg";
import Betriax from "../../assets/Betriax.png";
import Job from "../../assets/jobsearch.png";
import DolarBoliviano from "../../assets/DolarBoliviano.png";
import APK from "../../assets/jobSearch.apk";

export const projects = [
  {
    id: 1,
    image: Job,
    title: "JobSearch",
    category: "Mobile",
    url: APK,
    description: "Aplicación Móvil para encontrar empleo",
    techStack: "Tech Stack: React Native, Expo/ExpoGO, CSS",
  },
  {
    id: 2,
    image: Holocruxe,
    title: "Holocruxe",
    category: "web",
    url: "https://web.holocruxe.com/login/",
    description:
      "Página Web con Inteligencia Artificial integrada, dedicada a la preservación de recuerdos y legado de las personas.",
    techStack:
      "Tech Stack: Next.js, Typescript, React, MaterialUI, Materialize, Redux Toolkit, ThreeJS, Blender.",
  },
  {
    id: 3,
    image: Betriax,
    title: "Betriax",
    category: "web",
    url: "https://www.betriax.com/",
    description:
      "Pagina Web dedicada a la compra/venta de divisas de moneda dólar americano, sin que haya bancos de intermediario.",
    techStack: "Tech Stack: Javascript, React, Redux Toolkit, TailwindCSS",
  },
  {
    id: 4,
    image: DolarBoliviano,
    title: "Dolar Boliviano",
    category: "web",
    url: "https://dolarboliviano.com/",
    description:
      "Desarrollo de la plataforma y dashboard que complementa la app de compra/venta de divisas.",
    techStack: "Tech Stack: React, Redux Toolkit, TailwindCSS",
  },
  {
    id: 5,
    image: Movies,
    title: "World of Movies",
    category: "web",
    url: "https://world-of-movies-rociogl33.vercel.app/",
    description:
      "Página Web para ver las últimas películas en transmisión, filtrarlas por nombre, estrellas y ver el detalle de las mismas.",
    techStack: "Tech Stack: React, TailwindCSS",
  },
];
