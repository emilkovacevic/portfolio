import GithubIMG from './projects/Github/Github.JPG'
import BombermanIMG from './projects/Bomberman/Image.JPG'
import ResortIMG from './projects/Resort/ResortIMG.JPG'
import FilmsImg from './projects/Films/Cover.JPG'
import PortfolioIMG from './projects/Portfolio/PortfolioIMG.JPG'

import WebImg from './images/webdev.png'
import ArtIMG from './images/art.png'
import Business from './images/business.png'

import ProfilePic from './images/profilePic.png'


export const personal = {
    name: 'Emil Kovačević',

    heading:'Summary',
    introduction: 'I am a  technology enthusiast, focusing on website development. People find me to be a self motivated team player with excellent communication skills. I enjoy learning new skills and I have a huge drive to spend the time and face programming problems. At the moment I am looking for a developer position at an IT company. If you are one, please shoot me an email.',
    
    aboutHeading:'Yes, that\'s me at the picture',
    aboutIMG: `${ProfilePic}`,
    aboutMe: 'I have some knowledge of photo editing in Photoshop and I am familiar with Figma. As for my technical knowledge I would firstly mention and thank SCRIMBA.COM for teaching me the basics of front end development. From basic HTML all the way to modern React. I recommend the platform to anyone looking to enter the web development field in a constructive and hands on manner. Supported by an awesome community.',
    
    intrestHeading: 'What I am looking for?',
    intrest: 'As a fresh web developer, I am looking to grow in a better, more experienced developer by collaborating with a team on dev related tasks.',
    
    skillHeading: 'I have familiarity with the stack listed under',
    techList:' CSS, JavaScript, React, Express, Node.js, MongoDB Atlas, Heroku and Firebase',
    message:'If you are looking for a web developer feel free to contact me.',

    github: {
        name: 'Github',
        link: 'https://github.com/emilkovacevic'
    },
    linkedin: {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/emil-kovacevic-2893aa54/'
    },

    mail:{
        link: 'emil.kovacevic.dev@gmail.com'
    },

    aside:{
        mainHeading: 'Have a look at my Curriculum Vitae',
        main: 'Summary of my where I have been and what I am doing now.',

        other:{
            heading: 'Things I find interesting',
            intrests: [
                {
                    heading: 'Web Development',
                    paragraph: 'Creating dynamic statefull websites and applications using modern standards.',
                    image:{
                        src: `${WebImg}`,
                        alt: 'web development',
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
                    paragraph: 'Expanding on how doing good business. Learning about marketing and branding strategies I find really interesting.',
                    image:{
                        src: `${Business}`,
                        alt: 'business',
                    },
                }
            ]
        }
        
    }
}

export const projects = [
    {
        index: 0,
        name:'Github Jobs',
        gitLink:'https://github.com/emilkovacevic/github-jobs-react-app',
        LiveLink:'https://github-jobs-website.web.app/',
        tech: 'github jobs api, javascript, react, react-router-dom, axios, styled-components, firebase',
        image:{
            link:`${GithubIMG}`,
            alt: 'Github jobs'    
        }
    },
    {
        index: 1,
        name:'Portfolio',
        gitLink:'https://github.com/emilkovacevic/portfolio',
        LiveLink:'https://emilkovacevic.com/',
        tech: 'javascript, react, react-router-dom, framer-motion, styled-components, firebase',
        image:{
            link:`${PortfolioIMG}`,
            alt: 'Porfolio'    
        }
    },
    {
        index: 2,
        name:'Films',
        gitLink:'https://github.com/emilkovacevic/Fiml-Database---scrimba-weekly-challanges-',
        LiveLink:'./publicprojects/websites/films/index.html',
        tech: 'javaScript, json, css, html',
        image:{
            link:`${FilmsImg}`,
            alt: 'Films website'    
        }
    },
    {
        index: 3,
        name:'Bomberman',
        gitLink:'https://github.com/emilkovacevic/bomberman-js-game',
        LiveLink:'./publicprojects/bomberman/bomberman.html',
        tech: 'javaScript, css',
        image:{
            link:`${BombermanIMG}`,
            alt: 'Bomberman'    
        }
    },
    {
        index: 4,
        name:'Resorts',
        gitLink:'https://github.com/emilkovacevic/resort-website',
        LiveLink:'./publicprojects/websites/resorts/index.html',
        tech: 'javaScript, bootstrap, css, html',
        image:{
            link:`${ResortIMG}`,
            alt: 'Resorts'    
        }
    }
]
