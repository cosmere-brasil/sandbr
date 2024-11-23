// importação de dependências:
import Link from "next/link";
import Image from "next/image";
import { differenceInYears } from "date-fns";

// importação de componentes meus:
import { Subtopico, Topico } from "@/components/posts/secoes";
import { Indice, Item, Lista, SubItem } from "@/components/posts/indice";
import { Enlaçar, Ir, CriarReferencia, Referenciar } from "@/components/posts/ligacoes";
import { Imagem } from "@/components/posts/imagens";
import { Citar } from "@/components/posts/citacoes";

// importação de componentes da shadcn:
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// importação de arquivos:
import BS from "@/public/imgs/brandon-sanderson.jpg"

export default function Pagina() {
  const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";
  const idade = ()=> differenceInYears(new Date(), new Date('1975-12-19'))

  const estilos = {
    caminho: "sticky top-14 h-8 bg-background flex items-center z-40",
    main: "w-[80%] flex flex-col gap-3",
    article: "flex",
    post: "w-[70%] px-5",
    complementar: "w-[30%] flex flex-col items-center"
  }
  
  return (
    <section className="max-w-screen flex justify-center mx-5 my-5">
      <Indice>
        <Lista>
          <Item item="Os relatos da Guerra das Tempestades" />
          <Item item="Livros">
            <SubItem item="Livros da Cosmere em ordem de lançamento:"/>
          </Item>

          <Item item="Mundo">
            <SubItem item="Regiões"/>
            <SubItem item="Raças"/>
          </Item>
          <Item item="Referências" />
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
                  <Link href="/livros" className="hover:text-white">
                    Livros
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="cursor-default">
                        <BreadcrumbPage>Os relatos da Guerra das Tempestades</BreadcrumbPage>
                      </TooltipTrigger>
                      <TooltipContent className={tooltip_props}>
                        <p>Parece que você já está aqui</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Topico titulo="Os relatos da Guerra das Tempestades">
              <Citar citacao="Vida antes da morte. Força antes da fraqueza. Jornada antes do destino."/>
              <p>Os relatos da Guerra das Tempestades é uma série de fantasia épica escrita por <Enlaçar destino="/brandon-sanderso" texto="Brandon Sanderson"/>. Ambientada no planeta <Enlaçar destino="/cosmere/mundos/roshar" texto="Roshar"/>, a série desempenha um papel central dentro do universo do <Enlaçar destino="/universos/cosmere" texto="Cosmere"/> e explora os esforços de <Enlaçar destino="/cosmere/fractais/odio" texto="Ódio" /> para se libertar dos laços que o prendem ao sistema <Enlaçar destino="/sistemas-planetários/sistema-rosharano" texto="Rosharano"/>.</p>

              <Image src="https://i.imgur.com/kWSYJKn.jpeg" width={1000} height={1000} alt="Capa do quinto livro de Os relatos da Guerra das Tempestades, Wind and Truth" className="rounded-sm"/>

              <p>Sanderson planeja concluir a saga em dez livros, divididos em duas metades de cinco volumes cada</p>
            </Topico>

            <Topico titulo="Livros">
              <Table className="select-none">
                <TableCaption>Os livros e contos da primeira era de Os relatos da Guerra das Tempestades.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lançamento</TableHead>
                    <TableHead>Título original</TableHead>
                    <TableHead>Título brasileiro</TableHead>
                    <TableHead>Cronologia</TableHead>
                    <TableHead>Formato</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableCell>2010</TableCell>
                    <TableCell>The Way of Kings</TableCell>
                    <TableCell>O Caminho dos Reis</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Livro principal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2014</TableCell>
                    <TableCell>Words of Radiance</TableCell>
                    <TableCell>Palavras de Radiância</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>Livro principal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2016</TableCell>
                    <TableCell>Edgedancer</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>2.5</TableCell>
                    <TableCell>Conto</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2017</TableCell>
                    <TableCell>Oathbringer</TableCell>
                    <TableCell>Sacramentadora</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>Livro principal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2020</TableCell>
                    <TableCell>Dawnshard</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>3.5</TableCell>
                    <TableCell>Conto</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2017</TableCell>
                    <TableCell>Rhythm of War</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>Livro principal</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Planejado</TableCell>
                    <TableCell>Horneater</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>4.5</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024</TableCell>
                    <TableCell>Wind and Truth</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>Livro principal</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <p>Para um resumo detalhado dos acontecimentos, consulte as páginas individuais dedicadas a cada livro da série.</p>
            </Topico>

            <Topico titulo="Mundo">
              <p><Enlaçar destino="/cosmere/mundos/roshar" texto="Roshar"/> é o planeta onde se passa a série Os Relatos da Guerra das Tempestades, além de ser o nome do supercontinente onde ocorrem os principais eventos da trama. O planeta foi colonizado por dois <Enlaçar destino="/cosmere/fractais" texto="Fractais"/>, <Enlaçar destino="/cosmere/fractais/honra" texto="Honra"/> e <Enlaçar destino="/cosmere/fractais/cultura" texto="Cultura"/>, enquanto o rival deles, <Enlaçar destino="/cosmere/fractais/odio" texto="Ódio" />, exercia sua influência hostil no mundo. Os habitantes locais são chamados de Rosharank.</p>

              <p>O planeta é regularmente atingido por <Enlaçar destino="/cosmere/eventos/grantormentas" texto="grantormentas"/>, tempestades extremamente violentas que viajam de leste a oeste, originando-se em um local conhecido como <Enlaçar destino="/cosmere/lugares/origem" texto="Origem"/>. Essas tempestades ocorrem com frequência. Embora não sigam um padrão evidente, os <Enlaçar destino="/cosmere/cultura/guardiões-das-tempestades" texto="Guardiões das Tempestades"/> conseguem prever sua ocorrência por meio de cálculos matemáticos complexos. Apenas a região de <Enlaçar destino="/cosmere/lugares/shinovar" texto="Shinovar"/>, localizada no extremo oeste do continente, é protegida dos efeitos diretos das tempestades, graças às montanhas que servem como barreira natural. Por isso, Shinovar possui uma flora semelhante à vegetação do nosso mundo, algo que não prospera em outras áreas de Roshar, onde a a flora e a fauna de Roshar evoluíram para suportar as condições extremas criadas pelas tempestades, resultando em ecossistemas altamente adaptados.</p> 
              
              <p>Roshar é o segundo planeta de seu sistema solar e possui três luas, que têm ciclos de aumento e diminuição independentes</p>
            </Topico>

            <Topico titulo="Referências">
              <CriarReferencia qual={1}><Ir destino="https://web.archive.org/web/20071212090331/http://www.tor-forge.com/NewsArticle.aspx?articleId=647" texto="“A Tor anuncia que o romance final da lendária série de fantasia A Roda do Tempo® do best-seller Robert Jordan será concluído pelo autor Brandon Sanderson.”"/> Originalmente em inglês.</CriarReferencia>
              <CriarReferencia qual={2}>“Chegamos novamente ao mais famoso (e bagunçado) dos feriados cosmere: o Dia de Mastigar Cabeças de Koloss. Obrigado a todos pelos gentis votos.” - <Ir destino="https://x.com/BrandSanderson/status/413738065476063232" texto="Brandon Sanderson no X"/>, dia 19 de dezembro de 2013.</CriarReferencia>
            </Topico>
          </section>

          <section className={estilos.complementar}>
            <Imagem fonte="https://i.imgur.com/4SeFgt7.png" alt="Foto do Brandon Sanderson" autor="Isaac Stewart" link_do_autor="https://www.instagram.com/izykstewart/" descricao="O símbolo que representa Os relatos da Guerra das Tempestades."/>
          </section>
        </article>
      </main>
    </section>
  );
}
