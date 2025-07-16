import { LitElement, html, css } from 'lit'

/**
 * Stack element.
 *
 * @slot - default - This element has a slot
 */
export class Stack extends LitElement {
	static styles = css`
		:host {
			--a-stack-gap: var(--a-size-m);
			display: block;
		}

		.c-stack {
			display: flex;
			flex-direction: column;
			gap: var(--a-stack-gap);
		}
	`

	render() {
		return html`<div class="c-stack"><slot></slot></div>`
	}
}

customElements.define('a-stack', Stack)
