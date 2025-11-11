import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(path: string = ''): Promise<void> {
    const baseURL = process.env.BASE_URL || 'https://pocketaces2.github.io/fashionhub/';
    const fullURL = `${baseURL}${path}`;
    const browserName = this.page.context().browser()?.browserType().name() || 'unknown';
    
    console.log(`${browserName}: Navigating to ${fullURL}`);
    
    try {
      const response = await this.page.goto(fullURL, { 
        waitUntil: 'domcontentloaded',
        timeout: 60000 
      });
      
      if (!response || !response.ok()) {
        throw new Error(`Navigation failed with status: ${response?.status()}`);
      }
      
      // Firefox requires a longer waiting time.
      if (browserName === 'firefox') {
        await this.page.waitForLoadState('networkidle', { timeout: 30000 });
        await this.page.waitForTimeout(1000);
      } else {
        await this.page.waitForLoadState('networkidle', { timeout: 15000 });
      }
      
      console.log(`${browserName}: ✅ Successfully navigated to ${fullURL}`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`${browserName}: ❌ Navigation failed for ${fullURL}:`, errorMessage);
      throw error;
    }
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async waitForLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }
}
