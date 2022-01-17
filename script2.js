//CSS Styling javascript
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        
        var circle = function (x, y, radius, fillCircle) {
            ctx.beginPath();
            ctx.arc(x, y, radius, Math.PI * 2, false);
            if (fillCircle) {
                ctx.fill();
            } else {
                ctx.stroke();
            }
        };

        var drawBee = function (x, y) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = "Black";
            ctx.fillStyle = "Gold";

            circle(x, y, 8, true);
            circle(x, y, 8, true);
            circle(x - 5, y - 11, 5, false);
            circle(x + 5, y - 11, 5, false);
            circle(x - 2, y - 1, 2, false);
            circle(x + 2, y - 1, 2, false);

        };

        var update = function(coordinate) {
            var offset = Math.random() * 4 - 2;
            coordinate += offset;

            if (coordinate > 20) {
                coordinate = 20;
            }
            if (coordinate < 10){
                coordinate = 10;
            }
            return coordinate;
        };

        var x = 5;
        var y = 5;

        setInterval(function() {
            ctx.clearRect(0, 0, 200, 200);

            drawBee(x, y);
            x = update(x);
            y = update(y);

            ctx.strokeRect(0, 0, 200, 200);
        }, 30);