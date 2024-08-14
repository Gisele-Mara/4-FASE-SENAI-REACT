import { useState } from "react";
import "./Body.css"



function Body() {

    const [showCamiseta, setShowCamiseta] = useState(false)

    // onMouseEnter={() => setWarning(false)}
    // onMouseLeave={() => setWarning(true)}
    return (
        <>
            <div className="bodyContainer">

                <div className="bodyImage">

                    <img src="/src/assets/farmarcia-placa.png" alt="Placa" />
                </div>
                <div className="textBody">
                    <p>🎉 Atenção, comunidade! A nossa farmácia está de volta com uma nova energia e um novo comando! 🌟 <br />

                        É com grande entusiasmo que anunciamos a reabertura da nossa farmácia, agora sob nova direção!
                        Estamos ansiosos para receber você de volta e compartilhar todas as novidades que preparamos com muito carinho. <br />

                        Para celebrar essa nova fase, preparamos promoções especiais para você! <br />
                        Venha conferir os nossos produtos com descontos imperdíveis e aproveite para conhecer a nossa nova linha de itens. <br />

                        E tem mais! Para tornar a sua visita ainda mais especial, estamos distribuindo camisetas exclusivas
                        para todos que realizarem uma compra em nossa farmácia. Garanta a sua ao adquirir qualquer produto! <br />

                        Não perca essa oportunidade de fazer parte desse novo capítulo e aproveitar ofertas incríveis.
                        Estamos esperando por você com muito entusiasmo e um atendimento de excelência! <br />
                        <br />
                        <br />
                        📅 Data da Reabertura: [Insira a Data]     <br />
                        📍 Endereço: [Insira o Endereço]     <br />

                        Venha nos visitar e celebre com a gente essa nova jornada! 🛒🎁👕     <br />

                        Até lá!</p>

                    {showCamiseta && (
                        <div>
                            <img src="/src/assets/farmarcia-camisetas.png" alt="Camiseta" />

                        </div>
                    )}
                </div>






            </div>
        </>
    )
}


export default Body;