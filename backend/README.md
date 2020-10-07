<h1 align="center" >MANTHAN BACKEND</h1>
<h3 align="center">An API for handling GET/POST requests for the Manthan App</h3>

## Technologies used
* Nodejs
* Expressjs
* MongoDB

### Live Server Status
https://manthan-backend.herokuapp.com/students/


### Github Steps
Follow the steps for working on this repository strictly :
1. Fork the repository to your Github account
2. Copy the link (ends with a .git) of your forked repository
3. In a folder of your choice in your local machine, run `git clone thelinkyoujustcopied.git`
4. `cd manthan`
5. `git remote add upstream https://github.com/aavishkarmishra/manthan.git` 
6. When ever you want to push your change, do `git add .` and `git commit -m "did a change"` and then do `git pull upstream master`. Then finally, do `git push origin master`.
7. After pushing, go to your forked repository on Github and create a pull request.



### Steps to run the application

1. `cd manthan`
   
2. `npm install` (only for the first time) then `nodemon server` this will run application on `http://localhost:5000`




### Testing the API

1. Locally, eg: http://localhost:5000/students/
2. With LIVE Heroku Server, eg: https://manthan-backend.herokuapp.com/students/
3. Test the API with POSTMAN. 

### Example to FETCH STUDENTS : 

* Set the URL TO `https://manthan-backend.herokuapp.com/students` to get all the students.
* Set the URL TO `https://manthan-backend.herokuapp.com/students/user` to get a student with respect to an email.

    Example Input :  
    ```json
        { 
        "email": "aavishkar@gmail.com", 
        }
    ```
### Example to ADD STUDENT
* Set the URL TO `https://manthan-backend.herokuapp.com/students/add` to add a student.

    Example Input:
    ```json
        {
            "username":"Aavishkar Mishra",
            "email":"aavishkarmishra@gmail.com",
            "rollno":"CSB19055",
            "classrooms":[]
        }
    ```

*** 
### Example to FETCH TEACHERS : 

* Set the URL TO `https://manthan-backend.herokuapp.com/teachers` to get all the teachers.
* Set the URL TO `https://manthan-backend.herokuapp.com/teachers/user` to get a teacher with respect to an email.

    Example Input :  
    ```json
    { 
        "email": "aavishkar@gmail.com", 
    }
    ```
### Example to ADD TEACHER
* Set the URL TO `https://manthan-backend.herokuapp.com/teachers/add` to add a teacher.

    Example Input:
    ```json
        {
            "username":"Aavishkar Mishra",
            "email":"aavishkarmishra@gmail.com",
            "classrooms":[]
        }
    ```

*** 
### Example to FETCH CLASSROOMS : 

* Set the URL TO `https://manthan-backend.herokuapp.com/classrooms` to get all the classrooms.
* Set the URL TO `https://manthan-backend.herokuapp.com/classrooms/:id` to get a classroom with respect to id.

### Example to ADD CLASSROOM
* Set the URL TO `https://manthan-backend.herokuapp.com/classrooms/add` to add a classroom and get _id of classroom .

    Example Input:
    ```json
        {
            "name":"Signal Systems",
            "code":"EC205",
            "instructor":"Ananya",
            "tests":[]
        }
    ```


*** 
### Example to FETCH TESTS : 

* Set the URL TO `https://manthan-backend.herokuapp.com/tests` to get all the tests.
* Set the URL TO `https://manthan-backend.herokuapp.com/tests/:id` to get a test with respect to id.

### Example to ADD TEST
* Set the URL TO `https://manthan-backend.herokuapp.com/tests/add` to add a test and get _id of test .

    Example Input:
    ```json
        {
            "name": "Test01",
            "date": "2010-10-09T18:30:00.000+00:00",
            "duration": [
                1,
                0
            ],
            "marks": 20,
            "questions": [
                {
                    "question":"sample question",
                    "option1":"sample option",
                    "option2":"sample option",
                    "option3":"sample option",
                    "option4":"sample option",
                    "answer":1,
                    "marks":2,
                    "type":"A"
                }
            ],
            "rules": [
                {
                    "type":"A",
                    "noofquestion":5
                }
            ],
            "scores": [
                {
                    "rollno":"CSB19055",
                    "marks":15
                }
            ]
        }
    ```
***
## Author

## [Aavishkar Mishra](https://github.com/aavishkarmishra)
[<img src="https://image.flaticon.com/icons/svg/185/185964.svg" width="35" padding="10">](https://www.linkedin.com/in/aavishkarmishra/)
[<img src="https://image.flaticon.com/icons/svg/185/185985.svg" width="35" padding="10">](https://www.instagram.com/aavishkar_mishra/)
