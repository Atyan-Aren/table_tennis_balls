import {makeAutoObservable} from "mobx";

export default class BallStore {
    constructor() {
        this._balls = []
        makeAutoObservable(this)
    }

    setBalls(balls) {
        this._balls = balls
    }

    get balls() {
        return this._balls
    }
}