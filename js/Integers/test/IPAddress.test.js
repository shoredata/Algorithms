import * as ip from '../IPAddresses';


describe('isIPValid()', () => {
  it('returns false if a string containing a single digit is sent', () => {
    expect(ip.isIPValid("0")).toEqual(false);
  });
  it('returns false if an otherwise valid string containing a single octet out of range is sent', () => {
    expect(ip.isIPValid("256.11.12.13")).toEqual(false);
  });
  it('returns false if an otherwise valid string containing a single octet with a leading 0 is sent', () => {
    expect(ip.isIPValid("255.011.12.13")).toEqual(false);
  });
  it('returns false if valid address string containing no decimals is sent', () => {
    expect(ip.isIPValid("00000000000000000000")).toEqual(false);
    expect(ip.isIPValid("1111")).toEqual(false);
    expect(ip.isIPValid("255255255255")).toEqual(false);
  });
  it('returns false if an otherwise valid string containing a single octet with too many digits is sent', () => {
    expect(ip.isIPValid("2555.11.12.13")).toEqual(false);
  });
});



// createIPList("25525511135");
// IP Addresses from a string of numbers
// Ex: Input : 25525511135
//     Output : ['255.255.11.135', '255.255.111.35']




describe('createIPList()', () => {
  it('returns an empty array if an empty string is sent', () => {
    expect(ip.createIPList("")).toEqual([]);
  });
});
