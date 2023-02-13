import { HiNewspaper, HiOutlineChip } from 'react-icons/hi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFlagFill } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { BiWorld } from 'react-icons/bi';
import { IoMdBicycle, IoMdBusiness } from 'react-icons/io';
import { GoBeaker } from 'react-icons/go';
import { MdHealthAndSafety, MdLocalMovies} from 'react-icons/md';


export const topic1 = [
    {
        name: 'Top stories',
        icon: <HiNewspaper />,
        path: ''
    },
    {
        name: 'Headlines',
        icon: <TbWorld />,
        path: 'headlines'
    },
    
    {
        name: 'Favorite',
        icon: <AiOutlineStar />,
        path: 'favourite'
    }

];

export const topic2 = [ 
    {
        name: 'US',
        icon: <BsFlagFill />
    },
    {
        name: 'World',
        icon: <BiWorld />
    },
    {
        name: 'Business',
        icon: <IoMdBusiness />
    },
    {
        name: 'Technology',
        icon: <HiOutlineChip />
    },
    {
        name: 'Entertainment',
        icon: <MdLocalMovies />
    },
    {
        name: 'Sport',
        icon: <IoMdBicycle />
    },
    {
        name: 'Science',
        icon: <GoBeaker />
    },
    {
        name: 'Health',
        icon: <MdHealthAndSafety />
    }

];




