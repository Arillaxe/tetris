
type assetsConfig = {
  assets: Record<string, string>,
};

export class AssetsManager {
  private loadingProgress = 0;
  private assetMap: Record<string, HTMLImageElement>;

  constructor (private readonly config: assetsConfig) {
    this.loadAssets();
  }

  private loadAssets () {
    Object.entries(this.config)
      .forEach(([key, value]) => {
        
      });
  }

  onLoad (fn: Function) {

  }

  getAsset (key: string): HTMLImageElement {

  }
}
