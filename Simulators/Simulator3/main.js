 function calcularTotal() {
    // Obtener los valores de los ingresos
    const ingreso1 = parseFloat(document.getElementById('ingreso1').value) || 0;
    const ingreso2 = parseFloat(document.getElementById('ingreso2').value) || 0;
 
    // Calcular las bases retenidas
    const baseRetenida1 = ingreso1 - 200; // Retención fija de 200
    const baseRetenida2 = ingreso2 - 100; // Retención fija de 100
 
    // Actualizar las bases retenidas en la tabla
    document.getElementById('retenida1').textContent = `$${baseRetenida1.toFixed(2)}`;
    document.getElementById('retenida2').textContent = `$${baseRetenida2.toFixed(2)}`;
 
    // Obtener los valores de las deducciones
    const deduccion1 = parseFloat(document.getElementById('deduccion1').value) || 0;
    const deduccion2 = parseFloat(document.getElementById('deduccion2').value) || 0;
 
    // Calcular el total a declarar
    const totalIngresos = baseRetenida1 + baseRetenida2;
    const totalDeducciones = deduccion1 + deduccion2;
    const totalDeclarar = totalIngresos - totalDeducciones;
 
    // Mostrar el total a declarar
    document.getElementById('totalDeclarar').textContent = `$${totalDeclarar.toFixed(2)}`;
}