module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Nikita Kalgushkin',
    // Main Site Title
    title: `Nikita Kalgushkin | Data Engineer | Python Fullstack Developer`,
    // Description that goes under your name in main bio
    description: `Data Engineer experienced building data pipelines and web services in telecom, retail, and EdTech industries.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/SFill`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/nikita-kalgushkin/`,
    // Content of the About Me section
    about: `Data Engineer with 5+ years of experience building data pipelines in telecom, retail, and EdTech industries.
    My diverse experience in data and web field allows me to choose the optimal technology for business needs to reduce costs and maximize profits. 
    Experienced in building robust, infinity-scaled, and effective pipelines. Seeking to leverage my skills and experience to make a positive impact as a data engineer.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    // projects: [

    // ],
    // // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    // experience: [
    //   {
    //     name: 'Acme Corp',
    //     description: 'Full-Stack Developer, February 2020 - Present',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Globex Corp',
    //     description: 'Full-Stack Developer, December 2017 - February 2020',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    //   {
    //     name: 'Hooli',
    //     description: 'Full-Stack Developer, May 2015 - December 2017',
    //     link: 'https://github.com/RyanFitzgerald/devfolio',
    //   },
    // ],
    // // Optional: List your skills, they must have `name` and `description`.
    // skills: [
    //   {
    //     name: 'Languages & Frameworks',
    //     description:
    //       'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
    //   },
    //   {
    //     name: 'Databases',
    //     description: 'MongoDB, PostreSQL, MySQL',
    //   },
    //   {
    //     name: 'Other',
    //     description:
    //       'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
    //   },
    // ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
