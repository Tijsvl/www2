/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classes from './InstagramPost.module.scss'

const InstagramPost = (props) => {
  return (
    <section className={classes.feed}>
      <div className={classes.post}>
        <div className={classes.post__header}>
          <div>
            <img src="/img/fouteskipakken.jpg" />
          </div>
          <div>{props.account}</div>
          <div>
            <img src="/assets/instagram/icon-dots.svg" />
          </div>
        </div>
        <div className={classes.post__photo}>
          <a href={`https://tijsvl.net/Qlibpk7E/instagram-preview/${props.account}-${props.location}/${props.image}.jpg`} target="_blank">
            <img src={`https://tijsvl.net/Qlibpk7E/instagram-preview/${props.account}-${props.location}/${props.image}_small.jpg`} />
          </a>
        </div>
        <div className={classes.post__cta}>
          <div>
            <img src="/assets/instagram/icon-like.svg" />
            <img src="/assets/instagram/icon-comment.svg" />
            <img src="/assets/instagram/icon-share.svg" />
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <img src="/assets/instagram/icon-save.svg" />
          </div>
        </div>
        <div className={classes.post__liked}>
          <div>
            <div>
              Liked by <strong>tijsvl</strong> and <strong>123 others</strong>
            </div>
            <img src="/img/profile-tijsvl.jpg" />
            <img src="/img/profile-vyarazlatilova.jpg" />
            <img src="/img/profile-lookwhatiso.jpg" />
          </div>
        </div>
        <div className={classes.post__description}>
          <strong>${props.account}</strong> BEST FUCKIN&lsquo; PARTY ❤️🔥❤️🔥
          <div>View all 12 comments</div>
          <div>3 hours ago</div>
        </div>
        <div className={classes.post__comment}>
          <div>
            <img src="/assets/instagram/icon-emoji.svg" />
          </div>
          <div>Add a comment...</div>
          <div>Post</div>
        </div>
      </div>
    </section>
  )
}

export default InstagramPost
