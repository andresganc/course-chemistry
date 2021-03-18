
### useMemo

    - useMemo se usa para memorizar calculos que pueden ser repetitivos y asi no bajar
        el rendimiento




#### ¿Qué es memoization? Técnicas de optimización en programación funcional

    - La memoria de JavaScript no es infinita, existe un máximo de funciones y cálculos que podemos hacer. Incluso si no la usamos toda, gastarla excesivamente causará que nuestras aplicaciones corran lento, con mucho lag o sencillamente briden una muy mala experiencia a los usuarios.

    Nuestro código puede parecer pequeño cuando utilizamos técnicas de programación funcional como currying y recursividad. Pero no te dejes engañar. Así estemos llamando a la misma función una y otra vez recursivamente, cada cálculo o llamado a esta función genera nuevos “bloques” en la pila de ejecuciones que debe hacer JavaScript. Esto afecta a la memoria de JavaScript y puede estropear nuestra aplicación.

    La buena noticia es que muy seguramente no tienes de qué preocuparte. Este “problema” no será realmente un problema a menos que construyas aplicaciones muy, muy grandes (por ejemplo, videojuegos en el navegador) donde la optimización de memoria es vital.

    ¡Pero tampoco te relajes! Tu responsabilidad como desarrolladora web profesional es siempre prepararte para resolver cualquier problema de programación, incluso si requieren técnicas “avanzadas” de optimización para que nuestro programa funcione a la perfección y para todos nuestros usuarios.

    Aplica memoization para evitar cálculos innecesarios
    La memoización (sí, sin r) es una técnica muy útil para evitar cálculos innecesarios en nuestro código. Guardamos el resultado de nuestros cálculos cada vez que los hacemos para no tener que repetirlos en el futuro. En otras palabras, estamos ahorrando grandes cantidades de tiempo a cambio de “mucho” espacio de almacenamiento.

    Pongamos esto en práctica con dos buenos ejemplos.

    Ejemplo práctico: calcular el factorial
    El factorial de un número es su multiplicación por todos los números anteriores a este hasta llegar al 1. La implementación por defecto de una función factorial utilizando recursividad en JavaScript se vería así:


    - Sin memoizacion
        function factorial(n) {
            if (n === 1) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }


    
    - Al calcular el factorial de 5 estamos multiplicando 5 * 4 * 3 * 2 * 1. Y si calculamos el factorial de 10 estamos multiplicando 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1. Si te fijas bien, ambos cálculos terminan igual, con las multiplicaciones del 5 hasta el 1. Esto significa que al ejecutar el factorial de 5 y luego el factorial de 10, estamos repitiendo la última parte del cálculo.

    Vamos a crear una variable de tipo array que nos permita ir guardando el resultado de todos nuestros cálculos. Luego actualizaremos nuestra función para que antes de hacer los cálculos inspeccionamos nuestra variable para encontrar si el factorial de nuestro número ya fue realizado antes y no debemos volver a hacer el cálculo.


    - Con Memoizacion
        const memo = [];

        function memoFactorial(n) {
            if (n === 1) {
                return 1;
            } else if (!memo[n]) {
                memo[n] = n * memoFactorial(n - 1);
            }  
            return memo[n];
        }