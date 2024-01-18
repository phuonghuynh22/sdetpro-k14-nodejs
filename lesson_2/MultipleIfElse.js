// <18  | 18-55 | >55

let clientAge = 18;

if(clientAge < 18){
    console.log("Chua du tuoi uong bia, hong ban!");
} else if(clientAge >= 18 && clientAge <= 55){
    console.log("Cho uong thoai mai!")
} else {
    console.log("Uong 2 chai thoi!")
}

/**
 * firstCondition && secondCondition -> true when both are true
 * firstCondition || secondCondition -> true when either is true
 * 
 */