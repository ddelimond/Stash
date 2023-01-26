import SearchIcon from '@material-ui/icons/Search';
const Navbar = () => {
    return (
        <div className=" h-15">
            <div className=" flex flex-row justify-between py-3 px-6">
                <div className="">EN
                    <input className='border-1 border-gray' type="search" />
                    <span>
                        <SearchIcon />
                    </span>
                </div>

                <div className="">EN</div>
                <div className="">EN</div>
            </div>
        </div>

    )
}

export default Navbar