function test()
{ var T =document.getElementsByClassName ("phrase");
var i ; for (i=0;i< T.length;i++) { if (T[i].style.fontWeight=="normal") {T[i].style.fontWeight="bold" ; }
else {T[i].style.fontWeight="normal";} }
 ;}

 function italia()
 { var T =document.getElementsByClassName ("phrase") ;
 var i ; for (i=0;i<T.length;i++) {if (T[i].style.fontStyle=="normal")  {T[i].style.fontStyle="italic" ;}
else {T[i].style.fontStyle="normal" ;}  } 
}

function underlined()
 { var T =document.getElementsByClassName ("phrase") ;
 var i ; for (i=0;i<T.length;i++) {if (T[i].style.textDecoration=="")  {T[i].style.textDecoration="underline" ;}
else {T[i].style.textDecoration="" ;}  }  console.log (T[i].style.textDecoration)
}

function fontschange()
{ var T=document.getElementById ("fonts").value ;
  var m=document.getElementsByClassName ("phrase") ;
  for (i=0;i<T.length;i++) { m[i].style.fontSize=T ;} 
}


function fontssfamily()
{ var T=document.getElementById ("police").value ;
  var m=document.getElementsByClassName ("phrase") ;
  for (i=0;i<T.length;i++) { m[i].style.fontFamily = T ;} 
  console.log (m[i].style.fontFamily)
}

