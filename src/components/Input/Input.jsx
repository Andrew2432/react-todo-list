import React from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

function Input(props) {
	return (
		<div className="row">
			<div className={`col s12 m10 offset-m1`}>
				<form>
					<div className={`row`}>
						<div className={`col s8`}>
							<InputField
								type="text"
								placeholder="Ex. Call plumber."
								name="todoItem"
								value={props.value}
								onChange={props.onChange}
							/>
						</div>
						<div className={`col s4 center`}>
							<Button
								type="submit"
								name="submit"
								class="btn btn-medium white blue-text"
								innerHTML="Add"
								onClick={props.onClick}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Input;
