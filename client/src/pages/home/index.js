import Header from 'components/home/Header'
import Statistics from 'components/home/Statistics'

const Home = () => {

   
    return (
        <div className='sm:px-8 px-2'>
            <div>
                <Header />
            </div>
            <div>
                <Statistics />
            </div>
        </div>
    )
}

export default Home