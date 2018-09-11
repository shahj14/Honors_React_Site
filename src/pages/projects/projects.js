import React, {Component} from 'react'
import ProjCard from './proj-card/proj-card'
import './projects.css'

class Projects extends Component{

    render(){
        return(
            <div>
                <div className="my-proj">
                    <ProjCard title="OpenStudyUC" img="openstudy.png" link="http://www.openstudyuc.xyz" github="http://github.com/shahj14/OpenStudy_Web">
                        A crowd-sourced application to help students find open seats at the campus library. Built with React, NodeJS, and Express and hosted with Heroku
                    </ProjCard>

                    <ProjCard title="Personal Site" img="personal_site.png" link="http://www.jeetshah.net" github="http://github.com/shahj14/Personal_Site">
                        My personal site for showcasing my UC Honors experiences and my tech projects! Developed using React and hosted with Github Pages
                    </ProjCard>

                    <ProjCard title="Budget4ACause" img="budget.png" github="http://github.com/hamptokr/budgetforacause">
                        A tool for managing personal finances while making room to give to local non-profits. Built during RevUC Hackathon using NodeJS, Express and MySQL
                    </ProjCard>

                    <ProjCard title="Engineering Ambassadors" img="ceas_site.png" link="http://ucceasambassadors.com/" github="http://github.com/kurtlewis/ceas-ambassadors-website">
                        Site to manage tours, meetings, and member profiles. This project was led by <a target="_blank" rel="noopener noreferrer" href="http://github.com/kurtlewis/">Kurt Lewis</a> with my focus being on developing the front-end of the site
                    </ProjCard>

                </div>
            </div>
        )
    }
}

export default Projects;