$(document).ready(function()
{
    //Variables for DOM and overall flow
    var clickCount = -1;
    var $top = $("#top");
    var $button = $("#button");    
    var $div = $("#response");
    
    //Variables for animation function            
    var button = document.getElementById('button');
    const maxXPosition = window.innerWidth - 102;
    var speedX = 10;

    //important click counts
    var key1 = 18;
    var key2 = 22;
    var key3 = 24;
    var key4 = 25;
    var key5 = 26;
    var key6 = 27;
    var key7 = 28;
    var key8 = 29;
    var key9 = 47;

    //All responses
    var responses = ["Why did you push the button?", "You pushed it again?", "Ok stop pushing it.", "I'm serious.",
                     "Ok you really need to stop pusing the button.", "If you push it again your computer will crash.",
                     "Ok it was only a threat, just please stop.", "I asked nicely.", "Fine. . . Have it your way", "", "", 
                     "", "You're still clicking?", "You've got to be kidding me.", "ERROR", "I know you can read. Didn't you see the ERROR?", 
                     "You're annoying me at this point.", "Two can play at this game.","I'll give you one more chance. . .",,
                     "You're still going to click a blue button?", "Wow", "Just wow. . .",,"No worries, I have plenty of tricks up my sleeve.", 
                     "How about now. . .", "No way you push it now.", "You're good.", "Try and find it now. (Hint: Hover)", "I give up.",, "You win.", 
                     "But you have to at least hear my story:", "There once was an old empty house.",
                     "In this house was nothing but a cardboard box.", "Within this cardboard box was a simple black briefcase.",
                     "Written on the briefcase were some simple words.", "DO NOT OPEN", "Do you want to know what's inside?",
                     "I'm sure you do.", "Well I will tell you.", "Inside is a button. . .", "A red button.", "But not just any red button. . .",
                     "THE BIG RED BUTTON", "And next to THE BIG RED BUTTON is a note.", "A note that says something very important.",
                     "The note says. . ."];
    

    $button.click(function() 
    {   
        //Some clicks call special function, otherwise a click just moves to the next response
        if (clickCount == key1)
        {            
            blue();
            clickCount++;            
        }
        else if (clickCount == key2)
        {
            red();
            clickCount++;            
        }
        else if (clickCount == key3)
        {
            small();
            clickCount++;            
        }
        else if (clickCount == key4)
        {
            move();
            clickCount++;            
        }
        else if (clickCount == key5)
        {
            moving();
            clickCount++;            
        }
        else if (clickCount == key6)
        {
            stop();
            clickCount++;
        }
        else if (clickCount == key7)
        {
            chaos();
            clickCount++;
        }
        else if (clickCount == key8)
        {
            undo();
            clickCount++;
        }
        else if (clickCount == key9)
        {
            $div.empty();
            $div.append('<h3 id="text" class="center">Do NOT press THE BIG RED BUTTON.</h3>');
            clickCount = -1;
        }
        else 
        {
            clickCount++;
            
            $div.empty();
            $div.append('<h3 id="text" class="center">' + responses[clickCount] + '</h3>');
            console.log(clickCount);
        }                        
    });

    //Turns the title and button blue
    function blue() 
    {
        $top.empty();
        $top.append('<h1 id="blueTitle" class="center buttonBorder">THE BIG BLUE BUTTON</h1>');

        document.getElementById("button").id = "blue";

        $div.empty();
        $div.append('<h3 id="text" class="center">Boom. Look at that, now it\'s blue.</h3>');
    }

    //Turns the title and button back to red
    function red()
    {
        $top.empty();
        $top.append('<h1 id="title" class="center buttonBorder">THE BIG RED BUTTON</h1>');

        document.getElementById("blue").id = "button";

        $div.empty();
        $div.append('<h3 id="text" class="center">Okay, so the Blue Button didn\'t faze you.</h3>');        
    }

    //Makes the button very small
    function small()
    {
        $top.empty();
        $top.append('<h1 id="smallTitle" class="center buttonBorder">THE SMALL RED BUTTON</h1>');

        $button.addClass("small");

        $div.empty();
        $div.append('<h3 id="text" class="center">Try and click it now. . .</h3>');        
    }

    //Moves the small button 
    function move()
    {
        $button.removeClass("center").addClass("move");

        $div.empty();
        $div.append('<h3 id="text" class="center">' + responses[clickCount] + '</h3>');        
    }

    //Makes the button normal sized and calls the animation function loop
    function moving()
    {
        $top.empty();
        $top.append('<h1 id="title" class="center">THE BIG RED BUTTON</h1>');

        $button.removeClass("move small").addClass("center");

        $div.empty();
        $div.append('<h3 id="text" class="center">' + responses[clickCount] + '</h3>');

        var positionX = 102;
        loop(positionX);          
    }

    //Animates button to move side to side across the screen.
    function loop(positionX)
    {
        //Animation function below was based off function from: http://www.codeblocq.com/2016/05/Two-Ways-of-Creating-an-Animation-Loop-in-JavaScript/
        function step() 
        {
            positionX = positionX + speedX;
            if (positionX > maxXPosition || positionX < 102) 
            {
                speedX = speedX * (-1);
            }
            button.style.left = positionX + 'px';
            if (clickCount == 28)
            {
                return -1;
            }
            else
            {
            window.requestAnimationFrame(step);
            }
        }
        if(clickCount == 28)
        {
            return -1;
        }
        else
        {
            window.requestAnimationFrame(step);
        }        
    }
    
    //Called after the animation has stopped
    function stop()
    {  
        $div.empty();
        $div.append('<h3 id="text" class="center">' + responses[clickCount] + '</h3>');        
    }

    //Changes background red, making the button invisible. Adds classes to the button to make it visible on mouseover
    function chaos()
    {
        $top.empty();
        $top.append('<h1 id="blackTitle" class="center">THE INVISIBLE BUTTON</h1>');

        $div.empty();
        $div.append('<h3 id="text" class="center">' + responses[clickCount] + '</h3>');
        
        $("*").css("background-color", "red");
        
        $button.removeClass("center").addClass("invisible  otherMove");
        $button.removeAttr("style");
        
        $button.hover(function ()
        {
            $button.removeClass("invisible").addClass("buttonBorder");
        }, function(){
            $button.removeClass("buttonBorder").addClass("invisible");
        });                
    }

    //Undoes the chaos function resetting everything back to normal
    function undo()
    {
        $("*").removeAttr("style");

        $button.removeClass("invisible  otherMove").addClass("center");
        $button.hover(function ()
        {
            $button.removeClass("invisible").addClass("buttonBorder");
        });

        $top.empty();
        $top.append('<h1 id="title" class="center">THE BIG RED BUTTON</h1>');

        $div.empty();
        $div.append('<h3 id="text" class="center">' + responses[clickCount] + '</h3>');
    }
});
