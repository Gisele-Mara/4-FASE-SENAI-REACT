import { useState } from "react";
import "./Body.css"
import Senhas from "../Senhas/Senhas";

function AboutMarcia() {

    return (
        <>
            <div className="textAbout" >
                <h3>
                  
                </h3>
                <p> Nome: Márcia Maria Mirenda </p>
                <p>  Idade: 32 anos </p>
                <p>   Márcia possui formação em administração de empresas, com uma paixão especial por empreendedorismo e design.</p>
                <p>
                    Márcia sempre foi uma pessoa determinada e criativa. Ela cresceu em uma família onde o empreendedorismo era valorizado, inspirada pelo sucesso de seu tio Mário, que administrava uma farmácia local. </p>

                <p>
                    Depois de se formar na faculdade, Márcia se casou e começou a trabalhar em uma empresa de marketing, onde pôde desenvolver suas habilidades em design e gestão. No entanto, sua vida pessoal deu uma reviravolta quando seu casamento chegou ao fim após um evento no mínimo estranho. Seu marido saiu para comprar cigarros e nunca mais voltou, deixando Márcia sozinha para lidar com a dor do abandono e o desafio de reconstruir sua vida.
                </p>
                <p>
                    Decidida a seguir em frente, Márcia viu na farmácia de seu tio Mário uma oportunidade de recomeçar. Ela comprou o negócio e começou a reformá-lo, aplicando suas habilidades em administração e design para transformá-lo em um espaço moderno e acolhedor.
                </p>
                <p>
                    Enquanto renovava a farmácia, Márcia também decidiu investir em tecnologia para impulsionar o negócio. Ela implementou um sistema de gerenciamento de estoque automatizado e lançou um programa de fidelidade digital para os clientes, proporcionando uma experiência de compra mais conveniente e personalizada.
                    </p>
                    <p>
                    Agora, com a farmácia renovada e pronta para competir no mercado, Márcia está determinada a fazer da Farmárcia um sucesso. Ela está em busca de um programador de tecnologia para ajudá-la a desenvolver uma presença online robusta, incluindo um website responsivo e aplicativos móveis que ofereçam aos clientes uma experiência de compra moderna e simplificada. A história de Márcia é um testemunho de resiliência e determinação, mostrando como ela transformou uma adversidade em uma oportunidade de crescimento pessoal e profissional. Ahhh, e ela é muito mais feliz agora :D

                </p>



            </div>

        </>
    )
}

function Body() {

    const [showFofoca, setShowFofoca] = useState(false)


    return (
        <>
            <div className="bodyContainer">
                        {/* <Senhas /> */}
                <div className="bodyImage">

                    <img src="/src/assets/farmarcia-placa.png" alt="Placa" />
                </div>
                <div className="textBody">
                    {showFofoca && (
                        <div className="boxFofoca">
                            <AboutMarcia />


                        </div>
                    )}
                    <h2>Atenção, pessoal! </h2>
                    <p>
                        A nossa farmácia está de volta com uma nova energia e um novo comando! 
                        É com grande entusiasmo que anunciamos a reabertura da nossa farmácia, agora sob nova direção!
                        Estamos ansiosos para receber você de volta e compartilhar todas as novidades que preparamos com muito carinho. 
                    </p>
                    <p>
                        Para celebrar essa nova fase, preparamos promoções especiais para você! 
                        </p>
                        <p>
                        Venha conferir os nossos produtos com descontos imperdíveis e aproveite para conhecer a nossa nova linha de itens. 
                        Para tornar a sua visita ainda mais especial, estamos distribuindo camisetas exclusivas  para todos que realizarem uma compra em nossa farmácia. Garanta a sua ao adquirir qualquer produto! 
                    </p>
                    <p>
                        Não perca essa oportunidade de fazer parte desse novo capítulo e aproveitar ofertas incríveis.
                        Estamos esperando por você com muito entusiasmo e um atendimento de excelência! 
                        Venha nos visitar e celebre com a gente essa nova jornada! 

                        Até lá!

                    </p>
                    <br/><br/>
                    <span className={"spanFofoca"} onMouseEnter={() => setShowFofoca(true)}
                        onMouseLeave={() => setShowFofoca(false)}> Extra: A curiosidade está nas alturas e quer saber mais sobre a Márcia (#fofocaAlert)? Passe o mouse</span>


                </div>
                <div className="bodyImageRight">
                    <div className="bodyImageRightTop">
                        <img src="/src/assets/farmarcia.png" alt="Placa" />

                    </div>
                    <div className="bodyImageRightBottom">

                        <div className="bodyImageRightBottomLeft">

                            <img src="/src/assets/farmarcia-camisetas.png" alt="Placa" />

                        </div>
                        <div className="bodyImageRightBottomRight">

                            <img src="/src/assets/farmarcia-cartoes.png" alt="Placa" />

                        </div>

                    </div>
                </div>






            </div>
        </>
    )
}


export default Body;