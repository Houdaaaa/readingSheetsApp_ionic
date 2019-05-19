import { Category } from './category';

/**
* Class of reading sheet
*/
export class ReadingSheet {
    public id: number;
    public Title: string; 
    public Author: string;
    public PagesNumber: number;
    public Summary: string;
    public CriticalAnalysis: string;
    public category: Category;

    constructor(id: number, Title: string, Author: string, PagesNumber: number, Summary: string, CriticalAnalysis: string, category: Category) { 
        this.id = id;
        this.Title = Title;
        this.Author = Author;
        this.PagesNumber = PagesNumber;
        this.Summary = Summary;
        this.CriticalAnalysis = CriticalAnalysis;
        this.category = category;
    }

}