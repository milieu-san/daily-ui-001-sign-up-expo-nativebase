import { HStack, Modal, Spinner, Text, Center } from 'native-base';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

interface Props {
  isOpened: boolean,
  close: () => void
}

const ModalRedirectOAuth = (props: Props) => {
  const { isOpened, close } = props

  return (
    <Modal isOpen={isOpened} onClose={close} size="md">
      <Modal.Content>
        {/* TODO: remove later */}
        {/* TouchableWithoutFeedback below is just for debugging*/}
        <TouchableWithoutFeedback onPress={close}>
          <Center h="40px">
            <HStack justifyContent="center" space={1}>
              <Text color="orange.500">Redirecting...</Text>
              <Spinner color="orange.500"/>
            </HStack>
          </Center>
        </TouchableWithoutFeedback>
      </Modal.Content>
    </Modal>
  )
}

export default ModalRedirectOAuth
