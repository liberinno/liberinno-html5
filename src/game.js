class Game {
    constructor(canvas) {
        this.canvas = canvas;

        this._timeStarted = -1;
        this._lastTimeUpdate = -1;
    }

    start() {
        console.log('game started');
        this._lastTimeUpdate = 0;
        this._timeSinceStarted = 0;
        this.idGameLoop = setInterval(this._processUpdate.bind(this), 1000 / 30);
    }

    _processUpdate() {
        const curTime = new Date().getTime();
        if (this._timeStarted < 0) this._timeStarted = curTime;
        const timeSinceStarted = curTime - this._timeStarted;
        if (this._lastTimeUpdate < 0) this._lastTimeUpdate = curTime;
        const delta = curTime - this._lastTimeUpdate;
        this._lastTimeUpdate = curTime;

        this.update(delta / 1000, timeSinceStarted / 1000);
    }

    update(delta, time) {
        console.log('delta, time', delta, time);
    }
}