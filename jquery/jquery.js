$(document).ready(function () {
  $("button").addClass("animated bounce"); //element
  $(".btn-success").addClass("shake"); //class
  $("#target6").addClass("fadeOut"); //id
  $("button").removeClass("btn-success");
  $("#target1").css({ color: "red", backgroundColor: "blue" }); // custom CSS
  $("#target2").prop("disabled", true); //change property
  $("h1").html("learning <strong>jquery</strong> is fun");
  //$("target3").remove(); remove elements
  $("#target4").appendTo(".left"); //class

  // display ajax response

  var url = "https://hn.algolia.com/api/v1/search?quiery=javascript";
  $.getJSON(url, function (data) {
    var eachNews = "";
    allNews.map(function (item, index, array) {
      $(".question").on("click", function () {
        eachNews += "<div>";
        eachNews += item.title;
        eachNews += "</div>";
        $(".answer").html(eachNews);
      });
    });
  });
});
