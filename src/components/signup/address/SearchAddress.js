import React from "react";
import Postcode from "@actbase/react-daum-postcode";

/**
 * 우편번호 검색 인터페이스를 표시하는 컴포넌트입니다.
 * @param {Object} props - 컴포넌트의 props
 * @param {Function} props.onSelectAddress - 주소가 선택됐을 때 호출되는 콜백 함수
 * @returns {JSX.Element} 컨테이너에 포함된 Postcode 컴포넌트
 */
const SearchAddress = ({ onSelectAddress }) => {
  return (
    <Postcode
      style={{ width: "100%", height: "100%", marginTop: 100 }}
      jsOptions={{ animation: true }}
      onSelected={onSelectAddress}
    />
  );
};

export default SearchAddress;
