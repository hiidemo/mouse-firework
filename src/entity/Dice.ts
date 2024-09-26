import BaseEntity from "./BaseEntity";

export default class Dice extends BaseEntity {
  sides: number;
  value: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    radius: number,
    alpha: number,
    sides: number,
    lineWidth?: number
  ) {
    super(ctx, x, y, color, radius, alpha, lineWidth);
    this.sides = sides;
	this.value = 1;

  }

  drawDot(x: number, y: number, size: number) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, Math.PI * 2);
    this.ctx.fill();
  }

  paint(): void {
    // Vẽ hình vuông cho xúc xắc
	const { ctx, sides, radius } = this;
	const size = radius * 2;
	this.value = Math.floor(Math.random() * 6) + 1;
	this.x = 0;
	this.y = 0;

	ctx.fillStyle = 'white';
	ctx.strokeStyle = '#ccc';
	ctx.lineWidth = 1;
	ctx.fillRect(this.x, this.y, size, size);\
	ctx.strokeRect(this.x, this.y, size, size);

	// Vẽ các chấm
	ctx.fillStyle = 'black';
	const dotSize = size / 10;
	const space = size / 4;

	switch (this.value) {
		case 1:
			this.drawDot(this.x + size / 2, this.y + size / 2, dotSize);
			break;
		case 2:
			this.drawDot(this.x + space, this.y + space, dotSize);
			this.drawDot(this.x + 3 * space, this.y + 3 * space, dotSize);
			break;
		case 3:
			this.drawDot(this.x + space, this.y + space, dotSize);
			this.drawDot(this.x + size / 2, this.y + size / 2, dotSize);
			this.drawDot(this.x + 3 * space, this.y + 3 * space, dotSize);
			break;
		case 4:
			this.drawDot(this.x + space, this.y + space, dotSize);
			this.drawDot(this.x + 3 * space, this.y + space, dotSize);
			this.drawDot(this.x + space, this.y + 3 * space, dotSize);
			this.drawDot(this.x + 3 * space, this.y + 3 * space, dotSize);
			break;
		case 5:
			this.drawDot(this.x + space, this.y + space, dotSize);
			this.drawDot(this.x + 3 * space, this.y + space, dotSize);
			this.drawDot(this.x + size / 2, this.y + size / 2, dotSize);
			this.drawDot(this.x + space, this.y + 3 * space, dotSize);
			this.drawDot(this.x + 3 * space, this.y + 3 * space, dotSize);
			break;
		case 6:
			this.drawDot(this.x + space, this.y + space, dotSize);
			this.drawDot(this.x + 3 * space, this.y + space, dotSize);
			this.drawDot(this.x + space, this.y + size / 2, dotSize);
			this.drawDot(this.x + 3 * space, this.y + size / 2, dotSize);
			this.drawDot(this.x + space, this.y + 3 * space, dotSize);
			this.drawDot(this.x + 3 * space, this.y + 3 * space, dotSize);
			break;
	}

	
  }
}