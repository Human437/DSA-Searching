function maxProfit(arr){
  let min=arr[0];
  let max=arr[0];
  for(let i =0;i<arr.length;i++){
    if(arr[i]>max){
      max = arr[i]
    }
    if(arr[i]<min){
      min = arr[i]
    }
  }
  return max-min
}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]))