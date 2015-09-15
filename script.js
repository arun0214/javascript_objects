// Q1

function q1(){
    var data=[1,4,8,5,4,6,54,4,4,8,5,6,4,5,4,5,5];
    var arrayLength=data.length;
	
    var userValue=prompt("Enter the number")
	alert(data)
    var positionData=[]
    if(userValue>=arrayLength){
        alert(data)
    }else{
        var j=0;
        for(var i=arrayLength-1;i>=arrayLength-userValue;i--){
            positionData[j]=data[i];
            j++
        }
        alert(positionData)
    }

}

//Q2

function q2(){
    var myColor=["Red","Green","brown"]
    alert('"'+myColor.toString()+'"')
}
	
//Q3

function q3(){		
		var array = [2,3,4,5,5];
		document.write("The element in array are: "+array+" ");
		var n = Number(prompt("Enter the element to remove:"));
		
		remove_element(array,n);
	}
	function remove_element(array,n){		
		var index = array.indexOf(n);
		if(index > -1){
			array.splice(index,1);	
		}
		document.write("<br>Final elements in array are: "+array+" ");
	}
	
	
//Q4

function q4(){
		var email = prompt("Enter your email: ");
		var length = email.length;
		var i = 0;
		var j = 0;
		document.write("<br>Your email address = "+email[0]+email[1]+email[2]+email[3]);
		for(i = 4; i<length;i++){
			if(email[i] === '@'){
				for(j=i;j<length;j++){
					document.write(email[j]);
				}
				break;	
			}
			document.write("*");	
		}		
		document.write(" ");
	}
	
//Q5
function q5(){
		var repeatString = prompt("Enter any string: ");
		document.write("The string you entered ="+repeatString+"<br><br>");
		var repeatTime = prompt("Enter number of repetition: ");
		repeat(repeatString,repeatTime);
	}
	
	function repeat(repeatString,repeatTime){
		document.write("So the string you required =");
		var i = 0;
		for(i = 0; i<repeatTime;i++){
			document.write(repeatString+" !");
		}
		document.write("");
	}
	
//Q6
function q6(){
		var array = "we are doing assignment ";
		document.write("Given string ="+array+" "); 		
		var insertString = prompt("Enter any strings to add given string: ");
		var insertIndex = prompt("Enter index at which the string gets added: ");
		insert_string(array,insertString,insertIndex);
	}
	
	function insert_string(array,insertString,insertIndex){
		insertString  = insertString+ " ";
		document.write("<br>Final string is " +  array.substring(0,insertIndex-1)+insertString+array.substring(insertIndex-1));
	}
	
//Q7
function q7(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		var month = date.getMonth()+1;
		document.write("Month number: "+month+"<br>");
		month_name(month);
	}

	function month_name(month){
		switch(month){
			case 1:
				document.write("Month is January.");
				break;
			case 2:
				document.write("Month is February.");
				break;
			case 3:
				document.write("Month is March.");
				break;
			case 4:
				document.write("Month is April.");
				break;
			case 5:
				document.write("Month is May.");
				break;
			case 6:
				document.write("Month is June");
				break;
			case 7:
				document.write("Month is July.");
				break;
			case 8:
				document.write("Month is August.");
				break;
			case 9:
				document.write("Month is September.");
				break;
			case 10:
				document.write("Month is October.");
				break;
			case 11:
				document.write("Month is November.");
				break;
			case 12:
				document.write("Month is December.");
				break;
		}
		
	}
	
//Q8
function q8(){		
		var input = prompt("Enter date:(mm/dd/yyyy)");
		var date = new Date(input);
		document.write("The day is "+date+"<br>");
		yesterday(date);
	}

	function yesterday(date){
		date.setDate(date.getDate()-1);
		document.write("The day before was "+date);
	}


//Q9
function q9(){
		document.write("Alphanumeric Testing<br>");		
		var input = prompt("Enter a character: ");
		check_alpha(input[0]);
	}

	function check_alpha(input){
		if((input>='a' && input<='z') ||(input>='A' && input<='Z') ||(input>='0' && input<='9')){
			document.write("The entered input character is an alphanumeric character.");
		}
		else{
			document.write("The entered input character is not an alphanumeric character.");
		}
	}


//Q10
function q10(){	
		document.write("Uppercase Testing<br>");
		var input = prompt("Enter a character: ");
		check(input[0]);
	}

	function check(input){
		if(input>='A' && input<='Z'){
			document.write("The entered input first character is an uppercase character.");
		}
		else{
			document.write("The entered input  first character is not an uppercase character.");
		}
	}


//Q11
function q11(){		
		var input = prompt("Enter a strings: ");
		validate(input);
	}

	function validate(input){
		var i = 0;
		var counter = 0;
		for(i=0;i<input.length;i++){
			if((input[i] === 'a') ||(input[i] === 'e') ||(input[i] === 'i') ||(input[i] === 'o') ||(input[i] === 'u')||(input[i] === 'A') ||(input[i] ==='E') ||(input[i] === 'I') ||(input[i] === 'O') ||(input[i] === 'U')){
				counter++;
			}				
		}
		document.write("The number of vowels in the given string is "+counter+".");
	}