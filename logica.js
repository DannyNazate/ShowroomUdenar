window.addEventListener('DOMContentLoaded', function() {
    var imagenBienvenida = document.getElementById('imagen-bienvenida');
    imagenBienvenida.style.display = 'block';
    var botonCerrar = document.getElementById('boton-cerrar');
    botonCerrar.addEventListener('click', function() {
        imagenBienvenida.style.display = 'none';
        botonCerrar.style.display = 'none';
    });
});

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
    <div id="carouselExample" class="carousel carousel-dark slide" data-bs-ride="carousel">
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
                    Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</th>
                
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
                    Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:</th>
                
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
                <li>El estudiante realizara un trabajo final de grado, previamente escogida la modalidad de las cuatro que se ofrecen en el programa las cuales son:</li>
                
            
                <li>1. Recital Creativo</li>
                <li>2. Recital de instrumento principal</li>
                <li>3. Monografía</li>
                <li>4. Pasantía</li>
                Para obtener el título profesional, el estudiante debe certificar un segundo idioma en nivel B1 de acuerdo al Marco Común Europeo de Referencia (MCER)
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
            Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:
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
        Los estudiantes deben cursar además, a lo largo de la carrera, las siguientes asignaturas:
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
</div>
`
    }

}