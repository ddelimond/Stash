import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



const Product = ({ item }) => {
    return (
        <>
            <div className="container flex justify-center transition-all ease-in-out text-[#928DB5] duration-[800ms] hover:bg-[#928DB5] hover:text-black hover:opacity-30  items-center grow m-2  w-[240px] relative h-[350px]">
                <div className="circle rounded-3xl before:content-['.']"></div>
                <img src={item.img} alt="product image" className="h-[75%]" />
                <div className="info flex absolute z-10 cursor-pointer  gap-5 top-auto left-auto text- flex-row justify-center text-[40px] items-center ">
                    <div className="icon text-2xl ">
                        <ShoppingCartOutlined />
                    </div>
                    <div className="icon">
                        <SearchIcon />
                    </div>
                    <div className="icon ">
                        <FavoriteBorderIcon />
                    </div>
                </div>
            </div>

        </>

    )
}

export default Product