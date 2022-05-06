select
	al.nombre as "Nombre Alumno",
	ma.nombre as "Nombre materia"
from
	alumno_materia as am
	INNER JOIN materia as ma on am.id_materia = ma.id
	INNER JOIN alumno as al on am.id_alumno = al.id;

select
	al.nombre,
	ta.descripcion,
	en.archivo
from
	entregas as en
	INNER JOIN alumno as al on en.id_alumno = al.id
	INNER JOIN tarea as ta on en.id_tarea = ta.id;

select
	al.nombre,
	ta.descripcion,
	en.archivo,
	ma.nombre,
	mstr.nombre
from
	entregas as en
	INNER JOIN alumno as al on al.id = en.id_alumno
	INNER JOIN tarea as ta on ta.id = en.id_tarea
	INNER JOIN materia as ma on ta.id_materia = ma.id
	INNER JOIN maestro as mstr on ta.id_maestro = mstr.id
WHERE
	al.nombre = "nicolas";

CREATE PROCEDURE obtenerAlumno(IN nombre_est VARCHAR
(255)) 
BEGIN 
	SELECT * FROM alumno WHERE nombre = nombre_est;
END; 

call obtenerAlumno("martin");

insert into
	materia (nombre, descripcion)
VALUES
	("Matematicas Uno", "Introducción a las matematicas"),
	("Español Uno", "Introducción al español"),
	("Historia Uno", "Introducción a la historia");

insert into
	maestro (nombre, fecha_nacimiento, imagen, correo, contrasenia)
VALUES
	("Marco", 1990-03-14,"imagenMarco.jpg","Marco@gmail.com","123456"),
	("Saul", 1994-04-10,"imagenSaul.jpg","Saul@gmail.com","123456"),
	("Antonio", 1980-01-02,"imagenAntonio.jpg","Antonio@gmail.com","123456"),
	("Fernando", 1930-04-01,"imagenFernando.jpg","Fernando@gmail.com","123456");


insert into
	alumno (nombre, fecha_nacimiento, imagen, correo, id_grupo, contrasenia)
VALUES
	("Ivan", 1990-03-14,"imagenIvan.jpg","Ivan@gmail.com", 1,"123456"),
	("Nicolas", 1994-04-10,"imagenNicolas.jpg","Nicolas@gmail.com", 2,"123456"),
	("Martin", 1980-01-02,"imagenMartin.jpg","Martin@gmail.com", 3,"123456"),
	("Manuel", 1930-04-01,"imagenManuel.jpg","Manuel@gmail.com", 1,"123456");


insert into
	tarea (titulo, descripcion, archivo, id_grupo, id_materia, id_maestro)
VALUES
	("Tarea sumas", "Realizar las sumas de clase","archivoSumas.pdf",1,1,1),
	("Tarea verbos", "Realizar los verbos de clase","archivoVerbos.pdf",2,2,2),
	("Tarea 5 de Mayo", "Realizar tarea 5 de mayo","archivosHistoria.pdf",3,3,3),
	("Tarea restas", "Realizar las restas de clase","archivorestas.pdf",4,4,4),
	("Tarea multiplicaciones", "Realizar las multiplicaciones de clase","archivomultiplicaciones.pdf",2,1,1);

insert into
	entregas (archivo, calificacion, id_tarea, id_alumno)
VALUES
	("imagenivan.jpg",10.0,1,1),
	("imagenManuel.jpg",8.0,1,4),
	("imagenNicolas.jpg",9.0,2,2);

insert into
	alumno_materia (calificacion, id_materia, id_alumno)
VALUES
	(9.0, 1, 1),
	(10.0, 1, 4),
	(7.0, 2, 2),
	(7.0, 3, 3);

insert into
	maestro_materia (id_materia, id_maestro)
VALUES
	(1, 1),
	(1, 2),
	(3, 3),
	(4, 4);

insert into
	grupo_maestro (id_grupo, id_maestro)
VALUES
	(1, 1),
	(1, 2),
	(3, 3),
	(2, 1);


