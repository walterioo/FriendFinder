$(document).ready(function () {
    $('#modal').on('hidden.bs.modal', function () {
        location.assign("/");
    })
    
    $('#submit').on('click', function (event) {
        event.preventDefault();
        if (validateForm()) {
            var newFriend = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val()
                ],
            };

            $.post("/api/friends/", newFriend, (data) => {
                $("#friend-match").text(data.name);
                $("#photo-match").attr("src", data.photo);
                $("#modal").modal("show");
            });
        } else {  
            alert("Please complete de survey");
        }
    });
});

function validateForm() {   
    let valid = true;         
    $('.form-control').each(function () {
        if ($(this).val() === "") {
            valid =  false;
        }
    });

    $('.select').each(function () {
        if ($(this).val() === "") {
            valid =  false;
        }
    });

    if (!$("#photo").val().match(/.(jpg|jpeg|png|gif)$/i)){
        alert("Image file not valid");
        valid = false;
    }

    return valid; 
};