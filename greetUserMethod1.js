
const greet =(userType,firstName,lastName) =>{
  
if(firstName !="" && lastName ==null){
switch(userType) {
    case 1:
        console.log("Thank you "+firstName+" for your validation."); 
      break;
    case 2:
        console.log("Thank you "+firstName+" for keeping the network secure.");
      break;
      case 3:
            console.log("Thank you "+firstName+" for using the platform.");
          break;
    default:
        
        console.log("Please enter proper Usertype");
  }
}
  else{
    switch(userType) {
        case 1:
            console.log("Thank you "+firstName+" "+lastName +" for your validation."); 
          break;
        case 2:
            console.log("Thank you "+firstName+" "+lastName +" for keeping the network secure.");
          break;
          case 3:
            console.log("Thank you "+firstName+" "+lastName +" for using the platform.");
          break;
        default:
            console.log("Please enter proper Usertype");
            
      }
  }
}

greet("Shweta","darekar");
greet(1,"Shweta");
greet(2,"Shweta","darekar");
greet(2,"Shweta");
greet(3,"Shweta","darekar");
greet(3,"Shweta");
