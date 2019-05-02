import * as s from '../Strings';

describe('getPermutations()', () => {

  it('should return empty array if no chars sent', () => {
    expect(sp.getPermutations("")).toEqual([]); 
  });
  it('should return 1-item array if 1 char sent', () => {
    expect(sp.getPermutations("a")).toEqual(["a"]); 
  });

  it('should return array', () => {
    let ch = "YES";
    let ca = sp.getPermutations(ch);
    let l = 6;
    expect(ca.length).toEqual(l); 
  });
  it('should return array', () => {
    let ch = "ABBA";
    let ca = sp.getPermutations(ch);
    let l = 24;
    expect(ca.length).toEqual(l); 
  });
  it('should return array', () => {
    let ch = "ABAB";
    let ca = sp.getPermutations(ch);
    let l = 24;
    expect(ca.length).toEqual(l); 
  });
  it('should return array', () => {
    let ch = "1 2 3";
    let ca = sp.getPermutations(ch);
    let l = 120;
    expect(ca.length).toEqual(l); 
  });  
  it('should return array', () => {
    let ch = "1 1 1";
    let ca = sp.getPermutations(ch);
    let l = 120;
    expect(ca.length).toEqual(l); 
  });

});