import { LitElement, html, css } from 'lit'

/**
 * Stack element.
 *
 * @slot - This element has a slot
 */
export class Stack extends LitElement {
	static styles = css`
		:host {
			display: block;
		}

		.c-stack {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	`

	render() {
		return html`<div class="c-stack"><slot></slot></div>`
	}
}

customElements.define('a-stack', Stack)
