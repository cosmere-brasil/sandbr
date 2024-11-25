"use client"

// importação de dependências:
import Image, { StaticImageData } from "next/image";

// importação de componentes:
import { Card, CardContent } from "@/components/ui/card"

interface Dados_das_Imagens {
  fonte: string | StaticImageData,
  alt: string,
  link_do_autor?: string,
  autor?: string,
  descricao?: string,
}

const Imagem: React.FC<Dados_das_Imagens> = ({fonte, alt, link_do_autor, autor, descricao}) => {
  return (
    <div>
      <Card>
        <CardContent className="p-3 flex flex-col gap-2 ">
          <Image src={fonte} alt={alt} width={350} height={350} className="rounded-md" priority/>
          <p className="text-xs">Feita por <a href={link_do_autor} target="_blank" className="text-destaque">{autor}.</a></p>
          <p className="text-sm">{descricao}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export { Imagem }