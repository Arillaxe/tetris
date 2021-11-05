import { AssetsManager } from './AssetsManager';
import { ConfigManager, gameOptions } from './ConfigManager';


export class RenderManager {
  private brickSize: number;
  private gameOptions: gameOptions;

  constructor (
    private readonly ctx: CanvasRenderingContext2D,
    private readonly assetsManager: AssetsManager,
    private readonly configManager: ConfigManager,
  ) {
    this.gameOptions = this.configManager.getOptions();
    this.ctx.imageSmoothingEnabled = false;
    this.brickSize = this.gameOptions.screen.height / 22;
  }

  clear () {
    const { colors, screen } = this.gameOptions;

    this.ctx.save();
    this.ctx.fillStyle = colors.background;
    this.ctx.fillRect(0 , 0, screen.width, screen.height);
    this.ctx.restore();
  }

  drawWalls () {
    const atlas = this.assetsManager.getAsset('atlas');

    for (let i = 0; i < 12; i++) {
      this.ctx.drawImage(atlas, 56, 0, 8, 8, i * this.brickSize, 0, this.brickSize, this.brickSize);
    }
    for (let i = 0; i < 12; i++) {
      this.ctx.drawImage(atlas, 56, 0, 8, 8, i * this.brickSize,  21 * this.brickSize, this.brickSize, this.brickSize);
    }
    for (let i = 1; i < 21; i++) {
      this.ctx.drawImage(atlas, 56, 0, 8, 8, 0, i * this.brickSize, this.brickSize, this.brickSize);
    }
    for (let i = 1; i < 21; i++) {
      this.ctx.drawImage(atlas, 56, 0, 8, 8, 11 * this.brickSize, i * this.brickSize, this.brickSize, this.brickSize);
    }
  }
}
