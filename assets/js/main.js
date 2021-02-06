(function () {
    let rotateY = 0,
        rotateX = 0;
    document.onkeydown = function(e) {
        if (e.key === 'ArrowLeft') rotateY -= 5;
        else if (e.key === 'ArrowUp') rotateX += 5;
        else if (e.key === 'ArrowRight') rotateY += 5;
        else if (e.key === 'ArrowDown') rotateX -= 5;

        document.querySelector('.cube')
            .style
            .transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
})();
