
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
function printPyramid(height) {
       	var n=2,s='';
  for (var i=0;i<height;i++){
    s+=' '
  }
  s+='#'
	for (i=0;i<height;i++){
    s=s.slice(1);
			s=s+"#";
    console.log(s);
		n++;
	}
}
