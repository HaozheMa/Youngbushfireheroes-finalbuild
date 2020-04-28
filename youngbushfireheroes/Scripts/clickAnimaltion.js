
/* click */
var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("★", "☾", "❀", "☼", "♡");
        var colors = new Array("#17B4C7", "#6DD1FF", "#E3558F", "#F87FA8", "#F8E23F", "#FBB54F", "#ff63b1", "#ff974a", "#ffe900","#8ee3d5","#ff6b66");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-size": "5.1rem",
            "color": colors[11 * Math.random()]
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
            1500,
            function () {
                $i.remove();
            });
    });
});