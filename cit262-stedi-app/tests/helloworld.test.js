import hello from "../utils/hello";

it("should say hello",()=>{
    const saysHello = hello();
    console.log(saysHello)

    expect(saysHello).toBe("hello");
})