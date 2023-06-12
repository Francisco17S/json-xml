// Cargar datos de facultades desde archivo XML
fetch('/datos/facultades.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const facultades = xmlDoc.getElementsByTagName('nombre');

        const facultadSelect = document.getElementById('facultadSelect');
        for (let i = 0; i < facultades.length; i++) {
            const facultad = facultades[i].textContent;
            facultadSelect.innerHTML += `<option>${facultad}</option>`;
        }
    });

// Cargar datos de carreras desde archivo JSON
fetch('/datos/carreras.json')
    .then(response => response.json())
    .then(data => {
        const carreras = data.carreras;

        const carreraSelect = document.getElementById('carreraSelect');
        for (let i = 0; i < carreras.length; i++) {
            const carrera = carreras[i];
            carreraSelect.innerHTML += `<option>${carrera}</option>`;
        }
    });
