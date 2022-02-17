 
// قسمت منو همبرگری
$(document).ready(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
    });
  
    $(".three").click(function () {
      if ($(".three").hasClass("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
function openMenu() {
    $(".three").addClass("active");
    $(".drawer-menu").animate(
      {
        width: "22vw",
        height: "100vh",
      },
      "slow"
    );
  
    $(".three").animate(
      {
        marginRight: "10vw",
      },
      "slow"
    );
  
    $(".logo").css({
      display: "none",
    });
  }
  function closeMenu() {

    $(".three").removeClass("active");
    $(".drawer-menu").animate(
      {
        width: "0",
        height: "100vh",
      },
      100
    );
    $(".logo").css({
      display: "flex",
    });
    $(".three").animate(
      {
        marginRight: "0vw",
      },
      "slow"
    );
  }
});
//این قسمت برای متن های اسلایدر
$(document).ready(function(){
//   $(".contentslider1").css("color", "red")
//       .slideUp(2000)
//       .slideDown(2000);
 
    $(".contentslider1").hide();
    $(".contentslider1").show();

});

$(document).ready(function(){

    $(".contentslider2").animate({top: '-50px'});
  });
  //اینجا اولین منو

  $(document).ready(function(){
    $(".m1").hover(function(){
      $(this).css({"z-index":"-1","left":"0","right": "100%","bottom":"0","background":"#6fb586", "height":"1px"});
      }, function(){
      $(this).css();
    });})
    // 
    // 
   
    
    // -webkit-transition-property: "right";
    // transition-property: "right";
    // -webkit-transition-duration: .3s;
    // transition-duration: .3s;
    // -webkit-transition-timing-function: ease-out;
    // transition-timing-function: ease-out;


