import React, { createContext, useContext, useMemo, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = createContext();

function AppProvider({ children }) {
	const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);

	const { uid } = useContext(AuthContext);
	console.log("uid", uid);
	/**
	 * room
	 * {
	 * 	name: 'roomname',
	 * 	descriptions: 'mo ta',
	 * 	members: [uid1, uid2, ...]
	 * }
	 */
	const roomsCondition = useMemo(() => {
		return {
			fieldName: "members",
			operator: "array-contains",
			compareValue: uid,
		};
	}, [uid]);

	const rooms = useFirestore("rooms", roomsCondition);

	console.log("room", rooms);

	return (
		<AppContext.Provider
			value={{ rooms, isAddRoomVisible, setIsAddRoomVisible }}
		>
			{children}
		</AppContext.Provider>
	);
}

export default AppProvider;
