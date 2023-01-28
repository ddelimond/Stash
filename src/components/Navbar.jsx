import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const Navbar = () => {
    return (
        <>
            <div className=" h-15">
                <div className="flex justify-between py-5 px-2 items-center" >
                    <div className='flex flex-row items-center '>
                        <span className='text-sm cursor-pointer'>EN</span>
                        <div className='flex border-black/40 rounded-2xl border-2 p-1 ml-6 border-solid  '>
                            <input type="text" className='focus:outline-none' />
                            <SearchIcon className='text-[gray]/40' fontSize='16px' />
                        </div>
                    </div>
                    <h1 className='cursor-pointer items-center text-3xl font-bold text-center grow '>
                        STASH.
                    </h1>
                    <span className=' flex flex-row gap-x-6 text-sm mr-2 justify-end  items-center '>
                        <div className='text-sm cursor-pointer'>REGISTER</div>
                        <div className='text-sm cursor-pointer'>SIGN IN</div>
                        <div className='text-sm cursor-pointer'>
                            <Badge badgeContent={4} color="secondary" className='cursor-pointer'>
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </div>
                    </span>
                </div>
            </div>

        </>

    )
}

export default Navbar