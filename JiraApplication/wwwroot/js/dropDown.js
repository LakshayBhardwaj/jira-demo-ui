var checkboxArray = new Array();
$(document).click(function (e) {
    var container = $("#p12");
    var projects = "";

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        document.getElementById("myDropdown").classList.remove("show");
    }

    if (e.target.classList == "link") {
        //  alert($(e.target).attr('classList'));
        checkbox = document.getElementById(e.toElement.id).previousSibling;
        if ($("#" + checkbox.id).prop('checked') == true) {
            $("#" + checkbox.id).prop("checked", false);
            var rm = checkboxArray.indexOf(checkbox.value);
            checkboxArray.splice(rm, 1);
        } else {
            $("#" + checkbox.id).prop("checked", true);
            checkboxArray.push(checkbox.value);
        }

        for (var i = 0; i < checkboxArray.length; i++) {

            if (i == 0) {
                projects = projects + checkboxArray[i];
            } else {
                projects = projects + ",+" + checkboxArray[i];
            }
        }


        runApi('project +in +(' + projects + ')');

    }

    if (e.target.classList == "project") {
        //  alert($(e.target).attr('classList'));
        checkbox = e.toElement;
        //console.log(checkbox)
        if ($("#" + checkbox.id).prop('checked') == true) {

            checkboxArray.push(checkbox.value);
        } else {
            var rm = checkboxArray.indexOf(checkbox.value);
            checkboxArray.splice(rm, 1);

        }
        console.log(checkboxArray)
        for (var i = 0; i < checkboxArray.length; i++) {
            console.log(checkboxArray.length);
            if (i == 0) {
                projects = projects + checkboxArray[i];
            } else {
                projects = projects + ",+" + checkboxArray[i];
            }
        }

        console.log(projects);
        runApi('project +in +(' + projects + ')');

    }

});

function myFunction() {
    document.getElementById("myDropdown").classList.add("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i, checkbox1;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    checkbox1 = div.getElementsByTagName("input");

    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
            checkbox1[i + 1].style.display = "";
        } else {
            a[i].style.display = "none";
            checkbox1[i + 1].style.display = "none";
        }
    }
}

