import firebase, { firestore, storage } from './config';
import { v4 as uuidv4 } from 'uuid';

export const uploadVideoToStorage = ({
	video,
	title,
	username,
	description,
	chosenTags,
	updateProgress,
	onComplete,
}) => {
	try {
		const storageId = uuidv4();
		const submissionsRef = storage.ref(`youtubeSubmissions/${storageId}`);
		const uploadTask = submissionsRef.put(video, { username, title });

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				updateProgress(Math.round(progress));
			},
			(err) => {
				throw new Error(`createChallenge: ${err.toString()}`);
			},
			() => {
				uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					firestore
						.collection('youtubeSubmissions')
						.add({
							title,
							storageId,
							description,
							tags: chosenTags,
							video: downloadURL,
							createdAt: firebase.firestore.FieldValue.serverTimestamp(),
						})
						.then(() => setTimeout(() => onComplete(), 1000))
						.catch((err) => {
							throw new Error(`createChallenge: ${err.toString()}`);
						});
				});
			}
		);
	} catch (error) {
		throw new Error(`uploadVideoToStorage: ${error.toString()}`);
	}
};
