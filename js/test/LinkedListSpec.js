
describe("LinkedList", function() {
    it("returns an empty LinkedList with .head=null and .tail=null; there are no arguments", function() {
        var list1 = new LinkedList.LinkedList();
        expect(list1.head).toBe(null);
        expect(list1.tail).toBe(null);
    });
});


