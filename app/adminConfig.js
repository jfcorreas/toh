'use strict';

var itemTypes = [];

module.exports = {
  addItemType: function (newType) {
    itemTypes.push(newType);
  },
  getItemTypes: function () {
    return itemTypes;
  }
}
