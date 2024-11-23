// importação de dependências:
import Link from "next/link";

// importação de componentes meus:
import { Indice, Lista, Item, SubItem } from "@/components/posts/indice";
import { Subtopico, Topico } from "@/components/posts/secoes";
import { Enlaçar, Ir } from "@/components/posts/ligacoes";
import { Imagem } from "@/components/posts/imagens";

// importação de componentes da shadcn:
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Pagina() {
  const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";
  const estilos = {
    caminho: "sticky top-14 h-8 bg-background flex items-center z-40",
    main: "w-[80%] flex flex-col gap-3",
    article: "flex",
    post: "w-[70%] px-5",
    complementar: "w-[30%] flex flex-col items-center rounded-sm"
  }
  
  return (
    <section className="max-w-screen flex justify-center mx-5 my-5">
      <Indice>
        <Lista>
          <Item item="Sobre nós"/>
          <Item item="Contribua com a Sandbr">
            <SubItem item="Com o que contribuir?"/>
            <SubItem item="Por que contribuir?"/>
            <SubItem item="Como começar a contribuir?"/>
          </Item>
          <Item item="Veja também"/>
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
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-default">
                        <BreadcrumbPage>Sobre nós</BreadcrumbPage>
                      </TooltipTrigger>
                      <TooltipContent className={tooltip_props}>
                        <p>Parece que você já está aqui</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Topico titulo="Sobre nós">
              <p>A Sandbr é uma enciclopédia colaborativa e independente dedicada a reunir e organizar informações detalhadas sobre as obras do <Enlaçar destino="/brandon-sanderson/" texto="Brandon Sanderson"/>. Nosso objetivo é criar um espaço acessível e completo para fãs de todos os níveis, desde aqueles que acabaram de descobrir o autor até os que mergulharam profundamente em cada teoria e detalhe escondido.</p>
            
              <p>A Sandbr é projeto de fãs, feito por fãs e para fãs. Somos apaixonados pelas histórias criadas por <Enlaçar destino="/brandon-sanderson/" texto="Sanderson"/>, e decidimos construir esta enciclopédia como uma forma de homenagear seu trabalho e facilitar o acesso a informações confiáveis e organizadas sobre suas séries, personagens, mundos e sistemas mágicos.</p>

              <p>A Sandbr não é afiliada ao Brandon Sanderson, à <Ir destino="https://www.dragonsteelbooks.com" texto="Dragonsteel Books"/> ou a qualquer outra editora relacionada, mas tratamos o material com o máximo de respeito e nos esforçamos para garantir a precisão e a qualidade das informações apresentadas.</p>
            </Topico>

            <Topico titulo="Contribua com a Sandbr">
              <p>Como um projeto feito por fãs, e para fãs, e sua colaboração é essencial para que nossa enciclopédia continue crescendo e se tornando mais completa. E há várias maneiras de contribuir.</p>

              <Subtopico titulo="Com o que contribuir?">
                <p>Você pode nos ajudar:</p>
                <ul className="list-decimal list-inside flex flex-col gap-3">
                  <li>Escrevendo e revisando artigos. Encontrou algo incompleto ou quer criar um artigo novo? Compartilhe seus conhecimentos e ajude a expandir o conteúdo da sandbr.</li>
                  <li>Sinalizando erros. Caso encontre informações imprecisas ou erros em algum artigo, avise-nos! Buscamos sempre oferecer conteúdo de alta qualidade e corrigir qualquer problema rapidamente.</li>
                  <li>Ajudando na manutenção técnica. Se você tem experiência com programação, design ou administração de sites, toda ajuda é bem-vinda para manter a Sandbr funcional e atualizada.
                    <div className="flex flex-col gap-3 pt-3">
                      <p>Nesse caso, você só precisa ter conhecimentos de programação web. Aqui usamos <Ir destino="https://pt-br.react.dev" texto="React"/> e <Ir destino="https://ui.shadcn.com" texto="shadcn"/> para criar componentes, <Ir destino="https://www.typescriptlang.org" texto="TypeScript"/> como linguagem de programação e <Ir destino="https://tailwindcss.com" texto="TailwindCSS"/> para estilizar; tudo isso rodando sobre o <Ir destino="https://nextjs.org/docs" texto="Next.js"/>.</p>

                      <p>Mas não fique com medo! Com conhecimento básico em front-end e vontade de aprender, podemos te ensinar o que for precisar.</p>
                    </div>
                  </li>
                  <li>Tradução. A comunidade de língua portuguesa ainda carece de muitos conteúdos traduzidos sobre as obras de Sanderson. Se você tem habilidades com tradução, pode ajudar a trazer materiais oficiais, extras e até teorias populares do fandom para enriquecer a enciclopédia.</li>
                </ul>
              </Subtopico>

              <Subtopico titulo="Por que contribuir?">
                <p>Participar da Sandbr é mais do que criar ou editar uma enciclopédia; é ajudar a construir um ponto de encontro para fãs apaixonados. Suas contribuições ajudam a criar um espaço que beneficia todos os leitores que desejam explorar o trabalho do <Enlaçar destino="/brandon-sanderson/" texto="Brandon Sanderson"/>.</p>
              </Subtopico>

              <Subtopico titulo="Como começar a contribuir?">
                <p>Entre em contato conosco por meio do <Ir destino="https://discord.gg/wsMb237Fj8" texto="Discord"/> ou diretamente no nosso e-mail: <Ir destino="mailto:sandbr@proton.me" texto="sandbr@proton.me"/>.</p>
              </Subtopico>

              <p>Juntos, podemos tornar a Sandbr a maior e mais completa referência em língua portuguesa sobre as obras do Brandon Sanderson.</p>
            </Topico>

            <Topico titulo="Veja também">
              <ul className="flex flex-col gap-3">
                <li>
                  <Enlaçar destino="/sobre-nos/licencas" texto="Licenças desta enciclopédia."/>
                </li>
                <li>
                  <Enlaçar destino="/sobre-nos/uso-justo" texto="Uso de conteúdo autoral."/>
                </li>
              </ul>
            </Topico>

            <p className="text-zinc-400 text-sm">Revisado em 12.024-11-22 por <Ir destino="https://github.com/raave-aires/" texto="Raavë Aires"/>.</p>
          </section>

          <section className={estilos.complementar}>
            <Imagem fonte="https://uploads.coppermind.net/thumb/Sazed_by_Diego_L%C3%B3pez.jpeg/800px-Sazed_by_Diego_L%C3%B3pez.jpeg" alt="Sazed" autor="Diego López" link_do_autor="https://www.instagram.com/diegolopez_artist" descricao="Sazed, o Guardador de Terris que compilou boa parte do conhecimento que ajudou a restaurar Scadrial."/>
          </section>
        </article>
      </main>
    </section>
  );
}
