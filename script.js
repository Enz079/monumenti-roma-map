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

const btnTabella = document.getElementById('btn-tabella');
let tabellaEsistente = false;

btnTabella.addEventListener('click', function() {

    const container = document.getElementById('tabella-container');
    
    //Pulisce il contenitore se esiste già
    container.innerHTML = '';
    
    //Ottiene la lista aggiornata
    const listaMonumenti = ottieniListaMonumenti();
    
    const tabella = document.createElement('table');
    tabella.setAttribute('id', 'tabella-monumenti');
    
    const tbody = document.createElement('tbody');
    
    //Popola la tabella con i monumenti
    listaMonumenti.forEach((monumento, index) => {
        const riga = document.createElement('tr');
        
        //Colonne
        const cellaNumero = document.createElement('td');
        cellaNumero.textContent = index + 1;
        riga.appendChild(cellaNumero);
        
        const cellaLat = document.createElement('td');
        cellaLat.textContent = monumento.lat;
        riga.appendChild(cellaLat);
        

        const cellaLng = document.createElement('td');
        cellaLng.textContent = monumento.lng;
        riga.appendChild(cellaLng);
        
        tbody.appendChild(riga);
    });
    
    tabella.appendChild(tbody);
    container.appendChild(tabella);
});