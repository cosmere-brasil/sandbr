// importação de dependências:
import Link from "next/link";

// importação de componentes meus:
import { Citar, Mencionar } from "@/components/posts/citacoes";
import { Imagem } from "@/components/posts/imagens";
import { CriarReferencia, Discorrer, Enlaçar, Listar } from "@/components/posts/ligacoes"
import { Subtopico, Topico } from "@/components/posts/secoes";
import { Significado } from "@/components/posts/significado";
import { Indice, Item, Lista, SubItem } from "@/components/posts/indice";

// importação de componentes da shadcn:
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

//constantes de estilo:
const tooltip_props = "text-white bg-[#0a0a0a] border-[#262626] border";
const id_props = "scroll-mt-[76px]"

export default function Cosmere() {
  return (
    <section className="max-w-screen flex justify-center mx-5 my-5">
      <Indice>
        <Lista>
          <Item item="O Cosmere"/>

          <Item item="Reinos do Cosmere">
            <SubItem item="Reino Físico"/>
            <SubItem item="Reino Cognitivo"/>

            <Item item="Reino Espiritual">
              <SubItem item="Intenção"/>
              <SubItem item="Identidade"/>
              <SubItem item="Conexão"/>
              <SubItem item="Sorte"/>
            </Item>
          </Item>

          <Item item="Adonalsium"/>

          <Item item="Investidura">
            <SubItem item="Natureza e aparência"/>
            <SubItem item="Origem e ruptura"/>
            <SubItem item="Lascas"/>
            <SubItem item="Interação e corrupção"/>
            <SubItem item="Anti-Investidura"/>
          </Item>

          <Item item="Perpendicularidade"/>

          <Item item="Planetas">
            <SubItem item="Sistemas tri-fractários"/>
            <SubItem item="Sistemas bi-fractários"/>
            <SubItem item="Sistemas mono-fractários"/>
            <SubItem item="Sistemas sem fractal"/>
            <SubItem item="Outros sistemas"/>
          </Item>

          <Item item="História">
            <SubItem item="Pré-Ruptura"/>
            <SubItem item="A Ruptura de Adonalsium"/>
            <SubItem item="Missão do Ódio"/>
            <SubItem item="Ascensão de Harmonia"/>
            <SubItem item="A verdadeira Desolação"/>
            <SubItem item="Trell e Scadrial"/>
            <SubItem item="A era espacial"/>
          </Item>

          <Item item="Saltadores de mundos">
            <SubItem item="Hoid"/>
            <Item item="Grupos de Saltadores">
              <SubItem item="O Décimo Sétimo Fractal"/>
              <SubItem item="A Luz Prateada"/>
              <SubItem item="Os Irish"/>
              <SubItem item="Os Fantasmas de Sangue"/>
            </Item>
            <SubItem item="Outros grupos"/>
          </Item>

          <Item item="Desenvolvimento"/>
          <Item item="Livros da Cosmere">
            <SubItem item="Lançados"/>
            <SubItem item="Planejados"/>
            <SubItem item="Ordens de leitura"/>
          </Item>

          <Item item="Leituras adicionais"/>
          <Item item="Notas"/>
          <Item item="Bibliografia"/>
        </Lista>
      </Indice>

      <main className="w-[55%] px-5 flex flex-col gap-3 top-[76px]">
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

        <Topico titulo="O Cosmere">
          <Citar citacao="Você se deparou com algo muito, muito maior do que você, sua política ou seu pequeno planeta.">
            - <Mencionar quem="Khriss" /> para <Mencionar quem="Kelsier" />.
          </Citar>

          <p>
            O Cosmere é um universo fictício compartilhado, criado por <Enlaçar destino="/brandon-sanderson" texto="Brandon Sanderson"/>, que serve como cenário para muitas de suas obras literárias. As histórias ambientadas no Cosmere estão interligadas por uma <Significado palavra="cosmologia" significado="Isto é, por uma mesma origem, estrutura e evolução do universo."/> comum e por regras consistentes que governam os sistemas de magia. Além disso, certos personagens e elementos narrativos
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

          <p>A <Significado palavra="cosmogonia" significado="Isto é, a teoria sobre a origem e evolução do universo."/> do Cosmere começa com <Enlaçar destino="/cosmere/adonalsium" texto="Adonalsium"/>, descrito como uma força ou entidade primordial que pode ser comparada a um “deus original”. Sua verdadeira natureza é envolta em mistério; ainda não se sabe ao certo se Adonalsium era uma consciência, uma energia divina ou algo completamente diferente.</p>
          
          <p>Em um evento conhecido como a <Enlaçar destino="/cosmere/eventos/ruptura-de-adonalsium" texto="Ruptura de Adonalsium"/>, essa entidade foi despedaçada em dezesseis partes, chamadas de <Enlaçar destino="/cosmere/conceitos/fractais-de-adonalsium" texto="Fractais"/>. cada fractal representa um aspecto específico do que era Adonalsium, e carregam um enorme poder.</p>

          <p>Após a Ruptura, os Fractais se ligaram a indivíduos que assumiram esses fragmentos de poder, transformando-se em uma espécie de “deuses menores” no Cosmere</p>
        
          <p>Esses novos portadores do poder de Adonalsium eventualmente deixaram seu planeta natal e migraram para diferentes mundos dentro do Cosmere. Em cada planeta, os Fractais interagiram com as características únicas do local, dando origem a formas distintas de magia. Essa interação entre o poder dos Fractais e os ambientes moldou a realidade de cada mundo e influenciou profundamente a vida e a cultura de seus habitantes.</p>
        </Topico>
        
        <Topico titulo="Reinos do Cosmere">
          <p>No Cosmere, toda existência é dividida em três reinos fundamentais que coexistem e interagem entre si: o <Enlaçar destino="/cosmere/reinos/reino-fisico" texto="Reino Físico"/>, o <Enlaçar destino="/cosmere/reinos/reino-cognitivo" texto="Reino Cognitivo"/> e o <Enlaçar destino="/cosmere/reinos/reino-espiritual" texto="Reino Espiritual"/>. Segundo Sanderson, esses reinos foram estabelecidos desde o início do universo e são a base para a compreensão da realidade e da magia nos mundos do Cosmere.</p>

          <p>O Reino Físico é o que é percebido como o mundo material, onde os eventos tangíveis acontecem. o Reino Cognitivo reflete pensamentos, ideias e percepções, funcionando quase como um espelho do mundo físico, mas moldado pelas crenças e consciências. Já o Reino Espiritual contém as essências e ideais perfeitos de tudo, servindo como uma matriz que define o que cada coisa ou pessoa é em sua forma mais pura.</p>

          <p>A conexão entre os reinos se manifesta de forma mais evidente no ciclo da vida e da morte. No Cosmere, quando alguém morre, sua essência não desaparece imediatamente. Uma <Enlaçar destino="/cosmere/conceitos/sombra-cognitiva" texto="Sombra Cognitiva"/> surge no Reino Cognitivo, carregando a percepção e os traços dessa pessoa. Para a maioria dos indivíduos, essa sombra é efêmera e logo segue para o <Enlaçar destino="/cosmere/lugares/alem" texto="Além"/>, enquanto sua <Enlaçar destino="/cosmere/conceitos/investidura" texto="Investidura"/> (a energia espiritual que conecta todas as coisas no Cosmere) retorna ao Reino Espiritual.</p>

          <p>Entretanto, há exceções. Pessoas com maior quantidade de Investidura em vida podem permanecer no Reino Cognitivo por mais tempo antes de serem atraídas para o Além. E ainda mais excepcionais são os Fractários — aqueles que carregaram parte do poder de um Fractal. Esses indivíduos têm uma ligação tão profunda com a Investidura que podem resistir indefinidamente ao chamado do Além, escolhendo se desejam ou não <em>atravessar</em></p>

          <p>E enquanto a passagem para o Além não acontece, é possível reverter a morte em alguns casos. Por meio de magia, o corpo físico pode ser curado ou infundido com Investidura suficiente para restaurar a vida, ou então só para transformar o morto em uma Sombra Cognitiva duradoura. Contudo, certas mortes são irreversíveis.Aaqueles mortos pela <Enlaçar destino="/cosmere/objetos/espadas-fractais" texto="espada fractal"/> <Enlaçar destino="/cosmere/objetos/sangue-noturno" texto="Sangue Noturno"/>, pela <Enlaçar destino="/cosmere/conceitos/anti-investidura" texto="Anti-Investidura"/>, ou consumidos pelo <Enlaçar destino="/cosmere/seres/esprenos" texto="espreno"/> <Enlaçar destino="/cosmere/seres/yelig-nar" texto="Yelig-nar"/> têm suas almas completamente destruídas, impossibilitando qualquer retorno.</p>

          <p>Ademais, como a cura mágica no Cosmere funciona conectando as partes de alguém que estão <em>dispersas</em> nos reinos; ela acaba sendo limitada pela percepção de si que foi deixada no <Enlaçar destino="/cosmere/reinos/reino-cognitivo" texto="Reino Cognitivo"/>. Isto é, a forma como a pessoa se percebe influencia diretamente o processo de cura. Se alguém aceita uma característica como parte de si mesmo (como uma cicatriz ou deficiência), essa percepção é projetada no Reino Cognitivo, impedindo a restauração total segundo a forma perfeita e ideal que existe no <Enlaçar destino="/cosmere/reinos/reino-espiritual" texto="Reino Espiritual"/>.</p>
          
          <Subtopico titulo="Reino Físico">
            <Discorrer destino="/cosmere/reinos/reino-fisico/" assunto="o Reino Físico"></Discorrer>
            <p>O Reino Físico do Cosmere é formado de partículas fundamentais conhecidas como  e segue as leis comuns da física, a não ser quando a influência e/ou interferência de algum dos outros Reinos as modifica.</p>

            <p>O Reino Físico no Cosmere é o plano da existência que percebemos diretamente, formado por partículas fundamentais chamadas <Enlaçar destino="/cosmere/materiais/axi" texto="axi"/>. Essas partículas compõem toda a matéria e energia no Cosmere. O Reino Físico segue as leis comuns da física — exceto quando sofre influência ou interferência de um dos outros reinos (<Enlaçar destino="/cosmere/reinos/reino-cognitivo" texto="Cognitivo"/> ou <Enlaçar destino="/cosmere/reinos/reino-espiritual" texto="Espiritual"/>.), o que pode alterar sua dinâmica natural.</p>

            <p>Pelo que sabemos atualmente, no Reino Físico, o Cosmere é um aglomerado estelar composto por aproximadamente 50 a 100 estrelas. Dentro dele, estão dezesseis sistemas planetários conhecidos, que abrigam um total de dezenove planetas notáveis, além de diversos outros objetos celestes, como planetas anões, luas, constelações etc.</p>

            <p></p>

            <p>Embora o Cosmere seja vasto, ele não é ilimitado. Sabe-se que houve tentativas de ultrapassar os limites físicos do aglomerado estelar, mas o resultado dessas empreitadas permanece um mistério.</p>
          </Subtopico>

          <Subtopico titulo="Reino Cognitivo">
            <Discorrer destino="/cosmere/reinos/reino-cognitivo" assunto="o Reino Cognitivo"/>
            <p>O Reino Cognitivo é, em essência, uma versão espelhada do Reino Físico, mas com diferenças marcantes. Ele é conhecido como o Reino do Pensamento, e é moldado diretamente pela percepção coletiva e as ideias predominantes dos habitantes de um mundo, influenciando sua aparência e estrutura ao espelhar o Reino Físico.</p>

            <p>O Reino Cognitivo também é influciado por o quanto as pessoas de um mundo pensam em conceitos do Reino Físico. Por exemplo, no Reino Cognitivo, o espaço sideral é extremamente pequeno, já que as pessoas raramente pensam no vasto espaço entre os planetas.</p>

            <p>Algumas entidades existem naturalmente no Reino Cognitivo ou são nativas dele, como os <Enlaçar destino="/cosmere/seres/esprenos" texto="esprenos"/>, que personificam pensamentos, emoções e características naturais, e as sombras cognitivas, que são remanescentes de seres que já viveram no Reino Físico.</p>

            <p>O Reino Cognitivo é quase como uma versão do Reino Físico com diferenças bem marcadas. Por definição, o Reino Cognitivo é o Reino do pensamento e, assim sendo, ele é significativamente afetado pela forma como as pessoas imaginam e percebem as ideias sobre seu mundo e o universo imediatamente a sua volta.</p>

            <p>Por exemplo, o espaço sideral é significativamente pequeno no Reino Cognitivo, porque as pessoas não passam muito tempo pensando no espaço entre os planetas.</p>

            <p>Há também algumas entidades que são nativas do Reino Cognitivo ou que existem naturalmente nele, como é o caso dos <Enlaçar destino="/cosmere/seres/esprenos" texto="esprenos"/>, que personificam pensamentos, emoções e características naturais; e das <Enlaçar destino="/cosmere/conceitos/sombra-cognitiva" texto="Sombras Cognitivas"/>.</p>

            <p>A aparência do Reino Cognitivo ao redor de cada planeta tende a refletir suas características únicas. Por exemplo:</p>

            <ul className="list-disc list-inside">
              <li>O Reino Cognitivo de <Enlaçar destino="/cosmere/mundos/scadrial" texto="Scadrial"/> (planeta de <Enlaçar destino="/livros/nascidos-da-bruma" texto="Nascidos da Bruma"/>) é composto por névoa/bruma.</li>
              <li>Em <Enlaçar destino="/cosmere/mundos/roshar" texto="Roshar"/> (planeta de <Enlaçar destino="/livros/os-relatos-da-guerra-das-tempestades/" texto="Os relatos da Guerra das Tempestades"/>), ele se manifesta como esferas brilhantes.</li>
            </ul>

            <p>Outra peculiaridade do Reino Cognitivo é a inversão entre terra e água. No Reino Cognitivo, as terras firmes do Físico se tornam líquidos navegáveis, enquanto os corpos de água no Físico se tornam massas sólidas. Essa inversão cria um desafio para seres físicos que entram no Reino Cognitivo, pois podem se afogar nos líquidos que o compõem. Por outro lado, entidades cognitivas atravessam essas regiões sem dificuldades.</p>
          </Subtopico>
          
          <Subtopico titulo="Reino Espiritual">
            <Discorrer destino="/cosmere/reinos/reino-espiritual" assunto="o Reino Espiritual"/>

            <p>O Reino Espiritual, diferente dos outros dois reinos do Cosmere, não é exatamente um lugar físico ou tangível. Ele existe além do espaço e do tempo, transcendendo as limitações da realidade perceptível. Brandon Sanderson o descreve como um reino de conceitos e essências.</p>

            <p>Os conceitos fundamentais do Reino Espiritual incluem:</p>
            <ul className="list-decimal list-inside flex flex-col gap-3">
              <li id="intenção" className={id_props}>
                <Enlaçar destino="/cosmere/conceitos/intencao" texto="Intenção"/>:

                <div className="flex flex-col gap-3 mt-3">
                  <p>No Cosmere, a Intenção é uma propriedade espiritual que representa a vontade ou propósito essencial de uma pessoa ou entidade. Ela não é algo esporádico, acidental ou fortuito; se a Intenção é necessária para realizar algo, a pessoa que tenta fazê-lo deve não apenas executar a ação, mas também ter a intenção deliberada de realizá-la. Muitas magias dos mundos de Brandon Sanderson dependem dessa característica, exigindo que o usuário aja conscientemente com Intenção para ativar ou manipular a Investidura.</p>

                  <p>Entidades de Investidura, como os <Enlaçar destino="/cosmere/seres/esprenos" texto="esprenos"/>, as <Enlaçar destino="/cosmere/conceitos/sombra-cognitiva" texto="Sombras Cognitivas"/> e até os Fractários, possuem uma Intenção intrínseca, que reflete o propósito fundamental da Investidura de que são compostos. Com o passar do tempo, essas entidades tendem a se alinhar tão fortemente à sua Intenção que se tornam incapazes de agir de forma contrária a ela.</p>

                  <p>Um exemplo extremo é <Enlaçar destino="/cosmere/personagens/ati" texto="Ati"/>, o portador original do Fractal <Enlaçar destino="/cosmere/fractais/ruina" texto="Ruína"/>. Inicialmente, Ati era descrito como gentil e generoso, mas, ao longo do tempo, foi completamente consumido pela Intenção do Fractal Ruína. Essa transformação o levou a desejar a destruição total de <Enlaçar destino="/cosmere/mundos/scadrial" texto="Scadrial"/>, pois ele acreditava que a ruína era uma parte essencial do ciclo natural do Cosmere.</p>
                </div>
              </li>

              <li id="identidade" className={id_props}><Enlaçar destino="/cosmere/conceitos/identidade" texto="Identidade"/>:
              <div className="flex flex-col gap-3 mt-3">
                <p>No Cosmere, a Identidade é uma propriedade espiritual que define o que uma pessoa ou objeto essencialmente é. Ela funciona como uma espécie de fechadura e chave nas interações com a Investidura, sendo fundamental para as <Enlaçar destino="/cosmere/objetos/mentes-de-metal" texto="Mentes de metal"/> da <Enlaçar destino="/cosmere/sistemas-de-magia/feruquemia" texto="Feruquemia"/>. Em condições normais, um feruquemista só pode acessar atributos armazenados por ele mesmo, já que a Identidade de quem armazenou deve corresponder à Identidade de quem tenta recuperar.</p>

                <p>A Identidade é intrinsecamente conectada ao conceito de <Enlaçar destino="/cosmere/conceitos/teia-espiritual" texto="Teia Espiritual"/>, que pode ser vista como um <em>DNA espiritual</em>. Embora as Teias Espirituais ainda não tenham sido completamente explicadas, sabe-se que elas:</p>

                <ul className="list-disc list-inside">
                  <li>Contêm informações detalhadas sobre a Investidura associada a uma pessoa ou objeto.</li>
                  <li>São, de certa forma, quantificáveis e podem ser lidas ou manipuladas por aqueles que possuem habilidades específicas para interagir com o Reino Espiritual.</li>
                </ul>

                <p>Além de definir quem ou o que algo é, a Identidade também desempenha um papel na Conexão, armazenando vínculos entre pessoas, objetos e até conceitos abstratos. Esses vínculos espirituais têm implicações tanto no funcionamento das magias no Cosmere quanto nas interações entre os Reinos.</p>
              </div>
              </li>

              <li id="conexão" className={id_props}><Enlaçar destino="/cosmere/conceitos/conexao" texto="Conexão"/>
                <div className="flex flex-col gap-3 mt-3">
                  <p>A Conexão é uma propriedade espiritual que representa e armazena os vínculos espirituais entre diferentes entidades no Cosmere, como seres vivos, locais, itens e até conceitos abstratos. Esses vínculos transcendem o Reino Físico e têm implicações práticas e mágicas.</p>

                  <p>Por exemplo, é possível estabelecer uma Conexão entre uma pessoa e uma região, permitindo que ela fale instantaneamente o idioma local, como se fosse um falante nativo. Essa aplicação é um dos exemplos mais conhecidos da manipulação de Conexões no Cosmere.</p>

                  <p>A Conexão também desempenha um papel fundamental no funcionamento dos Fractais. Para que alguém assuma o poder de um Fractal após a morte de seu Portador, essa pessoa precisa estar Conectada ao Fractal de forma significativa.</p>

                  <p>Assim como outras propriedades espirituais, a Conexão é quantificável e pode ser manipulada por meio de <Enlaçar destino="/cosmere/conceitos/artes-investidas" texto="Artes Investidas"/> ou outras formas de interação com a Investidura. Embora Sanderson tenha mencionado que a Conexão pode ser alterada artificialmente, o método exato para fazê-lo ainda não foi explicado.</p>
                </div>
              </li>

              <li id="sorte" className={id_props}><Enlaçar destino="/cosmere/conceitos/sorte" texto="Sorte"/>
                <div className="flex flex-col gap-3 mt-3">
                  <p>No Cosmere, a Sorte é uma propriedade espiritual ligada à boa fortuna, à capacidade de prever ou visualizar eventos futuros e à percepção de possibilidades futuras. Essa propriedade é explorada de diversas formas nos mundos criados por Sanderson, especialmente através da manipulação da Investidura.</p>

                  <p>Um exemplo icônico de Sorte em ação são as sombras de <Enlaçar destino="/cosmere/materiais/atium" texto="atium"/> em Nascidos da Bruma. Quando um usuário consome atium, ele pode prever o futuro imediato, visualizando as possíveis ações de seus oponentes em combate. Esse é um uso direto de Sorte para antecipar eventos de curto prazo.</p>

                  <p>Embora o uso de Sorte para prever o futuro imediato seja relativamente eficiente, tentar visualizar eventos mais distantes ou em outros locais é significativamente mais complicado. Esse tipo de previsão frequentemente resulta em visões imprecisas ou subjetivas, limitadas pela complexidade do futuro e pelas inúmeras variáveis envolvidas.</p>
                </div>
              </li>
            </ul>

            <p>Além disso, no Reino Espiritual, tudo existe em sua forma ideal. Isso significa que qualquer coisa ou ser no Cosmere possui uma versão perfeita e completa representada neste reino, livre de imperfeições físicas ou distorções cognitivas. É essa versão ideal que muitas vezes serve como base para magias de cura e restauração nos mundos do Cosmere.</p>
          </Subtopico>
        </Topico>

        <Topico titulo="Investidura">
          <Citar citacao="Sua investidura está ligada à sua alma; de fato, poderia ser uma parte da sua alma, assim como seu sangue é parte do seu corpo.">
            <Mencionar quem="VenDell"/> para <Mencionar quem="Waxillium"/>.
          </Citar>

          <p>A Investidura é uma das três essências fundamentais que compõem o Cosmere, juntamente com a matéria e a energia. Ela pode ser descrita como uma energia espiritual que permeia e transcende os Reinos Físico, Cognitivo e Espiritual.</p>

          <Subtopico titulo="Natureza e aparência">
            <p>A Investidura existe principalmente no <Enlaçar destino="/cosmere/reinos/reino-espiritual" texto="Reino Espiritual"/>, mas pode se manifestar nos outros Reinos. Quando aparece no  <Enlaçar destino="/cosmere/reinos/reino-fisico" texto="Reino Físico"/>, ela geralmente se condensa em um dos estados da matéria: sólido, líquido ou gás. Ao interagir com o Físico, a Investidura obedece às leis de conservação de energia e termodinâmica, reforçando sua conexão com os conceitos físicos do Cosmere.</p>
          </Subtopico>

          <Subtopico titulo="Origem e ruptura">
            <p>Toda a Investidura no Cosmere estava originalmente ligada diretamente a <Enlaçar destino="/cosmere/adonalsium" texto="Adonalsium"/>. Com a <Enlaçar destino="/cosmere/eventos/ruptura-de-adonalsium" texto="Ruptura"/>, ela foi dividida igualmente entre os <Enlaçar destino="/cosmere/conceitos/fractais-de-adonalsium" texto="Fractais"/>, os dezesseis fragmentos resultantes da quebra de Adonalsium. Apesar dessa divisão, a Investidura mantém um vínculo essencial com a essência de Adonalsium, pois os Fractais são, de certa forma, extensões dele.</p>

            <p>Sanderson descreve a Ruptura como algo que “significou tudo e nada ao mesmo tempo” para a Investidura. Isso sugere que, embora a Investidura tenha sido fragmentada, sua essência ainda reflete a unidade original de Adonalsium.</p>
          </Subtopico>

          <Subtopico titulo="Lascas">
            <p>Se deixada sozinha por tempo suficiente, a Investidura pode se tornar autoconsciente, resultando na formação de entidades chamadas Lascas. Exemplos desse fenômeno incluem os <Enlaçar destino="/cosmere/seres/seons" texto="seons"/> de <Enlaçar destino="/livros/elantris" texto="Elantris"/> e os <Enlaçar destino="/cosmere/seres/esprenos" texto="esprenos"/> de <Enlaçar destino="/livros/os-relatos-da-guerra-das-tempestades/" texto="Os relatos da Guerra das Tempestades"/>.</p>
          </Subtopico>

          <Subtopico titulo="Interação e corrupção">
            <p>A Investidura é, por natureza, conectada ao Fractal a que pertence. Contudo, ela pode tentar corromper ou cooptar a Investidura associada a outro Fractal. Essas interações frequentemente geram um efeito vermelho em manifestações mágicas.</p>

            <p>Um exemplo disso é a névoa vermelha de <Enlaçar destino="/cosmere/personagens/trell" texto="Trell"/>, uma representação do Fractal <Enlaçar destino="/cosmere/fractais/autonomia" texto="Autonomia"/> tentando invadir Scadrial, planeta protegido por <Enlaçar destino="/cosmere/personagens/harmonia" texto="Harmonia"/>, o portador dos Fractais <Enlaçar destino="/cosmere/fractais/preservacao" texto="Preservação"/> e <Enlaçar destino="/cosmere/fractais/ruina" texto="Ruína"/>.</p>
          </Subtopico>
        </Topico>

        <Topico titulo="Bibliografia">
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
