import { LitElement, html, css } from 'lit'

/**
 * PECard element.
 *
 * @slot - default - This element has a slot
 */
export class PECard extends LitElement {
	static styles = css`
		:host {
			display: block;
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		}

		* {
			margin: 0;
		}

		.it-pe-card {
			display: flex;
			flex-direction: column;
		}

		.candidate {
			background-color: rgb(90 127 151);
			color: rgb(255 255 255);
			display: grid;
			grid-template-columns: minmax(20px, 8rem) 1fr;
			// gap: 1rem;
			max-width: 22rem;
			text-align: center;
		}

		.headshot {
			display: block;
			max-inline-size: 100%;
			block-size: auto;
		}

		h3 {
			font-size: 1.5rem;
		}

		.percentage {
			border-top: solid 3px rgb(255 255 255);
			font-size: 2.25rem;
			font-weight: 900;
		}

		.count {
			border-top: dashed 1px rgb(255 255 255);
			padding: 4px 0;
		}
	`

	render() {
		return html`<div class="it-pe-card">
			<h2>Presidential Election Component</h2>

			<div class="candidate">
				<div>
					<img src="https://www.irishtimes.com/resizer/v2/https%3A%2F%2Fauthor-service-images-prod-us-east-1.publishing.aws.arc.pub%2Firishtimes%2Fd3ce979c-10c3-4c9f-bbd3-cce2d0025805.png?smart=true&auth=642d5357c4b7c2df6798a667185c1a55b4e1f52090510039d1dfa8254dd4c3ab&width=720&height=720" class="headshot" />
				</div>
				<div>
					<h3>Marty McFly</h3>

					<p class="percentage">45.25%<p>
					<p class="count">568,293</p>
				</div>
			</div>
		<div>`
	}
}

customElements.define('it-pe-card', PECard)
