// importação de dependências:
import Link from "next/link";

// importação de componentes meus:
import { Indice, Lista, Item, SubItem } from "@/components/posts/indice";
import { Subtopico, Topico } from "@/components/posts/secoes";
import { Enlaçar, Ir, Referenciar } from "@/components/posts/ligacoes";
import { Imagem } from "@/components/posts/imagens";

// importação de componentes da shadcn:
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Revisado } from "@/components/posts/revisao";
import { Copiavel } from "@/components/posts/copiavel";

export default function Pagina() {
  const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";
  const estilos = {
    caminho: "sticky top-14 h-8 bg-background flex items-center z-40",
    main: "w-[80%] flex flex-col gap-3",
    article: "flex",
    post: "w-[70%] px-5",
    complementar: "w-[30%] flex flex-col items-center rounded-sm"
  }

  const ano = new Date().getFullYear().toString();
  
  return (
    <section className="max-w-screen flex justify-center mx-5 my-5">
      <Indice>
        <Lista>
          <Item item="Licenças da Sandbr"/>
          <Item item="Licença do conteúdo">
            <SubItem item="Como atribuir?"/>
          </Item>
          <Item item="Licença do código-fonte">
            <SubItem item="Principais termos da licença"/>
            <SubItem item="Aviso"/>
          </Item>
        </Lista>
      </Indice>

      <main className={estilos.main}>
        <article className={estilos.article}>
          <section className={estilos.post}>
            <Breadcrumb className={estilos.caminho}>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link href="/" className="hover:text-white">
                    Enciclopédia
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link href="/sobre" className="hover:text-white">
                    Sobre
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-default">
                        <BreadcrumbPage>Licenças</BreadcrumbPage>
                      </TooltipTrigger>
                      <TooltipContent className={tooltip_props}>
                        <p>Parece que você já está aqui</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Topico titulo="Licenças da Sandbr">
              <p>A Sandbr é uma enciclopédia independente<Referenciar qual={1}/>, feita por fãs e dedicada exclusivamente às obras de <Enlaçar destino="/brandon-sanderson" texto="Brandon Sanderson"/>. Nosso objetivo é catalogar, organizar e compartilhar informações sobre suas criações, além de ampliar o acesso a conteúdos relacionados.</p>

              <p>Com base nesse objetivo, assumimos o compromisso de tornar esta enciclopédia aberta, colaborativa, livre e acessível — um espaço onde leitores e admiradores do autor possam encontrar informações organizadas, detalhadas e constantemente atualizadas sobre suas obras.</p>

              <p>Em alinhamento com esse compromisso, adotamos os modelos de licenciamento listados abaixo.</p>
            </Topico>

            <Topico titulo="Licença do conteúdo">
              <p>Todo o conteúdo documental da Sandbr é disponibilizado sob a licença <Ir destino="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.pt" texto="CC BY-NC-SA 4.0 Internacional"/> (Atribuição - Não Comercial - Compartilha Igual). Isso significa que:</p>

              <ul className="flex flex-col gap-2 list-disc list-inside">
                <li>Você pode compartilhar (copiar e redistribuir o material em qualquer formato ou meio).</li>
                <li>Você pode adaptar (remixar, transformar e criar a partir do material).
                </li>
              </ul>

              <p>Desde que você:</p>
              <ul className="flex flex-col gap-2 list-disc list-inside">
                <li>Dê os devidos créditos à Sandbr como fonte original.</li>
                <li>Não utilize o material para fins comerciais.</li>
                <li>Compartilhe o material derivado sob a mesma licença CC BY-NC-SA 4.0.</li>
              </ul>

              <Subtopico titulo="Como atribuir?">
                <p>Ao reutilizar ou compartilhar o conteúdo da Sandbr, pedimos que você inclua a seguinte nota de atribuição:</p>

                
                <Copiavel titulo="Atribuição de conteúdo">
                  <p>Informações extraídas da Sandbr. Disponível em sandbr.vercel.app. Licenciado sob CC BY-NC-SA 4.0.</p>
                </Copiavel>
              </Subtopico>
            </Topico>

            <Topico titulo="Licença do código-fonte">
              <p>O código-fonte da Sandbr está licenciado sob a <Ir destino="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" texto="GNU General Public License v3.0"/> (GPL v3) e disponível publicamente no <Ir destino="https://github.com/sand-br/sandbr" texto="GitHub"/>.</p>

              <Subtopico titulo="Principais termos da licença">
                <ul className="flex flex-col gap-2 list-disc list-inside">
                  <li>Liberdade de uso: Qualquer pessoa pode usar, modificar e distribuir o código, desde que respeite os termos da licença.</li>
                  <li>Código aberto: Qualquer redistribuição do código (modificado ou não) deve incluir o código-fonte e manter a mesma licença GPL v3.</li>
                  <li>Direito de modificações: Você pode alterar o código e redistribuir versões modificadas, mas deve garantir que elas também sejam distribuídas sob a GPLv3.</li>
                  <li>Garantias: O código é fornecido “como está”, sem garantias de funcionamento ou adequação a propósitos específicos.</li>
                </ul>
              </Subtopico>

              <Subtopico titulo="Aviso">
                <p>Se você redistribuir o código, precisa incluir:</p>
                <ul className="flex flex-col gap-2 list-decimal list-inside">
                  <li>Uma cópia da licença GPL v3.</li>
                  <li>Um aviso de copyright mencionando os autores do projeto.</li>
                </ul>
                
                <Copiavel titulo="Atribuição de código-fonte">
                  <p>Copyright (C) {ano} Sandbr.</p> 

                  <p>Este programa é software livre: você pode redistribuí-lo e/ou modificá-lo sob os termos da Licença Pública Geral GNU (GNU General Public License) conforme publicada pela Free Software Foundation, na versão 3 da Licença, ou qualquer versão posterior.</p>
                    
                  <p>Este programa é distribuído na esperança de que seja útil, mas SEM NENHUMA GARANTIA; sem sequer a garantia implícita de COMERCIALIZAÇÃO ou de ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO. Consulte a Licença Pública Geral GNU para mais detalhes.</p>

                  <p>Você deve ter recebido uma cópia da Licença Pública Geral GNU junto com este programa. Caso contrário, veja &lt;https://www.gnu.org/licenses/&gt;.</p>
                </Copiavel>
              </Subtopico>
              




            </Topico>

            <Revisado quando="22/11/2024" quem="Raavë Aires" link="https://github.com/raave-aires"/>
          </section>

          <section className={estilos.complementar}>
            <Imagem fonte="https://uploads.coppermind.net/thumb/Sazed_by_Diego_L%C3%B3pez.jpeg/800px-Sazed_by_Diego_L%C3%B3pez.jpeg" alt="Sazed" autor="Diego López" link_do_autor="https://www.instagram.com/diegolopez_artist" descricao="Sazed, o Guardador de Terris que compilou boa parte do conhecimento que ajudou a restaurar Scadrial."/>
          </section>
        </article>
      </main>
    </section>
  );
}
