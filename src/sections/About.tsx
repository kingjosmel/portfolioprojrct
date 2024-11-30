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
import ToolboxItems from '@/components/ToolboxItems';


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
    emoji: '0',
    left:'5%',
    top:'5%',
  },
  {
    title: 'Photography',
    emoji: '0',
    left:'50%',
    top:'5%',
  },
  {
    title: 'Gaming',
    emoji: '0',
    left:'10%',
    top:'35%',
  },
  {
    title: 'music',
    emoji: '0',
    left:'35%',
    top:'40%',
  },
  {
    title: 'Fiteness',
    emoji: '0',
    left:'70%',
    top:'45%',
  },
  {
    title: 'Readign',
    emoji: '0',
    left:'5%',
    top:'60%',
  },
]

export const AboutSection = () => {
  return <div className='py-20 '>

    <div className='container'>
    <SectionHeader eyebrow="A Glimse into my world" title="About Me" description="Learn more about who I am and what I do" />

    {/* card div */}

    <div className='mt-20 flex flex-col gap-8'>

      <div className='grid grid-col-1 gap-8 md:grid-cols-5 '>

        {/* size should be 320px */}
          <Card className='h-[250px] md:col-span-2'> 

          <CardHeader title='My Reads' description='Explore the books shaping my prespective' className=''/>

            <div className='w-40 mx-auto mt-2 md:mt-0'>
              <Image src={bookImage} alt="book image" />
            </div>

          </Card>

          {/* second card */}

          {/* size should be 320px */}
          <Card className='h-[250px] md:col-span-3'>

            <div>
              {/* <StarIcon /> */}

              <CardHeader title='My Toolbox' description='Explore the technologies and tools I use to craft exceptional digital experiences.' className='' />
      
              <ToolboxItems items={toolboxItems} className='' />
              <ToolboxItems items={toolboxItems} className='mt-6'  itemsWrapperClassName='-translate-x-1/2' />
            </div>
          
        </Card>
          </div>  

          

           <div className='grid gap-8 grid-cols-1 md:grid-cols-5'>
                {/* thrid card  */}
              {/* sholud be 320px */}
            <Card className='h-[250px] p-0 flex flex-col md:col-span-3'>

                <div>
                  {/* <StarIcon /> */}

                  <CardHeader title='Beyond the code ' description='Explore my interest and hobbies beyond the digital realm' className='px-6 py-6'/>

                </div>

                <div className='relative flex-1'>
                  {Hobbies.map(item => (
                    <div key={item.title} className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute' style={{
                      left:item.left,
                      top:item.top,
                    }}>
                      <span className='font-medium text-gray-950'>{item.title}</span>
                      <span>{item.emoji}</span>
                    </div>
                  )
                  )}
                </div>
                </Card>

                {/* fourth card */}

                <Card className='h-[250px] p-0 relative md:col-span-2'>
                  <Image src={MapImage} alt='map image' className='h-full w-full object-cover object-left-top' />
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 '>
                    <Image src={SmileMemoji} alt='smile' className='size-20'/>
                  </div>
                </Card>
            </div>
            
    </div>



  </div>
  </div>
};
