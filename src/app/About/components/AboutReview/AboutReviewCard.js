import Image from "next/image";

const AboutReviewCard = (props) => {
  return (
    <div className="about-review-card">
      <div className="about-review-card-container">
        <div className="about-review-card-first">
          <Image
            className="arcf-image"
            src={props.imgURL}
            height={1000}
            width={1000}
            alt={props.imgAlt}
          />
          <div className="arcf-right">
            <p className="arcf-name">{props.name}</p>
            <p className="arcf-username">@{props.username}</p>
          </div>
        </div>
        <p className="arc-user-message">{props.message}</p>
        <div className="about-review-card-stats">
          <span className="twt-likes-logo">❤️{props.numberOfLikes} Likes</span>
          <span className="twt-ctrl-reply">
            🛡️{props.numberOfReplies} Replies
          </span>
          <span className="twt-ctrl-share">
            😎{props.numberOfShares} Shares
          </span>
        </div>
        <p className="arc-postDate">
          Posted {props.postDate} {props.postDate > 1 ? "days" : "day"} ago.
        </p>
      </div>
    </div>
  );
};

export default AboutReviewCard;
