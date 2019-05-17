function runApi(x) {
    $.ajax({
        url: "http://localhost:53819/api/values/list1",


        type: "POST",
        data: {
            getFilter: x
            //Data:"Hello there"
        },

        success: function (response) { console.log(response); },
        error: function (response) { console.log(response); debugger; },
        failure: function (response) { debugger; }
    });
}

runApi('');
