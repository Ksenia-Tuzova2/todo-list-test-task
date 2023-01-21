import { howMuchLessons, onlyName, pushNewLesson } from "./number7";

export type ManType={
  name:string,
    age:number,
    lesson:Array<{title:number}>,
    adress:{
      street:{
        title:string
      }
    }
}
let props:ManType;

beforeEach(()=>{
  props={
    name:'Ksu',
    age:20,
    lesson:[{title:1},{title:2}],
    adress:{
      street:{
        title:"Nezavisimosti street"
      }
    }
  }
})



test('distructing',()=>{

  
// const age=props.age
// const name=props.name

let {age, name, lesson}=props
let {title}=props.adress.street

let a=props.age
let l=props.lesson

  expect(age).toBe(20)
  expect(lesson.length).toBe(2)

  expect(a).toBe(20)
  expect(l.length).toBe(2)
  expect(title).toBe("Nezavisimosti street")

  //сравниваем равенство двух стррок
  expect(title).toStrictEqual("Nezavisimosti street")
})

test('test should return only name ',()=>{
expect(onlyName(props)).toBe('Ksu')
})

test('test should return how much lessons in data ',()=>{
  expect(howMuchLessons(props)).toBe(2)
  })

  test('test should push new lesson ',()=>{

    pushNewLesson(props, 2)
    expect(props.lesson.length).toBe(3)
    })