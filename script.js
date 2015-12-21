function me() {
	document.getElementById("abou").innerHTML="I'm a freshman Computer Science and Statistics student at the University of Florida.";
    $('#abou').addClass('animated bounceInDown');
    $('#about').removeClass('animated bounceInDown');
}

function contac() {
	document.getElementById("buts").style.visibility="visible";
    $('#buts').addClass('animated bounceInDown');
    $('#m').removeClass('animated bounceInDown');
}

    $(document).ready(function() {
        $("body").css("display", "none");
        $("body").fadeIn(2000);

            $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }
    });