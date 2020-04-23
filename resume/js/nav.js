$(".n1").each(function (i) {
    (function (i) {
        $(".n1").eq(i).click(function () {

            for (let j = 0; j < $(".n1").length; j++) {
                $(".mb").eq(j).hide()
            }
            $(".mb").eq(i).show()
            $(".mb").html($(".n1").eq(i).attr("data-tooltip"))



        })
    }(i))

})