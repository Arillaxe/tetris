import { ASSETS } from './constants';

export class AssetsManager {
  private totalAssets: number;
  private loadedAssets: number = 0;
  private assetMap: Partial<Record<keyof typeof ASSETS, HTMLImageElement>> = {};

  private onProgressChangeCallback: (progress: number) => void;
  private onLoadAllCallback: () => void;

  constructor () {
    this.totalAssets = Object.keys(ASSETS).length;
    this.loadAssets();
  }

  private loadAssets () {
    Object.entries(ASSETS)
      .forEach(([key, value]: [keyof typeof ASSETS, string]) => {
        const image = new Image();

        image.src = value;
        image.onload = () => {
          this.loadedAssets++;

          const progress = Math.round(this.loadedAssets / this.totalAssets * 100);

          this.onProgressChangeCallback && this.onProgressChangeCallback(progress);
        };
        this.assetMap[key] = image;
      });
  }

  onLoadAll (callback: typeof this.onLoadAllCallback) {
    this.onLoadAllCallback = callback;
  }

  onProgressChange (callback: typeof this.onProgressChangeCallback) {
    this.onProgressChangeCallback = callback;
  }

  getAsset (key: keyof typeof ASSETS): HTMLImageElement {
    return this.assetMap[key];
  }
}
