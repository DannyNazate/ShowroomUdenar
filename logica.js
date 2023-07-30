window.addEventListener('DOMContentLoaded', function() {
    var imagenBienvenida = document.getElementById('imagen-bienvenida');
    imagenBienvenida.style.display = 'block';
    var botonCerrar = document.getElementById('boton-cerrar');
    botonCerrar.addEventListener('click', function() {
        imagenBienvenida.style.display = 'none';
        botonCerrar.style.display = 'none';
    });
});

function setDataModal(idimg, text) {
    if (idimg == "<img src='img/adminempresas.png' id='imgArquitectura'>") {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
        ${text}
    <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="img/perfil.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/ARQUITECTURA.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
          </div>  

      <div class="carousel-item" >                  
      <div class="container">
      <div class="tab1" >
                    <table class="table table-sm" id="titulo">
                        <thead id="cabeceratabla">
                            <tr>
                                <th scope="col"><h2>Plan de estudios</h2></th>
                                <th scope="col" id="iconotabla"><img src="img/programa.png" class="d-block w-100" alt="..."></th>
                            </tr>
                        </thead>
                    </table>
      </div>
      <div class="lbl-menu" >
          <label for="radio1">I</label>
          <label for="radio2">II</label>
          <label for="radio3">III</label>
          <label for="radio4">IV</label>
          <label for="radio5">V</label>
          <label for="radio6">VI</label>
          <label for="radio7">VII</label>
          <label for="radio8">VIII</label>
          <label for="radio9">IX</label>
          <label for="radio10">X</label>
          <label for="radio11">Requisitos de Grado</label>
      </div>
      
      <div class="content">         
          <input type="radio" name="radio" id="radio1" checked >
          <div class="tab1">
                    <table class="table table-sm">
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col">ASIGNATURAS</th>
                            <th scope="col">CRÉDITOS ACADÉMICOS</th>
                            <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                        </tr>
                    </thead>
                        <tbody id="cuerpotabla">
                            <tr>
                                <th scope="row">Taller de Introducción, Proyecto, Espacio, y Refugio</th>
                                    <td align="center">6</td>
                                    <td align="center">6</td>
                            </tr>
                            <tr>
                                <th scope="row">Taller de Materialización Tecnológica I</th>
                                    <td align="center">3</td>
                                    <td align="center">3</td>
                                </tr>
                            <tr>
                                <th scope="row">La Experiencia del Espacio</th>
                                    <td colspan="1" align="center">2</td>
                                    <td align="center">2</td>
                            </tr>
                            <tr>
                                <th scope="row">Taller de Ideación y Comunicación I</th>
                                    <td align="center" colspan="1">3</td>
                                    <td align="center">3</td>
                            </tr>
                            <tr>
                                <th scope="row">Asignatura Electiva Disciplinar (una de 8 opciones)</th>
                                <td colspan="1" align="center">2</td>
                                <td align="center">2</td>
                            </tr>
                        </tbody>
                    </table>
                
        </div>
          <input type="radio" name="radio" id="radio2">
          <div class="tab2">
            <table class="table table-sm">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Taller de Composición Espacial Habitable</th>
                    <td align="center">6</td>
                    <td align="center">6</td>
                </tr>
                <tr>
                    <th scope="row">Taller de Materialización Tecnológica II</th>
                    <td align="center">3</td>
                    <td align="center">3</td>
                </tr>
                <tr>
                    <th scope="row">Teoría y Crítica de la Arquitectura y el Ambiente</th>
                    <td colspan="1"align="center">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Taller de Ideación y Comunicación II</th>
                    <td align="center"colspan="1" >4</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Asignatura Electiva Disciplinar (una de 7 opciones)</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center" >2</td>
                </tr>
            </tbody>
            </table>
          </div>
          
          <input type="radio" name="radio" id="radio3">
          <div class="tab3">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                        <th scope="col">HORAS SEMANALES
                        TEORÍA/PRÁCTICA</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Taller de Proyecto Espacial Contexto Calle</th>
                        <td align="center">6</td>
                        <td align="center">6</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Materialización Tecnológica III</th>
                        <td align="center">3</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">Teoría Crítica de la Arquitectura y la Ciudad I</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Ideación y Comunicación III</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Diseño Urbano I</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Asignatura Electiva Disciplinar (una de 6 opciones)</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Portafolio I</th>
                        <td colspan="1" align="center">1</td>
                        <td align="center">1</td>
                    </tr>
                </tbody>
                </table>
          </div>
          
          <input type="radio" name="radio" id="radio4">
          <div class="tab4">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                        <th scope="col">HORAS SEMANALES
                        TEORÍA/PRÁCTICA</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Taller de Proyecto Espacial Contexto Barrio</th>
                        <td align="center">6</td>
                        <td align="center">6</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Materialización Tecnológica IV</th>
                        <td align="center">3</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">Teoría y Crítica de la Arquitectura y la Ciudad II</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Ideación y Comunicación IV</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Diseño Urbano II</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                    <th scope="row">Asignatura Electiva Disciplinar (una de 5 opciones)</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2</td>
                </tr>
                </tbody>
                </table>
          </div>
          <input type="radio" name="radio" id="radio5">
          <div class="tab5">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                    <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">HORAS SEMANALES
                    TEORÍA/PRÁCTICA</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Taller de Proyecto Sector: Vivienda/Equipamiento/Diseño Urbano (una de 3 opciones)</th>
                        <td align="center">6</td>
                        <td align="center">6</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Materialización: Urbana I/Arquitectónica I (una de 2 opciones)</th>
                        <td align="center">3</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                    <th scope="row">Forma y Espacio de la Arquitectura y la Ciudad</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2</td>
                    </tr>
                    <tr>
                    <th scope="row">Derecho a la Ciudad (Teórico-Urbano, Cursa Quinto o Séptimo)</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">Asignatura Electiva Disciplinar (una de 16 opciones)</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Interacción Social (Cursa Quinto u Octavo)</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr
                </tbody>
                </table>
          </div>
          <input type="radio" name="radio" id="radio6">
          <div class="tab6">
                <table class="table table-sm">
                    <thead id="cabeceratabla">
                        <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                        <th scope="col">HORAS SEMANALES
                        TEORÍA/PRÁCTICA</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Taller de Proyecto Periferia: Vivienda/Equipamiento/Diseño Urbano (una de 3 opciones)</th>
                            <td align="center">6</td>
                            <td align="center">6</td>
                        </tr>
                        <tr>
                            <th scope="row">Taller de Materialización: Urbana II/Arquitectónica II (una de 2 opciones)</th>
                            <td align="center">3</td>
                            <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">Arquitectura y Ciudad en Periferia</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">Ciudad Intermedia y Periferia (Teórico-Urbano. Cursa sexto u octavo)</th>
                            <td colspan="1" align="center">0</td>
                            <td align="center">0</td>
                        </tr>
                        <tr>
                            <th scope="row">Asignatura Electiva Disciplinar (una de 15 opciones)</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">Introducción a la Metodología de Investigación</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                    </tr>
                    </tbody>
                    </table>
          </div>
          <input type="radio" name="radio" id="radio7">
          <div class="tab7">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                    <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">HORAS SEMANALES
                    TEORÍA/PRÁCTICA</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Taller de Proyecto Centro con Valor Patrimonial: Vivivenda/Equipamiento/Diseño Urbano (una de 3 opciones)</th>
                        <td align="center">6</td>
                        <td align="center">6</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Materialización: Urbana III/Arquitectónica III (una de 2 opciones)</th>
                        <td align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Teoría y Crítica del Patrimonio de la Arquitectura y la Ciudad</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Derecho a la Ciudad (Teórico-Urbano. Cursa Quinto o Séptimo)</th>
                        <td align="center" colspan="1">0</td>
                        <td align="center">0</td>
                    </tr>
                    <tr>
                        <th scope="row">Asignatura Electiva Disciplinar (una de 15 opciones)</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Ética Profesional y Valores</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                </tbody>
                </table>
          </div>
          <input type="radio" name="radio" id="radio8">
          <div class="tab8">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                    <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">HORAS SEMANALES
                    TEORÍA/PRÁCTICA</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Taller de Proyecto Ciudad Intermedia: Vivienda/Equipamiento/Diseño Urbano (una de 3 opciones)</th>
                        <td align="center">6</td>
                        <td align="center">6</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Materialización: Urbana IV/Arquitectónica IV (una de 2 opciones)</th>
                        <td align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Arquitectura de la Vivienda</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Ciudad Intermedia y Periferia (Teórico-Urbano. Cursa sexto u octavo)</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">Asignatura Electiva Disciplinar (dos de 14 opciones)</th>
                        <td align="center" colspan="1">4</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Portafolio II</th>
                        <td align="center" colspan="1">1</td>
                        <td align="center">1</td>
                    </tr>
                </tbody>
                </table>
          </div>
          <input type="radio" name="radio" id="radio9">
          <div class="tab9">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                    <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">HORAS SEMANALES
                    TEORÍA/PRÁCTICA</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Trabajo de Grado I. El estudiante deberá optar por una de las siguientes opciones: Trabajo Proyectual I / Proyecto Teórico I / Intercambio / Pasantía Interna / Diplomados del Programa</th>
                        <td align="center">8</td>
                        <td align="center">8</td>
                    </tr>
                </tbody>
                </table>
          </div>
          <input type="radio" name="radio" id="radio10">
          <div class="tab10">
            <table class="table table-sm">
            <thead id="cabeceratabla">
                <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS ACADÉMICOS</th>
                <th scope="col">HORAS SEMANALES
                TEORÍA/PRÁCTICA</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Trabajo de Grado II. El estudiante deberá optar por una de las siguientes opciones: Trabajo Proyectual II / Proyecto Teórico II / Intercambio / Pasantía Interna / Diplomados del Programa</th>
                    <td align="center">8</td>
                    <td align="center">8</td>
                </tr>
            </tbody>
            </table>
          </div>
          <input type="radio" name="radio" id="radio11">
          <div class="tab11">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <th scope="row" align="left">Cumplimiento total de número de créditos del plan de estudios
                    Eficiencia en inglés (dos niveles).
                    Trabajo de grado.
                    Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</th>
                    
                    <tr>Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2</tr>
                    <tr>Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2</tr>
                    <tr>Formación Humanística (Formación ciudadana) IHS 2  Créditos 2</tr>
                    <tr>Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2</tr>
                    <tr>Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 2</tr>
                    <tr>Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 2</tr>
                    <tr>Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2</tr>
                </tbody>
                </table>
          </div>
      </div>
  </div>
      </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  `
    }


    /*####################################*/


    if (idimg == "<img src='img/left.png'>") {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
<div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-inner">

      <div class="carousel-item active">
        <img src="img/link.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="img/info1.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="img/perfil general.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
      </div>
      <div class="carousel-item">
          <embed src="docs/Plan de estudios.pdf" height="400px" type="application/pdf" class="d-block w-100" alt="...">
      </div>  

  <div class="carousel-item" >                  
  <div class="container">
  <div class="tab1" >
                <table class="table table-sm">
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col"><h2>Plan de estudios</h2></th>
                            <th scope="col" id="iconotabla"><img src="img/programa.png" class="d-block w-100" alt="..."></th>
                        </tr>
                    </thead>
                </table>
  </div>
  <div class="lbl-menu" >
      <label for="radio1">I</label>
      <label for="radio2">II</label>
      <label for="radio3">III</label>
      <label for="radio4">IV</label>
      <label for="radio5">V</label>
      <label for="radio6">VI</label>
      <label for="radio7">VII</label>
      <label for="radio8">VIII</label>
      <label for="radio9">IX</label>
      <label for="radio10">X</label>
      <label for="radio11">Requisitos de Grado</label>
  </div>
  
  <div class="content">         
      <input type="radio" name="radio" id="radio1" checked >
      <div class="tab1">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    </tr>
                </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Dibujo I</th>
                                <td align="center">3</td>
                                <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">Pintura I</th>
                                <td align="center">3</td>
                                <td align="center">3</td>
                            </tr>
                        <tr>
                            <th scope="row">Lenguaje Visual I</th>
                                <td colspan="1" align="center">2</td>
                                <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">Escultura I</th>
                                <td align="center" colspan="1">3</td>
                                <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">Fotografía Básica</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">Introducción a la Investigación I (Teoría Estética I)</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">1</td>
                        </tr>
                        <tr>
                            <th scope="row">Introducción a la Historia del Arte</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">1</td>
                        </tr>
                    </tbody>
                </table>
            
    </div>
      <input type="radio" name="radio" id="radio2">
      <div class="tab2">
        <table class="table table-sm">
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                <th scope="col">CRÉDITOS ACADÉMICOS</th>
                <th scope="col">PRE-REQUISITOS</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Dibujo II</th>
                <td align="center">3</td>
                <td align="center">3</td>
                <td align="center">Dibujo I</td>
            </tr>
            <tr>
                <th scope="row">Pintura II</th>
                <td align="center">3</td>
                <td align="center">3</td>
                <td align="center">Pintura I</td>
            </tr>
            <tr>
                <th scope="row">Escultura II</th>
                <td colspan="1"align="center">3</td>
                <td align="center">3</td>
                <td align="center">Escultura I</td>

            </tr>
            <tr>
                <th scope="row">Lenguaje Visual II</th>
                <td align="center"colspan="1" >2</td>
                <td align="center">2</td>
                <td align="center">Lenguaje Visual I</td>
            </tr>
            <tr>
                <th scope="row">Fotografía Digital</th>
                <td align="center" colspan="1">3</td>
                <td align="center">3</td>
                <td align="center">Fotografía Básica</td>
            </tr>
            <tr>
                <th scope="row">Introducción a la Investigación (Teoría Estética II)</th>
                <td align="center" colspan="1">2</td>
                <td align="center" >1</td>
                <td align="center" >Introducción a la Investigación (Teoría Estética I)</td>

            </tr>
            <tr>
                <th scope="row">Módulo Historia del Arte I</th>
                <td align="center" colspan="1">2</td>
                <td align="center" >1</td>
                <td align="center" >Introducción a la Historia del Arte</td>

            </tr>
        </tbody>
        </table>
      </div>
      
      <input type="radio" name="radio" id="radio3">
      <div class="tab3">
            <table class="table table-sm">
            <thead id="cabeceratabla">
                <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                <th scope="col">CRÉDITOS ACADÉMICOS</th>
                <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Dibujo III</th>
                    <td align="center">3</td>
                    <td align="center">3</td>
                    <td align="center">Dibujo II</td>
                    
                </tr>
                <tr>
                    <th scope="row">Pintura III</th>
                    <td align="center">3</td>
                    <td align="center">3</td>
                    <td align="center">Pintura II</td>
                </tr>
                <tr>
                    <th scope="row">Escultura III</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3</td>
                    <td align="center">Escultura II</td>
                </tr>
                <tr>
                    <th scope="row">Fotografía Experimental</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3</td>
                    <td align="center">Fotografía Digital</td>
                </tr>
                <tr>
                    <th scope="row">Arte de Acción I</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3</td>
                </tr>
                <tr>
                    <th scope="row">Artes de Investigación</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">1</td>
                    <td align="center">Introducción a la Investigación II y Teoría Estética</td>
                </tr>
                <tr>
                    <th scope="row">Historia del Arte II</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">1</td>
                    <td align="center">	Módulo Historia del Arte I</td>
                </tr>
            </tbody>
            </table>
      </div>
      <input type="radio" name="radio" id="radio4">
      <div class="tab4">
            <table class="table table-sm">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">HORAS SEMANALES
                    TEORÍA/PRÁCTICA</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Dibujo IV</th>
                    <td align="center">3</td>
                    <td align="center">3</td>
                    <td align="center">Dibujo III</td>
                </tr>
                <tr>
                    <th scope="row">Pintura IV</th>
                    <td align="center">3</td>
                    <td align="center">3</td>
                    <td>Pintura III</td>
                </tr>
                <tr>
                    <th scope="row">Escultura IV</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3</td>
                    <td>Escultura II</td>
                </tr>
                <tr>
                    <th scope="row">Video I</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2</td>
                    <td>Fotografía Experimental</td>
                </tr>
                <tr>
                    <th scope="row">Taller Experimentación de Materiales</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2</td>
                    <td>Escultura III</td>
                </tr>
                <tr>
                    <th scope="row">Artes de Acción II</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3</td>
                    <td>Artes de Acción I</td> 
                </tr>
                <tr>
                    <th scope="row">Arte de Investigación II</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">1</td>
                    <td>Arte de Investigación I</td>
                <tr>
                    <th scope="row">Historia del Arte III</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">1</td>
                    <td>Historia del Arte II</td> 
                </tr>
            </tbody>
            </table>
      </div>
      <input type="radio" name="radio" id="radio5">
      <div class="tab5">
            <table class="table table-sm">
            <thead id="cabeceratabla">
                <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                <th scope="col">CRÉDITOS ACADÉMICOS</th>
                <th scope="col">PRE-REQUISITOS</th>
                </tr>

            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Grafica I</th>
                    <td align="center">4</td>
                    <td align="center">4</td>
                    <td>Dibujo IV</td>
                </tr>
                <tr>
                    <th scope="row">Escultura V</th>
                    <td align="center">3</td>
                    <td align="center">3</td>
                    <td>Escultura IV</td>
                </tr>
                <tr>
                    <th scope="row">Video II</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3</td>
                    <td>Video I</td>
                </tr>
                <tr>
                    <th scope="row">Taller Central</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3</td>
                    <td>Taller de Acción II</td>
                </tr>
                <tr>
                    <th scope="row">Investigación y Fenomenología</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">1</td>
                    <td>Artes e Investigación II</td>
                </tr>
                <tr>
                    <th scope="row">Historia del Arte IV</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">1</td>
                    <td>Historia del Arte III</td>
                </tr>
                <tr>
                    <th scope="row">Estudios Culturales</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">1</td>
                    <td>Historia del Arte III</td>
                </tr>
                <tr>
                    <th scope="row">Arte y Lenguaje</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">1</td>
                    <td></td>
                </tr>

            </tbody>
            </table>
      </div>
      <input type="radio" name="radio" id="radio6">
      <div class="tab6">
            <table class="table table-sm">
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                        <th scope="col">PRE-REQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Taller de Proyecto Periferia: Vivienda/Equipamiento/Diseño Urbano (una de 3 opciones)</th>
                        <td align="center">6</td>
                        <td align="center">6</td>
                    </tr>
                    <tr>
                        <th scope="row">Grafica II</th>
                        <td align="center">4</td>
                        <td align="center">4</td>
                        <td align="center">Grafica I</td>

                    </tr>
                    <tr>
                        <th scope="row">Arquitectura y Ciudad en Periferia</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">3</td>
                        <td align="center">Video II</td>

                    </tr>
                    <tr>
                        <th scope="row">Taller Central II</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">3</td>
                        <td align="center">Taller Central I</td>
                    </tr>
                    <tr>
                        <th scope="row">Opciones Espaciales</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                        <td align="center">Taller Central I</td>
                    </tr>
                    <tr>
                        <th scope="row">Teoría del Arte y la Cultura</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                        <td align="center">Investigación y Fenomenología
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Sociología Arte y Contexto</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">1</td>
                        <td align="center">Estudios Culturales
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Opcional I</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">1</td>
                        <td align="center">
                        </td>
                </tr>
                </tbody>
                </table>
      </div>
      semestre 7
      <input type="radio" name="radio" id="radio7">
      <div class="tab7">
            <table class="table table-sm">
            <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                <th scope="col">CRÉDITOS ACADÉMICOS</th>
                <th scope="col">PRE-REQUISITOS</th>
            </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Taller de Proyecto Centro con Valor Patrimonial: Vivivenda/Equipamiento/Diseño Urbano (una de 3 opciones)</th>
                    <td align="center">6</td>
                    <td align="center">6</td>
                </tr>
                <tr>
                    <th scope="row">Taller de Materialización: Urbana III/Arquitectónica III (una de 2 opciones)</th>
                    <td align="center">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Teoría y Crítica del Patrimonio de la Arquitectura y la Ciudad</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Derecho a la Ciudad (Teórico-Urbano. Cursa Quinto o Séptimo)</th>
                    <td align="center" colspan="1">0</td>
                    <td align="center">0</td>
                </tr>
                <tr>
                    <th scope="row">Asignatura Electiva Disciplinar (una de 15 opciones)</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Ética Profesional y Valores</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">2</td>
                </tr>
            </tbody>
            </table>
      </div>
      <input type="radio" name="radio" id="radio8">
      <div class="tab8">
            <table class="table table-sm">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">PRE-REQUISITOS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Taller de Proyecto Ciudad Intermedia: Vivienda/Equipamiento/Diseño Urbano (una de 3 opciones)</th>
                    <td align="center">6</td>
                    <td align="center">6</td>
                </tr>
                <tr>
                    <th scope="row">Taller de Materialización: Urbana IV/Arquitectónica IV (una de 2 opciones)</th>
                    <td align="center">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Arquitectura de la Vivienda</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Ciudad Intermedia y Periferia (Teórico-Urbano. Cursa sexto u octavo)</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">3</td>
                </tr>
                <tr>
                    <th scope="row">Asignatura Electiva Disciplinar (dos de 14 opciones)</th>
                    <td align="center" colspan="1">4</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Portafolio II</th>
                    <td align="center" colspan="1">1</td>
                    <td align="center">1</td>
                </tr>
            </tbody>
            </table>
      </div>
      <input type="radio" name="radio" id="radio9">
      <div class="tab9">
            <table class="table table-sm">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">PRE-REQUISITOS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Trabajo de Grado I. El estudiante deberá optar por una de las siguientes opciones: Trabajo Proyectual I / Proyecto Teórico I / Intercambio / Pasantía Interna / Diplomados del Programa</th>
                    <td align="center">8</td>
                    <td align="center">8</td>
                </tr>
            </tbody>
            </table>
      </div>
      <input type="radio" name="radio" id="radio10">
      <div class="tab10">
        <table class="table table-sm">
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                <th scope="col">CRÉDITOS ACADÉMICOS</th>
                <th scope="col">PRE-REQUISITOS</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Trabajo de Grado II. El estudiante deberá optar por una de las siguientes opciones: Trabajo Proyectual II / Proyecto Teórico II / Intercambio / Pasantía Interna / Diplomados del Programa</th>
                <td align="center">8</td>
                <td align="center">8</td>
            </tr>
        </tbody>
        </table>
      </div>
      <input type="radio" name="radio" id="radio11">
      <div class="tab11">
            <table class="table table-sm">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <th scope="row" align="left">Cumplimiento total de número de créditos del plan de estudios
                Eficiencia en inglés (dos niveles).
                Trabajo de grado.
                Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</th>
                
                <tr>Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2</tr>
                <tr>Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2</tr>
                <tr>Formación Humanística (Formación ciudadana) IHS 2  Créditos 2</tr>
                <tr>Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2</tr>
                <tr>Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 2</tr>
                <tr>Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 2</tr>
                <tr>Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2</tr>
            </tbody>
            </table>
      </div>
  </div>
</div>
  </div>

<button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>
`
    }
}