console.log("js loaded");
$(document).ready(function () {
    $('#submit').on('click', function (event) {
        console.log("click");

        event.preventDefault();
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
            console.log("post!");

            $("#friend-match").text(data.name);
            $("image-match").attr("src", data.photo);
            $("#modal").modal("toggle");
        });

    });
});