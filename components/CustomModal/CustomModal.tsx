import { Children, cloneElement, isValidElement, type FC } from 'react';
import { Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const CustomModal: FC<ModalProps> = ({ isVisible, children, onClose }) => {
  const childrenWithProps = Children.map(children, child => {
    const newProps = { onClose };
    return isValidElement(child) ? cloneElement(child, newProps) : child;
  });

  return (
    <Modal visible={isVisible} animationType="slide" style={{ margin: 0 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>{childrenWithProps}</SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

export default CustomModal;
