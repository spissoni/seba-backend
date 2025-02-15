// Funciones para realizar las operaciones básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert("No es posible dividir entre cero. Por favor, intenta con otro número.");
        return null;
    }
    return a / b;
}

// Función principal 
function iniciarCalculadora() {
    let continuar = true;

    while (continuar) {
        const operacion = prompt(
            "Elige la operación que deseas realizar:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"
        );

        if (operacion === "5") {
            alert("¡Gracias por usar el simulador de calculadora! Hasta la próxima.");
            continuar = false;
            break;
        }

        const num1 = parseFloat(prompt("Por favor, ingresa el primer número:"));
        const num2 = parseFloat(prompt("Por favor, ingresa el segundo número:"));

        let resultado;

        switch (operacion) {
            case "1":
                resultado = sumar(num1, num2);
                alert(`El resultado de la suma es: ${resultado}`);
                break;
            case "2":
                resultado = restar(num1, num2);
                alert(`El resultado de la resta es: ${resultado}`);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                alert(`El resultado de la X es: ${resultado}`);
                break;
            case "4":
                resultado = dividir(num1, num2);
                if (resultado !== null) {
                    alert(`El resultado de la % es: ${resultado}`);
                }
                break;
            default:
                alert("La opción seleccionada no es válida. Por favor, proba otra vez.");
        }

        continuar = confirm("queres seguir probando?");
    }
}

// Llamada para iniciar el simulador
iniciarCalculadora();
