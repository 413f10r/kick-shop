import portaCalcio from "../assets/img/category/portaCalcio.jpg"; // Importa l'immagine della porta calcio
import "../css/index.css"; // Importa correttamente il file CSS

export default function MiniGame() {
    return (
        <>
            <h3>Gioca ora</h3>
            <figure style={{ width: "98vw", margin: 0 }}>
                <img src={portaCalcio} alt="Porta da Calcio" style={{ width: "100%", display: "block" }} />
            </figure>

            <div className="game-container">
                <h3>Gioca ora</h3>
                <div className="goal">
                    <div className="ball"></div>
                </div>
            </div>
        </>
    );
}