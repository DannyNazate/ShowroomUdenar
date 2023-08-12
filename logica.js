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
                <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
              </div>
              <div class="carousel-item">
                  <embed src="docs/Plan de estudios.pdf" height="400px" type="application/pdf" class="d-block w-100" alt="...">
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
            <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
          </div>
          <div class="carousel-item">
              <embed src="docs/Plan de estudios.pdf" height="400px" type="application/pdf" class="d-block w-100" alt="...">
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
                        <td align="center">TFísica Moderna II</td>
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
            <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
          </div>
          <div class="carousel-item">
              <embed src="docs/Plan de estudios.pdf" height="400px" type="application/pdf" class="d-block w-100" alt="...">
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
            <iframe src="http://sapiens.udenar.edu.co:5032/" class="d-block w-100" width=630 height=400>""</iframe>
          </div>
          <div class="carousel-item">
              <embed src="docs/Plan de estudios.pdf" height="400px" type="application/pdf" class="d-block w-100" alt="...">
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