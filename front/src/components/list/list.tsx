import styles from "./list.module.css";

type TListItem = {
  title: string;
  content: string;
};

type TListProps = {
  info: TListItem[];
};

function List({ info }: TListProps): React.JSX.Element {
  return (
    <div className={styles.list}>
      {info.map((item: TListItem, index: number) => (
        <div className={styles.list__item_container} key={index}>
          <p className={styles.list__item_title}>{item.title}</p>
          <p className={styles.list__item_content}>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
