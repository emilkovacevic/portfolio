import BombermanIMG from './projects/Bomberman/Image.JPG'
import FilmsImg from './projects/Films/Cover.JPG'
import PortfolioIMG from './projects/Portfolio/PortfolioIMG.JPG'

import WebImg from './images/webdev.png'
import ArtIMG from './images/art.png'
import Business from './images/business.png'

import ProfilePic from './images/profilePic.png'


export const personal = {
    name: 'Emil Kovačević',

    heading:'Summary of me',
    introduction: 'I am a tehnology enthusiast focusing on website development. People find me to be a self motivated team player with excellent communication skills. I enjoy learning new skills and I have a huge drive to spend the time and face programming problems. At the moment I am looking for a developer position at an IT company. If you.\'re it, please shoot me an email.',
    
    aboutHeading:'Yes, that\'s me at the picture',
    aboutIMG: `${ProfilePic}`,
    aboutMe: 'I have some knowlage of photo editing in Photoshop and I am familiar with Figma. As for my tehnical knowlage I would firstly mention and thank SCRIMBA.COM for teaching me the basics of front end development. From basic HTML all the way to modern React. I recommend the platform to anyone looking to enter the web development field in a constructive and "hands on" maner. Supported by an awesome comunity.',
    
    intrestHeading: 'What I am looking for?',
    intrest: 'As a fresh web developer I am looking to grow my knowlage and work with an team of developers on team projects.',
    
    techList:'html, css, javascript, react, express, nodeJs, MongoDB Atlas, heroku and firebase ',
    skillHeading: 'I have experoance with the things listed below',
    message:'If you are looking for a web developer feel free to contact me.',

    github: {
        name: 'Github',
        link: 'https://github.com/emilkovacevic'
    },
    linkedin: {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/emil-kovacevic-2893aa54/'
    },

    aside:{
        mainHeading: 'Have a look at my Curriculum Vitae',
        main: 'Summary of my where I have been and what I am doing now.',

        other:{
            heading: 'Things I find Intresting',
            intrests: [
                {
                    heading: 'Web Development',
                    paragraph: 'Creating dynamic statefull websites and applications using modern standards.',
                    image:{
                        src: `${WebImg}`,
                        alt: 'web',
                    },
                },
                {
                    heading: 'Graphic Design',
                    paragraph: 'Creating layouts of content for responsive, mobile friendly websites.',
                    image:{
                        src: `${ArtIMG}`,
                        alt: 'Graphic Design',
                    },
                },
                {
                    heading: 'Business',
                    paragraph: 'Expanding knowlage on how to do good business. Learning about marketing and branding strategies I find really cool.',
                    image:{
                        src: `${Business}`,
                        alt: '',
                    },
                }
            ]
        }
        
    }
}

export const projects = [
    {
        index: 1,
        name:'Portfolio',
        gitLink:'https://github.com/emilkovacevic/portfolio',
        LiveLink:'https://emilkovacevic.com/',
        image:{
            link:`${PortfolioIMG}`,
            alt: 'Porfolio image'    
        }
    },
    {
        index: 2,
        name:'Films',
        gitLink:'https://github.com/emilkovacevic/Fiml-Database---scrimba-weekly-challanges-',
        LiveLink:'./publicprojects/films/index.html',
        image:{
            link:`${FilmsImg}`,
            alt: 'FilmsSite image'    
        }
    },
    {
        index: 3,
        name:'Bomberman',
        gitLink:'https://github.com/emilkovacevic/bomberman-js-game',
        LiveLink:`./publicprojects/bomberman/bomberman.html`,
        image:{
            link:`${BombermanIMG}`,
            alt: 'Bomberman image'    
        }
    },
]
