// for(var a = 0; a<document.querySelectorAll("button").length;a++)
// {
//     document.querySelectorAll("button")[a].addEventListener("click",clickfunction);
// }


for(var a = 0; a<document.querySelectorAll("button").length;a++)
{
    document.querySelectorAll("button")[a].addEventListener("click",function()
    {
        console.log("Hey");
        var a = this.innerHTML;
        if(a === "w")
        {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        }
        else if(a === "a")
        {
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        }
        else if(a === "s")
        {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        }
        else if(a === "d")
        {
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        }
        else if(a === "j")
        {
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        }
        else if(a === "k")
        {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
        else if(a === "l")
        {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        }
    });
}

document.addEventListener("keydown",function(event)
{
    var a = event.key;
    if(a === "w")
    {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(a === "a")
    {
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(a === "s")
    {
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(a === "d")
    {
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if(a === "j")
    {
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(a === "k")
    {
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(a === "l")
    {
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
})