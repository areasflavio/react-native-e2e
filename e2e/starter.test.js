describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    const title = await element(by.text('Your Plan'));
    await expect(title).toBeVisible();
  });
});
