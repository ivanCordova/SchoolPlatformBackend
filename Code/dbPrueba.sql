create database DB_ESCUELA;

create table grupo (
	grupoId int(5) auto_increment primary key,
	nombre varchar(50) not null,
	aula int(5) not null,
	createdAt date not null,
	updatedAt date not null
);

create table materia (
	materiaId int(5) auto_increment primary key,
	nombre varchar(50) not null,
	descripcion varchar(50) not null,
	createdAt date not null,
	updatedAt date not null
);

create table maestro (
	maestroId int(5) auto_increment primary key,
	nombre varchar(50) not null,
	fecha_nacimiento date not null,
	imagen varchar(50),
	correo varchar(50) not null,
	contrasenia varchar(50) not null,
	createdAt date not null,
	updatedAt date not null
);

create table alumno (
	alumnoId int(5) auto_increment primary key,
	nombre varchar(50) not null,
	fecha_nacimiento date not null,
	imagen varchar(50),
	correo varchar(50) not null,
	grupoId int(5) not null,
	contrasenia varchar(50) not null,
	createdAt date not null,
	updatedAt date not null,
	constraint fk_grupo_alumno foreign key (grupoId) references grupo (grupoId) on update cascade on delete cascade
);

create table tarea (
	tareaId int(5) auto_increment primary key,
	titulo varchar(50) not null,
	descripcion varchar(50) not null,
	archivo varchar(50),
	grupoId int(5) not null,
	materiaId int(5) not null,
	maestroId int(5) not null,
	createdAt date not null,
	updatedAt date not null,
	constraint fk_tarea_grupo foreign key (grupoId) references grupo (grupoId),
	constraint fk_tarea_materia foreign key (materiaId) references materia (materiaId),
	constraint fk_tarea_maestro foreign key (maestroId) references maestro (maestroId)
);

create table entregas (
	entregasId int(5) auto_increment primary key,
	archivo varchar(50) not null,
	calificacion DECIMAL(6, 2) not null,
	tareaId int(5) not null,
	alumnoId int(5) not null,
	createdAt date not null,
	updatedAt date not null,
	constraint fk_entrega_tarea foreign key (tareaId) references tarea (tareaId) on update cascade on delete cascade,
	constraint fk_entrega_alumno foreign key (alumnoId) references alumno (alumnoId) on update cascade on delete cascade
);

create table alumno_materia (
	alumno_materiaId int(5) auto_increment primary key,
	calificacion DECIMAL(6, 2) not null,
	materiaId int(5) not null,
	alumnoId int(5) not null,
	createdAt date not null,
	updatedAt date not null,
	constraint fk_alumnoMateria_materia foreign key (materiaId) references materia (materiaId) on update cascade on delete cascade,
	constraint fk_alumnoMateria_alumno foreign key (alumnoId) references alumno (alumnoId) on update cascade on delete cascade
);

create table maestro_materia (
	maestro_materiaId int(5) auto_increment primary key,
	materiaId int(5) not null,
	maestroId int(5) not null,
	createdAt date not null,
	updatedAt date not null,
	constraint fk_maestroMateria_materia foreign key (materiaId) references materia (materiaId) on update cascade on delete cascade,
	constraint fk_maestroMateria_maestro foreign key (maestroId) references maestro (maestroId) on update cascade on delete cascade
);

create table grupo_maestro (
	grupo_maestroId int(5) auto_increment primary key,
	grupoId int(5) not null,
	maestroId int(5) not null,
	createdAt date not null,
	updatedAt date not null,
	constraint fk_grupoMaestro_grupo foreign key (grupoId) references grupo (grupoId) on update cascade on delete cascade,
	constraint fk_grupoMaestro_maestro foreign key (maestroId) references maestro (maestroId) on update cascade on delete cascade
);

insert into
	grupo (nombre, aula, createdAt, updatedAt)
VALUES
	("A", 101,"2022_05_06","2022_05_06"),
	("B", 102,"2022_05_06","2022_05_06"),
	("C", 103,"2022_05_06","2022_05_06");

insert into
	materia (nombre, descripcion, createdAt, updatedAt)
VALUES
	(
		"Matematicas Uno",
		"Introducción a las matematicas", "2022_05_06","2022_05_06"
	),
	("Español Uno", "Introducción al español", "2022_05_06","2022_05_06"),
	("Historia Uno", "Introducción a la historia", "2022_05_06","2022_05_06");

