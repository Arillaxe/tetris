import { AssetsManager } from './AssetsManager';
import { Brick, BricksManager } from './BricksManager';
import { ConfigManager, gameOptions } from './ConfigManager';
import { RenderManager } from './RenderManager';
import { TimeManager } from './TimeManager';


export class Game {
  private configManager: ConfigManager;
  private assetsManager: AssetsManager;
  private renderManager: RenderManager;
  private bricksManager: BricksManager;
  private timeManager: TimeManager;
  private needToRender = false;
  private currentBrick: Brick;
  private gameSpeed = 300;

  constructor (
    ctx: CanvasRenderingContext2D,
    options?: gameOptions,
  ) {
    this.configManager = new ConfigManager(options);
    this.assetsManager = new AssetsManager();
    this.renderManager = new RenderManager(ctx, this.assetsManager, this.configManager);
    this.bricksManager = new BricksManager();
    this.timeManager = new TimeManager();

    this.assetsManager.onProgressChange(console.log);
    this.currentBrick = this.bricksManager.getRandomBrick();
  }

  start () {
    this.needToRender = true;

    this.tick();
  }

  stop () {
    this.needToRender = false;
  }

  private tick () {
    if (this.needToRender) this.render();

    if (this.timeManager.getDeltaTime() > this.gameSpeed) {

      this.currentBrick.y++;

      this.timeManager.reset();
    }

    requestAnimationFrame(this.tick.bind(this));
  }

  private render () {
    this.renderManager.clear();
    this.renderManager.drawWalls();
    this.renderManager.drawBrick(this.currentBrick);
  }
}
