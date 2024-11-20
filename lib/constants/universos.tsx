// importação de dependências:
import Link from "next/link";

// importação de componentes:
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface Universos {
  nome: string;
  link: string;
  descricao: string;
}

const universos: Universos[] = [
  {
    nome: "Cosmere",
    link: "/universos/cosmere",
    descricao:
      "O universo das séries Nascidos da Bruma, Os Relatos da Guerra das Tempestades etc.",
  },
  {
    nome: "Cytoverso",
    link: "/universos/cytoverso",
    descricao: "O universo da série Skyward.",
  },
  {
    nome: "Executores",
    link: "/universos/executores",
    descricao:
      "Uma versão da Terra onde um evento mágico deu poderes a algumas pessoas.",
  },
  {
    nome: "Outros",
    link: "/universos/outros",
    descricao: "Livros autônomos, histórias em quadrinhos, contos etc.",
  },
];

const ItemUni: React.FC<Universos> = ({ nome, link, descricao }) => {
  return (
    <li className="group">
      <Link href={link} legacyBehavior passHref>
        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <h2 className="text-sm font-medium leading-none group-hover:text-destaque">{nome}</h2>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {descricao}
          </p>
        </NavigationMenuLink>
      </Link>
    </li>
  );
};

export { universos, ItemUni }

