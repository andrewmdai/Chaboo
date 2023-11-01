import React from 'react';
import {
  Button,
  Space,
  DatePicker,
  Layout,
  Menu,
  Typography,
  Tooltip,
  Divider,
  Card,
  Tag,
} from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
  InstagramOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
const { Text } = Typography;

const { Header, Sider, Content } = Layout;
const { Paragraph } = Typography;

const workHistory = [
  {
    employer: 'quell (open source)',
    title: 'software engineer',
    time: 'apr 2023 - present',
    description:
      'Quell is an easy-to-use, lightweight JavaScript library providing a client- and server-side caching solution and cache invalidation for GraphQL.',
    technologies: [
      'javascript',
      'typescript',
      'react',
      'html',
      'css',
      'material ui',
      'node',
      'express',
      'jest',
      'redis',
      'graphql',
      'mongodb',
      'docker',
      'render',
    ],
  },
  {
    employer: 'ingersoll rand/tuthill pump group',
    title: 'applications engineer',
    time: 'jan 2020 - mar 2023',
    description:
      'Managed a $1.5M engineered-to-order application project, collaborating with one of the largest EPC firms in the world by generating 80+ pieces of technical documentation, including manufacturing data books and project progress reports.',
    technologies: [
      'project management',
      'technical documentation',
      'solidworks',
      'solidworks pdm',
      'customer relations',
    ],
  },
  {
    employer: 'tuthill pump group',
    title: 'design engineer',
    time: 'sep 2014 - jan 2020',
    description:
      'Executed over 100 engineering change requests to improve machinability and ease of assembly, including consolidating and simplifying features and revising drawings and 3D models in a document revision control state management database.',
    technologies: [
      'continuous improvement',
      'solidworks',
      'solidworks pdm',
      'autodesk autocad',
    ],
  },
];

const projects = [
  {
    title: 'playtabase',
    description:
      'A games and activities database web application that allows users to add, edit, rate, and search for an activity for their in-person or virtual events using relevant target audience and group size filters.',
    technologies: [
      'javascript',
      'typescript',
      'react',
      'html',
      'css',
      'material ui',
      'node',
      'express',
      'mongodb',
      'docker',
      'render',
    ],
  },
  {
    title: 'chaboo',
    description:
      "A fast paced charades game where it's not just about what you act out, but also about what you don't act out",
    technologies: [
      'javascript',
      'typescript',
      'react',
      'html',
      'css',
      'node',
      'express',
      'mongodb',
      'docker',
      'render',
    ],
  },
  {
    title: 'andrew dai developer website',
    description: "yes, the website you're on right now! this one! look at it!",
    technologies: [
      'javascript',
      'typescript',
      'react',
      'html',
      'css',
      'node',
      'express',
      'ant design',
      'docker',
      'vercel',
    ],
  },
];

const cardElements = workHistory.map((job, i) => (
  <Card
    className='cardcard'
    style={{ width: '40vw', border: '0px', backgroundColor: 'aqua' }}
  >
    <div className='card'>
      <div className='era'>
        <Space>
          <Typography style={{ color: 'white' }}>{job.time}</Typography>
        </Space>
      </div>

      <div className='detail'>
        <Typography
          className='employer'
          style={{ color: 'white', fontWeight: '400' }}
        >
          {job.employer}
        </Typography>
        <Text italic style={{ color: 'white' }}>
          {job.title}
        </Text>
        <Divider
          style={{ background: '#dedee5', margin: '10px 0px 10px 0px' }}
        />
        <Typography style={{ color: 'white', marginBottom: '10px' }}>
          {job.description}
        </Typography>
        {job.technologies.map(tech => (
          <Tag color='#108ee9' style={{ margin: '3px', borderRadius: '10px' }}>
            {tech}
          </Tag>
        ))}
      </div>
    </div>
  </Card>
));

