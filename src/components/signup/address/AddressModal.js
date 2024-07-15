import React from "react";
import { View, Modal } from "react-native";
import SearchAddress from "./address/SearchAddress";

function AddressModal({ visible, onClose, onSelectAddress }) {
  return (
    <Modal visible={visible}>
      <View>
        <SearchAddress onSelectAddress={onSelectAddress} />
      </View>
    </Modal>
  );
}

export default AddressModal;
