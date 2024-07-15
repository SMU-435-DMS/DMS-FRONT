import React from "react";
import { View, Text, TouchableOpacity, TextInput, Modal } from "react-native";
import styles from "../../../containers/SignUpScreenStyles";
import SearchAddress from "./SearchAddress";

const AddressInput = ({
  address,
  address2,
  setAddress2,
  modalVisible,
  handleAddressSearch,
  handleAddressSelect,
  setModalVisible,
}) => {
  return (
    <View>
      <Text>주소</Text>
      <TouchableOpacity
        style={styles.addressButton}
        onPress={handleAddressSearch}
      >
        <Text style={styles.addressButtonText}>주소 검색</Text>
      </TouchableOpacity>
      <Text style={styles.addressText}>{address}</Text>

      <Modal visible={modalVisible}>
        <View>
          <SearchAddress onSelectAddress={handleAddressSelect} />
        </View>
      </Modal>

      <TextInput
        style={styles.input}
        placeholder="상세 주소"
        placeholderTextColor="rgba(0, 0, 0, 0.2)"
        value={address2}
        onChangeText={setAddress2}
      />
    </View>
  );
};

export default AddressInput;
