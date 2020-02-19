
describe('Logo', () => {
  it('visually looks correct', async () => {
    await page.goto('http://localhost:9009/iframe.html?selectedKind=Logo&selectedStory=Default')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
