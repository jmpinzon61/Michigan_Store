var circle = document.getElementById("circle");
var circleArray = circle.textContent.split('');
circle.textContent = '';

for (var i = 0; i < circleArray.length; i++) {
    circle.innerHTML += '<span class="animate__animated animate__heartBeat" style="transform:rotate(' + ((i + 4) * 10) + 'deg);">' + circleArray[i] + '</span>';
}

circle.innerHTML += '<i class="fa-solid fa-plus animate__animated animate__pulse" style="font-size: 35px; position: absolute; border-radius: 50%; background-color: #110059; border: 7px solid #ffffff; color: #ffffff; padding: 5px; margin-left: 2px"></i>';