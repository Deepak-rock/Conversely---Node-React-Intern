import {Component} from 'react'
import './index.css'

class MiniProject extends Component {
  state = {clickedBox: [], allOrange: false}

  onClickBox = index => {
    const {clickedBox, allOrange} = this.state
    if (allOrange || clickedBox.includes(index)) return
    this.setState(
      prevState => ({
        clickedBox: [...prevState.clickedBox, index],
      }),
      () => {
        if (this.state.clickedBox.length === 9) {
          this.triggerAllOrangebox()
        }
      },
    )
  }

  triggerAllOrangebox = () => {
    const {clickedBox} = this.state
    this.setState({allOrange: true})
    clickedBox.forEach((index, i) => {
      setTimeout(() => {
        const box = document.getElementById(`boxId-${index}`)
        if (box) box.style.backgroundColor = 'orange'
      }, i * 500)
    })
  }

  render() {
    const {clickedBox} = this.state
    console.log(clickedBox)
    return (
      <div className="grid">
        {Array.from({length: 9}).map((_, index) => (
          <div
            className="box"
            id={`boxId-${index}`}
            key={index}
            onClick={() => this.onClickBox(index)}
            style={{
              backgroundColor: clickedBox.includes(index) ? 'green' : '#ccc',
            }}
          ></div>
        ))}
      </div>
    )
  }
}
export default MiniProject
