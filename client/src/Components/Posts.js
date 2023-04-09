import React from 'react'
import OwlCarousel from "react-owl-carousel";
import CardsNew from './CardsNew';
import "../css/post.css"

function Posts({details}) {
  return (
    <div style={{}}>
        <OwlCarousel
        className="featured-carousel owl-carousel "
        style={{borderRadius:"30px!important"}}
        items={3}
        loop
        autoplay={true}
        autoplayTimeout={5000}
        margin={20}
        nav>
      


        {details.map((element)=>{
          console.log(element);
          return <CardsNew key={element._id}  info = {element}/>
        })
        }


      </OwlCarousel>
    </div>
  )
}

export default Posts