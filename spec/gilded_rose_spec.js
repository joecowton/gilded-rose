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

  describe("Standard items", function() {
    beforeEach(function () {
      item = { name: 'foo', sellIn: 2, quality: 4};
      gildedRose = new Shop([item]);
    });

    it("shop contains item", function() {
      expect(gildedRose.items[0]).toEqual({ name: 'foo', sellIn: 2, quality: 4 });
    });

    it("update quality should decrease quality by 1", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(3);
    });

    it("update quality should reduce sellIn value by 1", function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(1);
    });

    it('Quality of an item decreases twice as fast once it has expired', function() {
      item = { name: 'foo', sellIn: -1, quality: 4 };
      gildedRose = new Shop([ item ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(2);
    });
  });

  describe('Sulfuras', function() {
    beforeEach(function (){
      item = { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80 };
      gildedRose = new Shop( [ item ] );
    });

    it('Item quality should not change', function (){
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(80);
    });

    it('Item sellIn should not change', function (){
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(0);
    });
  });

  describe('Aged Brie', function() {
    beforeEach(function (){
      item = { name: 'Aged Brie', sellIn: 5, quality: 5 };
      gildedRose = new Shop([ item ]);
    });

    it('should increase in quality on update', function(){
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(6);
    });

    it('sellin value should reduce on update', function(){
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(4);
    });
  });

  describe('Backstage passes', function() {
    beforeEach(function (){
      item = { name:'Backstage passes to a TAFKAL80ETC concert', sellIn: 11, quality: 14 };
      gildedRose = new Shop([ item ]);
    });

    it('should increase in quality on update', function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(15);
    });

    it('should increase in quality on update', function() {
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(15);
    });

    it('if sellIn is less than 10, increase quality by 2', function() {
      item = { name:'Backstage passes to a TAFKAL80ETC concert', sellIn: 9, quality: 14 };
      gildedRose = new Shop([ item ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(16);
    });

    it('if sellIn is less than 5, increase quality by 3', function() {
      item = { name:'Backstage passes to a TAFKAL80ETC concert', sellIn: 4, quality: 14 };
      gildedRose = new Shop([ item ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(17);
    });

    it('if sellIn is 0, quality equals 0', function() {
      item = { name:'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality: 14 };
      gildedRose = new Shop([ item ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(0);
    });
  });

  describe('Conjured items', function() {
    it('degrade twice the speed of standard items', function(){
      item = { name: 'Conjured', sellIn: 4, quality: 5 };
      gildedRose = new Shop([ item ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(3);
    });

    it('degrade 4 times the speed of standard items after expiry', function(){
      item = { name: 'Conjured', sellIn: -1, quality: 5 };
      gildedRose = new Shop([ item ]);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(1);
    });
  });
});
