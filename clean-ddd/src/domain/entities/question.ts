import { randomUUID } from "crypto";

interface QuestionProps {
  title: string;
  content: string;
  slug: string;
  authorId: string;
}

export class Question {
  public id: string;
  public title: string;
  public content: string;
  public slug: string;
  public authorId: string;

  constructor(props: Question, id?: string) {
    this.title = props.title;
    this.content = props.content;
    this.slug = props.slug;
    this.authorId = props.authorId;
    this.id = id ?? randomUUID();
  }
}
