function fun(n)
{
	var mod = document.getElementById('myModal'+n);
	mod.style.display = "block";
	var span = document.getElementsByClassName("close")[n-1];
	span.onclick = function() 
	{
   		mod.style.display = "none";
	}
	window.onclick = function(event) 
	{
    	if (event.target == mod) 
    	{
    	    mod.style.display = "none";
    	}
    }
}