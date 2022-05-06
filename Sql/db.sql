create database DB_ESCUELA;

create table grupo (
	id int(5) auto_increment primary key,
	nombre varchar(50) not null,
	aula int(5) not null
);

create table materia (
	id int(5) auto_increment primary key,
	nombre varchar(50) not null,
	descripcion varchar(50) not null
);

create table maestro (
	id int(5) auto_increment primary key,
	nombre varchar(50) not null,
	fecha_nacimiento date not null,
	imagen varchar(50),
	correo varchar(50) not null,
	contrasenia varchar(50) not null
);

create table alumno (
	id int(5) auto_increment primary key,
	nombre varchar(50) not null,
	fecha_nacimiento date not null,
	imagen varchar(50),
	correo varchar(50) not null,
    id_grupo int(5) not null,
    contrasenia varchar(50) not null,
    constraint fk_grupo_alumno foreign key (id_grupo) references grupo (id) on update cascade on delete cascade
);

create table tarea (
	id int(5) auto_increment primary key,
	titulo varchar(50) not null,
	descripcion varchar(50) not null,
	archivo varchar(50),
    id_grupo int(5) not null,
    id_materia int(5) not null,
    id_maestro int(5) not null,
    constraint fk_tarea_grupo foreign key (id_grupo) references grupo (id),
    constraint fk_tarea_materia foreign key (id_materia) references materia (id),
    constraint fk_tarea_maestro foreign key (id_maestro) references maestro (id)
);

create table entregas (
	id int(5) auto_increment primary key,
	archivo varchar(50) not null,
	calificacion DECIMAL(6,2) not null,
    id_tarea int(5) not null,
    id_alumno int(5) not null,
    constraint fk_entrega_tarea foreign key (id_tarea) references tarea (id) on update cascade on delete cascade,
    constraint fk_entrega_alumno foreign key (id_alumno) references alumno (id) on update cascade on delete cascade
);

create table alumno_materia (
	id int(5) auto_increment primary key,
	calificacion DECIMAL(6,2) not null,
    id_materia int(5) not null,
    id_alumno int(5) not null,
    constraint fk_alumnoMateria_materia foreign key (id_materia) references materia (id) on update cascade on delete cascade,
    constraint fk_alumnoMateria_alumno foreign key (id_alumno) references alumno (id) on update cascade on delete cascade
);

create table maestro_materia (
	id int(5) auto_increment primary key,
    id_materia int(5) not null,
    id_maestro int(5) not null,
    constraint fk_maestroMateria_materia foreign key (id_materia) references materia (id) on update cascade on delete cascade,
    constraint fk_maestroMateria_maestro foreign key (id_maestro) references maestro (id) on update cascade on delete cascade
);

create table grupo_maestro (
	id int(5) auto_increment primary key,
    id_grupo int(5) not null,
    id_maestro int(5) not null,
    constraint fk_grupoMaestro_grupo foreign key (id_grupo) references grupo (id) on update cascade on delete cascade,
    constraint fk_grupoMaestro_maestro foreign key (id_maestro) references maestro (id) on update cascade on delete cascade
);

insert into
	grupo (nombre, aula)
VALUES
	("A", 101),
	("B", 102),
	("C", 103);

insert into
	materia (nombre, descripcion)
VALUES
	("Matematicas Uno", "Introducción a las matematicas"),
	("Español Uno", "Introducción al español"),
	("Historia Uno", "Introducción a la historia");

insert into
	maestro (nombre, fecha_nacimiento, imagen, correo, contrasenia)
VALUES
	("Marco", "1990-3-14","imagenMarco.jpg","Marco@gmail.com","123456"),
	("Saul", "1994-4-10","imagenSaul.jpg","Saul@gmail.com","123456"),
	("Antonio", "1980-1-2","imagenAntonio.jpg","Antonio@gmail.com","123456"),
	("Fernando", "1994-4-1","imagenFernando.jpg","Fernando@gmail.com","123456");


insert into
	alumno (nombre, fecha_nacimiento, imagen, correo, id_grupo, contrasenia)
VALUES
	("Ivan", "1990_03_14","imagenIvan.jpg","Ivan@gmail.com", 1,"123456"),
	("Nicolas", "1994_04_10","imagenNicolas.jpg","Nicolas@gmail.com", 2,"123456"),
	("Martin", "1980_01_02","imagenMartin.jpg","Martin@gmail.com", 3,"123456"),
	("Manuel", "1930_04_01","imagenManuel.jpg","Manuel@gmail.com", 1,"123456");


insert into
	tarea (titulo, descripcion, archivo, id_grupo, id_materia, id_maestro)
VALUES
	("Tarea sumas", "Realizar las sumas de clase","archivoSumas.pdf",1,1,1),
	("Tarea verbos", "Realizar los verbos de clase","archivoVerbos.pdf",2,2,2),
	("Tarea 5 de Mayo", "Realizar tarea 5 de mayo","archivosHistoria.pdf",3,3,3),
	("Tarea restas", "Realizar las restas de clase","archivorestas.pdf",3,3,4),
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
	(3, 2);

insert into
	grupo_maestro (id_grupo, id_maestro)
VALUES
	(1, 1),
	(1, 2),
	(3, 3),
	(2, 1);