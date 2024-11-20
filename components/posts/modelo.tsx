// importação de dependências:
import Link from "next/link";

// importação de componentes:
import { Citar, Listar, Mencionar } from "@/components/posts/citacoes";
import { Imagem } from "@/components/posts/imagens";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// importação de arquivos: 

const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border"

export default function Cosmere() {
  return (
    <section className="max-w-screen h-auto flex justify-center mx-2 my-5">
      <section className="w-1/4">

      </section>

      <main className="w-2/4 flex flex-col gap-3 text-justify hyphens-auto pr-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
                <Link href="/" className="hover:text-white">Enciclopédia</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <Link href="/universos" className="hover:text-white">Universos</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <TooltipProvider>
              <Tooltip >
                <TooltipTrigger className="cursor-default"><BreadcrumbPage>Cosmere</BreadcrumbPage></TooltipTrigger>
                <TooltipContent className={tooltip_props}>
                  <p>Você está aqui</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-xl font-medium">O Cosmere</h1>

        <Citar
          citacao="Você se deparou com algo muito, muito maior do que você, sua política ou seu pequeno planeta."
        >
          <Mencionar quem="khriss"/> para <Mencionar quem="kelsier"/>.
        </Citar>

        <p>O Cosmere é um universo fictício compartilhado, criado por <Link href="/brandon-sanderson" className="text-destaque hover:underline">Brandon Sanderson</Link>, que serve como cenário para muitas de suas obras literárias. As histórias ambientadas no Cosmere estão interligadas por uma cosmologia comum e por regras consistentes que governam os sistemas de magia. Além disso, certos personagens e elementos narrativos transitam entre os diferentes mundos do cosmere ou aparecem em mais de um deles.</p>

        <p>Apesar dessas conexões, Sanderson enfatiza que não é necessário compreender toda a cosmologia para ler, entender e apreciar os livros ambientados nesse universo.</p>

        <p>Atualmente, o Cosmere abrange as seguintes sagas literárias:</p>
        <ul className="list-disc list-inside">
            <li><Listar qual="Dragonsteel"/> (Dragão de Aço) - Não lançado.</li>
            <li><Listar qual="Elantris"/>.</li>
            <li><Listar qual="Nascidos da Bruma"/>.</li>
            <li><Listar qual="Os relatos da Guerra das Tempestades"/>.</li>
        </ul> 
        
        <p>Os livros autônomos:</p>
        <ul className="list-disc list-inside">
          <li><Listar qual="Warbreaker - O alento dos deuses"/>.</li>
          <li><Listar qual="Tress, a Garota do Mar Esmeralda"/>.</li>
          <li><Listar qual="Yumi and the Nightmare Painter"/> - Não traduzido.</li>
          <li><Listar qual="The Sunlit Man"/> - Não traduzido.</li>
          <li><Listar qual="Isles of the Emberdark"/> - Não traduzido.</li>
        </ul>

        <p>E a novela gráfica:</p>
        <ul className="list-disc list-inside">
          <li><Listar qual="White Sand"/> - Não traduzida.</li>
        </ul>
      </main>

      <section className="w-1/4">
      <Imagem fonte="https://i.imgur.com/YWRDxTE.jpeg" alt="Constelações da Cosmere" link_do_autor="https://x.com/izykstewart" autor="Isaac Stewart" descricao="Um gráfico estelar do Cosmere no Reino Físico."/>
      </section>
    </section>
  );
}