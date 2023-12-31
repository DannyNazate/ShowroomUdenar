/*window.addEventListener('DOMContentLoaded', function() {
    var imagenBienvenida = document.getElementById('v-pills-tab');
    imagenBienvenida.style.display = 'block';
    var profile = document.querySelector('v-pills-profile');
    var tab = new bootstrap.Tab(profile)
    tab.show();
    botonCerrar.addEventListener('click', function() {
        tab.show();
    });
});*/


function Visible(idimg) {
    document.getElementById(idimg).classList.remove("text-programa-no-visible");
    document.getElementById(idimg).classList.add("text-programa-visible");
}

function noVisible(idimg) {
    document.getElementById(idimg).classList.remove("text-programa-visible");
    document.getElementById(idimg).classList.add("text-programa-no-visible");
}



function setDataModal(idimg, text) {
    if (idimg == 'imgfacartesarquitectura') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
        ${text}
    <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel" data-interval="1000">
    <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="img/plantillas/facartes/arquitectura/arquitecturageneral.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
          <img src="img/plantillas/facartes/arquitectura/arquitecturaperfilgeneral.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/plantillas/facartes/arquitectura/arquitecturaperfilocupacional.jpg" class="d-block w-100" alt="...">
          </div>
           

      <div class="carousel-item" >                  
      <div class="container">
      <div class="tab1" >
                    <table class="table table-sm" id="titulo">
                        <thead id="cabeceratabla">
                            <tr>
                                <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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

      
      <!-- SEMESTRE 1 -->
      <div class="content"> 
                            
          <input type="radio" name="radio" id="radio1" checked >
          <div class="tab1">
                    <table class="table table-sm">
                        <thead  id="titulosemestre">
                        <div scope="col">
                                    <tr>
                                       <h4>Semestre 1</h4>
                                    </tr> 
                        </div> 
                        </thead>
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
                    
                    <tr id="footer">
                        <tr>
                        <td colspan="1" ><h6>5 Materias</td>
                        <td colspan="1" ><h6>16 Créditos</td>
                    </tr> 
                
        </div>

        <!-- SEMESTRE 2 -->
          <input type="radio" name="radio" id="radio2">
          <div class="tab2">
            <table class="table table-sm">
                <thead  id="titulosemestre">
                            <div scope="col">
                                        <tr>
                                        <h4>Semestre 2</h4>
                                        </tr> 
                            </div> 
                            </thead>
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
            <tr id="footer">
                        <td colspan="1" ><h6>5 Materias</td>
                        <td colspan="1" ><h6>17 Créditos</td>
            </tr> 
          </div>
          
    <!-- SEMESTRE 3 -->
          <input type="radio" name="radio" id="radio3">
          <div class="tab3">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                <div scope="col">
                            <tr>
                            <h4>Semestre 3</h4>
                            </tr> 
                </div> 
                </thead>
    <thead id="cabeceratabla">
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
                <tr id="footer">
                    <td colspan="1" ><h6>7 Materias</td>
                    <td colspan="1" ><h6>18 Créditos</td>
                </tr> 
          </div>
          
          <!-- SEMESTRE 4 -->
          <input type="radio" name="radio" id="radio4">
          <div class="tab4">
            <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 4</h4>
                            </tr> 
                    </div> 
                </thead>
            
              <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
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
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
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
                <tr id="footer">
                    <td colspan="1" ><h6>6 Materias</td>
                    <td colspan="1" ><h6>17 Créditos</td>
                </tr> 
          </div>

          <!-- SEMESTRE 5 -->
          <input type="radio" name="radio" id="radio5">
          <div class="tab5">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 5</h4>
                        </tr> 
                </div> 
            </thead>
              <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
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
                        <td align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Forma y Espacio de la Arquitectura y la Ciudad</th>
                        <td colspan="1" align="center">1</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Derecho a la Ciudad (Teórico-Urbano, Cursa Quinto o Séptimo)</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
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
                <tr id="footer">
                    <td colspan="1" ><h6>6 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
                </tr>
          </div>

          <!-- SEMESTRE 6 -->
          <input type="radio" name="radio" id="radio6">
          <div class="tab6">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 6</h4>
                            </tr> 
                    </div> 
                </thead>
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col">ASIGNATURAS</th>
                            <th scope="col">CRÉDITOS ACADÉMICOS</th>
                            <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
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
                            <td align="center">2</td>
                            <td align="center">2</td>
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
                    <tr id="footer">
                        <td colspan="1" ><h6>5 Materias</td>
                        <td colspan="1" ><h6>14 Créditos</td>
                    </tr>
          </div>


          <!-- SEMESTRE 7 -->
          <input type="radio" name="radio" id="radio7">
          <div class="tab7">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 7</h4>
                            </tr> 
                    </div> 
                </thead>
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
                <tr id="footer">
                        <td colspan="1" ><h6>5 Materias</td>
                        <td colspan="1" ><h6>14 Créditos</td>
                </tr>
          </div>

          <!-- SEMESTRE 8 -->
          <input type="radio" name="radio" id="radio8">
          <div class="tab8">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 8</h4>
                            </tr> 
                    </div> 
                </thead>
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
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
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
                <tr id="footer">
                        <td colspan="1" ><h6>6 Materias</td>
                        <td colspan="1" ><h6>14 Créditos</td>
                </tr>
          </div>

          <!-- SEMESTRE 9 -->
          <input type="radio" name="radio" id="radio9">
          <div class="tab9">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 9</h4>
                            </tr> 
                    </div> 
                </thead>
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
                <tr id="footer">
                        <td colspan="1" ><h6>1 Materias</td>
                        <td colspan="1" ><h6>8 Créditos</td>
                </tr>
          </div>


          <!-- SEMESTRE 10 -->
          <input type="radio" name="radio" id="radio10">
          <div class="tab10">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 10</h4>
                            </tr> 
                    </div> 
            </thead>
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
            <tr id="footer">
                        <td colspan="1" ><h6>1 Materias</td>
                        <td colspan="1" ><h6>8 Créditos</td>
            </tr>
          </div>


          <!-- REQUISITOS DE GRADO -->
          <input type="radio" name="radio" id="radio11">
          <div class="tab11">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                   
                </thead>
                <tbody id="cuerpotabla">
                    <th scope="row" align="left">
                    <tr>Cumplimiento total de número de créditos del plan de estudios</tr> <br>
                    <tr>Eficiencia en inglés (dos niveles).</tr>
                    <tr>Trabajo de grado.</tr><br>
                    <ul>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</ul>
                
                    <li>Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2</li>
                    <li>Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2</li>
                    <li>Formación Humanística (Formación ciudadana) IHS 2  Créditos 2</li>
                    <li>Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2</li>
                    <li>Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 2</li>
                    <li>Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 2</li>            
                    <li>Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2</li>
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
  </div>

         
  `
    }


    /*############################################DISEÑO GRAFICO#################################################*/


    if (idimg == 'imgfacartesgrafico') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
        ${text}
    <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="img/plantillas/facartes/grafico/graficogeneral.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/plantillas/facartes/grafico/graficoperfil1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/plantillas/facartes/grafico/graficoperfil2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/plantillas/facartes/grafico/graficoperfil3.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/plantillas/facartes/grafico/graficoperfil4.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/plantillas/facartes/grafico/graficoperfilaspirante.jpg" class="d-block w-100" alt="...">
          </div> 

      <div class="carousel-item" >                  
      <div class="container">
      <div class="tab1" >
                    <table class="table table-sm" id="titulo">
                        <thead id="cabeceratabla">
                            <tr>
                                <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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

      
      <!-- SEMESTRE 1 -->
      <div class="content"> 
                            
          <input type="radio" name="radio" id="radio1" checked >
          <div class="tab1">
                    <table class="table table-sm">
                        <thead  id="titulosemestre">
                        <div scope="col">
                                    <tr>
                                       <h4>Semestre 1</h4>
                                    </tr> 
                        </div> 
                        </thead>
                    <thead id="cabeceratabla">                                               
                        <tr>
                            <th scope="col">COMPONENTES/MODULOS</th>
                            <th scope="col">CRÉDITOS</th>
                            <th scope="col">IHS</th>
                        </tr>
                    </thead>
                        <tbody id="cuerpotabla">
                            <tr>
                                <th scope="row">3651 - MI Fundamentos Semióticos 1</th>
                                    <td align="center">3</td>
                                    <td align="center">4</td>
                            </tr>
                            <tr>
                                <th scope="row">Teoría de la Comunicación</th>
                                    <td align="center">2</td>
                                    <td align="center">2</td>
                                </tr>
                            <tr>
                                <th scope="row">Historia de la Comunicación Visual</th>
                                    <td colspan="1" align="center">1</td>
                                    <td align="center">2</td>
                            </tr>
                            <tr>
                                <th scope="row">3652 - MII Medios y Técnicas Expresivas 1</th>
                                    <td align="center" colspan="1">4</td>
                                    <td align="center">4</td>
                            </tr>
                            <tr>
                                <th scope="row"> Expresión y Creatividad</th>
                                <td colspan="1" align="center">2</td>
                                <td align="center">2</td>
                            </tr>
                            <tr>
                                <th scope="row"> Medios Gráficos</th>
                                <td colspan="1" align="center">2</td>
                                <td align="center">2</td>
                            </tr>
                            <tr>
                                <th scope="row">1462 - Taller 1</th>
                                <td colspan="1" align="center">5</td>
                                <td align="center">6</td>
                            </tr>
                        </tbody>                        
                    </table>
                    
                    <tr id="footer">
                        <tr>
                        <td colspan="1" ><h6>3 Componentes</td>
                        <td colspan="1" ><h6>12 Créditos</td>
                    </tr> 
                
        </div>

        <!-- SEMESTRE 2 -->
          <input type="radio" name="radio" id="radio2">
          <div class="tab2">
            <table class="table table-sm">
                <thead  id="titulosemestre">
                            <div scope="col">
                                        <tr>
                                        <h4>Semestre 2</h4>
                                        </tr> 
                            </div> 
                            </thead>
                <thead id="cabeceratabla">
                <tr>
                            <th scope="col">COMPONENTES/MODULOS</th>
                            <th scope="col">CRÉDITOS</th>
                            <th scope="col">IHS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">3663 - MI Fundamentos Semióticos 2</th>
                    <td align="center">3</td>
                    <td align="center">5</td>
                </tr>
                <tr>
                    <th scope="row">Teoría de la Comunicación</th>
                    <td align="center">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Historia de la Comunicación Visual</th>
                    <td colspan="1"align="center">1</td>
                    <td align="center">3</td>
                </tr>
                <tr>
                    <th scope="row">3664 - MII Medios y Técnicas Expresivas 2</th>
                    <td align="center"colspan="1" >4</td>
                    <td align="center">6</td>
                </tr>
                <tr>
                    <th scope="row">Expresión y Creatividad</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center" >3</td>
                </tr>
                <tr>
                    <th scope="row">Medios Gráficos</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center" >3</td>
                </tr>
                <tr>
                    <th scope="row">1463 - Taller 2</th>
                    <td align="center" colspan="1">5</td>
                    <td align="center" >6</td>
                </tr>
            </tbody>
            </table>
            <tr id="footer">
                        <td colspan="1" ><h6>3 Componentes</td>
                        <td colspan="1" ><h6>12 Créditos</td>
            </tr> 
          </div>
          
    <!-- SEMESTRE 3 -->
          <input type="radio" name="radio" id="radio3">
          <div class="tab3">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                <div scope="col">
                            <tr>
                            <h4>Semestre 3</h4>
                            </tr> 
                </div> 
                </thead>
    <thead id="cabeceratabla">
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">COMPONENTES/MODULOS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">5070 - MI Fundamentos Semióticos 3</th>
                        <td align="center">3</td>
                        <td align="center">5</td>
                    </tr>
                    <tr>
                        <th scope="row">Teoría de la Comunicación</th>
                        <td align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row"> Historia de la Comunicación Visual</th>
                        <td colspan="1" align="center">1</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">5071 - MII Medios y Técnicas Expresivas 3</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Expresión y Creatividad</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Medios Gráficos</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">5072 - MV Nuevas Tecnologías de la Comunicación 1</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">Gráfico de Computador</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">5074 - Taller 3</th>
                        <td colspan="1" align="center">5</td>
                        <td align="center">6</td>
                    </tr>
                </tbody>
                </table>
                <tr id="footer">
                    <td colspan="1" ><h6>4 Componentes</td>
                    <td colspan="1" ><h6>14 Créditos</td>
                </tr> 
          </div>
          
          <!-- SEMESTRE 4 -->
          <input type="radio" name="radio" id="radio4">
          <div class="tab4">
            <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 4</h4>
                            </tr> 
                    </div> 
                </thead>
            
              <thead id="cabeceratabla">
                <tr>
                    <th scope="col">COMPONENTES/MODULOS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                </tr>
              </thead>
                <tbody id="cuerpotabla">
                <tr>
                            <th scope="row">5075 - MI Fundamentos Semióticos 4</th>
                            <td align="center">3</td>
                            <td align="center">5</td>
                        </tr>
                        <tr>
                            <th scope="row">Teoría de la Comunicación</th>
                            <td align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">Historia de la Comunicación Visual</th>
                            <td colspan="1" align="center">1</td>
                            <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">5076 - MII Medios y Técnicas Expresivas 4</th>
                            <td colspan="1" align="center">4</td>
                            <td align="center">6</td>
                        </tr>
                        <tr>
                            <th scope="row">Expresión y Creatividad</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">Medios Gráficos</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">3</td>
                        </tr> 
                        <tr>
                            <th scope="row">5079 - MV Nuevas Tecnologías de la Comunicación 2</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">4</td>
                        </tr> 
                        <tr>
                            <th scope="row"> Gráfico de Computador</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">4</td>
                        </tr> 
                        <tr>
                            <th scope="row">5078 - MIV Dialéctica de la Investigación 1</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr> 
                        <tr>
                            <th scope="row">Problematización y Conocimiento</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr> 
                        <tr>
                            <th scope="row">5081 - Taller 4</th>
                            <td colspan="1" align="center">5</td>
                            <td align="center">6</td>
                        </tr>                        
                </tbody>
                </table>
                <tr id="footer">
                    <td colspan="1" ><h6>5 Componentes</td>
                    <td colspan="1" ><h6>16 Créditos</td>
                </tr> 
          </div>

          <!-- SEMESTRE 5 -->
          <input type="radio" name="radio" id="radio5">
          <div class="tab5">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 5</h4>
                        </tr> 
                </div> 
            </thead>
              <thead id="cabeceratabla">
                <tr>
                    <th scope="col">COMPONENTES/MODULOS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                </tr> 
              </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">5082 - MI Fundamentos Semióticos 5</th>
                        <td align="center">3</td>
                        <td align="center">5</td>
                    </tr>
                    <tr>
                        <th scope="row">Teoría de la Comunicación</th>
                        <td align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row"> Historia de la Comunicación Visual</th>
                        <td colspan="1" align="center">1</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">5083 - MII Medios y Técnicas Expresivas 5</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Expresión y Creatividad</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Medios Gráficos</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr
                    <tr>
                        <th scope="row">5086 - MV Nuevas Tecnologías de la Comunicación 3</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">3</td>
                    </tr
                    <tr>
                        <th scope="row">Computadores para Multimedia</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">3</td>
                    </tr
                    <tr>
                        <th scope="row">5085 - MIV Dialéctica de l Investigación 2</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr
                    <tr>
                        <th scope="row">Introducción a la Investigación</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">5088 - Taller 5</th>
                        <td colspan="1" align="center">5</td>
                        <td align="center">6</td>
                </tr
                </tbody>
                </table>
                <tr id="footer">
                    <td colspan="1" ><h6>5 Componentes</td>
                    <td colspan="1" ><h6>16 Créditos</td>
                </tr>
          </div>

          <!-- SEMESTRE 6 FALTAN -->
          <input type="radio" name="radio" id="radio6">
          <div class="tab6">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 6</h4>
                            </tr> 
                    </div> 
                </thead>
                    <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">COMPONENTES/MODULOS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                    </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">5089 - MI Fundamentos Semióticos 6</th>
                            <td align="center">3</td>
                            <td align="center">5</td>
                        </tr>
                        <tr>
                            <th scope="row">Arqueología de la Imagen</th>
                            <td align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row"> Crítica de la Imagen</th>
                            <td colspan="1" align="center">1</td>
                            <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">5090 - MII Medios y Técnicas Expresivas 6</th>
                            <td colspan="1" align="center">4</td>
                            <td align="center">4</td>
                        </tr>
                        <tr>
                            <th scope="row">Imagen como Texto</th>
                            <td colspan="1" align="center">4</td>
                            <td align="center">4</td>
                        </tr>
                        <tr>
                            <th scope="row">5093 - MV Nuevas Tecnologías de la Comunicación 4</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">Integración de Medios</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">5094 - MVI Entorno Social y Ecológico 1</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">Dimensión Ambiental</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">5092 - MIV Dialéctica de la Investigación 3</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">Procesos Investigativos</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">5095 - Taller 6</th>
                            <td colspan="1" align="center">5</td>
                            <td align="center">6</td>
                        </tr>
                    </tbody>
                    </table>
                    <tr id="footer">
                        <td colspan="1" ><h6>6 Componentes</td>
                        <td colspan="1" ><h6>18 Créditos</td>
                    </tr>
          </div>


          <!-- SEMESTRE 7 -->
          <input type="radio" name="radio" id="radio7">
          <div class="tab7">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 7</h4>
                            </tr> 
                    </div> 
                </thead>
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">COMPONENTES/MODULOS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">5096 - MI Fundamentos Semióticos 7</th>
                        <td align="center">2</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">Fenomenología de la Imagen</th>
                        <td align="center">2</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">5077 - MIII Cualificación Ética y Profesional 1</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Ética de la Comunicación Visual</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">5097 - MII Medios y Técnicas Expresivas 7</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Imagen como Texto</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">5100 - MV Nuevas Tecnologías de la Comunicación 5</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row"> Integración de Medios</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">5101 - MVI Entorno Social y Ecológico 2</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Problemas Regionales</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">5099 - MVI Dialéctica de la Investigación 4</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Metodología y Procedimientos</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">5102 - Taller 7</th>
                        <td align="center" colspan="1">5</td>
                        <td align="center">6</td>
                    </tr>
                </tbody>
                </table>
                <tr id="footer">
                        <td colspan="1" ><h6>7 Componentes</td>
                        <td colspan="1" ><h6>18 Créditos</td>
                </tr>
          </div>

          <!-- SEMESTRE 8 -->
          <input type="radio" name="radio" id="radio8">
          <div class="tab8">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 8</h4>
                            </tr> 
                    </div> 
                </thead>
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">COMPONENTES/MODULOS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">5103 - MI Fundamentos Semióticos 8</th>
                        <td align="center">3</td>
                        <td align="center">5</td>
                    </tr>
                    <tr>
                        <th scope="row">Hermenéutica de la Imagen</th>
                        <td align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Poética de la Imagen</th>
                        <td align="center" colspan="1">1</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">5084 - MIII Cualificación Ética y Empresarial 2</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">  Desarrollo Empresarial</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">5106 - MV Nuevas Tecnologías de la Comunicación 6</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">Producción de Video</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">3</td>
                    </tr>
                    <tr>
                        <th scope="row">8043 - MVI Entorno Social y Ecológico 3</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Problemas Contemporáneos</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">5105 - MIV Dialéctica de la Investigación</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">  Investigación y Comunicación Visual</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">5108 - Taller 8</th>
                        <td align="center" colspan="1">5</td>
                        <td align="center">6</td>
                    </tr>
                </tbody>
                </table>
                <tr id="footer">
                        <td colspan="1" ><h6>6 Componentes</td>
                        <td colspan="1" ><h6>16 Créditos</td>
                </tr>
          </div>

          <!-- SEMESTRE 9 -->
          <input type="radio" name="radio" id="radio9">
          <div class="tab9">
                <table class="table table-sm">
                <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 9</h4>
                            </tr> 
                    </div> 
                </thead>
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col">COMPONENTES/MODULOS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">5109 - MIV Dialéctica de la Investigación</th>
                        <td align="center">3</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Seminario Trabajo de Grado</th>
                        <td align="center">3</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">5110 - Taller Servicio Social de Diseño</th>
                        <td align="center">9</td>
                        <td align="center">24</td>
                    </tr>
                </tbody>
                </table>
                <tr id="footer">
                        <td colspan="1" ><h6>2 Componentes</td>
                        <td colspan="1" ><h6>12 Créditos</td>
                </tr>
          </div>


          <!-- SEMESTRE 10 -->
          <input type="radio" name="radio" id="radio10">
          <div class="tab10">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                    <div scope="col">
                            <tr>
                                <h4>Semestre 10</h4>
                            </tr> 
                    </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">COMPONENTES/MODULOS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">5111 - MIV Dialéctica de la Investigación</th>
                    <td align="center">5</td>
                    <td align="center">6</td>
                </tr>
                <tr>
                    <th scope="row">Seminario Trabajo de Grado</th>
                    <td align="center">5</td>
                    <td align="center">6</td>
                </tr>
                <tr>
                    <th scope="row">5112 - Taller 10</th>
                    <td align="center">5</td>
                    <td align="center">6</td>
                </tr>
            </tbody>
            </table>
            <tr id="footer">
                        <td colspan="1" ><h6>2 Componentes</td>
                        <td colspan="1" ><h6>10 Créditos</td>
            </tr>
          </div>


          <!-- REQUISITOS DE GRADO -->
          <input type="radio" name="radio" id="radio11">
          <div class="tab11">
                <table class="table table-sm">
                <thead id="cabeceratabla">
                   
                </thead>
                <tbody id="cuerpotabla">
                    <th scope="row" align="left">
                    <li>Cumplimiento total de número de créditos del plan de estudios</li>
                    <li>Eficiencia en inglés (dos niveles).</li>
                    <li>Trabajo de grado.</li>
                    <ul>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</ul>
                
                    <li>Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2</li>
                    <li>Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2</li>
                    <li>Formación Humanística (Formación ciudadana) IHS 2  Créditos 2</li>
                    <li>Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2</li>
                    <li>Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 2</li>
                    <li>Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 2</li>            
                    <li>Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2</li>
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
  </div>
  `
    }
    /*############################################LICENCIATURA EN MUSICA#################################################*/


    if (idimg == 'imgfacartesmusica') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
