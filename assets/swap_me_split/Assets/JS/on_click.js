$("#swap_Button").click(function() {
        $(".wrap").fadeTo("slow", 0.5, function() {
            $(this).delay(600);
            $(this).html('<br><br><br><br><br><br><br><h1>Swap Complete!</h1>');
            $(this).fadeTo(600, 1);
        });
        $(this).hide();
    }
)