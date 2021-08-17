import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";

function useFirestore(collection, condition) {
	
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		let collectionRef = db.collection(collection).orderBy("createdAt");

		// condition
		/**
		 * {
		 *  fieldName: 'members',
		 * operator: 'array-contains',
		 * compareValue: 'ulvwzj7llvQtAsgeqJQzsBi03As1'
		 * }
		 */

		if (condition) {
			if (!condition.compareValue || !condition.compareValue.length) {
				setDocuments([]);
				return;
			}

			collectionRef = collectionRef.where(
				condition.fieldName,
				condition.operator,
				condition.compareValue
			);
		}

		const unsubscribe = collectionRef.onSnapshot((snapshot) => {
			const documents = snapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setDocuments(documents);
		});

		return unsubscribe;
	}, [collection, condition]);

	return documents;
}

export default useFirestore;
