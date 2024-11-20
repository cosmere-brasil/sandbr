"use client"

// importação de dependências:
import Image from "next/image";

// importação de componentes:
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface Dados_das_Imagens {
  fonte: string,
  alt: string,
  link_do_autor: string,
  autor: string,
  descricao: string,
}

const Imagem: React.FC<Dados_das_Imagens> = ({fonte, alt, link_do_autor, autor, descricao}) => {
  const url: string = fonte;
  
  const baixar_imagem = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar a imagem.");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${descricao.toLowerCase().replace(/\s+/g, '-')}.jpeg`; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro ao baixar a imagem:", error);
    }
  };

  const BotaoBaixar = () => {
    return <Button onClick={baixar_imagem} className="p-0 bg-transparent text-white hover:bg-transparent hover:text-destaque"><Download/></Button> 
  }

  return (
    <Dialog>
      <div>
        <Card>
          <CardContent className="p-3 flex flex-col gap-2 ">
            <DialogTrigger><Image src={fonte} alt={alt} width={350} height={350} className="rounded-md"/></DialogTrigger>
            <p className="text-xs">Feita por <a href={link_do_autor} target="_blank" className="text-destaque">{autor}.</a></p>
            <p className="text-sm">{descricao}</p>
          </CardContent>
        </Card>
      </div>
      

      <DialogContent className="max-w-[720px] backdrop-blur-sm">
        <DialogTitle className="flex items-center gap-3 text-sm">{descricao} <BotaoBaixar/></DialogTitle>
        <Image src={fonte} alt={alt} width={720} height={720} className="rounded-md"/>
      </DialogContent>
    </Dialog>
  );
}

export { Imagem }