import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Article } from "./article.entity";

@Index("fk_article_price_article_id", ["articleId"], {})
@Entity("article_price", )
export class ArticlePrice {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "article_price_id",
    unsigned: true,
  })
  articlePriceId: number;

  @Column({type:"int", name: "article_id", unsigned: true})
  articleId: number;

  @Column({
    type: "decimal",
    unsigned: true,
    precision: 10,
    scale: 2,
  })
  price: string;

  @Column( {
    type: "timestamp",
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => Article, (article) => article.articlePrices, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "article_id", referencedColumnName: "articleId" }])
  article: Article;
}
