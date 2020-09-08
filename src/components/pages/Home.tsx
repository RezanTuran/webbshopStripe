import React, { CSSProperties } from 'react';
import Slider from 'infinite-react-carousel';

export  interface Products{
    img: string
  }
  

  export const Products: Products[] = [
    { 
      "img": "blackAddidas.png"
    },
    { 
      "img": "blueGant.png"
    },
    { 
      "img": "grayNike.png"
    },
    { 
        "img": "whiteAddidas.png"
    },
    { 
        "img": "whiteNike.png"
    },
    { 
        "img": "yellowNike.png"
    },
    { 
        "img": "blueGant.png"
    },
    { 
        "img": "grayNike.png"
    },
    { 
        "img": "blackAddidas.png"
    },
    { 
        "img": "yellowNike.png"
    },
  ];

const Home = () => {
    const settings =  {
        autoplay: true,
        dots: true
      };
    return(
     <div style={{height:'100vh'}}>
        <h6 style={{textAlign: 'center'}}>Populära Produkter</h6>
        <Slider { ...settings }>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[0].img) } alt="produktImg" />
          </div>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[1].img) } alt="produktImg" />
          </div>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[2].img) } alt="produktImg" />
          </div>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[3].img) } alt="produktImg" />
          </div>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[4].img) } alt="produktImg" />
          </div>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[5].img) } alt="produktImg" />
          </div>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[6].img) } alt="produktImg" />
          </div>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[7].img) } alt="produktImg" />
          </div>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[8].img) } alt="produktImg" />
          </div>
          <div>
            <img style={imgSize} src={ require("../../assets/images/" + Products[9].img) } alt="produktImg" />
          </div>
        </Slider>
      </div>
    );
};


const imgSize: CSSProperties = {
marginLeft: '10em'
}



export default Home;