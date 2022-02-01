class Game {
    constructor(canvas) {
        this.canvas = canvas;

        this._timeSinceStarted = 0;
    }

    start() {
        console.log('game started');
        this._lastTimeUpdate = 0;
        this._timeSinceStarted = 0;
        this.idGameLoop = setInterval(this._processUpdate.bind(this), 1000 / 30);
    }

    _processUpdate() {
        const curTime = new Date().getTime();
        const deltaTime = curTime - this._timeSinceStarted;
        this._timeSinceStarted = curTime;
        this.update(deltaTime, this._timeSinceStarted);
    }

    update(delta, time) {
        console.log('delta, time', delta, time);
    }
}