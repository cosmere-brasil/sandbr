// importação de dependências:
import Link from "next/link";
import Image from "next/image";
import { differenceInYears } from "date-fns";

// importação de componentes meus:
import { Topico } from "@/components/posts/secoes";
import { Indice, Item, Lista } from "@/components/posts/indice";
import { Enlaçar, Ir, CriarReferencia, Referenciar } from "@/components/posts/ligacoes";

// importação de componentes da shadcn:
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// importação de variáveis:
import { estilos } from "@/lib/constants/estilos_de_posts";

// importação de arquivos:
import BS from "@/public/imgs/brandon-sanderson.jpg"

export default function Pagina() {
  const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";
  const idade = ()=> differenceInYears(new Date(), new Date('1975-12-19'))

  return (
    <section className="max-w-screen flex justify-center mx-5 my-5">
      <Indice>
        <Lista>
          <Item item="Brandon Sanderson" />
          <Item item="Curiosidades" />
          <Item item="Livros" />
          <Item item="Referências" />
        </Lista>
      </Indice>

      <main className={estilos.main}>
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
                    <BreadcrumbPage>Brandon Sanderson</BreadcrumbPage>
                  </TooltipTrigger>
                  <TooltipContent className={tooltip_props}>
                    <p>Parece que você já está aqui</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className={estilos.article}>
          <section className={estilos.post}>
            <Topico titulo="Brandon Sanderson">
              <p>Brandon Winn Sanderson, nascido em <Ir destino="https://pt.wikipedia.org/wiki/19_de_dezembro" texto="19 de dezembro"/> de <Ir destino="https://pt.wikipedia.org/wiki/1975" texto="1975"/>, em <Ir destino="https://pt.wikipedia.org/wiki/Lincoln_(Nebraska)" texto="Lincoln"/>, <Ir destino="https://pt.wikipedia.org/wiki/Nebraska" texto="Nebraska"/>, é um autor americano de {idade()} anos conhecido por seus romances de <Ir destino="https://pt.wikipedia.org/wiki/Alta_fantasia" texto="alta fantasia"/>, <Ir destino="https://pt.wikipedia.org/wiki/Ficção_científica" texto="ficção científica"/> e <Ir destino="https://literar.org/glossario/jovem-adulto-genero-literario-e-suas-caracteristicas/" texto="literatura jovem-adulta"/>.</p>
              
              <p>Sanderson é mais famoso por criar o universo ficcional <Enlaçar destino="/universos/cosmere" texto="Cosmere"/>, que conecta a maioria de seus romances de fantasia. O Cosmere é conhecido por sua complexidade, sistemas de magia únicos e tramas interconectadas, o que consolidou Sanderson como uma das maiores referências na literatura de fantasia moderna. Entre suas obras mais notáveis nesse universo estão a série <Enlaçar destino="/livros/nascidos-da-bruma" texto="Nascidos da Bruma"/> e a série <Enlaçar destino="/livros/os-relatos-da-guerra-das-tempestades/" texto="Os relatos da Guerra das Tempestades"/>. </p>
              
              <p>Além das obras do Cosmere, Sanderson escreveu diversas séries voltadas para o público jovem-adulto e juvenil, como as trilogias <Enlaçar destino="/livros/executores" texto="Executores"/> e <Enlaçar destino="/livros/skyward" texto="Skyward"/>. Sanderson também é amplamente reconhecido por ter concluído a série <Ir destino="https://pt.wikipedia.org/wiki/A_Roda_do_Tempo" texto="A Roda do Tempo"/>, de <Ir destino="https://pt.wikipedia.org/wiki/Robert_Jordan" texto="Robert Jordan"/>, após a morte deste.<Referenciar qual={1}/></p>
            </Topico>

            <Topico titulo="Curiosidades">
              <p>Segundo Sanderson, no dia 19 de dezembro é comemorado o feriado do Dia de Mastigar Cabeças de <Enlaçar destino="/cosmere/seres/koloss" texto="Koloss"/> no Cosmere.<Referenciar qual={2}/></p>
            </Topico>

            <Topico titulo="Livros">
              
            </Topico>

            <Topico titulo="Referências">
              <CriarReferencia qual={1}><Ir destino="https://web.archive.org/web/20071212090331/http://www.tor-forge.com/NewsArticle.aspx?articleId=647" texto="“A Tor anuncia que o romance final da lendária série de fantasia A Roda do Tempo® do best-seller Robert Jordan será concluído pelo autor Brandon Sanderson.”"/> Originalmente em inglês.</CriarReferencia>
              <CriarReferencia qual={2}>“Chegamos novamente ao mais famoso (e bagunçado) dos feriados cosmere: o Dia de Mastigar Cabeças de Koloss. Obrigado a todos pelos gentis votos.” - <Ir destino="https://x.com/BrandSanderson/status/413738065476063232" texto="Brandon Sanderson no X"/>, dia 19 de dezembro de 2013.</CriarReferencia>
            </Topico>
          </section>

          <section className={estilos.complementar}>
            <Image src={BS} height={300} alt="Foto do Brandon Sanderson"/>
          </section>
        </article>
      </main>
    </section>
  );
}
