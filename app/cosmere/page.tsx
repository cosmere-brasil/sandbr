// importação de dependências:
import Link from "next/link";

// importação de componentes meus:
import { Citar, Mencionar } from "@/components/posts/citacoes";
import { Imagem } from "@/components/posts/imagens";
import { Ancorar, CriarReferencia, Discorrer, Enlaçar, Listar, Referenciar } from "@/components/posts/ligacoes"
import { Indice, Subtopico, Topico } from "@/components/posts/secoes";
import { Significado } from "@/components/posts/significado";

// importação de componentes da shadcn:
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

//constantes de estilo:
const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";

export default function Cosmere() {
  return (
    <section className="max-w-screen h-auto flex justify-center mx-2 my-5">
      <Indice>
        <p>Introdução</p>
        <Accordion type="multiple" className="flex flex-wrap w-[500px] m-3 gap-3">
          <AccordionItem value="reinos">
            <AccordionTrigger>Reinos do Cosmere</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2">
              <Ancorar o_que="#reino_fisico" titulo="Reino Físico"/>
              <Ancorar o_que="/cosmere/#reino_cognitivo" titulo="Reino Cognitivo"/>
              <Ancorar o_que="/cosmere/#reino_espiritual" titulo="Reino Espiritual"/>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Indice>

      <main className="w-[55%] px-5 flex flex-col gap-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" className="hover:text-white">
                Enciclopédia
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/universos" className="hover:text-white">
                Universos
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="cursor-default">
                    <BreadcrumbPage>Cosmere</BreadcrumbPage>
                  </TooltipTrigger>
                  <TooltipContent className={tooltip_props}>
                    <p>Parece que você já está aqui</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Topico id="introducao" titulo="O Cosmere">
          <Citar citacao="Você se deparou com algo muito, muito maior do que você, sua política ou seu pequeno planeta.">
            <Mencionar quem="Khriss" /> para <Mencionar quem="Kelsier" />.
          </Citar>

          <p>
            O Cosmere é um universo fictício compartilhado, criado por <Enlaçar destino="/brandon-sanderson" texto="Brandon Sanderson"/>, que serve como cenário para muitas de suas obras literárias. As histórias ambientadas no Cosmere estão interligadas por uma cosmologia comum e por regras consistentes que governam os sistemas de magia. Além disso, certos personagens e elementos narrativos
            transitam entre os diferentes mundos do cosmere ou aparecem em mais de um deles.
          </p>

          <p>
            Apesar dessas conexões, Sanderson enfatiza que não é necessário
            compreender toda a cosmologia para ler, entender e apreciar os
            livros ambientados nesse universo.
          </p>

          <p>Atualmente, o Cosmere abrange as seguintes sagas literárias:</p>
          <ul className="list-disc list-inside">
            <li>
              <Listar qual="Dragonsteel" /> (Dragão de Aço) - Não lançado.
            </li>
            <li>
              <Listar qual="Elantris" />.
            </li>
            <li>
              <Listar qual="Nascidos da Bruma" />.
            </li>
            <li>
              <Listar qual="Os relatos da Guerra das Tempestades" />.
            </li>
          </ul>

          <p>Os livros autônomos:</p>
          <ul className="list-disc list-inside">
            <li>
              <Listar qual="Warbreaker - O alento dos deuses" />.
            </li>
            <li>
              <Listar qual="Tress, a Garota do Mar Esmeralda" />.
            </li>
            <li>
              <Listar qual="Yumi and the Nightmare Painter" /> - Não traduzido.
            </li>
            <li>
              <Listar qual="The Sunlit Man" /> - Não traduzido.
            </li>
            <li>
              <Listar qual="Isles of the Emberdark" /> - Não traduzido.
            </li>
          </ul>

          <p>E a novela gráfica:</p>
          <ul className="list-disc list-inside">
            <li>
              <Listar qual="White Sand" /> - Não traduzida.
            </li>
          </ul>

          <p>A <Significado palavra="cosmogonia" significado="Isto é, o mito da criação do cosmos."/> do Cosmere gira em torno de <Enlaçar destino="/cosmere/adonalsium" texto="Adonalsium"/> (uma força ou ser comparável a um deus primordial), que foi quebrado em dezesseis pedaços chamados <Enlaçar destino="/cosmere/conceitos/fractais-de-adonalsium" texto="Fractais"/><Referenciar qual={3}/> durante o evento conhecido como a <Enlaçar destino="/cosmere/eventos/ruptura-de-adonalsium" texto="Ruptura de Adonalsium"/>.</p>

          <p>Os Fractários (isto é, os portadores do Fractais de Adonalsium) tornaram-se uma espécie de “deuses menores”, e os diferentes tipos de magia dentro dos mundos do Cosmere são derivados dos poderes deles.</p>
        </Topico>
        
        <Topico id="reinos" titulo="Reinos do Cosmere">
          <p>No Cosmere, tudo existe em três reinos que, segundo Sanderson,  existem desde o início do Cosmere: o <Enlaçar destino="/cosmere/reinos/reino-fisico" texto="Reino Físico"/>, o <Enlaçar destino="/cosmere/reinos/reino-cognitivo" texto="Reino Cognitivo"/> e o <Enlaçar destino="/cosmere/reinos/reino-espiritual" texto="Reino Espiritual"/>.</p>
            
          <p>Sabe-se que, quando alguém do Cosmere morre, uma <Enlaçar destino="/cosmere/conceitos/sombra-cognitiva" texto="Sombra Cognitiva"/> se forma no Reino Cognitivo. Para a maioria das pessoas, essa Sombra Cognitiva passa rapidamente para o <Enlaçar destino="/cosmere/lugares/alem" texto="Além"/> e sua <Enlaçar destino="/cosmere/conceitos/investidura" texto="Investidura"/> retorna ao Reino Espiritual. Todavia, quanto maior a quantidade de Investidura que alguém possuía em vida, mais tempo ele pode permanecer no Reino Cognitivo antes de ser atraído para o Além. Não obstante, os <Enlaçar destino="/cosmere/conceitos/fractario" texto="Fractários"/> (isto é, aqueles que já tiveram uma parte do poder de um <Enlaçar destino="/cosmere/conceitos/fractais-de-adonalsium" texto="Fractal"/> consigo) podem resistir à atração do Além indefinidamente, podendo escolher ir ou não para o Além.</p>

          <p>E enquanto a passagem para o Além não ocorre, é possível que um morto seja <em>ressuscitado</em> por meio da cura da Investidura,  ou ser infundida com Investidura suficiente por meio do poder de um Fractal para se tornar uma Sombra Cognitiva duradoura. Entretanto, aqueles que são mortos pela <Enlaçar destino="/cosmere/objetos/espadas-fractais" texto="espada fractal"/> <Enlaçar destino="/cosmere/objetos/sangue-noturno" texto="Sangue Noturno"/>, por meio do uso de <Enlaçar destino="/cosmere/conceitos/anti-investidura" texto="Anti-Investidura"/> e os consumidos pelo <Enlaçar destino="/cosmere/seres/esprenos" texto="espreno"/> <Enlaçar destino="/cosmere/seres/yelig-nar" texto="Yelig-nar"/> não podem ser ressuscitados, pois nada resta de suas almas.</p>

          <p>A cura mágica (ou a restauração de corpos, como feita por <Enlaçar destino="/cosmere/personagens/harmonia" texto="Harmonia"/>) funciona usando a Investidura para fazer com que a condição física de uma pessoa no Reino Físico se aproxime mais da versão ideal que existe no Reino Espiritual. Entretanto, a versão ideal de uma pessoa é filtrada pela percepção que esta tem de si mesma que está projetada no Reino Cognitivo. Sendo assim, a cura está limitada pela forma como a pessoa se vê e, uma vez que ela aceite algo como parte de si mesma, não será possível corrigir isto através da cura, mesmo que em sua <em>versão ideal</em> essa “parte de si” não exista ou seja diferente da que é projetada no Reino Cognitivo.</p>
          
          <Subtopico id="reino_fisico" titulo="Reino Físico">
            <Discorrer destino="/cosmere/reinos/reino-fisico/" assunto="o Reino Físico"></Discorrer>
            <p>O Reino Físico do Cosmere é formado de partículas fundamentais conhecidas como <Enlaçar destino="/cosmere/materiais/axi" texto="axi"/> e segue as leis comuns da física, a não ser quando a influência e/ou interferência de algum dos outros Reinos as modifica.</p>

            <p>Atualmente, o Cosmere é um aglomerado estelar formado por algo entre 50 a 100 estrelas; com dezesseis sistemas planetários conhecidos onde se localizam um total de dezenove planetas notáveis, embora o Cosmere também abrigue outros objetos celestes comuns, incluindo planetas anões, luas, constelações etc.</p>

            <p>Sabe-se que já se tentou sair dos limites físicos do aglomerado Cosmere, mas o resultado da tentativa é desconhecido.</p>
          </Subtopico>

          <Subtopico id="reino_cognitivo" titulo="Reino Cognitivo">
            <Discorrer destino="/cosmere/reinos/reino-cognitivo" assunto="o Reino Cognitivo"/>
            <p>O Reino Cognitivo é quase como uma versão do Reino Físico com diferenças bem marcadas. Por definição, o Reino Cognitivo é o Reino do pensamento e, assim sendo, ele é significativamente afetado pela forma como as pessoas imaginam e percebem as ideias sobre seu mundo e o universo imediatamente a sua volta.</p>

            <p>Por exemplo, o espaço sideral é significativamente pequeno no Reino Cognitivo, porque as pessoas não passam muito tempo pensando no espaço entre os planetas.</p>

            <p>Há também algumas entidades que são nativas do Reino Cognitivo ou que existem naturalmente nele, como é o caso dos <Enlaçar destino="/cosmere/seres/esprenos" texto="esprenos"/>, que personificam pensamentos, emoções e características naturais; e das Sombras Cognitivas.</p>

            <p>A aparência do Reino Cognitivo ao redor de um planeta tende a refletir as características marcantes desse planeta. Por exemplo, o Reino Cognitivo de <Enlaçar destino="/cosmere/mundos/scadrial" texto="Scadrial"/> (planeta de <Enlaçar destino="/livros/nascidos-da-bruma" texto="Nascidos da Bruma"/>) é composto de névoa, enquanto o de <Enlaçar destino="/cosmere/mundos/roshar" texto="Roshar"/> é composto de esferas.</p>

            <p>Além disto, a terra e a água são invertidas no Reino Cognitivo, isto é, o que é terra firme no Reino Físico se torna um meio líquido no Cognitivo, enquanto os corpos de água no Físico são sólidos no Cognitivo. Os seres físicos que entrem no Reino Cognitivo e tentem atravessar regiões não sólidas dele podem se afogar no que quer que componha o Reino Cognitivo local, embora as entidades cognitivas possam atravessar essas regiões com segurança.</p>
          </Subtopico>
          
          <Subtopico id="reino_espiritual" titulo="Reino Espiritual">
            <Discorrer destino="/cosmere/reinos/reino-espiritual" assunto="o Reino Espiritual"/>
            <p>O Reino Espiritual não é exatamente um lugar, ele existe além do espaço e do tempo. Brandon o descreve como um reino de conceitos, sendo os principais: <Enlaçar destino="/cosmere/conceitos/intencao" texto="Intenção"/>, <Enlaçar destino="/cosmere/conceitos/identidade" texto="Identidade"/>, <Enlaçar destino="/cosmere/conceitos/conexao" texto="Conexão"/> e <Enlaçar destino="/cosmere/conceitos/sorte" texto="Sorte"/>.</p>

            <p>Tudo o que existe no Reino Espiritual está em sua forma ideal.</p>
          </Subtopico>
        </Topico>

        <Topico id="propriedades_espirituais" titulo="Propriedades espirituais">
          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>Intenção.
              <div className="flex flex-col gap-3 mt-3">
                <p>É o propriedade Espiritual que representa a vontade e/ou o propósito de uma pessoa. A Intenção não é esporádica, acidental nem fortuita; e, se a Intenção é necessária para fazer algo, então a pessoa que está tentando fazê-lo deve não apenas fazê-lo, mas pretender fazê-lo. Muitas das magias dos mundos de Sanderson requerem que o usuário aja com Intenção para usá-las adequadamente.</p>

                <p>As Entidades de Investidura, isto é, os esprenos, as Sombras Cognitivas e mesmo os Fractários; têm uma Intenção intrínseca que é o propósito último da Investidura da qual sua essência é constituída. E, por quanto mais tempo essas entidades existirem, mais firmemente presas à sua Intenção elas ficarão, ao ponto de se tornarem incapazes de agir modo contrário às suas Intenções. Como exemplo extremo disto, temos o Ati, o Portador original do Fractal Ruína, que era inicialmente descrito como “gentil e generoso”, mas que com o tempo foi consumido pela Intenção de seu Fractal ao ponto de querer a ruína completa de Scadrial, considerando-a necessária ao ciclo do Cosmere.</p>

                <p>Junto com a Intenção, há o conceito derivado de Comando. Entretanto, os Comandos são mais limitados quando comparados as Intenções, e funcionam como focos da Intenção, a fins de fazer a Investidura responder adequadamente. Os Comandos costumam estar ligados diretamente a alguma das Artes Investidas ou a métodos de manipulação da Investidura mas, dentre eles, há também os Fractais do Alvorecer; que são quatro Comandos fundamentais que estiveram envolvidos na criação do Cosmere e na Quebra de Adonalsium.</p>
              </div>
            </li>

            <li>Identidade
              <div className="flex flex-col gap-3 mt-3">
                <p>É a propriedade Espiritual que representa o que uma pessoa ou um objeto é. A Identidade também é a fechadura e a chave das Mentes de metal, e os Feruquemistas só podem - em circunstâncias normais - retirar atributos armazenados por alguém com uma identidade correspondente, isto é, apenas os atributos que uma mesma pessoa tenha armazenado.</p>

                <p>Como a Identidade descreve quem é uma pessoa, ela está ligada ao conceito de Teia Espiritual, e pode ser comparada a uma espécie de DNA espiritual. As Teias Espirituais ainda não são foram completamente explicadas mas, de alguma forma, são quantificáveis, registram informações sobre a Investidura de uma pessoa, e podem ser lidas por entidades ou pessoas com as habilidades certas.</p>

                <p>Além de conter informações sobre quem ou o que é uma pessoa ou um objeto, a Identidade também armazena a Conexão entre pessoas, objetos e até mesmo conceitos abstratos.</p>
              </div>
            </li>

            <li>Conexão
              <div className="flex flex-col gap-3 mt-3">
                <p>É a propriedade espiritual que representa (e armazena) conexões e relacionamentos espirituais entre diferentes entidades: seres vivos, locais, itens etc. Por exemplo, é possível formar uma Conexão entre uma pessoa e uma região/localidade; o que permitirá, por exemplo, que alguém fale o idioma de um lugar novo instantaneamente.</p>

                <p>E sabe-se que, para assumir o poder de um Fractal após a morte de um Portador, a pessoa deve estar Conectada a esse Fractal.</p>

                <p>A Conexão, assim como as outras propriedades espirituais, é quantificável e pode afetar ou ser afetada por diferentes Artes Investidas, assim sendo possível alterar a Conexão por meios artificiais, mas não foi explicado ainda o como isso é feito.</p>
              </div>
            </li>

            <li>Sorte
              <div className="flex flex-col gap-3 mt-3">
                <p>É a propriedade espiritual relacionada à boa fortuna, à visão do futuro ou a versões do futuro. As sombras de Atium em Nascidos da Bruma, usadas para prever o futuro imediato, são um tipo de uso de Sorte.</p>

                <p>Além do uso com o futuro imediato, a Sorte pode ser usada para ver eventos em outros locais ou mesmo prever o futuro, embora isso seja geralmente muito difícil, e as previsões feitas através da Sorte sejam, provavelmente, imprecisas ou só questionáveis.</p>
              </div>
            </li>
          </ul>
        </Topico>

        <Topico id="investidura" titulo="Investidura">
          <Citar citacao="Sua investidura está ligada à sua alma; de fato, poderia ser uma parte da sua alma, assim como seu sangue é parte do seu corpo.">
            <Mencionar quem="VenDell"/> para <Mencionar quem="Waxillium"/>.
          </Citar>

          <p>A Investidura, juntamente com a matéria e a energia (os conceito físicos, perceba, assim como no nosso mundo), é uma das três essências que compõem o Cosmere e podemos descrevê-la como um tipo de energia espiritual.</p>

          <p>A Investidura existe principalmente no <Enlaçar destino="/cosmere/reinos/reino-espiritual" texto="Reino Espiritual"/>, mas transcende os Reinos. Ao aparecer no <Enlaçar destino="/cosmere/reinos/reino-fisico" texto="Reino Físico"/>, a Investidura geralmente aparecerá de forma “condensada” em um dos estados da matéria, isto é, aparecerá como sólido, líquido ou gás. Independente de em que reino ela apareça, a Investidura obedecerá às leis comuns de conservação de energia e termodinâmica.</p>

          <p>Toda a Investidura existente estava ligada diretamente a <Enlaçar destino="/cosmere/adonalsium" texto="Adonalsium"/> e, no advento da <Enlaçar destino="/cosmere/eventos/ruptura-de-adonalsium" texto="Ruptura"/>, toda a Investidura foi dividida igualmente entre os <Enlaçar destino="/cosmere/conceitos/fractais-de-adonalsium" texto="Fractais"/>. E assim, após a Ruptura, toda a Investidura se ligou a um dos Fractais; embora permaneça, de algum modo, ligada a Adonalsium. Segundo Sanderson, a Ruptura significou “tudo e nada ao mesmo tempo” para a Investidura, teorizasse de que isso se dá provavelmente pelo fato de que os Fractais são Adonalsium, de certa forma.</p>

          <p>Se deixada sozinha por um longo tempo, a Investidura se tornará autoconsciente, criando o que chamamos de <Enlaçar destino="/cosmere/conceitos/lasca" texto="Lasca"/>. Como exemplo desse processo, temos os <Enlaçar destino="/cosmere/seres/seons" texto="seons"/> em <Enlaçar destino="/livros/elantris" texto="Elantris"/> e os <Enlaçar destino="/cosmere/seres/esprenos" texto="esprenos"/> em <Enlaçar destino="/livros/os-relatos-da-guerra-das-tempestades/" texto="Os relatos da Guerra das Tempestades"/>.</p>

          <p>A Investidura ligada a um fractal pode tentar cooptar corromper a Investidura ligada a outro, essas situações geralmente produzirá um efeito vermelho de magia, como exemplo há a névoa vermelha de <Enlaçar destino="/cosmere/personagens/trell" texto="Trell"/>, representação do fractal <Enlaçar destino="/cosmere/fractais/autonomia" texto="Autonomia"/>, tentando invadir <Enlaçar destino="/cosmere/mundos/scadrial" texto="Scadrial"/>; planeta que é protegido por <Enlaçar destino="/cosmere/personagens/harmonia" texto="Harmonia"/>, o portador dos fractais <Enlaçar destino="/cosmere/fractais/preservacao" texto="Preservação"/> e <Enlaçar destino="/cosmere/fractais/ruina" texto="Ruína"/>.</p>
        </Topico>

        <Topico id="referencias" titulo="Bibliografia">
          <CriarReferencia qual={3}>Quando falamos em Fractais e Fractários no contexto do Cosmere, estamos falando nos fragmentos de Adonalsium e daqueles que portaram os Fractais de Adonalsium. Não confundir com os Fractais e os Fractários de Roshar que aparecem em Os relatos da Guerra da Tempestades.</CriarReferencia>
        </Topico>
      </main>

      <section className="w-[25%]">
        <Imagem
          fonte="https://i.imgur.com/YWRDxTE.jpeg"
          alt="Constelações da Cosmere"
          link_do_autor="https://x.com/izykstewart"
          autor="Isaac Stewart"
          descricao="Um gráfico estelar do Cosmere no Reino Físico."
        />
      </section>
    </section>
  );
}
