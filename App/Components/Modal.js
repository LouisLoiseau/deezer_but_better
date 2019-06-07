import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Styles from "./Styles/ModalStyles";
import { Header } from "../Components";

class CustomModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			query: "Eminem",
			data: [],
			headerTitle: "",
		};
		this.init = this.init.bind(this);
	}

	init({ data, headerTitle, query }) {
		this.setState({
			isVisible: true,
			data,
			headerTitle,
			query,
		});
	}

	render() {
		const { setRef } = this.props;
		const { headerTitle, query } = this.state;
		return (
			<Modal
				style={Styles.container}
				hasBackdrop={false}
				isVisible={this.state.isVisible}
				ref={ref => {
					if (ref) ref.init = this.init;
					if (setRef) setRef(ref);
				}}>
				<Header onBackPress={() => this.setState({ isVisible: false })} title={headerTitle} subTitle={query} />
			</Modal>
		)
	}
}

export default CustomModal;
