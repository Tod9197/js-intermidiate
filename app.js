$(function () {
  $(".js-formArea").on("submit", function (e) {
    e.preventDefault();
    console.log("OK");

    $.ajax({
      type: "post",
      url: "ajax_json.php",
      dataType: "json",
      data: {
        name: $(".js-get-val-name").val(),
        age: $(".js-get-val-age").val(),
      },
    }).done(function (data, status) {
      console.log(data);
      console.log(status);
      var name = data.name;
      var age = data.age;
      $(".js-set-name").text(name);
      $(".js-set-age").text(age);
    });
  });
});
