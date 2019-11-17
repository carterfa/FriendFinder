
//confirms if all inputs filled
function valid(newFriend) {
    //checks to see if text fields full
    for (const property in newFriend) {
        if (newFriend[property] === "") {
            newFriend = {};
            return false;
        }
    }
    //checks to see if radio buttons unchecked
    for (let i = 0; i < newFriend.scores.length; i++) {
        if (newFriend.scores[i] === undefined) {
            return false;
        }
    }

    return true;

};

//modal close button
$(".close").on("click", function (event) {

    event.preventDefault();
    $(".modal").hide();

});

//creates new object based on user input
$("#submitBtn").on("click", function (event) {
    event.preventDefault();
    var newFriend = {
        "name": $("#name").val().trim(),
        "photo": $("#imageURL").val().trim(),
        "scores": [$("input[name*='q1Options']:checked").val(),
        $("input[name*='q2Options']:checked").val(),
        $("input[name*='q3Options']:checked").val(),
        $("input[name*='q4Options']:checked").val(),
        $("input[name*='q5Options']:checked").val(),
        $("input[name*='q6Options']:checked").val(),
        $("input[name*='q7Options']:checked").val(),
        $("input[name*='q8Options']:checked").val(),
        $("input[name*='q9Options']:checked").val(),
        $("input[name*='q10Options']:checked").val()]
    };

    //prevents empty fields in new friend object
    if (!valid(newFriend)) {
        $("#alertModal").show();
    } else {
        $.post("/api/friends", newFriend).then(function (data) {
            $("#friendModal").show();
            $("#friendName").text(data.name);
            $("#friendImage").attr("src", data.photo);
        });

    }
});