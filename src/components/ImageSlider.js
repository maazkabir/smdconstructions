import React from 'react';

import Slider from "react-slick";

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { height } from 'window-size';
import styled from 'styled-components'

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';


const Div = styled.div`
  height:30rem;
`


class ImageSlider extends React.Component {
    
    _renderVideo(item) {
        return (
          <div className='image-gallery-image'>
                <div className='video-wrapper'>
                    <a
                      className='close-video'
                    >
                    </a>
                    {/* <iframe
                      width='100%'
                      height='315'
                      src={item.embedUrl}
                      frameBorder='0'
                      allowFullScreen
                    >
                    </iframe> */}
                    <video width="100%" height="400" src={item.embedUrl} controls autoplay/>
                </div>
          </div>
        );
        }

render(){
    const img=[];
    if(this.props.url=='drivein'){
        img.push(
            {
                original: require('../../static/images/'+this.props.url+'/'+1+'.jpg'),
                embedUrl:require('../../static/images/drivein/video1.mp4'),
                renderItem: this._renderVideo.bind(this)
            },
        );
        img.push( {
            original: require('../../static/images/'+this.props.url+'/'+1+'.jpg'),
            embedUrl:require('../../static/images/drivein/video2.mp4'),
            renderItem: this._renderVideo.bind(this)
        },
        );
        img.push( {
            original: require('../../static/images/'+this.props.url+'/'+1+'.jpg'),
            embedUrl:require('../../static/images/drivein/video3.mp4'),
            renderItem: this._renderVideo.bind(this)
        },
        );
    }

        for(let i=1;i<=this.props.items;i++){
            img.push( 
                {
                original: require('../../static/images/'+this.props.url+'/'+i+'.jpg'),
                thumbnail: require('../../static/images/'+this.props.url+'/'+i+'.jpg'),
                }
                );
        }

        return(
            <ImageGallery items={img} showThumbnails={false} showBullets={true} showPlayButton={false}/>
        );
}
}

export default ImageSlider;


// const settings = {
//     adaptiveHeight:false,
//     variableWidth:false,
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     responsive: [
//         {   
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 2,                
//             }
//         },
//         {
//             breakpoint: 720,
//             settings: {
//                 slidesToShow: 3,
//             }
//         }
//     ]
// };

// <Slider {...settings}>
    // {/* <Image src={require('../../static/images/'+this.props.url+'/5.jpg')} style={height:'50'} alt="zyppys" /> */}
    // <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px"}}>
    // {/* <img src={require('../../static/images/'+this.props.url+'/2.jpg')} alt="zyppys" /> */}

    // </div>
    // <Div>
    // <img src={require('../../static/images/'+this.props.url+'/2.jpg')} alt="zyppys" />

    // </Div>
    // <Div>
    // <img src={require('../../static/images/'+this.props.url+'/2.jpg')} alt="zyppys" />

    // </Div>
    // {/* <Image src={require('../../static/images/'+this.props.url+'/3.jpg')} alt="zyppys" /> */}
    // {/* <img src={require('./images/5.jpg')} alt="zyppys" />
    // <img src={require('./images/5.jpg')} alt="zyppys" />
    // <img src={require('./images/5.jpg')} alt="zyppys" />
    // <img src={require('./images/5.jpg')} alt="zyppys" /> */}
    // </Slider>