var random_number1 = Math.floor(Math.random() * 6) + 1;
var random_number2 = Math.floor(Math.random() * 6)+ 1;
var src1 = "./images/dice" + random_number1 +".png";
var src2 = "./images/dice" + random_number2 +".png";
console.log('src 1' + src1+ typeof(random_number1));
console.log('src 2' + src2 + typeof(random_number2));

if(random_number1 > random_number2){
document.querySelector('h1').textContent = "Player 1 win";
document.querySelector('.img1').setAttribute('src', src1);
}else if(random_number1 === random_number2){
document.querySelector('h1').textContent = "Draw!";
document.querySelector('.img1').setAttribute('src', src1);
document.querySelector('.img2').setAttribute('src', src2);
}else{
document.querySelector('h1').textContent = "Player 2 win";
document.querySelector('.img2').setAttribute('src', src2);
}
