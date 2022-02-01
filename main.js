document.body.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'game_canvas');
    canvas.setAttribute('width', 640);
    canvas.setAttribute('height', 480);
    canvas.setAttribute('style', 'background-color:#000000');

    document.body.prepend(canvas);

    const game = new Game(canvas);
    game.start();
}