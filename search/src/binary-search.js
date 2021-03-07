import React from 'react';

export default class BinarySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ""
    };
  }
  binarySearch(array,value, start, end,searches) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    searches +=1

    if (start >= end) {
        this.setState({results:`${value} not found after ${searches} searches`})
        return -1
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item === value) {
      this.setState({results:`${value} found after ${searches} searches`})
      return
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end,searches);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1,searches);
    }
  };
  handleSubmit(event){
    event.preventDefault()
    let value = parseFloat(document.getElementById('value').value)
    let array = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    array.sort()
    this.binarySearch(array,value,undefined,undefined,0)
  }
  render(){
    return(
      <>
        <form
          onSubmit={(e) => {this.handleSubmit(e)}}
        >
          <label
            htmlFor = "value"
          >
            value
          </label>
          <br/>
          <input
            type="number"
            required
            name ='value'
            id ='value'
          />
          <button type='submit'>Submit</button>
        </form>
        <div>
          {this.state.results}
        </div>
      </>
    )
  }
}