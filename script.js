(function(){
    'use strict';

    $(document).ready(function(){

        $('#YogaPoseButton').click(function(){
            $.get("", function (data) {
                $(".result").html(data);
                console.log(data);
            });
        });
    
    })
})();