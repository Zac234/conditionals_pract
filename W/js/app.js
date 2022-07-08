var age = 19
var is_subscribed=true

if(age >= 18 && is_subscribed){
    console.log("you are of age and subscribed")
}else if(age >= 18 && isnt_subscribed){
    console.log("you may be old enough but you are not subscribed")
}else if(age<18 && is_subscribed){
    console.log("I dont know how you did this but you arent of age and you subscribed")
}else if (age<18 && isnt_subscribed){
    console.log("congragulation the site failed to load because you are not of age and you arent subbed")
} else{
    console.log("the sit efailed to load because of something that you are doing wrong please try again at a later date or never its up to you")
}