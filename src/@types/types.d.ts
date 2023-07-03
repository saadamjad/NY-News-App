/** @format */

type StackNavigationProp =
	import('@react-navigation/stack').StackNavigationProp<
		allAnyTypes,
		allAnyTypes
	>;

type IPropsStyleSheet = import('react-native').StyleSheet;
type Component = import('react').Component;
type isTypeNumber = number;
type isTypeString = string;
type isTypeNull = null;
type isTypeBoolen = boolean;
type isTypeFunction = (value: isTypeNumber) => void;
type isTypeArray = Array<string>;
type isTypeArrayOfObjects = Array<string, isTypeObject>;
type isTypeUndefined = undefined;
type isTypeObject = Record<
	string,
	isTypeNumber,
	isTypeString,
	isTypeFunction,
	isTypeUndefined,
	isTypeBoolen
>;
type functionAndObjects = isTypeFunction | isTypeObject;
type isTypeNumberAndString = isTypeNumber | isTypeString;
type allAnyTypes =
	| isTypeObject
	| isTypeFunction
	| isTypeUndefined
	| isTypeString
	| isTypeNumber
	| isTypeArray
	| isTypeNull;


 interface IHeaderProps {
		headerText?: isTypeString;
		backgroundColor?: isTypeString;
		navigation?: StackNavigationProp;
		testID?: isTypeString;
		goBack?: boolean;
 }

 interface Product {
		title: isTypeString;
		navigation: StackNavigationProp;
		index?: number;
		abstract?: isTypeString;
		multimedia?: isTypeArray;
		subsection?: isTypeString;
		section?: isTypeString;
 }

 interface ProductCardProps extends INavigationProps {
		item: Product;
 }
 interface NewsDetailsProps extends INavigationProps {
		item?: Product;
		route?: isTypeObject;
 }
 interface ProductListProps {
		navigation: StackNavigationProp;
 }

 interface INavigationProps {
		navigation?: StackNavigationProp;
 }
 interface IPropSlider {
		data: isTypeArray;
 }

 interface OptionBarData {
		value: isTypeString;
		image: any;
		selected: boolean;
		callBack: any;
		id?: string;
 }

 interface ImageViewProps {
		isShowActivity?: boolean;
		source: any;
		placeholderStyle?: isTypeObject;
		placeholderSource?: isTypeObject;
		[key: isTypeString]: any;
 }

 interface IResponseData<T> {
		data?: T;
		statusMessage?: isTypeString;
		statusCode?: isTypeNumber;
		error?: boolean;
		statusText?: isTypeString;
 }

 interface IAction {
		type: isTypeString;
		payload?: allAnyTypes;
		searches?: allAnyTypes;
 }

 interface ProductImageProps {
		multimedia: isTypeArray | undefined;
		section: string | undefined;
		title: string | undefined;
 }
 interface FlatListIProps {
		index: number;
		item?: isTypeObject;
 }
 
 interface ISearchTextInputProps extends INavigationProps {
		testID?: string | undefined;
 }