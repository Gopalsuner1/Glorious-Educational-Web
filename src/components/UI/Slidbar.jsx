
import { useDispatch, useSelector } from 'react-redux';
import IconProvider from '../../store/IconProvider'
import { Link } from 'react-router-dom'
import { setCheck } from '../../features/header/headerSlice';

const Slidbar = ({style}) => {

    const { isHeader, check, isSlider, socialIcons, headerTags } = useSelector(
    (state) => state.header
  );
 
  
  const dispatch = useDispatch();
  return (
    <div className={`min-h-fit md:hidden min-w-fit bg-[#e6e7af] border-l-[1px] border-b-[1px] absolute p-5  z-20 right-0 top-full transition-transform duration-400 ease-in-out ${style} ${isHeader ? "translate-x-full" : "translate-x-0" }`}>
         <ul className='flex flex-col font-bold text-nowrap space-y-3 f4'>
          {headerTags.map(({name,path}) => (
            <Link
              className={` ${name == check ? 'bg-white':' bg-[#e6e7af]'} rounded`}
              key={name}
              to={path}
              onClick={() => dispatch(setCheck(name))}
            >{name}
            </Link>
          ))}
        </ul>

        <ul className='mt-4 flex flex-wrap space-x-4'>
          {socialIcons.map(({id,url}) => (
            <a key={id} target="_blank" href={url}>
              <IconProvider id={id} 
              
              />
            </a>
          ))}
        </ul>
    </div>
  )
}

export default Slidbar