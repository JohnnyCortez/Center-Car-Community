import MakePost from "../components/MakePost"


const Home = (props) => {
    return(
        <div>Home
            <MakePost user={props.user.id}/>
        </div>
    )
}

export default Home