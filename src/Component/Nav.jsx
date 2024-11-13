import brta from '../assets/_(BRTA).svg.png'
import bdgovt from '../assets/Government_Seal_of_Bangladesh.svg.png'

const Nav = () => {
    return (
        <div className='px-[10%] flex justify-between items-center gap-5'>
            <div><img className='h-[70px]' src={brta} alt="" /></div>
            <div><img className='h-[70px]' src={bdgovt} alt="" /></div>
        </div>
    );
};

export default Nav;