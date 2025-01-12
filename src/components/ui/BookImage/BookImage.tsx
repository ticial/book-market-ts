import styles from "./BookImage.module.css";

const IMG_NOT_FOUND_URL =
  "https://prometheus-platform.github.io/Example_of_course_project_2/static/media/imageNotFound.298b98203c3825c61303.png";

type Props = {
  src: string;
  alt: string;
};

const BookImage = ({ src, alt }: Props) => {
  return (
    <div className={styles.image}>
      <img src={src ? src : IMG_NOT_FOUND_URL} alt={alt} width={250} />
    </div>
  );
};

export default BookImage;
