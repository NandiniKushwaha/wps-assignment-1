function validateform()
{  
var name=document.myform.name.value;   
var pan=document.myform.pan.value;   

if (name==null || name==""){  
  alert("name can't be blank");  
  return false;  
}
if (pan==null || pan==""){  
  alert("PAN CARD number can't be blank");  
  return false;  
}
}  