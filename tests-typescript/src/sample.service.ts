export default class CanvasServiceAPI {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  constructor() {
    this.canvas = document.getElementById("main") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");
  }

  drawExample() {
    this.ctx.strokeRect(50, 35, 50, 50);
    this.ctx.strokeRect(150, 35, 50, 50);
    this.ctx.strokeRect(250, 35, 50, 50);
  }
}
