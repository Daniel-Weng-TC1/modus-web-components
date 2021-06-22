// eslint-disable-next-line
import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

export interface Crumb {
  display: string;
  id: string;
}

@Component({
  tag: 'modus-breadcrumb',
  styleUrl: 'modus-breadcrumb.scss',
  shadow: true,
})
export class ModusBreadcrumb {
  /** The breadcrumbs to render. */
  @Prop() crumbs: Crumb[] = [];

  /** (optional) An event that fires on breadcrumb click. */
  @Event() crumbClick: EventEmitter<Crumb>;

  render(): unknown {
    return (
      <nav role="navigation" aria-label="breadcrumbs">
        <ol>
          {
            this.crumbs.map((crumb, index) =>
              <li key={crumb.id}>
                {index < this.crumbs.length - 1
                  ? <span class="crumb">
                      <a href="#" onClick={() => this.crumbClick.emit(crumb)}>{crumb.display}</a>
                      <span class="divider">{'>'}</span>
                    </span>
                  : <span class="last-crumb">{crumb.display}</span>
                }
              </li>
          )}
        </ol>
      </nav>
    );
  }
}