import './Featured.css'
import featuredImg from '../../../assets/assets/home/featured.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Featured = () => {
    return (
        <div className='w-full bg-fixed  h-[600px] my-10 back'>
            <section className='pt-5'>
                <SectionTitle className='my-10'
                    heading={"Featured Item"}
                    subHeading={"Check It Now"}
                ></SectionTitle>
            </section>
            <section className='py-5 flex px-10  justify-center items-center'>
                <div className='w-1/2 '>
                    <img className='w-3/4' src={featuredImg} alt="" />
                </div>
                <div className='w-1/2 text-white bg-black opacity-80 text-center space-y-5 py-5'>
                    <p>March 20,2030 </p>
                    <h1 className='uppercase font-bold'>where can i get some?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, at? Perferendis quia modi amet tenetur quisquam? Voluptates iusto ea error aperiam voluptatem suscipit deserunt quam aspernatur? Blanditiis iure quas, assumenda corporis dolor similique aliquam quis alias explicabo sequi quod, possimus sit quos! Modi ea repudiandae assumenda suscipit. Perferendis, aspernatur consequatur?</p>
                    <button className='btn text-3xl btn-outline border-0 border-b-4 text-white hover:bg-green-600 hover:border-white '> Order Now</button>
                </div>
            </section>


        </div>
    );
};

export default Featured;