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

  describe("Items", function() {
    beforeEach(function (){
      item = { name: 'foo', sellIn: 2, quality: 4};
      gildedRose = new Shop([item]);
    });

    it("shop contains item", function() {
      expect(gildedRose.items[0]).toEqual({ name: 'foo', sellIn: 2, quality: 4})
    });

    it("update quality should decrease quality by 1", function(){
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(3);
    });

    it("update quality should reduce sellIn value by 1", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(1);
    });

    it('Quality of an item decreases twice as fast once it has expired', function() {
      item = { name: 'foo', sellIn: -1, quality: 4 }
      gildedRose = new Shop([ item ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(2)
    });
  });






});
