export class PageNavigationModel {
  title!: string;
  link!: string;

  constructor(title: string, link: string) {
    this.title = title;
    this.link = link;
  }
}
