
   const canvas = document.getElementById("Bandera");
   const ctx = canvas.getContext('2d');
    
   var img = new Image();
   img.src = "/eagle.jpg"

    ctx.lineWidth = "2";
    ctx.fillStyle = "brown";
    ctx.fillRect(10, 10, 60, 400);
    ctx.fillStyle = "#129907";
    ctx.fillRect(70, 10, 150, 200);
    ctx.strokeRect(220,12,150,198);
    ctx.fillStyle = "red";
    ctx.fillRect(370, 10, 150, 200);

img.onload = function() 
{
    ctx.drawImage(img,250,55,100,100)
}



