class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateSellIn() {
    for (var i = 0; i < this.items.length; i++)
      if(this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn -- ;
      }
  }

  isNotAgedBrie(item) {
    return item.name != 'Aged Brie'
  }

  isNotSulfaras(item) {
    return item.name != 'Sulfuras, Hand of Ragnaros'
  }

  isNotBackstagePass(item) {
    return item.name != 'Backstage passes to a TAFKAL80ETC concert'
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.isNotAgedBrie(this.items[i]) && this.isNotBackstagePass(this.items[i])) {
        if (this.items[i].quality > 0) {
          if (this.isNotSulfaras(this.items[i])) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      this.updateSellIn()
      if (this.items[i].sellIn < 0) {
        if (this.isNotAgedBrie(this.items[i])) {
          if (this.isNotBackstagePass(this.items[i])) {
            if (this.items[i].quality > 0) {
              if (this.isNotSulfaras(this.items[i])) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
