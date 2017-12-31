describe("Gilded Rose", function() {

  describe("Quality limitations", function() {
    it('No item quality can be negative', function() {
      item = { name: 'Cheese', sellIn: 1, quality: 0 }
      gildedRose = new Shop([ item ])
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(0)
    });

    it('No item quality can be greater than 50', function() {
      item = { name: 'Aged Brie', sellIn: 4, quality: 50 }
      gildedRose = new Shop([ item ])
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(50)
    });
  });

  




});
