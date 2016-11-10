module.exports = {
  itemType: "",
  addItemType: function (newType) {
    itemType = newType;
  },
  getItemType: function () {
    return itemType;
  }
}
