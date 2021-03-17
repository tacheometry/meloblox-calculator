import { Typography, Tooltip } from "@material-ui/core";
import getPublic from "../getPublic";

function IconWithText({ icon, children, tooltip }) {
	return (
		<Tooltip title={tooltip} placement="right">
			<Typography
				style={{ display: "inline-block", fontFamily: "Roboto" }}
			>
				<img
					src={getPublic(icon)}
					alt={tooltip}
					style={{
						width: "1em",
						height: "1em",
						display: "inline-block",
					}}
				/>{" "}
				{children}
			</Typography>
		</Tooltip>
	);
}

export default IconWithText;