<div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-inner">

        <div class="carousel-item active">
        <img src="img/plantillas/facartes/musica/musicageneral.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="img/plantillas/facartes/musica/musicaperfilprofesional.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="img/plantillas/facartes/musica/musicaperfilciudadano.jpg" class="d-block w-100" alt="...">
        </div>

  <div class="carousel-item" >                  
  <div class="container">
  <div class="tab1" >
                <table class="table table-sm" id="titulo">
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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

  
  <!-- SEMESTRE 1 -->
  <div class="content"> 
                        
      <input type="radio" name="radio" id="radio1" checked >
      <div class="tab1">
                <table class="table table-sm">
                    <thead  id="titulosemestre">
                    <div scope="col">
                                <tr>
                                   <h4>Semestre 1</h4>
                                </tr> 
                    </div> 
                    </thead>
                <thead id="cabeceratabla">                                               
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                    </tr>
                </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Estructuras de la Música I (Lectoescritura Musical y Entrenamiento Auditivo I)</th>
                                <td align="center">4</td>
                                <td align="center">6</td>
                        </tr>
                        <tr>
                            <th scope="row">Apreciación de la Música</th>
                                <td align="center">1</td>
                                <td align="center">2</td>
                            </tr>
                        <tr>
                            <th scope="row">Apreciación Artística</th>
                                <td colspan="1" align="center">1</td>
                                <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">Práctica musical conjunta I : Prebanda, Conjunto ( Cuerdas Pulsadas, Cuerdas Frotadas, Formato de Música Tradicional), en coherencia con su instrumento principal</th>
                                <td align="center" colspan="1">2</td>
                                <td align="center">4</td>
                        </tr>
                        <tr>
                            <th scope="row">Piano Complementario I (Laboratorio de Didáctica)</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">1</td>
                        </tr>
                        <tr>
                            <th scope="row">Taller vocal I (Taller de Exploración Pedagógica)</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">Instrumento Principal I</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">1</td>
                        </tr>
                    </tbody>                        
                </table>
                
                <tr id="footer">
                    <tr>
                    <td colspan="1" ><h6>7 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
                </tr> 
            
    </div>

    <!-- SEMESTRE 2 -->
      <input type="radio" name="radio" id="radio2">
      <div class="tab2">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                        <div scope="col">
                                    <tr>
                                    <h4>Semestre 2</h4>
                                    </tr> 
                        </div> 
                        </thead>
            <thead id="cabeceratabla">
            <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Estructuras de la Música II (Lectoescritura Musical y Entrenamiento Auditivo II)</th>
                <td align="center">4</td>
                <td align="center">6</td>
            </tr>
            <tr>
                <th scope="row">Historia de la Música I</th>
                <td align="center">2</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Piano Complementario II (Laboratorio de Didáctica)</th>
                <td colspan="1"align="center">3</td>
                <td align="center">1</td>
            </tr>
            <tr>
                <th scope="row">Práctica musical conjunta II: Prebanda, Conjunto (Cuerdas Pulsadas, Cuerdas Frotadas, Formato de Música Tradicional), en coherencia con su instrumento principal</th>
                <td align="center"colspan="1" >2</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Taller vocal II (Taller de Exploración Pedagógica)</th>
                <td align="center" colspan="1">2</td>
                <td align="center" >2</td>
            </tr>
            <tr>
                <th scope="row">Instrumento Principal II</th>
                <td align="center" colspan="1">3</td>
                <td align="center" >1</td>
            </tr>
        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>6 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
        </tr> 
      </div>
      
<!-- SEMESTRE 3 -->
      <input type="radio" name="radio" id="radio3">
      <div class="tab3">
            <table class="table table-sm">
            <thead  id="titulosemestre">
            <div scope="col">
                        <tr>
                        <h4>Semestre 3</h4>
                        </tr> 
            </div> 
            </thead>
<thead id="cabeceratabla">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Estructuras de la Música III (Lectoescritura Musical y Entrenamiento Auditivo III)</th>
                    <td align="center">3</td>
                    <td align="center">6</td>
                </tr>
                <tr>
                    <th scope="row">Historia de la Música II</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Piano Complementario III (Laboratorio de Didáctica)</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">1</td>
                </tr>
                <tr>
                    <th scope="row">Práctica musical conjunta III: Prebanda, Coro, Conjunto (Cuerdas Pulsadas, Cuerdas Frotadas, Formato de Música Tradicional), en coherencia con su instrumento principal</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Instrumento Principal III</th>
                    <td colspan="1" align="center">4</td>
                    <td align="center">1</td>
                </tr>
                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>15 Créditos</td>
            </tr> 
      </div>
      
      <!-- SEMESTRE 4 -->
      <input type="radio" name="radio" id="radio4">
      <div class="tab4">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 4</h4>
                        </tr> 
                </div> 
            </thead>
        
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
            </tr>
          </thead>
            <tbody id="cuerpotabla">
            <tr>
                        <th scope="row">Estructuras de la Música IV (Lectoescritura Musical y Entrenamiento Auditivo IV)</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                    </tr>
                    <tr>
                        <th scope="row">Historia de la Música III</th>
                        <td align="center">2</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Piano Complementario IV (Laboratorio de Didáctica)</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">1</td>
                    </tr>
                    <tr>
                        <th scope="row">Práctica musical conjunta IV: Prebanda, Coro, Conjunto (Cuerdas Pulsadas, Cuerdas Frotadas, Formato de Música Tradicional), en coherencia con su instrumento principal</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Informática Musical I</th>
                        <td colspan="1" align="center">1</td>
                        <td align="center">1</td>
                    </tr>
                    <tr>
                        <th scope="row">Instrumento Principal IV</th>
                        <td colspan="1" align="center">5</td>
                        <td align="center">1</td>
                    </tr> 
                                           
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>6 Materias</td>
                <td colspan="1" ><h6>16 Créditos</td>
            </tr> 
      </div>

      <!-- SEMESTRE 5 -->
      <input type="radio" name="radio" id="radio5">
      <div class="tab5">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 5</h4>
                    </tr> 
            </div> 
        </thead>
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
            </tr> 
          </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Estructuras de la Música V (Contrapunto y Armonía I)</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Música Contemporánea I</th>
                    <td align="center">2</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row"> Informática Musical II</th>
                    <td colspan="1" align="center">1</td>
                    <td align="center">1</td>
                </tr>
                <tr>
                    <th scope="row">Diseño Didácticos de la Música I</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Piano Complementario V (Laboratorio de Didáctica)</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">1</td>
                </tr>
                <tr>
                    <th scope="row">Práctica musical conjunta V: Banda, Coro, Conjunto (Cuerdas Pulsadas, Cuerdas Frotadas, Formato de Música Tradicional), en coherencia con su instrumento principal</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4</td>
                </tr
                <tr>
                    <th scope="row">Instrumento Principal V</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">1</td>
                </tr
                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>7 Materias</td>
                <td colspan="1" ><h6>16 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 6 -->
      <input type="radio" name="radio" id="radio6">
      <div class="tab6">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 6</h4>
                        </tr> 
                </div> 
            </thead>
                <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Estructuras de la Música VI (Contrapunto y Armonía II)</th>
                        <td align="center">3</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Diseños Didácticos de la Música II</th>
                        <td align="center">2</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row"> Música Contemporánea II</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Piano Complementario VI (Laboratorio de Didáctica)</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">1</td>
                    </tr>
                    <tr>
                        <th scope="row">Práctica musical conjunta VI: Banda, Coro, Conjunto (Cuerdas Pulsadas, Cuerdas Frotadas, Formato de Música Tradicional), en coherencia con su instrumento principal</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Taller de Investigación I (Métodos Cuánticos)</th>
                        <td colspan="1" align="center">1</td>
                        <td align="center">2</td>
                    </tr>
                    <tr>
                        <th scope="row">Instrumento Principal VI</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">1</td>
                    </tr>
                </tbody>
                </table>
                <tr id="footer">
                    <td colspan="1" ><h6>7 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
                </tr>
      </div>


      <!-- SEMESTRE 7 -->
      <input type="radio" name="radio" id="radio7">
      <div class="tab7">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 7</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Estructuras de la Música VII (Contrapunto y Armonía III)</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Práctica musical conjunta VII: Banda, Coro, Conjunto (Cuerdas Pulsadas, Cuerdas Frotadas, Formato de Música Tradicional), en coherencia con su instrumento principal</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Taller de Investigación II (Métodos Cualitativos)</th>
                    <td align="center" colspan="1">1</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Gestión de Proyectos Pedagógicos y Educativos I</th>
                    <td align="center" colspan="1">1</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Educación Musical Temprana</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Currículo y Plan de Estudios</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Seminario de Modelos Pedagógicos</th>
                    <td align="center" colspan="1">1</td>
                    <td align="center">1</td>
                </tr>
                <tr>
                    <th scope="row">Instrumento Principal VII</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">1</td>
                </tr>
               
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>8 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 8 -->
      <input type="radio" name="radio" id="radio8">
      <div class="tab8">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 8</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Estructuras de la Música VIII (Análisis y Formas)</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Práctica musical conjunta VIII: Banda, Coro, Conjunto (Cuerdas Pulsadas, Cuerdas Frotadas, Formato de Música Tradicional), en coherencia con su instrumento principal</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Taller de Investigación III (Etnografía, IAP, Teoría Fundamentada)</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Gestión de Proyectos Pedagógicos y Educativos II</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Educación Musical para los Ciclos de Básica y Media</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Música Tradicional</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">3</td>
                </tr>
                <tr>
                    <th scope="row">Instrumento Principal VIII</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">1</td>
                </tr>
                
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>7 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 9 -->
      <input type="radio" name="radio" id="radio9">
      <div class="tab9">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 9</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Estructuras de la Música IX (Composición y Arreglos I)</th>
                    <td align="center">4</td>
                    <td align="center">3</td>
                </tr>
                <tr>
                    <th scope="row">Proyecto de Grado I</th>
                    <td align="center">2</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Práctica Docente I</th>
                    <td align="center">1</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Técnicas de Dirección I</th>
                    <td align="center">2</td>
                    <td align="center">3</td>
                </tr>
                <tr>
                    <th scope="row">Informática Musical III</th>
                    <td align="center">1</td>
                    <td align="center">2</td>
                </tr>
                <tr>
                <th scope="row">Instrumento Principal IX</th>
                <td align="center">5</td>
                <td align="center">1</td>
            </tr>
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>6 Materias</td>
                    <td colspan="1" ><h6>14 Créditos</td>
            </tr>
      </div>


      <!-- SEMESTRE 10 -->
      <input type="radio" name="radio" id="radio10">
      <div class="tab10">
        <table class="table table-sm">
        <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 10</h4>
                        </tr> 
                </div> 
        </thead>
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Estructuras de la Música X (Composición y Arreglos II)</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Proyecto de Grado II</th>
                <td align="center">2</td>
                <td align="center">1</td>
            </tr>
            <tr>
                <th scope="row">Práctica Docente II</th>
                <td align="center">2</td>
                <td align="center">2</td>
            </tr>
            <tr>
                <th scope="row">Técnicas de Dirección II</th>
                <td align="center">2</td>
                <td align="center">3</td>
            </tr>
            <tr>
                <th scope="row">Informática Musical IV</th>
                <td align="center">1</td>
                <td align="center">1</td>
            </tr>
            <tr>
                <th scope="row">Epistemología de la Pedagogía</th>
                <td align="center">2</td>
                <td align="center">2</td>
            </tr>
            <tr>
                <th scope="row">Instrumento Principal X</th>
                <td align="center">4</td>
                <td align="center">1</td>
            </tr>
        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>7 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
        </tr>
      </div>


      <!-- REQUISITOS DE GRADO -->
      <input type="radio" name="radio" id="radio11">
      <div class="tab11">
            <table class="table table-sm">
            <thead id="cabeceratabla">
               
            </thead>
            <tbody id="cuerpotabla">
                <th scope="row" align="left">
                <ul>El estudiante realizara un trabajo final de grado, previamente escogida la modalidad de las cuatro que se ofrecen en el programa las cuales son:</ul>
                
            
                <li>1. Recital Creativo</li>
                <li>2. Recital de instrumento principal</li>
                <li>3. Monografía</li>
                <li>4. Pasantía</li>
                <li>Para obtener el título profesional, el estudiante debe certificar un segundo idioma en nivel B1 de acuerdo al Marco Común Europeo de Referencia (MCER)</li>
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
</div>
`
    }

    /*############################################ ADMINISTRACION DE EMPRESAS #################################################*/


    if (idimg == 'imgfaceadministracionempresas') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
${text}
<div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-inner">

  <div class="carousel-item active">
        <img src="img/plantillas/facea/administraciondeempresas/adminempresasgeneral.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
        <img src="img/plantillas/facea/administraciondeempresas/adminempresasperfilprofesional.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="img/plantillas/facea/administraciondeempresas/adminempresasperfilhumanistico.jpg" class="d-block w-100" alt="...">
  </div>
  <div class="carousel-item">
    <img src="img/plantillas/facea/administraciondeempresas/adminempresasperfilocupacional.jpg" class="d-block w-100" alt="...">
  </div>
   

<div class="carousel-item" >                  
<div class="container">
<div class="tab1" >
            <table class="table table-sm" id="titulo">
                <thead id="cabeceratabla">
                    <tr>
                        <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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


<!-- SEMESTRE 1 -->
<div class="content"> 
                    
  <input type="radio" name="radio" id="radio1" checked >
  <div class="tab1">
            <table class="table table-sm">
                <thead  id="titulosemestre">
                <div scope="col">
                            <tr>
                               <h4>Semestre 1</h4>
                            </tr> 
                </div> 
                </thead>
            <thead id="cabeceratabla">                                               
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                </tr>
            </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Administración I</th>
                            <td align="center">3</td>
                            <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Contabilidad General</th>
                            <td align="center">3</td>
                            <td align="center">4</td>
                        </tr>
                    <tr>
                        <th scope="row">Inglés I</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Matemáticas I</th>
                            <td align="center" colspan="1">3</td>
                            <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Introducción a la Economía</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">4</td>
                    </tr>
                    <tr>
                        <th scope="row">Emprendimiento y Empresarismo I</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">4</td>
                    </tr>
                    
                </tbody>                        
            </table>
            
            <tr id="footer">
                <tr>
                <td colspan="1" ><h6>6 Materias</td>
                <td colspan="1" ><h6>16 Créditos</td>
            </tr> 
        
</div>

<!-- SEMESTRE 2 -->
  <input type="radio" name="radio" id="radio2">
  <div class="tab2">
    <table class="table table-sm">
        <thead  id="titulosemestre">
                    <div scope="col">
                                <tr>
                                <h4>Semestre 2</h4>
                                </tr> 
                    </div> 
                    </thead>
        <thead id="cabeceratabla">
        <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
        </tr>
    </thead>
    <tbody id="cuerpotabla">
        <tr>
            <th scope="row">Administración II</th>
            <td align="center">3</td>
            <td align="center">4</td>
        </tr>
        <tr>
            <th scope="row">Contabilidad de Costos</th>
            <td align="center">3</td>
            <td align="center">4</td>
        </tr>
        <tr>
            <th scope="row">Inglés II</th>
            <td colspan="1"align="center">2</td>
            <td align="center">4</td>
        </tr>
        <tr>
            <th scope="row">Matemáticas II</th>
            <td align="center"colspan="1" >3</td>
            <td align="center">4</td>
        </tr>
        <tr>
            <th scope="row">Informática</th>
            <td align="center" colspan="1">2</td>
            <td align="center" >4</td>
        </tr>
        <tr>
            <th scope="row">Emprendimiento y Empresarismo II</th>
            <td align="center" colspan="1">2</td>
            <td align="center" >4</td>
        </tr>
    </tbody>
    </table>
    <tr id="footer">
                <td colspan="1" ><h6>6 Materias</td>
                <td colspan="1" ><h6>15 Créditos</td>
    </tr> 
  </div>
  
<!-- SEMESTRE 3 -->
  <input type="radio" name="radio" id="radio3">
  <div class="tab3">
        <table class="table table-sm">
        <thead  id="titulosemestre">
        <div scope="col">
                    <tr>
                    <h4>Semestre 3</h4>
                    </tr> 
        </div> 
        </thead>
<thead id="cabeceratabla">
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Teorías Generales de la Administración</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Microeconomía I</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Algebra de Matrices y Programación Lineal</th>
                <td colspan="1" align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Presupuesto y Auditoría</th>
                <td colspan="1" align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Estadística I</th>
                <td colspan="1" align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Inglés III</th>
                <td colspan="1" align="center">2</td>
                <td align="center">4</td>
            </tr>
            
        </tbody>
        </table>
        <tr id="footer">
            <td colspan="1" ><h6>7 Materias</td>
            <td colspan="1" ><h6>17 Créditos</td>
        </tr> 
  </div>
  
  <!-- SEMESTRE 4 -->
  <input type="radio" name="radio" id="radio4">
  <div class="tab4">
    <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 4</h4>
                    </tr> 
            </div> 
        </thead>
    
      <thead id="cabeceratabla">
        <tr>
            <th scope="col">ASIGNATURAS</th>
            <th scope="col">CRÉDITOS</th>
            <th scope="col">IHS</th>
        </tr>
      </thead>
        <tbody id="cuerpotabla">
        <tr>
                    <th scope="row">Teorías Gerenciales Contemporáneas</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Estadística II</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Microeconomía II</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Inglés IV</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Sociología de las Organizaciones</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Matemáticas Financieras</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4</td>
                </tr> 
                                       
        </tbody>
        </table>
        <tr id="footer">
            <td colspan="1" ><h6>6 Materias</td>
            <td colspan="1" ><h6>16 Créditos</td>
        </tr> 
  </div>

  <!-- SEMESTRE 5 -->
  <input type="radio" name="radio" id="radio5">
  <div class="tab5">
    <table class="table table-sm">
    <thead  id="titulosemestre">
        <div scope="col">
                <tr>
                    <h4>Semestre 5</h4>
                </tr> 
        </div> 
    </thead>
      <thead id="cabeceratabla">
        <tr>
            <th scope="col">ASIGNATURAS</th>
            <th scope="col">CRÉDITOS</th>
            <th scope="col">IHS</th>
        </tr> 
      </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Gerencia del Cambio</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Dinámica Empresarial Regional</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row"> Macroeconomía</th>
                <td colspan="1" align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Inglés V</th>
                <td colspan="1" align="center">2</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Administración de Operaciones</th>
                <td colspan="1" align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Psicología Organizacional</th>
                <td colspan="1" align="center">2</td>
                <td align="center">4</td>
            </tr>
            
        </tbody>
        </table>
        <tr id="footer">
            <td colspan="1" ><h6>6 Materias</td>
            <td colspan="1" ><h6>16 Créditos</td>
        </tr>
  </div>

  <!-- SEMESTRE 6 -->
  <input type="radio" name="radio" id="radio6">
  <div class="tab6">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 6</h4>
                    </tr> 
            </div> 
        </thead>
            <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
            </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Laboratorio Empresarial I</th>
                    <td align="center">2</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Gerencia de Mercadeo I</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row"> Economía Colombiana</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Inglés VI</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Gerencia Financiera I</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Investigación I</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4</td>
                </tr>
                <tr>
                    <th scope="row">Electiva I</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">3</td>
                </tr>
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>7 Materias</td>
                <td colspan="1" ><h6>18 Créditos</td>
            </tr>
  </div>


  <!-- SEMESTRE 7 -->
  <input type="radio" name="radio" id="radio7">
  <div class="tab7">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 7</h4>
                    </tr> 
            </div> 
        </thead>
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Laboratorio Empresarial II</th>
                <td align="center">2</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Gerencia de Mercadeo II</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Gerencia Financiera II</th>
                <td align="center" colspan="1">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Investigación II</th>
                <td align="center" colspan="1">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Plan de Negocios</th>
                <td align="center" colspan="1">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Electiva II</th>
                <td align="center" colspan="1">2</td>
                <td align="center">3</td>
            </tr>           
        </tbody>
        </table>
        <tr id="footer">
                <td colspan="1" ><h6>6 Materias</td>
                <td colspan="1" ><h6>16 Créditos</td>
        </tr>
  </div>

  <!-- SEMESTRE 8 -->
  <input type="radio" name="radio" id="radio8">
  <div class="tab8">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 8</h4>
                    </tr> 
            </div> 
        </thead>
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Gerencia del Talento Humano I</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Laboratorio Empresarial III</th>
                <td align="center">2</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Planeación Estratégica y Prospectiva</th>
                <td align="center" colspan="1">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Gerencia de la Operaciones y la Productividad I</th>
                <td align="center" colspan="1">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Investigación III</th>
                <td align="center" colspan="1">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Electiva III</th>
                <td align="center" colspan="1">2</td>
                <td align="center">3</td>
            </tr>
            
        </tbody>
        </table>
        <tr id="footer">
                <td colspan="1" ><h6>6 Materias</td>
                <td colspan="1" ><h6>16 Créditos</td>
        </tr>
  </div>

  <!-- SEMESTRE 9 -->
  <input type="radio" name="radio" id="radio9">
  <div class="tab9">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 9</h4>
                    </tr> 
            </div> 
        </thead>
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Gerencia del Talento Humano II</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Gerencia de la Operaciones y la Productividad II</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Legislación Laboral</th>
                <td align="center">2</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Legislación Comercial y Tributaria</th>
                <td align="center">2</td>
                <td align="center">4</td>
            </tr>
            <tr>
                <th scope="row">Negocios Internacionales</th>
                <td align="center">3</td>
                <td align="center">4</td>
            </tr>
            <tr>
            <th scope="row">Electiva IV</th>
            <td align="center">2</td>
            <td align="center">3</td>
        </tr>
        </tbody>
        </table>
        <tr id="footer">
                <td colspan="1" ><h6>6 Materias</td>
                <td colspan="1" ><h6>15 Créditos</td>
        </tr>
  </div>


  <!-- SEMESTRE 10 -->
  <input type="radio" name="radio" id="radio10">
  <div class="tab10">
    <table class="table table-sm">
    <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 10</h4>
                    </tr> 
            </div> 
    </thead>
    <thead id="cabeceratabla">
        <tr>
            <th scope="col">ASIGNATURAS</th>
            <th scope="col">CRÉDITOS</th>
            <th scope="col">IHS</th>
        </tr>
    </thead>
    <tbody id="cuerpotabla">
        <tr>
            <th scope="row">Práctica Empresarial</th>
            <td align="center">10</td>
            <td align="center">40</td>
        </tr>
    </tbody>
    </table>
    <tr id="footer">
                <td colspan="1" ><h6>1 Materias</td>
                <td colspan="1" ><h6>10 Créditos</td>
    </tr>
  </div>


  <!-- REQUISITOS DE GRADO -->
  <input type="radio" name="radio" id="radio11">
  <div class="tab11">
        <table class="table table-sm">
        <thead id="cabeceratabla">
           
        </thead>
        <tbody id="cuerpotabla">
            <th scope="row" align="left">
            <li>Cumplimiento total de Número de créditos del plan de estudios</li>        
            <li>Presentación de cualquiera de las modalidades de grado aprobadas por la Facultad</li>
            <ul>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</ul>
            <li>Formación Humanística (Formación en humanismo)  2 Créditos</li>
            <li>Formación Humanística (Formación en cultura artística y cultura física) 2 Créditos</li>
            <li>Formación Humanística (Formación ciudadana) 2 Créditos</li>
            <li>Formación Humanística (Formación en problemáticas de contexto) 2 Créditos</li>
            <li>Competencias básicas (Lectura y producción de textos) 2 Créditos</li>
            <li>Competencias básicas (Lenguaje y herramientas informáticas) 2 Créditos</li>
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
</div>
`
    }

    /*############################################ COMERCIO INTERNACIONAL #################################################*/


    if (idimg == 'imgfaceacomercio') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
