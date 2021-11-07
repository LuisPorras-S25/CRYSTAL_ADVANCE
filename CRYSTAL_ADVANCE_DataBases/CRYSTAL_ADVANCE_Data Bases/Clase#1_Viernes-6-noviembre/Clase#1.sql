--OBJETOS -> CRUD: crear, leer, actualizar y elminar, son acciones minimas a realizar en una DB
/*
-CREATE: crear objetos (tablas, vistas, procedimientos, job(procedimiento que se repite cada cierto
tiempo), vistas, tipos (tablas temporales))

-SELECT
-UPDATE: usaremos Alter: es para los registros que hay en una tabla
-DELETE: usaremos Drop

Para crear información:
Información -> CRUD
C -> usaremos Create
U -> usaremos Alter: es para los registros que hay en una tabla
D -> usaremos Drop
*/

--Para crear una base de datos:
CREATE DataBase Clase_1 --Se especifica el tipo de objeto, en este caso un DB

--Para crear una tabla y especificar los campos:
Create Table Usuario(

	usuario_Id          varchar(50) not null,  --Almacenara un correo como primary key/varchar:unico caracter, excepto si le pongo un (numero)
	contrasenna         varchar(50) not null, --Unique: no se puede repetir
	nombre              varchar(50) not null,
	primerApellido      varchar(50) not null,
	segundoApellido     varchar(50) not null,

	--Establecer el primary key: constraint (regla)
	Constraint pk_usuario Primary Key(usuario_Id)
	
);

Select * From Usuario --Mostar la tabla 


--Para insertar información:
Insert Into Usuario (usuario_Id, contrasenna, nombre, primerApellido, segundoApellido) Values(

	'3333333',
	'123456',
	'Rebecca',
	'Aguzzi',
	'Amador'

);

--Actualizar la tabla de usuario:
Update Usuario 
Set
	contrasenna = 'raguzzi',
	nombre = 'Daniel'
Where
	usuario_Id = '118910663'

--Eliminar a alguien de una tabla:
/*
	Delete Usuario Where usuario_Id = 118910663

	Para no eliminar por accidente, se utiliza una transacción 
*/

Begin Tran
	
	Delete Usuario;

Rollback --Deshacer todo lo que hice en la transacción
Commit --Para hacer permamente