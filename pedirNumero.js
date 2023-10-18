let numero2 = prompt("Digite un numero: ");

numero2 = parseFloat(numero2); // Si deseas un número decimal, o parseInt si solo quieres números enteros

if (!isNaN(numero2)) {
   for (let i = 0; i < numero2; i++) {
        if (i % 2 === 0) {
            console.log(" " + i);
        }
   }
} else {
    console.log("¡Lo siento! Debes ingresar un número válido.");
}