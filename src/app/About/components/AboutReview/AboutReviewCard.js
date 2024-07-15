import Image from "next/image";

const AboutReviewCard = (props) => {
  return (
    <div className="about-review-card">
      <div className="about-review-card-container">
        <Image src={props.imgURL} height={25} width={25} alt={props.imgAlt} />
        <p>{props.name}</p>
        <p>{props.username}</p>
        <p>{props.message}</p>
        <span>Likes {props.numberOfLikes}</span>
        <span>Replies {props.numberOfReplies}</span>
        <span>Shares {props.numberOfShares}</span>
      </div>
    </div>
  );
};

export default AboutReviewCard;
