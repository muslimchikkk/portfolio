import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faDocker, faHtml5, faCss3, faLinux, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faT } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

const skills = [
    {
        name: 'Tech lead',
        description: 'I am leading a frontend team at Red Hat. I enjoy communicating with people and taking responsiblities',
        icon: faPeopleGroup,
    },    
    {
        name: 'Javascript',
        description: '7 years of hands-on experience. Javascript has become my favourite language since my student life',
        icon: faJs,
    },
    {
        name: 'Typecript',
        description: '2 years of hands-on experience. There are 2 micro-frontends that, we as a team, maintain at Red Hat inc',
        icon: faT,
    },
    {
        name: 'React',
        description: '5 years of hands-on experience. I have built and maintain numerous applications using React',
        icon: faReact,
    },
    {
        name: 'NodeJS',
        description: '7 years of hands-on experience. From time to time, I built a few utility packages using NodeJS',
        icon: faNodeJs,
    },
    {
        name: 'CI&CD',
        description: 'As a senior software engineer, I am responsible to configure CI&CD pipelines. I have hands on experience with GitHub actions, Jenkins pipelines and other',
        icon: faHammer,
    },
    {
        name: 'HTML5',
        description: '7 years of hands-on experience. HTML5 is by default the thing for me',
        icon: faHtml5,
    },
    {
        name: 'CSS',
        description: '7 years of hands-on experience. I love making things beatiful with CSS',
        icon: faCss3,
    },
    {
        name: 'Docker',
        description: '2 years of hands-on experience. I have deep understanding of creating and managing docker containers',
        icon: faDocker,
    },
    {
        name: 'Linux',
        description: '5 years of hands-on experience. I am Red Hat Certified System Administration as of April 2023',
        icon: faLinux,
    }
]

const Skill = ({ key, ...skill }) => (
    <div key ={key} className='skills-item'>
        <FontAwesomeIcon icon={skill.icon} />
        <h3>{skill.name}</h3>
        <div className="skills-item-description">{skill.description}</div>
    </div> 
);

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="skills-title">
                    My skills
                </div>
                <div className="skills-description">
                    Skilled in designing and implementing scalable, maintainable software systems using OOP and other design patterns.
                </div>
                <div className="skills-list">
                {
                    skills.map((skill, key) => (
                        <Skill {...skill} key={key} /> 
                    ))
                }
                </div>
            </div>
        </section>
    )

}

export default Skills;
