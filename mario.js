
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */

//var a = querySelector('#pyramid');
//var b = querySelector('#construction');


function printPyramid(height) {
 /*      	var n=2,s='';
  for (var i=0;i<height;i++){
   // s+=' '
   s+='\u00A0';
    }
  s+='#'
	for (i=0;i<height;i++){
	//  s=s.slice(1);
	//	s=s+"#";
	//    console.log(s);
		n++;
	
		var a = document.querySelector('#pyramid');
		var b = document.querySelector('#construction');
		var  newdiv= document.createElement('br');
		var newtxt = document.createElement('p');
		newtxt.innerText=s;
		a.insertBefore(newtxt,b);
		a.insertBefore(newdiv,b);
		}
	*/

		
		var a = document.querySelector('#pyramid');
		var  brek= document.createElement('br');
		
		

		for (var i=0;i<height;i++){
			var  boxes= document.createElement('div');
			boxes.style.display="inline-block";
			for (var j=0;j<height+1;j++){
				var  box= document.createElement('div');
				box.style.width="20px";
				box.style.height="20px";
				if (i+j+1>height) {
					box.style.backgroundColor ="#f4f4f4";
          var cln = box.cloneNode(true);
        }
				boxes.appendChild(box);
			}
      boxes.appendChild(cln);
			a.appendChild(boxes);
			a.appendChild(brek);
		}

	
	var el = document.querySelector('#construction');
	el.parentNode.removeChild(el);
}

