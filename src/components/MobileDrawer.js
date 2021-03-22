import { Link as RouterLink } from "react-router-dom";

import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import {
	Menu as MenuIcon,
	PlayCircleFilled,
	Info as InfoIcon,
} from "@material-ui/icons";

export default function MobileDrawer({ children, ...attributes }) {
	return (
		<Drawer {...attributes}>
			<List>
				<ListItem button component={RouterLink} to="/calculator">
					<ListItemIcon>
						<PlayCircleFilled />
					</ListItemIcon>
					<ListItemText>Calculator</ListItemText>
				</ListItem>
				<ListItem button component={RouterLink} to="/about">
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText>About</ListItemText>
				</ListItem>
			</List>
		</Drawer>
	);
}
