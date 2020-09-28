!DOCTYPE html>
<html>
<style type="text/css">
	div {
       border-radius: 5px;
       background-color: green;
       padding: 20px;
}
</style>
<head>
    <script type="text/javascript">
    	function validation(){
    		var x = document.forms["myForm"]["email"].value;
    		var atpos = x.indexOf("@");
    		var dotpos = x.lastIndexOf(".");
    		if(atpos+1 || dotpos<atpos+2 || dotpos+2>=x.length){
    			alert("Email is not valid");
    			return false;
    		}
    	}
    </script>
	<title></title>
</head>
<body>
<div>
	<h2>Enter email to validate</h2><br>
	<form name="myForm" onsubmit="return validation()" method="post">
	   <input type="text" name="email">
	</form>
	<input type="submit" value="submit">
</div>
</body>
</html>