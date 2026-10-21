import type { Article as IArticle } from '@/types';

export class ArticleModel implements IArticle {
  constructor(
    public title: string,
    public date: string,
    public status: string = 'Dipublikasikan'
  ) {}

  public isPublished(): boolean {
    return this.status === 'Dipublikasikan';
  }

  public publish(): void {
    this.status = 'Dipublikasikan';
  }

  public draft(): void {
    this.status = 'Draft';
  }

  public static fromObject(data: IArticle): ArticleModel {
    return new ArticleModel(data.title, data.date, data.status);
  }

  public toJSON(): IArticle {
    return {
      title: this.title,
      date: this.date,
      status: this.status,
    };
  }
}
