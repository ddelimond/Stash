import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Announcement from '../components/Announcement'
import Filter from '../components/Filter'



const ProductList = () => {
    return (

        <>
            <Announcement />
            <Navbar />
            <Filter />
            <Products />
            <Newsletter />
            <Footer />
        </>

    )
}

export default ProductList