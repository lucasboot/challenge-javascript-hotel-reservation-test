'use strict'

const chai = require('chai')
const expect = chai.expect
const hotels = require('../src/main')
const getCheapestHotel = hotels.getCheapestHotel 

describe('test', function () {
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).to.equal("Lakewood");
  });
  it('should return Bridgewood', function () {
    expect(getCheapestHotel("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Bridgewood");
  });
  it('should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")).to.equal("Ridgewood");
  });
  //Unit tests implemented
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Rewards: 26Mar2009(wed), 27Mar2009(thur), 28Mar2009(fri)")).to.equal("Lakewood");
  });
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Rewards: 26Mar2009(mon), 27Mar2009(tue), 28Mar2009(wed), 29Mar2009(thur)")).to.equal("Lakewood");
  });
  it('should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat), 29Mar2009(sun), 30Mar2009(mon)")).to.equal("Ridgewood");
  });
  it('should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 28Mar2009(sat), 29Mar2009(sun)")).to.equal("Ridgewood");
  });
  it('should return invalid input', function () {
    expect(getCheapestHotel("Rewardss: 26Mar2009(thur), 27Mar2009(frid), 28Mar2009(sat)")).to.equal("Entrada inválida");
  });
  it('should return invalid input', function () {
    expect(getCheapestHotel("Regulars: 26Mar2009(thur), 27Mar2009(frid), 28Mar2009(sat)")).to.equal("Entrada inválida");
  });

})