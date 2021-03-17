import { Typography, Tooltip } from "@material-ui/core";
import getPublic from "../getPublic";

function IconWithText({ icon, text, tooltip }) {
	return (
		<span>
			<Tooltip title={tooltip} placement="right">
				<Typography
					style={{ display: "inline-block", fontFamily: "Roboto" }}
				>
					<img
						src={getPublic(icon)}
						alt="Copper"
						style={{
							width: "1em",
							height: "1em",
							display: "inline-block",
						}}
					/>
					<b>{text}</b>
				</Typography>
			</Tooltip>
		</span>
	);
}

export default IconWithText;