insert into
	maestro (
		nombre,
		fecha_nacimiento,
		imagen,
		correo,
		contrasenia, createdAt, updatedAt
	)
VALUES
	(
		"Marco",
		"1990-3-14",
		"imagenMarco.jpg",
		"Marco@gmail.com",
		"123456", "2022_05_06","2022_05_06"
	),
	(
		"Saul",
		"1994-4-10",
		"imagenSaul.jpg",
		"Saul@gmail.com",
		"123456", "2022_05_06","2022_05_06"
	),
	(
		"Antonio",
		"1980-1-2",
		"imagenAntonio.jpg",
		"Antonio@gmail.com",
		"123456", "2022_05_06","2022_05_06"
	),
	(
		"Fernando",
		"1994-4-1",
		"imagenFernando.jpg",
		"Fernando@gmail.com",
		"123456", "2022_05_06","2022_05_06"
	);

insert into
	alumno (
		nombre,
		fecha_nacimiento,
		imagen,
		correo,
		grupoId,
		contrasenia, createdAt, updatedAt
	)
VALUES
	(
		"Ivan",
		"1990_03_14",
		"imagenIvan.jpg",
		"Ivan@gmail.com",
		1,
		"123456", "2022_05_06","2022_05_06"
	),
	(
		"Nicolas",
		"1994_04_10",
		"imagenNicolas.jpg",
		"Nicolas@gmail.com",
		2,
		"123456", "2022_05_06","2022_05_06"
	),
	(
		"Martin",
		"1980_01_02",
		"imagenMartin.jpg",
		"Martin@gmail.com",
		3,
		"123456", "2022_05_06","2022_05_06"
	),
	(
		"Manuel",
		"1930_04_01",
		"imagenManuel.jpg",
		"Manuel@gmail.com",
		1,
		"123456", "2022_05_06","2022_05_06"
	);

insert into
	tarea (
		titulo,
		descripcion,
		archivo,
		grupoId,
		materiaId,
		maestroId, createdAt, updatedAt
	)
VALUES
	(
		"Tarea sumas",
		"Realizar las sumas de clase",
		"archivoSumas.pdf",
		1,
		1,
		1, "2022_05_06","2022_05_06"
	),
	(
		"Tarea verbos",
		"Realizar los verbos de clase",
		"archivoVerbos.pdf",
		2,
		2,
		2, "2022_05_06","2022_05_06"
	),
	(
		"Tarea 5 de Mayo",
		"Realizar tarea 5 de mayo",
		"archivosHistoria.pdf",
		3,
		3,
		3, "2022_05_06","2022_05_06"
	),
	(
		"Tarea restas",
		"Realizar las restas de clase",
		"archivorestas.pdf",
		3,
		3,
		4, "2022_05_06","2022_05_06"
	),
	(
		"Tarea multiplicaciones",
		"Realizar las multiplicaciones de clase",
		"archivomultiplicaciones.pdf",
		2,
		1,
		1, "2022_05_06","2022_05_06"
	);

insert into
	entregas (archivo, calificacion, tareaId, alumnoId, createdAt, updatedAt)
VALUES
	("imagenivan.jpg", 10.0, 1, 1, "2022_05_06","2022_05_06"),
	("imagenManuel.jpg", 8.0, 1, 4, "2022_05_06","2022_05_06"),
	("imagenNicolas.jpg", 9.0, 2, 2, "2022_05_06","2022_05_06");

insert into
	alumno_materia (calificacion, materiaId, alumnoId, createdAt, updatedAt)
VALUES
	(9.0, 1, 1, "2022_05_06","2022_05_06"),
	(10.0, 1, 4, "2022_05_06","2022_05_06"),
	(7.0, 2, 2, "2022_05_06","2022_05_06"),
	(7.0, 3, 3, "2022_05_06","2022_05_06");

insert into
	maestro_materia (materiaId, maestroId, createdAt, updatedAt)
VALUES
	(1, 1, "2022_05_06","2022_05_06"),
	(1, 2, "2022_05_06","2022_05_06"),
	(3, 3, "2022_05_06","2022_05_06"),
	(3, 2, "2022_05_06","2022_05_06");

insert into
	grupo_maestro (grupoId, maestroId, createdAt, updatedAt)
VALUES
	(1, 1, "2022_05_06","2022_05_06"),
	(1, 2, "2022_05_06","2022_05_06"),
	(3, 3, "2022_05_06","2022_05_06"),
	(2, 1, "2022_05_06","2022_05_06");