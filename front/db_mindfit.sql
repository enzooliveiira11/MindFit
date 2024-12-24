create database db_mindfit;
use db_mindfit;
use bc3wxwynpf4x7xu0w1rz;

create table tasks(
	id int auto_increment primary key,
    idade varchar (120) not null,
    perdamemoria varchar(255) not null,
    diastreinamento varchar(255)
    );  
    
create table cadastro(
	id int auto_increment primary key,
	email varchar (255) unique not null,
	senha varchar (255) not null
	);
    
select*from tasks;
select*from cadastro;


drop table tasks;
drop database bd_mindfit;