# StudentEnrollmentForm
# Student Enrollment Form using JsonPowerDB

## Description

The Student Enrollment Form is a web-based application developed using HTML, Bootstrap, JavaScript, jQuery, and JsonPowerDB (JPDB). The application allows users to manage student enrollment records efficiently by performing Create, Read, and Update operations on the database.

The system uses **Roll No** as the primary key. When a user enters a Roll No, the application checks whether the record already exists in the database. If the record does not exist, the user can enter student details and save the record. If the record exists, the application retrieves and displays the existing data, allowing the user to update it.

---

## Table of Contents

1. Description
2. Benefits of using JsonPowerDB
3. Scope of Functionalities
4. Examples of Use
5. Illustrations
6. Release History
7. Project Status
8. Sources
9. Other Information

---

## Benefits of using JsonPowerDB

* High-performance and lightweight database solution.
* Schema-free and easy-to-use NoSQL database.
* Supports fast CRUD operations.
* Simple REST API-based database access.
* Reduces development time and complexity.
* Suitable for web applications, IoT projects, and micro-projects.
* Easy integration with HTML, JavaScript, and jQuery.
* Real-time data processing capabilities.
* Low maintenance and easy deployment.
* Provides secure token-based access.

---

## Scope of Functionalities

The project provides the following functionalities:

* Add a new student record.
* Search student records using Roll No.
* Update existing student information.
* Reset the form to its initial state.
* Input validation for all fields.
* Automatic enabling/disabling of buttons based on record availability.
* Store and retrieve data from JsonPowerDB.

### Student Details Stored

* Roll No (Primary Key)
* Full Name
* Class
* Birth Date
* Address
* Enrollment Date

---

## Examples of Use

### New Student Entry

1. Enter a Roll No.
2. If the Roll No does not exist, enter all student details.
3. Click **Save** to store the record.

### Existing Student Update

1. Enter a Roll No.
2. Existing student details are automatically displayed.
3. Modify the required fields.
4. Click **Update** to save changes.

### Reset Form

1. Click **Reset**.
2. The form returns to its initial state and the cursor moves to the Roll No field.

---

## Illustrations

### Student Enrollment Form

* Roll No
* Full Name
* Class
* Birth Date
* Address
* Enrollment Date

### Control Buttons

* Save
* Update
* Reset

*(Add screenshots of your application and JPDB dashboard here.)*

---


## Release History

### Version 1.0.0

* Created Student Enrollment Form.
* Integrated JsonPowerDB database.
* Implemented Save functionality.
* Implemented Update functionality.
* Added form validation.
* Added Reset functionality.
* Configured Roll No as primary key.
* Published source code on GitHub.

Release Date: June 2026

---

## Project Status

Project is completed and functioning as expected.

Future enhancements may include:

* Delete functionality.
* Search by student name.
* Advanced validation.
* Responsive UI improvements.
* Student record listing page.

---

## Sources

* JsonPowerDB Documentation: https://login2explore.com/jpdb/docs.html
* JsonPowerDB Official Website: https://login2explore.com
* Bootstrap Documentation: https://getbootstrap.com/docs
* jQuery Documentation: https://jquery.com
* GitHub Documentation: https://docs.github.com

---

## Other Information

### Technologies Used

* HTML5
* CSS3
* Bootstrap 3
* JavaScript
* jQuery
* JsonPowerDB (JPDB)

### Database Details

* Database Name: SCHOOL-DB
* Relation Name: STUDENT-TABLE
* Primary Key: Roll No

