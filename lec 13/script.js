var db = {
    username: "shehryar",
    password: "111"
}
var newsFeed = [
    {
        user: "ahmad",
        status: "happy today"
    },
    {
        user: 'ali',
        status: "sad"
    }
]

var un = prompt( "enter username");
var pas = prompt("enter pass");

if(un === db.username && pas === db.password)
{
    console.log(newsFeed)
}
else
{
    alert("failed!!");

}

