import { LitElement, css, html } from 'lit'

/**
 * Accordion element.
 *
 * @fires accordion-toggle - Fired when the accoridion is open/closed - Boolean value determines state
 * @slot - This element has a slot
 */
export class Accordion extends LitElement {
	static properties = {
		open: { type: Boolean },
	}

	// Define scoped styles right with your component, in plain CSS
	static styles = css`
		:host {
			display: block;
		}

		.accordion {
			margin: 0;
			padding: 0;
			border: 2px solid hsl(0deg 0% 52%);
			border-radius: 0.25rem;
		}

		.accordion h3 {
			margin: 0;
			padding: 0;
		}

		.accordion:focus-within {
			border-color: hsl(216deg 94% 43%);
		}

		.accordion:focus-within h3 {
			background-color: hsl(0deg 0% 97%);
		}

		.accordion > * + * {
			border-top: 1px solid hsl(0deg 0% 52%);
		}

		.accordion-trigger {
			background: none;
			color: hsl(0deg 0% 13%);
			display: block;
			font-size: 1rem;
			font-weight: normal;
			margin: 0;
			padding: 1em 1.5em;
			position: relative;
			text-align: left;
			width: 100%;
			outline: none;
		}

		.accordion-trigger:focus,
		.accordion-trigger:hover {
			background: hsl(216deg 94% 94%);
		}

		.accordion-trigger:focus {
			outline: 4px solid transparent;
		}

		.accordion > *:first-child .accordion-trigger,
		.accordion > *:first-child {
			border-radius: 5px 5px 0 0;
		}

		.accordion > *:last-child .accordion-trigger,
		.accordion > *:last-child {
			border-radius: 0 0 5px 5px;
		}

		button {
			border-style: none;
		}

		.accordion button::-moz-focus-inner {
			border: 0;
		}

		.accordion-title {
			display: block;
			pointer-events: none;
			border: transparent 2px solid;
			border-radius: 5px;
			margin-left: 2em;
			padding: 0.25em;
			outline: none;
		}

		.accordion-trigger:focus .accordion-title {
			border-color: hsl(216deg 94% 43%);
		}

		.accordion-icon {
			border: solid currentcolor;
			border-width: 0 2px 2px 0;
			height: 0.5rem;
			pointer-events: none;
			position: absolute;
			left: 2em;
			top: 50%;
			transform: translateY(-60%) rotate(45deg);
			width: 0.5rem;
		}

		.accordion-trigger:focus .accordion-icon,
		.accordion-trigger:hover .accordion-icon {
			border-color: hsl(216deg 94% 43%);
		}

		.accordion-trigger[aria-expanded='true'] .accordion-icon {
			transform: translateY(-50%) rotate(-135deg);
		}

		.accordion-panel {
			margin: 0;
			padding: 1em 1.5em;
		}

		/* For Edge bug https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4806035/ */
		.accordion-panel[hidden] {
			display: none;
		}
	`

	constructor() {
		super()
		// Declare reactive properties
		this.open = false
	}

	_onClick() {
		this.open = !this.open
		this.dispatchEvent(new CustomEvent('accordion-toggle'))
	}

	// Render the UI as a function of component state
	render() {
		return html`
			<div id="${this.id}" class="accordion">
				<h3>
					<button
						type="button"
						class="accordion-trigger"
						id="${this.id}-accordion"
						aria-expanded=${this.open}
						aria-controls="${this.id}-panel"
						@click="${this._onClick}"
					>
						<span class="accordion-title">
							<span class="accordion-icon"></span>
							<slot name="title"></slot>
						</span>
					</button>
				</h3>
				<div
					class="accordion-panel"
					id="${this.id}-panel"
					role="region"
					aria-labelledby="${this.id}-accordion"
					?hidden=${!this.open}
				>
					<slot></slot>
				</div>
			</div>
		`
	}
}

customElements.define('a-accordion', Accordion)
