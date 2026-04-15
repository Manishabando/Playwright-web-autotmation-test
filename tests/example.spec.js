const {test,expect} =require('@playwright/test')

test("My first test", async function({page}){
    expect(200).toBe(200)
})

test("My Second test", async function({page}){
    expect("Manisha Bando").toContain("Bando")
    expect(false).toBeFalsy() // This will fail the test

})

test("My third test", async function({page}){
    expect(true).toBeTruthy()
})