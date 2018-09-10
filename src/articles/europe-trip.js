import React from 'react'
import Article from '../partials/article'
import PhotoCap from '../partials/photo-cap'

const EuropeTrip = () => {
    return(
        <Article title="Reflection on Europe" author="Jeet Shah" date="08/19/2018">
            <PhotoCap image="europe_group.jpg" caption="My friends and I at a cafe in Limburg, Germany"/>
            <p>I had the chance to visit Europe from August 5th to August 18th and traveled to Ireland, France, Italy, and Germany!
            In the next few days I will be writing up a reflection on my trip!</p>
        </Article>
    )
}

export default EuropeTrip;