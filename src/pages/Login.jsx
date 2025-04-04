import { useNavigate } from "react-router";
function Login () {
    const navigate = useNavigate() ; 
    return ( <>
     
     <h1>Login page </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe ad, possimus ratione minus adipisci aliquid quasi quaerat quisquam ipsam debitis sit recusandae numquam rem cumque? Dolore sunt fugit laboriosam veniam eaque nemo eligendi perferendis cumque eos aspernatur velit distinctio, iure itaque enim, iste natus voluptate corrupti facere quo suscipit ea dignissimos officiis quisquam consequatur! Placeat laborum quae autem cumque eos numquam blanditiis sed asperiores? Consequatur in similique natus nobis. Qui, molestiae? Similique repudiandae magni magnam? Accusamus iure labore sint officia quas doloremque a autem minima. Omnis sed animi, cumque iusto labore nam, neque nisi rerum asperiores eveniet nemo pariatur dicta delectus, tempore placeat voluptate veritatis ad ullam doloremque. Nemo fugiat ratione, nobis est ullam et velit iste officiis amet quam soluta quasi dicta libero perferendis ea earum impedit cupiditate dolore consequuntur praesentium quisquam atque corrupti aliquam. Facilis dignissimos esse impedit consectetur, velit distinctio soluta vel odit quibusdam quis sit culpa sint aut veniam fugit adipisci, omnis enim odio ea quasi possimus! Harum mollitia, consectetur animi minus repellat recusandae soluta, excepturi quo exercitationem blanditiis consequatur hic dicta quasi voluptatum consequuntur rerum vero fuga praesentium culpa accusantium architecto iusto veniam cum doloribus! Reprehenderit dignissimos tempore dolore ea adipisci et velit omnis.</p>
    
    <button onClick={()=>{
        navigate("/"); 
    }}>go to home </button>
    
    
    </> );
}

export default Login ;