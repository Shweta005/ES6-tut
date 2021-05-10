
const greet =(userType,firstName,lastName) =>{
  
   
    switch(userType) {
        case 1:
            if(firstName !="" && lastName ==null){
            console.log("Thank you "+firstName+" for your validation."); 
            }
            else{
                console.log("Thank you "+firstName+" "+lastName +" for your validation."); 
            }
          break;
        case 2:
          if(firstName !="" && lastName ==null){
            console.log("Thank you "+firstName+" for keeping the network secure.");
          }
          else{
            console.log("Thank you "+firstName+" "+lastName +" for keeping the network secure."); 
        }
          break;
          case 3:
            if(firstName !="" && lastName ==null){
                console.log("Thank you "+firstName+" for using the platform.");
            }
            else{
              console.log("Thank you "+firstName+" "+lastName +" for using the platform."); 
          }
              break;
        default:
            
            console.log("Please enter proper Usertype");
      }
    }
     
   
    
    greet("Shweta","darekar");
    //greet(1,"Shweta");
  
    