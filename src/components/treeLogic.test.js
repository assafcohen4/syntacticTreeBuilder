import  treeLogic from "./treeLogic";

describe('treeLogic - determain constituents', () => {
    it('should return the correct indexes', () => {
        const sentence = treeLogic('[hola][senj[o]r]') 
        expect(sentence).toEqual( ['placeholder'])

        //IT WORKS!!!
    })
})