const projectElements = projects.map((project, i) => (
  <Card
    className='cardcard'
    style={{ width: '40vw', border: '0px', backgroundColor: 'aqua' }}
  >
    <div className='card'>
      <div className='era'>
        <Space>
          <Typography style={{ color: 'white' }}>
            insert thumbnail here
          </Typography>
        </Space>
      </div>

      <div className='detail'>
        <Typography
          className='employer'
          style={{ color: 'white', fontWeight: '400' }}
        >
          {project.title}
        </Typography>
        {/* <Text italic style={{ color: 'white' }}>
      {job.title}
    </Text> */}
        <Divider
          style={{ background: '#dedee5', margin: '10px 0px 10px 0px' }}
        />
        <Typography style={{ color: 'white', marginBottom: '10px' }}>
          {project.description}
        </Typography>
        {project.technologies.map(tech => (
          <Tag color='#108ee9' style={{ margin: '3px', borderRadius: '10px' }}>
            {tech}
          </Tag>
        ))}
      </div>
    </div>
  </Card>
));

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <Sider trigger={null} collapsible collapsed={collapsed}> */}
      <Sider id='sidebar' trigger={null} collapsible width={'45vw'}>
        <div className='sidecontent'>
          <Typography.Title
            className='intro'
            style={{ color: '#dedee5', fontSize: 80 }}
          >
            hi, i'm andrew
          </Typography.Title>
          <Typography.Title
            className='intro'
            level={3}
            style={{ color: '#dedee5' }}
          >
            i'm a software engineer based in chicago, il.
          </Typography.Title>

          <Divider
            style={{ background: '#dedee5', margin: '20px 0px 20px 0px' }}
          />

          <Typography.Title
            className='mystory'
            level={5}
            style={{ color: '#7d8593' }}
          >
            Software Engineer experienced with building full stack JavaScript
            and TypeScript applications with React, Node, Express, and SQL &
            NoSQL databases. Contributor to the open source community, most
            recently with Quell, a lightweight GraphQL caching solution.
            <br />
            <br />I am always seeking to create, whether that's in music,
            photography, videography, art, or code. When I'm away from the
            computer I enjoy traveling the world, playing Ultimate Frisbee,
            hitting the gym, eating food that's way too unhealthy, and
            sing-until-your-voice-is-ruined karaoke nights.
          </Typography.Title>
          {/* <Menu
            theme='dark'
            mode='inline'
            // defaultSelectedKeys={['1']}
            // style={{ backgroundColor: '#26577C'}}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'my story',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'skills',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'projects',
              },
            ]}
          /> */}

          {/* Contact Me Icons*/}
          <Space className='socials'>
            <Tooltip title='LinkedIn' color='blue'>
              <Button
                type='link'
                href={'https://www.linkedin.com/in/andrewmdai/'}
                icon={
                  <LinkedinFilled
                    className='socialsicon'
                    size={100}
                    style={{ color: '#7d8593', fontSize: 25 }}
                  />
                }
              />
            </Tooltip>
            <Tooltip title='GitHub' color='blue'>
              <Button
                type='link'
                href={'https://github.com/andrewmdai'}
                icon={
                  <GithubOutlined
                    className='socialsicon'
                    size={100}
                    style={{ color: '#7d8593', fontSize: 25 }}
                  />
                }
              />
            </Tooltip>
            <Tooltip title='Resume' color='blue'>
              <Button
                type='link'
                // href={'mailto:andrewmdai@gmail.com'}
                icon={
                  <SolutionOutlined
                    className='socialsicon'
                    size={100}
                    style={{ color: '#7d8593', fontSize: 25 }}
                  />
                }
              />
            </Tooltip>

            <Tooltip title='Instagram' color='blue'>
              <Button
                type='link'
                href={'https://www.instagram.com/imandrew/?hl=en'}
                icon={
                  <InstagramOutlined
                    className='socialsicon'
                    size={100}
                    style={{ color: '#7d8593', fontSize: 25 }}
                  />
                }
              />
            </Tooltip>

            <Tooltip title='Email' color='blue'>
              <Button
                type='link'
                href={'mailto:andrewmdai@gmail.com'}
                icon={
                  <MailOutlined
                    className='socialsicon'
                    size={100}
                    style={{
                      color: '#7d8593',
                      fontSize: 25,
                      strokeWidth: '10',
                    }}
                  />
                }
              />
            </Tooltip>
          </Space>
        </div>
      </Sider>

      <Content id='content' style={{ backgroundColor: '#121e35' }}>
        <div className='app'>
          {/* <Divider
            orientation='left'
            orientationMargin='0'
            style={{ color: 'white' }}
          >
            my story
          </Divider> */}
          {/* <Space>
            <Typography.Title
              className='mystory'
              level={5}
              style={{ color: 'white' }}
            >
              Software Engineer experienced with building full stack JavaScript
              and TypeScript applications with React, Node, Express, and SQL &
              NoSQL databases. Contributor to the open source community, most
              recently with Quell, a lightweight GraphQL caching solution.
              <br />
              <br />I am always seeking to create, whether that's in music,
              photography, videography, art, or code. When I'm away from the
              computer I enjoy traveling the world, playing Ultimate Frisbee,
              hitting the gym, eating food that's way too unhealthy, and
              sing-until-your-voice-is-ruined karaoke nights.
            </Typography.Title>
          </Space> */}
          {/* <Divider
            orientation='left'
            orientationMargin='0'
            style={{ color: 'white' }}
          >
            my experience
          </Divider> */}
          {/* <Card style={{ width: '30vw', height: '10vw', backgroundColor: 'transparent' }}>
            <div className='card'>
              <Space>
                <Typography style={{ color: 'white' }}>Apr 2023 - present</Typography>
              </Space>

              <Space style={{marginLeft: '30px'}}>
                <Typography style={{ color: 'white' }}>Quell (Open Source)</Typography>

              </Space>
            </div>
          </Card> */}
          <div>{cardElements}</div>
          <Typography.Title
            className='mystory'
            level={5}
            style={{ color: 'white' }}
          >
            ▪ Researched and incorporated a client-side in-memory database
            replacement essential to Quell’s caching functionality, swapping a
            third-party deprecated dependency for JavaScript’s native Map data
            structure while maintaining application features, reducing latency,
            and improving overall performance to ensure long-term support,
            security, and stability.
            <br />
            ▪ Utilized Redis for fast in-memory server-side caching and
            modularized 500 lines of the application’s Redis functionality logic
            into separated, organized modules to enable more streamlined
            integration, management, and testing than before.
            <br />
            ▪ Capitalized on the robust routing and middleware features of Node
            and Express to direct sample queries to a specified GraphQL server
            endpoint, applying Quell’s custom middleware to enforce database
            protection measures.
            <br />
            ▪ Implemented MongoDB for its flexible document-based model,
            leveraging its hierarchical and nested nature to seamlessly handle
            similarly structured GraphQL queries for the application’s demo
            repository website, enabling users and developers to experiment with
            Quell and experience its database query, modification, and caching
            abilities.
            <br />
            ▪ Increased TypeScript coverage by 10%, harnessing TypeScript’s
            static type checking to allow for easier bug identification at
            compile time, type troubleshooting, and more consistent, structured
            data flow throughout the application.
            <br />
            ▪ Reworked and repaired Jest tests to be compatible with previously
            converted TypeScript code while adding an additional 10% testing
            coverage, resulting in a more reliable testing suite that can better
            ensure the quality of the code.
            <br />▪ Product developed under tech accelerator Open Source Labs
            (opensourcelabs.io) as a tool for the developer community.
          </Typography.Title>
          {/* <Divider
            orientation='left'
            orientationMargin='0'
            style={{ color: 'white' }}
          >
            my skills
          </Divider> */}

          {/* <Divider
            orientation='left'
            orientationMargin='0'
            style={{ background: 'white' }}
          >
            my projects
          </Divider> */}
        </div>

        <Divider
          style={{ background: '#dedee5', margin: '10px 0px 10px 0px' }}
        />
        {projectElements}

        <Typography.Title
          className='intro'
          level={5}
          style={{ color: 'white' }}
        >
          Built from scratch using Ant Design in Visual Studio Code by Andrew
          Dai, deployed via Vercel.
        </Typography.Title>
      </Content>
    </Layout>
  );
};

export default App;
