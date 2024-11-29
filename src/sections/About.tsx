import  SectionHeader  from '../components/SectionHeader';
import Card from '@/components/Card';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png'
import Image from 'next/image';
import Javascripticon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import Chrome from '@/assets/icons/chrome.svg';
import GitHub from '@/assets/icons/github.svg';
import TechIcon from '@/components/TechIcon';
import MapImage from '@/assets/images/map.png';
import SmileMemoji from '@/assets/images/memoji-smile.png';
import CardHeader from '@/components/CardHeader';
import ToolboxIems from '@/components/ToolboxItems';


const toolboxItems = [
  {
    title: 'Javascript',
    iconType: Javascripticon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GitHub,
  },
  {
    title: 'Chrome',
    iconType: Chrome,
  }
];

const Hobbies =[
  {
    title: 'painting',
    emoji: '0'
  },
  {
    title: 'Photography',
    emoji: '0'
  },
  {
    title: 'Gaming',
    emoji: '0'
  },
  {
    title: 'music',
    emoji: '0'
  },
  {
    title: 'Fiteness',
    emoji: '0'
  },
  {
    title: 'Readign',
    emoji: '0'
  },
]

export const AboutSection = () => {
  return <div className='py-20 '>
    <div className='container'>
    <SectionHeader eyebrow="A Glimse into my world" title="About Me" description="Learn more about who I am and what I do" />

    {/* card div */}

    <div className='mt-20'>
      {/* size should be 320px */}
      <Card className='h-[250px]'> 

       <CardHeader title='My Reads' description='Explore the books shaping my prespective' className=''/>

        <div className='w-40 mx-auto mt-8'>
          <Image src={bookImage} alt="book image" />
        </div>

      </Card>

      {/* second card */}

      {/* size should be 320px */}
      <Card className='h-[250px] p-0'>

        <div>
          <StarIcon />

          <CardHeader title='My Toolbox' description='Explore the technologies and tools I use to craft exceptional digital experiences.' className='px-6 pt-6' />
  
          <ToolboxIems items={toolboxItems} />
          <ToolboxIems items={toolboxItems} />
        </div>

        

      </Card>

          {/* thrid card  */}

      <Card>

          <div>
            <StarIcon />

            <CardHeader title='Beyond the code ' description='Explore my interest and hobbies beyond the digital realm' className=''/>

          </div>

          <div>
            {Hobbies.map(item => (
              <div key={item.title} className=''>
                <span>{item.title}</span>
                <span>{item.emoji}</span>
              </div>
            )
            )}
          </div>
          </Card>

          {/* fourth card */}

          <Card>
            <Image src={MapImage} alt='map image' />
            <Image src={SmileMemoji} alt='smile' />
          </Card>

    </div>



  </div>
  </div>
};
