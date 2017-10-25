
// When an article is being saved
$(document).on("click", "#article", function(){
    
        var Articleid = $(this).attr("data-id");
    
        console.log(Articleid)
    
        $.ajax({
            method: "POST",
            url: "/save/" + Articleid,
            data: {
                id: Articleid
            }
        }).done(function(data) {
            location.reload();
        });
});


// When an article is being deleted
$(document).on("click", "#articleBtn", function(){
    
        var Articleid = $(this).attr("data-id");
    
        console.log(Articleid)
    
        $.ajax({
            method: "POST",
            url: "/delete/" + Articleid,
            data: {
                id: Articleid
            }
        }).done(function(data) {
            location.reload();
        });
    })
    
// Grabs and displays the note tied to the article
$(document).on("click", "#articleNoteBtn", function(){

    var Articleid = $(this).attr("data-id");
    $("#notes").empty()

        $.ajax({
        method: "GET",
        url: "/articles/" + Articleid,
        data: {
            id: Articleid
        }
    }).done(function(data) {
        console.log(data.note)

        $("#modal-title").text(data.title)
        $("#savenote").attr("data-id", data._id)

        // if a note is found
        if (data.note) {
        $("#modal-note-title").css("font-size", 25)
        $("#modal-note-title").text(data.note.title)
        $("#modal-note-body").css("font-size", 20)
        $("#modal-note-body").text(data.note.body)
        }
        // if a note is not found
        // TODO also display this message if data.note.title or data.note.body is empty string
        else if(!data.note){
            //console.log("note is not here")
            $("#modal-note-title").css("font-size", 15)
            $("#modal-note-title").text("No Title Found...")
            $("#modal-note-body").css("font-size", 15)
            $("#modal-note-body").text("No Note Body Found...")
        }
    });
})
    
// Save and Update changes to the note
$(document).on("click", "#savenote", function(){
    var thisId = $(this).attr("data-id")
    console.log(thisId)

    $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
        // Value taken from title input
        title: $("#titleinput").val(),
        // Value taken from note textarea
        body: $("#bodyinput").val()
    }
    })
    // With that done
    .done(function(data) {
        // Log the response
        console.log(data);
    });

    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").val("");
    $("#bodyinput").val("");

});

