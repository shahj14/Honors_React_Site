import React, {Component} from 'react'
import ProjCard from './proj-card/proj-card'
import './projects.css'

class Projects extends Component{

    render(){
        return(
            <div>
                <div className="my-proj">
                    <ProjCard title="OpenStudyUC" img="openstudy.png" link="http://www.openstudyuc.xyz" github="https://github.com/shahj14/OpenStudy_Web"
                        desc="A crowd-sourced application to help students find open seats at the campus library. Built with React, NodeJS, and Express"/>

                    <ProjCard title="Personal Site" img="personal_site.png" link="" github="https://github.com/shahj14/Personal_Site"
                        desc="My personal site for showcasing my UC Honors experiences and my tech projects! Developed using React and hosted with Heroku."/>

                    <ProjCard title="Budget4ACause" img="budget.png" github="https://github.com/hamptokr/budgetforacause"
                        desc="A tool for managing personal finances while making room to give to local non-profits. Built during RevUC Hackathon using NodeJS, Express and MySQL"/>

                    <ProjCard title="Engineering Ambassadors" img="ceas_site.png" link="https://ucceasambassadors.com/" github="https://github.com/kurtlewis/ceas-ambassadors-website"
                        desc="Site to manage tours, meetings, and member profiles. This project was led by Kurt Lewis and I focused on developing the front-end of the site."/>
                </div>
            </div>
        )
    }
}

export default Projects;