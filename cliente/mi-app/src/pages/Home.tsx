
const Home = () => {
    return (
        <div className="container">
            <header>
                <h1>Prueba Técnica Global Think Technology</h1>
            </header>

            <main>
                <section>
                    <h2>Tareas solicitadas</h2>
                    <p>1. Configuración del Proyecto:
                        - Crea un nuevo proyecto de Node.js con TypeScript.
                        - Configura un archivo de configuración de TypeScript (`tsconfig.json`).
                        - Utiliza npm o yarn para gestionar las dependencias del proyecto.
                        - Utiliza Create React App u otras herramientas según tu preferencia.
                        - Utiliza buenas prácticas de desarrollo en React.</p>
                    <p>
                        2. Utiliza TypeScript para escribir el código. Asegúrate de definir tipos/interfaces para las
                        entidades y utilizar tipado en toda la aplicación.</p>
                    <p>3. Implementa un middleware personalizado que registre cada solicitud recibida y la hora en
                        que se realizó.</p>
                    <p>4. Manipulación de Datos:
                        - Crea una función en TypeScript que tome un array de objetos y devuelva un nuevo
                        array con solo ciertos campos de cada objeto (filtrado por el nombre del campo).</p>
                    <p>5. Gestión de Errores:
                        - Implementa un manejo de errores robusto en la API REST creada. Asegúrate de
                        manejar errores comunes y devolver respuestas HTTP apropiadas.</p>
                    <p>6. Escribe pruebas para asegurarte de que el manejo de errores funciona correctamente.</p>
                    <p>7. Crea una pagina web que permita:
                        Crea un componente que reciba una lista de entidades como prop y las muestre en una
                        lista.
                        Cada entidad debe mostrar un texto descriptivo y un botón para su edicion.
                        Al hacer clic en el botón debes permitir al usuario editar sus atributos principales.
                        Utiliza las técnicas que creas conveniente para dar la mejor experiencia al usuario</p>
                </section>

                <section>
                    <h2>Agregados</h2>
                    <p>Como el inciso de manipulación de datos y la creación del componente que recibe la lista de entidades
                        no me quedaron claros en la parte de la aplicación del filtro, decidí agregar una pagina más en la que
                        consulto a la lista y permito filtrar por el campo nombre.
                    </p>
                </section>
                <section>
                    <h2>Desarrollo</h2>
                    <p>
                        1. Seguí de acuerdo a lo solicitado en este punto. Utilicé el gestor de paquetes NPM y Create React App por preferencia.</p>
                    <p>2. Realicé el desarrollo en TypeScript en toda la aplicación y genere las interfaces a utilizar, tanto en front como en back
                        quedaron dentro del directorio interfaces.</p>
                    <p>3. Implemente el middleware personalizado y utilicé Winston para loggear las peticiones HTTP. Los registros se encuentra
                        en el archivo all.log que se encuentra dentro del directorio logs del server.</p>
                    <p>4. Dentro de la pagina Entidades coloqué un botón que lista las entidades con los campos de que quiero filtrar,
                        por defecto estan todos en true pero se puede actualizar el estado presionando los botones con los labels de cada campo.
                        Este punto no me resultó del todo claro por lo que la solución puede que no sea la correcta. Como pedía devolver un array
                        filtrado por el nombre del campo, implemente la función solicitada y devolvi una lista de Partial-Entidad que genera objetos
                        que pueden o no tener la totalidad de propiedades de la interfaz Entidad.
                        Los datos los trabajo de manera local en la capa de servicio porque no fue especificado en el enunciado.</p>
                    <p>5. En la capa de controladores realizo el manejo de errores de los endpoints en los cuales genere bloques try catch y tengo en
                        cuenta 3 codigos de estado. En el try puedo obtener un status code 200 en caso de que logre obtener los datos, un 404 en caso de
                        no encontrar el recurso solicitado y si se produce un error genero un error 500 y envío un mensaje para visualizar donde se produce.</p>
                    <p>7. La pagina donde se encuentra desarrollado este punto es Entidades.
                    </p>
                </section>
            </main>

            <footer>
                <p>&copy; 2023 Rodriguez Bernal Ariel</p>
            </footer>
        </div>
    );
};

export { Home };