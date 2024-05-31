import Profile from '../Layout/Profile';
import History from '../Layout/History';
import Footer2 from '../Layout/Footer2';
import Navbar2 from '../Layout/Components/Navbar2';
import WorkList from '../Layout/Components/WorkList';

function Work(){
    return(
        <>  
            <Navbar2 />
            <div style={{height: "80px"}}></div>
            <WorkList />
            <Footer2 />
        </>
    )
}

export default Work;