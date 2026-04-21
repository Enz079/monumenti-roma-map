const monumenti = [
    { nome: "Colosseo", lat: 41.890299, lng: 12.492311 },
    { nome: "Pantheon", lat: 41.8986, lng: 12.4769 },
    { nome: "Fontana di Trevi", lat: 41.9009, lng: 12.4833 },
    { nome: "Piazza Navona", lat: 41.8991, lng: 12.4733 },
    { nome: "Altare della Patria", lat: 41.8948, lng: 12.4831 },
    { nome: "Castel Sant'Angelo", lat: 41.9031, lng: 12.4664 }
];

function aggiungiMonumenti(mappa) {

    monumenti.forEach(mon => {
        //Crea un marker con le coordinate
        const marker = L.marker([mon.lat, mon.lng]).addTo(mappa);
        //Aggiunge un popup con il nome
        marker.bindPopup(`<b>${mon.nome}</b>`);
    });
}

function mostraStatisticheMonumenti() {
    alert(`Numero di monumenti mostrati sulla mappa: ${monumenti.length}`);
}

function aggiungiMonumentoArray(monumento) {
    monumenti.push(monumento);
}

function ottieniListaMonumenti() {
    return monumenti;
}