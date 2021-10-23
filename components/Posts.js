import Post from "./Post"

const posts= [
  {
    id: '123',
    username: 'Vinny',
    userImg: 'https://cdn.discordapp.com/attachments/350871735387684876/899069863467831317/fullesttonele.png',
    img: 'https://media.self.com/photos/5e8e2b54f77fc200080d4122/3:4/w_2706,h_3609,c_limit/pandas-eating-bamboo.jpg',
    caption: 'aodgnmoas',
  },
  {
    id: '123',
    username: 'Vinny',
    userImg: 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d',
    img: 'https://media.self.com/photos/5e8e2b54f77fc200080d4122/3:4/w_2706,h_3609,c_limit/pandas-eating-bamboo.jpg',
    caption: 'aodgnmoas',
  },

];
function Posts() {
  return (
    <div>
      {posts.map((post)=>(
        <Post 
          key={post.id} 
          id={post.id} 
          username={post.username} 
          userImg={post.userImg} 
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts
