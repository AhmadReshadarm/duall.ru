function Age_AddComponent() {
  //$('#preload_conteiner').appendTo($("body"));
  //$('#preloadContentBye').css('display', 'none');
}
function AgeEndWork() {
  $("body").html($("#AgeContentBye").html());
  return false;
}
function AgeUserSuccess(URL) {
  // $.ajax({
  //   url: URL,
  //   type: "POST",
  //   dataType: "html",
  //   data: "AgeSuccess=Y",
  //   success: function (response) {
  //     $(".burbon_age_preload").css("display", "none");
  //   },
  // });
  $(".burbon_age_preload").css("display", "none");
  return false;
}
BX.ready(function () {
  if (!window.jQuery) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "/bitrix/js/burbon.agelimit/jquery-1.10.0.min.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  if ("jQuery" in window) {
    Age_AddComponent();
  } else {
    var t = setInterval(function () {
      if ("jQuery" in window) {
        Age_AddComponent();
        clearInterval(t);
      }
    }, 50);
  }
});