${text}
<div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-inner">

<div class="carousel-item active">
    <img src="img/plantillas/facea/comerciointernacional/comercioninternacionalgeneral.jpg" class="d-block w-100" alt="...">
</div>
<div class="carousel-item">
    <img src="img/plantillas/facea/comerciointernacional/comerciointernacionalperfilprofesional.jpg" class="d-block w-100" alt="...">
</div>
<div class="carousel-item">
    <img src="img/plantillas/facea/comerciointernacional/comerciointernacionalperfilocupacional.jpg" class="d-block w-100" alt="...">
</div>


<div class="carousel-item" >                  
<div class="container">
<div class="tab1" >
        <table class="table table-sm" id="titulo">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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


<!-- SEMESTRE 1 -->
<div class="content"> 
                
<input type="radio" name="radio" id="radio1" checked >
<div class="tab1">
        <table class="table table-sm">
            <thead  id="titulosemestre">
            <div scope="col">
                        <tr>
                           <h4>Semestre 1</h4>
                        </tr> 
            </div> 
            </thead>
        <thead id="cabeceratabla">                                               
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
            </tr>
        </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Introducción a la Economía</th>
                        <td align="center">3</td>
                </tr>
                <tr>
                    <th scope="row">Cálculo Diferencial e Integral</th>
                        <td align="center">3</td>
                    </tr>
                <tr>
                    <th scope="row">Contabilidad General</th>
                        <td colspan="1" align="center">2</td>
                </tr>
                <tr>
                    <th scope="row">Teoría de la Investigación</th>
                        <td align="center" colspan="1">3</td>
                </tr>
                <tr>
                    <th scope="row">Fundamentos de Comercio Internacional</th>
                    <td colspan="1" align="center">3</td>
                </tr>                
            </tbody>                        
        </table>
        
        <tr id="footer">
            <tr>
            <td colspan="1" ><h6>5 Materias</td>
            <td colspan="1" ><h6>14 Créditos</td>
        </tr> 
    
</div>

<!-- SEMESTRE 2 -->
<input type="radio" name="radio" id="radio2">
<div class="tab2">
<table class="table table-sm">
    <thead  id="titulosemestre">
                <div scope="col">
                            <tr>
                            <h4>Semestre 2</h4>
                            </tr> 
                </div> 
                </thead>
    <thead id="cabeceratabla">
    <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">PRE-REQUISITOS</th>
    </tr>
</thead>
<tbody id="cuerpotabla">
    <tr>
        <th scope="row">Microeconomía</th>
        <td align="center">3</td>
        <td align="center">Introducción a la Economía</td>
    </tr>
    <tr>
        <th scope="row">Análisis Financiero</th>
        <td align="center">2</td>
        <td align="center">Contabilidad General</td>
    </tr>
    <tr>
        <th scope="row">Fundamentos de Mercadeo	</th>
        <td colspan="1"align="center">3</td>
        <td align="center"></td>
    </tr>
    <tr>
        <th scope="row">Estadística I</th>
        <td align="center"colspan="1" >3</td>
        <td align="center"></td>
    </tr>
    <tr>
        <th scope="row">Álgebra y Programación Lineal</th>
        <td align="center" colspan="1">3</td>
        <td align="center" ></td>
    </tr>
</tbody>
</table>
<tr id="footer">
            <td colspan="1" ><h6>5 Materias</td>
            <td colspan="1" ><h6>14 Créditos</td>
</tr> 
</div>

<!-- SEMESTRE 3 -->
<input type="radio" name="radio" id="radio3">
<div class="tab3">
    <table class="table table-sm">
    <thead  id="titulosemestre">
    <div scope="col">
                <tr>
                <h4>Semestre 3</h4>
                </tr> 
    </div> 
    </thead>
<thead id="cabeceratabla">
    <thead id="cabeceratabla">
        <tr>
            <th scope="col">ASIGNATURAS</th>
            <th scope="col">CRÉDITOS</th>
            <th scope="col">PRE-REQUISITOS</th>
        </tr>
    </thead>
    <tbody id="cuerpotabla">
        <tr>
            <th scope="row">Teoría del Comercio Internacional</th>
            <td align="center">3</td>
            <td align="center">Microeconomía I</td>
        </tr>
        <tr>
            <th scope="row">Macroeconomía</th>
            <td align="center">3</td>
            <td align="center">Introducción a la Economía</td>
        </tr>
        <tr>
            <th scope="row">Estadística II</th>
            <td colspan="1" align="center">3</td>
            <td align="center">Estadística I</td>
        </tr>
        <tr>
            <th scope="row">Geopolítica</th>
            <td colspan="1" align="center">2</td>
            <td align="center"></td>
        </tr>
        <tr>
            <th scope="row">Administración</th>
            <td colspan="1" align="center">2</td>
            <td align="center"></td>
        </tr> 
    </tbody>
    </table>
    <tr id="footer">
        <td colspan="1" ><h6>5 Materias</td>
        <td colspan="1" ><h6>13 Créditos</td>
    </tr> 
</div>

<!-- SEMESTRE 4 -->
<input type="radio" name="radio" id="radio4">
<div class="tab4">
<table class="table table-sm">
    <thead  id="titulosemestre">
        <div scope="col">
                <tr>
                    <h4>Semestre 4</h4>
                </tr> 
        </div> 
    </thead>

  <thead id="cabeceratabla">
    <tr>
        <th scope="col">ASIGNATURAS</th>
        <th scope="col">CRÉDITOS</th>
        <th scope="col">PRE-REQUISITOS</th>
    </tr>
  </thead>
    <tbody id="cuerpotabla">
    <tr>
                <th scope="row">Política Comercial Internacional</th>
                <td align="center">3</td>
                <td align="center"></td>
            </tr>
            <tr>
                <th scope="row">Matemática Financiera</th>
                <td align="center">3</td>
                <td align="center"></td>
            </tr>
            <tr>
                <th scope="row">Economía Colombiana</th>
                <td colspan="1" align="center">3</td>
                <td align="center"></td>
            </tr>
            <tr>
                <th scope="row">Metodología de la Investigación</th>
                <td colspan="1" align="center">3</td>
                <td align="center">Teoría de la Investigación</td>
            </tr>
            <tr>
                <th scope="row">Legislación Comercial</th>
                <td colspan="1" align="center">3</td>
                <td align="center"></td>
            </tr>                                   
    </tbody>
    </table>
    <tr id="footer">
        <td colspan="1" ><h6>5 Materias</td>
        <td colspan="1" ><h6>15 Créditos</td>
    </tr> 
</div>

<!-- SEMESTRE 5 -->
<input type="radio" name="radio" id="radio5">
<div class="tab5">
<table class="table table-sm">
<thead  id="titulosemestre">
    <div scope="col">
            <tr>
                <h4>Semestre 5</h4>
            </tr> 
    </div> 
</thead>
  <thead id="cabeceratabla">
    <tr>
        <th scope="col">ASIGNATURAS</th>
        <th scope="col">CRÉDITOS</th>
        <th scope="col">PRE-REQUISITOS</th>
    </tr> 
  </thead>
    <tbody id="cuerpotabla">
        <tr>
            <th scope="row">Empresarismo e Ideas de Negocios</th>
            <td align="center">2</td>
            <td align="center"></td>
        </tr>
        <tr>
            <th scope="row">Comercio Electrónico</th>
            <td align="center">2</td>
            <td align="center"></td>
        </tr>
        <tr>
            <th scope="row">Investigación de Mercados	</th>
            <td colspan="1" align="center">3</td>
            <td align="center">Fundamentos de Mercadeo y Estadística II
            </td>
        </tr>
        <tr>
            <th scope="row">Régimen Arancelario</th>
            <td colspan="1" align="center">3</td>
            <td align="center">4</td>
        </tr>
        <tr>
            <th scope="row">Integración Económica y Organismos Regionales del Comercio	</th>
            <td colspan="1" align="center">3</td>
            <td align="center"></td>
        </tr>        
    </tbody>
    </table>
    <tr id="footer">
        <td colspan="1" ><h6>5 Materias</td>
        <td colspan="1" ><h6>13 Créditos</td>
    </tr>
</div>

<!-- SEMESTRE 6 -->
<input type="radio" name="radio" id="radio6">
<div class="tab6">
    <table class="table table-sm">
    <thead  id="titulosemestre">
        <div scope="col">
                <tr>
                    <h4>Semestre 6</h4>
                </tr> 
        </div> 
    </thead>
        <thead id="cabeceratabla">
        <tr>
            <th scope="col">ASIGNATURAS</th>
            <th scope="col">CRÉDITOS</th>
            <th scope="col">PRE-REQUISITOS</th>
        </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Política del Comercio Exterior Colombiano</th>
                <td align="center">3</td>
                <td align="center"></td>
            </tr>
            <tr>
                <th scope="row">Banca y Crédito Internacional</th>
                <td align="center">3</td>
                <td align="center">Macroeconomía</td>
            </tr>
            <tr>
                <th scope="row">Mercadeo Internacional I</th>
                <td colspan="1" align="center">3</td>
                <td align="center">Investigación de Mercados</td>
            </tr>
            <tr>
                <th scope="row">Importaciones</th>
                <td colspan="1" align="center">3</td>
                <td align="center">Régimen Arancelario</td>
            </tr>
            <tr>
                <th scope="row">Derecho Comercial Internacional</th>
                <td colspan="1" align="center">3</td>
                <td align="center"></td>
            </tr>
        </tbody>
        </table>
        <tr id="footer">
            <td colspan="1" ><h6>5 Materias</td>
            <td colspan="1" ><h6>15 Créditos</td>
        </tr>
</div>


<!-- SEMESTRE 7 -->
<input type="radio" name="radio" id="radio7">
<div class="tab7">
    <table class="table table-sm">
    <thead  id="titulosemestre">
        <div scope="col">
                <tr>
                    <h4>Semestre 7</h4>
                </tr> 
        </div> 
    </thead>
    <thead id="cabeceratabla">
        <tr>
            <th scope="col">ASIGNATURAS</th>
            <th scope="col">CRÉDITOS</th>
            <th scope="col">PRE-REQUISITOS</th>
        </tr>
    </thead>
    <tbody id="cuerpotabla">
        <tr>
            <th scope="row">Seminario de Trabajo de Grado</th>
            <td align="center">3</td>
            <td align="center">Metodología de la Investigación y Práctica Investigativa
            </td>
        </tr>
        <tr>
            <th scope="row">Finanzas Internacionales</th>
            <td align="center">3</td>
            <td align="center">Macroeconomía</td>
        </tr>
        <tr>
            <th scope="row">Exportaciones</th>
            <td align="center" colspan="1">3</td>
            <td align="center">Régimen Arancelario</td>
        </tr>
        <tr>
            <th scope="row">Mercadeo Internacional II</th>
            <td align="center" colspan="1">3</td>
            <td align="center">Mercadeo Internacional I</td>
        </tr>
    </tbody>
    </table>
    <tr id="footer">
            <td colspan="1" ><h6>4 Materias</td>
            <td colspan="1" ><h6>12 Créditos</td>
    </tr>
</div>

<!-- SEMESTRE 8 -->
<input type="radio" name="radio" id="radio8">
<div class="tab8">
    <table class="table table-sm">
    <thead  id="titulosemestre">
        <div scope="col">
                <tr>
                    <h4>Semestre 8</h4>
                </tr> 
        </div> 
    </thead>
    <thead id="cabeceratabla">
        <tr>
            <th scope="col">ASIGNATURAS</th>
            <th scope="col">CRÉDITOS</th>
            <th scope="col">PRE-REQUISITOS</th>
        </tr>
    </thead>
    <tbody id="cuerpotabla">
        <tr>
            <th scope="row">Laboratorio de Comercio Exterior</th>
            <td align="center">3</td>
            <td align="center">Importaciones y Exportaciones</td>
        </tr>
        <tr>
            <th scope="row">Logística Comercial Internacional I</th>
            <td align="center">3</td>
            <td align="center"></td>
        </tr>
        <tr>
            <th scope="row">Cooperación Internacional para el Desarrollo</th>
            <td align="center" colspan="1">3</td>
            <td align="center"></td>
        </tr>
        <tr>
            <th scope="row">Negocios Internacionales</th>
            <td align="center" colspan="1">3</td>
            <td align="center"></td>
        </tr>
    </tbody>
    </table>
    <tr id="footer">
            <td colspan="1" ><h6>4 Materias</td>
            <td colspan="1" ><h6>12 Créditos</td>
    </tr>
</div>

<!-- SEMESTRE 9 -->
<input type="radio" name="radio" id="radio9">
<div class="tab9">
    <table class="table table-sm">
    <thead  id="titulosemestre">
        <div scope="col">
                <tr>
                    <h4>Semestre 9</h4>
                </tr> 
        </div> 
    </thead>
    <thead id="cabeceratabla">
        <tr>
            <th scope="col">ASIGNATURAS</th>
            <th scope="col">CRÉDITOS</th>
            <th scope="col">PRE-REQUISITOS</th>
        </tr>
    </thead>
    <tbody id="cuerpotabla">
        <tr>
            <th scope="row">Logística Comercial Internacional II</th>
            <td align="center">3</td>
            <td align="center">Logística Comercial Internacional I</td>
        </tr>
        <tr>
            <th scope="row">Derecho Aduanero</th>
            <td align="center">3</td>
            <td align="center"></td>
        </tr>
        <tr>
            <th scope="row">Plan de Negocios Internacionales</th>
            <td align="center">3</td>
            <td align="center">Empresarismo e Ideas de Negocios</td>
        </tr>
    </tbody>
    </table>
    <tr id="footer">
            <td colspan="1" ><h6>3 Materias</td>
            <td colspan="1" ><h6>9 Créditos</td>
    </tr>
</div>


<!-- SEMESTRE 10 -->
<input type="radio" name="radio" id="radio10">
<div class="tab10">
<table class="table table-sm">
<thead  id="titulosemestre">
        <div scope="col">
                <tr>
                    <h4>Semestre 10</h4>
                </tr> 
        </div> 
</thead>
<thead id="cabeceratabla">
    <tr>
        <th scope="col">ASIGNATURAS</th>
        <th scope="col">CRÉDITOS</th>
        <th scope="col">PRE-REQUISITOS</th>
    </tr>
</thead>
<tbody id="cuerpotabla">
    <tr>
        <th scope="row">Práctica Profesional</th>
        <td align="center">12</td>
        <td align="center">Paz y salvo académico hasta noveno semestre</td>
    </tr>
</tbody>
</table>
<tr id="footer">
            <td colspan="1" ><h6>1 Materias</td>
            <td colspan="1" ><h6>12 Créditos</td>
</tr>
</div>


