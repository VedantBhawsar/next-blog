import Image from "next/image";
import {Comments} from "@components/Comments";
import {Menu} from "@components/Menu";
import styles from "./singlepage.module.css";

const SinglePage = async ({ params }) => {
  return (
      <div>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            magni!
          </h2>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Vedant</span>
              <span className={styles.date}>10.12.2003</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image alt="" src={"/p1.jpeg"} fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              pariatur natus corporis architecto esse rem expedita autem in quod
              iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit pariatur natus corporis architecto esse rem expedita autem
              in quod iusto.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Impedit pariatur natus corporis architecto esse rem expedita
              autem in quod iusto.Lorem
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              pariatur natus corporis architecto esse rem expedita autem in quod
              iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit pariatur natus corporis architecto esse rem expedita autem
              in quod iusto.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Impedit pariatur natus corporis architecto esse rem expedita
              autem in quod iusto.Lorem
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              pariatur natus corporis architecto esse rem expedita autem in quod
              iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit pariatur natus corporis architecto esse rem expedita autem
              in quod iusto.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Impedit pariatur natus corporis architecto esse rem expedita
              autem in quod iusto.Lorem
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              pariatur natus corporis architecto esse rem expedita autem in quod
              iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit pariatur natus corporis architecto esse rem expedita autem
              in quod iusto.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Impedit pariatur natus corporis architecto esse rem expedita
              autem in quod iusto.Lorem
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              pariatur natus corporis architecto esse rem expedita autem in quod
              iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Impedit pariatur natus corporis architecto esse rem expedita autem
              in quod iusto.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Impedit pariatur natus corporis architecto esse rem expedita
              autem in quod iusto.Lorem
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
