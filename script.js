 
 let products =[
            "WhatsApp" ,
            "Telegram" ,
            "Instragram" ,
            "Facebook"  ,
            "Snapchat" ,
            "Camera" ,
            " Calculator" ,
            "Google" ,
            "Chrome" ,
            "Email"  ,
            "Gmail"  ,
            "Calendar" ,
            "Gallery"  ,
            "Photo"  ,
            "Spotify" ,
            "YouTube" ,
            "Google Meet"  ,
            "Notepad"  ,
            "Setting"  ,
            "Message"  ,
            "Twitter"  , 
            "Google pay" ,
            "Play Store"
            
     ]
     
     
   function filterProducts(event){
       
     
     userValue = event.target.value.toLowerCase().trim() ;
  
     let matching = [] ;
     
     for(let i=0 ; i<products.length ; i++){
         product = products[i] ;
         
     if(product.toLowerCase().includes(userValue)){
         matching.push(product) ;
     }
     } 

     showProduct(matching);
    
      }
     
      
  function showProduct(items){
          
 let div = document.getElementById("products");
 
 
 if(items.length===0){
     div.innerHTML = `<p>Esa koi app nhi mil rha hai.😞😔<p/>`;
     return;
  
 }

   div.innerHTML="" ;
 for(let i=0; i<items.length; i++){
     div.innerHTML += `<p>${items[i]}<p/>`;
     
 }
  }
 

showProduct(products);

  
 
 
 
 function numberTable(){
let num = +document.getElementById("num").value;
  let tab = "" ;
  

  
  for(let x=1; x<=10 ; x++){
tab += `<p> ${num} × ${x}= ${num*x}</p>`;

   }
    document.getElementById("tab").innerHTML = tab;
 }
 
 
 function addNumber(){
let first = +document.getElementById('first').value ;
let second = +document.getElementById('second').value ;
let cal = document.getElementById('cal') ;

if(first==="" || second===""){
    
    cal.innerHTML = "Please enter both number." ;
    return;
}

  let sum =  `${first}+ ${second} = ${first+second}`;


 cal.innerHTML = sum ;

}






function subNumber(){
let first = +document.getElementById('first').value ;
let second = +document.getElementById('second').value ;
let cal = document.getElementById('cal') ;

if(first==="" || second===""){
    
    cal.innerHTML = "Please enter both number." ;
    return;
}

  let sub =  `${first} - ${second} = ${first-second}`;


 cal.innerHTML = sub ;

}




function divideNumber(){
let first = +document.getElementById('first').value ;
let second = +document.getElementById('second').value ;
let cal = document.getElementById('cal') ;

if(first==="" || second===""){
    
    cal.innerHTML = "Please enter both number." ;
    return;
}

  let divide =  `${first}÷${second} = ${first/second}`;


 cal.innerHTML = divide ;

}




function multiplyNumber(){
let first = +document.getElementById('first').value ;
let second = +document.getElementById('second').value ;
let cal = document.getElementById('cal') ;

if(first==="" || second===""){
    
    cal.innerHTML = "Please enter both number." ;
    return;
}

  let multiply =  `${first} ×${second} = ${first*second}`;


 cal.innerHTML = multiply;

}


 
 
 
 
 