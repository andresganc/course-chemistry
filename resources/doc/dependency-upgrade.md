

### 1 Paso: Visualizar las dependencias desactualizadas
    - Para visualizar las dependencias desactualizadas
        
        $ npm audit


### 2. Paso: Actualizar las dependencias desactualizadas

    - Para actualizar las dependencias desactualizadas
        
        $ npm audit fix


### 3. Paso: Forzar la actualizacion de las dependencias desactualizadas

    - Para las dependencias que npm audit fix no pudo actualizar se puede usar estos comandos 
        para force la actualizacion.

        $ npm audit fix --force