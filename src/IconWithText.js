import { Typography, Tooltip } from "@material-ui/core";

function IconWithText({ icon, text, tooltip }) {
	return (
		<span>
			<Tooltip title={tooltip} placement="right">
				<Typography
					style={{ display: "inline-block", fontFamily: "Roboto" }}
				>
					<img
						src={icon}
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
