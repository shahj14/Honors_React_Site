import React from 'react'
import Article from '../partials/article'

const PersonalSite = () => {
    return(
        <Article title="Building My Own Site" author="Jeet Shah" date="09/10/2018">

            <p>At the end of the summer I decided that I wanted to focus on building my own applications rather than
                just school projects and assignments. Realizing that I didn’t have a site of my own, I figured that
                would be the first step. </p>
            <p>My goal was to develop a site to showcase both my University Honors experiences and also my technical
                projects. I had several options when it came to picking which technologies I would use, but I settled on
                using React and hosting on Github Pages. By doing this, the only costs of the project were resources for
                learning React and buying a domain name.
            </p>
            <p>At the beginning of the process, I had to decide on an initial design for the site and focused on
                figuring out which pages and functionality I needed rather than the exact visual design. Once this was
                finalized, I started to develop the site using the React framework.</p>
            <p>Using React was a lot of fun and allowed me to speed up the development process. One of the amazing
                things about React is that I was able to develop individual components to avoid repeating code and I
                could build pages entirely of these components. Examples of these components include the PhotoCap and
                the ProjCard components that I developed. PhotoCap allows for images to be paired with a caption in an
                aesthetically pleasing way. ProjCard allows for each of the cards on the Projects page to be
                rendered.</p>
            <p>There were several challenges encountered during this project that served as small roadblocks. Although
                they were slightly frustrating at the first, I was able to learn a lot from these issues and will be
                able to quickly fix them in the future. One issue encountered was properly styling the application for
                mobile use. After deploying the site the first time, the mobile site looked horrible! I was initially
                very confused until I realized that by adding CSS media tags, I could make my site even more responsive
                and customize it to certain HTML elements. Building a site that was both mobile and desktop friendly was
                very rewarding and taught me a lot.
            </p>
            <p>Going forward, there will definitely be site improvements in the future. I plan on using SASS, a
                preprocessor for CSS to style the content and adding more documentation to my Github page. Additionally,
                I plan on even adding a blog in the future so that I can talk about topics outside of just programming
                and school.
            </p>
        </Article>
    )
}

export default PersonalSite;