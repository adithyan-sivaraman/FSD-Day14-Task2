var resultField = [];
    document.addEventListener("keyup",function(event){
    if(event.key=="Backspace"&&resultField.length>0){
      resultField.pop();
      document.getElementById("result").value=resultField.join("");
    }
    if(event.key === "1") {
      resultField.push(1)
      document.getElementById("result").value=resultField.join("");
      document.getElementById("1").click()
      
    
    }
    else if(event.key === "2"){
      resultField.push(2)
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "3"){
      resultField.push(3)
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "4"){
      resultField.push(4)
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "5"){
      resultField.push(5)
      document.getElementById("result").value=resultField.join("");
      
    }
  
    else if(event.key === "6"){
      resultField.push(6)
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "7"){
      resultField.push(7)
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "8"){
      resultField.push(8)
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "9"){
      resultField.push(9)
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "0"){
      resultField.push(0)
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "."){
      resultField.push(".")
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "*"){
      resultField.push("*")
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "-"){
      resultField.push("-")
      document.getElementById("result").value=resultField.join("");
      
    }
  
    else if(event.key === "+"){
      resultField.push("+")
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "/"){
      resultField.push("/")
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "s"){
      resultField.push('√');
      document.getElementById("result").value=resultField.join("");
      
    }
    else if(event.key === "="){
      
      
      
      var arr = resultField.join("");
      var result = eval(arr)
  
      if(typeof result =='number'){
      resultField.length=0;
      resultField.push(result)
      document.getElementById("result").value=resultField.join("");
    }
    else {
      document.getElementById("result").value=resultField.join(""); 
    }      
    }
   
    else if(event.key == "C".toLowerCase()){
      document.getElementById("result").value="";
      resultField.length=0; 
    }
  })    