<!-- REQUISITOS DE GRADO -->
<input type="radio" name="radio" id="radio11">
<div class="tab11">
    <table class="table table-sm">
    <thead id="cabeceratabla">
       
    </thead>
    <tbody id="cuerpotabla">
        <th scope="row" align="left">
        <li>Cumplimiento total de Número de créditos del plan de estudios</li>        
        <li>Eficiencia en inglés</li>
        <li>Trabajo de grado</li>
        <ul>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</ul>
        <li>Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2</li>
        <li>Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2</li>
        <li>Formación Humanística (Formación ciudadana) IHS 2  Créditos 2</li>
        <li>Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2</li>
        <li>Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 1</li>
        <li>Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 1</li>
        <li>Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2</li>
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
</div>
`
    }
    /*informatica*/
    if (idimg == 'imgfaciainformatica') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
        ${text}
        <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-inner">
    
              <div class="carousel-item active">
                <img src="img/perfilesgeneral/Lic_informatica.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="img/perfileocupacional/informatica/informatica_ocupacupacional.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="img/perfileocupacional/informatica/informatica_profesional.png" class="d-block w-100" alt="...">
              </div>
    
          <div class="carousel-item">
          <div class="container" >
          <div class="tab1" >
                        <table class="table table-sm" id="titulo" >
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
    
          <div class="content" id="table1">
              <input type="radio" name="radio" id="radio1" checked >
              <div class="tab1">
                        <table class="table table-sm" >
                        <thead id="cabeceratabla">
                            <tr>
                                <th scope="col">ASIGNATURAS</th>
                                <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                                <th scope="col">CRÉDITOS ACADÉMICOS</th>
                                <th scope="col">PRERREQUISITOS</th>
                            </tr>
                        </thead>
                            <tbody id="cuerpotabla" >
                                <tr>
                                    <th scope="row">Gestión de la información</th>
                                        <td align="center">3</td>
                                        <td align="center">4</td>
                                        <td align="center"></td>
                                </tr>
                                <tr>
                                    <th scope="row">Introducción a la Teoría Informática</th>
                                        <td align="center">4</td>
                                        <td align="center">4</td>
                                        <td align="center"></td>
                                    </tr>
                                <tr>
                                    <th scope="row">Matemáticas Generales</th>
                                        <td colspan="1" align="center">4</td>
                                        <td align="center">4</td>
                                        <td align="center"></td>
                                </tr>
                                <tr>
                                    <th scope="row">Fundamentos de Lógica</th>
                                        <td align="center" colspan="1">4</td>
                                        <td align="center">4</td>
                                        <td align="center"></td>
                                </tr>
                                <tr>
                                    <th scope="row">Informática y Educación</th>
                                    <td colspan="1" align="center">3</td>
                                    <td align="center">4</td>
                                    <td align="center"></td>
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
                        <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Hardware y Sistemas Operativos</th>
                        <td align="center">3</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                        
                    </tr>
                    <tr>
                        <th scope="row">Programación I</th>
                        <td align="center">3</td>
                        <td align="center">4</td>
                        <td align="center">Fundamentos de Lógica</td>
                     
                    </tr>
                    <tr>
                        <th scope="row">TIC para la Educación</th>
                        <td colspan="1"align="center">3</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Filosofía e Historia de la Educación</th>
                        <td align="center"colspan="1" >4</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Álgebra de Matrices y Programación Lineal</th>
                        <td align="center" colspan="1">4</td>
                        <td align="center" >4</td>
                        <td align="center" >Matemáticas Generales</td>
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
                            <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Programación II</th>
                            <td align="center">3</td>
                            <td align="center">4</td>
                            <td align="center">Programación I</td>
                        </tr>
                        <tr>
                            <th scope="row">Metodología de la Investigación</th>
                            <td align="center">4</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Bases de Datos</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Teorías de Aprendizaje</th>
                            <td colspan="1" align="center">4</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Electiva 1</th>
                            <td colspan="1" align="center"></td>
                            <td align="center"></td>
                            <td align="center"></td>
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
                            <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                            <th scope="col">CRÉDITOS ACADÉMICOS</th>
                            <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Estadística</th>
                            <td align="center">3</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Desarrollo de Software</th>
                            <td align="center">3</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Teoría y Crítica de la Arquitectura y la Ciudad II</th>
                            <td colspan="1" align="center">4</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Diseño Gráfico y Animación</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Corrientes Pedagógicas</th>
                            <td colspan="1" align="center">4</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                        <th scope="row">Electiva 2</th>
                        <td colspan="1" align="center"></td>
                        <td align="center"></td>
                        <td align="center"></td>
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
                        <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Medios Audiovisuales</th>
                            <td align="center">3</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Teoría y Gestión Curricular en Informática</th>
                            <td align="center">4</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                        <th scope="row">Legislación Educativa y Ambiente Escolar</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                        </tr>
                        <tr>
                        <th scope="row">Electiva 3</th>
                        <td colspan="1" align="center"></td>
                        <td align="center"></td>
                        <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Electiva 4</th>
                            <td colspan="1" align="center"></td>
                            <td align="center"></td>
                            <td align="center"></td>
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
                            <th scope="col">PRERREQUISITOS</th>
                            </tr>
                        </thead>
                        <tbody id="cuerpotabla">
                            <tr>
                                <th scope="row">Tecnología I</th>
                                <td align="center">3</td>
                                <td align="center">4</td>
                                <td align="center"></td>
                            </tr>
                            <tr>
                                <th scope="row">Desarrollo de Software Educativo</th>
                                <td align="center">3</td>
                                <td align="center">4</td>
                                <td align="center">Desarrollo de Software</td>
                            </tr>
                            <tr>
                                <th scope="row">Didáctica de la Informática</th>
                                <td colspan="1" align="center">4</td>
                                <td align="center">4</td>
                                <td align="center"></td>
                            </tr>
                            <tr>
                                <th scope="row">Electiva 5</th>
                                <td colspan="1" align="center"></td>
                                <td align="center"></td>
                                <td align="center"></td>
                            </tr>
                            <tr>
                                <th scope="row">Electiva 6</th>
                                <td colspan="1" align="center"></td>
                                <td align="center"></td>
                                <td align="center"></td>
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
                        <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                        <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Tecnología II</th>
                            <td align="center">3</td>
                            <td align="center">4</td>
                            <td align="center"></td>
    
                        </tr>
                        <tr>
                            <th scope="row">Evaluación del Aprendizaje de la Informática</th>
                            <td align="center">4</td>
                            <td align="center">4</td>
                            <td align="center"></td>
    
                        </tr>
                        <tr>
                            <th scope="row">Taller de Enseñanza</th>
                            <td align="center" colspan="1">3</td>
                            <td align="center">4</td>
                            <td align="center">	Didáctica de la Informática</td>
    
                        </tr>
                        <tr>
                            <th scope="row">Electiva 7</th>
                            <td align="center" colspan="1"></td>
                            <td align="center"></td>
                            <td align="center"></td>
    
                        </tr>
                        <tr>
                            <th scope="row">Electiva 8</th>
                            <td align="center" colspan="1"></td>
                            <td align="center"></td>
                            <td align="center"></td>
    
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
                        <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Práctica Docente I</th>
                            <td align="center">6</td>
                            <td align="center">16</td>
                            <td align="center">Tener aprobado al menos 100 créditos de los cuales 37 deben ser los obligatorios de los componentes de Didáctica de la Disciplina y Pedagogía y Ciencias de la Educación</td>
                        </tr>
                        <tr>
                            <th scope="row">Proyectos informáticos</th>
                            <td align="center">4</td>
                            <td align="center">4</td>
                            <td align="center">	Tener aprobado por lo menos 100 créditos</td>
    
                        </tr>
                        <tr>
                            <th scope="row">Electiva 9</th>
                            <td align="center" colspan="1"></td>
                            <td align="center"></td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Electiva 10</th>
                            <td align="center" colspan="1"></td>
                            <td align="center"></td>
                            <td align="center"></td>
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
                        <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Práctica Docente II</th>
                            <td align="center">4</td>
                            <td align="center">12</td>
                            <td align="center">Práctica Docente I</td>
                        </tr>
                        <tr>
                        <th scope="row">Electiva 11</th>
                        <td align="center"></td>
                        <td align="center"></td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Electiva 12</th>
                        <td align="center"></td>
                        <td align="center"></td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Electiva 13</th>
                        <td align="center"></td>
                        <td align="center"></td>
                        <td align="center"></td>
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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Electiva 14</th>
                        <td align="center"></td>
                        <td align="center"></td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Electiva 15</th>
                        <td align="center"></td>
                        <td align="center"></td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Electiva 16</th>
                        <td align="center"></td>
                        <td align="center"></td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Electiva 17</th>
                        <td align="center"></td>
                        <td align="center"></td>
                        <td align="center"></td>
                    </tr>
                </tbody>
                </table>
              </div>
              <input type="radio" name="radio" id="radio11">
              <div class="tab11">
                    <table class="table table-sm">
                    <thead id="cabeceratabla">
    
                    </thead>
                    <tbody id="cuerpotabla">
                    
    
                        <li>Cumplimiento total de 126 créditos del plan de estudios
                        <li>Cumplimiento total de 34 créditos de asignaturas electivas del plan de estudios
                        <li>Eficiencia en inglés (8 créditos).
                        <li>Trabajo de grado.
                        </ul><br>
                        <b>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:
                        </b>
                        <li>Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2
                        <li>Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2
                        <li>Formación Humanística (Formación ciudadana) IHS 2  Créditos 2
                        <li>Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2
                        <li>Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 1
                        <li>Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 1
                        </ul>
                        </tr>
    
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
        <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
      </div>
  `
    }

    /*------------------------fisica----------------------*/
    if (idimg == 'imgfaciafisica') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
    <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="img/perfilesgeneral/fisica.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/perfileocupacional/fisica/Fisica_profesional.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/perfileocupacional/fisica/Fisica_ocupacional.png" class="d-block w-100" alt="...">
          </div>

      <div class="carousel-item">
      <div class="container" >
      <div class="tab1" >
                    <table class="table table-sm" id="titulo" >
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

      <div class="content" id="table1">
          <input type="radio" name="radio" id="radio1" checked >
          <div class="tab1">
                    <table class="table table-sm" >
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col">ASIGNATURAS</th>
                            <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                            <th scope="col">CRÉDITOS ACADÉMICOS</th>
                            <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                        <tbody id="cuerpotabla" >
                            <tr>
                                <th scope="row">182- Matemáticas Elementales</th>
                                    <td align="center">	4/0</td>
                                    <td align="center">	4</td>
                                    <td align="center"></td>
                            </tr>
                            <tr>
                                <th scope="row">184- Geometría</th>
                                    <td align="center">	4/0</td>
                                    <td align="center">4</td>
                                    <td align="center"></td>
                                </tr>
                            <tr>
                                <th scope="row">285- Física Fundamental I</th>
                                    <td colspan="1" align="center">4/0</td>
                                    <td align="center">4</td>
                                    <td align="center"></td>
                            </tr>
                            <tr>
                                <th scope="row">6263- Laboratorio de Física Fundamental I</th>
                                    <td align="center" colspan="1">3/0</td>
                                    <td align="center">3</td>
                                    <td align="center"></td>
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
                    <th scope="col">PRERREQUISITOS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">108- Cálculo I</th>
                    <td align="center">6/0</td>
                    <td align="center">5</td>
                    <td align="center">Matemáticas Elementales y Geometría</td>
                    
                </tr>
                <tr>
                    <th scope="row">109- Álgebra Lineal</th>
                    <td align="center">4/0</td>
                    <td align="center">4</td>
                    <td align="center">Matemáticas Elementales</td>
                 
                </tr>
                <tr>
                    <th scope="row">439- Física Fundamental II</th>
                    <td colspan="1"align="center">4/0</td>
                    <td align="center">4</td>
                    <td align="center">Matemáticas Elementales y Física Fundamental I</td>
                </tr>
                <tr>
                    <th scope="row">6264- Laboratorio de Física Fundamental II</th>
                    <td align="center"colspan="1" >3/0</td>
                    <td align="center">2</td>
                    <td align="center">Laboratorio de Física Fundamental I</td>
                </tr>
                <tr>
                    <th scope="row">188- Química General</th>
                    <td align="center" colspan="1">6/0</td>
                    <td align="center" >4</td>
                    <td align="center" >Matemáticas Elementales</td>
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
                        <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">113- Cálculo II</th>
                        <td align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Cálculo I</td>
                    </tr>
                    <tr>
                        <th scope="row">230- Ecuaciones Diferenciales</th>
                        <td align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Cálculo I y Álgebra Lineal</td>
                    </tr>
                    <tr>
                        <th scope="row">115- Física I</th>
                        <td colspan="1" align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Cálculo I y Física Fundamental II</td>
                    </tr>
                    <tr>
                        <th scope="row">1399- Física Experimental I</th>
                        <td colspan="1" align="center">0/3</td>
                        <td align="center">2</td>
                        <td align="center">Laboratorio de Física Fundamental II</td>
                    </tr>
                    <tr>
                        <th scope="row">4678- Física Computacional I</th>
                        <td colspan="1" align="center">	4/0</td>
                        <td align="center">2</td>
                        <td align="center">Física Fundamental II y Cálculo I</td>
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
                        <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                        <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">118- Cálculo III</th>
                        <td align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Cálculo II</td>
                    </tr>
                    <tr>
                        <th scope="row">6265- Física Matemática I</th>
                        <td align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Cálculo II y Ecuaciones Diferenciales</td>
                    </tr>
                    <tr>
                        <th scope="row">119- Física II</th>
                        <td colspan="1" align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Física I y Cálculo II</td>
                    </tr>
                    <tr>
                        <th scope="row">1403- Física Experimental II</th>
                        <td colspan="1" align="center">0/3</td>
                        <td align="center">2</td>
                        <td align="center">Física Experimental I</td>
                    </tr>
                    <tr>
                        <th scope="row">4679- Física Computacional II</th>
                        <td colspan="1" align="center">4/0</td>
                        <td align="center">2</td>
                        <td align="center">Cálculo II y Física Computacional I</td>
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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">6266- Física Matemática II</th>
                        <td align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Física Matemática I</td>
                    </tr>
                    <tr>
                        <th scope="row">228- Física III</th>
                        <td align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Cálculo III y Física II</td>
                    </tr>
                    <tr>
                    <th scope="row">1405- Física Experimental III</th>
                    <td colspan="1" align="center">0/3</td>
                    <td align="center">2</td>
                    <td align="center">Física Experimental II</td>
                    </tr>
                    <tr>
                    <th scope="row">394- Termodinámica</th>
                    <td colspan="1" align="center">5/0</td>
                    <td align="center">4</td>
                    <td align="center">Física II y Ecuaciones Diferenciales</td>
                    </tr>
                    <tr>
                        <th scope="row">395- Mecánica Analítica</th>
                        <td colspan="1" align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Cálculo II, Física I y Ecuaciones Diferenciales</td>
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
                        <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">6267- Física Matemática III</th>
                            <td align="center">4/0</td>
                            <td align="center">4</td>
                            <td align="center">Física Matemática II</td>
                        </tr>
                        <tr>
                            <th scope="row">6268- Física Moderna I</th>
                            <td align="center">4/0</td>
                            <td align="center">4</td>
                            <td align="center">Física III y Termodinámica</td>
                        </tr>
                        <tr>
                            <th scope="row">1406- Física Experimental IV</th>
                            <td colspan="1" align="center">0/3</td>
                            <td align="center">2</td>
                            <td align="center">Física Experimental III</td>
                        </tr>
                        <tr>
                            <th scope="row">6269- Electrodinámica I</th>
                            <td colspan="1" align="center">4/0</td>
                            <td align="center">4</td>
                            <td align="center">Física III y Física Matemática I</td>
                        </tr>
                        <tr>
                            <th scope="row">1404 - Electrónica I</th>
                            <td colspan="1" align="center">6/0</td>
                            <td align="center">4</td>
                            <td align="center">Física III</td>
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
                    <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">1402- Óptica</th>
                        <td align="center">5/0</td>
                        <td align="center">4</td>
                        <td align="center">Electrodinámica I</td>

                    </tr>
                    <tr>
                        <th scope="row">6270- Física Moderna II</th>
                        <td align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Física Moderna I</td>

                    </tr>
                    <tr>
                        <th scope="row">1413- Mecánica Cuántica I</th>
                        <td align="center" colspan="1">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Física Moderna I y Física Matemática I</td>

                    </tr>
                    <tr>
                        <th scope="row">6271- Electrodinámica II</th>
                        <td align="center" colspan="1">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Electrodinámica I</td>

                    </tr>
                    <tr>
                        <th scope="row">1408- Electrónica II</th>
                        <td align="center" colspan="1">6/0</td>
                        <td align="center">4</td>
                        <td align="center">Electrónica I</td>

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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">909- Seminario</th>
                        <td align="center">	3/0</td>
                        <td align="center">1</td>
                        <td align="center">Física Moderna II</td>
                    </tr>
                    <tr>
                        <th scope="row">551- Física Estadística</th>
                        <td align="center">	4/0</td>
                        <td align="center">4</td>
                        <td align="center">Mecánica Cuántica</td>

                    </tr>
                    <tr>
                        <th scope="row">1415- Mecánica Cuántica II</th>
                        <td align="center" colspan="1">	4/0</td>
                        <td align="center">4</td>
                        <td align="center">Mecánica Cuántica I</td>
                    </tr>
                    <tr>
                        <th scope="row">1414- Estado Solido</th>
                        <td align="center" colspan="1">	4/0</td>
                        <td align="center">4</td>
                        <td align="center">Mecánica Cuántica I</td>
                    </tr>
                    <tr>
                        <th scope="row">4402- Electiva de Área I</th>
                        <td align="center" colspan="1">	4/0</td>
                        <td align="center">4</td>
                        <td align="center">	Mecánica Cuántica I, Electrodinámica II y
                        Física Experimental IV</td>
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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">4261- Electiva de Área II</th>
                        <td align="center">4/0</td>
                        <td align="center">4</td>
                        <td align="center">Paz y Salvo hasta VIII Semestre</td>
                    </tr>
                    <tr>
                    <th scope="row">6272- Electiva de Física I</th>
                    <td align="center">4/0</td>
                    <td align="center">4</td>
                    <td align="center">Paz y Salvo hasta VIII Semestre</td>
                </tr>
                <tr>
                    <th scope="row">1552- Proyecto de Trabajo de Grado</th>
                    <td align="center">1/0</td>
                    <td align="center">2</td>
                    <td align="center">Paz y Salvo hasta VIII Semestre</td>
                </tr>
                <tr>
                    <th scope="row">1417- Epistemología de la Física</th>
                    <td align="center">4/0</td>
                    <td align="center">3</td>
                    <td align="center">Paz y Salvo hasta VIII Semestre</td>
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
                <th scope="col">PRERREQUISITOS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">6273- Electiva de Física II</th>
                    <td align="center">4/0</td>
                    <td align="center">4</td>
                    <td align="center">Electiva de Física I</td>
                </tr>
                <tr>
                    <th scope="row">1958- Trabajo de Grado</th>
                    <td align="center">2/0</td>
                    <td align="center">7</td>
                    <td align="center">Proyecto de Trabajo de Grado</td>
                </tr>
            </tbody>
            </table>
          </div>
          <input type="radio" name="radio" id="radio11">
          <div class="tab11">
                <table class="table table-sm">
                <thead id="cabeceratabla">

                </thead>
                <tbody id="cuerpotabla">
                

                    <li>Cumplimiento total de número de créditos del plan de estudios
                    <li>Eficiencia en inglés (dos niveles).
                    <li>Trabajo de grado.
                    </ul><br>
                    <b>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:
                    </b>
                    <li>Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2
                    <li>Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2
                    <li>Formación Humanística (Formación ciudadana) IHS 2  Créditos 2
                    <li>Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2
                    <li>Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 1
                    <li>Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 1
                    <li>Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2
                    </ul>
                    </tr>

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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
  </div>
