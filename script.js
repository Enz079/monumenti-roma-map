const centroRoma = [41.8964, 12.4823];


const map = L.map('map').setView(centroRoma, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

aggiungiMonumenti(map);

mostraStatisticheMonumenti();

const form = document.getElementById('monumento-form');

form.addEventListener('submit', function(e) {
    
    e.preventDefault(); // Evita il refresh della pagina
    
    const nome = document.getElementById('nome-monumento').value;
    const lat = parseFloat(document.getElementById('lat-monumento').value);
    const lng = parseFloat(document.getElementById('lng-monumento').value);
    
    const nuovoMonumento = {
        nome: nome,
        lat: lat,
        lng: lng
    };
    
    aggiungiMonumentoArray(nuovoMonumento);
    
    //Aggiunge il marker sulla mappa
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<b>${nome}</b>`);
    
    form.reset();
    
    alert(`Monumento "${nome}" aggiunto con successo!`);
});


const btnStatistiche = document.getElementById('btn-statistiche');
btnStatistiche.addEventListener('click', function() {
    mostraStatisticheMonumenti();
});