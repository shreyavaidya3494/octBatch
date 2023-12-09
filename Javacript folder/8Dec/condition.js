let marks=78;
if(marks>75)
{
    console.log("Distinction when marks=78");
}

if(marks>35)
{
    console.log("Pass  when marks=78");
}
else
{
    console.log("Fail");
}

//Output: Distinction when marks=78
//Output: Pass  when marks=78



let mark=30;
if(mark>75)
{
    console.log("Distinction");
}

if(mark>35)
{
    console.log("Pass");
}
else
{
    console.log("Fail because mark=30");
}
//Output:Fail because mark=30



let percent=45;
if(percent>=75)
{
    console.log("Distinctionnn");
}
else if (percent>=60 && percent<75)
{
    console.log("First division");
}
else if (percent>=45 && percent<60)
{
    console.log("Second division");
}
else if (percent>=35 && percent<35)
{
    console.log("Third division");
}
else
{
    console.log("Faileddd")
}
//Output:Second division

//else statement is not mandatory, but if conditions fail, then output will be blank, but it will not throw error