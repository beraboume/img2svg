import React from 'react'
import ReactDOM from 'react-dom'
import pixel from 'pixel'
import {convert} from 'pixel-to-svg'

class Img2svg extends React.Component{
  constructor(){
    super()

    this.state= {
      html:{},
      message:'Drop an image here'
    }
  }

  handleDrop= (event)=>{
    event.preventDefault()

    this.setState({
      html:{},
      message:'processing',
    })

    pixel.fetchImageData(event.dataTransfer.files[0])
    .then((image)=>{
      this.setState({html:{__html:convert(image)}})
    })
    .catch((error)=>{

    })
  }
  handleDragOver= (event)=>{
    event.preventDefault()
  }
  render(){
    let children= [
      <figure key="1" dangerouslySetInnerHTML={this.state.html} />,
      <pre key="2" >{this.state.html.__html}</pre>,
    ]
    if(this.state.html.__html===undefined){
      children= [<p key="1">{this.state.message}</p>]
    }

    return (
      <section
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
      >
        {children}
      </section>
    )
  }
}

addEventListener('DOMContentLoaded',()=>{
  ReactDOM.render(<Img2svg />,document.querySelector('article'))
})
