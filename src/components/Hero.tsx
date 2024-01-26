
const props = {
  image: "https://avatars.githubusercontent.com/u/66575486?v=4",
  username: "Learn With Jason",
  githubHandle: "learnwithjason",
  createdAt: "June 8, 2020",
  repos: 176,
  followers: 184,
  following: 0
}

export default function Hero() {
  return (
    <section>
      <img src={props.image} alt={props.username} />
      <h1>{props.username}</h1>
      <a href={`https://github.com/${props.githubHandle}`}>@{props.githubHandle}</a>
      <p>Joined {props.createdAt}</p>

      <div>
        <div>
          <span>{props.repos}</span>
          <label>REPOSITORIES</label>
        </div>

        <div>
          <span>{props.followers}</span>
          <label>FOLLOWERS</label>
        </div>

        <div>
          <span>{props.following}</span>
          <label>FOLLOWING</label>
        </div>
      </div>
    </section>
  )
}

