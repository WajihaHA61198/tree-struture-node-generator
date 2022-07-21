import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";


type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (txt: string) => void;
};

const Node: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  // useState
  const [txt, setTxt] = useState("");

  return (
    // Modal for node exsertion
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Add Node</ModalHeader>
        <ModalCloseButton />
        {/* Body */}
        <ModalBody>
          <FormControl>
            <FormLabel>Node label</FormLabel>
            <Input
              value={txt}
              onChange={(event) => setTxt(event.target.value)}
            />
          </FormControl>
        </ModalBody>
        {/* button */}
        <ModalFooter>
          <Button
            color="blue.500"
            variant="solid"
            onClick={() => onSubmit(txt)}
            disabled={!txt}
          >
            +
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Node;