`
    }
    /*ingenieria ambiental-----*/
    if (idimg == 'imgfacambiental') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
    <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="img/perfilesgeneral/Ambiental.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/perfileocupacional/ambiental/AmbientalperfilOcupacional.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/perfileocupacional/ambiental/AmbientalperfilOacupa2.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/perfileocupacional/ambiental/Ambientalpreofesional1.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/perfileocupacional/ambiental/Ambientalpreofesional12.png" class="d-block w-100" alt="...">
          </div>

      <div class="carousel-item">
      <div class="container" >
      <div class="tab1" >
                    <table class="table table-sm" id="titulo" >
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

      <div class="content" id="table1">
          <input type="radio" name="radio" id="radio1" checked >
          <div class="tab1">
                    <table class="table table-sm" >
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col">ASIGNATURAS</th>
                            <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                            <th scope="col">CRÉDITOS ACADÉMICOS</th>
                            <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                        <tbody id="cuerpotabla" >
                            <tr>
                                <th scope="row">Matemáticas Generales</th>
                                    <td align="center">3</td>
                                    <td align="center">4</td>
                                    <td align="center"></td>
                            </tr>
                            <tr>
                                <th scope="row">Química General</th>
                                    <td align="center">4</td>
                                    <td align="center">6</td>
                                    <td align="center"></td>
                                </tr>
                            <tr>
                                <th scope="row">Biología Celular</th>
                                    <td colspan="1" align="center">4</td>
                                    <td align="center">6</td>
                                    <td align="center"></td>
                            </tr>
                            <tr>
                                <th scope="row">Diseño Asistido por Computadora</th>
                                    <td align="center" colspan="1">2</td>
                                    <td align="center">4</td>
                                    <td align="center"></td>
                            </tr>
                            <tr>
                            <th scope="row">Introducción a la Ingeniería Ambiental</th>
                                <td align="center" colspan="1">3</td>
                                <td align="center">6</td>
                                <td align="center"></td>
                            </tr>
                            <th scope="row">Lectura y Producción de Textos I</th>
                                <td align="center" colspan="1">1</td>
                                <td align="center"></td>
                                <td align="center"></td>
                            </tr>
                            <th scope="row">Lectura y Producción de Textos II</th>
                                <td align="center" colspan="1">1</td>
                                <td align="center"></td>
                                <td align="center"></td>
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
                    <th scope="col">PRERREQUISITOS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Cálculo Diferencial</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                    <td align="center"></td>
                    
                </tr>
                <tr>
                    <th scope="row">Química Orgánica</th>
                    <td align="center">4</td>
                    <td align="center">6</td>
                    <td align="center"></td>
                 
                </tr>
                <tr>
                    <th scope="row">Hidrofísica</th>
                    <td colspan="1"align="center">3</td>
                    <td align="center">6</td>
                    <td align="center">Matemáticas Elementales y Física Fundamental I</td>
                </tr>
                <tr>
                    <th scope="row">Teoría de SistemasI</th>
                    <td align="center"colspan="1" >3</td>
                    <td align="center">5</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Microbiología Ambiental (Electiva)</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center" >6</td>
                    <td align="center" ></td>
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
                        <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Topografía</th>
                        <td align="center">3</td>
                        <td align="center">5</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Hidráulica</th>
                        <td align="center">4</td>
                        <td align="center">6</td>
                        <td align="center">Hidrofísica</td>
                    </tr>
                    <tr>
                        <th scope="row">Bioestadística</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Cálculo Integral</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Química Analítica y Ambiental</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">6</td>
                        <td align="center">	Química General y Química Orgánica</td>
                    </tr>
                    <tr>
                    <th scope="row">Ecología Ambiental</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">6</td>
                    <td align="center"></td>
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
                        <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                        <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Cartografía</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Ecuaciones Diferenciales</th>
                        <td align="center">3</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Termodinámica</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Balance de Materia y Energía</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">6</td>
                        <td align="center">Calculo Integral</td>
                    </tr>
                    <tr>
                        <th scope="row">Diseño Experimental</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">6</td>
                        <td align="center">Bioestadística</td>
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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Suelos</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Metodología de la Investigación</th>
                        <td align="center">2</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                    <th scope="row">Economía Ambiental</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">6</td>
                    <td align="center"></td>
                    </tr>
                    <tr>
                    <th scope="row">Sistemas de Información Geográfica (Electiva)</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">6</td>
                    <td align="center">Cartografía</td>
                    </tr>
                    <tr>
                        <th scope="row">Recursos Naturales Renovables</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Hidrología - Climatología</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">7</td>
                        <td align="center">	Hidráulica</td>
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
                        <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Ecotoxicología Ambiental (Electiva)</th>
                            <td align="center">4</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Remediación de Suelos (Electiva)</th>
                            <td align="center"></td>
                            <td align="center"></td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Energías Renovables</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">6</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Sistemas Integrados de Gestión</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">6</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Calidad de Aire</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">6</td>
                            <td align="center">Termodinámica</td>
                        </tr>
                       <tr>
                         <th scope="row">Metodologías Participativas</th>
                         <td colspan="1" align="center">3</td>
                         <td align="center">6</td>
                         <td align="center"></td>
                        </tr>
                        <tr>
                         <th scope="row">Producción más limpia</th>
                         <td colspan="1" align="center">3</td>
                         <td align="center">6</td>
                         <td align="center">Balance de Materia y Energía</td>
                        </tr>
                        <tr>
                        <th scope="row">Gestión Integral del Recurso Hídrico (Electiva)</th>
                         <td colspan="1" align="center">4</td>
                         <td align="center">4</td>
                         <td align="center"></td>
                        </tr>
                        <tr>
                         <th scope="row">Sistemas Integrados de Gestión</th>
                         <td colspan="1" align="center">3</td>
                         <td align="center">6</td>
                         <td align="center"></td>
                        </tr>
                        <tr>
                         <th scope="row">Calidad de Aire</th>
                         <td colspan="1" align="center">3</td>
                         <td align="center">6</td>
                         <td align="center"></td>
                        </tr>
                        <tr>
                         <th scope="row">Metodologías Participativas</th>
                         <td colspan="1" align="center">3</td>
                         <td align="center">6</td>
                         <td align="center"></td>
                        </tr>
                        <tr>
                         <th scope="row">Producción más Limpia</th>
                         <td colspan="1" align="center">3</td>
                         <td align="center">6</td>
                         <td align="center"></td>
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
                    <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Educación Ambiental (Electiva)</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>

                    </tr>
                    <tr>
                        <th scope="row">Emprendimiento y Empresarismo</th>
                        <td align="center">2</td>
                        <td align="center">4</td>
                        <td align="center"></td>

                    </tr>
                    <tr>
                        <th scope="row">Tratamiento de Aguas I</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">6</td>
                        <td align="center">Diseño Asistido por Computadora</td>

                    </tr>
                    <tr>
                        <th scope="row">Gestión Integral de Residuos</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>

                    </tr>
                    <tr>
                        <th scope="row">Control de Emisiones Atmosféricas</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">6</td>
                        <td align="center">Calidad del Aire</td>
                    </tr>
                    <tr>
                        <th scope="row">Planificación y Gestión Ambiental</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Formulación y Evaluación de Proyectos</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Plan de Negocios</th>
                        <td align="center">2</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Modelación Ambiental</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">6</td>
                        <td align="center">Ecuaciones Diferenciales y Diseño Asistido por Computadora</td>
                    </tr>
                    <tr>
                        <th scope="row">Diagnóstico Ambiental</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Tratamiento de Aguas II</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">6</td>
                        <td align="center">Tratamiento de Aguas I</td>
                    </tr>
                    <tr>
                        <th scope="row">Estudio de Impacto Ambiental</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Ordenamiento de Cuencas</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center">Diagnóstico Ambiental</td>
                    </tr>
                    <tr>
                    <th scope="row">Trámites Ambientales</th>
                    <td align="center">2</td>
                    <td align="center">4</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Gestión del Riesgo</th>
                    <td align="center">2</td>
                    <td align="center">4</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Cambio Climático</th>
                    <td align="center">3</td>
                    <td align="center">6</td>
                    <td align="center"></td>
                </tr>
                 <tr>
                    <th scope="row">Conflictos Socioambientales</th>
                    <td align="center">3</td>
                    <td align="center">6</td>
                    <td align="center"></td>
                </tr>
                 <tr>
                    <th scope="row">Inducción Semestre de Prácticas</th>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                </tr>
                 <tr>
                    <th scope="row">Eficiencia en Inglés</th>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
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
                <th scope="col">PRERREQUISITOS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Semestre de Práctica</th>
                    <td align="center">6</td>
                    <td align="center">18</td>
                    <td align="center">	Paz y Salvo hasta noveno semestre (IX)</td>
                </tr>
            </tbody>
            </table>
          </div>
          <input type="radio" name="radio" id="radio11">
          <div class="tab11">
                <table class="table table-sm">
                <thead id="cabeceratabla">

                </thead>
                <tbody id="cuerpotabla">
                

                    <li>Cumplimiento total de número de créditos del plan de estudios
                    <li>Eficiencia en inglés (dos niveles).
                    <li>Trabajo de grado.
                    </ul><br>
                    <b>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:
                    </b>
                    <li>Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2
                    <li>Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2
                    <li>Formación Humanística (Formación ciudadana) IHS 2  Créditos 2
                    <li>Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2
                    <li>Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 1
                    <li>Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 1
                    <li>Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2
                    </ul>
                    </tr>

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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
  </div>
`
    }
    /*ingenieria agronomica*/
    if (idimg == 'imgfacagronomica') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
    <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">

          <div class="carousel-item active">
            <img src="img/perfilesgeneral/Ign_agronomica.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/perfileocupacional/agronimica/Agronimicaperfilprofesional.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/perfileocupacional/agronimica/Agronomiaperfilrpfesional.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="img/perfileocupacional/agronimica/Agronomiaperfilprofesional2.png" class="d-block w-100" alt="...">
          </div>

      <div class="carousel-item">
      <div class="container" >
      <div class="tab1" >
                    <table class="table table-sm" id="titulo" >
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

      <div class="content" id="table1">
          <input type="radio" name="radio" id="radio1" checked >
          <div class="tab1">
                    <table class="table table-sm" >
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col">ASIGNATURAS</th>
                            <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                            <th scope="col">CRÉDITOS ACADÉMICOS</th>
                            <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                        <tbody id="cuerpotabla" >
                            <tr>
                                <th scope="row">Biología Celular</th>
                                    <td align="center">4</td>
                                    <td align="center">7</td>
                                    <td align="center"></td>
                            </tr>
                            <tr>
                                <th scope="row">Química Inorgánica</th>
                                    <td align="center">3</td>
                                    <td align="center">5</td>
                                    <td align="center"></td>
                                </tr>
                            <tr>
                                <th scope="row">Matemática Básica</th>
                                    <td colspan="1" align="center">3</td>
                                    <td align="center">5</td>
                                    <td align="center"></td>
                            </tr>
                            <tr>
                                <th scope="row">ICA</th>
                                    <td align="center" colspan="1">2</td>
                                    <td align="center">5</td>
                                    <td align="center"></td>
                            </tr>
                            <tr>
                            <th scope="row">Botánica</th>
                                <td align="center" colspan="1">3</td>
                                <td align="center">6</td>
                                <td align="center"></td>
                            </tr>
                            <th scope="row">Redacción Técnica</th>
                                <td align="center" colspan="1">1</td>
                                <td align="center">2</td>
                                <td align="center"></td>
                            </tr>
                        </tbody>
                    </table>

        </div>
          <input type="radio" name="radio" id="radio2">
          <div class="tab2" id="hola1">
            <table class="table table-sm">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">PRERREQUISITOS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Química Orgánica</th>
                    <td align="center">3</td>
                    <td align="center">7</td>
                    <td align="center"></td>
                    
                </tr>
                <tr>
                    <th scope="row">Calculo Diferencial</th>
                    <td align="center">3</td>
                    <td align="center">6</td>
                    <td align="center"></td>
                 
                </tr>
                <tr>
                    <th scope="row">Taxonomía Vegetal</th>
                    <td colspan="1"align="center">4</td>
                    <td align="center">6</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Hidrofísica</th>
                    <td align="center"colspan="1" >3</td>
                    <td align="center">5</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Ecología</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center" >5</td>
                    <td align="center" ></td>
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
                        <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Bioquímica</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Calculo Integral</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Geomorfología y Clasificación</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">5</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Hidráulica</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">6</td>
                        <td align="center">Hidrofísica</td>
                    </tr>
                    <tr>
                    <th scope="row">Topografía</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">5</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Propagación Vegetal</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">5</td>
                        <td align="center"></td>
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
                        <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                        <th scope="col">CRÉDITOS ACADÉMICOS</th>
                        <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Agroclimatología</th>
                        <td align="center">3</td>
                        <td align="center">5</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Bioestadística</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Relación Suelo Planta</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">6</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Fisiología Vegetal</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">7</td>
                        <td align="center">	Bioquímica</td>
                    </tr>
                    <tr>
                        <th scope="row">Mecanización</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">7</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">SIG y Modelamiento</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">5</td>
                        <td align="center"></td>
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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Fertilidad Integral de Suelos</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center">Relación Suelo Planta</td>
                    </tr>
                    <tr>
                        <th scope="row">Riegos y Drenajes</th>
                        <td align="center">3</td>
                        <td align="center">6</td>
                        <td align="center">Hidráulica</td>
                    </tr>
                    <tr>
                    <th scope="row">Entomología</th>
                    <td colspan="1" align="center">4</td>
                    <td align="center">7</td>
                    <td align="center"></td>
                    </tr>
                    <tr>
                    <th scope="row">Diseño Experimental</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">5</td>
                    <td align="center">Bioestadística</td>
                    </tr>
                    <tr>
                        <th scope="row">Genética</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">7</td>
                        <td align="center">Bioestadística</td>
                    </tr>
                    <tr>
                        <th scope="row">Microbiología</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">7</td>
                        <td align="center"></td>
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
                        <th scope="col">PRERREQUISITOS</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Manejo Integrado de Plagas</th>
                            <td align="center">4</td>
                            <td align="center">7</td>
                            <td align="center">Entomología</td>
                        </tr>
                        <tr>
                            <th scope="row">Optativa/th>
                            <td align="center">2</td>
                            <td align="center">4</td>
                            <td align="center"></td>
                        </tr>
                        <tr>
                            <th scope="row">Biología Molecular</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">6</td>
                            <td align="center">Genética</td>
                        </tr>
                        <tr>
                            <th scope="row">Fitopatología</th>
                            <td colspan="1" align="center">4</td>
                            <td align="center">7</td>
                            <td align="center">Microbiología</td>
                        </tr>
                        <tr>
                            <th scope="row">Manejo y Conserva de Suelos</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">6</td>
                            <td align="center">Fertilidad Integral de Suelos</td>
                        </tr>
                       <tr>
                         <th scope="row">Fisiología de Cultivos</th>
                         <td colspan="1" align="center">4</td>
                         <td align="center">7</td>
                         <td align="center"></td>
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
                    <th scope="col">HORAS SEMANALES TEORÍA/PRÁCTICA</th>
                    <th scope="col">CRÉDITOS ACADÉMICOS</th>
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Economía Agrícola</th>
                        <td align="center">3</td>
                        <td align="center">5</td>
                        <td align="center"></td>

                    </tr>
                    <tr>
                        <th scope="row">Epidemiología</th>
                        <td align="center">4</td>
                        <td align="center">7</td>
                        <td align="center">	Fitopatología</td>

                    </tr>
                    <tr>
                        <th scope="row">Fitomejoramiento</th>
                        <td align="center" colspan="1">4</td>
                        <td align="center">7</td>
                        <td align="center">Genética</td>

                    </tr>
                    <tr>
                        <th scope="row">Manejo Integrado de Cultivos I/th>
                        <td align="center" colspan="1">4</td>
                        <td align="center">8</td>
                        <td align="center">	Fisiología de Cultivos</td>

                    </tr>
                    <tr>
                        <th scope="row">Metodología de la Investigación</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">4</td>
                        <td align="center">Diseño Experimental</td>
                    </tr>
                    <tr>
                        <th scope="row">Malherbología</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">4</td>
                        <td align="center">Fisiología de Cultivos</td>
                    </tr>
                    <tr>
                        <th scope="row">Optativa II</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">4</td>
                        <td align="center"></td>
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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Manejo Integrado de Cultivos II</th>
                        <td align="center">4</td>
                        <td align="center">8</td>
                        <td align="center">Fisiología de Cultivos</td>
                    </tr>
                    <tr>
                        <th scope="row">Formulación y Evaluación de Proyectos</th>
                        <td align="center">2</td>
                        <td align="center">5</td>
                        <td align="center">Economía Agrícola</td>
                    </tr>
                    <tr>
                        <th scope="row">Extensión y Desarrollo Rural</th>
                        <td align="center" colspan="1">3</td>
                        <td align="center">5</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Manejo de Praderas</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Optativa III</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">4</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Optativa IV</th>
                        <td align="center" colspan="1">2</td>
                        <td align="center">5</td>
                        <td align="center"></td>
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
                    <th scope="col">PRERREQUISITOS</th>
                    </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Administración y Mercadeo</th>
                        <td align="center">3</td>
                        <td align="center">5</td>
                        <td align="center">Economía Agrícola</td>
                    </tr>
                    <tr>
                    <th scope="row">Manejo Integrado de Cultivos III</th>
                    <td align="center">4</td>
                    <td align="center">8</td>
                    <td align="center">Fisiología de Cultivos</td>
                </tr>
                <tr>
                    <th scope="row">Inducción a la Práctica Profesional</th>
                    <td align="center">2</td>
                    <td align="center">5</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Cambio Climático</th>
                    <td align="center">3</td>
                    <td align="center">6</td>
                    <td align="center"></td>
                </tr>
                 <tr>
                    <th scope="row">Facultativa I</th>
                    <td align="center">2</td>
                    <td align="center">5</td>
                    <td align="center"></td>
                </tr>
                 <tr>
                    <th scope="row">Facultativa II</th>
                    <td align="center">2</td>
                    <td align="center">5</td>
                    <td align="center"></td>
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
                <th scope="col">PRERREQUISITOS</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Pasantía</th>
                    <td align="center">5</td>
                    <td align="center">12</td>
                    <td align="center"></td>
                </tr>
            </tbody>
            </table>
          </div>
          <input type="radio" name="radio" id="radio11">
          <div class="tab11">
                <table class="table table-sm">
                <thead id="cabeceratabla">

                </thead>
                <tbody id="cuerpotabla">
                

                    <li>Cumplimiento total de número de créditos del plan de estudios
                    <li>Eficiencia en inglés (dos niveles).
                    <li>Trabajo de grado.
                    </ul><br>
                    <b>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:
                    </b>
                    <li>Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2
                    <li>Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2
                    <li>Formación Humanística (Formación ciudadana) IHS 2  Créditos 2
                    <li>Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2
                    <li>Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 1
                    <li>Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 1
                    <li>Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2
                    </ul>
                    </tr>

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
    <div class="carousel-item">
    <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
</div>
<div class="carousel-item">
    <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
</div> 
<div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>

  </div>
