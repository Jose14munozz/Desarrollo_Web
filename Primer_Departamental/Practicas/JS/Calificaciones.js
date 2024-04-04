let calificaciones = [];
 
function agregarCalificacion() {
    const nombre = document.getElementById('nombre').value;
    const matricula = document.getElementById('matricula').value;
    const calificacion1 = parseInt(document.getElementById('calificacion1').value);
    const calificacion2 = parseInt(document.getElementById('calificacion2').value);
    const calificacion3 = parseInt(document.getElementById('calificacion3').value);
    const calificacion4 = parseInt(document.getElementById('calificacion4').value);
    const calificacion5 = parseInt(document.getElementById('calificacion5').value);
 
    const promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5) / 5;
    calificaciones.push({ nombre, matricula, calificacion1, calificacion2, calificacion3, calificacion4,calificacion5, promedio });
 
    Calificaciones();
    Promedio();
}
 

function Calificaciones() {
    const tabla = document.getElementById('tablaCalificaciones');
    let html1 = '<table><tr><th></th><th></th><th>Sistemas</th><th>Aplicaciones Web</th><th>Auditoria</th><th>Base de Datos</th><th>Redes</th>';
    let html = '<table><tr><th>Nombre</th><th>Matrícula</th><th>Calificación 1</th><th>Calificación 2</th><th>Calificación 3</th><th>Calificación 4</th><th>Calificación 5</th><th>Promedio</th></tr>';
    calificaciones.forEach(calificacion => {
        html += `<tr><td>${calificacion.nombre}</td><td>${calificacion.matricula}</td><td>${calificacion.calificacion1}</td><td>${calificacion.calificacion2}</td><td>${calificacion.calificacion3}</td><td>${calificacion.calificacion4}</td><td>${calificacion.calificacion5}</td><td>${calificacion.promedio.toFixed(2)}</td></tr>`;
    });
    html1 += '</table>';
    html += '</table>';
    tabla.innerHTML = html1 + html;
}
 
