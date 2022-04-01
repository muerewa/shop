const { makeAutoObservable } = require("mobx");

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Телефоны" },
      { id: 2, name: "Микроволновки" },
    ];
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Samsung" },
    ];
    this._devices = [
      {
        id: 1,
        name: "12 pro",
        price: 1000,
        rating: 5,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.m6D8SD2JgunNE9PGYjO0-QHaHa%26pid%3DApi&f=1",
      },
      {
        id: 2,
        name: "disjwasher",
        price: 1000,
        rating: 4,
        img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexpert-kachestva.ru%2Fwp-content%2Fuploads%2F2021%2F05%2F2021-05-01_14-23-06.png&f=1&nofb=1",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this.devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get devices() {
    return this._devices;
  }

  get brands() {
    return this._brands;
  }
  get types() {
    return this._types;
  }

  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
