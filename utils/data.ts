import { DataProps } from "./interface"

const returnTitle =  (x: number | string) => {
  let title
    if(x === "all") title = "initial"
    if(x === 0) title = "zero"
    if(x === 1) title = "one"
    if(x === 2) title = "two"
    if(x === 3) title = "three"
    if(x === 4) title = "four"
    if(x === 5) title = "five"
    if(x === 6) title = "six"
    if(x === 7) title = "seven"
    if(x === 8) title = "eight"
    if(x === 9) title = "nine"   
    if(x === "owari") title = "end"   
  return title
}
let array: DataProps[] = []
for (let index = 1; index <= 32; index++) {
  let pictureNumber: number | string = index
    pictureNumber = index -2
    if(index >= 12){
      pictureNumber = pictureNumber -10
    } 
    if(index >= 22){
      pictureNumber = pictureNumber -10
    } 
    if(index === 1){
      pictureNumber = -1
    } 
    if(index === 32){
      pictureNumber = "owari"
    }
  const element =  {
          id: index, 
          picture: `/number_${pictureNumber}.jpg`, 
          // picture: `/number_${pictureNumber}.jpg`, 
          title: returnTitle(pictureNumber) ?? ""
        }
  array.push(element)
}

export const data: DataProps[] = array