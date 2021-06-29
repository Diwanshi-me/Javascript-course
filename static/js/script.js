function ageindays()
{
var year=prompt("what is birth year?");
var age=(2021-year)*365;
document.getElementById("answer").innerHTML="You are "+age+" days old.";
}
function resett()
{
    document.getElementById("answer").remove();
}
function gencat()
{
    var image=document.createElement('img');
    var div=document.getElementById('con-2');
    image.src = "static/images/dog.png";
    div.appendChild(image);
}
function rpsf(choice)
{
    //console.log(choice);
    var human,bot;
    human=choice.id;
    //console.log(ran());
    bot= numbertochoice(ran());
    result=decide(human,bot); 
    //console.log(result);
    //console.log(bot);// [0,1]humanlost [1,0]humanwon [0.5]tie
    message = finalMessage(result); //as a dictionary {message:,color:}
    //console.log(message);
    rps(human,message,bot);
}
function decide(human,bot)
{
    //object with all possibilities
    var r=
    {
        'rock':{'rock':0.5,'paper':0,'scissors':1},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'rock':0,'paper':1,'scissors':0.5}
    };
    var myscore= r[human][bot];
    var compscore=r[bot][human];
    return[myscore,compscore];
}
function ran()
{
    return Math.floor(Math.random()*3);
}
function numbertochoice(number)
{
    return ['rock','paper','scissors'][number];
}
function finalMessage([myscore,compscore])
{
    if(myscore===0)
    {
        return {
            'message':'You lost!',
            'color':'red'
        };
    }
    else if(myscore==1)
    {
        return{
            'message':'You won!',
            'color':'blue'
        };
    }
    else{
        return{
            'message':'You tied!',
            'color':'yellow'
        };
    }
}
function rps(human,message,bot)
{
//store all images first
var imgdb =
{
    'rock': document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
};
//remove all the images
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();
//create divs for result
var humandiv=document.createElement('div');
var botdiv=document.createElement('div');
var messagediv=document.createElement('div');
//add content
humandiv.innerHTML="<img src='"+imgdb[human]+"'>";
//append it
document.getElementById('rps').appendChild(humandiv);
messagediv.innerHTML="<h1 style='color:"+message['color']+";font-size:60px; padding:30px;'>"+ message['message'] + "</h1";
document.getElementById('rps').appendChild(messagediv);
botdiv.innerHTML="<img src='"+imgdb[bot]+"'>";
//append it
document.getElementById('rps').appendChild(botdiv);
}

//challenge four
//returns an array with all buttons
let allbuttons = document.getElementsByTagName('button');

//console.log(allbuttons);

let copyofbuttons=[];

//duplicating all buttons
for(let i=0;i<allbuttons.length;i++)
{
    copyofbuttons.push(allbuttons[i].classList[1]);
}
console.log(copyofbuttons);

function changecolor(color)
{
    console.log(color);
    if(color.value==='random')
    {
        brandom(color.value);
    }
    else if(color.value==='reset')
    {
        buttoncolorreset();
    }
    else
    {
        buttoncolor(color.value);
    }
}
function brandom()
{
    for(let i=0;i<allbuttons.length;i++)
    {
        
    }
}
function buttoncolorreset()
{

}
 function buttoncolor(color)
{

}