`
    }

    /*############################################ SALUD #################################################*/

    if (idimg == 'imgfacsaludmedicina') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
<div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-inner">

<div class="carousel-item active">
          <img src="img/plantillas/facsalud/medicina/medicinageneral.png" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
        <img src="img/plantillas/facsalud/medicina/medicinaocupacional.jpg" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
          <img src="img/plantillas/facsalud/medicina/medicinaperfilmedico.jpg" class="d-block w-100" alt="...">
      </div>


  <div class="carousel-item" >                  
  <div class="container">
  <div class="tab1" >
                <table class="table table-sm" id="titulo">
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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
      <label for="radio11">XI y XII</label>
      <label for="radio12">Requisitos de Grado</label>
  </div>

  
  <!-- SEMESTRE 1 -->
  <div class="content"> 
                        
      <input type="radio" name="radio" id="radio1" checked >
      <div class="tab1">
                <table class="table table-sm">
                    <thead  id="titulosemestre">
                    <div scope="col">
                                <tr>
                                   <h4>Semestre 1</h4>
                                </tr> 
                    </div> 
                    </thead>
                <thead id="cabeceratabla">                                               
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                    </tr>
                </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Biofísica</th>
                                <td align="center">2</td>
                                <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">Biología molecular</th>
                                <td align="center">6</td>
                                <td align="center">9</td>
                            </tr>
                        <tr>
                            <th scope="row">Bioquímica I</th>
                                <td colspan="1" align="center">4</td>
                                <td align="center">6</td>
                        </tr>
                        <tr>
                            <th scope="row">Primeros Auxilios</th>
                                <td align="center" colspan="1">1</td>
                                <td align="center">2</td>
                        </tr>
                        <tr>
                            <th scope="row">Introducción a la Salud</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">3</td>
                        </tr>
                        <tr>
                            <th scope="row">Historia de la Medicina</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2</td>
                        </tr>
                        
                    </tbody>                        
                </table>
                
                <tr id="footer">
                    <tr>
                    <td colspan="1" ><h6>6 Materias</td>
                    <td colspan="1" ><h6>17 Créditos</td>
                </tr> 
            
    </div>

    <!-- SEMESTRE 2 -->
      <input type="radio" name="radio" id="radio2">
      <div class="tab2">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                        <div scope="col">
                                    <tr>
                                    <h4>Semestre 2</h4>
                                    </tr> 
                        </div> 
                        </thead>
            <thead id="cabeceratabla">
            <tr>
                        <th scope="col" >ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                        <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row"> Anatomía I</th>
                <td align="center">7</td>
                <td align="center">10</td>
                <td align="center">Bioquímica I y Biología Molecular</td>
            </tr>
            <tr>
                <th scope="row">Embriología</th>
                <td align="center">1</td>
                <td align="center">1</td>
                <td align="center">Bioquímica I y Biología Molecular</td>
            </tr>
            <tr>
                <th scope="row">Histología</th>
                <td colspan="1"align="center">3</td>
                <td align="center">5</td>
                <td align="center">Bioquímica I y Biología Molecular</td>
            </tr>
            <tr>
                <th scope="row">Bioquímica II</th>
                <td align="center"colspan="1" >4</td>
                <td align="center">6</td>
                <td align="center">Bioquímica I y Biología Molecular</td>
            </tr>
            <tr>
                <th scope="row">Sociedad y Salud</th>
                <td align="center" colspan="1">2</td>
                <td align="center" >3</td>
                <td align="center">Introducción a la Salud e Historia de la Medicina</td>
            </tr>
            <tr>
                <th scope="row">Salud Mental I</th>
                <td align="center" colspan="1">2</td>
                <td align="center" >2</td>
                <td align="center">Introducción a la Salud</td>
            </tr>
        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>6 Materias</td>
                    <td colspan="1" ><h6>19 Créditos</td>
        </tr> 
      </div>
      
<!-- SEMESTRE 3 -->
      <input type="radio" name="radio" id="radio3">
      <div class="tab3">
            <table class="table table-sm">
            <thead  id="titulosemestre">
            <div scope="col">
                        <tr>
                        <h4>Semestre 3</h4>
                        </tr> 
            </div> 
            </thead>
<thead id="cabeceratabla">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Anatomía II</th>
                    <td align="center">7</td>
                    <td align="center">10</td>
                    <td align="center">Anatomía I</td>
                </tr>
                <tr>
                    <th scope="row">Fisiología I</th>
                    <td align="center">3</td>
                    <td align="center">4</td>
                    <td align="center">Anatomía I, Histología y Biofísica</td>
                </tr>
                <tr>
                    <th scope="row">Neuroanatomía</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">3</td>
                    <td align="center">Anatomía I y Embriología</td>
                </tr>
                <tr>
                    <th scope="row">Inmunología</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">3</td>
                    <td align="center">Bioquímica II e Histología</td>
                </tr>
                <tr>
                    <th scope="row">Comunidad y Salud</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">3</td>
                    <td align="center">Sociedad y Salud</td>
                </tr>

                <tr>
                    <th scope="row">Bioética I</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2</td>
                    <td align="center">Salud Mental I</td>
                </tr>

                <tr>
                    <th scope="row">Bioestadística</th>
                    <td colspan="1" align="center">4</td>
                    <td align="center">6</td>
                    <td align="center">Historia de la Medicina</td>
                </tr>
                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>7 Materias</td>
                <td colspan="1" ><h6>22 Créditos</td>
            </tr> 
      </div>
      
      <!-- SEMESTRE 4 -->
      <input type="radio" name="radio" id="radio4">
      <div class="tab4">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 4</h4>
                        </tr> 
                </div> 
            </thead>
        
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
          </thead>
            <tbody id="cuerpotabla">
            <tr>
                        <th scope="row">Patología I</th>
                        <td align="center">4</td>
                        <td align="center">6</td>
                        <td align="center">Anatomía II y Fisiología I</td>
                    </tr>
                    <tr>
                        <th scope="row">Fisiología II</th>
                        <td align="center">3</td>
                        <td align="center">4</td>
                        <td align="center">Fisiología I</td>
                    </tr>
                    <tr>
                        <th scope="row">Genética</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">6</td>
                        <td align="center">Inmunología</td>
                    </tr>
                    <tr>
                        <th scope="row">Microbiología y Parasitología</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">6</td>
                        <td align="center">Fisiología I e Inmunología</td>
                    </tr>
                    <tr>
                        <th scope="row">Laboratorio Clínico e Imagenología</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">3</td>
                        <td align="center">Fisiología I e Inmunología</td>
                    </tr>
                    <tr>
                        <th scope="row">Salud Ambiental</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">3</td>
                        <td align="center">Comunidad y Salud</td>
                    </tr> 
                    <tr>
                        <th scope="row">Investigación I</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">2</td>
                        <td align="center">Bioestadística</td>
                    </tr>
                                           
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>7 Materias</td>
                <td colspan="1" ><h6>21 Créditos</td>
            </tr> 
      </div>

      <!-- SEMESTRE 5 -->
      <input type="radio" name="radio" id="radio5">
      <div class="tab5">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 5</h4>
                    </tr> 
            </div> 
        </thead>
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr> 
          </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Patología II</th>
                    <td align="center">4</td>
                    <td align="center">6</td>
                    <td align="center">Patología I, Fisiología II y Genética</td>
                </tr>
                <tr>
                    <th scope="row">Semiología</th>
                    <td align="center">10</td>
                    <td align="center">15</td>
                    <td align="center">Patología I, Fisiología II y Laboratorio Clínico e Imagenología</td>
                </tr>
                <tr>
                    <th scope="row">Farmacología</th>
                    <td colspan="1" align="center">5</td>
                    <td align="center">7</td>
                    <td align="center">Patología I, Fisiología II y Microbiología y Parasitología</td>
                </tr>
                <tr>
                    <th scope="row">Salud Ocupacional</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">3</td>
                    <td align="center">Salud Ambiental y Patología I</td>
                </tr>
                <tr>
                    <th scope="row">Bioética II</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2</td>
                    <td align="center">Bioética I</td>
                </tr>
                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>22 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 6 -->
      <input type="radio" name="radio" id="radio6">
      <div class="tab6">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 6</h4>
                        </tr> 
                </div> 
            </thead>
                <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Medicina Interna y Especialidades I</th>
                        <td align="center">10</td>
                        <td align="center">15</td>
                        <td align="center">Patología II - Semiología y Farmacología</td>
                    </tr>
                    <tr>
                        <th scope="row">Familia y Salud</th>
                        <td align="center">2</td>
                        <td align="center">3</td>
                        <td align="center">	Salud Ocupacional</td>
                    </tr>
                    <tr>
                        <th scope="row">Salud Mental II</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">5</td>
                        <td align="center">Salud Mental I</td>
                    </tr>
                    <tr>
                        <th scope="row">Epidemiología</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">3</td>
                        <td align="center">Bioestadística y Semiología</td>
                    </tr>
                   
                </tbody>
                </table>
                <tr id="footer">
                    <td colspan="1" ><h6>4 Materias</td>
                    <td colspan="1" ><h6>17 Créditos</td>
                </tr>
      </div>


      <!-- SEMESTRE 7 -->
      <input type="radio" name="radio" id="radio7">
      <div class="tab7">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 7</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Medicina Interna y Especialidades II</th>
                    <td align="center">10</td>
                    <td align="center">15</td>
                    <td align="center">Medicina Interna y Especialidades I y Epidemiología</td>
                </tr>
                <tr>
                    <th scope="row">Electiva I</th>
                    <td align="center">2</td>
                    <td align="center">3</td>
                    <td align="center">Medicina Interna y Especialidades I y Epidemiología</td>
                </tr>
                <tr>
                    <th scope="row">Administración</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">3</td>
                    <td align="center">Familia y Salud</td>
                </tr>
                <tr>
                    <th scope="row">Proyectos de Investigación I</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">3</td>
                    <td align="center">Epidemiología</td>
                </tr>
               
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>4 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 8 -->
      <input type="radio" name="radio" id="radio8">
      <div class="tab8">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 8</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Cirugía General</th>
                    <td align="center">7</td>
                    <td align="center">11</td>
                    <td align="center">Medicina Interna y Especialidades II</td>
                </tr>
                <tr>
                    <th scope="row">Especialidades Quirúrgicas I (ORT - ANES - PLT - NEURQx)</th>
                    <td align="center">7</td>
                    <td align="center">11</td>
                    <td align="center">	Medicina Interna y Especialidades II</td>
                </tr>
                <tr>
                    <th scope="row">Electiva II</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">3</td>
                    <td align="center">Medicina Interna y Especialidades II y Proyectos de Investigación I</td>
                </tr>
                <tr>
                    <th scope="row">Salud Mental III</th>
                    <td align="center" colspan="1">4</td>
                    <td align="center">6</td>
                    <td align="center">Salud Mental II</td>
                </tr>
                <tr>
                    <th scope="row">Proyectos de Investigación II</th>
                    <td align="center" colspan="1">2</td>
                    <td align="center">3</td>
                    <td align="center">Proyectos de Investigación I</td>
                </tr>         
                
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>17 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 9 -->
      <input type="radio" name="radio" id="radio9">
      <div class="tab9">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 9</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Gineco-Obstetricia</th>
                    <td align="center">9</td>
                    <td align="center">14</td>
                    <td align="center">Cirugía General</td>
                </tr>
                <tr>
                    <th scope="row">Especialidades Quirúrgicas II (ANES - ORL - OFT - URO)</th>
                    <td align="center">7</td>
                    <td align="center">11</td>
                    <td align="center">Cirugía General y Especialidades Quirúrgicas I (ORT - ANES - PLT - NEURQx)</td>
                </tr>
                <tr>
                    <th scope="row">Electiva III</th>
                    <td align="center">2</td>
                    <td align="center">3</td>
                    <td align="center">Cirugía General y Proyectos de Investigación II</td>
                </tr>
                <tr>
                    <th scope="row">Constitución Política y Legislación en Salud</th>
                    <td align="center">2</td>
                    <td align="center">2</td>
                    <td align="center">Administración</td>
                </tr>
                <tr>
                    <th scope="row">Proyectos de Investigación III</th>
                    <td align="center">2</td>
                    <td align="center">3</td>
                    <td align="center">Proyectos de Investigación II</td>
                </tr>
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>22 Créditos</td>
            </tr>
      </div>


      <!-- SEMESTRE 10 -->
      <input type="radio" name="radio" id="radio10">
      <div class="tab10">
        <table class="table table-sm">
        <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 10</h4>
                        </tr> 
                </div> 
        </thead>
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Pediatría</th>
                <td align="center">10</td>
                <td align="center">15</td>
                <td align="center">Gineco - Obstetricia y Especialidades Quirúrgicas II (ANES - ORL - OFT - URO)</td>
            </tr>
            <tr>
                <th scope="row">Medicina Legal</th>
                <td align="center">3</td>
                <td align="center">4</td>
                <td align="center">Gineco - Obstetricia y Especialidades Quirúrgicas II (ANES - ORL - OFT - URO)</td>
            </tr>
            <tr>
                <th scope="row">Medicinas Alternativas y Tradicionales</th>
                <td align="center">2</td>
                <td align="center">3</td>
                <td align="center">Gineco - Obstetricia</td>
            </tr>
            <tr>
                <th scope="row">Bioética III</th>
                <td align="center">2</td>
                <td align="center">2</td>
                <td align="center">Bioética II y Constitución Política y Legislación en Salud</td>
            </tr>
        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>4 Materias</td>
                    <td colspan="1" ><h6>17 Créditos</td>
        </tr>
      </div>


      <!-- SEMESTRE 11 Y 12 -->

      <input type="radio" name="radio" id="radio11">
      <div class="tab11">
        <table class="table table-sm">
        <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 11 y 12</h4>
                        </tr> 
                </div> 
        </thead>
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Internado Rotatorio</th>
                <td align="center">70</td>
                <td align="center">Todas las asignaturas del Plan de Estudios</td>
            </tr>
        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>1 Materias</td>
                    <td colspan="1" ><h6>70 Créditos</td>
        </tr>
      </div>


      <!-- REQUISITOS DE GRADO -->
      <input type="radio" name="radio" id="radio12">
      <div class="tab12">
            <table class="table table-sm">
            <thead id="cabeceratabla">
            <div scope="col">
            <tr>
                <h4>Requisitos de grado</h4>
            </tr> 
    </div> 
            </thead>
            <tbody id="cuerpotabla">
                <th scope="row" align="left">
                <li>Cumplimiento total de número de créditos del plan de estudios</li>
                <li>Eficiencia en inglés.</li>
                <li>Cumplimiento de todos los requisitos legales y administrativos para optar al título.</li>
                
                <li>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</li>
                <li>1. Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2</li>
                <li>2. Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2</li>
                <li>3. Formación Humanística (Formación ciudadana) IHS 2  Créditos 2</li>
                <li>4. Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2</li>
                <li>5. Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 2</li>
                <li>6. Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 2</li>
                <li>7. Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2</li>
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
</div>
`
    }

    /*############################################ SALUD #################################################*/

    if (idimg == 'imgfacsaludpromsalud') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
<div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-inner">

<div class="carousel-item active">
          <img src="img/plantillas/facsalud/promsalud/promsaludgeneral.png" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
        <img src="img/plantillas/facsalud/promsalud/promsaludocupacional.png" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
          <img src="img/plantillas/facsalud/promsalud/promsaludperfil.png" class="d-block w-100" alt="...">
      </div>


  <div class="carousel-item" >                  
  <div class="container">
  <div class="tab1" >
                <table class="table table-sm" id="titulo">
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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
      <label for="radio12">Requisitos de Grado</label>
  </div>

  
  <!-- SEMESTRE 1 -->
  <div class="content"> 
                        
      <input type="radio" name="radio" id="radio1" checked >
      <div class="tab1">
                <table class="table table-sm">
                    <thead  id="titulosemestre">
                    <div scope="col">
                                <tr>
                                   <h4>Semestre 1</h4>
                                </tr> 
                    </div> 
                    </thead>
                <thead id="cabeceratabla">                                               
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS<br>TEORÍA PRÁCTICA</th>
                    </tr>
                </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Proyecto Formativo I</th>
                                <td align="center">3</td>
                                <td align="center">2/3</td>
                        </tr>
                        <tr>
                            <th scope="row">Salud Pública y Promoción de la Salud I</th>
                                <td align="center">1</td>
                                <td align="center">2/0</td>
                            </tr>
                        <tr>
                            <th scope="row">Biología</th>
                                <td colspan="1" align="center">2</td>
                                <td align="center">2/2</td>
                        </tr>
                        <tr>
                            <th scope="row">Psicología del Ciclo Vital</th>
                                <td align="center" colspan="1">2</td>
                                <td align="center">3/0</td>
                        </tr>
                        <tr>
                            <th scope="row">Morfofisiología</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">2/2</td>
                        </tr>
                        <tr>
                            <th scope="row">Antropología</th>
                            <td colspan="1" align="center">2</td>
                            <td align="center">3/0</td>
                        </tr>
                        <tr>
                            <th scope="row">Ética</th>
                            <td colspan="1" align="center">1</td>
                            <td align="center">2/0</td>
                        </tr>
                        
                    </tbody>                        
                </table>
                
                <tr id="footer">
                    <tr>
                    <td colspan="1" ><h6>7 Materias</td>
                    <td colspan="1" ><h6>13 Créditos</td>
                </tr> 
            
    </div>

    <!-- SEMESTRE 2 -->
      <input type="radio" name="radio" id="radio2">
      <div class="tab2">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                        <div scope="col">
                                    <tr>
                                    <h4>Semestre 2</h4>
                                    </tr> 
                        </div> 
                        </thead>
            <thead id="cabeceratabla">
            <tr>
                        <th scope="col" >ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                        <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Proyecto Formativo II</th>
                <td align="center">2</td>
                <td align="center">2/2</td>
                <td align="center"></td>
            </tr>
            <tr>
                <th scope="row">Salud Pública y Promoción de la Salud II</th>
                <td align="center">2</td>
                <td align="center">2/2</td>
                <td align="center">Salud Pública y Promoción de la Salud I</td>
            </tr>
            <tr>
                <th scope="row">Microbiología</th>
                <td colspan="1"align="center">2</td>
                <td align="center">2/2</td>
                <td align="center">Biología</td>
            </tr>
            <tr>
                <th scope="row">Sociología</th>
                <td align="center"colspan="1" >2</td>
                <td align="center">3/0</td>
                <td align="center">Bioquímica I y Biología Molecular</td>
            </tr>
            <tr>
                <th scope="row">Psicología de la Salud</th>
                <td align="center" colspan="1">2</td>
                <td align="center" >3/0</td>
                <td align="center"></td>
            </tr>
            <tr>
                <th scope="row">Comunidad, Familia y Salud</th>
                <td align="center" colspan="1">2</td>
                <td align="center" >2/2</td>
                <td align="center"></td>
            </tr>
            <tr>
                <th scope="row">Estadística</th>
                <td align="center" colspan="1">2</td>
                <td align="center" >2/2</td>
                <td align="center"></td>
            </tr>
        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>7 Materias</td>
                    <td colspan="1" ><h6>14 Créditos</td>
        </tr> 
      </div>
      
<!-- SEMESTRE 3 -->
      <input type="radio" name="radio" id="radio3">
      <div class="tab3">
            <table class="table table-sm">
            <thead  id="titulosemestre">
            <div scope="col">
                        <tr>
                        <h4>Semestre 3</h4>
                        </tr> 
            </div> 
            </thead>
