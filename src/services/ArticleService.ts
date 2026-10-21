import { ArticleModel } from '@/models';
import { initialArticles } from '@/data';

export class ArticleService {
  private static instance: ArticleService;
  private articles: ArticleModel[];

  private constructor() {
    this.articles = initialArticles.map((a) => ArticleModel.fromObject(a));
  }

  public static getInstance(): ArticleService {
    if (!ArticleService.instance) {
      ArticleService.instance = new ArticleService();
    }
    return ArticleService.instance;
  }

  public getArticles(): ArticleModel[] {
    return [...this.articles];
  }

  public addArticle(title: string, date: string = 'Hari ini'): ArticleModel[] {
    const newArticle = new ArticleModel(title, date, 'Dipublikasikan');
    this.articles = [newArticle, ...this.articles];
    return this.getArticles();
  }
}

export const articleService = ArticleService.getInstance();
