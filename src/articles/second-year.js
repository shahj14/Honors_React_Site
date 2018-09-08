import React from 'react'
import Article from '../partials/article'
import PhotoCap from '../partials/photo-cap'

const SecondYear = () => {
    return(
        <Article title="2nd Year in Review" author="Jeet Shah" date="06/20/2018">
            <PhotoCap image="ucdm_group.jpg" caption="The Exec team of UC Dance Marathon. Very glad I got the opportunity to work with this amazing group"/>
            <p>My second year was amazing in regard to the organizations I was a part of,
                the work experiences I received, and the events that I attended. This has been a big time year
                of growth for me and I'm very happy with how it went.I decided to focus a lot of my time this year
                on professional self-improvement and also bettering organizations that I cared about. I started to
                spend more time on Dance Marathon and Engineering Ambassadors because I felt strongly that those two
                organizations have a real impact on the community. UCDM allows us to raise thousands of dollars
                for the kids at Cincinnati Children's and Ambassadors has a real impact on attracting top talent
                to the University of Cincinnati. </p>

            <p>UC Dance Marathon raised over $50,000 last year and we have a goal of raising $75,000 this year for
                the hospital network. This year I will be serving the role of Fundraising Co-Chair after serving as
                the Fundraising Director last year. This July I will be attending the Dance Marathon Leadership Conference
                for 3 days where I will focus on learning new strategies to help us meet out fundraising goal this year.
                For Engineering Ambassadors I have taken on the role of Secretary which is fairly easy but it will allow me
                to understand the organization even more and make a bigger contribution.</p>

            <p>During the spring of 2018 I was on co-op at Siemens PLM Software where I worked on full stack software development
                for a tool that would record the user’s actions for testing purposes. I had the opportunity to use technologies
                such as MongoDB, Express, NodeJS, and Java. While I was there I was given real responsibilities for our work and
                I was able to contribute thousands of lines of code. The people I worked with while I was there also taught me a
                lot about the field. I will be returning to that company in the Fall of 2018 as a Software Development co-op again.
                This next rotation will have me working with a team in Italy to work on an application currently in the works.</p>

            <p>This last year of college has been great and I am glad that I got the chance to co-op with such a great company.
                Looking ahead, I am planning to launch a website for a hair salon this year and will also be working on several
                personal projects in tech.</p>
        </Article>
    )
}

export default SecondYear;