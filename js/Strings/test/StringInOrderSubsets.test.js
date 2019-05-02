import * as sios from '../StringInOrderSubsets';

describe('stringInOrderSubsets()', () => {

  it('should return empty string if no chars sent', () => {
    expect(sios.stringInOrderSubsets("")).toEqual(""); 
  });

  it('should return 1 char if 1 char sent', () => {
    let ch = "a";
    expect(sios.stringInOrderSubsets(ch)).toEqual(ch); 
  });

  it('should return array', () => {
    let ch = "aabcdaabc";
    let ca = sios.stringInOrderSubsets(ch);
    let l = 3780;
    expect(ca.length).toEqual(l); 
  });

  it('should return array', () => {
    let ch = "abca";
    let ca = sios.stringInOrderSubsets(ch);
    let l = 12;
    expect(ca.length).toEqual(l); 
  });
  it('should return array', () => {
    let ch = "abba";
    let ca = sios.stringInOrderSubsets(ch);
    let l = 6;
    expect(ca.length).toEqual(l); 
    // sios.listResults(ch, ca);
  });
  it('should return array', () => {
    let ch = "abcd";
    let ca = sios.stringInOrderSubsets(ch);
    let l = 24;
    expect(ca.length).toEqual(l); 
  });

});