import { by, device, element, expect } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Your Plan'))).toBeVisible();
  });

  it('should subscribe to the premium plan', async () => {
    await element(by.id('option-premium')).tap();
    await element(by.id('input-email')).tap();
    await element(by.id('input-email')).typeText('user@email.com');
    await element(by.id('keyboard')).tap();
    await element(by.id('button-subscribe')).tap();
    await device.takeScreenshot('snapshot-premium-plan-test');
    await waitFor(element(by.id('confirmation-message')))
      .toBeVisible()
      .withTimeout(2000);
    await expect(element(by.id('confirmation-message'))).toBeVisible();
  });
});