<thead id="cabeceratabla">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Proyecto Formativo III</th>
                    <td align="center">2</td>
                    <td align="center">2/2</td>
                    <td align="center">Proyecto Formativo II</td>
                </tr>
                <tr>
                    <th scope="row">Salud Pública y Promoción de la Salud III</th>
                    <td align="center">3</td>
                    <td align="center">3/2</td>
                    <td align="center">Salud Pública y Promoción de la Salud II</td>
                </tr>
                <tr>
                    <th scope="row">Sistemas de Información</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2/2</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Sistema General de Seguridad Social en Salud</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">3/0</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Educación y Comunicación para la Salud I</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3/2</td>
                    <td align="center"></td>
                </tr>

                <tr>
                    <th scope="row">Epidemiología</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2/2</td>
                    <td align="center"></td>
                </tr>

                <tr>
                    <th scope="row">Electiva I</th>
                    <td colspan="1" align="center">1</td>
                    <td align="center">2/0</td>
                    <td align="center">Historia de la Medicina</td>
                </tr>
                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>7 Materias</td>
                <td colspan="1" ><h6>15 Créditos</td>
            </tr> 
      </div>
      
      <!-- SEMESTRE 4 -->
      <input type="radio" name="radio" id="radio4">
      <div class="tab4">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 4</h4>
                        </tr> 
                </div> 
            </thead>
        
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
          </thead>
            <tbody id="cuerpotabla">
            <tr>
                        <th scope="row">Proyecto Formativo IV</th>
                        <td align="center">3</td>
                        <td align="center">2/4</td>
                        <td align="center">Proyecto Formativo III</td>
                    </tr>
                    <tr>
                        <th scope="row">Salud Pública y Promoción de la Salud IV</th>
                        <td align="center">3</td>
                        <td align="center">3/2</td>
                        <td align="center">Salud Pública y Promoción de la Salud III</td>
                    </tr>
                    <tr>
                        <th scope="row">Educación y Comunicación para la Salud II</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">3/2</td>
                        <td align="center">Educación y Comunicación para la Salud I</td>
                    </tr>
                    <tr>
                        <th scope="row">Nutrición</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">3/0</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Ecología y Formación Ambiental</th>
                        <td colspan="1" align="center">1</td>
                        <td align="center">3/0</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Procesos Comunitarios</th>
                        <td colspan="1" align="center">2</td>
                        <td align="center">3/0</td>
                        <td align="center"></td>
                    </tr> 
                    <tr>
                        <th scope="row">Electiva II</th>
                        <td colspan="1" align="center">1</td>
                        <td align="center">2/0</td>
                        <td align="center"></td>
                    </tr>
                                           
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>7 Materias</td>
                <td colspan="1" ><h6>15 Créditos</td>
            </tr> 
      </div>

      <!-- SEMESTRE 5 -->
      <input type="radio" name="radio" id="radio5">
      <div class="tab5">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 5</h4>
                    </tr> 
            </div> 
        </thead>
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr> 
          </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Proyecto Formativo V</th>
                    <td align="center">3</td>
                    <td align="center">2/4</td>
                    <td align="center">Proyecto Formativo IV</td>
                </tr>
                <tr>
                    <th scope="row">Salud Pública y Promoción de la Salud V</th>
                    <td align="center">3</td>
                    <td align="center">2/3</td>
                    <td align="center">Salud Pública y Promoción de la Salud IV</td>
                </tr>
                <tr>
                    <th scope="row">Educación y Comunicación para la Salud III</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">3/2</td>
                    <td align="center">Educación y Comunicación para la Salud II</td>
                </tr>
                <tr>
                    <th scope="row">Actividad Física</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2/2</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Saneamiento Básico</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2/2</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Producción de Audiovisuales</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">2/3</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Electiva III</th>
                    <td colspan="1" align="center">1</td>
                    <td align="center">3/0</td>
                    <td align="center"></td>
                </tr>
                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>7 Materias</td>
                <td colspan="1" ><h6>16 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 6 -->
      <input type="radio" name="radio" id="radio6">
      <div class="tab6">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 6</h4>
                        </tr> 
                </div> 
            </thead>
                <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Práctica Integrada</th>
                        <td align="center">10</td>
                        <td align="center">0/15</td>
                        <td align="center">Aprobación de todos los cursos del plan de estudios hasta quinto semestre</td>
                    </tr>
                    <tr>
                        <th scope="row">Teorías Especificas</th>
                        <td align="center">4</td>
                        <td align="center">6/0</td>
                        <td align="center">Aprobación de todos los cursos del plan de estudios hasta quinto semestre</td>
                    </tr>
                    <tr>
                        <th scope="row">Política Pública y Gestión Local</th>
                        <td align="center">2</td>
                        <td align="center">2/0</td>
                        <td align="center">Aprobación de todos los cursos del plan de estudios hasta quinto semestre</td>
                    </tr>
                   
                </tbody>
                </table>
                <tr id="footer">
                    <td colspan="1" ><h6>3 Materias</td>
                    <td colspan="1" ><h6>18 Créditos</td>
                </tr>
      </div>


      <!-- REQUISITOS DE GRADO -->
      <input type="radio" name="radio" id="radio12">
      <div class="tab12">
            <table class="table table-sm">
            <thead id="cabeceratabla">
            <div scope="col">
            <tr>
                <h4>Requisitos de grado</h4>
            </tr> 
    </div> 
            </thead>
            <tbody id="cuerpotabla">
                <th scope="row" align="left">
                <li>Cumplimiento total de número de créditos del plan de estudios</li>
                <li>Eficiencia en inglés(Dos niveles).</li>
                <li>Cumplimiento de todos los requisitos legales y administrativos para optar al título.</li>
                
                <li>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</li>
                <li>1. Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2</li>
                <li>2. Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2</li>
                <li>3. Formación Humanística (Formación ciudadana) IHS 2  Créditos 2</li>
                <li>4. Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2</li>
                <li>5. Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 2</li>
                <li>6. Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 2</li>
                <li>7. Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2</li>
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
</div>
`
    }

    /*############################################ SISTEMAS #################################################*/

    if (idimg == 'imgfacingsistemas') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
<div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-inner">

      <div class="carousel-item active">
          <img src="img/plantillas/facing/Sistemas/sistemasgeneral.png" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
          <img src="img/plantillas/facing/Sistemas/sistemasocupacional.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="img/plantillas/facing/Sistemas/sistemasprofesional.png" class="d-block w-100" alt="...">
      </div>

  <div class="carousel-item" >                  
  <div class="container">
  <div class="tab1" >
                <table class="table table-sm" id="titulo">
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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

  
  <!-- SEMESTRE 1 -->
  <div class="content"> 
                        
      <input type="radio" name="radio" id="radio1" checked >
      <div class="tab1">
                <table class="table table-sm">
                    <thead  id="titulosemestre">
                    <div scope="col">
                                <tr>
                                   <h4>Semestre 1</h4>
                                </tr> 
                    </div> 
                    </thead>
                <thead id="cabeceratabla">                                               
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS<br> <p><small>TEORÍA/PRÁCTICA</small></p></th>
                    </tr>
                </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Programación I</th>
                                <td align="center">4</td>
                                <td align="center">2/4</td>
                        </tr>
                        <tr>
                            <th scope="row">Introducción a la ingeniería en sistemas</th>
                                <td align="center">3</td>
                                <td align="center">4/0</td>
                            </tr>
                        <tr>
                            <th scope="row">Teoría general de sistemas</th>
                                <td colspan="1" align="center">3</td>
                                <td align="center">4/0</td>
                        </tr>
                        <tr>
                            <th scope="row">Matemáticas generales</th>
                                <td align="center" colspan="1">3</td>
                                <td align="center">4/0</td>
                        </tr>
                        <tr>
                            <th scope="row">Lógica matemática</th>
                            <td colspan="1" align="center">3</td>
                            <td align="center">4/0</td>
                        </tr>
                        
                    </tbody>                        
                </table>
                
                <tr id="footer">
                    <tr>
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
                </tr> 
            
    </div>

    <!-- SEMESTRE 2 -->
      <input type="radio" name="radio" id="radio2">
      <div class="tab2">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                        <div scope="col">
                                    <tr>
                                    <h4>Semestre 2</h4>
                                    </tr> 
                        </div> 
                        </thead>
            <thead id="cabeceratabla">
            <tr>
                        <th scope="col" >ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                        <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Programación II</th>
                <td align="center">4</td>
                <td align="center">2/4</td>
                <td align="center">Programación I</td>
            </tr>
            <tr>
                <th scope="row">Metodología de la investigación</th>
                <td align="center">3</td>
                <td align="center">4/0</td>
                <td align="center">Bioquímica I y Biología Molecular</td>
            </tr>
            <tr>
                <th scope="row">Calculo diferencial</th>
                <td colspan="1"align="center">3</td>
                <td align="center">4/0</td>
                <td align="center">Matemáticas generales</td>
            </tr>
            <tr>
                <th scope="row">Algebra lineal</th>
                <td align="center"colspan="1" >3</td>
                <td align="center">4/0</td>
                <td align="center">Lógica Matemática</td>
            </tr>
            <tr>
                <th scope="row">Ingeniería economica</th>
                <td align="center" colspan="1">3</td>
                <td align="center" >4/0</td>
                <td align="center"></td>
            </tr>

        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
        </tr> 
      </div>
      
<!-- SEMESTRE 3 -->
      <input type="radio" name="radio" id="radio3">
      <div class="tab3">
            <table class="table table-sm">
            <thead  id="titulosemestre">
            <div scope="col">
                        <tr>
                        <h4>Semestre 3</h4>
                        </tr> 
            </div> 
            </thead>
<thead id="cabeceratabla">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Programación III</th>
                    <td align="center">4</td>
                    <td align="center">2/4</td>
                    <td align="center">Programación II</td>
                </tr>
                <tr>
                    <th scope="row">Ingeniería de software I</th>
                    <td align="center">3</td>
                    <td align="center">2/2</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Calculo integral</th>
                    <td colspan="1" align="center">2</td>
                    <td align="center">3</td>
                    <td align="center">Calculo diferencial</td>
                </tr>
                <tr>
                    <th scope="row">Física I</th>
                    <td colspan="1" align="center">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Calculo diferencial</td>
                </tr>
                <tr>
                    <th scope="row">Probabilidad y estadística</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Algebra lineal</td>
                </tr>

                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>17 Créditos</td>
            </tr> 
      </div>
      
      <!-- SEMESTRE 4 -->
      <input type="radio" name="radio" id="radio4">
      <div class="tab4">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 4</h4>
                        </tr> 
                </div> 
            </thead>
        
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
          </thead>
            <tbody id="cuerpotabla">
            <tr>
                        <th scope="row">Estructura de datos</th>
                        <td align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center">Programación III</td>
                    </tr>
                    <tr>
                        <th scope="row">Ingeniería de software II</th>
                        <td align="center">3</td>
                        <td align="center">2/2</td>
                        <td align="center">Ingeniería de software I</td>
                    </tr>
                    <tr>
                        <th scope="row">Sistema de base de datos</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Cálculo de varias variables</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4/0</td>
                        <td align="center">Calculo integral</td>
                    </tr>
                    <tr>
                        <th scope="row">Física II</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center">Física II</td>
                    </tr>
                    
                                           
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>18 Créditos</td>
            </tr> 
      </div>

      <!-- SEMESTRE 5 -->
      <input type="radio" name="radio" id="radio5">
      <div class="tab5">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 5</h4>
                    </tr> 
            </div> 
        </thead>
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr> 
          </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Administración de base de datos</th>
                    <td align="center">3</td>
                    <td align="center">0/4</td>
                    <td align="center">Sistemas de bases de datos</td>
                </tr>
                <tr>
                    <th scope="row">Ingeniería de software III</th>
                    <td align="center">3</td>
                    <td align="center">2/2</td>
                    <td align="center">Ingeniería de software II</td>
                </tr>
                <tr>
                    <th scope="row">Investigación de operaciones</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">2/2</td>
                    <td align="center">Algebra lineal</td>
                </tr>
                <tr>
                    <th scope="row">Ecuaciones diferenciales</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Salud Ambiental y Patología I</td>
                </tr>
                <tr>
                    <th scope="row">Administración de empresas</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Ingeniería económica</td>
                </tr>
                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>15 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 6 -->
      <input type="radio" name="radio" id="radio6">
      <div class="tab6">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 6</h4>
                        </tr> 
                </div> 
            </thead>
                <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Métodos numéricos</th>
                        <td align="center">3</td>
                        <td align="center">2/2</td>
                        <td align="center">Calculo diferencial</td>
                    </tr>
                    <tr>
                        <th scope="row">Auditoria y seguridad informática</th>
                        <td align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Computación gráfica</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">0/4</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Circuitos electrónicos</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">2/2</td>
                        <td align="center">Física II</td>
                    </tr>
                    <tr>
                        <th scope="row">Sistemas operativos</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center">Física II</td>
                    </tr>
                   
                </tbody>
                </table>
                <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
                </tr>
      </div>


      <!-- SEMESTRE 7 -->
      <input type="radio" name="radio" id="radio7">
      <div class="tab7">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 7</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Sistemas inteligentes</th>
                    <td align="center">3</td>
                    <td align="center">2/2</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Lenguajes formales y autómatas</th>
                    <td align="center">3</td>
                    <td align="center">2/2</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Modelamiento y simulación</th>
                    <td align="center" colspan="1">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Probabilidad y estadistica</td>
                </tr>
                <tr>
                    <th scope="row">Redes de computadores</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">2/2</td>
                    <td align="center">Sistemas Operativos</td>
                </tr>
                <tr>
                    <th scope="row">Arquitectura de computadores</th>
                    <td align="center" colspan="1">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Circuitos elecrónicos</td>
                </tr>
               
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>17 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 8 -->
      <input type="radio" name="radio" id="radio8">
      <div class="tab8">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 8</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Sistemas basados en conocimiento</th>
                    <td align="center">3</td>
                    <td align="center">2/2</td>
                    <td align="center">Sistemas inteligentes</td>
                </tr>
                <tr>
                    <th scope="row">Sistemas y servicios telemáticos</th>
                    <td align="center">3</td>
                    <td align="center">0/4</td>
                    <td align="center">Redes de computores</td>
                </tr>
                <tr>
                    <th scope="row">Formulación y evaluación de proyectos</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Administración de empresas</td>
                </tr>
                <tr>
                    <th scope="row">Electiva</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">0/4</td>
                    <td align="center">Aprobado 75% plan de estudios</td>
                </tr>
                <tr>
                    <th scope="row">Electiva</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">0/4</td>
                    <td align="center">Aprobado 75% plan de estudios</td>
                </tr>     
                
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>15 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 9 -->
      <input type="radio" name="radio" id="radio9">
      <div class="tab9">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 9</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Modelos de computación</th>
                    <td align="center">3</td>
                    <td align="center">2/2</td>
                    <td align="center">Sistemas y servicios telemáticos</td>
                </tr>
                <tr>
                    <th scope="row">Emprendimiento</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Proyecto de investigación I</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Cirugía General y Proyectos de Investigación II</td>
                </tr>
                <tr>
                    <th scope="row">Electiva</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">0/4</td>
                    <td align="center">Aprobado 75% plan de estudios</td>
                </tr>
                <tr>
                    <th scope="row">Electiva</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">0/4</td>
                    <td align="center">Aprobado 75% plan de estudios</td>
                </tr>  
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>15 Créditos</td>
            </tr>
      </div>


      <!-- SEMESTRE 10 -->
      <input type="radio" name="radio" id="radio10">
      <div class="tab10">
        <table class="table table-sm">
        <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 10</h4>
                        </tr> 
                </div> 
        </thead>
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Ingeniería legal</th>
                <td align="center">3</td>
                <td align="center">4/0</td>
                <td align="center"></td>
            </tr>
            <tr>
                <th scope="row">Proyecto de investigación II</th>
                <td align="center">3</td>
                <td align="center">4/0</td>
                <td align="center">Proyecto de investigación I</td>
            </tr>
            <tr>
            <th scope="row">Electiva</th>
            <td align="center" colspan="1">3</td>
            <td align="center">0/4</td>
            <td align="center">Aprobado 75% plan de estudios</td>
            </tr>
            <tr>
                <th scope="row">Electiva</th>
                <td align="center" colspan="1">3</td>
                <td align="center">0/4</td>
                <td align="center">Aprobado 75% plan de estudios</td>
            </tr>  
        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>4 Materias</td>
                    <td colspan="1" ><h6>17 Créditos</td>
        </tr>
      </div>


      <!-- SEMESTRE 11 Y 12 -->

      <input type="radio" name="radio" id="radio11">
      <div class="tab11">
        <table class="table table-sm">
        <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 11 y 12</h4>
                        </tr> 
                </div> 
        </thead>
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Internado Rotatorio</th>
                <td align="center">70</td>
                <td align="center">Todas las asignaturas del Plan de Estudios</td>
            </tr>
        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>1 Materias</td>
                    <td colspan="1" ><h6>70 Créditos</td>
        </tr>
      </div>


      <!-- REQUISITOS DE GRADO -->
      <input type="radio" name="radio" id="radio12">
      <div class="tab12">
            <table class="table table-sm">
            <thead id="cabeceratabla">
            <div scope="col">
            <tr>
                <h4>Requisitos de grado</h4>
            </tr> 
    </div> 
            </thead>
            <tbody id="cuerpotabla">
                <th scope="row" align="left">
                <li>Cumplimiento total de número de créditos del plan de estudios</li>
                <li>Eficiencia en inglés.</li>
                <li>Cumplimiento de todos los requisitos legales y administrativos para optar al título.</li>
                
                <li>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</li>
                <li>1. Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2</li>
                <li>2. Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2</li>
                <li>3. Formación Humanística (Formación ciudadana) IHS 2  Créditos 2</li>
                <li>4. Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2</li>
                <li>5. Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 2</li>
                <li>6. Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 2</li>
                <li>7. Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2</li>
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
</div>
`
    }

    /*############################################ ELECTRÓNICA #################################################*/

    if (idimg == 'imgfacingelectronica') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
<div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-inner">

      <div class="carousel-item active">
          <img src="img/plantillas/facing/electronica/electronicageneral.png" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
          <img src="img/plantillas/facing/electronica/electronicaocupacional.png" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="img/plantillas/facing/electronica/electronicaprofesional.png" class="d-block w-100" alt="...">
      </div>

  <div class="carousel-item" >                  
  <div class="container">
  <div class="tab1" >
                <table class="table table-sm" id="titulo">
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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

  
  <!-- SEMESTRE 1 -->
  <div class="content"> 
                        
      <input type="radio" name="radio" id="radio1" checked >
      <div class="tab1">
                <table class="table table-sm">
                    <thead  id="titulosemestre">
                    <div scope="col">
                                <tr>
                                   <h4>Semestre 1</h4>
                                </tr> 
                    </div> 
                    </thead>
                <thead id="cabeceratabla">                                               
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS<br> <p><small>TEORÍA/PRÁCTICA</small></p></th>
                    </tr>
                </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Álgebra Lineal</th>
                                <td align="center">3</td>
                                <td align="center">4/0</td>
                        </tr>
                        <tr>
                            <th scope="row">Cálculo Diferencial</th>
                                <td align="center">3</td>
                                <td align="center">4/0</td>
                        </tr>
                        <tr>
                            <th scope="row">Fundamentos de Programación</th>
                                <td align="center" colspan="1">3</td>
                                <td align="center">2/2</td>
                        </tr>
                        <tr>
                            <th scope="row">Introducción a la Ingeniería Electrónica</th>
                            <td colspan="1" align="center">1</td>
                            <td align="center">2/0</td>
                        </tr>
                        <tr>
                            <th scope="row">Física I</th>
                            <td colspan="1" align="center">4</td>
                            <td align="center">4/2</td>
                        </tr>
                        <tr>
                            <th scope="row">Simulación y Medidas I</th>
                            <td colspan="1" align="center">1</td>
                            <td align="center">0/2</td>
                        </tr>
                    </tbody>                        
                </table>
                
                <tr id="footer">
                    <tr>
                    <td colspan="1" ><h6>6 Materias</td>
                    <td colspan="1" ><h6>15 Créditos</td>
                </tr> 
            
    </div>

    <!-- SEMESTRE 2 -->
      <input type="radio" name="radio" id="radio2">
      <div class="tab2">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                        <div scope="col">
                                    <tr>
                                    <h4>Semestre 2</h4>
                                    </tr> 
                        </div> 
                        </thead>
            <thead id="cabeceratabla">
            <tr>
                        <th scope="col" >ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                        <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Cálculo Integral</th>
                <td align="center">3</td>
                <td align="center">4/0</td>
                <td align="center">Cálculo Diferencial</td>
            </tr>
            <tr>
                <th scope="row">Física II</th>
                <td align="center">4</td>
                <td align="center">4/2</td>
                <td align="center">Física I</td>
            </tr>
            <tr>
                <th scope="row">Circuitos I</th>
                <td align="center" colspan="1">4</td>
                <td align="center" >4/2</td>
                <td align="center">Álgebra Linea</td>
            </tr>
            <tr>
                <th scope="row">Programación de Computadores</th>
                <td colspan="1"align="center">3</td>
                <td align="center">2/2</td>
                <td align="center">Fundamentos de Programación</td>
            </tr>
            <tr>
                <th scope="row">Lógica Matemática</th>
                <td colspan="1"align="center">1</td>
                <td align="center">2/0</td>
                <td align="center">Matemáticas generales</td>
            </tr>
            <tr>
                <th scope="row">Simulación y Medidas II</th>
                <td align="center"colspan="1" >1</td>
                <td align="center">0/2</td>
                <td align="center">Simulación y Medidas II</td>
            </tr>

        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>6 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
        </tr> 
      </div>
      
<!-- SEMESTRE 3 -->
      <input type="radio" name="radio" id="radio3">
      <div class="tab3">
            <table class="table table-sm">
            <thead  id="titulosemestre">
            <div scope="col">
                        <tr>
                        <h4>Semestre 3</h4>
                        </tr> 
            </div> 
            </thead>
