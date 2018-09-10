import React from 'react'
import Article from '../partials/article'
import PhotoCap from '../partials/photo-cap'

const ThirdYear = () => {
    return (
        <Article title="3rd Year in Review" author="Jeet Shah" date="09/10/2018">
            <PhotoCap image="ucdm_lead.jpg" caption="The Dance Marathon exec team at the annual leadership conference in Indianapolis"/>
            <p>My third year at the University of Cincinnati is off to a great start! I have returned to Siemens PLM as
                a Software Development Intern and I’m excited to learn more about technologies such as Elasticsearch,
                Python (Flask), and ReactJS. In addition to work, I will also be serving as the Fundraising Chair for
                UC’s Dance Marathon with the goal of raising $75,000 by December 2nd for Cincinnati Children’s
                Hospital.</p>
            <p>Stay tuned for more updates as the year progresses!</p>
        </Article>
    )
}

export default ThirdYear;