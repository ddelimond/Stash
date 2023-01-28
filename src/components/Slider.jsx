import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Slider = () => {
    return (
        <div className=" w-full  h-screen relative">
            <div className="flex justify-center absolute opacity-20 left-2.5 cursor-pointer bottom-0 top-0 m-auto items-center h-12 w-12 bg-slate-50 rounded-3xl">
                <ArrowBackIosIcon />
            </div>
            <div className='h-full'>

            </div>
            <div className="flex justify-center absolute  opacity-20 right-2.5 cursor-pointer bottom-0 top-0 m-auto items-center h-12 w-12 bg-slate-50 rounded-3xl">
                <ArrowForwardIosIcon />
            </div>

        </div>
    )
}

export default Slider