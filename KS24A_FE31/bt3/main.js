let boxes = document.querySelectorAll(".color-box");

        boxes.forEach(function(box) {
            box.addEventListener("click", function() {
                let color = window.getComputedStyle(box).backgroundColor;
                document.body.style.backgroundColor = color;
            });
        });