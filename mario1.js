
document.querySelector("#heightt").addEventListener("change",printPyramid);
document.querySelector("#symboll").addEventListener("change",printPyramid);

function printPyramid() {
    var a = document.querySelector('#pyramid');
    height=document.querySelector("#heightt").value;
    x=document.querySelector("#symboll").value;
    a.innerHTML="";
    var  brek= document.createElement('br');
    var s="";
  for (var i=0;i<height;i++) s+='\u00A0'+'\u00A0'+'\u00A0'+'\u00A0';
      s+=x;
    for (i=0;i<height;i++){
    s=s.slice(1);
    s=s.slice(1);
    s=s+x;
    var newtxt = document.createElement('p');
    newtxt.innerText=s;
    a.appendChild(newtxt);
    a.appendChild(brek);
    }

}

