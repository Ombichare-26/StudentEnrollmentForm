var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";

var dbName = "SCHOOL-DB";
var relName = "STUDENT-TABLE";

var connToken = "90935147|-31949241327600383|90958611";



// RESET FORM


function resetForm() {
    

    $("#rollNo").val("");
    $("#fullName").val("");
    $("#stuClass").val("");
    $("#birthDate").val("");
    $("#address").val("");
    $("#enrollDate").val("");

    $("#rollNo").prop("disabled", false);

    $("#fullName").prop("disabled", true);
    $("#stuClass").prop("disabled", true);
    $("#birthDate").prop("disabled", true);
    $("#address").prop("disabled", true);
    $("#enrollDate").prop("disabled", true);
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);

    $("#rollNo").focus();
}


// ENABLE INPUT FIELDS


function enableFields() {

    $("#fullName").prop("disabled", false);
    $("#stuClass").prop("disabled", false);
    $("#birthDate").prop("disabled", false);
    $("#address").prop("disabled", false);
    $("#enrollDate").prop("disabled", false);
}

// SAVE RECORD NUMBER TO LOCAL STORAGE

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("rec_no", lvData.rec_no);
}


// GET ROLL NO JSON


function getRollNoAsJsonObj() {

    var roll = $("#rollNo").val();

    var jsonStr = {
        RollNo: roll
    };

    return JSON.stringify(jsonStr);
}



// VALIDATE DATA


function validateData() {

    var rollNo = $("#rollNo").val();
    var fullName = $("#fullName").val();
    var stuClass = $("#stuClass").val();
    var birthDate = $("#birthDate").val();
    var address = $("#address").val();
    var enrollDate = $("#enrollDate").val();

    if (rollNo === "") {
        alert("Roll No Required");
        $("#rollNo").focus();
        return "";
    }

    if (fullName === "") {
        alert("Full Name Required");
        $("#fullName").focus();
        return "";
    }

    if (stuClass === "") {
        alert("Class Required");
        $("#stuClass").focus();
        return "";
    }

    if (birthDate === "") {

        alert("Birth Date Required");
        $("#birthDate").focus();
        return "";
    }

    if (address === "") {
        alert("Address Required");
        $("#address").focus();
        return "";
        
    }

    if (enrollDate === "") {
        alert("Enrollment Date Required");
        $("#enrollDate").focus();
        return "";
    }

    var jsonObj = {
        RollNo: rollNo,
        FullName: fullName,
        Class: stuClass,
        BirthDate: birthDate,
        Address: address,
        EnrollmentDate: enrollDate
    };

    return JSON.stringify(jsonObj);
}


// GET STUDENT


function getStudent() {

    var rollJsonObj = getRollNoAsJsonObj();

    var getRequest =
        createGET_BY_KEYRequest(
            connToken,
            dbName,
            relName,
            rollJsonObj
        );

    jQuery.ajaxSetup({async:false});

    var resultObj =
        executeCommandAtGivenBaseUrl(
            getRequest,
            jpdbBaseURL,
            jpdbIRL
        );

    jQuery.ajaxSetup({async:true});

    if (resultObj.status === 400) {

        enableFields();

        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);

        $("#fullName").focus();
    }
    else if (resultObj.status === 200) {

        fillData(resultObj);

        $("#rollNo").prop("disabled", true);

        enableFields();

        $("#save").prop("disabled", true);
        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);

        $("#fullName").focus();
    }
}


// FILL DATA


function fillData(jsonObj) {

    saveRecNo2LS(jsonObj);

    var record = JSON.parse(jsonObj.data).record;

    $("#fullName").val(record.FullName);
    $("#stuClass").val(record.Class);
    $("#birthDate").val(record.BirthDate);
    $("#address").val(record.Address);
    $("#enrollDate").val(record.EnrollmentDate);
}


// SAVE DATA


function saveData() {

    var jsonStr = validateData();

    if (jsonStr === "") {
        return;
    }

    var putRequest =
        createPUTRequest(
            connToken,
            jsonStr,
            dbName,
            relName
        );

    jQuery.ajaxSetup({async:false});

    executeCommandAtGivenBaseUrl(
        putRequest,
        jpdbBaseURL,
        jpdbIML
    );

    jQuery.ajaxSetup({async:true});

    alert("Record Saved Successfully");

    resetForm();
}


// UPDATE DATA


function updateData() {

    var jsonStr = validateData();

    if (jsonStr === "") {
        return;
    }

    var updateRequest =
        createUPDATERecordRequest(
            connToken,
            jsonStr,
            dbName,
            relName,
            localStorage.getItem("rec_no")
        );

    jQuery.ajaxSetup({async:false});

    executeCommandAtGivenBaseUrl(
        updateRequest,
        jpdbBaseURL,
        jpdbIML
    );

    jQuery.ajaxSetup({async:true});

    alert("Record Updated Successfully");

    resetForm();

}