import { AssetsManager } from './AssetsManager';
import { Brick } from './BricksManager';
import { ConfigManager, gameOptions } from './ConfigManager';


export class RenderManager {
  private brickSize: number;
  private gameOptions: gameOptions;
  private atlas: HTMLImageElement;

  constructor (
    private readonly ctx: CanvasRenderingContext2D,
    private readonly assetsManager: AssetsManager,
    private readonly configManager: ConfigManager,
  ) {
    this.gameOptions = this.configManager.getOptions();
    this.ctx.imageSmoothingEnabled = false;
    this.brickSize = this.gameOptions.screen.height / 22;
    this.atlas = this.assetsManager.getAsset('atlas');
  }

  clear () {
    const { colors, screen } = this.gameOptions;

    this.ctx.save();
    this.ctx.fillStyle = colors.background;
    this.ctx.fillRect(0 , 0, screen.width, screen.height);
    this.ctx.restore();
  }

  drawWalls () {
    for (let i = 0; i < 12; i++) {
      this.ctx.drawImage(this.atlas, 56, 0, 8, 8, i * this.brickSize, 0, this.brickSize, this.brickSize);
    }
    for (let i = 0; i < 12; i++) {
      this.ctx.drawImage(this.atlas, 56, 0, 8, 8, i * this.brickSize,  21 * this.brickSize, this.brickSize, this.brickSize);
    }
    for (let i = 1; i < 21; i++) {
      this.ctx.drawImage(this.atlas, 56, 0, 8, 8, 0, i * this.brickSize, this.brickSize, this.brickSize);
    }
    for (let i = 1; i < 21; i++) {
      this.ctx.drawImage(this.atlas, 56, 0, 8, 8, 11 * this.brickSize, i * this.brickSize, this.brickSize, this.brickSize);
    }
  }

  drawBrick(brick: Brick) {
    const { x, y, color, points } = brick;

    for (const point of points) {
      this.ctx.drawImage(this.atlas, 8 * color, 0, 8, 8, (x + point[0]) * this.brickSize,  (y + point[1]) * this.brickSize, this.brickSize, this.brickSize);
    }
  }
}
