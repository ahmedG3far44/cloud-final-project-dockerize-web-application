create database cloud_project ;
use cloud_project;
create table cloud_students(
student_id int primary key auto_increment,
first_name varchar(50) not null,
middle_name varchar(50) not null,
last_name varchar(50) not null,
age int,
cgpa double,
profile_image text
);

insert into cloud_students (student_id , first_name , middle_name , last_name,age , cgpa , profile_image) values 
(22012150,"Mohammed Ahmed","Abd_Alhadi","Awad",22,3.9, "https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png"),
(22011970,"Abbas","Abd_Almoneim","Bakri",20,3.5, "https://conflictresolutionmn.org/wp-content/uploads/2020/01/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"),
 (22012119,"Wadah","Mohammed","Ahmed",21,2.5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAiIQQWroPeiSyTrPWVWYHGrXXTdkEZ86ShcOgQn_XXNybck9YtbrZ9JcUrFpTOs3kHPk&usqp=CAU"),
 (22011627,"Mossab","Jalal ","Mohammed",22,3.8, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1oLaDJlC-DvPibHvUAluSld6D4KG_Q00x6oMDubpL3K5lLeqWeKn8eUgbQ3ZiWjg6HM&usqp=CAU"),
 (22011515,"Ahmed","Jaffer","Kamal",21,3.4, "https://static.vecteezy.com/system/resources/previews/002/002/427/original/man-avatar-character-isolated-icon-free-vector.jpg");