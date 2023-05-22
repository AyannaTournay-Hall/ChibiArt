function display()
{
    var name = prompt("what is your name");
    console.log("Hey " + name);
    var age = prompt("how old are you");
    if (age == 21)
    {
        console.log("Live it up");
    }
    else if (age < 21)
    {
        console.log("almost there");
    }
    else(age > 21)
    {
        console.log("almost gone");
    }
}

function getNumber()
{
    try{
    var num = prompt("Please give me a number");
    if(num<0)
    {
        throw ("Im sorry, cannot do a negative number");
    }
    else if (num>100)
    {
        throw("Sorry that is too many times");
    }
    else if (isNaN(num))
    {
        console.log("Please only numerical values");
    }

    return num;
}
catch(e){
    console.log(e);
}


}

function loopHello()
{
    console.log("You are being asked for a number of times to say Hello");
    
    var numTimes = getNumber()
       
    for(i=0; i<numTimes;i++)
        {
            console.log("Hello there");
        
}

console.warn();
display();
loopHello();
//window.alert("Hello");
//window.confirm("Are you sure?");
//window.open("http://www.twitter.com/") ;

