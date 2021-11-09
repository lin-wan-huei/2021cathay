$(function(){   
    $(".part1").click(function(){
      $("html,body").animate(
        { scrollTop: $(".agendaBox").offset().top + 1 },
        900
      );
      return false;
    });

    $(".part2").click(function(){
      $("html,body").animate(
        { scrollTop: $(".agendaBox").offset().top + 1 },
        900
      );
      return false;
    });

    $(".part3").click(function(){
      $("html,body").animate(
        { scrollTop: $("#survey").offset().top + 1 },
        900
      );
      return false;
    });

    $(".go_survey").click(function(){
      $("html,body").animate(
        { scrollTop: $("#survey").offset().top + 1 },
        900
      );
      return false;
    });

    // 漢堡選單
    $(".open").click(function () {
      $(".menu").toggleClass("header_close");
      $("body").toggleClass("body_fixed");
      $(this).toggleClass("opening");
    });

    // 以下：在手機版時，選單加入class="co"，且點擊co之後收起選單等等
    $(window).width(function() {

      if($(window).innerWidth() <= 769) {
          $(".menu>li").addClass("co");
        }
        else {
          $(".menu>li").removeClass("co");
        }
      });
    
    $(".co").click(function () {
      $(".menu").hide("slow");
      $("body").removeClass("body_fixed");
      $(".open").toggleClass("opening");
    });
    // 以上：在手機版時，選單加入class="co"，且點擊co之後收起選單等等
});

// 切換中英按鈕
$(".language_en").hide();
$(".btn_language").click(function () {
  $(".language_main").toggleClass('language_main--click');
  var i = $(".language_main p").attr("res");
  if (i == 0) {
    $(".language_main p").attr("res", "1");
    $(".language_main p").html("中文版");
    $(".language_tw").show();
    $(".language_en").hide();
  } else {
    $(".language_main p").attr("res", "0");
    $(".language_main p").html("English");
    $(".language_tw").hide();
    $(".language_en").show();
  }
});

// 切換上下午場
$("#agenda_night").addClass("atc-toggle");
// day
$(".open--day").click(function () {
  $("#agenda_night").addClass("atc-toggle");
  $("#agenda_day").removeClass("atc-toggle");
  $(".subtt--day").addClass("btn_open");
  $(".subtt--night").removeClass("btn_open");
  $(".btn--day").css("background","#308548");
  $(".btn--night").css("background","#6D9E4A");
  $("html,body").animate(
    { scrollTop: $(".agendaBox").offset().top + 1 }, 900
  );
});
// night
$(".open--night").click(function () {
  $("#agenda_day").addClass("atc-toggle");
  $("#agenda_night").removeClass("atc-toggle");
  $(".subtt--night").addClass("btn_open");
  $(".subtt--day").removeClass("btn_open");
  $(".btn--night").css("background","#308548");
  $(".btn--day").css("background","#6D9E4A");
  $("html,body").animate(
    { scrollTop: $(".agendaBox").offset().top + 1 }, 900
  );
});
// 滾動時，固定頂部
$(window).width(function()  {
  if($(window).innerWidth() >= 1024) {
    function fixDiv() {
      var $cache = $('#getFixed');
      if ($(window).scrollTop() > 100)
      $cache.css({
        'position': 'sticky',
        'top': '130px'
      });
      else
      $cache.css({
        'position': 'relative',
        'top': 'auto'
      });
    }
    $(window).scroll(fixDiv);
    fixDiv();
  }
});