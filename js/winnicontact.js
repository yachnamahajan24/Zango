var displayCurrentTime = function () {
    var d = new Date();
    var h = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    var ap = d.getHours() > 12 ? "PM" : "AM";
    switch (h) {
        case 12:
            ap = "PM";
            break;
        case 0:
            h = 12;
            ap = "AM";
    }
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById("hours").innerHTML = padSingleDigit(h);
    document.getElementById("minutes").innerHTML = padSingleDigit(m);
    document.getElementById("seconds").innerHTML = padSingleDigit(s);
    document.getElementById("ampm").innerHTML = ap;
};
var padSingleDigit = function (num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
};

function myFunction() {
    document.getElementById("salesdiv").style.display = "none";
    document.getElementById("contactbox").style.display = "block";
    document.getElementById("btn").style.backgroundColor = "";
    document.getElementById("btn_active").style.backgroundColor = "skyblue";
}

function myFunction1() {
    document.getElementById("salesdiv").style.display = "block";
    document.getElementById("contactbox").style.display = "none";
    document.getElementById("btn_active").style.backgroundColor = "";
    document.getElementById("btn").style.backgroundColor = "skyblue";
}
var process = function () {
    var isValid = true;

    var _name = document.getElementById("name1").value;
    var _email = document.getElementById("email1").value;
    var _phone = document.getElementById("phone1").value;
    var _product = document.getElementById("product1").value;
    var _website = document.getElementById("yes");
    
    if (document.getElementById("no").checked) {
        _website.checked = false;
    }else{
         _website.checked = true;
    }
    
    if (_name == "") {
        document.getElementById("name1").nextElementSibling.firstChild.nodeValue = "This Field is required.";
        isValid = false;
    } 
    else {
        document.getElementById("name1").nextElementSibling.firstChild.nodeValue = "";
    }

    if (_email == "") {
        document.getElementById("email1").nextElementSibling.firstChild.nodeValue = "This Field is required.";
        isValid = false;
    }
    else {
        document.getElementById("email1").nextElementSibling.firstChild.nodeValue = "";
    }

    if (_phone == "") {
        document.getElementById("phone1").nextElementSibling.firstChild.nodeValue = "This Field is required.";
        isValid = false;
    } 
    else {
        document.getElementById("phone1").nextElementSibling.firstChild.nodeValue = "";
    }

    if (_product == "") {
        document.getElementById("product1").nextElementSibling.firstChild.nodeValue = "Please select a Website.";
        isValid = false;
    } 
    else {
        document.getElementById("product1").nextElementSibling.firstChild.nodeValue = "";
    }

    if (isValid == true) {
        document.getElementById("sales").submit();
    }
    return isValid;

};
window.onload = function () {
   // document.getElementById("register").onclick = process;
    var timer = setInterval(displayCurrentTime, 1000);
    var x = document.getElementById("salesdiv");
    var y = document.getElementById("contactbox");
    x.style.display = "none";
    y.style.display = "block";
    
};

$(document).ready(function () {
    
    $("#product").change(function(){
        var _product = $("#product").val();
        if(_product != ""){
            $("#product").next().text(''); 
        }
    });
    
    $("#name").change(function(){
        var name = $("#name").val();
        if(name != ""){
            $("#name").next().text(''); 
        }else{
             $("#name").next().text('Name is Required');
        }
    });
    
     $("#email").change(function(){
          var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var email = $("#email").val();
        if(emailPattern.test(email)){
            $("#email").next().text(''); 
        }else{
             $("#email").next().text("Enter valid email");
        }
    });
    
     $("#phone").change(function(){
        var phone = $("#phone").val().trim();
          var phonePattern = /\d{3}[-]\d{3}[-]\d{4}\b/;
        if(phonePattern.test(phone)){
            $("#phone").next().text(''); 
        }else{
            $("#phone").next().text("Enter valid no.");
        }
    });
    
    $("#support").submit(function (event) {
        var isValid = true;
        
        var _product = $("#product").val();
        if (_product == "" || _product == null) {
            $("#product").next().text('Select Website');
            isValid = false;

        } else {
            $("#product").next().text("");
            $("#product").val(_product);
        }
        
        var _name = $("#name").val().trim();
        if (_name == "") {
            $("#name").next().text('Name is Required');
            isValid = false;
            $("#name").focus();
        } else {
            $("#name").next().text("");
        }
        $("#name").val(_name);

        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var _email = $("#email").val().trim();
        if (_email == "") {
            $("#email").next().text("E-mail is Required");
            isValid = false;

        } else if (!emailPattern.test(_email)) {
            $("#email").next().text("Enter valid email");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(_email);

        var phonePattern = /\d{3}[-]\d{3}[-]\d{4}\b/;
        var _phone = $("#phone").val().trim();
        if (_phone == "") {
            $("#phone").next().text("Phone is Required");
            isValid = false;

        } else if (!phonePattern.test(_phone)) {
            $("#phone").next().text("Enter valid no.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        $("#phone").val(_phone);
        if (isValid == false) {
            event.preventDefault();
        }
    });

});

