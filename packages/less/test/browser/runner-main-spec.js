console.warn('start spec');
describe('less.js main tests', async function() {
    await testLessEqualsInDocument();
    it('the global environment', function() {
        expect(window.require).to.be.undefined;
    });
});
