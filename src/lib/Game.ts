import { AssetsManager } from './AssetsManager';
import { ConfigManager, gameOptions } from './ConfigManager';
import { RenderManager } from './RenderManager';


export class Game {
  private configManager: ConfigManager;
  private assetsManager: AssetsManager;
  private renderManager: RenderManager;
  private needToRender = false;

  constructor (
    ctx: CanvasRenderingContext2D,
    options?: gameOptions,
  ) {
    this.configManager = new ConfigManager(options);
    this.assetsManager = new AssetsManager();
    this.renderManager = new RenderManager(ctx, this.assetsManager, this.configManager);
    this.assetsManager.onProgressChange(console.log);
  }

  start () {
    this.needToRender = true;

    this.render();
  }

  stop () {
    this.needToRender = false;
  }

  private render () {
    this.renderManager.clear();
    this.renderManager.drawWalls();

    if (this.needToRender) requestAnimationFrame(this.render.bind(this));
  }
}
