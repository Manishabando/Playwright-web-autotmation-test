import{test,expect} from "@playwright/test"

test("API Getcall test", async ({ request }) => {
  const resp = await request.get("https://jsonplaceholder.typicode.com/posts/1");
  
  const respbody=await resp.body()
  const respheaders=await resp.headers()
  const respjson=await resp.json()
  const respstatus=await resp.status() 
  const respstatustext=await resp.statusText()
  const respheadersarray=await resp.headersArray()

  //console.log(respheaders)
  //console.log(respbody)   
  //console.log(respjson)
  //console.log(respstatus)
  //console.log(respstatustext)
  //console.log(respheadersarray) 

  expect(respstatus).toBe(200)
  expect(respstatustext).toBe("OK")
  expect(respjson).toEqual({
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  })
  expect(respjson).toHaveProperty("userId",1)
  expect(respjson).toHaveProperty("id",1)
  expect(respjson).toHaveProperty("title","sunt aut facere repellat provident occaecati excepturi optio reprehenderit")       
  expect(respjson.body).toContain("quia et suscipit")



});

 