import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';

/*const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
*/

const MainCarosel = () => {
    //const navigate=useNavigation
    const items = MainCaroselData.map((item)=><img className="cursor-pointer"  role="presentation" src={item.image} alt="" />);

    return (<AliceCarousel
       
        items={items}
        //responsive={responsive}
        autoPlay
        autoHeight
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
    />)
   };

export default  MainCarosel;