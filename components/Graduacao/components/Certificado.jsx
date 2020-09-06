import React from 'react';

const Certificado = ({ titulo, desc, id, empty = false }) => (
	<React.Fragment>
		<div class="card">
			<div class="card-header" id={'heading-' + id}>
				<h2 class="mb-0">
					{empty ? (
						<button disabled="true" class="btn">
							{titulo}
						</button>
					) : (
						<button
							class="btn btn-link"
							type="button"
							data-toggle="collapse"
							data-target={'#collapse-' + id}
							aria-expanded="false"
							aria-controls={'collapse-' + id}
						>
							{titulo}
						</button>
					)}
				</h2>
			</div>

			<div id={'collapse-' + id} class="collapse" aria-labelledby={'heading-' + id} data-parent="#accordion">
				<div class="card-body">{desc}</div>
			</div>
		</div>
	</React.Fragment>
);

export default Certificado;
