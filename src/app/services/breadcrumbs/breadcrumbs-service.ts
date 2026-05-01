import { Injectable, signal } from '@angular/core';

export interface Breadcrumb {
  label: string;
  path?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {
  private crumbs = signal<Breadcrumb[]>([]);
  readonly breadcrumbs = this.crumbs.asReadonly();

  setBreadcrumbs(crumbs: Breadcrumb[]) {
    this.crumbs.set(crumbs);
  }
}
