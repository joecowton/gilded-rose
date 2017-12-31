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

  isAgedBrie(item){
    return item.name == 'Aged Brie'
  }

  isSulfaras(item) {
    return item.name == 'Sulfuras, Hand of Ragnaros'
  }

  updateStandard(item) {
    if (item.sellIn < 0) {
      item.quality -= 2;
    } else if (item.quality <= 0) {
      item.quality = 0;
    } else {
      item.quality--;
    }
  }

  updateAgedBrie(item) {
    if (item.quality >= 50) {
      item.quality = 50;
    } else if (item.sellIn < 0) {
      item.quality += 2;
    } else {
      item.quality++;
    }
  }

  updateConjured(item) {
    if (item.sellIn < 0) {
      item.quality -= 4;
    } else if (item.quality <= 0) {
      item.quality = 0;
    } else {
      item.quality-2;
    }
  }

  updateBackstagePass(item){
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
