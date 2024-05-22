const Persona = ({nome, cognome, eta, cambioEta}) => {
    return (
        <div className="persona">
            <div>{nome}</div>
            <div>{cognome}</div>
            <div onClick={() => {
                cambioEta(25);
            }}>{eta}</div>
        </div>
    );
};

export default Persona;