import { IUser } from "types/user";
import styles from "./Userpic.module.css";

type Props = {
  user: IUser;
};

const Userpic = ({ user }: Props) => {
  return (
    <div className={styles.userpic}>
      <span className="px-4 font-medium">{user.username}</span>
      <span className="rounded-full w-12">
        <img className={styles.img} src={user.image} alt="userimage" />
      </span>
    </div>
  );
};

export default Userpic;
