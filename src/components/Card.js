import { MehOutlined, BulbOutlined, LikeOutlined } from "@ant-design/icons";
import {Card as AntCard, Avatar, Rate} from "antd";
const {Meta} = AntCard;

const Card = ({name, description, coverArt}) => {
  return (
    <AntCard
      style={{
        width: 300,
        marginTop: 16,
      }}
      cover={<img alt="tacolicious" src={coverArt} />}
      actions={[
        <BulbOutlined key="insightful" />,
        <MehOutlined key="meh" />,
        <LikeOutlined key="like" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="lauren.jpeg" />}
        title={name}
        description={description}
      />
      <Rate />
    </AntCard>
  );
};

export default Card;