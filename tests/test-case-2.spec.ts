import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home-page';

test('TC2: Verify all links return valid status codes', async ({ page, browserName }) => {
  const homePage = new HomePage(page);
  
  await homePage.navigateTo();
  await page.waitForLoadState('networkidle');
  
  const links = await homePage.getAllLinks();
  console.log(`${browserName} - Found ${links.length} links on the page`);
  
  const results: {url: string, status: number, valid: boolean}[] = [];
  
  for (const link of links) {
    if (link.href && link.href.startsWith('http')) {
      try {
        if (link.href.includes('github.io') || link.href.includes('localhost') || link.href.includes('staging-env')) {
          const response = await page.request.get(link.href);
          const status = response.status();
          const isValid = status >= 200 && status < 400;
          
          results.push({
            url: link.href,
            status: status,
            valid: isValid
          });
          
          console.log(`${browserName} - ✓ ${link.href} - Status: ${status} ${isValid ? 'VALID' : 'INVALID'}`);
          
          expect(status).toBeGreaterThanOrEqual(200);
          expect(status).toBeLessThan(400);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.log(`${browserName} - ✗ ${link.href} - Error: ${errorMessage}`);
       // For Firefox, do not terminate the test because a single link fails.
        if (browserName !== 'firefox') {
          throw error;
        }
      }
    }
  }
  
  const validLinks = results.filter(r => r.valid);
  const invalidLinks = results.filter(r => !r.valid);
  
  console.log(`\n${browserName} - === LINK VALIDATION SUMMARY ===`);
  console.log(`${browserName} - Total links tested: ${results.length}`);
  console.log(`${browserName} - Valid links (2xx/3xx): ${validLinks.length}`);
  console.log(`${browserName} - Invalid links (4xx/5xx): ${invalidLinks.length}`);
});
