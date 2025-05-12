// document.addEventListener('DOMContentLoaded', () => {
//     let number = document.getElementById('number1');
//     let counter = 0;

//     let interval = setInterval(() => {
//         if (counter >= 65) {
//             clearInterval(interval);
//         } else {
//             counter += 1;
//             number.textContent = counter + '%';
//         }
//     }, 31);
// });


let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;


setInterval(() => {
    if(counter1 == 96) {
        clearInterval()
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + '%';
    }
}, 20 )

setInterval(() => {
    if(counter2 == 30) {
        clearInterval()
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + '%';
    }
}, 25 )


setInterval(() => {
    if(counter3 == 50) {
        clearInterval()
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + '%';
    }
}, 18 )


setInterval(() => {
    if(counter4 == 99) {
        clearInterval()
    } else {
        counter4 += 1;
        number4.innerHTML = counter4 + '%';
    }
}, 28 )






document.addEventListener("DOMContentLoaded", function() {
    // First progress bar
    let gradientStart1 = document.querySelector('#GradientColor1 stop:first-child');
    let gradientEnd1 = document.querySelector('#GradientColor1 stop:last-child');
    let circle1 = document.querySelector('#progress1 circle');

    // Second progress bar
    let gradientStart2 = document.querySelector('#GradientColor2 stop:first-child');
    let gradientEnd2 = document.querySelector('#GradientColor2 stop:last-child');
    let circle2 = document.querySelector('#progress2 circle');

    // Third progress bar
    let gradientStart3 = document.querySelector('#GradientColor3 stop:first-child');
    let gradientEnd3 = document.querySelector('#GradientColor3 stop:last-child');
    let circle3 = document.querySelector('#progress3 circle');

    // Fourth progress bar

    let gradientStart4 = document.querySelector('#GradientColor4 stop:first-child');
    let gradientEnd4 = document.querySelector('#GradientColor4 stop:last-child');
    let circle4 = document.querySelector('#progress4 circle');

    // Function to change gradient colors
    function changeGradientColors(gradientStart, gradientEnd, startColor, endColor) {
        gradientStart.setAttribute('stop-color', startColor);
        gradientEnd.setAttribute('stop-color', endColor);
    }

    // Example usage: Change gradient colors for the first progress bar
    changeGradientColors(gradientStart1, gradientEnd1, '#8E44AD', '#0000ff');

    // Example usage: Change gradient colors for the second progress bar
    changeGradientColors(gradientStart2, gradientEnd2, '#1F584A', '#4DB6A8');
    
    // Example usage: Change gradient colors for the third progress bar
    changeGradientColors(gradientStart3, gradientEnd3, '#136F63', '#297373');

    changeGradientColors(gradientStart4, gradientEnd4, '#00C853', '#66BB6A')

});
