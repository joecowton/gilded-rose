class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {

    this._updateSellIn();

    for(var i = 0; i < this.items.length; i++)
      if (this._isAgedBrie(this.items[i])){
        this._updateAgedBrie(this.items[i]);
      }
      else if (this._isConjured(this.items[i])){
        this._updateConjured(this.items[i]);
      }
      else if (this._isBackstagePass(this.items[i])){
        this._updateBackstagePass(this.items[i]);
      }
      else if (this._isSulfaras(this.items[i])){
        this._updateSulfaras(this.items[i])
      }
      else {
        this._updateStandard(this.items[i])
      }
  }

  _updateSellIn() {
    for (var i = 0; i < this.items.length; i++)
      if(this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn -- ;
      }
  }

  _updateAgedBrie(item) {
    if (item.quality >= 50) {
      item.quality = 50;
    } else if (item.sellIn < 0) {
      item.quality += 2;
    } else {
      item.quality++;
    }
  }

  _updateConjured(item) {
    if (item.sellIn < 0) {
      item.quality -= 4;
    } else if (item.quality <= 0) {
      item.quality = 0;
    } else {
      item.quality-=2;
    }
  }

  _updateSulfaras(item) {

  }

  _updateBackstagePass(item){
    if (item.quality >= 50) {
      item.quality = 50;
    } else if (item.sellIn > 10) {
      item.quality +=1 ;
    } else if (item.sellIn > 5) {
      item.quality += 2;
    } else if (item.sellIn > 0) {
      item.quality += 3;
    } else {
      item.quality = 0;
    }
  }

  _updateStandard(item) {
    if (item.sellIn < 0) {
      item.quality -= 2;
    } else if (item.quality <= 0) {
      item.quality = 0;
    } else {
      item.quality--;
    }
  }

  _isBackstagePass(item) {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert'
  }

  _isAgedBrie(item){
    return item.name == 'Aged Brie'
  }

  _isSulfaras(item) {
    return item.name == 'Sulfuras, Hand of Ragnaros'
  }

  _isConjured(item) {
    return item.name == 'Conjured'
  }
}
