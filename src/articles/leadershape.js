import React from 'react'
import Article from '../partials/article'
import PhotoCap from '../partials/photo-cap'

const Leadershape = () => {
    return(
        <Article title="Reflection on LeaderShape" author="Jeet Shah" date="01/13/2017">
            <PhotoCap image="leadshape_jump.jpg" caption="An action shot of my group at LeaderShape!"/>


            <div className="lead-info" style={{"display": 'flex', 'flex-direction': 'column'}}>
                <h4 style={{'align-self': 'center'}}>What is LeaderShape?</h4>
                <ul>
                    <li>5 day retreat with students from the UC Honors Program</li>
                    <li>Focuses on building leadership and collaboration skills</li>
                    <li>Great way to meet campus leaders and faculty</li>
                </ul>
            </div>
            <p>Entering LeaderShape, I wasn't sure of what to expect because even though I had only learned good things, I didn't know what I would learn.
                I now see leadership as a role that does not have just one definition. One does not have to be super outgoing and perfect to be a great leader.
                There are silent leaders who lead through their actions rather than words, and there are charismatic leaders who have the ability to
                persuade and help people work together.</p>

            <p>Leading with integrity is an important concept to me because it represents the ability to be morally sound. It is defined as leading fairly,
                without any sort of immoral actions. I have used the idea of leading with integrity to improve how I hold myself at my current job. I make sure
                to address all concerns and receive all criticisms in the fairest manner and I also make sure to count my hours to the exact minute because I do
                not want to get paid for work I did not do.</p>

            <p>My personal vision has always been to improve education and through my Computer Science major I hope to have a huge impact on online education around
                the world. I want to make education accessible everywhere at any time. I have already begun working toward my vision as I have started to learn web
                development languages and plan on launching a website about education this summer. My current job has also allowed me to meet many professionals in the
                technology industry and I feel this will be important moving forward.</p>

            <p>The one thing that stood out most to me regarding LeaderShape was the friendships that I was able to make with so many people. The diverse group of
                people just showed me the perks of being a part of an inclusive campus and why it is important to make diversity a goal of all organizations.</p>
        </Article>
    )
}

export default Leadershape;