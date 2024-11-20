// importação de dependências:
import Link from "next/link";

// importação de componentes:
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface Categorias {
  nome: string;
  link: string;
}
const conceitos: Categorias[] = [
  {
    nome: "O Cosmere",
    link: "/cosmere",
  },
  {
    nome: "Hoid",
    link: "/personagens/hoid",
  },
  {
    nome: "Reinos do Cosmere",
    link: "/cosmere/reinos",
  },
  {
    nome: "Adonalsium",
    link: "/cosmere/adonalsium",
  },
  {
    nome: "Fractais",
    link: "/cosmere/fractais",
  },
];

const livros: Categorias[] = [
  {
    nome: "Os Relatos da Guerra das Tempestades",
    link: "/livros/os-relatos",
  },
  {
    nome: "Nascidos da Bruma",
    link: "/livros/nascidos-da-bruma",
  },
  {
    nome: "Warbreaker: O Alento dos Deuses",
    link: "/livros/warbreaker",
  },
  {
    nome: "Tress, a garota do Mar Esmeralda",
    link: "/livros/a-garota-do-mar-esmeralda",
  },
  {
    nome: "Ver todos os livros",
    link: "/livros",
  },
];

const mundos: Categorias[] = [
  {
    nome: "Roshar",
    link: "/mundos/roshar",
  },
  {
    nome: "Scadrial",
    link: "/mundos/scadrial",
  },
  {
    nome: "Nalthis",
    link: "/mundos/nalthis",
  },
  {
    nome: "Lumar",
    link: "/mundos/lumar",
  },
  {
    nome: "Ver todos os mundos",
    link: "/mundos",
  },
];

const outros: Categorias[] = [
  {
    nome: "Culturas",
    link: "/culturas",
  },
  {
    nome: "Sistemas de magia",
    link: "/sistemas-de-magia",
  },
  {
    nome: "Eventos e eras",
    link: "/eventos-e-eras",
  },
  {
    nome: "Locais",
    link: "/locais",
  },
  {
    nome: "Seres",
    link: "/seres",
  },
  {
    nome: "Reinos",
    link: "/reinos"
  },
  {
    nome: "Objetos e materiais",
    link: "/objetos-e-materiais",
  },
];

const personagens: Categorias[] = [
  {
    nome: "Kaladin",
    link: "/cosmere/personagens/kaladin",
  },
  {
    nome: "Vin",
    link: "/cosmere/personagens/vin",
  },
  {
    nome: "Vivenna ",
    link: "/cosmere/personagens/vivenna ",
  },
  {
    nome: "Tress",
    link: "/cosmere/personagens/tress",
  },
  {
    nome: "Ver todos os personagens",
    link: "/personagens",
  },
];

const ItemCat: React.FC<Categorias> = ({ nome, link }) => {
  return (
    <li>
      <Link href={link} legacyBehavior passHref>
        <p className="text-xs font-medium leading-none select-none no-underline outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:text-destaque p-2 cursor-pointer rounded-lg">
          {nome}
        </p>
      </Link>
    </li>
  );
};

const ItemCatO: React.FC<Categorias> = ({ nome, link }) => {
  return (
    <li>
      <Link href={link} legacyBehavior passHref>
        <p className="text-sm font-medium leading-none select-none no-underline outline-none hover:bg-accent hover:text-accent-foreground bg-accent focus:text-accent-foreground hover:text-destaque cursor-pointer rounded-lg p-2">
          {nome}
        </p>
      </Link>
    </li>
  );
};

export { conceitos, livros, mundos, outros, personagens, ItemCat, ItemCatO };

<NavigationMenuLink className="  space-y-1 rounded-md p-3 leading-none  transition-colors "></NavigationMenuLink>;