<thead id="cabeceratabla">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Ecuaciones Diferenciales</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Circuitos II</th>
                    <td align="center">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Circuitos I</td>
                </tr>
                <tr>
                    <th scope="row">Electrónica I</th>
                    <td colspan="1" align="center">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Circuitos I</td>
                </tr>
                <tr>
                    <th scope="row">Circuitos Digitales I</th>
                    <td colspan="1" align="center">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Lógica Matemática</td>
                </tr>
                <tr>
                    <th scope="row">Metodología de la Investigación</th>
                    <td colspan="1" align="center">1</td>
                    <td align="center">2/0</td>
                    <td align="center">Introducción a la Ingeniería Electrónica</td>
                </tr>

                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>16 Créditos</td>
            </tr> 
      </div>
      
      <!-- SEMESTRE 4 -->
      <input type="radio" name="radio" id="radio4">
      <div class="tab4">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 4</h4>
                        </tr> 
                </div> 
            </thead>
        
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
          </thead>
            <tbody id="cuerpotabla">
            <tr>
                        <th scope="row">Cálculo Multivariable</th>
                        <td align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center">Ecuaciones Diferenciales</td>
                    </tr>
                    <tr>
                        <th scope="row">Física III</th>
                        <td align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center">Física II</td>
                    </tr>
                    <tr>
                        <th scope="row">Circuitos III</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center">Circuitos II</td>
                    </tr>
                    <tr>
                        <th scope="row">Electrónica II</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center">Electrónica I</td>
                    </tr>
                    <tr>
                        <th scope="row">Circuitos Digitales II</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center">Circuitos Digitales I</td>
                    </tr>
                    
                                           
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>17 Créditos</td>
            </tr> 
      </div>

      <!-- SEMESTRE 5 -->
      <input type="radio" name="radio" id="radio5">
      <div class="tab5">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 5</h4>
                    </tr> 
            </div> 
        </thead>
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr> 
          </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Matemáticas Especiales</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Ecuaciones Diferenciales</td>
                </tr>
                <tr>
                    <th scope="row">Campos</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Física III</td>
                </tr>
                <tr>
                    <th scope="row">Electrónica III</th>
                    <td colspan="1" align="center">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Electrónica II</td>
                </tr>
                <tr>
                    <th scope="row">Física Moderna</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Física II</td>
                </tr>
                <tr>
                    <th scope="row">Probabilidad y Estadística</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Cálculo Integral</td>
                </tr>
                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>16 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 6 -->
      <input type="radio" name="radio" id="radio6">
      <div class="tab6">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 6</h4>
                        </tr> 
                </div> 
            </thead>
                <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Análisis de Sistemas Dinámicos</th>
                        <td align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center">Matemáticas Especiales</td>
                    </tr>
                    <tr>
                        <th scope="row">Teoría de Señales</th>
                        <td align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center">Matemáticas Especiales</td>
                    </tr>
                    <tr>
                        <th scope="row">Instrumentación</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center">Electrónica III</td>
                    </tr>
                    <tr>
                        <th scope="row">Electrónica de Potencia</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center">Circuitos III</td>
                    </tr>
                   
                </tbody>
                </table>
                <tr id="footer">
                    <td colspan="1" ><h6>4 Materias</td>
                    <td colspan="1" ><h6>15 Créditos</td>
                </tr>
      </div>


      <!-- SEMESTRE 7 -->
      <input type="radio" name="radio" id="radio7">
      <div class="tab7">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 7</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Automatización</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Análisis de Sistemas Dinámicos</td>
                </tr>
                <tr>
                    <th scope="row">Comunicaciones I</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Teoría de Señales y Campos</td>
                </tr>
                <tr>
                    <th scope="row">Sistemas de Control</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center">nálisis de Sistemas Dinámicos</td>
                </tr>
                <tr>
                    <th scope="row">Electromedicina</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Haber aprobado 24 asignaturas</td>
                </tr>
               
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>4 Materias</td>
                    <td colspan="1" ><h6>12 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 8 -->
      <input type="radio" name="radio" id="radio8">
      <div class="tab8">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 8</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row"> Electiva I</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Tener aprobadas 21 asignaturas</td>
                </tr>
                <tr>
                    <th scope="row">Administración De Empresa De Ingeniería I</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Profundización I (A&C)</th>
                    <td align="center" colspan="1">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Automatización</td>
                </tr>
                <tr>
                    <th scope="row">Profundización I (EM)</th>
                    <td align="center" colspan="1">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Electromedicina</td>
                </tr>
                <tr>
                    <th scope="row">Comunicaciones II</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Comunicaciones I</td>
                </tr>     
                
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>13 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 9 -->
      <input type="radio" name="radio" id="radio9">
      <div class="tab9">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 9</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Electiva II</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Tener aprobadas 21 asignaturas</td>
                </tr>
                <tr>
                    <th scope="row">Formulación Y Evaluación de Proyectos</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Administración De Empresas De Ingeniería I</td>
                </tr>
                <tr>
                    <th scope="row">Administración De Empresas De Ingeniería II</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Administración De Empresas De Ingeniería I</td>
                </tr>
                <tr>
                    <th scope="row">Profundización II (A&C)</th>
                    <td align="center" colspan="1">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Profundización I (A&C)</td>
                </tr>
                <tr>
                    <th scope="row">Profundización II (EM)</th>
                    <td align="center" colspan="1">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Profundización I (EM)</td>
                </tr>  
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>13 Créditos</td>
            </tr>
      </div>


      <!-- SEMESTRE 10 -->
      <input type="radio" name="radio" id="radio10">
      <div class="tab10">
        <table class="table table-sm">
        <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 10</h4>
                        </tr> 
                </div> 
        </thead>
        <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Electiva III</th>
                <td align="center">3</td>
                <td align="center">4/0</td>
                <td align="center">Tener aprobadas 21 asignaturas</td>
            </tr>
            <tr>
                <th scope="row">Proyecto De Ingeniería Electrónica</th>
                <td align="center">3</td>
                <td align="center">4/0</td>
                <td align="center">Formulación y Evaluación De Proyectos</td>
            </tr>
            <tr>
            <th scope="row">Electiva IV</th>
            <td align="center" colspan="1">3</td>
            <td align="center">4/0</td>
            <td align="center">Tener aprobadas 21 asignaturas</td>
            </tr>
            <tr>
                <th scope="row">Sistema De Gestión de la Calidad</th>
                <td align="center" colspan="1">3</td>
                <td align="center">4/0</td>
                <td align="center">Administración de Empresas De Ingeniería. II</td>
            </tr>  
        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>4 Materias</td>
                    <td colspan="1" ><h6>12 Créditos</td>
        </tr>
      </div>



      <!-- REQUISITOS DE GRADO -->
      <input type="radio" name="radio" id="radio11">
      <div class="tab11">
            <table class="table table-sm">
            <thead id="cabeceratabla">
            <div scope="col">
            <tr>
                <h4>Requisitos de grado</h4>
            </tr> 
    </div> 
            </thead>
            <tbody id="cuerpotabla">
                <th scope="row" align="left">
                <li>Aprobar el plan de estudios</li>
                <li>Cursar y aprobar los créditos de formación humanística y competencias básicas</li>
                <li>Acreditar eficiencia en ingles</li>     
                <li>Presentar y sustentar un trabajo de grado de acuerdo con las normas establecidas</li>
                <li>Cursar y aprobar cuatro asignaturas electivas</li>
                </th>
                
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
</div>
`
    }

    /*############################################ CIVIL #################################################*/

    if (idimg == 'imgfacingcivil') {
        document.getElementById('exampleModalLabel').innerHTML = "";
        document.getElementById('bodymodal').innerHTML = `
    ${text}
<div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
<div class="carousel-inner">

      <div class="carousel-item active">
          <img src="img/plantillas/facing/civil/civilgeneral.jpg" class="d-block w-100" alt="...">
      </div>

      <div class="carousel-item">
          <img src="img/plantillas/facing/civil/civilprofesional.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="img/plantillas/facing/civil/civilocupacional.jpg" class="d-block w-100" alt="...">
      </div>

  <div class="carousel-item" >                  
  <div class="container">
  <div class="tab1" >
                <table class="table table-sm" id="titulo">
                    <thead id="cabeceratabla">
                        <tr>
                            <th scope="col" id="titulo-plan-estudios"><h1>Plan de estudios</h2></th>
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
      <label for="radio11">Requisitos de Grado</label>
  </div>

  
  <!-- SEMESTRE 1 -->
  <div class="content"> 
                        
      <input type="radio" name="radio" id="radio1" checked >
      <div class="tab1">
                <table class="table table-sm">
                    <thead  id="titulosemestre">
                    <div scope="col">
                                <tr>
                                   <h4>Semestre 1</h4>
                                </tr> 
                    </div> 
                    </thead>
                <thead id="cabeceratabla">                                               
                    <tr>
                        <th scope="col">ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS<br> <p><small>TEORÍA/PRÁCTICA</small></p></th>
                    </tr>
                </thead>
                    <tbody id="cuerpotabla">
                        <tr>
                            <th scope="row">Cálculo Diferencial</th>
                                <td align="center">3</td>
                                <td align="center">4/0</td>
                        </tr>
                        <tr>
                            <th scope="row">Programación I</th>
                                <td align="center">4</td>
                                <td align="center">2/4</td>
                            </tr>
                        <tr>
                            <th scope="row">Dibujo Técnico</th>
                                <td colspan="1" align="center">3</td>
                                <td align="center">0/4</td>
                        </tr>
                        <tr>
                            <th scope="row">Química general</th>
                                <td align="center" colspan="1">4</td>
                                <td align="center">3/3</td>
                        </tr>
                        <tr>
                            <th scope="row">Metodología de la Investigación</th>
                            <td colspan="1" align="center">1</td>
                            <td align="center">2/0</td>
                        </tr>
                        
                    </tbody>                        
                </table>
                
                <tr id="footer">
                    <tr>
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>15 Créditos</td>
                </tr> 
            
    </div>

    <!-- SEMESTRE 2 -->
      <input type="radio" name="radio" id="radio2">
      <div class="tab2">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                        <div scope="col">
                                    <tr>
                                    <h4>Semestre 2</h4>
                                    </tr> 
                        </div> 
                        </thead>
            <thead id="cabeceratabla">
            <tr>
                        <th scope="col" >ASIGNATURAS</th>
                        <th scope="col">CRÉDITOS</th>
                        <th scope="col">IHS</th>
                        <th scope="col">PRE-REQUISITO</th>
            </tr>
        </thead>
        <tbody id="cuerpotabla">
            <tr>
                <th scope="row">Cálculo Integral</th>
                <td align="center">3</td>
                <td align="center">4/0</td>
                <td align="center">Cálculo Diferencial</td>
            </tr>
            <tr>
                <th scope="row">Física</th>
                <td align="center">4</td>
                <td align="center">4/2</td>
                <td align="center">Cálculo Diferencial</td>
            </tr>
            <tr>
                <th scope="row">Topografía</th>
                <td colspan="1"align="center">4</td>
                <td align="center">3/3</td>
                <td align="center">Dibujo Técnico</td>
            </tr>
            <tr>
                <th scope="row">Algebra lineal</th>
                <td align="center"colspan="1" >3</td>
                <td align="center">4/0</td>
                <td align="center"></td>
            </tr>
            <tr>
                <th scope="row">Probabilidad y estadística</th>
                <td align="center" colspan="1">3</td>
                <td align="center" >4/0</td>
                <td align="center">Curso de Competencias Matemáticas</td>
            </tr>

        </tbody>
        </table>
        <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>17 Créditos</td>
        </tr> 
      </div>
      
<!-- SEMESTRE 3 -->
      <input type="radio" name="radio" id="radio3">
      <div class="tab3">
            <table class="table table-sm">
            <thead  id="titulosemestre">
            <div scope="col">
                        <tr>
                        <h4>Semestre 3</h4>
                        </tr> 
            </div> 
            </thead>
<thead id="cabeceratabla">
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Ecuaciones Diferenciales</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Cálculo Integral</td>
                </tr>
                <tr>
                    <th scope="row">Mecánica</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Físics I</td>
                </tr>
                <tr>
                    <th scope="row">Geología</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Topografía</td>
                </tr>
                <tr>
                    <th scope="row">Métodos Numéricos</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Programación I y Cálculo Diferencial</td>
                </tr>
                <tr>
                    <th scope="row">Física II</th>
                    <td colspan="1" align="center">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Física I</td>
                </tr>

                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>16 Créditos</td>
            </tr> 
      </div>
      
      <!-- SEMESTRE 4 -->
      <input type="radio" name="radio" id="radio4">
      <div class="tab4">
        <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 4</h4>
                        </tr> 
                </div> 
            </thead>
        
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr>
          </thead>
            <tbody id="cuerpotabla">
            <tr>
                        <th scope="row">Mecánica de Fluidos</th>
                        <td align="center">3</td>
                        <td align="center">4/1</td>
                        <td align="center">Mecánica</td>
                    </tr>
                    <tr>
                        <th scope="row">Geomática</th>
                        <td align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center">Topografía y Programación I</td>
                    </tr>
                    <tr>
                        <th scope="row">Materiales de Construcción</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">3/3</td>
                        <td align="center">Geología y Probabilidad y Estadística</td>
                    </tr>
                    <tr>
                        <th scope="row">Diseño Geométrico de Carreteras</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">0/6</td>
                        <td align="center">Topografía</td>
                    </tr>
                    <tr>
                        <th scope="row">Investigación de Operaciones</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center">Álgebra Lineal</td>
                    </tr>
                    
                                           
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>17 Créditos</td>
            </tr> 
      </div>

      <!-- SEMESTRE 5 -->
      <input type="radio" name="radio" id="radio5">
      <div class="tab5">
        <table class="table table-sm">
        <thead  id="titulosemestre">
            <div scope="col">
                    <tr>
                        <h4>Semestre 5</h4>
                    </tr> 
            </div> 
        </thead>
          <thead id="cabeceratabla">
            <tr>
                <th scope="col">ASIGNATURAS</th>
                <th scope="col">CRÉDITOS</th>
                <th scope="col">IHS</th>
                <th scope="col">PRE-REQUISITO</th>
            </tr> 
          </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Administración de Empresas de Ingeniería</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Resistencia de Materiales</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Mecánica</td>
                </tr>
                <tr>
                    <th scope="row">Hidráulica</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4/1</td>
                    <td align="center">Mecánica de Fluidos</td>
                </tr>
                <tr>
                    <th scope="row">Concretos Asfalticos</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">2/2</td>
                    <td align="center">Materiales de construcción</td>
                </tr>
                <tr>
                    <th scope="row">Hidrología</th>
                    <td colspan="1" align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Probabilidad y Estadistica, Geomática y Mecanica de Fluidos</td>
                </tr>
                
            </tbody>
            </table>
            <tr id="footer">
                <td colspan="1" ><h6>5 Materias</td>
                <td colspan="1" ><h6>15 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 6 -->
      <input type="radio" name="radio" id="radio6">
      <div class="tab6">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 6</h4>
                        </tr> 
                </div> 
            </thead>
                <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
                </thead>
                <tbody id="cuerpotabla">
                    <tr>
                        <th scope="row">Análisis Estructural I</th>
                        <td align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center">Resistencia de Materiales y haber aprobado el cuarto nivel de Inglés o presentar Certificación con Nivel B1 o Superior en Inglés</td>
                    </tr>
                    <tr>
                        <th scope="row">Acueductos y Alcantarillados</th>
                        <td align="center">4</td>
                        <td align="center">6/0</td>
                        <td align="center">Hidráulica</td>
                    </tr>
                    <tr>
                        <th scope="row">Formulación y Evaluación de Proyectos</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center"></td>
                    </tr>
                    <tr>
                        <th scope="row">Mecánica de suelos</th>
                        <td colspan="1" align="center">4</td>
                        <td align="center">4/2</td>
                        <td align="center">Materiales de Construcción y haber aprobado el cuarto nivel de Inglés o presentar certificación con Nivel B1 o Superior en Inglés </td>
                    </tr>
                    <tr>
                        <th scope="row">Electiva I</th>
                        <td colspan="1" align="center">3</td>
                        <td align="center">4/0</td>
                        <td align="center"></td>
                    </tr>
                   
                </tbody>
                </table>
                <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>17 Créditos</td>
                </tr>
      </div>


      <!-- SEMESTRE 7 -->
      <input type="radio" name="radio" id="radio7">
      <div class="tab7">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 7</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Estructuras de Concreto Armado I</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Análisis Estructural I</td>
                </tr>
                <tr>
                    <th scope="row">Análisis Estructural II</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Análisi Estructural I y Métodos Numéricos</td>
                </tr>
                <tr>
                    <th scope="row">Cimentaciones</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Mecánica de Suelos</td>
                </tr>
                <tr>
                    <th scope="row">Pavimentos</th>
                    <td align="center" colspan="1">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Mecánica de Suelos y Concretos Asfalticos</td>
                </tr>
                <tr>
                    <th scope="row">Electiva II</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center"></td>
                </tr>
               
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 8 -->
      <input type="radio" name="radio" id="radio8">
      <div class="tab8">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 8</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Estructuras de Concreto Armado II</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Estructuras de Concreto Armado I y Análisis Estructural II</td>
                </tr>
                <tr>
                    <th scope="row">Tratamiento de Aguas</th>
                    <td align="center">4</td>
                    <td align="center">4/2</td>
                    <td align="center">Acueductos y Alcantarillados y Química General</td>
                </tr>
                <tr>
                    <th scope="row">Técnicas de Construcción de Obras Viales</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Pavimentos</td>
                </tr>
                <tr>
                    <th scope="row">Electiva III</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Electiva IV</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center"></td>
                </tr>     
                
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>5 Materias</td>
                    <td colspan="1" ><h6>15 Créditos</td>
            </tr>
      </div>

      <!-- SEMESTRE 9 -->
      <input type="radio" name="radio" id="radio9">
      <div class="tab9">
            <table class="table table-sm">
            <thead  id="titulosemestre">
                <div scope="col">
                        <tr>
                            <h4>Semestre 9</h4>
                        </tr> 
                </div> 
            </thead>
            <thead id="cabeceratabla">
                <tr>
                    <th scope="col">ASIGNATURAS</th>
                    <th scope="col">CRÉDITOS</th>
                    <th scope="col">IHS</th>
                    <th scope="col">PRE-REQUISITO</th>
                </tr>
            </thead>
            <tbody id="cuerpotabla">
                <tr>
                    <th scope="row">Técnicas de Constucción de Edificaciones</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Estructuras de Concreto Armado II</td>
                </tr>
                <tr>
                    <th scope="row">Proyectos de Ingeniería Civil</th>
                    <td align="center">3</td>
                    <td align="center">4/0</td>
                    <td align="center">Formulación y Evaluacion de proyectos e Investigación de Operaciones</td>
                </tr>
                <tr>
                    <th scope="row">Electiva V</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <th scope="row">Electiva VI</th>
                    <td align="center" colspan="1">3</td>
                    <td align="center">4/0</td>
                    <td align="center"></td>
                </tr>  
            </tbody>
            </table>
            <tr id="footer">
                    <td colspan="1" ><h6>4 Materias</td>
                    <td colspan="1" ><h6>16 Créditos</td>
            </tr>
      </div>



      <!-- REQUISITOS DE GRADO -->
      <input type="radio" name="radio" id="radio12">
      <div class="tab12">
            <table class="table table-sm">
            <thead id="cabeceratabla">
            <div scope="col">
            <tr>
                <h4>Requisitos de grado</h4>
            </tr> 
    </div> 
            </thead>
            <tbody id="cuerpotabla">
                <th scope="row" align="left">
                <li>Cumplimiento total de número de créditos del plan de estudios</li>
                <li>Eficiencia en inglés.</li>
                <li>Cumplimiento de todos los requisitos legales y administrativos para optar al título.</li>
                
                <li>Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</li>
                <li>1. Formación Humanística (Formación en humanismo)  IHS 2  Créditos 2</li>
                <li>2. Formación Humanística (Formación en cultura artística y cultura física) IHS 2  Créditos 2</li>
                <li>3. Formación Humanística (Formación ciudadana) IHS 2  Créditos 2</li>
                <li>4. Formación Humanística (Formación en problemáticas de contexto) IHS 2  Créditos 2</li>
                <li>5. Competencias básicas (Lectura y producción de textos I) IHS 2  Créditos 2</li>
                <li>6. Competencias básicas (Lectura y producción de textos II) IHS 2  Créditos 2</li>
                <li>7. Competencias básicas (Lenguaje y herramientas informáticas) IHS 4  Créditos 2</li>
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
    <div class="carousel-item">
        <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
    </div>
    <div class="carousel-item">
        <iframe src="https://www.udenar.edu.co/ocara/admisiones/" class="d-block w-100" width=630 height=400>""</iframe>
    </div> 
    <div class="carousel-item">
        <iframe src="formulario1/index.html" class="d-block w-100" width=630 height=400>""</iframe>
    </div>

    </div> 
    </div> 
</div>
`
    }
}

//CODIGO PARA EL MODAL

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];

    myModal.style.display = 'block';

    span.onclick = function() {
        myModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            myModal.style.display = 'none';
        }
    }

});

function startTour() {
    document.getElementById('close-modal').click();
    document.getElementById('1-udenar_2').click();
}