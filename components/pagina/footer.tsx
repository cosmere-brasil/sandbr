// importação de dependências:
import Image from "next/image";
import Link from "next/link";

// importação de arquivos:
import Cobre from "@/public/cobre.svg";

interface Enlaces {
  link: string;
  titulo: string;
}
const Enlace: React.FC<Enlaces> = ({ link, titulo }) => {
  return (
    <li>
      <Link href={link} className="hover:text-destaque hover:underline">
        {titulo}
      </Link>
    </li>
  );
};

export function Footer() {
  return (
    <footer className="max-w-screen flex flex-col items-center bg-[#0d1117] p-5">
      <div className="flex flex-col items-center self-start">
        <div className="flex items-center">
          <Image src={Cobre} width={70} height={70} alt="Cosmere Brasil" />
          <h3 className="text-xl">Sand.br</h3>
        </div>
        <p className="text-sm">(C) 12.024 EH Sandbr</p>
      </div>

      <section className="w-[98%] flex flex-row gap-8 items-center justify-start">
        <ul className="text-sm flex flex-col gap-2">
          <Enlace link="/licenca" titulo="Licença" />
          <Enlace link="/conteudo-autoral" titulo="Uso de conteúdo autoral" />
          <Enlace link="/sobre" titulo="Sobre nós" />
        </ul>
        <ul className="text-sm">
          <Enlace link="/licenca" titulo="Licença" />
          <Enlace link="/conteudo-autoral" titulo="Uso de conteúdo autoral" />
          <Enlace link="/sobre" titulo="Sobre nós" />
        </ul>
      </section>
    </footer>
  );
}