const data = [
    { name: 'Revisión rutinaria', level: 'Nivel de búsqueda 1' },
    { name: 'Detención de tránsito', level: 'Nivel de búsqueda 1' },
    { name: 'Interrogatorio', level: 'Nivel de búsqueda 1' },
    { name: 'Actitud sospechosa', level: 'Nivel de búsqueda 1' },
    { name: 'Exhibicionismo', level: 'Nivel de búsqueda 1' },
    { name: 'Poseer máscara en vía pública', level: 'Nivel de búsqueda 1' },
    { name: 'Alterar el orden público', level: 'Nivel de búsqueda 1' },
    { name: 'Consumo de estupefacientes', level: 'Nivel de búsqueda 1' },
    { name: 'Insultar a un funcionario público', level: 'Nivel de búsqueda 1' },
    { name: 'Amenazar a un civil o funcionario público', level: 'Nivel de búsqueda 1' },
    { name: 'Entrar a comisarías o bases militares', level: 'Nivel de búsqueda 1' },
    { name: 'Fugarse', level: 'Nivel de búsqueda 2' },
    { name: 'Complicidad', level: 'Nivel de búsqueda 2' },
    { name: 'Ofrecimiento de servicios sexuales en vía pública', level: 'Nivel de búsqueda 2' },
    { name: 'Atropellar a oficiales o personas', level: 'Nivel de búsqueda 2' },
    { name: 'Conducción temeraria', level: 'Nivel de búsqueda 2' },
    { name: 'No seguir órdenes de retirarse de un lugar', level: 'Nivel de búsqueda 2' },
    { name: 'Entorpecer el proceso legal', level: 'Nivel de búsqueda 2' },
    { name: 'Negarse a entregar mochila o vehículo para revisión', level: 'Nivel de búsqueda 2' },
    { name: 'Revisar a un oficial de policía o marina', level: 'Nivel de búsqueda 2' },
    { name: 'Carreras ilegales', level: 'Nivel de búsqueda 2' },
    { name: 'Robo de vehículo', level: 'Nivel de búsqueda 3' },
    { name: 'Exceder la cantidad máxima permitida de posesión de estupefacientes', level: 'Nivel de búsqueda 3' },
    { name: 'Porte de armamento en menor cantidad', level: 'Nivel de búsqueda 3' },
    { name: 'Agredir a un funcionario público físicamente', level: 'Nivel de búsqueda 3' },
    { name: 'Guardar vehículo en plena revisión', level: 'Nivel de búsqueda 3' },
    { name: 'Remolcar con una grúa patrullas o cualquier tipo de vehículo gubernamental', level: 'Nivel de búsqueda 3' },
    { name: 'Ultraje', level: 'Nivel de búsqueda 3' },
    { name: 'Simulación de hecho punible', level: 'Nivel de búsqueda 3' },
    { name: 'Encubrimiento', level: 'Nivel de búsqueda 3' },
    { name: 'Posesión de armamento en mayor cantidad', level: 'Nivel de búsqueda 4' },
    { name: 'Asalto a un peatón', level: 'Nivel de búsqueda 4' },
    { name: 'Robo de casa', level: 'Nivel de búsqueda 4' },
    { name: 'Robo de negocio', level: 'Nivel de búsqueda 4' },
    { name: 'Robo de cajero', level: 'Nivel de búsqueda 5' },
    { name: 'Uso de arma de fuego', level: 'Nivel de búsqueda 5' },
    { name: 'Robo al banco', level: 'Nivel de búsqueda 6' },
    { name: 'Matar a un civil de cualquier forma', level: 'Nivel de búsqueda 6' },
    { name: 'Colocar explosivos en espacios públicos o con personas cerca', level: 'Nivel de búsqueda 6' },
    { name: 'Robo al casino', level: 'Nivel de búsqueda 7' },
    { name: 'Asesinato de 2 o más civiles', level: 'Nivel de búsqueda 7' },
    { name: 'Abuso Sexual', level: 'Nivel de búsqueda 7' },
    { name: 'Atacar a un funcionario público con arma de fuego', level: 'Nivel de búsqueda 8' },
    { name: 'Secuestro o privación de libertad de un individuo', level: 'Nivel de búsqueda 8' },
    { name: 'Atentado o ataque armado de un grupo delictivo/banda a la ciudadanía', level: 'Nivel de búsqueda 9' },
    { name: 'Atentado o ataque armado de un grupo delictivo/banda a una institución pública o privada', level: 'Nivel de búsqueda 10' },
    { name: 'Peculado', level: 'Nivel de búsqueda 10' },
    { name: 'Corrupción de funcionarios', level: 'Nivel de búsqueda 10' },
    { name: 'Usurpación de funciones', level: 'Nivel de búsqueda 10' },
    { name: 'Estafa o fraude', level: 'Nivel de búsqueda 10' },
    { name: 'Asesinar a un funcionario público', level: 'Nivel de búsqueda 11' },
    { name: 'Atentado o ataque armado de un grupo delictivo/banda al personal de una institución pública', level: 'Nivel de búsqueda 12' },
    { name: 'Constriña o dadivas', level: 'Nivel de búsqueda 15' },
    { name: 'Orden directa de alto mando', level: 'Nivel de búsqueda 13 y 14'},
    { name: 'Si la victima son dos o mas funcionarios publicos', level: 'Agravante 1 cargo'},
    { name: 'Obstruccion a la justicia o desacato', level: 'Agravante 1 cargo'},
    { name: 'Robo con agavillamiento (2 personas)', level: 'Agravante 1 cargo'},
    { name: 'Sospechoso se niega a pagar multa', level: 'Agravante 1 cargo'},
    { name: 'Induccion a la concusion', level: 'Agravante 1 cargo'},
    { name: 'Si el sospechoso habiendo sido detenido se fugue de la patrulla o recinto publico', level: 'Agravante 2 cargo'},
    { name: 'Por cada victima mortal sea de faccion o civil', level: 'Agravante 1 cargo por cada uno'},
    { name: 'Rendirse al momento de ser detenido, primera advertencia', level: 'Atenuante -1 cargo'},
    { name: 'Cooperar con el arresto o investigacion', level: 'Atenuante -1 cargo'},
    { name: 'Aportar informacion de interes a la policia cuando sea pedido', level: 'Atenuante -1 cargo'},
    { name: 'Delitos leves cuando pague la multa', level: 'Atenuante -1 cargo'},
    





];  

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    const filteredData = data.filter(item => item.name.toLowerCase().includes(query));
    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.level}`;
        resultList.appendChild(li);
    });
});