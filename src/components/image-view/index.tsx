import React, {FC} from 'react';
import ImageLoad from 'react-native-image-placeholder';

const ImageView: FC<ImageViewProps> = ({
	isShowActivity = true,
	source,
	placeholderStyle = {},
	placeholderSource,
	testID,
	...rest
}) => {
	return (
		<ImageLoad
			testID={testID}
			isShowActivity={isShowActivity}
			source={source || source.uri || placeholderSource}
			{...rest}
			placeholderStyle={placeholderStyle}
		/>
	);
};

export default ImageView;
