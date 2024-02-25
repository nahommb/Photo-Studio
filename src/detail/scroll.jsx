import React from 'react';

class HorizontalScrollButton extends React.Component {
  scrollToLeft = () => {
    const element = document.getElementById('scrollTarget');
    if (element) {
      element.scrollLeft -= 300; // Adjust the value as needed
    }
  };

  render() {
    return (
      <div>
        <div id="scrollTarget" style={{ display: 'flex', width: '800px', overflow: 'auto' }}>
          {/* Your content that can be horizontally scrolled */}

            <div style={{height:'100px',minWidth:'300px',backgroundColor:'blue',margin:'10px'}}></div>
            <div style={{height:'100px',minWidth:'300px',backgroundColor:'blue',margin:'10px'}}></div>
            <div style={{height:'100px',minWidth:'300px',backgroundColor:'blue',margin:'10px'}}></div>
            <div style={{height:'100px',minWidth:'300px',backgroundColor:'blue',margin:'10px'}}></div>
            <div style={{height:'100px',minWidth:'300px',backgroundColor:'blue',margin:'10px'}}></div>
            <div style={{height:'100px',width:'300px',backgroundColor:'blue',margin:'10px'}}></div>
            <div style={{height:'100px',width:'200px',backgroundColor:'blue',margin:'10px'}}></div>


        </div>
        <button onClick={this.scrollToLeft}>
          Scroll Left
        </button>
      </div>
    );
  }
}

export default HorizontalScrollButton;