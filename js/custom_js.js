// you could user .click(funtion() {});
//.on("click", function(){}) is preferred because 
// on uses less memory and works on dynamically created elements
// theres slight performance gain over click
// though the performance gain is only seen when using event delegation by passing a selector parameter. If you call .on() without a selector parameter there is no performance improvement over using .click()
// http://api.jquery.com/on/#direct-and-delegated-events
// http://stackoverflow.com/questions/9122078/difference-between-onclick-vs-click

$(".touch").on("click", function(){
  var transitionEnd = 'webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend';;
  $("html, body").animate({
          scrollTop: 0
        }, 1000);
  
  setTimeout(function() {
  $(".fa-envelope, .fa-github, .fa-linkedin").addClass("swing").one(transitionEnd, function() {
    $(this).removeClass("swing");
  });
  }, 1500);
  });