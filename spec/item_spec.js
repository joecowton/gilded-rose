describe('Item', function() {
  describe('Constructor', function(){
    beforeEach(function(){
      item = new Item('Foo', 6, 10)
    });

    it('Should initialize with a name', function(){
      expect(item.name).toEqual('Foo');
    });

    it('Should initialize with a SellIn value', function(){
      expect(item.sellIn).toEqual(6);
    });

    it('Should initialize with a quality value', function(){
      expect(item.quality).toEqual(10);
    });
  });
});
